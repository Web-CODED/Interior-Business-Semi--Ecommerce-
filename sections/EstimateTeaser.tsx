import Link from "next/link";
import { Calculator, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { RollingWord } from "@/components/ui/RollingWord";
import { estimateRollingWords, estimateCards } from "@/constants/estimateTeaser";
import type { EstimateCardItem } from "@/constants/estimateTeaser";

/**
 * EstimateTeaser
 *
 * Sits above the "Featured Work" section on the homepage. Headline reads
 * "Get the estimate for your [rolling word]" — Full Interior / Wardrobe /
 * Kitchen cycle automatically. Below it, a horizontally-scrollable row of
 * cards (grid on desktop) link out to the full estimate calculator,
 * pre-filtered to that category.
 */
export function EstimateTeaser() {
  return (
    <section className="bg-white py-14 md:py-24" aria-label="Get an estimate">
      <Container>
        <h2 className="max-w-[560px] text-[28px] font-bold leading-tight text-neutral-900 md:text-[42px]">
          Get the estimate for your{" "}
          <RollingWord words={estimateRollingWords} />
        </h2>
        <p className="mt-4 max-w-[560px] text-base leading-[1.7] text-neutral-600 md:text-lg">
          Calculate the approximate cost of doing up your home interiors.
        </p>

        <div
          className="
            mt-8 flex gap-4 overflow-x-auto pb-2
            -mx-5 px-5 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0
          "
        >
          {estimateCards.map((card) => (
            <EstimateCard key={card.id} card={card} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function EstimateCard({ card }: { card: EstimateCardItem }) {
  const Icon = card.icon;

  return (
    <Link
      href={card.href}
      className="
        flex w-[260px] shrink-0 flex-col rounded-[28px] bg-white p-6
        shadow-[0_6px_24px_rgba(0,0,0,0.06)]
        transition-shadow duration-300 hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)]
        md:w-auto
      "
    >
      <div className="flex items-start justify-between">
        <div className="relative flex h-16 w-16 items-center justify-center">
          <div
            className="absolute inset-0 bg-primary-100"
            style={{ borderRadius: "38% 62% 63% 37% / 41% 44% 56% 59%" }}
            aria-hidden="true"
          />
          <Icon className="relative h-7 w-7 text-primary-700" strokeWidth={1.75} aria-hidden="true" />
        </div>
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-neutral-200 text-neutral-500">
          <Calculator className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
        </span>
      </div>

      <h3 className="mt-5 text-lg font-bold text-neutral-900">{card.title}</h3>
      <p className="mt-1.5 text-sm leading-snug text-neutral-600">{card.description}</p>

      <span
        className="
          mt-6 inline-flex h-12 items-center justify-center gap-1.5 rounded-full
          bg-primary-500 px-6 text-sm font-semibold text-white
          transition-colors duration-200 hover:bg-primary-600
        "
      >
        Calculate
        <ChevronRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
      </span>
    </Link>
  );
}

export default EstimateTeaser;
