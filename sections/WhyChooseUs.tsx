"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { FEATURES } from "@/constants/features";
import { staggerContainer, fadeLeft, viewportOnce } from "@/lib/motion";

export function WhyChooseUs() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-neutral-200">
      <Container>
        <SectionTitle
          eyebrow="Why Choose Us"
          heading="Built on craftsmanship, not shortcuts"
          description="Six reasons homeowners trust us with the space they live in every day."
          align="left"
          className="mb-12"
        />

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeLeft}
            className="lg:col-span-5 relative aspect-[4/5] w-full overflow-hidden rounded-[2rem]"
          >
            <Image
              src="/images/why-choose-us.jpg"
              alt="Designer reviewing material samples with a client"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer(0.1)}
            className="lg:col-span-7 grid sm:grid-cols-2 gap-5"
          >
            {FEATURES.map((feature) => (
              <FeatureCard key={feature.id} {...feature} />
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
