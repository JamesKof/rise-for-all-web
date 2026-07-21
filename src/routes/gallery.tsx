import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, Camera, Heart } from "lucide-react";
import team from "@/assets/img/team.jpeg";
import outreachBooks from "@/assets/img/outreach-books.jpeg";
import kidsDonation from "@/assets/img/kids-donation.jpeg";
import motherChild from "@/assets/img/mother-child.jpeg";
import healthAdvocacy from "@/assets/img/health-advocacy.jpeg";
import brandedTee from "@/assets/img/branded-tee.jpeg";
import portraitGreen from "@/assets/img/portrait-green.jpeg";
import heroAdvocacy from "@/assets/img/hero-advocacy.jpeg";
import founder from "@/assets/img/founder.jpeg";
import churchYouthBibles from "@/assets/img/church-youth-bibles.jpeg";
import churchPresentation from "@/assets/img/church-presentation.jpeg";
import kidsSupplies from "@/assets/img/kids-supplies.jpeg";
import bibleDistribution from "@/assets/img/bible-distribution.jpeg";
import youthWorship from "@/assets/img/youth-worship.jpeg";

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
    src: healthAdvocacy,
    alt: "Health advocacy session for young girls",
    title: "The talk they never had.",
    category: "Health Advocacy",
    place: "Girls' Session · Ghana",
    story:
      "A menstrual health session with schoolgirls. Questions came slowly at first, then in a rush — because someone had finally shown up to answer them.",
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
    src: kidsSupplies,
    alt: "Children gathered around donated supplies",
    title: "The joy that fills a tent.",
    category: "Community Outreach",
    place: "Community Fair · Ghana",
    story:
      "A community outreach at a decorated tent — where snacks, supplies, and stories were shared with the children of a low-income neighborhood.",
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
];

const categories = Array.from(new Set(stories.map((s) => s.category)));

function GalleryPage() {
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
            Ghana. Hover any photo to hear the story behind it.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((c) => (
              <span
                key={c}
                className="rounded-full border border-gold/40 bg-background/70 px-3 py-1 text-xs font-medium text-primary shadow-sm backdrop-blur"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [column-fill:_balance]">
            {stories.map((s, i) => (
              <StoryCard key={s.src} story={s} index={i} />
            ))}
          </div>
        </div>
      </section>

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

function StoryCard({ story, index }: { story: Story; index: number }) {
  return (
    <figure
      className="group relative mb-5 break-inside-avoid overflow-hidden rounded-3xl bg-card shadow-md ring-1 ring-gold/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:ring-gold/60 animate-fade-in"
      style={{ animationDelay: `${(index % 6) * 80}ms` }}
    >
      <div className="relative overflow-hidden">
        <img
          src={story.src}
          alt={story.alt}
          loading="lazy"
          className="h-auto w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-plum/95 via-primary/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-3 p-5 text-primary-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
            {story.category}
          </div>
          <div className="mt-1 font-serif text-lg leading-tight sm:text-xl">
            {story.title}
          </div>
          <p className="mt-2 text-xs leading-relaxed text-primary-foreground/90 sm:text-sm">
            {story.story}
          </p>
        </div>
      </div>
      <figcaption className="flex items-start justify-between gap-3 p-4">
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
