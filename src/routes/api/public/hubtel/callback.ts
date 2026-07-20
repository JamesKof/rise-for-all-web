import { createFileRoute } from "@tanstack/react-router";

// Hubtel posts a JSON body when a checkout completes/fails.
export const Route = createFileRoute("/api/public/hubtel/callback")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let payload: {
          ResponseCode?: string;
          Status?: string;
          Data?: {
            ClientReference?: string;
            CheckoutId?: string;
            Status?: string;
            Amount?: number;
          };
        } = {};
        try {
          payload = await request.json();
        } catch {
          return new Response("Invalid payload", { status: 400 });
        }

        const clientReference = payload?.Data?.ClientReference;
        const status =
          payload?.Data?.Status ??
          (payload?.ResponseCode === "0000" ? "Success" : "Failed");

        if (!clientReference) {
          console.warn("[hubtel-callback] no client reference in payload", payload);
          return new Response("ok");
        }

        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
        const normalized = status.toLowerCase().includes("success") ? "paid" : "failed";
        const { error } = await supabaseAdmin
          .from("donations")
          .update({
            status: normalized,
            hubtel_checkout_id: payload?.Data?.CheckoutId ?? undefined,
            updated_at: new Date().toISOString(),
          })
          .eq("hubtel_client_reference", clientReference);
        if (error) console.error("[hubtel-callback] update failed", error);

        return new Response("ok");
      },
    },
  },
});