# UEWG Website Plan

Build a warm, single-page site for Unique Empowered Women Global on the home route (`/`) with anchor navigation between sections. Multi-page split can come later.

## Design system

- Palette (tokens in `src/styles.css`, oklch):
  - `--primary`: deep royal purple (~#5B1A6B)
  - `--accent`: royal gold (~#C9A24C)
  - `--background`: soft cream (~#FBF7EF)
  - `--foreground`: deep aubergine/near-black
  - `--secondary`: muted burgundy for supporting surfaces
- Typography (loaded via `<link>` in `__root.tsx`, mapped in `@theme`):
  - Headings: **Cormorant Garamond** (elegant serif, feminine, dignified)
  - Body: **Inter** (clean humanist sans)
- Soft rounded cards (`rounded-2xl`), generous spacing, subtle gold hairline dividers, warm shadow tokens.

## Assets

- Register the uploaded logo and 6 photos as Lovable Assets (CDN pointers under `src/assets/*.asset.json`) — logo, founder portrait, team trio, community outreach group, book donation, mother-and-child (UEWG cap), menstrual health sign, branded tee.
- No image generation; use uploaded photos as real content.

## Sections (single page, anchor nav)

1. **Sticky Nav** — logo + name, links to #about, #programs, #impact, #involved, #contact, prominent Donate + Volunteer buttons. Mobile: sheet menu.
2. **Hero** (`#home`) — cream background with gold/purple accents, tagline "Women, Rise For All", mission statement, dual CTAs (Donate / Get Involved), founder or outreach photo in rounded frame with gold ring.
3. **Impact strip** — stat cards: 10 active members, volunteer network, 3 orphanages served, 4 church/school partners, communities reached.
4. **About** (`#about`) — founder story with Lady Portia portrait, founding date, board governance, vision statement.
5. **Mission Pillars** — 5 icon cards (Lucide: HeartPulse, Sparkles, TrendingUp, Scale, HandHeart).
6. **Programs** (`#programs`) — 4 grouped blocks with card lists:
   - Orphanage Support (3 homes)
   - Church & School Outreach (4 partners)
   - Health Advocacy (topics list)
   - Faith & Leadership (Bible distribution)
7. **Impact & Gallery** (`#impact`) — masonry-style photo grid using uploaded images, grouped by program label; simple vertical timeline (Nov 2024 founding → milestones → present).
8. **Get Involved** (`#involved`) — three warm cards: Volunteer (form: name, email, phone, area of interest), Donate (CTA, note that mobile money/Paystack integration comes later), Partner With Us (churches/schools/corporates).
9. **Contact** (`#contact`) — contact form (name, email, message), Ghana location line, social icon placeholders, newsletter email input.
10. **Footer** — logo + tagline, quick links, socials, copyright.

Forms are presentational only (no backend), with toast feedback via existing `sonner` — code structured so a later Cloud/Paystack/Flutterwave integration slots in cleanly.

## Technical

- Rewrite `src/routes/index.tsx` (replaces placeholder) with composed section components under `src/components/uewg/` (Nav, Hero, Stats, About, Pillars, Programs, Gallery, Timeline, Involved, Contact, Footer).
- Update `src/routes/__root.tsx` head: real title ("Unique Empowered Women Global — Women, Rise For All"), description, og/twitter tags; add Google Fonts `<link>` for Cormorant Garamond + Inter.
- Add leaf `head()` on `/` with matching og:title/description and a JSON-LD `NGO` schema. Set og:image to the uploaded logo asset URL.
- Update `src/styles.css`: replace default color tokens with the UEWG palette (light mode only tuned; dark left as-is), add `--font-serif` / `--font-sans` in `@theme`, add gold accent + soft shadow tokens.
- Smooth scroll via `html { scroll-behavior: smooth }` and `scroll-mt` offsets for sticky nav.
- Responsive: mobile-first grid patterns per responsive-layout guidance (`grid-cols-[minmax(0,1fr)_auto]` for header row, `min-w-0`, `shrink-0`).
- Accessibility: semantic landmarks, single `<main>`, alt text on every image, `aria-label` on icon-only buttons, WCAG-AA contrast on purple/gold combinations.

## Out of scope (this pass)

- Real payment integration, backend for forms, CMS, separate routes per section, multi-language.
