"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { fadeRight } from "@/lib/motion";

export interface FeatureCardProps {
  icon: LucideIcon;
  heading: string;
  description: string;
}

/**
 * Feature card for "Why Choose Us" (Part 3B — Section 6).
 * Icon rotates slightly and shadow deepens on hover.
 */
export function FeatureCard({ icon: Icon, heading, description }: FeatureCardProps) {
  return (
    <motion.div
      variants={fadeRight}
      className="group rounded-feature bg-white p-6 shadow-[0_6px_24px_rgba(0,0,0,0.06)] transition-all duration-250 ease-out hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)]"
    >
      <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-primary-100 text-primary-600 transition-transform duration-250 group-hover:rotate-[5deg]">
        <Icon className="size-6" strokeWidth={2} />
      </div>
      <h3 className="text-[1.375rem] font-semibold text-neutral-900">{heading}</h3>
      <p className="mt-2 text-body leading-[1.7] text-neutral-700">{description}</p>
    </motion.div>
  );
}
