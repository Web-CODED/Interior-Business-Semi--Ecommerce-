"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/constants/navigation";
import { useMobileMenu } from "@/components/layout/MobileMenuContext";

/**
 * Sticky site header (Part 2). Transparent over the hero image, switches to
 * a solid white background with a soft shadow after 40px of scroll.
 * The mobile hamburger and the BottomNav's "More" button share one drawer
 * via MobileMenuContext, so either entry point opens the same panel.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { setOpen } = useMobileMenu();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-[100] transition-all duration-300 ease-out",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_6px_24px_rgba(0,0,0,0.06)] h-[72px] lg:h-[76px]"
          : "bg-transparent h-[70px] lg:h-[82px]"
      )}
    >
      <Container className="flex h-full items-center justify-between">
        <a href="/" className="flex items-center gap-2.5" aria-label="Ganpati Interiors — Home">
          <Image
            src="/images/logo.png"
            alt=""
            width={44}
            height={44}
            priority
            className="h-[32px] lg:h-[40px] w-auto object-contain shrink-0"
          />
          <span
            className={cn(
              "text-lg lg:text-xl font-bold tracking-tight whitespace-nowrap transition-colors duration-300",
              scrolled ? "text-neutral-900" : "text-white"
            )}
          >
            Ganpati Interiors
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-9" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "relative text-body font-medium transition-colors duration-200 group",
                scrolled ? "text-neutral-900" : "text-white"
              )}
            >
              {link.label}
              <span className="absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-primary-500 transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button size="md" variant="primary">
            Book Consultation
          </Button>
        </div>

        <button
          className={cn(
            "lg:hidden flex size-12 items-center justify-center rounded-full",
            scrolled ? "text-neutral-900" : "text-white"
          )}
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <Menu className="size-6" />
        </button>
      </Container>
    </header>
  );
}
