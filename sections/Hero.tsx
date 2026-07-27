"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HERO_SLIDES, HERO_STATS } from "@/constants/hero";

/**
 * Hero (Part 2). Two-column intent on desktop (content left, image fills right/
 * full-bleed background), auto-playing fade slider, fade-up content sequence.
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
            (slide, index) =>
              index === activeSlide && (
                <motion.div
                  key={slide.id}
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
                      src={slide.image}
                      alt={slide.alt}
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

      {/* Content */}
      <Container className="relative z-10">
        <div className="max-w-[560px]">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-[520px] text-[2.125rem] sm:text-[2.875rem] lg:text-[3.625rem] font-bold leading-[1.15] text-white"
          >
            Interiors crafted around how you actually live
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="mt-6 max-w-[480px] text-body sm:text-[1.1875rem] leading-[1.7] text-white/90"
          >
            From first sketch to final styling, our designers turn everyday
            rooms into spaces that feel unmistakably yours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mt-8 flex flex-col xs:flex-row gap-4"
          >
            <Button size="lg" variant="primary">
              Get Free Estimate
            </Button>
            <Button size="lg" variant="outline">
              View Our Projects
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
            className="mt-10 flex flex-wrap gap-4"
          >
            {HERO_STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-full bg-white px-4 py-3 shadow-[0_6px_24px_rgba(0,0,0,0.06)]"
              >
                <span className="text-body font-semibold text-neutral-900">
                  {stat.value}
                </span>{" "}
                <span className="text-caption text-neutral-600">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>

      {/* Slider dots */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2.5">
        {HERO_SLIDES.map((slide, index) => (
          <button
            key={slide.id}
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
