import { forwardRef } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-button font-semibold transition-all duration-200 ease-out disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-500 text-white shadow-[0_6px_24px_rgba(0,0,0,0.06)] hover:bg-primary-600 hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(0,0,0,0.10)] active:bg-primary-700 active:translate-y-0 active:scale-[0.98]",
        secondary:
          "bg-white text-neutral-900 border border-neutral-400 hover:bg-neutral-200 hover:-translate-y-0.5",
        outline:
          "bg-transparent text-white border border-white/80 hover:bg-white/10 hover:-translate-y-0.5",
        ghost: "bg-transparent text-neutral-900 hover:bg-neutral-200",
        text: "bg-transparent p-0 text-primary-600 underline-offset-4 hover:underline",
        danger: "bg-error-500 text-white hover:bg-error-700",
      },
      size: {
        sm: "h-10 px-5 text-small",
        md: "h-12 px-7 text-body",
        lg: "h-14 px-8 text-body",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

/**
 * Primary interactive control used across the site (Part 5 — Button Component).
 * Supports loading, disabled, and icon slots. Never duplicate — extend via props.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, isLoading, leftIcon, rightIcon, children, disabled, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        disabled={disabled || isLoading}
        aria-busy={isLoading || undefined}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="size-5 animate-spin" aria-hidden />
        ) : (
          <>
            {leftIcon}
            {children}
            {rightIcon}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
