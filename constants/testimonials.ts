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
    name: "Aritree Chanda",
    city: "Kalimpong",
    projectType: "Full Home Renovation",
    rating: 5,
    review:
      "Had a great experience
Work was very excellently done .
Price was also reasonable..😊😊",
    avatar: "/images/avatars/amara.jpg",
  },
  {
    id: "t2",
    name: "Eti Routh",
    city: "Darjeeling",
    projectType: "Kitchen Remodel",
    rating: 5,
    review:
      "Painting work was very good,will do kitchen and living room work very soon.liked your work and behaviour.",
    avatar: "/images/avatars/daniel.jpg",
  },
  {
    id: "t3",
    name: "Priya Nair",
    city: "Alipurduar",
    projectType: "Living Room",
    rating: 5,
    review:
      "Affordable pricing, premium quality, and excellent customer service. Highly recommend.",
    avatar: "/images/avatars/priya.jpg",
  },
  {
    id: "t4",
    name: "Biplab Das",
    city: "Gangtok",
    projectType: "Home Office",
    rating: 5,
    review:
      "My home interior was really good,living room design was best,highly liked your work",
    avatar: "/images/avatars/marcus.jpg",
  },
];
