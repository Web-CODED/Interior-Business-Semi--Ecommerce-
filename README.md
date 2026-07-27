# Premium Website — Homepage (in progress)

## Setup

```bash
pnpm install
pnpm dev
```

Add your own images to `public/images/hero/` (hero-1.jpg, hero-2.jpg, hero-3.jpg)
and `public/images/services/` (kitchen.jpg, living-room.jpg, bedroom.jpg, office.jpg).

## What's built so far

- **Theme tokens** (`app/globals.css`) — full color/spacing/radius/shadow/motion
  system from the design spec, wired into Tailwind v4 via `@theme`.
- **Motion variants** (`lib/motion.ts`) — shared fadeUp/fadeLeft/fadeRight/scaleIn/
  zoomImage/slideIn + stagger helper, per the "never redefine motion inline" rule.
- **Core UI**: `Container`, `Button`, `Card`, `SectionTitle`.
- **Layout**: sticky `Header` (transparent → solid on scroll, mobile drawer).
- **Homepage sections**: `Hero` (autoplay slider, stats chips, scroll indicator),
  `Services` (4-card grid with hover lift/zoom).

## Next up

The homepage flow continues with (in order): Category Chips → Inspiration
Gallery → Why Choose Us → Testimonials → Process → Statistics → Estimate
Calculator → Project Showcase → Before/After → Gallery → Awards → Media →
FAQ → Final CTA → Newsletter → Footer.

Say the word and I'll keep building section by section, reusing the
`Container`, `SectionTitle`, `Card`, and `Button` components already in place.
