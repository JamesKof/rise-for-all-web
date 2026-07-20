import { useState } from "react";
import { Heart, Handshake, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export function Involved() {
  return (
    <section id="involved" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-gold-foreground/70">
            Get Involved
          </span>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-primary sm:text-5xl">
            Rise with us.
          </h2>
          <p className="mt-4 text-base text-foreground/70">
            Volunteer your time, give generously, or partner with UEWG as a
            church, school, or organization.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <VolunteerCard />
          <DonateCard />
          <PartnerCard />
        </div>
      </div>
    </section>
  );
}

function VolunteerCard() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="rounded-3xl border border-border bg-card p-7 shadow-sm">
      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground ring-2 ring-gold/50">
        <Users className="h-5 w-5" />
      </div>
      <h3 className="mt-5 font-serif text-2xl font-semibold text-primary">Volunteer</h3>
      <p className="mt-1 text-sm text-foreground/70">
        Join our network of women serving communities across Ghana.
      </p>
      <form
        className="mt-5 space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            (e.currentTarget as HTMLFormElement).reset();
            toast.success("Thank you! We'll be in touch soon.");
          }, 600);
        }}
      >
        <div className="space-y-1.5">
          <Label htmlFor="v-name">Full name</Label>
          <Input id="v-name" name="name" required placeholder="Ama Mensah" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="v-email">Email</Label>
          <Input id="v-email" name="email" type="email" required placeholder="you@example.com" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="v-phone">Phone</Label>
          <Input id="v-phone" name="phone" type="tel" required placeholder="+233 ..." />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="v-interest">Area of interest</Label>
          <Input id="v-interest" name="interest" placeholder="Orphanage visits, health advocacy…" />
        </div>
        <Button type="submit" disabled={loading} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
          {loading ? "Sending…" : "Sign up to volunteer"}
        </Button>
      </form>
    </div>
  );
}

function DonateCard() {
  return (
    <div className="flex flex-col rounded-3xl border-2 border-gold/60 bg-gradient-to-br from-primary to-plum p-7 text-primary-foreground shadow-xl">
      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gold text-gold-foreground">
        <Heart className="h-5 w-5" />
      </div>
      <h3 className="mt-5 font-serif text-2xl font-semibold">Donate</h3>
      <p className="mt-1 text-sm text-primary-foreground/80">
        Your gift funds Bibles, school supplies, health outreach, and
        orphanage visits.
      </p>
      <ul className="mt-5 space-y-2 text-sm">
        <li className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold" /> One-time contributions</li>
        <li className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold" /> Monthly partnership</li>
        <li className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold" /> In-kind donations (books, hygiene, food)</li>
      </ul>
      <div className="mt-auto pt-6">
        <Button
          size="lg"
          className="w-full bg-gold text-gold-foreground hover:bg-gold/90"
          onClick={() =>
            toast("Donations coming soon", {
              description: "Mobile money & card giving will be enabled shortly. Reach out via Contact to give today.",
            })
          }
        >
          <Heart className="mr-2 h-4 w-4" /> Give Now
        </Button>
        <p className="mt-3 text-center text-xs text-primary-foreground/70">
          Mobile money & card giving coming soon.
        </p>
      </div>
    </div>
  );
}

function PartnerCard() {
  return (
    <div className="rounded-3xl border border-border bg-card p-7 shadow-sm">
      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground ring-2 ring-gold/50">
        <Handshake className="h-5 w-5" />
      </div>
      <h3 className="mt-5 font-serif text-2xl font-semibold text-primary">Partner With Us</h3>
      <p className="mt-1 text-sm text-foreground/70">
        For churches, schools, corporates, and sponsors who share our
        mission.
      </p>
      <ul className="mt-5 space-y-3 text-sm text-foreground/85">
        <li className="rounded-xl bg-secondary/60 px-4 py-3">
          <span className="font-semibold text-primary">Churches</span> — host outreach and mentorship gatherings.
        </li>
        <li className="rounded-xl bg-secondary/60 px-4 py-3">
          <span className="font-semibold text-primary">Schools</span> — invite our health & leadership programs.
        </li>
        <li className="rounded-xl bg-secondary/60 px-4 py-3">
          <span className="font-semibold text-primary">Corporates</span> — sponsor initiatives and outreach drives.
        </li>
      </ul>
      <Button asChild variant="outline" className="mt-6 w-full border-primary/30 text-primary hover:bg-primary/5">
        <a href="#contact">Start a conversation</a>
      </Button>
    </div>
  );
}