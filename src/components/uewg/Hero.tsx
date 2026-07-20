import { Heart, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import team from "@/assets/img/team.jpeg";
import motherChild from "@/assets/img/mother-child.jpeg";
import brandedTee from "@/assets/img/branded-tee.jpeg";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,var(--cream),transparent_55%),radial-gradient(ellipse_at_bottom_right,color-mix(in_oklab,var(--gold)_25%,transparent),transparent_55%),linear-gradient(180deg,var(--background),var(--secondary))]"
      />
      <div
        aria-hidden
        className="absolute -top-32 -right-32 -z-10 h-96 w-96 rounded-full bg-primary/15 blur-3xl animate-pulse"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -left-32 -z-10 h-96 w-96 rounded-full bg-gold/25 blur-3xl animate-pulse [animation-delay:1.5s]"
      />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
        <div className="flex flex-col justify-center animate-fade-in">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/50 bg-gold/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary shadow-sm">
            <Sparkles className="h-3 w-3 text-gold" />
            Ghana-based NGO · Founded Nov 2024
          </span>
          <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.05] text-primary sm:text-6xl lg:text-7xl">
            Women,<br />
            <span className="italic bg-gradient-to-r from-plum via-primary to-gold bg-clip-text text-transparent">Rise For All.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/80">
            Unique Empowered Women Global (UEWG) uplifts women, girls, and
            children across Ghana through education, health advocacy,
            leadership development, and faith-rooted humanitarian outreach.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-primary text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30">
              <a href="#involved">
                <Heart className="mr-2 h-4 w-4" /> Donate Now
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary/30 text-primary transition-all hover:bg-primary/5 hover:-translate-y-0.5">
              <a href="#involved">
                Partner With Us <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost" className="text-primary hover:bg-primary/5">
              <a href="#programs" className="story-link">Explore Our Work</a>
            </Button>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-gold/40 pt-6">
            <div className="animate-fade-in [animation-delay:200ms]">
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Active members</dt>
              <dd className="mt-1 font-serif text-3xl font-semibold text-primary">10</dd>
            </div>
            <div className="animate-fade-in [animation-delay:350ms]">
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Orphanages served</dt>
              <dd className="mt-1 font-serif text-3xl font-semibold text-primary">3</dd>
            </div>
            <div className="animate-fade-in [animation-delay:500ms]">
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Outreach partners</dt>
              <dd className="mt-1 font-serif text-3xl font-semibold text-primary">4+</dd>
            </div>
          </dl>
        </div>

        <div className="relative animate-scale-in">
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-gold/40 via-primary/20 to-plum/40 blur-2xl"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] ring-1 ring-gold/40 shadow-2xl">
            <img
              src={team}
              alt="UEWG team members in branded shirts"
              className="h-full w-full object-cover object-top transition-transform duration-[8s] ease-out hover:scale-105"
            />
            <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-plum/40 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 text-primary-foreground">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">United in purpose</div>
                <div className="font-serif text-lg leading-tight">Sisters serving communities across Ghana</div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-8 -left-6 hidden aspect-square w-40 overflow-hidden rounded-2xl ring-4 ring-background shadow-xl sm:block animate-fade-in [animation-delay:400ms] hover-scale">
            <img src={motherChild} alt="UEWG volunteer with child" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -top-6 -right-4 hidden aspect-square w-36 overflow-hidden rounded-2xl ring-4 ring-background shadow-xl sm:block animate-fade-in [animation-delay:600ms] hover-scale">
            <img src={brandedTee} alt="Volunteer in UEWG tee" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -right-2 top-1/2 hidden -translate-y-1/2 rounded-full bg-background/95 px-4 py-2 shadow-lg ring-1 ring-gold/40 backdrop-blur md:flex md:items-center md:gap-2 animate-fade-in [animation-delay:800ms]">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-medium text-primary">Serving since 2024</span>
          </div>
        </div>
      </div>
    </section>
  );
}