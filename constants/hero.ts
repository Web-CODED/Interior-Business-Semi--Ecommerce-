import type { LucideIcon } from "lucide-react";
import {
  Users,
  Lightbulb,
  Award,
  Clock,
  Armchair,
  CalendarClock,
} from "lucide-react";

export interface HeroFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface HeroSlide {
  id: string;
  eyebrow: string;
  headlineLines: string[];
  description: string;
  ctaLabel: string;
  ctaHref: string;
  image: {
    src: string;
    alt: string;
    focalPoint: string;
  };
  features: HeroFeature[];
}

export const heroSlides: HeroSlide[] = [
  {
    id: "living-room",
    eyebrow: "Designing spaces that",
    headlineLines: ["Inspire", "Comfort &", "Style"],
    description:
      "We create beautiful, functional, and timeless interiors tailored to your lifestyle.",
    ctaLabel: "Calculate Now",
    ctaHref: "/estimate/kitchen-layout",
    image: {
      src: "/hero/hero1.jpg",
      alt: "Modern living room with a wood-paneled TV wall and floating console",
      focalPoint: "center 40%",
    },
    features: [
    features: [
      {
        icon: Users,
        title: "Premium Touch",
        description: "Designs to match your taste",
      },
      {
        icon: Lightbulb,
        title: "Innovative Solutions",
        description: "Creative ideas, premium spaces",
      },
      {
        icon: Award,
        title: "Trusted Quality",
        description: "Premium materials to rely on",
      },
      {
        icon: Clock,
        title: "Timely Delivery",
        description: "Transparent execution, on schedule",
      },
    ],
  },
  {
    id: "bedroom",
    eyebrow: "Designing spaces that",
    headlineLines: ["Inspire", "Comfort &", "Style"],
    description:
      "We create beautiful, functional, and timeless interiors tailored to your lifestyle.",
    ctaLabel: "Get Quote",
    ctaHref: "/estimate/contact",
    image: {
      src: "/hero/hero2.jpg",
      alt: "Elegant bedroom with an arched, softly lit headboard nook",
      focalPoint: "center 30%",
    },
    features: [
      {
        icon: Armchair,
        title: "Custom Designs",
        description: "Tailored to your taste & lifestyle",
      },
      {
        icon: Award,
        title: "Quality Assurance",
        description: "Premium materials and flawless finishes",
      },
      {
        icon: Lightbulb,
        title: "Multiple Concepts",
        description: "Explore multiple ideas before finalizing",
      },
      {
        icon: CalendarClock,
        title: "On-Time Delivery",
        description: "Committed to deadlines you can trust",
      },
    ],
  },
  {
    id: "living-room-warm",
    eyebrow: "Designing spaces that",
    headlineLines: ["Inspire", "Comfort &", "Style"],
    description:
      "We create beautiful, functional, and timeless interiors tailored to your lifestyle.",
    ctaLabel: "Book Free Consultation",
    ctaHref: "/estimate/contact",
    image: {
      src: "/hero/hero3.jpg",
      alt: "Cozy neutral living room with a wood slat feature wall and pendant lights",
      focalPoint: "center 35%",
    },
    features: [
      {
        icon: Armchair,
        title: "Custom Designs",
        description: "Tailored to your taste & lifestyle",
      },
      {
        icon: Award,
        title: "Quality Assurance",
        description: "Premium materials and finishes",
      },
      {
        icon: Lightbulb,
        title: "Innovative Ideas",
        description: "Creative solutions for every space",
      },
      {
        icon: Clock,
        title: "On-Time Delivery",
        description: "Committed to deadlines you can trust",
      },
    ],
  },
];
