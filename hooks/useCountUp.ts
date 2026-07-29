"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/**
 * Animates a number from 0 to `target` over `duration` ms, starting only
 * once the element is in view (Part 6 — Counter Animation).
 */
export function useCountUp(target: number, duration = 2000) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start: number | null = null;

    function step(timestamp: number) {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    }

    const frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [isInView, target, duration]);

  return { ref, value };
}
