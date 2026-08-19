import { ExternalLink } from "lucide-react";
import { businessLocation } from "@/constants/contact";

/**
 * MapCard
 *
 * Interactive Google Maps embed for the footer/map section. Height was
 * reduced from the original 420px spec to a more compact 260–300px so it
 * sits proportionally lighter in the footer, per updated visual direction.
 *
 * "Open in Maps" sits as a floating chip over the top-left corner,
 * linking out to the full Google Maps app/site for directions.
 * `loading="lazy"` defers loading the iframe until it's near the
 * viewport, per the performance notes in Part 3D.
 */
export function MapCard() {
  return (
    <div className="relative h-[260px] w-full overflow-hidden rounded-[28px] shadow-[0_6px_24px_rgba(0,0,0,0.06)] sm:h-[300px]">
      <a
        href={businessLocation.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="
          absolute left-4 top-4 z-10 flex items-center gap-2 rounded-2xl
          bg-white px-4 py-2.5 text-sm font-semibold text-primary-700
          shadow-[0_6px_24px_rgba(0,0,0,0.10)]
          transition-transform duration-200 hover:-translate-y-0.5
        "
      >
        Open in Maps
        <ExternalLink className="size-4" strokeWidth={2} aria-hidden="true" />
      </a>

      <iframe
        src={businessLocation.embedUrl}
        title={`Map showing ${businessLocation.name}'s location`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full w-full border-0"
        allowFullScreen
      />
    </div>
  );
}

export default MapCard;
