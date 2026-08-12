import { ExternalLink } from "lucide-react";
import { businessLocation } from "@/constants/contact";

/**
 * MapCard
 *
 * Interactive Google Maps embed for the footer/map section (Part 3D,
 * Section 24 spec: radius 28px, min-height 420px). The map itself is
 * a live, draggable/zoomable Google Maps iframe — the same pan/zoom
 * interaction as the reference screenshot, not a static image.
 *
 * "Open in Maps" sits as a floating chip over the top-left corner,
 * linking out to the full Google Maps app/site for directions.
 * `loading="lazy"` defers loading the iframe until it's near the
 * viewport, per the performance notes in Part 3D.
 */
export function MapCard() {
  return (
    <div className="relative min-h-[420px] w-full overflow-hidden rounded-[28px] shadow-[0_6px_24px_rgba(0,0,0,0.06)]">
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
        className="h-[420px] w-full border-0"
        allowFullScreen
      />
    </div>
  );
}

export default MapCard;
