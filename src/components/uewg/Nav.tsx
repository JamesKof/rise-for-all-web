import { useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import logo from "@/assets/img/logo.jpeg";

const links = [
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/impact", label: "Impact" },
  { to: "/gallery", label: "Gallery" },
  { to: "/involved", label: "Get Involved" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img
            src={logo}
            alt="UEWG logo"
            className="h-11 w-11 shrink-0 rounded-full ring-2 ring-gold/60"
          />
          <div className="min-w-0 leading-tight">
            <div className="truncate font-serif text-lg font-semibold text-primary sm:text-xl">
              UEWG
            </div>
            <div className="hidden truncate text-xs text-muted-foreground sm:block">
              Women, Rise For All
            </div>
          </div>
        </Link>

        <div className="flex items-center gap-2">
          <nav className="mr-4 hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                activeProps={{ className: "text-primary" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <Button asChild variant="outline" className="hidden border-primary/30 text-primary hover:bg-primary/5 sm:inline-flex">
            <Link to="/involved">Volunteer</Link>
          </Button>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link to="/involved">
              <Heart className="mr-1.5 h-4 w-4" /> Donate
            </Link>
          </Button>
          <button
            aria-label="Toggle menu"
            className="ml-1 inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border/60 bg-background lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-base font-medium text-foreground hover:bg-secondary"
                activeProps={{ className: "text-primary" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}