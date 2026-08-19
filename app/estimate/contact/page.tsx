"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { BHK_TYPE_OPTIONS } from "@/constants/estimate";
import EstimateProgressBar from "@/components/estimate/EstimateProgressBar";
import BhkOptionCard from "@/components/estimate/BhkOptionCard";

export default function BhkTypePage() {
  const router = useRouter();

  const [selectedBhk, setSelectedBhk] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const selectedOption = BHK_TYPE_OPTIONS.find((o) => o.id === selectedBhk);
  const canProceed =
    !!selectedBhk && (!selectedOption?.hasSizeOptions || !!selectedSize);

  const handleSelectBhk = (bhkId: string) => {
    setSelectedBhk(bhkId);
    setSelectedSize(null);
  };

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
          <EstimateProgressBar currentStepIndex={0} />
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
            Select your BHK type
          </h1>
          <p className="mt-2 text-base text-neutral-700">
            To know more about this,{" "}
            <button
              type="button"
              className="font-medium text-primary-600 underline-offset-2 hover:underline"
            >
              click here
            </button>
          </p>
        </motion.div>

        <div className="mt-6 space-y-4">
          {BHK_TYPE_OPTIONS.map((option, index) => (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
            >
              <BhkOptionCard
                option={option}
                isSelected={selectedBhk === option.id}
                selectedSizeId={selectedBhk === option.id ? selectedSize : null}
                onSelect={handleSelectBhk}
                onSelectSize={setSelectedSize}
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

