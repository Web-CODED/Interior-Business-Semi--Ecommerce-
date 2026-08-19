"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check } from "lucide-react";

const consultationSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name"),
  email: z.string().trim().email("Enter a valid email address"),
  phone: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit phone number"),
  whatsappUpdates: z.boolean(),
  city: z.string().trim().min(2, "Please enter your city"),
});

type ConsultationFormValues = z.infer<typeof consultationSchema>;

export default function ConsultationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ConsultationFormValues>({
    resolver: zodResolver(consultationSchema),
    defaultValues: { whatsappUpdates: true },
  });

  const onSubmit = async (values: ConsultationFormValues) => {
    // TODO: once Supabase is connected, replace this with the real insert, e.g.
    //   await supabase.from("estimate_leads").insert(values)
    // For now this just confirms the form validates and submits correctly.
    console.log("Consultation form submitted:", values);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center px-5 py-16 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
          <Check className="h-8 w-8 text-primary-600" strokeWidth={2.5} aria-hidden="true" />
        </span>
        <h2 className="mt-6 text-xl font-bold text-neutral-900">
          Thank you! We&apos;ve received your details.
        </h2>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-neutral-600">
          One of our interior designers will reach out to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="px-5 py-6 sm:px-10" noValidate>
      <div className="space-y-4">
        <div>
          <input
            {...register("name")}
            type="text"
            placeholder="Name"
            aria-invalid={!!errors.name}
            className="h-14 w-full rounded-2xl border border-neutral-300 px-4 text-base text-neutral-900 placeholder:text-neutral-500 focus:border-primary-500 focus:outline-none"
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-error-700">{errors.name.message}</p>
          )}
        </div>

        <div>
          <input
            {...register("email")}
            type="email"
            placeholder="Email ID"
            aria-invalid={!!errors.email}
            className="h-14 w-full rounded-2xl border border-neutral-300 px-4 text-base text-neutral-900 placeholder:text-neutral-500 focus:border-primary-500 focus:outline-none"
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-error-700">{errors.email.message}</p>
          )}
        </div>

        <div>
          <div className="flex h-14 items-center gap-2 rounded-2xl border border-neutral-300 px-4 focus-within:border-primary-500">
            <span className="text-lg leading-none" aria-hidden="true">
              🇮🇳
            </span>
            <span className="text-base text-neutral-500">+91</span>
            <input
              {...register("phone")}
              type="tel"
              inputMode="numeric"
              placeholder="Phone number"
              aria-invalid={!!errors.phone}
              className="h-full flex-1 bg-transparent text-base text-neutral-900 placeholder:text-neutral-500 focus:outline-none"
            />
          </div>
          {errors.phone && (
            <p className="mt-1.5 text-xs text-error-700">{errors.phone.message}</p>
          )}
        </div>

        <label className="flex cursor-pointer items-center gap-3">
          <input
            {...register("whatsappUpdates")}
            type="checkbox"
            className="h-5 w-5 shrink-0 accent-primary-500"
          />
          <span className="text-sm text-neutral-800">Send me updates on WhatsApp</span>
        </label>

        <div>
          <input
            {...register("city")}
            type="text"
            placeholder="Select City"
            aria-invalid={!!errors.city}
            className="h-14 w-full rounded-2xl border border-neutral-300 px-4 text-base text-neutral-900 placeholder:text-neutral-500 focus:border-primary-500 focus:outline-none"
          />
          {errors.city && (
            <p className="mt-1.5 text-xs text-error-700">{errors.city.message}</p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 h-14 w-full rounded-full bg-primary-500 text-sm font-bold uppercase tracking-wide text-white transition-colors duration-200 hover:bg-primary-600 disabled:cursor-not-allowed disabled:bg-neutral-400"
      >
        {isSubmitting ? "Submitting..." : "Get Free Consultation"}
      </button>

      <p className="mt-4 text-center text-xs leading-relaxed text-neutral-600">
        By submitting this form, you agree to the{" "}
        <a href="/privacy-policy" className="text-primary-600 hover:underline">
          privacy policy
        </a>{" "}
        &amp;{" "}
        <a href="/terms" className="text-primary-600 hover:underline">
          terms and conditions
        </a>
      </p>
    </form>
  );
}
