export interface Testimonial {
  id: string;
  name: string;
  city: string;
  projectType: string;
  rating: number;
  review: string;
  avatar: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Amara Odhiambo",
    city: "Nairobi",
    projectType: "Full Home Renovation",
    rating: 5,
    review:
      "They listened before they designed. Every room feels like it was made for exactly how we live, not a showroom.",
    avatar: "/images/avatars/amara.jpg",
  },
  {
    id: "t2",
    name: "Daniel Cho",
    city: "Austin",
    projectType: "Kitchen Remodel",
    rating: 5,
    review:
      "The timeline they gave us on day one is the timeline we got. No surprises, no delays, and the finish quality speaks for itself.",
    avatar: "/images/avatars/daniel.jpg",
  },
  {
    id: "t3",
    name: "Priya Nair",
    city: "Bengaluru",
    projectType: "Living Room",
    rating: 5,
    review:
      "Our designer pushed back on a few of our ideas — kindly — and the final space is better because of it.",
    avatar: "/images/avatars/priya.jpg",
  },
  {
    id: "t4",
    name: "Marcus Webb",
    city: "Toronto",
    projectType: "Home Office",
    rating: 5,
    review:
      "Small project, same level of care as our friends' full renovations. That consistency is why we'd recommend them without hesitation.",
    avatar: "/images/avatars/marcus.jpg",
  },
];
