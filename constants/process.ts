import type { LucideIcon } from "lucide-react";
import { CalendarCheck, Users, FileCheck, Hammer, PackageCheck } from "lucide-react";

export interface ProcessStep {
  id: string;
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "step-1",
    number: "01",
    icon: CalendarCheck,
    title: "Book Consultation",
    description: "Tell us about your space and goals in a free 30-minute call.",
  },
  {
    id: "step-2",
    number: "02",
    icon: Users,
    title: "Meet Your Designer",
    description: "A dedicated designer visits your space and takes measurements.",
  },
  {
    id: "step-3",
    number: "03",
    icon: FileCheck,
    title: "Design Approval",
    description: "Review the layout, materials, and quote — revise until it's right.",
  },
  {
    id: "step-4",
    number: "04",
    icon: Hammer,
    title: "Execution",
    description: "Our team builds to plan, with regular updates at every milestone.",
  },
  {
    id: "step-5",
    number: "05",
    icon: PackageCheck,
    title: "Delivery",
    description: "A final walkthrough and handover, backed by our written warranty.",
  },
];
