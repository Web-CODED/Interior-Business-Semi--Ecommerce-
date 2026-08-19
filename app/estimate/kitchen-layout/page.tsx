"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { CornerDownLeft, Minus, Square, Rows3, type LucideIcon } from "lucide-react";
import EstimateProgressBar from "@/components/estimate/EstimateProgressBar";
import KitchenLayoutCard from "@/components/estimate/KitchenLayoutCard";
import { KITCHEN_LAYOUT_OPTIONS } from "@/constants/estimate";

// Placeholder icons standing in for real layout illustrations/photos.
// Swap these for actual images later — see KitchenLayoutCard.
const LAYOUT_ICONS: Record<string, LucideIcon> = {
  "l-shaped": CornerDownLeft,
  straight: Minus,
  "u-shaped": Square,
  parallel: Rows3,
};

export default function KitchenLayoutPage() {
  const router = useRouter();
  const [selectedLayout, setSelectedLayout] = useState<string | null>(null);

  const canProceed = !!selectedLayout;

  const handleNext = () => {
    if (!canProceed) return;
    router.push("/estimate/contact");
  };

  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Top bar */}
      <header className="border-b border-neutral-300 px-5 py-4 sm:px-10">
        <div className="mx-auto flex max-w-2xl items-center justify-between">
          <Link
            href="/"
            className="text-lg font-bold tracking-wide text-neutral-900 sm:text-xl"
          >
            GANPATI INTERIORS
          </Link>
          <span className="text-sm font-medium text-neutral-600">1/4</span>
        </div>
        <div className="mx-auto mt-4 max-w-2xl">
          <EstimateProgressBar
            currentStepIndex={0}
            totalSteps={4}
            stepLabel="Kitchen Layout"
          />
        </div>
      </header>

      {/* Content */}
      <div className="mx-auto w-full max-w-2xl flex-1 px-5 py-8 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h1 className="text-2xl font-bold text-neutral-900 sm:text-[28px]">
            Select the layout of your kitchen
          </h1>
          <p className="mt-2 text-base text-neutral-700">
            Want to know more.{" "}
            <button
              type="button"
              className="font-medium text-primary-600 underline-offset-2 hover:underline"
            >
              Check here
            </button>
          </p>
        </motion.div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          {KITCHEN_LAYOUT_OPTIONS.map((option, index) => (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
            >
              <KitchenLayoutCard
                label={option.label}
                Icon={LAYOUT_ICONS[option.id]}
                isSelected={selectedLayout === option.id}
                onSelect={() => setSelectedLayout(option.id)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="sticky bottom-0 border-t border-neutral-300 bg-white px-5 py-4 sm:px-10">
        <div className="mx-auto flex max-w-2xl items-center justify-between">
          <Link
            href="/"
            className="text-sm font-semibold uppercase tracking-wide text-primary-500"
          >
            Back
          </Link>
          <button
            type="button"
            onClick={handleNext}
            disabled={!canProceed}
            className="rounded-full bg-primary-500 px-10 py-3.5 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_12px_36px_rgba(0,0,0,0.08)] transition-all duration-200 hover:bg-primary-600 disabled:cursor-not-allowed disabled:bg-neutral-400 disabled:shadow-none"
          >
            Next
          </button>
        </div>
      </footer>
    </main>
  );
    }
