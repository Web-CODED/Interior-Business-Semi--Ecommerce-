"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ReviewCard } from "@/components/cards/ReviewCard";
import { TESTIMONIALS } from "@/constants/testimonials";

/**
 * Customer Testimonials carousel (Part 3B — Section 5).
 * Auto-plays slowly, pauses on hover, infinite loop.
 */
export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionTitle
          eyebrow="Customer Stories"
          heading="Loved by hundreds of happy clients"
          description="Real feedback from homeowners who trusted us with the space they live in every day."
          align="center"
          className="mb-12 mx-auto"
        />
      </Container>

      <div className="pl-6 md:pl-16 lg:pl-20">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1.05}
          spaceBetween={24}
          loop
          autoplay={{ delay: 8000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          breakpoints={{
            640: { slidesPerView: 1.3 },
            1024: { slidesPerView: 3 },
          }}
          className="!overflow-visible !pb-2"
        >
          {TESTIMONIALS.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="!h-auto">
              <ReviewCard {...testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
