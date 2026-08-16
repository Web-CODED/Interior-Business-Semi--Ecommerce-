import type { LucideIcon } from "lucide-react";
import { Home, Shirt, ChefHat } from "lucide-react";

export interface EstimateCardItem {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

// Words that cycle in the rolling headline — order matches the card order.
export const estimateRollingWords: string[] = ["Full Interior", "Wardrobe", "Kitchen"];

export const estimateCards: EstimateCardItem[] = [
  {
  id: "full-interior",
  icon: Home,
  title: "Full Interior",
  description: "Calculate the approximate cost of doing up your entire home.",
  href: "/estimate/bhk-type?type=full-interior", // was "/estimate?type=full-interior"
},
  {
    id: "wardrobe",
    icon: Shirt,
    title: "Wardrobe",
    description: "Our estimate for your dream wardrobe.",
    href: "/estimate?type=wardrobe",
  },
  {
    id: "kitchen",
    icon: ChefHat,
    title: "Kitchen",
    description: "Get an approximate costing for your kitchen interior.",
    href: "/estimate?type=kitchen",
  },
];
