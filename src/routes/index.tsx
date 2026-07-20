import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Hero } from "@/components/uewg/Hero";
import { Stats } from "@/components/uewg/Stats";
import { Pillars } from "@/components/uewg/Pillars";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, BookOpen, HeartPulse, Church, Home as HomeIcon } from "lucide-react";
import outreachBooks from "@/assets/img/outreach-books.jpeg";
import kidsDonation from "@/assets/img/kids-donation.jpeg";
import healthAdvocacy from "@/assets/img/health-advocacy.jpeg";

const SITE_URL = "https://rise-for-all-web.lovable.app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "UEWG — Unique Empowered Women Global | Women, Rise For All" },
      {
        name: "description",
        content:
          "UEWG is a Ghana-based NGO empowering women, girls, and children through faith, education, health, leadership, and community outreach. Volunteer, partner, or give today.",
      },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: `${SITE_URL}/favicon.jpeg` },
      { name: "twitter:image", content: `${SITE_URL}/favicon.jpeg` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "NGO",
          name: "Unique Empowered Women Global",
          alternateName: "UEWG",
          slogan: "Women, Rise For All",
          foundingDate: "2024-11",
          founder: { "@type": "Person", name: "Portia Baanim" },
          areaServed: "Ghana",
          url: SITE_URL,
          logo: `${SITE_URL}/favicon.jpeg`,
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+233556453591",
            contactType: "customer service",
            areaServed: "GH",
            availableLanguage: ["English"],
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Stats />
      <Pillars />
      <ProgramsTeaser />
      <ImpactTeaser />
      <ClosingCta />
    </>
  );
}

const teasers = [
  {
    icon: HomeIcon,
    title: "Orphanage Support",
    body: "Regular visits, donations, and love for children at three homes across Ghana.",
    image: kidsDonation,
  },
  {
    icon: Church,
    title: "Church & School Outreach",
    body: "Speaking, mentoring, and serving with faith communities and school chaplaincies.",
    image: outreachBooks,
  },
  {
    icon: HeartPulse,
    title: "Health Advocacy",
    body: "Awareness on menstrual hygiene, maternal health, and breast cancer prevention.",
    image: healthAdvocacy,
  },
  {
    icon: BookOpen,
    title: "Faith & Leadership",
    body: "Bible distribution, mentorship, and raising the next generation of women leaders.",
    image: outreachBooks,
  },
] as const;

function ProgramsTeaser() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-gold-foreground/70">
            What we do
          </span>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-primary sm:text-5xl">
            Four callings. One rising movement.
          </h2>
          <p className="mt-4 text-base text-foreground/70">
            UEWG serves the whole person &mdash; body, mind, and spirit &mdash;
            through four connected programs woven into daily community life.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teasers.map(({ icon: Icon, title, body, image }) => (
            <article key={title} className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={image} alt={title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gold/20 text-primary ring-1 ring-gold/50">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="mt-4 font-serif text-xl font-semibold text-primary">{title}</h3>
                <p className="mt-2 flex-1 text-sm text-foreground/70">{body}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/5">
            <Link to="/programs">Explore all programs <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function ImpactTeaser() {
  return (
    <section className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="grid grid-cols-2 gap-3">
          <img src={outreachBooks} alt="Bible distribution" className="aspect-square rounded-2xl object-cover shadow-sm" />
          <img src={kidsDonation} alt="Donation drive" className="aspect-square rounded-2xl object-cover shadow-sm" />
          <img src={healthAdvocacy} alt="Menstrual health advocacy" className="col-span-2 aspect-[16/9] rounded-2xl object-cover shadow-sm" />
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-xs font-medium uppercase tracking-widest text-gold-foreground/70">Our Impact</span>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-primary sm:text-5xl">
            Real hands. Real homes. Real hope.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/80">
            Since November 2024, UEWG has stepped into orphanage homes, school
            assemblies, church halls, and community grounds &mdash; showing up
            with Bibles, hygiene kits, hot meals, honest conversations, and
            long hugs. Every visit is a small rebellion against silence and
            neglect.
          </p>
          <p className="mt-3 text-base leading-relaxed text-foreground/70">
            See the moments, the milestones, and the growing timeline of a
            movement built on faith and follow-through.
          </p>
          <div className="mt-6">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/impact">See our impact <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClosingCta() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-gold/50 bg-gradient-to-br from-primary via-plum to-primary p-10 text-primary-foreground shadow-2xl sm:p-14">
          <div aria-hidden className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gold/25 blur-3xl" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-gold">
              Rise with us
            </span>
            <h2 className="mt-5 font-serif text-4xl font-semibold sm:text-5xl">
              Every woman lifted, lifts another.
            </h2>
            <p className="mt-4 max-w-2xl text-primary-foreground/85">
              Volunteer your time. Give generously. Partner as a church,
              school, or company. There is a place for you in this work.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90">
                <Link to="/involved"><Heart className="mr-2 h-4 w-4" /> Get Involved</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-gold/60 bg-transparent text-gold hover:bg-gold/10">
                <Link to="/contact">Contact us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
