"use client";

import { ESTIMATE_STEPS } from "@/constants/estimate";

interface EstimateProgressBarProps {
  /** Zero-based index of the active step */
  currentStepIndex: number;
}

/**
 * Horizontal stepper used across the multi-step estimate flow.
 * Only step 0 (BHK Type) is wired up today; the rest render as
 * upcoming dots so the flow reads correctly once later steps exist.
 */
export default function EstimateProgressBar({
  currentStepIndex,
}: EstimateProgressBarProps) {
  return (
    <div className="w-full">
      <div className="mx-auto flex max-w-xs items-center justify-between sm:mx-0">
        {ESTIMATE_STEPS.map((step, index) => {
          const isActive = index === currentStepIndex;
          const isComplete = index < currentStepIndex;
          const isFilled = isActive || isComplete;

          return (
            <div key={step.id} className="flex flex-1 items-center last:flex-none">
              <div
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-300 ${
                  isFilled
                    ? "border-secondary-900 bg-secondary-900"
                    : "border-neutral-400 bg-white"
                }`}
              >
                {isFilled && <span className="h-2.5 w-2.5 rounded-full bg-white" />}
              </div>
              {index < ESTIMATE_STEPS.length - 1 && (
                <div
                  className={`mx-2 h-px flex-1 transition-colors duration-300 ${
                    isComplete ? "bg-secondary-900" : "bg-neutral-300"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
      <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-neutral-700">
        {ESTIMATE_STEPS[currentStepIndex].label}
      </p>
    </div>
  );
}
