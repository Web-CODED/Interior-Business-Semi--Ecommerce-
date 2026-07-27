import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /** Renders a wider 1440px max-width variant instead of the default 1280px. */
  wide?: boolean;
}

/**
 * Global layout container. Centers content and applies the responsive
 * horizontal padding defined in Part 1 / Part 8 (80px desktop, 64px tablet, 24px mobile).
 */
export function Container({ wide = false, className, children, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 md:px-16 lg:px-20",
        wide ? "max-w-[1440px]" : "max-w-[1280px]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
