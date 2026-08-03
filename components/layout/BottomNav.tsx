"use client";

import { Home, LayoutGrid, Calculator, Menu, Sparkles } from "lucide-react";
import { useMobileMenu } from "@/components/layout/MobileMenuContext";
import { cn } from "@/lib/utils";

interface TabItem {
  label: string;
  href?: string;
  icon: typeof Home;
  onClick?: () => void;
}

/**
 * App-style bottom navigation for mobile only (Livspace-inspired reference).
 * Sits fixed above the device's own nav bar; hidden at lg and above where
 * the full Header nav takes over.
 */
export function BottomNav() {
  const { setOpen } = useMobileMenu();

  const items: TabItem[] = [
    { label: "Home", href: "/", icon: Home },
    { label: "Catalogues", href: "/catalogues", icon: LayoutGrid },
    { label: "Get Estimate", href: "/#contact", icon: Calculator },
    { label: "More", icon: Menu, onClick: () => setOpen(true) },
  ];

  return (
    <nav
      aria-label="Mobile"
      className="fixed inset-x-0 bottom-0 z-[150] flex items-center justify-around border-t border-neutral-300 bg-white/95 backdrop-blur-md pb-[env(safe-area-inset-bottom)] lg:hidden"
    >
      {/* Left two tabs */}
      {items.slice(0, 2).map((item) => (
        <TabLink key={item.label} item={item} />
      ))}

      {/* Floating center CTA */}
      <a
        href="/#contact"
        aria-label="Let's Begin — get a free quote"
        className="relative -mt-7 flex size-16 shrink-0 items-center justify-center rounded-full bg-primary-500 text-white shadow-[0_12px_36px_rgba(0,0,0,0.18)] transition-transform duration-200 active:scale-95"
      >
        <Sparkles className="size-6" strokeWidth={2} />
      </a>

      {/* Right two tabs */}
      {items.slice(2).map((item) => (
        <TabLink key={item.label} item={item} />
      ))}
    </nav>
  );
}

function TabLink({ item }: { item: TabItem }) {
  const content = (
    <>
      <item.icon className="size-5" strokeWidth={1.75} />
      <span className="text-[0.6875rem] font-medium">{item.label}</span>
    </>
  );

  const className = cn(
    "flex flex-1 flex-col items-center justify-center gap-1 py-2.5 text-neutral-600 transition-colors duration-200 active:text-primary-600"
  );

  if (item.href) {
    return (
      <a href={item.href} className={className}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={item.onClick} className={className}>
      {content}
    </button>
  );
}
