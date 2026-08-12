"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MapCard } from "@/components/layout/MapCard";
import {
  QUICK_LINKS,
  SERVICE_LINKS,
  SOCIAL_LINKS,
  CONTACT_ROWS,
  LEGAL_LINKS,
} from "@/constants/footer";

/**
 * Site footer (Part 4). Dark plum background, 4 columns desktop, accordion
 * on mobile for the link columns. Newsletter has its own local success state.
 * MapCard sits between the link grid and the bottom legal row.
 */
export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function handleSubscribe(e: FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    // Placeholder submit — wire up to a real endpoint later.
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 800);
  }

  return (
    <footer className="bg-secondary-900 text-white">
      <Container className="pt-16 pb-10 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-4 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <Image
                src="/images/logo-white.png"
                alt=""
                width={40}
                height={40}
                className="h-10 w-auto object-contain"
              />
              <span className="text-lg font-bold">Ganpati Interiors</span>
            </div>
            <p className="mt-4 max-w-[320px] text-body leading-[1.8] text-white/70">
              Complete interior and décor solutions in Siliguri — modular
              kitchens, false ceilings, furniture and full-home design, built
              around how you actually live.
            </p>
            <Button size="md" variant="primary" className="mt-6">
              Book Consultation
            </Button>
            <div className="mt-6 flex gap-3.5">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex size-[46px] items-center justify-center rounded-full bg-white/10 text-white transition-all duration-250 hover:scale-[1.08] hover:bg-primary-500"
                >
                  <social.icon className="size-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links — accordion on mobile, static list on desktop */}
          <details className="group border-b border-white/15 pb-4 lg:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-between py-2 text-lg font-semibold">
              Quick Links
              <span className="text-white/60 transition-transform duration-250 group-open:rotate-180">▾</span>
            </summary>
            <FooterLinkList links={QUICK_LINKS} className="mt-3" />
          </details>
          <div className="hidden lg:block">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <FooterLinkList links={QUICK_LINKS} className="mt-6" />
          </div>

          {/* Services — accordion on mobile, static list on desktop */}
          <details className="group border-b border-white/15 pb-4 lg:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-between py-2 text-lg font-semibold">
              Services
              <span className="text-white/60 transition-transform duration-250 group-open:rotate-180">▾</span>
            </summary>
            <FooterLinkList links={SERVICE_LINKS} className="mt-3" />
          </details>
          <div className="hidden lg:block">
            <h3 className="text-lg font-semibold">Services</h3>
            <FooterLinkList links={SERVICE_LINKS} className="mt-6" />
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="mt-6 flex flex-col gap-4">
              {CONTACT_ROWS.map((row) => (
                <li key={row.label} className="flex items-start gap-3">
                  <row.icon className="mt-0.5 size-[18px] shrink-0 text-primary-400" />
                  {row.href ? (
                    <a
                      href={row.href}
                      target={row.href.startsWith("http") ? "_blank" : undefined}
                      rel={row.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-body text-white/85 transition-colors duration-200 hover:text-white"
                    >
                      {row.value}
                    </a>
                  ) : (
                    <span className="text-body text-white/85">{row.value}</span>
                  )}
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-lg font-semibold">Stay Updated</h3>
            <p className="mt-2 text-caption text-white/70">
              Design tips and project reveals, once or twice a month.
            </p>
            <form onSubmit={handleSubscribe} className="mt-4 flex gap-2" noValidate>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status !== "idle") setStatus("idle");
                }}
                placeholder="Your email"
                aria-label="Email address"
                className="h-[52px] w-full min-w-0 rounded-input border border-white/20 bg-white/5 px-4 text-body text-white placeholder:text-white/50 focus:border-primary-400 focus:outline-none"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                aria-label="Subscribe"
                className="flex h-[52px] shrink-0 items-center justify-center rounded-input bg-primary-500 px-4 text-white transition-colors duration-200 hover:bg-primary-600 disabled:opacity-60"
              >
                <ArrowRight className="size-5" />
              </button>
            </form>
            {status === "success" && (
              <p className="mt-2 text-small text-success-500">Subscribed — thank you!</p>
            )}
            {status === "error" && (
              <p className="mt-2 text-small text-error-500">Enter a valid email address.</p>
            )}
          </div>
        </div>

        {/* Map */}
        <div className="mt-14">
          <h3 className="mb-5 text-lg font-semibold">Find Us</h3>
          <MapCard />
        </div>

        <div className="mt-14 h-px w-full bg-white/15" />

        <div className="mt-8 flex flex-col gap-4 text-small text-white/70 lg:flex-row lg:items-center lg:justify-between">
          <p>&copy; {new Date().getFullYear()} Ganpati Interiors. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {LEGAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors duration-200 hover:text-primary-400 hover:underline"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterLinkList({ links, className }: { links: { label: string; href: string }[]; className?: string }) {
  return (
    <ul className={className}>
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            className="inline-block py-1.5 text-body text-white/85 transition-colors duration-200 hover:text-primary-400"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
