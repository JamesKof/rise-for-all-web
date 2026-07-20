import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const bodySchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(5).max(40),
  amount: z.number().min(1).max(1000000),
  frequency: z.enum(["once", "monthly"]),
  message: z.string().trim().max(500).optional().or(z.literal("")),
});

function jsonResponse(status: number, data: unknown) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export const Route = createFileRoute("/api/public/hubtel/initiate")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let raw: unknown;
        try {
          raw = await request.json();
        } catch {
          return jsonResponse(400, { error: "Invalid JSON" });
        }
        const parsed = bodySchema.safeParse(raw);
        if (!parsed.success) {
          return jsonResponse(400, { error: parsed.error.issues[0]?.message ?? "Invalid input" });
        }
        const input = parsed.data;

        const HUBTEL_API_ID = process.env.HUBTEL_API_ID;
        const HUBTEL_API_KEY = process.env.HUBTEL_API_KEY;
        const HUBTEL_MERCHANT_ACCOUNT = process.env.HUBTEL_MERCHANT_ACCOUNT_NUMBER;
        const SITE_URL = process.env.SITE_URL ?? new URL(request.url).origin;

        // Persist a pending donation record regardless of provider status
        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
        const clientReference = `uewg-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

        const { data: donation, error: dbError } = await supabaseAdmin
          .from("donations")
          .insert({
            donor_name: input.name,
            donor_email: input.email,
            donor_phone: input.phone,
            amount_ghs: input.amount,
            frequency: input.frequency,
            message: input.message || null,
            hubtel_client_reference: clientReference,
            status: "pending",
          })
          .select("id")
          .single();
        if (dbError) {
          console.error("[donation] db insert failed", dbError);
          return jsonResponse(500, { error: "Could not record donation" });
        }

        if (!HUBTEL_API_ID || !HUBTEL_API_KEY || !HUBTEL_MERCHANT_ACCOUNT) {
          console.warn("[donation] Hubtel keys not configured — recorded pending donation", donation?.id);
          return jsonResponse(503, {
            error: "Payment provider not configured",
            setupRequired: true,
          });
        }

        const basic = Buffer.from(`${HUBTEL_API_ID}:${HUBTEL_API_KEY}`).toString("base64");
        const hubtelBody = {
          totalAmount: Number(input.amount.toFixed(2)),
          description: `Donation to UEWG (${input.frequency})`,
          callbackUrl: `${SITE_URL}/api/public/hubtel/callback`,
          returnUrl: `${SITE_URL}/?donation=success&ref=${encodeURIComponent(clientReference)}`,
          cancellationUrl: `${SITE_URL}/?donation=cancelled&ref=${encodeURIComponent(clientReference)}`,
          merchantAccountNumber: HUBTEL_MERCHANT_ACCOUNT,
          clientReference,
          payeeName: input.name,
          payeeMobileNumber: input.phone,
          payeeEmail: input.email,
        };

        try {
          const hubtelRes = await fetch("https://payproxyapi.hubtel.com/items/initiate", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Basic ${basic}`,
            },
            body: JSON.stringify(hubtelBody),
          });
          const hubtelJson = (await hubtelRes.json()) as {
            status?: string;
            responseCode?: string;
            data?: { checkoutUrl?: string; checkoutId?: string; clientReference?: string };
            message?: string;
          };
          const checkoutUrl = hubtelJson?.data?.checkoutUrl;
          const checkoutId = hubtelJson?.data?.checkoutId;
          if (!hubtelRes.ok || !checkoutUrl) {
            console.error("[donation] Hubtel initiate failed", hubtelJson);
            return jsonResponse(502, {
              error: hubtelJson?.message ?? "Payment provider error",
            });
          }
          await supabaseAdmin
            .from("donations")
            .update({ hubtel_checkout_id: checkoutId ?? null, updated_at: new Date().toISOString() })
            .eq("id", donation.id);
          return jsonResponse(200, { checkoutUrl, clientReference });
        } catch (err) {
          console.error("[donation] Hubtel request threw", err);
          return jsonResponse(502, { error: "Could not reach payment provider" });
        }
      },
    },
  },
});