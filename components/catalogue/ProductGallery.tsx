"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ProductGalleryProps {
  images: string[];
  title: string;
}

/**
 * Large hero image + thumbnail strip for a single product's photo set.
 * Auto-cycles every 3.5s; click any thumbnail to jump directly (pauses autoplay).
 * Uses object-contain so no part of any image is ever cropped.
 */
export function ProductGallery({ images, title }: ProductGalleryProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || images.length <= 1) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [paused, images.length]);

  return (
    <div>
      <div
        className="relative aspect-[16/10] w-full overflow-hidden rounded-feature bg-neutral-200"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
      >
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
              className="object-contain"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-4 flex gap-3 overflow-x-auto pb-1 [&::-webkit-scrollbar]:hidden">
        {images.map((image, index) => (
          <button
            key={image}
            onClick={() => {
              setActive(index);
              setPaused(true);
            }}
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
