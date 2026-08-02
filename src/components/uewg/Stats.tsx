import { Users, Home, School, HeartHandshake } from "lucide-react";

const stats = [
  { icon: Users, value: "10+", label: "Active members" },
  { icon: Home, value: "3", label: "Orphanages supported" },
  { icon: School, value: "4+", label: "Church & school partners" },
  { icon: HeartHandshake, value: "Growing", label: "Volunteer network" },
];

export function Stats() {
  return (
    <section className="relative z-10 -mt-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 rounded-3xl border border-gold/30 bg-card p-6 shadow-2xl shadow-plum/10 sm:p-8 lg:grid-cols-4">
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex min-w-0 items-center gap-3">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
              <Icon className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <div className="font-serif text-xl font-semibold text-primary">{value}</div>
              <div className="truncate text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
