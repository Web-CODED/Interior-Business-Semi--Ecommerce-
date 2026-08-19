"use client";

interface RadioOptionCardProps {
  label: string;
  isSelected: boolean;
  onSelect: () => void;
}

/** Plain radio row — no expandable content, unlike BhkOptionCard. */
export default function RadioOptionCard({
  label,
  isSelected,
  onSelect,
}: RadioOptionCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={isSelected}
      className={`flex w-full items-center gap-3 rounded-2xl border-2 bg-white px-5 py-4 text-left shadow-[0_6px_24px_rgba(0,0,0,0.06)] transition-colors duration-200 ${
        isSelected ? "border-primary-500 bg-primary-50" : "border-neutral-300"
      }`}
    >
      <span
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-200 ${
          isSelected ? "border-primary-500" : "border-neutral-400"
        }`}
      >
        {isSelected && <span className="h-3 w-3 rounded-full bg-primary-500" />}
      </span>
      <span className="text-base font-medium text-neutral-900">{label}</span>
    </button>
  );
}
