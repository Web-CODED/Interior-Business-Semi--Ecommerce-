"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PROCESS_STEPS } from "@/constants/process";
import { viewportOnce } from "@/lib/motion";

/**
 * Company Process timeline (Part 3B — Section 7).
 *
 * Every animated element here triggers itself independently via its own
 * `whileInView` — nothing relies on inherited variant state from a
 * parent. This is deliberately more verbose than using a shared
 * staggerContainer/fadeUp pair, but it's far less likely to silently
 * fail to animate: each element manages its own viewport trigger and
 * its own delay (computed from its index), so there's no dependency
 * chain that can break if an intermediate wrapper doesn't propagate
 * variants correctly.
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

        <div className="relative">
          {/* Connector line — desktop only, draws left-to-right */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewportOnce}
            transition={{
              duration: 0.3 + PROCESS_STEPS.length * 0.15,
              ease: "easeOut",
            }}
            style={{ transformOrigin: "left" }}
            className="absolute top-9 left-[10%] right-[10%] hidden h-0.5 bg-neutral-400 md:block"
          />

          <div className="relative grid gap-10 md:grid-cols-5 md:gap-6">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step.id} className="relative flex flex-col items-center text-center">
                <motion.div
                  initial={{ scale: 0.4, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={viewportOnce}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                    delay: index * 0.15,
                  }}
                  className="relative z-10 flex size-[72px] items-center justify-center rounded-full bg-primary-500 text-white shadow-[0_12px_36px_rgba(0,0,0,0.08)]"
                >
                  <step.icon className="size-7" strokeWidth={2} />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                    delay: index * 0.15 + 0.15,
                  }}
                >
                  <span className="mt-4 block text-small font-semibold text-primary-600">
                    {step.number}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold text-neutral-900">{step.title}</h3>
                  <p className="mt-2 max-w-[220px] text-body text-neutral-700 leading-[1.7]">
                    {step.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Process;
