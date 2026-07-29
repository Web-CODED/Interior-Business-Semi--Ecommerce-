export interface Product {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  /** Shown only on the homepage Featured strip. */
  featured?: boolean;
}

/**
 * Master product/catalogue list. Add real photos to
 * public/images/products/{slug}.jpg — filenames below already match.
 */
export const PRODUCTS: Product[] = [
  {
    id: "modular-kitchen",
    slug: "modular-kitchen",
    title: "Modular Kitchen Designs",
    description: "Space-efficient, premium-finish kitchens built around how you cook.",
    image: "/images/products/modular-kitchen.jpg",
    featured: true,
  },
  {
    id: "bedroom",
    slug: "bedroom",
    title: "Bedroom Designs",
    description: "Calm, restorative bedrooms with considered lighting and storage.",
    image: "/images/products/bedroom.jpg",
    featured: true,
  },
  {
    id: "wardrobe",
    slug: "wardrobe",
    title: "Wardrobe Designs",
    description: "Custom wardrobes that maximise storage without wasting space.",
    image: "/images/products/wardrobe.jpg",
  },
  {
    id: "wall-decor",
    slug: "wall-decor",
    title: "Wall Decor Designs",
    description: "Statement walls and decor accents that finish a room.",
    image: "/images/products/wall-decor.jpg",
  },
  {
    id: "false-ceiling",
    slug: "false-ceiling",
    title: "False Ceiling Designs",
    description: "Layered ceiling designs with integrated cove and spot lighting.",
    image: "/images/products/false-ceiling.jpg",
    featured: true,
  },
  {
    id: "painting-wallpaper",
    slug: "painting-wallpaper",
    title: "Painting & Wallpaper Works",
    description: "Premium paint finishes and wallpaper installation, done cleanly.",
    image: "/images/products/painting-wallpaper.jpg",
  },
  {
    id: "living-room",
    slug: "living-room",
    title: "Living Room Designs",
    description: "Warm, layered living spaces built for gathering.",
    image: "/images/products/living-room.jpg",
    featured: true,
  },
  {
    id: "tv-unit",
    slug: "tv-unit",
    title: "TV Unit Designs",
    description: "Custom entertainment units matched to your living room's style.",
    image: "/images/products/tv-unit.jpg",
  },
  {
    id: "sofa",
    slug: "sofa",
    title: "Sofa Designs",
    description: "Custom and upholstered sofas built for comfort and durability.",
    image: "/images/products/sofa.jpg",
  },
  {
    id: "dining-room",
    slug: "dining-room",
    title: "Dining Room Designs",
    description: "Dining spaces designed to bring the whole family together.",
    image: "/images/products/dining-room.jpg",
  },
  {
    id: "pooja-room",
    slug: "pooja-room",
    title: "Pooja Room Designs",
    description: "Serene, traditional-meets-modern pooja spaces.",
    image: "/images/products/pooja-room.jpg",
    featured: true,
  },
  {
    id: "bathroom",
    slug: "bathroom",
    title: "Bathroom Designs",
    description: "Modern, low-maintenance bathrooms with premium fittings.",
    image: "/images/products/bathroom.jpg",
  },
];
