"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp } from "@/lib/motion";

export interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  href?: string;
}

/**
 * Service category card (Part 3A — Section 1: Services Grid).
 * Entire card is clickable; image dominates, text stays minimal.
 */
export function ServiceCard({ title, description, image, href = "#" }: ServiceCardProps) {
  return (
    <motion.a
      href={href}
      variants={fadeUp}
      className="group block h-[250px] sm:h-[320px] lg:h-[340px] overflow-hidden rounded-card bg-white shadow-[0_6px_24px_rgba(0,0,0,0.06)] transition-all duration-250 ease-out hover:-translate-y-1.5 hover:shadow-[0_18px_42px_rgba(0,0,0,0.10)]"
    >
      <div className="relative h-[70%] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 25vw, 50vw"
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-1 p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-card font-semibold text-neutral-900">{title}</h3>
          <ArrowRight className="size-4 text-primary-600 transition-transform duration-250 group-hover:translate-x-1.5" />
        </div>
        <p className="text-small text-neutral-600 line-clamp-2">{description}</p>
      </div>
    </motion.a>
  );
}
