"use client";

import type { LucideIcon } from "lucide-react";

interface KitchenLayoutCardProps {
  label: string;
  Icon: LucideIcon;
  isSelected: boolean;
  onSelect: () => void;
}

/**
 * Selectable layout card with a placeholder icon standing in for a real
 * illustration/photo. Swap the icon area for a next/image once real
 * layout images exist — everything else (selection state, radio
 * indicator) stays the same.
 */
export default function KitchenLayoutCard({
  label,
  Icon,
  isSelected,
  onSelect,
}: KitchenLayoutCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={isSelected}
      className={`relative flex w-full flex-col overflow-hidden rounded-2xl border-2 bg-white text-left shadow-[0_6px_24px_rgba(0,0,0,0.06)] transition-colors duration-200 ${
        isSelected ? "border-primary-500" : "border-neutral-300"
      }`}
    >
      <span
        className={`absolute right-3 top-3 z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 bg-white transition-colors duration-200 ${
          isSelected ? "border-primary-500" : "border-neutral-400"
        }`}
      >
        {isSelected && <span className="h-3 w-3 rounded-full bg-primary-500" />}
      </span>

      <span className="flex h-32 items-center justify-center bg-primary-50 sm:h-36">
        <Icon className="h-12 w-12 text-primary-600" strokeWidth={1.5} aria-hidden="true" />
      </span>

      <span className="px-4 py-3 text-center text-base font-semibold text-neutral-900">
        {label}
      </span>
    </button>
  );
}
