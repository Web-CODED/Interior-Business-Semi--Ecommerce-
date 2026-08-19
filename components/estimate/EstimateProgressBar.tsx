"use client";

interface EstimateProgressBarProps {
  /** Zero-based index of the active step */
  currentStepIndex: number;
  /** Total number of steps in this flow (dots rendered) */
  totalSteps: number;
  /** Label shown below the dots for the active step, e.g. "BHK Type" */
  stepLabel: string;
}

/**
 * Horizontal stepper reused across every estimate flow (BHK Type,
 * Kitchen Layout, etc). Each flow passes its own step count and label
 * rather than this component owning that data, so new flows don't
 * require editing this file.
 */
export default function EstimateProgressBar({
  currentStepIndex,
  totalSteps,
  stepLabel,
}: EstimateProgressBarProps) {
  return (
    <div className="w-full">
      <div className="mx-auto flex max-w-xs items-center justify-between sm:mx-0">
        {Array.from({ length: totalSteps }).map((_, index) => {
          const isActive = index === currentStepIndex;
          const isComplete = index < currentStepIndex;
          const isFilled = isActive || isComplete;

          return (
            <div key={index} className="flex flex-1 items-center last:flex-none">
              <div
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-300 ${
                  isFilled
                    ? "border-secondary-900 bg-secondary-900"
                    : "border-neutral-400 bg-white"
                }`}
              >
                {isFilled && <span className="h-2.5 w-2.5 rounded-full bg-white" />}
              </div>
              {index < totalSteps - 1 && (
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
        {stepLabel}
      </p>
    </div>
  );
}
