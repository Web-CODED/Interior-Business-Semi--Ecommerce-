"use client";

import { useCountUp } from "@/hooks/useCountUp";

export interface StatCardProps {
  value: number;
  suffix: string;
  label: string;
}

export function StatCard({ value, suffix, label }: StatCardProps) {
  const { ref, value: animatedValue } = useCountUp(value);

  return (
    <div ref={ref} className="flex flex-col items-center gap-3 text-center">
      <span className="text-[3.25rem] font-bold leading-none text-primary-600">
        {animatedValue.toLocaleString()}
        {suffix}
      </span>
      <span className="text-body text-neutral-700">{label}</span>
    </div>
  );
}
