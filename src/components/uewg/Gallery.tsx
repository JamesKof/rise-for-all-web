import team from "@/assets/img/team.jpeg";
import outreachBooks from "@/assets/img/outreach-books.jpeg";
import kidsDonation from "@/assets/img/kids-donation.jpeg";
import motherChild from "@/assets/img/mother-child.jpeg";
import healthAdvocacy from "@/assets/img/health-advocacy.jpeg";
import brandedTee from "@/assets/img/branded-tee.jpeg";
import portraitGreen from "@/assets/img/portrait-green.jpeg";

const shots = [
  { src: team, label: "Team gathering", alt: "UEWG team in branded shirts", span: "sm:col-span-2 sm:row-span-2" },
  { src: outreachBooks, label: "Bible distribution outreach", alt: "Team presenting books at a school outreach" },
  { src: kidsDonation, label: "Donation drive", alt: "Children receiving donation items" },
  { src: healthAdvocacy, label: "Menstrual health advocacy", alt: "Lady Portia holding advocacy sign at a school" },
  { src: motherChild, label: "Community visit", alt: "UEWG volunteer with a young child" },
  { src: brandedTee, label: "Volunteer portrait", alt: "Volunteer wearing UEWG branded shirt" },
  { src: portraitGreen, label: "Empowered women", alt: "Portrait of an empowered woman" },
];

const timeline = [
  { date: "Nov 2024", title: "UEWG is founded", body: "Madam Portia Baanim launches Unique Empowered Women Global in Ghana." },
  { date: "Early 2025", title: "First orphanage visits", body: "Outreach begins at Savior Children Orphanage, The Potter's Village, and Teshie Children's Home." },
  { date: "Mid 2025", title: "Church & school partnerships", body: "Partnerships form with Assemblies of God, Presbyterian Church Joma, Throne Room International, and Labone SHS chaplaincy." },
  { date: "Late 2025", title: "Health advocacy scales up", body: "Sessions on breast cancer, menstrual hygiene, and maternal health across schools and communities." },
  { date: "2026", title: "Faith & leadership expands", body: "Bible distribution and mentorship reach a growing network of girls and young women." },
];

export function Gallery() {
  return (
    <section id="impact" className="scroll-mt-24 bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-gold-foreground/70">
            Impact & Moments
          </span>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-primary sm:text-5xl">
            Moments of hope, in every visit.
          </h2>
          <p className="mt-4 text-base text-foreground/70">
            A glimpse of UEWG at work &mdash; in orphanages, schools, churches,
            and communities across Ghana.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {shots.map((s) => (
            <figure
              key={s.src}
              className={`group relative overflow-hidden rounded-2xl bg-card shadow-sm ${s.span ?? ""}`}
            >
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 to-transparent p-3 text-xs font-medium text-primary-foreground opacity-0 transition group-hover:opacity-100">
                {s.label}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-center font-serif text-3xl font-semibold text-primary sm:text-4xl">
            Our journey so far
          </h3>
          <ol className="relative mx-auto mt-10 max-w-3xl border-l-2 border-gold/50 pl-6">
            {timeline.map((t) => (
              <li key={t.date} className="relative mb-8 last:mb-0">
                <span className="absolute -left-[33px] mt-1.5 grid h-4 w-4 place-items-center rounded-full bg-gold ring-4 ring-secondary/40" />
                <div className="text-xs font-semibold uppercase tracking-widest text-primary">{t.date}</div>
                <div className="mt-1 font-serif text-xl font-semibold text-foreground">{t.title}</div>
                <p className="mt-1 text-sm text-foreground/70">{t.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}