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
    <section className="bg-secondary/40 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-gold-foreground/70">
            Our Mission
          </span>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-primary sm:text-5xl">
            Five pillars, one calling.
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
              className={`group rounded-3xl border border-border bg-card p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
                i === 4 ? "lg:col-span-1 lg:col-start-2" : ""
              }`}
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-md ring-2 ring-gold/50">
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