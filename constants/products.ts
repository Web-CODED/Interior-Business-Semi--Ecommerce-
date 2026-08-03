export interface Product {
  id: string;
  slug: string;
  title: string;
  description: string;
  /** All gallery images for this product, in order. images[0] is the cover. */
  images: string[];
  /** Shown only on the homepage Featured strip. */
  featured?: boolean;
}

/**
 * Builds ["/images/products/{slug}/1.jpg", ... "/images/products/{slug}/{count}.jpg"].
 * Drop your photos into that folder using these exact numbered filenames —
 * no code changes needed after that.
 */
function gallery(slug: string, count: number): string[] {
  return Array.from({ length: count }, (_, i) => `/images/products/${slug}/${i + 1}.jpeg`);
}

/**
 * Master product/catalogue list — single source of truth for the Catalogues
 * grid, each product's detail page, and the homepage Featured strip.
 */
export const PRODUCTS: Product[] = [
  {
    id: "modular-kitchen",
    slug: "modular-kitchen",
    title: "Modular Kitchen Designs",
    description: "Space-efficient, premium-finish kitchens built around how you cook.",
    images: gallery("modular-kitchen", 6),
    featured: true,
  },
  {
    id: "bedroom",
    slug: "bedroom",
    title: "Bedroom Designs",
    description: "Calm, restorative bedrooms with considered lighting and storage.",
    images: gallery("bedroom", 6),
    featured: true,
  },
  {
    id: "wardrobe",
    slug: "wardrobe",
    title: "Wardrobe Designs",
    description: "Custom wardrobes that maximise storage without wasting space.",
    images: gallery("wardrobe", 6),
  },
  {
    id: "wall-decor",
    slug: "wall-decor",
    title: "Wall Decor Designs",
    description: "Statement walls and decor accents that finish a room.",
    images: gallery("wall-decor", 6),
  },
  {
    id: "false-ceiling",
    slug: "false-ceiling",
    title: "False Ceiling Designs",
    description: "Layered ceiling designs with integrated cove and spot lighting.",
    images: gallery("false-ceiling", 6),
    featured: true,
  },
  {
    id: "painting-wallpaper",
    slug: "painting-wallpaper",
    title: "Painting & Wallpaper Works",
    description: "Premium paint finishes and wallpaper installation, done cleanly.",
    images: gallery("painting-wallpaper", 6),
  },
  {
    id: "living-room",
    slug: "living-room",
    title: "Living Room Designs",
    description: "Warm, layered living spaces built for gathering.",
    images: gallery("living-room", 6),
    featured: true,
  },
  {
    id: "tv-unit",
    slug: "tv-unit",
    title: "TV Unit Designs",
    description: "Custom entertainment units matched to your living room's style.",
    images: gallery("tv-unit", 6),
  },
  {
    id: "sofa",
    slug: "sofa",
    title: "Sofa Designs",
    description: "Custom and upholstered sofas built for comfort and durability.",
    images: gallery("sofa", 6),
  },
  {
    id: "dining-room",
    slug: "dining-room",
    title: "Dining Room Designs",
    description: "Dining spaces designed to bring the whole family together.",
    images: gallery("dining-room", 6),
  },
  {
    id: "pooja-room",
    slug: "pooja-room",
    title: "Pooja Room Designs",
    description: "Serene, traditional-meets-modern pooja spaces.",
    images: gallery("pooja-room", 6),
    featured: true,
  },
  {
    id: "bathroom",
    slug: "bathroom",
    title: "Bathroom Designs",
    description: "Modern, low-maintenance bathrooms with premium fittings.",
    images: gallery("bathroom", 6),
  },
];
