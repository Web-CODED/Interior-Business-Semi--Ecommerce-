"use client";

/**
 * FloatingWhatsApp
 *
 * Sticky WhatsApp button (Part 2 spec: circle, bottom-right, heavy shadow,
 * hover scale 1.08) with a small red notification badge — the kind of
 * unread-count badge you see on app icons on a phone's home screen —
 * instead of a persistent chat bubble popup.
 *
 * Positioned to clear the mobile BottomNav; desktop uses the standard
 * 32px edge spacing from Part 2.
 */

const WHATSAPP_NUMBER = "917679147001"; // TODO: replace with real number
const WHATSAPP_MESSAGE = "Hi! I'd like to know more about your interior design services.";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.001 3C9.096 3 3.5 8.596 3.5 15.5c0 2.42.68 4.68 1.86 6.61L3 29l7.09-2.31A12.44 12.44 0 0 0 16 28.5c6.905 0 12.5-5.596 12.5-12.5S22.906 3 16.001 3Zm0 22.7c-2.07 0-4-.57-5.66-1.56l-.4-.24-4.21 1.37 1.38-4.1-.26-.42A10.16 10.16 0 0 1 5.8 15.5c0-5.63 4.57-10.2 10.2-10.2 5.63 0 10.2 4.57 10.2 10.2 0 5.63-4.57 10.2-10.2 10.2Zm5.6-7.64c-.31-.15-1.82-.9-2.1-1-.28-.1-.49-.15-.69.15-.2.31-.79 1-.97 1.2-.18.21-.36.23-.67.08-.31-.15-1.3-.48-2.47-1.53-.91-.81-1.53-1.81-1.71-2.12-.18-.31-.02-.47.13-.62.14-.14.31-.36.46-.54.15-.18.2-.31.31-.51.1-.21.05-.39-.03-.54-.08-.15-.69-1.67-.95-2.28-.25-.6-.5-.52-.69-.53h-.59c-.2 0-.54.08-.82.39-.28.31-1.08 1.06-1.08 2.58 0 1.52 1.11 2.99 1.26 3.2.15.21 2.19 3.34 5.31 4.68.74.32 1.32.51 1.77.65.74.24 1.42.2 1.95.12.6-.09 1.82-.74 2.08-1.46.26-.72.26-1.33.18-1.46-.08-.13-.28-.21-.59-.36Z" />
    </svg>
  );
}

export function FloatingWhatsApp() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp — 1 new message"
      className="
        fixed bottom-[92px] right-5 z-[600] flex size-[60px] items-center
        justify-center rounded-full bg-[#25D366] text-white
        shadow-[0_18px_48px_rgba(0,0,0,0.18)]
        transition-transform duration-200 hover:scale-[1.08]
        md:bottom-8 md:right-8
      "
    >
      <WhatsAppIcon className="size-8" />

      {/* Notification badge — mobile app-icon style unread indicator */}
      <span
        className="absolute -right-1 -top-1 flex size-6 items-center justify-center rounded-full bg-error-500 text-[11px] font-bold text-white ring-2 ring-white"
        aria-hidden="true"
      >
        1
      </span>
    </a>
  );
}

export default FloatingWhatsApp;
