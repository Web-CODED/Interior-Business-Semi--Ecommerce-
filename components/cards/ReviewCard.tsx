"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { fadeUp } from "@/lib/motion";

export interface ReviewCardProps {
  name: string;
  city: string;
  projectType: string;
  rating: number;
  review: string;
  avatar: string;
}

/**
 * Customer testimonial card (Part 3B — Section 5).
 */
export function ReviewCard({ name, city, projectType, rating, review, avatar }: ReviewCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      className="flex h-full min-h-[320px] max-w-[430px] flex-col rounded-feature bg-white p-8 shadow-[0_12px_36px_rgba(0,0,0,0.08)] transition-all duration-250 ease-out hover:-translate-y-1.5 hover:shadow-[0_18px_42px_rgba(0,0,0,0.10)]"
    >
      <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`size-[18px] ${
              i < rating ? "fill-warning-500 text-warning-500" : "text-neutral-400"
            }`}
          />
        ))}
      </div>

      <p className="mt-5 flex-1 text-[1.0625rem] leading-[1.8] text-neutral-800">
        &ldquo;{review}&rdquo;
      </p>

      <div className="mt-6 flex items-center gap-4">
        <div className="relative size-16 shrink-0 overflow-hidden rounded-full transition-transform duration-250 group-hover:scale-105">
          <Image src={avatar} alt={name} fill sizes="64px" className="object-cover" />
        </div>
        <div>
          <p className="text-lg font-semibold text-neutral-900">{name}</p>
          <p className="text-small text-neutral-600">
            {city} · {projectType}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
