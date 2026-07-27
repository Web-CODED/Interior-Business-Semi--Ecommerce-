import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  shadowLevel?: 1 | 2 | 3;
  hoverLift?: boolean;
}

const shadowMap = {
  1: "shadow-[0_6px_24px_rgba(0,0,0,0.06)]",
  2: "shadow-[0_12px_36px_rgba(0,0,0,0.08)]",
  3: "shadow-[0_18px_48px_rgba(0,0,0,0.12)]",
};

/**
 * Universal card base (Part 5 — Card Component). Compose specific card
 * types (ServiceCard, ReviewCard, ProjectCard, etc.) on top of this.
 */
export function Card({
  shadowLevel = 1,
  hoverLift = true,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-card bg-white overflow-hidden transition-all duration-300 ease-out",
        shadowMap[shadowLevel],
        hoverLift && "hover:-translate-y-1.5 hover:shadow-[0_18px_42px_rgba(0,0,0,0.10)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
