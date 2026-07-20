import { createFileRoute } from "@tanstack/react-router";
import { Involved } from "@/components/uewg/Involved";

const SITE_URL = "https://rise-for-all-web.lovable.app";

export const Route = createFileRoute("/involved")({
  head: () => ({
    meta: [
      { title: "Get Involved — Volunteer, Donate & Partner | UEWG" },
      {
        name: "description",
        content:
          "Join Unique Empowered Women Global: volunteer with our outreach team, donate securely via Hubtel, or partner with UEWG as a church, school, or company across Ghana.",
      },
      { property: "og:title", content: "Get Involved with UEWG" },
      {
        property: "og:description",
        content:
          "Volunteer, donate, or partner with UEWG to empower women, girls, and children across Ghana.",
      },
      { property: "og:url", content: `${SITE_URL}/involved` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/involved` }],
  }),
  component: InvolvedPage,
});

function InvolvedPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-gold/30 bg-gradient-to-br from-cream via-background to-secondary py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-medium uppercase tracking-widest text-gold-foreground/70">Get Involved</span>
          <h1 className="mt-4 font-serif text-4xl font-semibold text-primary sm:text-5xl md:text-6xl">
            Rise with us. Lift another.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-foreground/75 sm:text-lg">
            Whether you have an hour a month, a skill to share, resources to
            give, or a community ready to partner &mdash; there is a real
            place for you in this work. Choose how you want to rise.
          </p>
        </div>
      </section>

      <Involved />
    </>
  );
}