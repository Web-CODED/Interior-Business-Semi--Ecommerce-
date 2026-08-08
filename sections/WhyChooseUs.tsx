"use client";

import { whyChooseUsStats, whyChooseUsHeading } from "@/constants/whyChooseUs";
import { Container } from "@/components/ui/Container";
import type { WhyChooseUsStat } from "@/constants/whyChooseUs";

/**
 * WhyChooseUs
 *
 * A continuously auto-scrolling horizontal marquee of stat cards,
 * matching the Livspace "Why choose us" pattern:
 *  - Cards drift left endlessly at a constant speed
 *  - No user interaction required (no drag, no swipe, no arrows)
 *  - Pauses smoothly on hover / focus
 *  - Infinite loop achieved by duplicating the track content
 *
 * Motion is pure CSS (transform: translateX), which keeps it GPU
 * accelerated and avoids re-render cost — no Swiper/Framer needed
 * for a non-interactive marquee like this.
 */

function StatCard({ stat }: { stat: WhyChooseUsStat }) {
  const Icon = stat.icon;

  return (
    <div
      className="
        flex w-[220px] shrink-0 flex-col items-start gap-4
        rounded-3xl bg-white p-6
        shadow-[0_6px_24px_rgba(0,0,0,0.06)]
      "
    >
      <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-200">
        <Icon
          className="h-6 w-6 text-neutral-800"
          strokeWidth={2}
          aria-hidden="true"
        />
        <span className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-primary-500 text-[10px] font-semibold text-white ring-2 ring-white">
          •
        </span>
      </div>

      <p className="text-[22px] font-semibold leading-tight text-neutral-900">
        {stat.value}
      </p>
      <p className="text-base text-neutral-600">{stat.label}</p>
    </div>
  );
}

export function WhyChooseUs() {
  // Duplicate the track so the loop point is invisible.
  const track = [...whyChooseUsStats, ...whyChooseUsStats];

  return (
    <section
      className="overflow-hidden bg-neutral-100 py-14 md:py-24"
      aria-label="Why choose us"
    >
      <Container>
        <h2 className="mb-8 text-[28px] font-bold leading-tight text-neutral-900 md:text-[40px]">
          {whyChooseUsHeading}
        </h2>
      </Container>

      {/* Full-bleed marquee track — intentionally outside Container so
          cards can run edge-to-edge like the Livspace reference. */}
      <div className="group relative w-full">
        <div
          className="
            flex w-max gap-4 px-6
            animate-marquee
            group-hover:[animation-play-state:paused]
            motion-reduce:animate-none
          "
        >
          {track.map((stat, index) => (
            <StatCard key={`${stat.id}-${index}`} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
