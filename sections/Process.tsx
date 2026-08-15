"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PROCESS_STEPS } from "@/constants/process";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";

/**
 * Company Process timeline (Part 3B — Section 7). Since these steps are a
 * real ordered sequence, the reveal animation reinforces that order:
 * the connector line draws left-to-right, each icon circle pops in one
 * at a time, then its number/title/description fade up right after —
 * so it reads as "step 1 lands, then step 2, then step 3..." rather
 * than everything appearing together.
 */

const iconPop = {
  hidden: { scale: 0.4, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const textFadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut", delay: 0.15 },
  },
};

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
          {/* Connector line — desktop only, draws left-to-right as steps reveal */}
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

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer(0.15)}
            className="relative grid gap-10 md:grid-cols-5 md:gap-6"
          >
            {PROCESS_STEPS.map((step) => (
              <motion.div
                key={step.id}
                variants={fadeUp}
                className="relative flex flex-col items-center text-center"
              >
                <motion.div
                  variants={iconPop}
                  className="relative z-10 flex size-[72px] items-center justify-center rounded-full bg-primary-500 text-white shadow-[0_12px_36px_rgba(0,0,0,0.08)]"
                >
                  <step.icon className="size-7" strokeWidth={2} />
                </motion.div>

                <motion.div variants={textFadeUp}>
                  <span className="mt-4 block text-small font-semibold text-primary-600">
                    {step.number}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold text-neutral-900">{step.title}</h3>
                  <p className="mt-2 max-w-[220px] text-body text-neutral-700 leading-[1.7]">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default Process;
