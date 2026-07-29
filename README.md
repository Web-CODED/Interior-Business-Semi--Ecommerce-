# Premium Website — Homepage (in progress)

## Setup

```bash
pnpm install
pnpm dev
```

Add your own images to:
- `public/images/hero/` — hero-1.jpg, hero-2.jpg, hero-3.jpg
- `public/images/services/` — kitchen.jpg, living-room.jpg, bedroom.jpg, office.jpg
- `public/images/inspiration/` — 1.jpg through 8.jpg
- `public/images/why-choose-us.jpg`
- `public/images/avatars/` — amara.jpg, daniel.jpg, priya.jpg, marcus.jpg

## What's built so far

- **Theme tokens** (`app/globals.css`) — full color/spacing/radius/shadow/motion
  system from the design spec, wired into Tailwind v4 via `@theme`.
- **Motion variants** (`lib/motion.ts`) — shared fadeUp/fadeLeft/fadeRight/scaleIn/
  zoomImage/slideIn + stagger helper, per the "never redefine motion inline" rule.
- **Core UI**: `Container`, `Button`, `Card`, `SectionTitle`, `CategoryChip`.
- **Layout**: sticky `Header` (transparent → solid on scroll, mobile drawer).
- **Homepage sections**:
  - `Hero` — autoplay slider, stats chips, scroll indicator
  - `Services` — 4-card grid with hover lift/zoom
  - `InspirationGallery` — category chip filtering + Swiper carousel
  - `WhyChooseUs` — image + 6 feature cards
  - `Testimonials` — autoplay Swiper review carousel
  - `Process` — 5-step numbered timeline (horizontal desktop / vertical mobile)
  - `Statistics` — count-up numbers, triggered once on scroll into view

## Next up

Estimate Calculator → Project Showcase → Before/After → Gallery → Awards →
Media → FAQ → Final CTA → Newsletter → Footer.

Say the word and I'll keep building section by section, reusing the
`Container`, `SectionTitle`, `Card`, and `Button` components already in place.
