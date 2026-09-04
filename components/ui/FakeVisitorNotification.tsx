"use client";

import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import {
  generateRandomVisitor,
  formatMinutesAgo,
  type SocialProofVisitor,
} from "@/constants/socialProof";

/**
 * FakeVisitorNotification
 *
 * Rotating "social proof" toast — e.g. "Priya visited from Kalimpong,
 * 12 minutes ago". A new visitor appears every 15 seconds, stays
 * visible briefly, then fades out on its own — fully automatic, no
 * manual dismiss control. Positioned bottom-left so it never collides
 * with the WhatsApp button on the right.
 *
 * Purely illustrative — this does not reflect real visitor data.
 */

const CYCLE_INTERVAL_MS = 25000;
const VISIBLE_DURATION_MS = 5000;

export function FakeVisitorNotification() {
  const [visitor, setVisitor] = useState<SocialProofVisitor | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let hideTimer: ReturnType<typeof setTimeout>;

    function showNext() {
      setVisitor(generateRandomVisitor());
      setVisible(true);
      hideTimer = setTimeout(() => setVisible(false), VISIBLE_DURATION_MS);
    }

    // First one appears a few seconds after page load.
    const startTimer = setTimeout(showNext, 4000);
    const intervalId = setInterval(showNext, CYCLE_INTERVAL_MS);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(hideTimer);
      clearInterval(intervalId);
    };
  }, []);

  if (!visitor || !visible) return null;

  return (
    <div
      className="
        fixed bottom-[84px] left-4 z-[600] max-w-[220px]
        rounded-xl bg-white p-2.5 shadow-[0_12px_32px_rgba(0,0,0,0.10)]
        animate-in fade-in slide-in-from-bottom-2 duration-300
        md:bottom-6 md:left-6
      "
      role="status"
      aria-live="polite"
    >
      <div className="flex items-start gap-2">
        <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-success-100 text-success-700">
          <MapPin className="size-3" strokeWidth={2} aria-hidden="true" />
        </span>
        <div>
          <p className="text-xs font-semibold leading-snug text-neutral-900">
            {visitor.name} visited from {visitor.location}
          </p>
          <p className="mt-0.5 text-[11px] text-neutral-500">
            {formatMinutesAgo(visitor.minutesAgo)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FakeVisitorNotification;
