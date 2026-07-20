import { Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import team from "@/assets/team.jpeg.asset.json";
import motherChild from "@/assets/mother-child.jpeg.asset.json";
import brandedTee from "@/assets/branded-tee.jpeg.asset.json";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-br from-cream via-background to-secondary/60"
      />
      <div
        aria-hidden
        className="absolute -top-32 -right-32 -z-10 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -left-32 -z-10 h-96 w-96 rounded-full bg-gold/15 blur-3xl"
      />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/50 bg-gold/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Ghana-based NGO · Founded Nov 2024
          </span>
          <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.05] text-primary sm:text-6xl lg:text-7xl">
            Women,<br />
            <span className="italic text-plum">Rise For All.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/80">
            Unique Empowered Women Global (UEWG) uplifts women, girls, and
            children across Ghana through education, health advocacy,
            leadership development, and faith-rooted humanitarian outreach.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="#involved">
                <Heart className="mr-2 h-4 w-4" /> Donate Now
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/5">
              <a href="#involved">
                Partner With Us <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost" className="text-primary hover:bg-primary/5">
              <a href="#programs">Explore Our Work</a>
            </Button>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-gold/40 pt-6">
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Active members</dt>
              <dd className="mt-1 font-serif text-3xl font-semibold text-primary">10</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Orphanages served</dt>
              <dd className="mt-1 font-serif text-3xl font-semibold text-primary">3</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Outreach partners</dt>
              <dd className="mt-1 font-serif text-3xl font-semibold text-primary">4+</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl ring-4 ring-gold/40 shadow-2xl">
            <img
              src={team.url}
              alt="UEWG team members in branded shirts"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -left-6 hidden aspect-square w-40 overflow-hidden rounded-2xl ring-4 ring-background shadow-xl sm:block">
            <img src={motherChild.url} alt="UEWG volunteer with child" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -top-6 -right-4 hidden aspect-square w-36 overflow-hidden rounded-2xl ring-4 ring-background shadow-xl sm:block">
            <img src={brandedTee.url} alt="Volunteer in UEWG tee" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}