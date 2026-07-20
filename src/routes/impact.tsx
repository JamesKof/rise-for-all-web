import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Gallery } from "@/components/uewg/Gallery";
import { Stats } from "@/components/uewg/Stats";
import { ArrowRight, Heart } from "lucide-react";

const SITE_URL = "https://rise-for-all-web.lovable.app";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Our Impact — Stories, Timeline & Gallery | UEWG" },
      {
        name: "description",
        content:
          "See the impact of UEWG across Ghana: photo gallery of outreach events, orphanage visits, health advocacy, and a growing timeline of milestones since November 2024.",
      },
      { property: "og:title", content: "UEWG Impact — Real Hands, Real Hope" },
      {
        property: "og:description",
        content:
          "Stories, photos, and a growing timeline of UEWG's work with women, girls, and children in Ghana.",
      },
      { property: "og:url", content: `${SITE_URL}/impact` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/impact` }],
  }),
  component: ImpactPage,
});

function ImpactPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-gold/30 bg-gradient-to-br from-cream via-background to-secondary py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-medium uppercase tracking-widest text-gold-foreground/70">Our Impact</span>
          <h1 className="mt-4 font-serif text-4xl font-semibold text-primary sm:text-5xl md:text-6xl">
            Every visit is a story. Every story is a life.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-foreground/75 sm:text-lg">
            From our first orphanage visit in November 2024 to school
            chaplaincy sessions, health advocacy days, and church outreach
            &mdash; here is the record of a movement that is only just
            beginning.
          </p>
        </div>
      </section>

      <Stats />
      <Gallery />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-primary sm:text-4xl">
            Be part of the next chapter.
          </h2>
          <p className="mt-4 text-base text-foreground/70">
            The stories on this page were made possible by volunteers,
            partners, and donors who chose to show up. Join them.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/involved"><Heart className="mr-2 h-4 w-4" /> Get Involved</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/5">
              <Link to="/programs">Our programs <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}