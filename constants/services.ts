export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

export const SERVICES: Service[] = [
  {
    id: "kitchen",
    title: "Kitchen",
    description: "Functional layouts with a premium finish.",
    image: "/images/services/kitchen.jpg",
    href: "#kitchen",
  },
  {
    id: "living-room",
    title: "Living Room",
    description: "Warm, layered spaces built for gathering.",
    image: "/images/services/living-room.jpg",
    href: "#living-room",
  },
  {
    id: "bedroom",
    title: "Bedroom",
    description: "Calm, restorative interiors down to the last detail.",
    image: "/images/services/bedroom.jpg",
    href: "#bedroom",
  },
  {
    id: "office",
    title: "Office",
    description: "Considered workspaces that still feel like home.",
    image: "/images/services/office.jpg",
    href: "#office",
  },
];
