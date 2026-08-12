import type { HeroFeature } from "@/constants/hero";

interface HeroFeatureListProps {
  features: HeroFeature[];
}

/**
 * Vertical, divided feature list shown under the Hero description —
 * icon left, title + description right, thin divider between rows.
 * Matches the reference screenshots exactly (Personalized Approach,
 * Innovative Solutions, etc.)
 */
export function HeroFeatureList({ features }: HeroFeatureListProps) {
  return (
    <ul className="mt-8 divide-y divide-neutral-300/70">
      {features.map((feature) => {
        const Icon = feature.icon;
        return (
          <li key={feature.title} className="flex items-start gap-4 py-3.5">
            <Icon
              className="mt-0.5 h-6 w-6 shrink-0 text-primary-700"
              strokeWidth={1.75}
              aria-hidden="true"
            />
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary-700">
                {feature.title}
              </p>
              <p className="mt-0.5 text-sm leading-snug text-neutral-700">
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
