import { useState } from "react";
import { MapPin, Mail, Phone, Facebook, Instagram, Twitter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { contactSchema, newsletterSchema, submitContact, subscribeNewsletter } from "@/lib/submissions";

const PRIMARY_PHONE = "0556453591";
const PRIMARY_PHONE_INTL = "+233556453591";

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
                <Phone className="h-4 w-4" />
              </span>
              <div>
                <div className="font-semibold text-primary">Call / WhatsApp</div>
                <a
                  href={`tel:${PRIMARY_PHONE_INTL}`}
                  className="text-foreground/80 hover:text-primary"
                >
                  {PRIMARY_PHONE}
                </a>
                {" · "}
                <a
                  href={`https://wa.me/${PRIMARY_PHONE_INTL.replace("+", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 hover:text-primary"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </li>
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
                <a
                  href="mailto:uniqueempoweredwomenglobal.gh@gmail.com"
                  className="text-foreground/70 underline-offset-4 hover:text-primary hover:underline"
                >
                  uniqueempoweredwomenglobal.gh@gmail.com
                </a>
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
      onSubmit={async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const fd = new FormData(form);
        const parsed = contactSchema.safeParse({
          name: String(fd.get("name") ?? ""),
          email: String(fd.get("email") ?? ""),
          message: String(fd.get("message") ?? ""),
        });
        if (!parsed.success) {
          toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
          return;
        }
        setLoading(true);
        try {
          await submitContact(parsed.data);
          form.reset();
          toast.success("Message sent!", { description: "We'll be in touch soon." });
        } catch (err) {
          toast.error("Could not send your message", {
            description: err instanceof Error ? err.message : "Please try again.",
          });
        } finally {
          setLoading(false);
        }
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
  const [loading, setLoading] = useState(false);
  return (
    <form
      className="mt-10 rounded-2xl border border-gold/40 bg-background p-5"
      onSubmit={async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const fd = new FormData(form);
        const parsed = newsletterSchema.safeParse({ email: String(fd.get("email") ?? "") });
        if (!parsed.success) {
          toast.error(parsed.error.issues[0]?.message ?? "Enter a valid email");
          return;
        }
        setLoading(true);
        try {
          await subscribeNewsletter(parsed.data);
          form.reset();
          toast.success("You're subscribed!");
        } catch (err) {
          toast.error("Could not subscribe", {
            description: err instanceof Error ? err.message : "Please try again.",
          });
        } finally {
          setLoading(false);
        }
      }}
    >
      <div className="font-serif text-lg font-semibold text-primary">Newsletter</div>
      <p className="mt-1 text-xs text-muted-foreground">
        Occasional updates on outreach, events, and impact stories.
      </p>
      <div className="mt-3 flex flex-col gap-2 sm:flex-row">
        <Input name="email" type="email" required placeholder="you@example.com" className="bg-background" />
        <Button type="submit" disabled={loading} className="bg-primary text-primary-foreground hover:bg-primary/90">
          {loading ? "Subscribing…" : "Subscribe"}
        </Button>
      </div>
    </form>
  );
}