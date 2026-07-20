import { useState } from "react";
import { MapPin, Mail, Facebook, Instagram, Twitter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-16 lg:px-8">
        <div>
          <span className="text-xs font-medium uppercase tracking-widest text-gold-foreground/70">
            Contact
          </span>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-primary sm:text-5xl">
            Let&rsquo;s build something beautiful together.
          </h2>
          <p className="mt-4 text-base text-foreground/70">
            Reach out for partnership, prayer, media, or to say hello. We&rsquo;d
            love to hear from you.
          </p>

          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <MapPin className="h-4 w-4" />
              </span>
              <div>
                <div className="font-semibold text-primary">Based in Ghana</div>
                <div className="text-foreground/70">Serving communities across Greater Accra & beyond.</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <Mail className="h-4 w-4" />
              </span>
              <div>
                <div className="font-semibold text-primary">Email</div>
                <div className="text-foreground/70">Use the form &mdash; we&rsquo;ll get back within a few days.</div>
              </div>
            </li>
          </ul>

          <div className="mt-8">
            <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Follow us</div>
            <div className="mt-3 flex gap-3">
              {[
                { Icon: Facebook, label: "Facebook" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Twitter, label: "Twitter" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-primary/20 text-primary transition hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <NewsletterForm />
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

function ContactForm() {
  const [loading, setLoading] = useState(false);
  return (
    <form
      className="rounded-3xl border border-border bg-card p-7 shadow-sm sm:p-9"
      onSubmit={(e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          (e.currentTarget as HTMLFormElement).reset();
          toast.success("Message sent!", { description: "We'll be in touch soon." });
        }, 600);
      }}
    >
      <h3 className="font-serif text-2xl font-semibold text-primary">Send us a message</h3>
      <div className="mt-6 space-y-5">
        <div className="space-y-1.5">
          <Label htmlFor="c-name">Name</Label>
          <Input id="c-name" name="name" required placeholder="Your full name" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="c-email">Email</Label>
          <Input id="c-email" name="email" type="email" required placeholder="you@example.com" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="c-message">Message</Label>
          <Textarea id="c-message" name="message" required rows={5} placeholder="How can we serve you?" />
        </div>
        <Button type="submit" disabled={loading} size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
          {loading ? "Sending…" : (<><Send className="mr-2 h-4 w-4" /> Send message</>)}
        </Button>
      </div>
    </form>
  );
}

function NewsletterForm() {
  return (
    <form
      className="mt-10 rounded-2xl border border-gold/40 bg-background p-5"
      onSubmit={(e) => {
        e.preventDefault();
        (e.currentTarget as HTMLFormElement).reset();
        toast.success("You're subscribed!");
      }}
    >
      <div className="font-serif text-lg font-semibold text-primary">Newsletter</div>
      <p className="mt-1 text-xs text-muted-foreground">
        Occasional updates on outreach, events, and impact stories.
      </p>
      <div className="mt-3 flex flex-col gap-2 sm:flex-row">
        <Input type="email" required placeholder="you@example.com" className="bg-background" />
        <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
          Subscribe
        </Button>
      </div>
    </form>
  );
}