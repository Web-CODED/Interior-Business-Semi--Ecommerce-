export interface FAQItem {
  id: string;
  question: string;
  answer: string[];
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Why do I need an interior designer?",
    answer: [
      "Think of a designer as the person who turns a vague idea into a working plan — measuring your space, choosing materials that suit your budget, and coordinating every vendor so nothing falls through the cracks.",
      "At Ganpati Interiors, one designer stays with your project from the first sketch to final handover, so you're never left chasing multiple contractors yourself.",
    ],
  },
  {
    id: "faq-2",
    question: "Why choose Ganpati Interiors for your home interiors?",
    answer: [
      "We're a Siliguri-based team that designs around how you actually live, not a fixed template. [Add your real differentiator here — e.g. in-house craftsmen, local material sourcing, years of experience.]",
      "Book a free consultation and our designers will walk you through layout options, material choices, and a transparent cost breakdown before any work begins.",
    ],
  },
  {
    id: "faq-3",
    question: "What services are included in home interior design?",
    answer: [
      "We handle end-to-end execution — modular kitchens and wardrobes, false ceilings, painting, electrical and plumbing coordination, flooring, and civil work — for both new homes and renovations.",
      "[List your actual scope of services here so it matches what your team delivers.]",
    ],
  },
  {
    id: "faq-4",
    question: "How much do home interiors cost?",
    answer: [
      "Cost depends on your home's size, the materials you choose, and the scope of work. [Replace this line with your actual starting price ranges by BHK/room type, similar to a rate card.]",
      "We'll give you a detailed, itemised estimate during your free consultation — no hidden charges.",
    ],
  },
  {
    id: "faq-5",
    question: "What is the timeline for my project completion?",
    answer: [
      "[State your actual guaranteed timeline here, e.g. '30–45 days for modular work, 60–90 days for full home interiors.']",
      "Actual timelines can shift slightly based on material availability, site readiness, and how quickly design approvals come through.",
    ],
  },
  {
    id: "faq-6",
    question: "What interior design styles do you offer?",
    answer: [
      "We work across a range of styles to match your taste — Modern, Minimalist, Contemporary, Traditional Indian, and more.",
      "[Adjust this list to the styles your portfolio actually covers.]",
    ],
  },
];
