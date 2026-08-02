import { Heart, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import heroAdvocacy from "@/assets/img/hero-advocacy.jpeg";
import motherChild from "@/assets/img/mother-child.jpeg";
import brandedTee from "@/assets/img/branded-tee.jpeg";
import kidsDonation from "@/assets/img/kids-donation.jpeg";
import outreachBooks from "@/assets/img/outreach-books.jpeg";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-plum text-primary-foreground">
      <div
        aria-hidden
        className="absolute -left-40 top-1/4 h-[28rem] w-[28rem] rounded-full bg-primary/40 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -right-32 -top-24 h-[26rem] w-[26rem] rounded-full bg-gold/20 blur-3xl"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-20 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-10 lg:px-8 lg:py-28">
        <div className="animate-fade-in">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-gold">
            Ghana-based NGO · Founded Nov 2024
          </span>

          <h1 className="mt-7 font-serif text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
            <span className="relative italic text-gold">
              Together,
              <span
                aria-hidden
                className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-gold/70"
              />
            </span>{" "}
            We Can
            <br />
            Rise For All
          </h1>

          <p className="mt-7 max-w-lg text-base leading-relaxed text-primary-foreground/75">
            Unique Empowered Women Global uplifts women, girls, and children
            across Ghana through education, health advocacy, leadership
            development, and faith-rooted humanitarian outreach. Every small
            act of love builds a rising community.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="bg-gold text-gold-foreground shadow-lg shadow-gold/20 transition-all hover:-translate-y-0.5 hover:bg-gold/90"
            >
              <Link to="/involved">
                <Heart className="mr-2 h-4 w-4" /> Donate Now
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/35 bg-transparent text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link to="/involved">
                Volunteer <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative animate-scale-in">
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 -z-0 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/50 blur-2xl"
          />
          <div className="relative grid grid-cols-2 gap-3 sm:gap-4">
            <figure className="group overflow-hidden rounded-t-[8rem] rounded-b-3xl ring-1 ring-gold/30">
              <img
                src={motherChild}
                alt="UEWG volunteer holding a child at an outreach"
                className="h-52 w-full object-cover transition duration-700 group-hover:scale-110 sm:h-64"
              />
            </figure>
            <figure className="group mt-10 overflow-hidden rounded-3xl ring-1 ring-gold/30">
              <img
                src={kidsDonation}
                alt="Children receiving donations from UEWG"
                className="h-52 w-full object-cover transition duration-700 group-hover:scale-110 sm:h-64"
              />
            </figure>
            <figure className="group -mt-4 overflow-hidden rounded-3xl ring-1 ring-gold/30">
              <img
                src={outreachBooks}
                alt="Volunteers distributing books"
                className="h-40 w-full object-cover transition duration-700 group-hover:scale-110 sm:h-48"
              />
            </figure>
            <figure className="group overflow-hidden rounded-b-[8rem] rounded-t-3xl ring-1 ring-gold/30">
              <img
                src={brandedTee}
                alt="Volunteer in a UEWG branded tee"
                className="h-40 w-full object-cover object-top transition duration-700 group-hover:scale-110 sm:h-48"
              />
            </figure>

            <figure className="absolute left-1/2 top-1/2 hidden aspect-[4/5] w-40 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl ring-4 ring-plum shadow-2xl sm:block">
              <img
                src={heroAdvocacy}
                alt="Lady Portia advocating for girls' menstrual health"
                className="h-full w-full object-cover object-[center_20%]"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
