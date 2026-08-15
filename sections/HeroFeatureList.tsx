import type { HeroFeature } from "@/constants/hero";

interface HeroFeatureListProps {
  features: HeroFeature[];
}

/**
 * Vertical, divided feature list shown under the Hero description.
 * Title stays coral/red (primary-700); description text is dark
 * neutral-900 (not grey) for stronger contrast against the photo.
 * Compact on mobile so items fit inside the shorter mobile hero.
 */
export function HeroFeatureList({ features }: HeroFeatureListProps) {
  return (
    <ul className="mt-3 divide-y divide-neutral-300/70 md:mt-8">
      {features.map((feature) => {
        const Icon = feature.icon;
        return (
          <li key={feature.title} className="flex items-start gap-2 py-1.5 md:gap-4 md:py-3.5">
            <Icon
              className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary-700 md:h-6 md:w-6"
              strokeWidth={1.75}
              aria-hidden="true"
            />
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wide text-primary-700 md:text-sm">
                {feature.title}
              </p>
              <p className="mt-0.5 text-[10px] leading-snug text-neutral-900 md:text-neutral-700 md:text-sm">
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
