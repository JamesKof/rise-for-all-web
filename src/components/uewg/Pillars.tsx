import { HeartPulse, Sparkles, TrendingUp, Scale, HandHeart } from "lucide-react";

const pillars = [
  {
    icon: HeartPulse,
    title: "Health & Wellness Education",
    body: "Educating girls and young women on women-specific health and preventive measures.",
  },
  {
    icon: TrendingUp,
    title: "Livelihood & Opportunity",
    body: "Equipping women with knowledge, opportunities, and resources to improve their livelihoods.",
  },
  {
    icon: Sparkles,
    title: "Confidence & Capacity",
    body: "Building women's self-confidence and capacity for personal and professional growth.",
  },
  {
    icon: Scale,
    title: "Advocacy & Equality",
    body: "Creating awareness of women's issues, promoting gender equality, and advocating against sexual harassment.",
  },
  {
    icon: HandHeart,
    title: "Faith, Prayer & Mentorship",
    body: "Nurturing women, girls, and children spiritually, physically, and socially through prayer, mentorship, and empowerment.",
  },
];

export function Pillars() {
  return (
    <section className="relative overflow-hidden bg-cream py-20 md:py-28">
      <div aria-hidden className="absolute -left-24 top-24 h-64 w-64 rounded-t-full bg-gold/15" />
      <div aria-hidden className="absolute -right-20 bottom-10 h-72 w-72 rounded-b-full bg-primary/10" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-gold/50 bg-gold/10 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-primary">
            Our Mission
          </span>
          <h2 className="mt-4 font-serif text-4xl font-semibold text-primary sm:text-5xl">
            <span className="italic text-gold-foreground/90">Five</span> Pillars,
            One Calling
          </h2>
          <p className="mt-4 text-base text-foreground/70">
            Each pillar shapes the way we walk alongside the women, girls,
            and children we serve.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map(({ icon: Icon, title, body }, i) => (
            <li
              key={title}
              className={`group rounded-3xl border border-gold/25 bg-background p-7 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-xl ${
                i === 4 ? "lg:col-span-1 lg:col-start-2" : ""
              }`}
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-md ring-2 ring-gold/50 transition duration-300 group-hover:bg-gold group-hover:text-gold-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-serif text-2xl font-semibold text-primary">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
