export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  href: string;
}

// Single source of truth for the Services grid — mirrors the Livspace
// "One-stop shop for all things interiors" card set.
export const services: ServiceItem[] = [
  {
    id: "modular-interiors",
    title: "Modular Kitchen",
    description: "Functional kitchen, wardrobe and storage",
    image: {
      src: "/images/services/ModularKitchen.jpeg",
      alt: "Modern living room with modular furniture",
    },
    href: "/catalogues/modular-kitchen",
  },
  {
    id: "full-home-interiors",
    title: "Full Home Interiors",
    description: "Turnkey interior solutions for your home",
    image: {
      src: "/images/services/FullhomeInterior.jpeg",
      alt: "Marble kitchen island with pendant lighting",
    },
    href: "/services/full-home-interiors",
  },
  {
    id: "luxury-interiors",
    title: "Luxury Interiors",
    description: "Tailored interiors that redefine elegance",
    image: {
      src: "/images/services/LuxuryInterior.jpeg",
      alt: "Luxury kitchen with dark island and gold accents",
    },
    href: "/services/luxury-interiors",
  },
  {
    id: "value-interiors",
    title: "Value Interiors",
    description: "Quality interiors at affordable prices",
    image: {
      src: "/images/services/WarmMinimal.jpeg",
      alt: "Warm minimal kitchen with wood cabinetry",
    },
    href: "/services/value-interiors",
  },
  {
    id: "renovations",
    title: "Renovations",
    description: "Expert solutions to upgrade your home",
    image: {
      src: "/images/services/Renovation.jpeg",
      alt: "Kitchen renovation in progress with exposed brick wall",
    },
    href: "/services/renovations",
  },
];
