import { Facebook, Instagram, Twitter, Phone, MessageCircle } from "lucide-react";
import logo from "@/assets/img/logo.jpeg";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#programs", label: "Programs" },
  { href: "#involved", label: "Get Involved" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-plum text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="UEWG" className="h-12 w-12 rounded-full ring-2 ring-gold/60" />
              <div>
                <div className="font-serif text-xl font-semibold">Unique Empowered Women Global</div>
                <div className="text-sm italic text-gold">Women, Rise For All</div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm text-primary-foreground/75">
              A Ghana-based NGO founded November 2024 by Lady Portia,
              empowering women, girls, and children through education,
              health, faith, and outreach.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-widest text-gold">Quick links</div>
            <ul className="mt-4 space-y-2 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-primary-foreground/80 hover:text-gold">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-widest text-gold">Connect</div>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gold" />
                <a href="tel:+233556453591" className="hover:text-gold">0556453591</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-gold" />
                <a
                  href="https://wa.me/233556453591"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold"
                >
                  WhatsApp us
                </a>
              </li>
            </ul>
            <div className="mt-4 flex gap-3">
              {[
                { Icon: Facebook, label: "Facebook" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Twitter, label: "Twitter" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-gold/40 text-gold transition hover:bg-gold hover:text-gold-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-gold/20 pt-6 text-xs text-primary-foreground/60 sm:flex-row">
          <div>© {new Date().getFullYear()} Unique Empowered Women Global. All rights reserved.</div>
          <div>Built with faith, in Ghana.</div>
        </div>
      </div>
    </footer>
  );
}