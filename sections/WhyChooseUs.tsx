"use client";

import { whyChooseUsStats, whyChooseUsHeading } from "@/constants/whyChooseUs";
import { Container } from "@/components/ui/Container";
import type { WhyChooseUsStat } from "@/constants/whyChooseUs";

/**
 * WhyChooseUs
 *
 * A continuously auto-scrolling horizontal marquee of stat cards,
 * housed inside a rounded grey container (Livspace-style framing).
 *
 *  - Cards drift left endlessly at a constant speed
 *  - No user interaction required (no drag, no swipe, no arrows)
 *  - Pauses smoothly on hover / focus
 *  - Infinite loop achieved by duplicating the track content
 *  - Blob-shaped icon background + small accent badge, matching
 *    the reference screenshot's illustration style
 *
 * Motion is pure CSS (transform: translateX), GPU accelerated,
 * no Swiper/Framer needed for a non-interactive marquee like this.
 */

function StatCard({ stat }: { stat: WhyChooseUsStat }) {
  const Icon = stat.icon;

  return (
    <div
      className="
        flex w-[168px] shrink-0 flex-col items-start gap-3
        rounded-[20px] bg-white p-5
        shadow-[0_6px_24px_rgba(0,0,0,0.05)]
      "
    >
      {/* Blob-shaped icon background, matching the soft illustration style */}
      <div className="relative flex h-14 w-14 items-center justify-center">
        <div
          className="absolute inset-0 bg-primary-100"
          style={{ borderRadius: "38% 62% 63% 37% / 41% 44% 56% 59%" }}
          aria-hidden="true"
        />
        <Icon
          className="relative h-6 w-6 text-neutral-800"
          strokeWidth={1.75}
          aria-hidden="true"
        />
        <span
          className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-primary-500 ring-2 ring-white"
          aria-hidden="true"
        />
      </div>

      <p className="text-[17px] font-semibold leading-snug text-neutral-900">
        {stat.value}
      </p>
      <p className="text-sm leading-snug text-neutral-600">{stat.label}</p>
    </div>
  );
}

export function WhyChooseUs() {
  // Duplicate the track so the loop point is invisible.
  const track = [...whyChooseUsStats, ...whyChooseUsStats];

  return (
    <section className="bg-white py-14 md:py-24" aria-label="Why choose us">
      <Container>
        <div
          className="
            overflow-hidden rounded-[32px] bg-neutral-200
            py-10 md:py-12
          "
        >
          <h2 className="mb-8 px-6 text-[28px] font-bold leading-tight text-neutral-900 md:px-12 md:text-[40px]">
            {whyChooseUsHeading}
          </h2>

          <div className="group relative w-full">
            <div
              className="
                flex w-max gap-4 px-6 md:px-12
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
        </div>
      </Container>
    </section>
  );
}

export default WhyChooseUs;
