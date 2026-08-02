import founder from "@/assets/img/founder.jpeg";
import { Quote, Check } from "lucide-react";

const mission = [
  "To educate girls and young women on women-specific health issues and the preventive measures they can take.",
  "To equip women with the knowledge, opportunities, and resources needed to access support and improve their livelihoods.",
  "To build women's self-confidence and strengthen their capacity for personal and professional growth.",
  "To create awareness of women's issues, promote gender equality, and advocate for the prevention of sexual harassment.",
  "To nurture women, girls, and children to grow spiritually, physically, and socially through prayer, mentorship, and empowerment.",
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-cream py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-16 lg:px-8">
        <div>
          <div className="relative">
            <div
              aria-hidden
              className="absolute -left-4 -top-4 h-40 w-40 rounded-t-full bg-gold/25"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-[10rem] rounded-b-3xl ring-4 ring-gold/40 shadow-xl">
              <img
                src={founder}
                alt="Madam Portia Baanim (Lady Portia), founder of UEWG"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </div>
          <div className="mt-5 text-sm">
            <div className="font-serif text-lg font-semibold text-primary">Madam Portia Baanim</div>
            <div className="text-muted-foreground">Founder · &ldquo;Lady Portia&rdquo;</div>
          </div>
        </div>

        <div>
          <span className="inline-flex items-center rounded-full border border-gold/50 bg-gold/10 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-primary">
            Unique Empowered Women Global
          </span>
          <h2 className="mt-4 font-serif text-4xl font-semibold text-primary sm:text-5xl">
            <span className="italic text-gold-foreground/90">Who</span> We Are
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80">
            Unique Empowered Women Global was founded in{" "}
            <strong className="text-primary">November 2024</strong> by Madam
            Portia Baanim &mdash; affectionately known as Lady Portia &mdash;
            with a calling to lift women and children out of silence and into
            confidence, community, and purpose. The organization is overseen
            by a dedicated{" "}
            <strong className="text-primary">Board of Directors</strong> that
            stewards its vision, values, and growth across Ghana.
          </p>

          <figure className="mt-8 rounded-3xl border border-gold/40 bg-background p-6 shadow-sm sm:p-8">
            <Quote className="h-6 w-6 text-gold" />
            <figcaption className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-foreground/70">
              Our Vision
            </figcaption>
            <blockquote className="mt-2 font-serif text-xl italic leading-relaxed text-primary sm:text-2xl">
              To empower and uplift women and girls to lead with confidence,
              thrive in their purpose, and unlock their full potential, while
              bringing hope to orphans and street children.
            </blockquote>
          </figure>

          <div className="mt-10">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-foreground/70">
              Our Mission
            </div>
            <ul className="mt-4 space-y-3">
              {mission.map((m) => (
                <li key={m} className="flex gap-3 rounded-2xl bg-background/70 p-4 transition hover:bg-background">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm leading-relaxed text-foreground/80">{m}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-8 font-serif text-2xl italic text-primary">Women, Rise For All</p>
        </div>
      </div>
    </section>
  );
}
