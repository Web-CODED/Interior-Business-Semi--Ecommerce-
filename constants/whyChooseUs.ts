import type { LucideIcon } from "lucide-react";
import { Heart, DoorOpen, Layers, Users, ShieldCheck, Clock } from "lucide-react";

export interface WhyChooseUsStat {
  id: string;
  icon: LucideIcon;
  value: string;
  label: string;
}

// Content lives here, never hardcoded in the component.
// Add / remove / reorder items freely — the marquee adapts automatically.
export const whyChooseUsStats: WhyChooseUsStat[] = [
  {
    id: "happy-homes",
    icon: Heart,
    value: "100+",
    label: "happy clients",
  },
  {
    id: "cities",
    icon: DoorOpen,
    value: "10+",
    label: "cities",
  },
  {
    id: "catalogue",
    icon: Layers,
    value: "100+",
    label: "project delivered",
  },
  {
    id: "designers",
    icon: Users,
    value: "10+",
    label: "Experience",
  },
  {
    id: "warranty",
    icon: ShieldCheck,
    value: "Lifetime",
    label: "warranty",
  },
  {
    id: "move-in",
    icon: Clock,
    value: "45-day",
    label: "move-in guarantee",
  },
];

export const whyChooseUsHeading = "Why choose us";
