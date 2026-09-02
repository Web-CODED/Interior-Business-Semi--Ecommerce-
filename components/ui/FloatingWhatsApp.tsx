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
        justify-center rounded-full bg-[#25D366] text-white
        shadow-[0_18px_48px_rgba(0,0,0,0.18)]
        transition-transform duration-200 hover:scale-[1.08]
        md:right-8
      "
    >
      <Image
        src="/whatsapp-icon.png"   // TODO: put your image in /public
        alt=""
        width={32}
        height={32}
        className="size-8 object-contain"
      />

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
