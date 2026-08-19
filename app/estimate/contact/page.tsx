"use client";

import Link from "next/link";
import { X } from "lucide-react";
import ConsultationForm from "@/components/estimate/ConsultationForm";

export default function EstimateContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <header className="flex items-center gap-4 border-b border-neutral-300 px-5 py-4 sm:px-10">
        <Link
          href="/"
          aria-label="Close"
          className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-900 transition-colors duration-150 hover:bg-neutral-100"
        >
          <X className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
        </Link>
        <h1 className="text-lg font-bold text-neutral-900 sm:text-xl">
          Talk to an Interior Designer
        </h1>
      </header>

      <div className="mx-auto max-w-2xl">
        <ConsultationForm />
      </div>
    </main>
  );
}
