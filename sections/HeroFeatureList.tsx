import type { HeroFeature } from "@/constants/hero";

interface HeroFeatureListProps {
  features: HeroFeature[];
}

/**
 * Vertical, divided feature list shown under the Hero description.
 * Compact on mobile (small icons, tight rows) so up to 5 items fit
 * inside the shorter mobile hero without dominating the screen;
 * full-size on desktop where there's more vertical room.
 */
export function HeroFeatureList({ features }: HeroFeatureListProps) {
  return (
    <ul className="mt-4 divide-y divide-neutral-300/70 md:mt-8">
      {features.map((feature) => {
        const Icon = feature.icon;
        return (
          <li key={feature.title} className="flex items-start gap-2.5 py-2 md:gap-4 md:py-3.5">
            <Icon
              className="mt-0.5 h-4 w-4 shrink-0 text-primary-700 md:h-6 md:w-6"
              strokeWidth={1.75}
              aria-hidden="true"
            />
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-primary-700 md:text-sm">
                {feature.title}
              </p>
              <p className="mt-0.5 text-[11px] leading-snug text-neutral-700 md:text-sm">
                {feature.description}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default HeroFeatureList;
