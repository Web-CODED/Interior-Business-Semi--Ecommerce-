"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS } from "@/constants/navigation";
import { useMobileMenu } from "@/components/layout/MobileMenuContext";

export function MobileDrawer() {
  const { open, setOpen } = useMobileMenu();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Robust mobile scroll lock — see Header comment history for why plain
  // `overflow: hidden` on body isn't enough in mobile WebViews.
  useEffect(() => {
    if (!open) return;

    const scrollY = window.scrollY;
    const { body, documentElement: html } = document;

    html.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.overflow = "hidden";

    return () => {
      html.style.overflow = "";
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.overflow = "";
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-[199] bg-black/45"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
          <motion.div
            className="fixed right-0 top-0 z-[200] h-full w-[85%] max-w-sm bg-white p-6 flex flex-col gap-6 overflow-y-auto"
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
                onClick={() => setOpen(false)}
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
                  onClick={() => setOpen(false)}
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
    </AnimatePresence>,
    document.body
  );
}
