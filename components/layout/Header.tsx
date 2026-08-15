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
 * Sticky site header (Part 2, revised). Always solid white — no longer
 * transparent over the hero — so hero content never sits underneath it.
 * Still shrinks slightly and gains a shadow after 40px of scroll for a
 * subtle "settled" feel; only the height/shadow change, not the color.
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
        "fixed top-0 inset-x-0 z-[100] bg-white transition-all duration-300 ease-out",
        scrolled
          ? "shadow-[0_6px_24px_rgba(0,0,0,0.06)] h-[72px] lg:h-[76px]"
          : "shadow-[0_1px_0_rgba(0,0,0,0.04)] h-[70px] lg:h-[82px]"
      )}
    >
      <Container className="flex h-full items-center justify-between">
        <a href="/" className="flex items-center gap-2 lg:gap-3" aria-label="Ganpati Interiors — Home">
  <Image
    src="/images/logo-icon.png"
    alt=""
    width={953}
    height={909}
    priority
    className="h-10 lg:h-14 w-auto object-contain shrink-0"
  />
  <Image
    src="/images/logo-wordmark.png"
    alt="Ganpati Interiors"
    width={1238}
    height={434}
    priority
    className="h-8 lg:h-11 w-auto object-contain shrink-0"
  />
</a>

        <nav className="hidden lg:flex items-center gap-9" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-body font-medium text-neutral-900 transition-colors duration-200 group"
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
          className="lg:hidden flex size-12 items-center justify-center rounded-full text-neutral-900"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <Menu className="size-6" />
        </button>
      </Container>
    </header>
  );
}
