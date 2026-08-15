"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface RollingWordProps {
  words: string[];
  /** Milliseconds each word stays before rolling to the next. */
  interval?: number;
}

/**
 * RollingWord
 *
 * Cycles through a list of words automatically, one at a time, with a
 * vertical "rolling" slide transition — each new word slides up from
 * below while the previous one slides out above (flip-clock style).
 * Used inline inside a heading, e.g. "Get the estimate for your [Kitchen]".
 */
export function RollingWord({ words, interval = 2200 }: RollingWordProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <span
      className="relative inline-block overflow-hidden align-bottom"
      style={{ height: "1.15em" }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="block whitespace-nowrap text-primary-600"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default RollingWord;
