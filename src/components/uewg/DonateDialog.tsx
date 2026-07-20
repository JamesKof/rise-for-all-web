import { useState, type ReactNode } from "react";
import { Heart } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { donationSchema } from "@/lib/submissions";

const PRESETS = [50, 100, 250, 500];

export function DonateDialog({ trigger }: { trigger: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState<number>(100);
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-primary">Give to UEWG</DialogTitle>
          <DialogDescription>
            Secure checkout via Hubtel (Mobile Money & card). Amounts in Ghanaian Cedis (GHS).
          </DialogDescription>
        </DialogHeader>

        <form
          className="space-y-4"
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const fd = new FormData(form);
            const parsed = donationSchema.safeParse({
              name: String(fd.get("name") ?? ""),
              email: String(fd.get("email") ?? ""),
              phone: String(fd.get("phone") ?? ""),
              amount,
              frequency,
              message: String(fd.get("message") ?? ""),
            });
            if (!parsed.success) {
              toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
              return;
            }
            setLoading(true);
            try {
              const res = await fetch("/api/public/hubtel/initiate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(parsed.data),
              });
              const data = (await res.json()) as {
                checkoutUrl?: string;
                error?: string;
                setupRequired?: boolean;
              };
              if (!res.ok || !data.checkoutUrl) {
                if (data.setupRequired) {
                  toast("Donations are being configured", {
                    description:
                      "Hubtel keys are not yet set. Please call 0556453591 to give today — online giving is coming shortly.",
                  });
                } else {
                  toast.error("Could not start checkout", {
                    description: data.error ?? "Please try again in a moment.",
                  });
                }
                return;
              }
              window.location.href = data.checkoutUrl;
            } catch (err) {
              toast.error("Could not start checkout", {
                description: err instanceof Error ? err.message : "Network error",
              });
            } finally {
              setLoading(false);
            }
          }}
        >
          <div className="space-y-2">
            <Label>Amount (GHS)</Label>
            <div className="flex flex-wrap gap-2">
              {PRESETS.map((p) => (
                <button
                  type="button"
                  key={p}
                  onClick={() => setAmount(p)}
                  className={`rounded-full border px-4 py-1.5 text-sm transition ${
                    amount === p
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background hover:border-primary/40"
                  }`}
                >
                  {p}
                </button>
              ))}
              <Input
                type="number"
                min={1}
                step={1}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-28"
                aria-label="Custom amount"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Frequency</Label>
            <div className="flex gap-2">
              {(["once", "monthly"] as const).map((f) => (
                <button
                  type="button"
                  key={f}
                  onClick={() => setFrequency(f)}
                  className={`flex-1 rounded-lg border px-3 py-2 text-sm capitalize transition ${
                    frequency === f
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-border hover:border-primary/40"
                  }`}
                >
                  {f === "once" ? "One-time" : "Monthly"}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="d-name">Name</Label>
              <Input id="d-name" name="name" required placeholder="Full name" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="d-phone">Phone</Label>
              <Input id="d-phone" name="phone" type="tel" required placeholder="0244…" />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="d-email">Email</Label>
            <Input id="d-email" name="email" type="email" required placeholder="you@example.com" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="d-message">Message (optional)</Label>
            <Textarea id="d-message" name="message" rows={2} placeholder="Dedicate this gift…" />
          </div>

          <DialogFooter>
            <Button
              type="submit"
              disabled={loading}
              size="lg"
              className="w-full bg-gold text-gold-foreground hover:bg-gold/90"
            >
              <Heart className="mr-2 h-4 w-4" />
              {loading ? "Starting checkout…" : `Give GHS ${amount || 0}`}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}