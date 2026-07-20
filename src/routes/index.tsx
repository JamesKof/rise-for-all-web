import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/uewg/Nav";
import { Hero } from "@/components/uewg/Hero";
import { Stats } from "@/components/uewg/Stats";
import { About } from "@/components/uewg/About";
import { Pillars } from "@/components/uewg/Pillars";
import { Programs } from "@/components/uewg/Programs";
import { Gallery } from "@/components/uewg/Gallery";
import { Involved } from "@/components/uewg/Involved";
import { Contact } from "@/components/uewg/Contact";
import { Footer } from "@/components/uewg/Footer";
import logo from "@/assets/logo.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:url", content: "/" },
      { property: "og:image", content: logo.url },
      { name: "twitter:image", content: logo.url },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "NGO",
          name: "Unique Empowered Women Global",
          alternateName: "UEWG",
          slogan: "Women, Rise For All",
          foundingDate: "2024-11",
          founder: { "@type": "Person", name: "Portia Baanim" },
          areaServed: "Ghana",
          logo: logo.url,
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Stats />
        <About />
        <Pillars />
        <Programs />
        <Gallery />
        <Involved />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
