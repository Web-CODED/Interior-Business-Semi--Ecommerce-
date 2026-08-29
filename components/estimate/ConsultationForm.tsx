"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check, ChevronDown } from "lucide-react";

const consultationSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name"),
  email: z.string().trim().email("Enter a valid email address"),
  phone: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit phone number"),
  projectType: z.string().min(1, "Please select what you'd like to do"),
  budget: z.string().min(1, "Please select your budget range"),
  homeSize: z.string().min(1, "Please select your home size"),
  timeline: z.string().min(1, "Please select a timeline"),
  location: z.string().trim().min(2, "Please enter your location"),
  wantsConsultation: z.boolean(),
  followsSocial: z.boolean(),
  whatsappUpdates: z.boolean(),
  city: z.string().trim().min(2, "Please enter your city"),
});

type ConsultationFormValues = z.infer<typeof consultationSchema>;

const PROJECT_TYPES = [
  "Full Home Interior",
  "Modular Kitchen",
  "Wardrobe",
  "Bedroom",
  "Living Room",
  "Renovation",
  "Commercial / Office",
];

const BUDGET_RANGES = [
  "Under ₹3 Lakhs",
  "₹3–6 Lakhs",
  "₹6–10 Lakhs",
  "₹10–15 Lakhs",
  "₹15 Lakhs+",
];

const HOME_SIZES = ["1 BHK", "2 BHK", "3 BHK", "4+ BHK", "Commercial Space"];

const TIMELINES = [
  "Immediately",
  "Within 1 month",
  "1–3 months",
  "Just exploring",
];

export default function ConsultationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ConsultationFormValues>({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      whatsappUpdates: true,
      wantsConsultation: true,
      followsSocial: false,
    },
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

  const selectClassName =
    "h-14 w-full appearance-none rounded-2xl border border-neutral-300 bg-white px-4 pr-10 text-base text-neutral-900 focus:border-primary-500 focus:outline-none";

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

        {/* What do you want to do? */}
        <div className="relative">
          <select {...register("projectType")} defaultValue="" aria-invalid={!!errors.projectType} className={selectClassName}>
            <option value="" disabled>
              What do you want to do?
            </option>
            {PROJECT_TYPES.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-neutral-500" />
          {errors.projectType && (
            <p className="mt-1.5 text-xs text-error-700">{errors.projectType.message}</p>
          )}
        </div>

        {/* Budget */}
        <div className="relative">
          <select {...register("budget")} defaultValue="" aria-invalid={!!errors.budget} className={selectClassName}>
            <option value="" disabled>
              What is your budget?
            </option>
            {BUDGET_RANGES.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-neutral-500" />
          {errors.budget && (
            <p className="mt-1.5 text-xs text-error-700">{errors.budget.message}</p>
          )}
        </div>

        {/* Home size */}
        <div className="relative">
          <select {...register("homeSize")} defaultValue="" aria-invalid={!!errors.homeSize} className={selectClassName}>
            <option value="" disabled>
              Your home size
            </option>
            {HOME_SIZES.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-neutral-500" />
          {errors.homeSize && (
            <p className="mt-1.5 text-xs text-error-700">{errors.homeSize.message}</p>
          )}
        </div>

        {/* Timeline */}
        <div className="relative">
          <select {...register("timeline")} defaultValue="" aria-invalid={!!errors.timeline} className={selectClassName}>
            <option value="" disabled>
              When do you want to start?
            </option>
            {TIMELINES.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-neutral-500" />
          {errors.timeline && (
            <p className="mt-1.5 text-xs text-error-700">{errors.timeline.message}</p>
          )}
        </div>

        {/* Location */}
        <div>
          <input
            {...register("location")}
            type="text"
            placeholder="Your location"
            aria-invalid={!!errors.location}
            className="h-14 w-full rounded-2xl border border-neutral-300 px-4 text-base text-neutral-900 placeholder:text-neutral-500 focus:border-primary-500 focus:outline-none"
          />
          {errors.location && (
            <p className="mt-1.5 text-xs text-error-700">{errors.location.message}</p>
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

        {/* Free consultation opt-in */}
        <label className="flex items-start gap-3 rounded-2xl border border-neutral-300 px-4 py-3.5">
          <input
            {...register("wantsConsultation")}
            type="checkbox"
            className="mt-0.5 h-5 w-5 shrink-0 accent-primary-500"
          />
          <span className="text-sm leading-snug text-neutral-800">
            Yes, I&apos;d like a free quotation and consultation.
          </span>
        </label>

        {/* Social follow opt-in */}
        <label className="flex items-start gap-3 rounded-2xl border border-neutral-300 px-4 py-3.5">
          <input
            {...register("followsSocial")}
            type="checkbox"
            className="mt-0.5 h-5 w-5 shrink-0 accent-primary-500"
          />
          <span className="text-sm leading-snug text-neutral-800">
            I&apos;m following Ganpati Interiors on{" "}
            <a
              href="https://instagram.com/ganpati_imteriors"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary-600 underline"
            >
              Instagram
            </a>{" "}
            or{" "}
            <a
              href="https://YOUR_GOOGLE_PROFILE_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary-600 underline"
            >
              Google
            </a>{" "}
            — unlock an extra 5% off.
          </span>
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
