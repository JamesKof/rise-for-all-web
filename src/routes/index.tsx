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
import logo from "@/assets/img/logo.jpeg";

const SITE_URL = "https://rise-for-all-web.lovable.app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "UEWG — Unique Empowered Women Global | Women, Rise For All" },
      {
        name: "description",
        content:
          "UEWG is a Ghana-based NGO empowering women, girls, and children through faith, education, health, leadership, and community outreach. Volunteer, partner, or give today.",
      },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: `${SITE_URL}/favicon.jpeg` },
      { name: "twitter:image", content: `${SITE_URL}/favicon.jpeg` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
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
          url: SITE_URL,
          logo: `${SITE_URL}/favicon.jpeg`,
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+233556453591",
            contactType: "customer service",
            areaServed: "GH",
            availableLanguage: ["English"],
          },
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
