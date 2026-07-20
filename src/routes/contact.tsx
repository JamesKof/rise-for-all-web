import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/uewg/Contact";

const SITE_URL = "https://rise-for-all-web.lovable.app";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact UEWG — Reach Lady Portia & the Team" },
      {
        name: "description",
        content:
          "Get in touch with Unique Empowered Women Global. Call or WhatsApp 0556453591, send a message, or subscribe to our newsletter for updates from Ghana.",
      },
      { property: "og:title", content: "Contact UEWG" },
      {
        property: "og:description",
        content:
          "Reach the UEWG team by phone, WhatsApp, email, or our contact form.",
      },
      { property: "og:url", content: `${SITE_URL}/contact` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/contact` }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-gold/30 bg-gradient-to-br from-cream via-background to-secondary py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-medium uppercase tracking-widest text-gold-foreground/70">Contact</span>
          <h1 className="mt-4 font-serif text-4xl font-semibold text-primary sm:text-5xl md:text-6xl">
            We'd love to hear from you.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-foreground/75 sm:text-lg">
            Questions, partnerships, prayer requests, or media enquiries
            &mdash; reach the UEWG team directly. Lady Portia and the team
            personally read every message.
          </p>
        </div>
      </section>

      <Contact />
    </>
  );
}