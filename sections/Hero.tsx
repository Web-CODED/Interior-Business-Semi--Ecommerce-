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
 * photograph, serif headline + description + feature list sitting on
 * the cream side. Per the latest direction, the CTA button (and slide
 * dots) are pinned to the bottom-center of the hero on every slide,
 * rather than living inline under the description.
 */
export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative h-[88vh] min-h-[700px] w-full overflow-hidden">
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
              {/* Background photograph — full bleed */}
              <Image
                src={slide.image.src}
                alt={slide.image.alt}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />

              {/* Cream gradient overlay — solid on the left, fading into
                  the photograph toward the right, so text stays readable
                  without darkening the image. */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, var(--color-primary-50) 0%, var(--color-primary-50) 38%, rgba(255,245,242,0.55) 55%, rgba(255,245,242,0) 72%)",
                }}
                aria-hidden="true"
              />

              {/* Content column */}
              <div className="relative z-10 mx-auto flex h-full max-w-[1280px] items-center px-5 md:px-10">
                <div className="max-w-[560px] pb-28 md:pb-32">
                  <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.08em] text-primary-700">
                    {slide.eyebrow}
                    <span className="h-px w-8 bg-primary-700" aria-hidden="true" />
                  </p>

                  <h1
                    className={`${playfair.className} mt-3 text-[34px] font-bold leading-[1.1] text-primary-800 md:text-[58px]`}
                  >
                    {slide.headlineLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </h1>

                  <p className="mt-5 max-w-[480px] text-base leading-[1.7] text-neutral-700 md:text-lg">
                    {slide.description}
                  </p>

                  <HeroFeatureList features={slide.features} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* CTA + dots — pinned bottom-center, persistent across every slide */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-4 md:bottom-12">
        <div className="flex gap-2" role="tablist" aria-label="Hero slides">
          {heroSlides.map((slide, index) => (
            <span
              key={slide.id}
              className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
                index === activeIndex ? "bg-primary-700" : "bg-primary-700/30"
              }`}
              aria-hidden="true"
            />
          ))}
        </div>

        <Link
          href={heroSlides[activeIndex].ctaHref}
          className="
            inline-flex h-14 items-center gap-2 rounded-2xl bg-primary-700
            px-8 text-base font-semibold text-white shadow-[0_12px_36px_rgba(0,0,0,0.14)]
            transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-800 hover:shadow-[0_18px_42px_rgba(0,0,0,0.16)]
          "
        >
          {heroSlides[activeIndex].ctaLabel}
          <ArrowRight className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}

export default Hero;
