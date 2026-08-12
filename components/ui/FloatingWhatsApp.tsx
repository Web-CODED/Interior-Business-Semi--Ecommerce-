"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

/**
 * FloatingWhatsApp
 *
 * Sticky WhatsApp button, always visible (Part 2 spec: circle, bottom-right,
 * heavy shadow, hover scale 1.08). Below it sits a persistent chat bubble
 * ("notification message popup") that stays on screen rather than only
 * appearing on hover — dismissible, and the dismissal is remembered for
 * the browser session so it doesn't nag on every page.
 *
 * Positioned to clear the mobile BottomNav (extra bottom offset on small
 * screens); desktop uses the standard 32px edge spacing from Part 2.
 */

const WHATSAPP_NUMBER = "911234567890"; // TODO: replace with real number
const WHATSAPP_MESSAGE = "Hi! I'd like to know more about your interior design services.";
const DISMISS_KEY = "ganpati-whatsapp-bubble-dismissed";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.001 3C9.096 3 3.5 8.596 3.5 15.5c0 2.42.68 4.68 1.86 6.61L3 29l7.09-2.31A12.44 12.44 0 0 0 16 28.5c6.905 0 12.5-5.596 12.5-12.5S22.906 3 16.001 3Zm0 22.7c-2.07 0-4-.57-5.66-1.56l-.4-.24-4.21 1.37 1.38-4.1-.26-.42A10.16 10.16 0 0 1 5.8 15.5c0-5.63 4.57-10.2 10.2-10.2 5.63 0 10.2 4.57 10.2 10.2 0 5.63-4.57 10.2-10.2 10.2Zm5.6-7.64c-.31-.15-1.82-.9-2.1-1-.28-.1-.49-.15-.69.15-.2.31-.79 1-.97 1.2-.18.21-.36.23-.67.08-.31-.15-1.3-.48-2.47-1.53-.91-.81-1.53-1.81-1.71-2.12-.18-.31-.02-.47.13-.62.14-.14.31-.36.46-.54.15-.18.2-.31.31-.51.1-.21.05-.39-.03-.54-.08-.15-.69-1.67-.95-2.28-.25-.6-.5-.52-.69-.53h-.59c-.2 0-.54.08-.82.39-.28.31-1.08 1.06-1.08 2.58 0 1.52 1.11 2.99 1.26 3.2.15.21 2.19 3.34 5.31 4.68.74.32 1.32.51 1.77.65.74.24 1.42.2 1.95.12.6-.09 1.82-.74 2.08-1.46.26-.72.26-1.33.18-1.46-.08-.13-.28-.21-.59-.36Z" />
    </svg>
  );
}

export function FloatingWhatsApp() {
  const [bubbleVisible, setBubbleVisible] = useState(false);

  useEffect(() => {
    const alreadyDismissed = sessionStorage.getItem(DISMISS_KEY);
    if (alreadyDismissed) return;

    // Small delay so it doesn't compete with the hero for attention on load.
    const timer = setTimeout(() => setBubbleVisible(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  function dismissBubble() {
    setBubbleVisible(false);
    sessionStorage.setItem(DISMISS_KEY, "1");
  }

  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div className="fixed bottom-[92px] right-5 z-[600] flex flex-col items-end gap-3 md:bottom-8 md:right-8">
      {bubbleVisible && (
        <div
          className="
            relative max-w-[220px] rounded-2xl bg-white p-3.5 pr-8
            text-sm leading-snug text-neutral-800 shadow-[0_18px_48px_rgba(0,0,0,0.12)]
            animate-in fade-in slide-in-from-bottom-2 duration-300
          "
          role="status"
        >
          <button
            onClick={dismissBubble}
            aria-label="Dismiss message"
            className="absolute right-2 top-2 flex size-5 items-center justify-center rounded-full text-neutral-400 hover:text-neutral-700"
          >
            <X className="size-3.5" />
          </button>
          Hi there! 👋 Have a question about your interior project? Chat with us.
        </div>
      )}

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="
          group flex size-[60px] items-center justify-center rounded-full
          bg-[#25D366] text-white shadow-[0_18px_48px_rgba(0,0,0,0.18)]
          transition-transform duration-200 hover:scale-[1.08]
        "
      >
        <WhatsAppIcon className="size-8" />
      </a>
    </div>
  );
}

export default FloatingWhatsApp;
