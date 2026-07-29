export interface InspirationItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  category: string;
}

export const INSPIRATION_ITEMS: InspirationItem[] = [
  { id: "insp-1", title: "Coastal Calm", subtitle: "Living Room", image: "/images/inspiration/1.jpg", category: "minimal" },
  { id: "insp-2", title: "Warm Minimalism", subtitle: "Kitchen", image: "/images/inspiration/2.jpg", category: "kitchen" },
  { id: "insp-3", title: "Modern Heritage", subtitle: "Bedroom", image: "/images/inspiration/3.jpg", category: "modern" },
  { id: "insp-4", title: "Quiet Luxury", subtitle: "Living Room", image: "/images/inspiration/4.jpg", category: "luxury" },
  { id: "insp-5", title: "Natural Wood", subtitle: "Dining", image: "/images/inspiration/5.jpg", category: "wood" },
  { id: "insp-6", title: "Executive Focus", subtitle: "Office", image: "/images/inspiration/6.jpg", category: "office" },
  { id: "insp-7", title: "Classic Comfort", subtitle: "Bedroom", image: "/images/inspiration/7.jpg", category: "classic" },
  { id: "insp-8", title: "Soft Contrast", subtitle: "Living Room", image: "/images/inspiration/8.jpg", category: "modern" },
];
