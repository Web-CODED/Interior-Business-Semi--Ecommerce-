"use client";

import Image from "next/image";

const WHATSAPP_NUMBER = "917679147001"; // TODO: replace with real number
const WHATSAPP_MESSAGE = "Hi! I'd like to know more about your interior design services.";

export function FloatingWhatsApp() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp — 2 new messages"
      className="
        fixed right-5 top-1/2 z-[600] flex size-[60px] -translate-y-1/2 items-center
        justify-center rounded-full
        shadow-[0_18px_48px_rgba(0,0,0,0.18)]
        transition-transform duration-200 hover:scale-[1.08]
        md:right-8
      "
    >
      {/* overflow-hidden lives here, not on the outer <a>, so the badge
          below (which intentionally sits slightly outside the circle)
          never gets clipped. */}
      <div className="relative size-full overflow-hidden rounded-full">
        <Image
          src="/whatsapp-icon.png"
          alt=""
          width={60}
          height={60}
          className="size-full object-cover"
        />
      </div>

      {/* Notification badge */}
      <span
        className="absolute -right-1 -top-1 flex size-6 items-center justify-center rounded-full bg-error-500 text-[11px] font-bold text-white ring-2 ring-white"
        aria-hidden="true"
      >
        2
      </span>
    </a>
  );
}

export default FloatingWhatsApp;
