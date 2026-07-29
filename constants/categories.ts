export interface Category {
  id: string;
  label: string;
}

export const CATEGORIES: Category[] = [
  { id: "all", label: "All" },
  { id: "modern", label: "Modern" },
  { id: "minimal", label: "Minimal" },
  { id: "luxury", label: "Luxury" },
  { id: "classic", label: "Classic" },
  { id: "wood", label: "Wood" },
  { id: "kitchen", label: "Kitchen" },
  { id: "bedroom", label: "Bedroom" },
  { id: "living-room", label: "Living Room" },
  { id: "office", label: "Office" },
];
