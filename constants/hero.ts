import type { LucideIcon } from "lucide-react";
import {
  Users,
  Lightbulb,
  Layers,
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
    /**
     * CSS object-position value, e.g. "center 30%".
     * Lets each slide's crop be tuned individually instead of a single
     * global object-position — a tight close-up (like the bedroom nook)
     * needs a different focal point than a wide living-room shot.
     */
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
    ctaHref: "/estimate",
    image: {
      src: "/hero/hero1.jpg",
      alt: "Modern living room with a wood-paneled TV wall and floating console",
      focalPoint: "center 40%",
    },
    features: [
      {
        icon: Users,
        title: "Personalized Approach",
        description: "We listen, understand & design spaces that reflect you.",
      },
      {
        icon: Lightbulb,
        title: "Innovative Solutions",
        description:
          "Creative ideas that blend aesthetics with everyday functionality.",
      },
      {
        icon: Layers,
        title: "Space Optimization",
        description: "Smart layouts to make the best use of every inch.",
      },
      {
        icon: Award,
        title: "Trusted Quality",
        description: "Premium quality materials and finishes you can rely on.",
      },
      {
        icon: Clock,
        title: "Timely Delivery",
        description: "On time execution with complete transparency at every step.",
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
    ctaHref: "/estimate",
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
    ctaHref: "/contact",
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
