import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Programs } from "@/components/uewg/Programs";
import { Pillars } from "@/components/uewg/Pillars";
import { ArrowRight, Heart } from "lucide-react";

const SITE_URL = "https://rise-for-all-web.lovable.app";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Our Programs — Orphanage, Health, Faith & Outreach | UEWG" },
      {
        name: "description",
        content:
          "Explore UEWG's programs across Ghana: orphanage support, church and school outreach, women's health advocacy, and faith-rooted leadership development for girls and women.",
      },
      { property: "og:title", content: "UEWG Programs — Where We Serve" },
      {
        property: "og:description",
        content:
          "Orphanage visits, health advocacy, church and school outreach, faith and leadership — the four pillars of UEWG's work in Ghana.",
      },
      { property: "og:url", content: `${SITE_URL}/programs` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/programs` }],
  }),
  component: ProgramsPage,
});

function ProgramsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-gold/30 bg-gradient-to-br from-cream via-background to-secondary py-16 md:py-24">
        <div aria-hidden className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-medium uppercase tracking-widest text-gold-foreground/70">Our Programs</span>
          <h1 className="mt-4 font-serif text-4xl font-semibold text-primary sm:text-5xl md:text-6xl">
            Meeting people where they are.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-foreground/75 sm:text-lg">
            UEWG's work is grounded in presence &mdash; not one-off events.
            Across four connected programs, we walk alongside women, girls,
            and children in the homes, schools, churches, and communities
            they already call their own.
          </p>
        </div>
      </section>

      <Pillars />
      <Programs />

      <section className="bg-secondary/40 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-primary sm:text-4xl">How our programs work together</h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-foreground/80">
            <p>
              <strong className="text-primary">Orphanage support</strong> is
              where UEWG's rhythm begins. Every visit &mdash; whether to
              Savior Children Orphanage in Kasoa, The Potter's Village in
              Dodowa, or Teshie Children's Home &mdash; brings needed
              supplies, but more importantly, familiar faces. Children come
              to expect us. Caregivers come to trust us. That trust is the
              soil everything else grows in.
            </p>
            <p>
              <strong className="text-primary">Church and school outreach</strong>
              extends that presence into daily community life. We speak in
              services at Assemblies of God Transformational Centre in
              Nungua, Presbyterian Church at Joma, and Throne Room
              International in Kasoa. We serve the chaplaincy at Labone
              Senior High School &mdash; mentoring students, praying with
              staff, and creating safe conversations for girls navigating
              adolescence.
            </p>
            <p>
              <strong className="text-primary">Health advocacy</strong> turns
              those safe conversations into practical education. We hold
              sessions on menstrual hygiene management so no girl misses
              school because of her period. We run awareness on breast
              cancer prevention, pregnancy and maternal health, and other
              issues women are rarely given clear information about.
            </p>
            <p>
              <strong className="text-primary">Faith and leadership</strong> is
              the long game. Through Bible distribution, mentorship circles,
              and discipleship gatherings, we invest in the character and
              calling of the next generation of women leaders &mdash;
              equipping them not just to rise, but to reach back and lift
              others.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/involved"><Heart className="mr-2 h-4 w-4" /> Support a program</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/5">
              <Link to="/impact">See our impact <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}