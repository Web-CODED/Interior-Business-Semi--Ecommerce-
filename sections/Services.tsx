"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { SERVICES } from "@/constants/services";
import { staggerContainer, viewportOnce } from "@/lib/motion";

/**
 * Services grid (Part 3A — Section 1). First section after the hero:
 * helps visitors quickly identify what they need.
 */
export function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-[88px]">
      <Container>
        <SectionTitle
          eyebrow="What We Do"
          heading="Every room, designed with intention"
          description="From a single accent wall to a full renovation, our team designs and builds spaces that feel considered from every angle."
          className="mb-12"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </motion.div>

        <div className="mt-14 flex justify-center">
          <Button size="lg" variant="primary">
            Explore All Services
          </Button>
        </div>
      </Container>
    </section>
  );
}
