"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CategoryChip } from "@/components/ui/CategoryChip";
import { InspirationCard } from "@/components/cards/InspirationCard";
import { CATEGORIES } from "@/constants/categories";
import { INSPIRATION_ITEMS } from "@/constants/inspiration";

/**
 * Design Inspiration carousel + category filter chips (Part 3A — Sections 2 & 3).
 * Auto-advances every 3.5s; manual swipe/arrow interaction still works and
 * autoplay resumes afterward (disableOnInteraction: false).
 */
export function InspirationGallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const swiperRef = useRef<SwiperType | null>(null);

  const filteredItems =
    activeCategory === "all"
      ? INSPIRATION_ITEMS
      : INSPIRATION_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-14 sm:py-20 lg:py-24">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <SectionTitle
            eyebrow="Explore"
            heading="Design inspiration for every room"
            description="Browse real interiors from our recent projects to find the direction that speaks to you."
          />
          <div className="hidden lg:flex gap-3">
            <button
              aria-label="Previous"
              onClick={() => swiperRef.current?.slidePrev()}
              className="flex size-12 items-center justify-center rounded-full bg-white shadow-[0_6px_24px_rgba(0,0,0,0.06)] hover:bg-primary-500 hover:text-white transition-colors duration-200"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              aria-label="Next"
              onClick={() => swiperRef.current?.slideNext()}
              className="flex size-12 items-center justify-center rounded-full bg-white shadow-[0_6px_24px_rgba(0,0,0,0.06)] hover:bg-primary-500 hover:text-white transition-colors duration-200"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        {/* Category chips */}
        <div className="flex gap-3 overflow-x-auto pb-2 mb-8 lg:flex-wrap [&::-webkit-scrollbar]:hidden">
          {CATEGORIES.map((category) => (
            <CategoryChip
              key={category.id}
              active={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </CategoryChip>
          ))}
        </div>
      </Container>

      {/* Mobile: one centered reel at a time, slight peek of neighbors.
          Tablet/desktop: reverts to the multi-card bleed layout. */}
      <div className="px-6 md:px-0 md:pl-16 lg:pl-20">
        <Swiper
          modules={[Navigation, Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={1.08}
          centeredSlides
          spaceBetween={16}
          loop
          autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
          breakpoints={{
            768: { slidesPerView: 3, centeredSlides: false, spaceBetween: 24 },
            1024: { slidesPerView: 4, centeredSlides: false, spaceBetween: 24 },
          }}
        >
          {filteredItems.map((item) => (
            <SwiperSlide key={item.id} className="!w-auto">
              <InspirationCard
                title={item.title}
                subtitle={item.subtitle}
                video={item.video}
                poster={item.poster}
                instagramUrl={item.instagramUrl}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
