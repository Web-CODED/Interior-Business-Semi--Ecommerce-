"use client";

import { useEffect, useState } from "react";
import { MapPin, X } from "lucide-react";
import {
  generateRandomVisitor,
  formatMinutesAgo,
  type SocialProofVisitor,
} from "@/constants/socialProof";

/**
 * FakeVisitorNotification
 *
 * Rotating "social proof" toast — e.g. "Priya visited from Kalimpong,
 * 12 minutes ago". A new visitor appears every 10–15 seconds (randomized
 * per cycle), stays visible for ~5 seconds, then fades out until the
 * next one. Positioned bottom-left so it never collides with the
 * WhatsApp button on the right.
 *
 * Purely illustrative — this does not reflect real visitor data.
 */

const VISIBLE_DURATION_MS = 5000;
const MIN_INTERVAL_MS = 10000;
const MAX_INTERVAL_MS = 15000;

function randomInterval() {
  return Math.floor(Math.random() * (MAX_INTERVAL_MS - MIN_INTERVAL_MS + 1)) + MIN_INTERVAL_MS;
}

export function FakeVisitorNotification() {
  const [visitor, setVisitor] = useState<SocialProofVisitor | null>(null);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    let hideTimer: ReturnType<typeof setTimeout>;
    let nextTimer: ReturnType<typeof setTimeout>;

    function showNext() {
      setVisitor(generateRandomVisitor());
      setVisible(true);

      hideTimer = setTimeout(() => setVisible(false), VISIBLE_DURATION_MS);
      nextTimer = setTimeout(showNext, randomInterval());
    }

    // First one appears a few seconds after page load, not instantly.
    const startTimer = setTimeout(showNext, 4000);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(hideTimer);
      clearTimeout(nextTimer);
    };
  }, [dismissed]);

  if (dismissed || !visitor || !visible) return null;

  return (
    <div
      className="
        fixed bottom-[92px] left-5 z-[600] max-w-[280px]
        rounded-2xl bg-white p-4 pr-8 shadow-[0_18px_48px_rgba(0,0,0,0.12)]
        animate-in fade-in slide-in-from-bottom-2 duration-300
        md:bottom-8 md:left-8
      "
      role="status"
      aria-live="polite"
    >
      <button
        onClick={() => setDismissed(true)}
        aria-label="Dismiss notifications"
        className="absolute right-2 top-2 flex size-5 items-center justify-center rounded-full text-neutral-400 hover:text-neutral-700"
      >
        <X className="size-3.5" />
      </button>

      <div className="flex items-start gap-2.5">
        <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-success-100 text-success-700">
          <MapPin className="size-4" strokeWidth={2} aria-hidden="true" />
        </span>
        <div>
          <p className="text-sm font-semibold leading-snug text-neutral-900">
            {visitor.name} visited from {visitor.location}
          </p>
          <p className="mt-0.5 text-xs text-neutral-500">
            {formatMinutesAgo(visitor.minutesAgo)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FakeVisitorNotification;
