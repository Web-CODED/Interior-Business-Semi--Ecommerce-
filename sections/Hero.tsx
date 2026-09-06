"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import { heroSlides } from "@/constants/hero";
import { playfair } from "@/lib/fonts";
import { HeroFeatureList } from "./HeroFeatureList";

/**
 * Hero
 *
 * Split layout: warm cream gradient over the left ~55% of a full-bleed
 * photograph, serif headline + description + feature list on the cream
 * side, CTA + dots pinned bottom-center on every slide.
 *
 * Mobile height is kept short (520px) rather than tall — a taller
 * portrait container forces object-cover to scale the (landscape)
 * photo up more to cover the height, which crops MORE off the sides,
 * not less. Shorter container = smaller required scale = less crop =
 * more of the room visible ("zoomed out").
 */
export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative mb-6 h-[520px] w-full overflow-hidden md:mb-10 md:h-[88vh] md:min-h-[700px]">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        speed={700}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full w-full"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              {/* Background photograph — full bleed, per-slide focal point */}
              <Image
                src={slide.image.src}
                alt={slide.image.alt}
                fill
                priority
                sizes="100vw"
                className="object-cover"
                style={{ objectPosition: slide.image.focalPoint }}
              />

              {/* Cream gradient overlay — translucent (max ~58% opacity) on
                  the left, fading to fully transparent toward the right. */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255,245,242,0.58) 0%, rgba(255,245,242,0.58) 42%, rgba(255,245,242,0.35) 60%, rgba(255,245,242,0) 78%)",
                }}
                aria-hidden="true"
              />

              {/* Content column — pt clears the fixed header (70px mobile / 82px desktop) */}
              <div className="relative z-10 mx-auto flex h-full max-w-[1280px] items-start px-5 pt-[86px] md:items-center md:px-10 md:pt-0">
                <div className="max-h-full max-w-[560px] overflow-y-auto pb-16 md:overflow-visible md:pb-32">
                  <p className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-primary-700 md:gap-3 md:text-sm">
                    {slide.eyebrow}
                  </p>

                  <h1
                    className={`${playfair.className} mt-2 text-[24px] font-bold leading-[1.1] text-primary-800 md:mt-3 md:text-[58px]`}
                  >
                    {slide.headlineLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </h1>


                  <HeroFeatureList features={slide.features} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* CTA + dots — pinned bottom-center, persistent across every slide */}
      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-3 md:bottom-12 md:gap-4">
        <div className="flex gap-2" role="tablist" aria-label="Hero slides">
          {heroSlides.map((slide, index) => (
            <span
              key={slide.id}
              className={`h-2 w-2 rounded-full transition-colors duration-300 md:h-2.5 md:w-2.5 ${
                index === activeIndex ? "bg-primary-700" : "bg-primary-700/30"
              }`}
              aria-hidden="true"
            />
          ))}
        </div>

        <Link
          href={heroSlides[activeIndex].ctaHref}
          className="
  inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-2xl bg-primary-700
  px-5 text-sm font-semibold text-white shadow-[0_12px_36px_rgba(0,0,0,0.14)]
  transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-800 hover:shadow-[0_18px_42px_rgba(0,0,0,0.16)]
  md:h-14 md:px-8 md:text-base
"
        >
          {heroSlides[activeIndex].ctaLabel}
          <ArrowRight className="h-4 w-4 md:h-5 md:w-5" strokeWidth={2} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}

export default Hero;
