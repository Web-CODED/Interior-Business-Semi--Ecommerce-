"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PROCESS_STEPS } from "@/constants/process";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";

/**
 * Company Process timeline (Part 3B — Section 7). Since these steps are a
 * real ordered sequence, numbering carries genuine meaning here.
 */
export function Process() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionTitle
          eyebrow="How It Works"
          heading="A simple, five-step process"
          description="From first call to final handover, you always know what happens next."
          align="center"
          className="mb-16 mx-auto"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
          className="relative grid gap-10 md:grid-cols-5 md:gap-6"
        >
          {/* Connector line — desktop only */}
          <div className="absolute top-9 left-[10%] right-[10%] hidden h-0.5 bg-neutral-400 md:block" />

          {PROCESS_STEPS.map((step) => (
            <motion.div key={step.id} variants={fadeUp} className="relative flex flex-col items-center text-center">
              <div className="relative z-10 flex size-[72px] items-center justify-center rounded-full bg-primary-500 text-white shadow-[0_12px_36px_rgba(0,0,0,0.08)]">
                <step.icon className="size-7" strokeWidth={2} />
              </div>
              <span className="mt-4 text-small font-semibold text-primary-600">{step.number}</span>
              <h3 className="mt-1 text-lg font-semibold text-neutral-900">{step.title}</h3>
              <p className="mt-2 max-w-[220px] text-body text-neutral-700 leading-[1.7]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
