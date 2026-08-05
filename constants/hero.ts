export interface HeroSlide {
  id: string;
  image: string;
  alt: string;
  /** Each slide carries its own message — nothing is shared across slides. */
  headline: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

/**
 * Edit any field below to change what a slide says or where its button goes.
 * Order here is the order slides play in. Add or remove objects to change
 * the slide count — the Hero section and dots adapt automatically.
 */
export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "slide-1",
    image: "/hero/hero1.jpg",
    alt: "Bright modern living room with warm natural light",
    headline: "Interiors crafted around how you actually live",
    description:
      "From first sketch to final styling, our designers turn everyday rooms into spaces that feel unmistakably yours.",
    ctaLabel: "Get Free Estimate",
    ctaHref: "/#contact",
  },
  {
    id: "slide-2",
    image: "/hero/hero2.jpg",
    alt: "Minimalist kitchen with soft coral accents",
    headline: "Kitchens built to last a lifetime",
    description:
      "Premium fittings, considered layouts, and finishes chosen for how a kitchen actually gets used every day.",
    ctaLabel: "Book Free Consultation",
    ctaHref: "/#contact",
  },
  {
    id: "slide-3",
    image: "/hero/hero3.jpg",
    alt: "Elegant bedroom interior with layered textures",
    headline: "Want to know how much your interiors will cost?",
    description:
      "Get a clear, no-obligation estimate for your space in minutes — no guesswork, no hidden costs.",
    ctaLabel: "Calculate Now",
    ctaHref: "/#contact",
  },
];
