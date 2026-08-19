"use client";

import Image from "next/image";

interface KitchenLayoutCardProps {
  label: string;
  image: string;
  isSelected: boolean;
  onSelect: () => void;
}

/** Selectable layout card showing the real layout illustration. */
export default function KitchenLayoutCard({
  label,
  image,
  isSelected,
  onSelect,
}: KitchenLayoutCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={isSelected}
      className={`relative flex w-full flex-col overflow-hidden rounded-2xl border-2 bg-white text-left shadow-[0_6px_24px_rgba(0,0,0,0.06)] transition-colors duration-200 ${
        isSelected ? "border-primary-500" : "border-neutral-300"
      }`}
    >
      <span
        className={`absolute right-3 top-3 z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 bg-white transition-colors duration-200 ${
          isSelected ? "border-primary-500" : "border-neutral-400"
        }`}
      >
        {isSelected && <span className="h-3 w-3 rounded-full bg-primary-500" />}
      </span>

      <span className="relative block h-32 w-full bg-primary-50 sm:h-36">
        <Image
          src={image}
          alt={`${label} kitchen layout`}
          fill
          sizes="(min-width: 640px) 220px, 45vw"
          className="object-contain p-4"
        />
      </span>

      <span className="px-4 py-3 text-center text-base font-semibold text-neutral-900">
        {label}
      </span>
    </button>
  );
}
