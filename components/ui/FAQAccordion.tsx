"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { FAQItem } from "@/constants/faq";

interface FAQAccordionProps {
  items: FAQItem[];
  defaultOpenId?: string;
}

export function FAQAccordion({ items, defaultOpenId }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(
    defaultOpenId ?? items[0]?.id ?? null
  );

  const toggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="rounded-[20px] bg-white px-6 py-5 shadow-[0_6px_24px_rgba(0,0,0,0.06)]"
          >
            <button
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={`${item.id}-panel`}
              className="flex w-full items-center justify-between gap-4 text-left"
            >
              <span className="text-[18px] font-semibold text-neutral-900">
                {item.question}
              </span>
              <span className="flex-shrink-0 text-[#F56A4F]" aria-hidden="true">
                {isOpen ? (
                  <Minus size={22} strokeWidth={2} />
                ) : (
                  <Plus size={22} strokeWidth={2} />
                )}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`${item.id}-panel`}
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="max-w-[95%] space-y-4 pt-4 text-[16px] leading-[180%] text-neutral-700">
                    {item.answer.map((paragraph, index) => (
  <p key={index} className="whitespace-pre-line">
    {paragraph}
  </p>
))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
