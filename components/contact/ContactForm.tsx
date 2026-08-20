"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check } from "lucide-react";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name"),
  email: z.string().trim().email("Enter a valid email address"),
  phone: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit phone number"),
  message: z.string().trim().min(10, "Tell us a little about your project"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (values: ContactFormValues) => {
    // TODO: once Supabase is connected, replace this with the real insert, e.g.
    //   await supabase.from("contact_messages").insert(values)
    console.log("Contact form submitted:", values);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center py-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-100">
          <Check className="h-7 w-7 text-primary-600" strokeWidth={2.5} aria-hidden="true" />
        </span>
        <h3 className="mt-4 text-lg font-bold text-neutral-900">Message sent!</h3>
        <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-neutral-600">
          Thanks for reaching out — we&apos;ll get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div>
        <input
          {...register("name")}
          type="text"
          placeholder="Your name"
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
          placeholder="Email address"
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

      <div>
        <textarea
          {...register("message")}
          rows={4}
          placeholder="Tell us about your project..."
          aria-invalid={!!errors.message}
          className="w-full resize-none rounded-2xl border border-neutral-300 px-4 py-3 text-base text-neutral-900 placeholder:text-neutral-500 focus:border-primary-500 focus:outline-none"
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-error-700">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="h-14 w-full rounded-full bg-primary-500 text-sm font-bold uppercase tracking-wide text-white transition-colors duration-200 hover:bg-primary-600 disabled:cursor-not-allowed disabled:bg-neutral-400"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

