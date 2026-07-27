import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export interface SectionTitleProps {
  eyebrow?: string;
  heading: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  /** Max width for the description paragraph (Part 1: 640-720px). */
  descriptionMaxWidth?: string;
}

/**
 * Shared heading block used at the top of every homepage section
 * (Part 5 — Section Title). Never redesign per-section; only pass props.
 */
export function SectionTitle({
  eyebrow,
  heading,
  description,
  align = "left",
  className,
  descriptionMaxWidth = "max-w-[640px]",
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "flex flex-col",
        align === "center" && "items-center text-center mx-auto",
        className
      )}
    >
      {eyebrow && (
        <span className="text-caption font-semibold uppercase tracking-[0.08em] text-primary-600 mb-4">
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "max-w-[680px] text-[1.875rem] lg:text-section font-bold leading-[1.2] text-neutral-900",
          align === "center" && "mx-auto"
        )}
      >
        {heading}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-body lg:text-body-lg leading-[1.7] text-neutral-700",
            descriptionMaxWidth,
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
