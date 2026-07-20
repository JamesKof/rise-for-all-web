import founder from "@/assets/img/founder.jpeg";
import { Quote } from "lucide-react";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-16 lg:px-8">
        <div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl ring-4 ring-gold/40 shadow-xl">
            <img
              src={founder}
              alt="Madam Portia Baanim (Lady Portia), founder of UEWG"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-4 text-sm">
            <div className="font-serif text-lg font-semibold text-primary">Madam Portia Baanim</div>
            <div className="text-muted-foreground">Founder · &ldquo;Lady Portia&rdquo;</div>
          </div>
        </div>

        <div>
          <span className="text-xs font-medium uppercase tracking-widest text-gold-foreground/70">
            About UEWG
          </span>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-primary sm:text-5xl">
            Rooted in faith. Rising in purpose.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80">
            Unique Empowered Women Global was founded in{" "}
            <strong className="text-primary">November 2024</strong> by Madam
            Portia Baanim &mdash; affectionately known as Lady Portia &mdash;
            with a calling to lift women and children out of silence and into
            confidence, community, and purpose.
          </p>
          <p className="mt-4 text-base leading-relaxed text-foreground/70">
            The organization is overseen by a dedicated{" "}
            <strong className="text-primary">Board of Directors</strong> that
            steward its vision, values, and growth across Ghana.
          </p>

          <figure className="mt-8 rounded-2xl border border-gold/40 bg-secondary/50 p-6 sm:p-8">
            <Quote className="h-6 w-6 text-gold" />
            <blockquote className="mt-3 font-serif text-xl italic leading-relaxed text-primary sm:text-2xl">
              To empower and uplift women and girls to lead with confidence,
              thrive in their purpose, and unlock their full potential &mdash;
              while bringing hope to orphans and street children.
            </blockquote>
            <figcaption className="mt-3 text-sm uppercase tracking-wider text-muted-foreground">
              Our Vision
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}