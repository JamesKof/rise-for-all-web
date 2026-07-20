import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { About } from "@/components/uewg/About";
import { Quote, Heart, Sparkles, Users, Compass, ArrowRight } from "lucide-react";
import portraitGreen from "@/assets/img/portrait-green.jpeg";

const SITE_URL = "https://rise-for-all-web.lovable.app";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About UEWG — Our Story, Vision & Founder Lady Portia" },
      {
        name: "description",
        content:
          "Learn how Unique Empowered Women Global was founded in November 2024 by Madam Portia Baanim, and discover the vision, values, and Board leading our faith-rooted work across Ghana.",
      },
      { property: "og:title", content: "About UEWG — Our Story & Founder" },
      {
        property: "og:description",
        content:
          "The story of UEWG, founded by Lady Portia in November 2024 to empower women, girls, and children across Ghana.",
      },
      { property: "og:url", content: `${SITE_URL}/about` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/about` }],
  }),
  component: AboutPage,
});

const values = [
  { icon: Heart, title: "Faith in Action", body: "Every program is anchored in the love of Christ — expressed through service, dignity, and consistent presence." },
  { icon: Users, title: "Sisterhood", body: "We rise together. Every volunteer, staff member, and partner is a sister in the mission — no woman left behind." },
  { icon: Compass, title: "Purposeful Impact", body: "We measure success by lives changed, not events attended. Each visit, kit, and conversation is a seed for change." },
  { icon: Sparkles, title: "Dignity First", body: "We serve with grace. The people we walk with are never a project — they are family, friends, and future leaders." },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About UEWG"
        title="A movement of women, rising together."
        body="Unique Empowered Women Global (UEWG) is a Ghana-based, faith-rooted non-governmental organization founded in November 2024. Our calling is simple: to lift women, girls, and children into confidence, community, and purpose."
      />

      <About />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-medium uppercase tracking-widest text-gold-foreground/70">Founder's Story</span>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-primary sm:text-4xl">The heart behind UEWG</h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-foreground/80">
            <p>
              Madam Portia Baanim &mdash; affectionately known as Lady Portia
              &mdash; grew up close to the realities that shape many Ghanaian
              women and girls: silence around health, limited access to
              mentorship, and children in orphanage homes whose only crime was
              being born into hardship. What she saw did not leave her.
            </p>
            <p>
              In November 2024, moved by faith and a persistent conviction that
              &ldquo;no woman rises alone,&rdquo; she gathered a small circle
              of like-minded women and formally launched Unique Empowered
              Women Global. What started as intentional weekend visits to a
              single orphanage has grown into a network of programs spanning
              health advocacy, faith-based mentorship, school chaplaincy, and
              humanitarian outreach.
            </p>
            <p>
              Lady Portia leads UEWG not from a stage, but from the ground
              &mdash; sitting with children, walking with mothers, and
              standing beside girls at every crossroad. Her belief is that
              when one woman is empowered, an entire community begins to
              rise.
            </p>
          </div>

          <figure className="mt-10 rounded-2xl border border-gold/40 bg-secondary/50 p-6 sm:p-8">
            <Quote className="h-6 w-6 text-gold" />
            <blockquote className="mt-3 font-serif text-xl italic leading-relaxed text-primary sm:text-2xl">
              &ldquo;Empowerment is not an event. It is a life, faithfully
              poured out until the next woman can stand.&rdquo;
            </blockquote>
            <figcaption className="mt-3 text-sm uppercase tracking-wider text-muted-foreground">
              Lady Portia · Founder
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-secondary/40 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-medium uppercase tracking-widest text-gold-foreground/70">Our Values</span>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-primary sm:text-4xl">What guides our work</h2>
            <p className="mt-4 text-foreground/70">
              Four convictions shape how UEWG shows up in every home, church,
              school, and community we serve.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground ring-2 ring-gold/50">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold text-primary">{title}</h3>
                <p className="mt-2 text-sm text-foreground/70">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-16 lg:px-8">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl ring-4 ring-gold/40 shadow-xl">
            <img src={portraitGreen} alt="An empowered UEWG woman" className="h-full w-full object-cover" />
          </div>
          <div>
            <span className="text-xs font-medium uppercase tracking-widest text-gold-foreground/70">Governance</span>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-primary sm:text-4xl">
              Led by a Board of Directors
            </h2>
            <p className="mt-5 text-base leading-relaxed text-foreground/80">
              UEWG is overseen by a dedicated Board of Directors who steward
              our vision, safeguard our values, and provide strategic
              direction as the organization grows across Ghana. The board is
              composed of women and men of faith, character, and professional
              excellence &mdash; committed to transparent, accountable, and
              community-first leadership.
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground/70">
              Alongside the board, UEWG operates through a growing team of
              volunteers, mentors, chaplains, health advocates, and community
              partners &mdash; each contributing time, skill, and heart to
              the mission.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/involved">Join our team <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" className="border-primary/30 text-primary hover:bg-primary/5">
                <Link to="/contact">Contact leadership</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function PageHeader({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <section className="relative overflow-hidden border-b border-gold/30 bg-gradient-to-br from-cream via-background to-secondary py-16 md:py-24">
      <div aria-hidden className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div aria-hidden className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <span className="text-xs font-medium uppercase tracking-widest text-gold-foreground/70">{eyebrow}</span>
        <h1 className="mt-4 font-serif text-4xl font-semibold text-primary sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-foreground/75 sm:text-lg">
          {body}
        </p>
      </div>
    </section>
  );
}