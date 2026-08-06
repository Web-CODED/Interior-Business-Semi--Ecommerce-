"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Instagram } from "lucide-react";

export interface InspirationCardProps {
  title: string;
  subtitle: string;
  video: string;
  poster: string;
  instagramUrl: string;
}

/**
 * Reels-style card (Part 3A — Section 2, extended). Self-hosted vertical
 * clip that plays automatically once ~60% visible in the viewport and
 * pauses the moment it scrolls out — independent of carousel position.
 * "View on Instagram" links out to the real reel.
 */
export function InspirationCard({ title, subtitle, video, poster, instagramUrl }: InspirationCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(wrapperRef, { amount: 0.6 });

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    if (isInView) {
      el.play().catch(() => {
        // Autoplay can still be blocked in rare cases (e.g. low battery mode) — safe to ignore.
      });
    } else {
      el.pause();
    }
  }, [isInView]);

  return (
    <div
      ref={wrapperRef}
      className="group relative h-[390px] w-[260px] sm:w-[290px] shrink-0 overflow-hidden rounded-card bg-neutral-900"
    >
      <video
        ref={videoRef}
        src={video}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div
        className="absolute inset-x-0 bottom-0 h-[60%]"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View "${title}" on Instagram`}
        className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-small font-medium text-neutral-900 opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100 focus-visible:opacity-100"
      >
        <Instagram className="size-3.5" />
        View
      </a>

      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="text-lg font-semibold text-white">{title}</p>
        <p className="text-small text-white/80">{subtitle}</p>
      </div>
    </div>
  );
}
