# Premium Website — Homepage (in progress)

## Setup

```bash
pnpm install
pnpm dev
```

Add your own images to:
- `public/hero/` — hero1.jpg, hero2.jpg, hero3.jpg
- `public/images/logo.png` — your logo (used in the header)
- `public/images/products/` — one image per catalogue item, filenames matching
  the `image` field in `constants/products.ts` (e.g. `modular-kitchen.jpg`,
  `bedroom.jpg`, `wardrobe.jpg`, `wall-decor.jpg`, `false-ceiling.jpg`,
  `painting-wallpaper.jpg`, `living-room.jpg`, `tv-unit.jpg`, `sofa.jpg`,
  `dining-room.jpg`, `pooja-room.jpg`, `bathroom.jpg`)
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
- **Layout**: sticky `Header` (transparent → solid on scroll, mobile drawer, real
  logo image, nav links to `/catalogues`).
- **Catalogues page** (`/catalogues`) — all 12 product categories in a grid,
  sourced from the single `constants/products.ts` list.
- **Homepage sections**:
  - `Hero` — autoplay slider, stats chips, scroll indicator
  - `Services` — 4-card grid with hover lift/zoom
  - `Featured` — curated products (flagged `featured: true` in
    `constants/products.ts`) with a "View Full Catalogue" link
  - `InspirationGallery` — category chip filtering + Swiper carousel
  - `WhyChooseUs` — image + 6 feature cards
  - `Testimonials` — autoplay Swiper review carousel
  - `Process` — 5-step numbered timeline (horizontal desktop / vertical mobile)
  - `Statistics` — count-up numbers, triggered once on scroll into view

## Adding / editing catalogue products

Everything lives in one place: `constants/products.ts`. To add a 13th
product, add an object to the array and drop a matching image into
`public/images/products/`. Set `featured: true` to also show it in the
homepage Featured strip (currently 6 are featured).

## Next up

Estimate Calculator → Project Showcase → Before/After → Gallery → Awards →
Media → FAQ → Final CTA → Newsletter → Footer.

Say the word and I'll keep building section by section, reusing the
`Container`, `SectionTitle`, `Card`, and `Button` components already in place.
