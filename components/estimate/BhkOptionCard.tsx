"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { BhkTypeOption } from "@/constants/estimate";

interface BhkOptionCardProps {
  option: BhkTypeOption;
  isSelected: boolean;
  selectedSizeId: string | null;
  onSelect: (bhkId: string) => void;
  onSelectSize: (sizeId: string) => void;
}

/**
 * A single BHK type row. Expands to show Small/Large size options
 * when the option has them and is currently selected.
 */
export default function BhkOptionCard({
  option,
  isSelected,
  selectedSizeId,
  onSelect,
  onSelectSize,
}: BhkOptionCardProps) {
  const isExpanded = isSelected && option.hasSizeOptions;

  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-300 bg-white shadow-[0_6px_24px_rgba(0,0,0,0.06)]">
      <button
        type="button"
        onClick={() => onSelect(option.id)}
        aria-pressed={isSelected}
        className="flex w-full items-center justify-between px-5 py-4 text-left"
      >
        <span className="flex items-center gap-3">
          <span
            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-200 ${
              isSelected ? "border-primary-500" : "border-neutral-400"
            }`}
          >
            {isSelected && <span className="h-3 w-3 rounded-full bg-primary-500" />}
          </span>
          <span className="text-base font-medium text-neutral-900">{option.label}</span>
        </span>

        {option.hasSizeOptions && (
          <ChevronDown
            className={`h-5 w-5 text-neutral-600 transition-transform duration-250 ${
              isExpanded ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          />
        )}
      </button>

      <AnimatePresence initial={false}>
        {isExpanded && option.sizeOptions && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-2 gap-3 px-5 pb-5">
              {option.sizeOptions.map((size) => {
                const isSizeSelected = selectedSizeId === size.id;
                return (
                  <button
                    key={size.id}
                    type="button"
                    onClick={() => onSelectSize(size.id)}
                    aria-pressed={isSizeSelected}
                    className={`rounded-xl border-2 p-4 text-left transition-colors duration-200 ${
                      isSizeSelected
                        ? "border-primary-500 bg-primary-50"
                        : "border-neutral-300 bg-white"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                          isSizeSelected ? "border-primary-500" : "border-neutral-400"
                        }`}
                      >
                        {isSizeSelected && (
                          <span className="h-2.5 w-2.5 rounded-full bg-primary-500" />
                        )}
                      </span>
                      <span className="text-sm font-semibold text-neutral-900">
                        {size.label}
                      </span>
                    </span>
                    <span className="mt-1 block text-xs text-neutral-600">
                      {size.description}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
