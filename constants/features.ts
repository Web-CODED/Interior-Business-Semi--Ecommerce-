import type { LucideIcon } from "lucide-react";
import { ShieldCheck, Clock, Palette, Award, Headset, Gem } from "lucide-react";

export interface Feature {
  id: string;
  icon: LucideIcon;
  heading: string;
  description: string;
}

export const FEATURES: Feature[] = [
  {
    id: "warranty",
    icon: ShieldCheck,
    heading: "Real Warranty",
    description: "Every project is backed by a written warranty on materials and workmanship.",
  },
  {
    id: "timeline",
    icon: Clock,
    heading: "On-Time Delivery",
    description: "Clear timelines set upfront and tracked through every stage of the build.",
  },
  {
    id: "custom",
    icon: Palette,
    heading: "Fully Custom Design",
    description: "No templates — every layout is designed around your space and habits.",
  },
  {
    id: "awards",
    icon: Award,
    heading: "Award-Winning Team",
    description: "Recognized by regional design awards for craftsmanship and detail.",
  },
  {
    id: "support",
    icon: Headset,
    heading: "Dedicated Support",
    description: "One point of contact from first consultation through final handover.",
  },
  {
    id: "materials",
    icon: Gem,
    heading: "Premium Materials",
    description: "Sourced finishes chosen for durability as much as appearance.",
  },
];
