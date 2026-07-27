export interface HeroSlide {
  id: string;
  image: string;
  alt: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "slide-1",
    image: "/images/hero/hero-1.jpg",
    alt: "Bright modern living room with warm natural light",
  },
  {
    id: "slide-2",
    image: "/images/hero/hero-2.jpg",
    alt: "Minimalist kitchen with soft coral accents",
  },
  {
    id: "slide-3",
    image: "/images/hero/hero-3.jpg",
    alt: "Elegant bedroom interior with layered textures",
  },
];

export interface HeroStat {
  value: string;
  label: string;
}

export const HERO_STATS: HeroStat[] = [
  { value: "4.9★", label: "Rating" },
  { value: "10,000+", label: "Happy Customers" },
  { value: "500+", label: "Projects Delivered" },
];
