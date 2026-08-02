import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, Camera, Heart, X } from "lucide-react";
import team from "@/assets/img/team.jpeg";
import outreachBooks from "@/assets/img/outreach-books.jpeg";
import kidsDonation from "@/assets/img/kids-donation.jpeg";
import motherChild from "@/assets/img/mother-child.jpeg";
import brandedTee from "@/assets/img/branded-tee.jpeg";
import portraitGreen from "@/assets/img/portrait-green.jpeg";
import heroAdvocacy from "@/assets/img/hero-advocacy.jpeg";
import founder from "@/assets/img/founder.jpeg";
import churchYouthBibles from "@/assets/img/church-youth-bibles.jpeg";
import churchPresentation from "@/assets/img/church-presentation.jpeg";
import bibleDistribution from "@/assets/img/bible-distribution.jpeg";
import youthWorship from "@/assets/img/youth-worship.jpeg";
import schoolSupplies from "@/assets/img/school-supplies-donation.jpeg";
import orphanageGroup from "@/assets/img/orphanage-group.jpeg";
import communityCelebration from "@/assets/img/community-celebration.jpeg";
import foodDonations from "@/assets/img/food-donations.jpeg";
import drinksSupplies from "@/assets/img/drinks-supplies.jpeg";
import schoolHealthTalk from "@/assets/img/school-health-talk.jpeg";
import whenWomenPray from "@/assets/img/when-women-pray.jpeg";

const SITE_URL = "https://rise-for-all-web.lovable.app";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Every Photo Tells a Story | UEWG" },
      {
        name: "description",
        content:
          "A visual journal of UEWG's work — orphanage visits, Bible distributions, health advocacy, school chaplaincy, and community outreach across Ghana. Each photograph carries a story.",
      },
      { property: "og:title", content: "UEWG Gallery — Every Photo Tells a Story" },
      {
        property: "og:description",
        content:
          "Photographs from UEWG outreach: orphanages, schools, churches, and communities across Ghana.",
      },
      { property: "og:url", content: `${SITE_URL}/gallery` },
      { property: "og:image", content: `${SITE_URL}/og-image.jpg` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/gallery` }],
  }),
  component: GalleryPage,
});

type Story = {
  src: string;
  alt: string;
  title: string;
  category: string;
  place: string;
  story: string;
};

const stories: Story[] = [
  {
    src: heroAdvocacy,
    alt: "Lady Portia holding a menstrual health advocacy sign",
    title: "\"No girl should miss school for period pain.\"",
    category: "Health Advocacy",
    place: "Labone SHS · Accra",
    story:
      "Lady Portia stands in the courtyard of a senior high school, sign in hand, opening a hard conversation with grace. Behind this single photo are dozens of girls who — for the first time — heard that their pain is real, and that help exists.",
  },
  {
    src: founder,
    alt: "Portrait of Madam Portia Baanim",
    title: "The woman who said yes.",
    category: "Founder",
    place: "Accra · November 2024",
    story:
      "Madam Portia Baanim, moments after formally launching UEWG. What started as a quiet weekend visit to a single orphanage has since become a movement of women rising for other women across Ghana.",
  },
  {
    src: team,
    alt: "UEWG volunteers gathered together",
    title: "Ten women. One calling.",
    category: "The Team",
    place: "UEWG Volunteers · Ghana",
    story:
      "The core team of UEWG — teachers, nurses, students, and mothers — bound together by faith and by a shared refusal to look away from what's hard.",
  },
  {
    src: outreachBooks,
    alt: "UEWG team distributing books at a school",
    title: "Books, in hands that were waiting.",
    category: "Education Outreach",
    place: "Community School · Ghana",
    story:
      "A partnership visit to a school in a supporting community. Every stack of books carried in that day was matched by a mentor's promise to come back.",
  },
  {
    src: bibleDistribution,
    alt: "Volunteers handing Bibles to a young reader",
    title: "His first Bible.",
    category: "Faith Outreach",
    place: "Church Partnership · Ghana",
    story:
      "A little boy examines a Bible larger than his own hands. Faith formation, in UEWG's work, begins gently — with a book, a smile, and someone who has time.",
  },
  {
    src: churchYouthBibles,
    alt: "Youth raising Bibles during a church service",
    title: "Bibles raised, futures declared.",
    category: "Faith Outreach",
    place: "Assemblies of God · Ghana",
    story:
      "Seven young people lift the Bibles UEWG placed in their hands moments earlier. In that lift is a quiet, defiant hope — a generation choosing what will guide them.",
  },
  {
    src: youthWorship,
    alt: "Youth on stage during worship",
    title: "Standing in the promise.",
    category: "Youth Ministry",
    place: "Assemblies of God Transformation Center",
    story:
      "A worship moment during a youth outreach service partnered by UEWG — where mentorship, music, and Scripture meet the questions of adolescence.",
  },
  {
    src: churchPresentation,
    alt: "Two women presenting at a Presbyterian church",
    title: "The pulpit, opened for women.",
    category: "Church Outreach",
    place: "Presbyterian Church, Joma",
    story:
      "Two UEWG facilitators lead a maternal health and dignity session inside the sanctuary — turning a Sunday space into a classroom for the women of the congregation.",
  },
  {
    src: kidsDonation,
    alt: "Children receiving donation items",
    title: "More than a package.",
    category: "Humanitarian Outreach",
    place: "Orphanage Visit · Ghana",
    story:
      "Children of a partner orphanage receive donated supplies. What arrives in a bag is unpacked over months — one meal, one exercise book, one bedtime at a time.",
  },
  {
    src: motherChild,
    alt: "UEWG volunteer holding a young child",
    title: "Held.",
    category: "Community Visits",
    place: "Home Visit · Ghana",
    story:
      "A UEWG volunteer holds a child during a home visit. Presence is a program too — and often the one that changes a family the most.",
  },
  {
    src: brandedTee,
    alt: "Volunteer wearing UEWG branded shirt",
    title: "Rise For All — worn on the shoulders.",
    category: "Volunteer Spotlight",
    place: "UEWG Volunteer",
    story:
      "A volunteer in the UEWG tee, ready for the day's outreach. The shirt is a signal — to every woman and girl she meets — that she is not walking alone.",
  },
  {
    src: portraitGreen,
    alt: "An empowered UEWG woman in Ghanaian print",
    title: "This is what rising looks like.",
    category: "Empowered Portraits",
    place: "UEWG Woman",
    story:
      "A portrait of one of the women UEWG walks with. Head up, work in progress — a quiet answer to the doubt she was told to carry.",
  },
  {
    src: schoolHealthTalk,
    alt: "UEWG facilitator addressing students during a breast cancer awareness talk",
    title: "\"Early detection saves lives.\"",
    category: "Health Advocacy",
    place: "School Health Talk · Ghana",
    story:
      "A hall full of students listens as a UEWG facilitator in an 'Early Detection Saves Lives' tee explains breast self-examination — for many, the first time anyone has taught them how.",
  },
  {
    src: schoolSupplies,
    alt: "Stacks of exercise books and pens donated for schoolchildren",
    title: "Exercise books, pens, and a fresh start.",
    category: "Education Outreach",
    place: "Donation Drive · Ghana",
    story:
      "Neatly stacked exercise books and boxes of pens waiting to be shared. Every notebook is a term of schoolwork a family no longer has to worry about affording.",
  },
  {
    src: orphanageGroup,
    alt: "Large group of children and UEWG volunteers outside an orphanage home",
    title: "The whole house came outside.",
    category: "Orphanage Support",
    place: "Orphanage Visit · Ghana",
    story:
      "Every child in the home gathered under the sun with the UEWG team. Visits like this are marked on their calendars long before we arrive.",
  },
  {
    src: communityCelebration,
    alt: "Children celebrating with volunteers at a decorated outreach event",
    title: "A day made just for them.",
    category: "Community Outreach",
    place: "Outreach Celebration · Ghana",
    story:
      "Balloons, streamers, and a canopy in a courtyard — an afternoon where children were simply celebrated, with nothing asked of them in return.",
  },
  {
    src: foodDonations,
    alt: "Bags of rice, snacks, and drinks donated for an outreach",
    title: "Rice, snacks, and enough for everyone.",
    category: "Humanitarian Outreach",
    place: "Donation Table · Ghana",
    story:
      "Provisions laid out before distribution: rice, biscuits, and drinks gathered by supporters who gave what they could so a home could eat well.",
  },
  {
    src: drinksSupplies,
    alt: "Children standing beside crates of drinks and boxes of donated supplies",
    title: "Waiting, hopeful, at the table.",
    category: "Humanitarian Outreach",
    place: "Distribution Day · Ghana",
    story:
      "Boys stand beside crates of drinks and boxes of provisions on distribution day — the moment before the sharing begins is always the quietest.",
  },
  {
    src: whenWomenPray,
    alt: "When Women Pray monthly prayer meeting flyer",
    title: "When Women Pray.",
    category: "Prayer & Fellowship",
    place: "Every 1st Saturday · 7:00PM, Zoom",
    story:
      "UEWG's monthly online prayer gathering. Women from across Ghana and beyond join on the first Saturday of each month to pray for one another and for the nation.",
  },
];

const categories = Array.from(new Set(stories.map((s) => s.category)));

function GalleryPage() {
  const [active, setActive] = useState<string>("All");
  const [lightbox, setLightbox] = useState<Story | null>(null);
  const visible = active === "All" ? stories : stories.filter((s) => s.category === active);

  return (
    <>
      <section className="relative overflow-hidden border-b border-gold/30 bg-gradient-to-br from-cream via-background to-secondary py-16 md:py-24">
        <div aria-hidden className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-pulse" />
        <div aria-hidden className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gold/25 blur-3xl animate-pulse [animation-delay:1.5s]" />
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8 animate-fade-in">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary">
            <Camera className="h-3 w-3 text-gold" /> The UEWG Gallery
          </span>
          <h1 className="mt-5 font-serif text-4xl font-semibold text-primary sm:text-5xl md:text-6xl">
            Every photograph is a <span className="italic bg-gradient-to-r from-plum via-primary to-gold bg-clip-text text-transparent">story</span>.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-foreground/75 sm:text-lg">
            A visual journal of the women, girls, and children UEWG has walked
            with — in orphanages, schools, churches, and communities across
            Ghana. Filter by theme, then open any photo to read its story.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter photos by theme">
            {["All", ...categories].map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                aria-pressed={active === c}
                className={`rounded-full border px-3.5 py-1.5 text-xs font-medium shadow-sm backdrop-blur transition hover:-translate-y-0.5 ${
                  active === c
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-gold/40 bg-background/70 text-primary hover:bg-gold/10"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-6 text-sm text-foreground/60" aria-live="polite">
            Showing {visible.length} {visible.length === 1 ? "photo" : "photos"}
            {active !== "All" ? ` in ${active}` : ""}.
          </p>
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((s, i) => (
              <li key={s.src}>
                <StoryCard story={s} index={i} onOpen={() => setLightbox(s)} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {lightbox && <Lightbox story={lightbox} onClose={() => setLightbox(null)} />}

      <section className="border-t border-gold/30 bg-gradient-to-br from-secondary/60 via-background to-cream py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-primary sm:text-4xl">
            Behind every frame, a life changing.
          </h2>
          <p className="mt-4 text-base text-foreground/70">
            The photos on this page were made possible by the people who chose
            to show up. Join them — as a volunteer, partner, or donor — and add
            your story to the wall.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-primary text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-xl">
              <Link to="/involved"><Heart className="mr-2 h-4 w-4" /> Get Involved</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary/30 text-primary transition-all hover:-translate-y-0.5 hover:bg-primary/5">
              <Link to="/impact">See our impact <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

function StoryCard({
  story,
  index,
  onOpen,
}: {
  story: Story;
  index: number;
  onOpen: () => void;
}) {
  const [loaded, setLoaded] = useState(false);
  return (
    <figure
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-card shadow-md ring-1 ring-gold/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:ring-gold/60 animate-fade-in"
      style={{ animationDelay: `${(index % 6) * 80}ms` }}
    >
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Open story: ${story.title}`}
        className="relative block aspect-[4/3] w-full overflow-hidden bg-secondary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        {!loaded && (
          <span aria-hidden className="absolute inset-0 animate-pulse bg-gradient-to-br from-secondary via-cream to-secondary" />
        )}
        <img
          src={story.src}
          alt={story.alt}
          loading="lazy"
          decoding="async"
          ref={(el) => {
            if (el?.complete) setLoaded(true);
          }}
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)}
          className={`h-full w-full object-cover transition-all duration-[1200ms] ease-out group-hover:scale-110 ${
            loaded ? "opacity-100 blur-0" : "opacity-0 blur-md"
          }`}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-plum/95 via-primary/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-3 p-5 text-left text-primary-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
            {story.category}
          </div>
          <div className="mt-1 font-serif text-lg leading-tight sm:text-xl">
            {story.title}
          </div>
          <p className="mt-2 line-clamp-4 text-xs leading-relaxed text-primary-foreground/90 sm:text-sm">
            {story.story}
          </p>
        </div>
      </button>
      <figcaption className="flex flex-1 items-start justify-between gap-3 p-4">
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-foreground/70">
            {story.category}
          </div>
          <div className="mt-0.5 font-serif text-sm font-semibold text-primary">
            {story.title}
          </div>
        </div>
        <div className="shrink-0 rounded-full bg-secondary/70 px-2.5 py-1 text-[10px] font-medium text-primary/80">
          {story.place}
        </div>
      </figcaption>
    </figure>
  );
}

function Lightbox({ story, onClose }: { story: Story; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={story.title}
      className="fixed inset-0 z-50 grid place-items-center bg-plum/80 p-4 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90dvh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close photo story"
          autoFocus
          className="absolute right-3 top-3 grid h-11 w-11 place-items-center rounded-full bg-background/90 text-primary shadow-md transition hover:bg-background"
        >
          <X className="h-5 w-5" />
        </button>
        <img
          src={story.src}
          alt={story.alt}
          decoding="async"
          className="max-h-[60dvh] w-full bg-secondary/60 object-contain"
        />
        <div className="p-6">
          <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-foreground/80">
            {story.category} · {story.place}
          </div>
          <h2 className="mt-2 font-serif text-2xl font-semibold text-primary">{story.title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-foreground/75">{story.story}</p>
        </div>
      </div>
    </div>
  );
}
