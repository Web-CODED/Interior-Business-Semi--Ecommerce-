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
      "Had a great experience.Work was very excellently done.Happy with the work.",
    avatar: "/images/avatars/aritree.jpeg",
  },
  {
    id: "t2",
    name: "Eti Routh",
    city: "Darjeeling",
    projectType: "Kitchen Remodel",
    rating: 5,
    review:
      "Painting work was very good,will do kitchen and living room work very soon.liked your work and behaviour.",
    avatar: "/images/avatars/Eti.jpeg",
  },
  {
    id: "t3",
    name: "Priya Nair",
    city: "Alipurduar",
    projectType: "Living Room",
    rating: 4.8,
    review:
      "Affordable pricing, premium quality, and excellent customer service. Highly recommend.",
    avatar: "/images/avatars/Priya.jpeg",
  },
  {
    id: "t4",
    name: "Biplab Das",
    city: "Gangtok",
    projectType: "Home Office",
    rating: 5,
    review:
      "My home interior was really good,living room design was best,highly liked your work",
    avatar: "/images/avatars/Biplab.jpeg",
  },
    {
    id: "t5",
    name: "Rajdip Sahu",
    city: "Lava, W.B",
    projectType: "Kitchen Interior",
    rating: 4.9,
    review:
      "Low budget investment, High quality of work - on time delivery",
    avatar: "/images/avatars/Biplab.jpeg",
  },
    {
    id: "t6",
    name: "Prantika Biswas",
    city: "Kurseong",
    projectType: "Home Office",
    rating: 5,
    review:
      "Full-home design is the best choice to move with them, elegant design and hassel free delivery",
    avatar: "/images/avatars/Biplab.jpeg",
  },
    {
    id: "t7",
    name: "Sunil Saha",
    city: "Siliguri",
    projectType: "Home Office",
    rating: 5,
    review:
      "My dreams got full filled due to them. Intense hardwork turns up every corner",
    avatar: "/images/avatars/Biplab.jpeg",
  },
    {
    id: "t8",
    name: "Bivash Bera",
    city: "Gangtok",
    projectType: "Home Office",
    rating: 5,
    review:
      "My home interior was really good,living room design was best,highly liked your work",
    avatar: "/images/avatars/Biplab.jpeg",
  },
];
