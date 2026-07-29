"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export interface InspirationCardProps {
  title: string;
  subtitle: string;
  image: string;
}

/**
 * Image-first card used in the Inspiration carousel (Part 3A — Section 2).
 * Title sits on a bottom gradient; hover zooms the image and reveals a CTA.
 */
export function InspirationCard({ title, subtitle, image }: InspirationCardProps) {
  return (
    <motion.div
      whileHover="hover"
      initial="rest"
      className="group relative h-[390px] w-[260px] sm:w-[290px] shrink-0 overflow-hidden rounded-card"
    >
      <motion.div
        variants={{ rest: { scale: 1 }, hover: { scale: 1.08 } }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        className="relative h-[78%] w-full"
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes="290px"
          className="object-cover"
        />
      </motion.div>
      <div
        className="absolute inset-x-0 bottom-0 h-[78%]"
        style={{
          background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.35))",
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-5">
        <div>
          <p className="text-lg font-semibold text-white">{title}</p>
          <p className="text-small text-white/80">{subtitle}</p>
        </div>
        <motion.span
          variants={{ rest: { opacity: 0, y: 6 }, hover: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.2 }}
          className="flex size-9 items-center justify-center rounded-full bg-white text-neutral-900"
        >
          <ArrowUpRight className="size-4" />
        </motion.span>
      </div>
    </motion.div>
  );
}
