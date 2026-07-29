"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/constants/navigation";

/**
 * Sticky site header (Part 2). Transparent over the hero image, switches to
 * a solid white background with a soft shadow after 40px of scroll.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

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
          aria-expanded={drawerOpen}
          onClick={() => setDrawerOpen(true)}
        >
          <Menu className="size-6" />
        </button>
      </Container>

      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[199] bg-black/45"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
            />
            <motion.div
              className="fixed right-0 top-0 z-[200] h-full w-[85%] max-w-sm bg-white p-6 flex flex-col gap-6"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.32, ease: "easeInOut" }}
              role="dialog"
              aria-modal="true"
            >
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-neutral-900">Ganpati Interiors</span>
                <button
                  aria-label="Close menu"
                  className="flex size-12 items-center justify-center"
                  onClick={() => setDrawerOpen(false)}
                >
                  <X className="size-6 text-neutral-900" />
                </button>
              </div>
              <nav className="flex flex-col gap-6" aria-label="Mobile">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium text-neutral-900"
                    onClick={() => setDrawerOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <Button size="lg" className="w-full mt-auto">
                Book Consultation
              </Button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
