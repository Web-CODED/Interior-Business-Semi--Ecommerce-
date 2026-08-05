"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { HERO_SLIDES } from "@/constants/hero";

/**
 * Hero (Part 2, restyled to match the Livspace reference). Each slide is
 * self-contained — its own image, headline, description, and single CTA —
 * nothing is shared across slides. Auto-plays every 5s, pauses on hover.
 * Edit copy per slide in constants/hero.ts.
 */
export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(id);
  }, [paused]);

  const slide = HERO_SLIDES[activeSlide];

  return (
    <section
      id="home"
      className="relative flex min-h-[700px] h-[88vh] sm:h-[80vh] max-sm:h-[72vh] w-full items-center overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background slider */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          {HERO_SLIDES.map(
            (s, index) =>
              index === activeSlide && (
                <motion.div
                  key={s.id}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <motion.div
                    className="relative h-full w-full"
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.05 }}
                    transition={{ duration: 9, ease: "linear" }}
                  >
                    <Image
                      src={s.image}
                      alt={s.alt}
                      fill
                      priority={index === 0}
                      className="object-cover"
                      sizes="100vw"
                    />
                  </motion.div>
                </motion.div>
              )
          )}
        </AnimatePresence>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.50))",
          }}
        />
      </div>

      {/* Content — swaps per slide, cross-fading with the image */}
      <Container className="relative z-10">
        <div className="max-w-[560px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h1 className="max-w-[520px] text-[2.125rem] sm:text-[2.875rem] lg:text-[3.625rem] font-bold leading-[1.15] text-white">
                {slide.headline}
              </h1>

              <p className="mt-6 max-w-[480px] text-body sm:text-[1.1875rem] leading-[1.7] text-white/90">
                {slide.description}
              </p>

              <div className="mt-8">
                <a
                  href={slide.ctaHref}
                  className="inline-flex h-14 items-center justify-center rounded-button bg-primary-500 px-8 text-body font-semibold text-white transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-primary-600 hover:shadow-[0_18px_42px_rgba(0,0,0,0.10)] active:scale-[0.98]"
                >
                  {slide.ctaLabel}
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>

      {/* Slider dots */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2.5">
        {HERO_SLIDES.map((s, index) => (
          <button
            key={s.id}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setActiveSlide(index)}
            className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
              index === activeSlide ? "bg-primary-500" : "bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 right-8 hidden lg:flex text-white/70"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      >
        <ChevronDown className="size-6" />
      </motion.div>
    </section>
  );
}
