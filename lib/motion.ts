import type { Variants } from "framer-motion";

/**
 * Shared animation variants (Part 6 — Motion & Interaction System).
 * Import these everywhere instead of redefining motion inline.
 */

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_OUT },
  },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: EASE_OUT },
  },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: EASE_OUT },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: EASE_OUT },
  },
};

export const zoomImage: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.25, ease: EASE_OUT } },
};

export const slideIn: Variants = {
  hidden: { opacity: 0, x: "100%" },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.32, ease: "easeInOut" },
  },
};

/** Stagger wrapper for parent containers (cards, testimonials, gallery). */
export const staggerContainer = (staggerDelay = 0.08): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay,
    },
  },
});

/** Standard viewport config so scroll reveals fire once, 20% into view. */
export const viewportOnce = { once: true, amount: 0.2 };
