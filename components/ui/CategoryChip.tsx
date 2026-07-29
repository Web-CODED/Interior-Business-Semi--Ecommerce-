import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

export interface CategoryChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

/**
 * Pill-shaped filter chip (Part 3A — Section 3: Category Filter Chips).
 * Used for inspiration/category filtering and project filter bars.
 */
export function CategoryChip({ active = false, className, children, ...props }: CategoryChipProps) {
  return (
    <button
      className={cn(
        "shrink-0 rounded-full px-5 py-2.5 text-body font-medium transition-all duration-200 ease-out",
        active
          ? "bg-primary-500 text-white"
          : "bg-white text-neutral-900 border border-neutral-400 hover:border-primary-500 hover:bg-primary-50",
        className
      )}
      aria-pressed={active}
      {...props}
    >
      {children}
    </button>
  );
}
