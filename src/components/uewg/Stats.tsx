import { Users, HeartHandshake, Home, School, MapPin } from "lucide-react";

const stats = [
  { icon: Users, value: "10", label: "Active members" },
  { icon: HeartHandshake, value: "Growing", label: "Volunteer network" },
  { icon: Home, value: "3", label: "Orphanages supported" },
  { icon: School, value: "4", label: "Church & school partners" },
  { icon: MapPin, value: "Multiple", label: "Communities reached" },
];

export function Stats() {
  return (
    <section className="border-y border-gold/30 bg-secondary/40">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 md:grid-cols-3 lg:grid-cols-5 lg:px-8">
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex items-center gap-3">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
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