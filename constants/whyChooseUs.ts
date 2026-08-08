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
    value: "1,00,000+",
    label: "happy homes",
  },
  {
    id: "cities",
    icon: DoorOpen,
    value: "100+",
    label: "cities",
  },
  {
    id: "catalogue",
    icon: Layers,
    value: "20 lakh+",
    label: "catalogue products",
  },
  {
    id: "designers",
    icon: Users,
    value: "2,000+",
    label: "designers",
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
