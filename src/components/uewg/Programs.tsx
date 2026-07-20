import { Home, Church, HeartPulse, BookOpen } from "lucide-react";

const groups = [
  {
    icon: Home,
    title: "Orphanage Support",
    intro: "Regular visits, donations, and love for children in care.",
    items: [
      "Savior Children Orphanage — Ngleshie Amanfro, Kingston Town, Kasoa",
      "The Potter's Village Orphanage Home — Dodowa",
      "Teshie Children's Home",
    ],
  },
  {
    icon: Church,
    title: "Church & School Outreach",
    intro: "Speaking, mentoring, and serving in faith and school communities.",
    items: [
      "Assemblies of God Transformational Centre — Nungua",
      "Presbyterian Church — Joma",
      "Throne Room International — Kasoa",
      "Labone Senior High School Chaplaincy",
    ],
  },
  {
    icon: HeartPulse,
    title: "Health Advocacy",
    intro: "Awareness campaigns and educational sessions on women's health.",
    items: [
      "Breast cancer awareness & prevention",
      "Pregnancy & maternal health",
      "Menstrual hygiene management",
      "Other women-specific health issues",
    ],
  },
  {
    icon: BookOpen,
    title: "Faith & Leadership",
    intro: "Building future women leaders anchored in faith.",
    items: [
      "Bible distribution to children and young girls",
      "Mentorship & discipleship gatherings",
      "Inspiring the next generation of women leaders",
    ],
  },
];

export function Programs() {
  return (
    <section id="programs" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-gold-foreground/70">
            Our Work
          </span>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-primary sm:text-5xl">
            Programs that meet people where they are.
          </h2>
          <p className="mt-4 text-base text-foreground/70">
            From orphanage homes to school chaplaincies, our work is woven
            into the daily life of Ghanaian communities.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {groups.map(({ icon: Icon, title, intro, items }) => (
            <article
              key={title}
              className="flex flex-col rounded-3xl border border-border bg-card p-7 shadow-sm sm:p-8"
            >
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gold/20 text-primary ring-1 ring-gold/50">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="min-w-0 font-serif text-2xl font-semibold text-primary">
                  {title}
                </h3>
              </div>
              <p className="mt-4 text-sm text-foreground/70">{intro}</p>
              <ul className="mt-5 space-y-2.5">
                {items.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-sm text-foreground/85">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}