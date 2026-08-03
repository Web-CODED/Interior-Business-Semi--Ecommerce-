"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ProductGalleryProps {
  images: string[];
  title: string;
}

/**
 * Large hero image + thumbnail strip for a single product's photo set.
 * Click any thumbnail to swap the main image (fade transition).
 */
export function ProductGallery({ images, title }: ProductGalleryProps) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-feature bg-neutral-200">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={images[active]}
              alt={`${title} — photo ${active + 1}`}
              fill
              priority={active === 0}
              sizes="(min-width: 1024px) 1200px, 100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-4 flex gap-3 overflow-x-auto pb-1 [&::-webkit-scrollbar]:hidden">
        {images.map((image, index) => (
          <button
            key={image}
            onClick={() => setActive(index)}
            aria-label={`View photo ${index + 1}`}
            aria-current={active === index}
            className={cn(
              "relative size-20 shrink-0 overflow-hidden rounded-card transition-all duration-200",
              active === index
                ? "ring-2 ring-primary-500 ring-offset-2"
                : "opacity-70 hover:opacity-100"
            )}
          >
            <Image src={image} alt="" fill sizes="80px" className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
