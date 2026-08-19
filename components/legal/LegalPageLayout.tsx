import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { LegalSection } from "@/constants/legal";

interface LegalPageLayoutProps {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export default function LegalPageLayout({
  eyebrow,
  title,
  lastUpdated,
  sections,
}: LegalPageLayoutProps) {
  return (
    <main className="bg-neutral-100 pt-[120px] pb-24">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-10">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-neutral-600 transition-colors duration-200 hover:text-primary-600"
        >
          <ArrowLeft size={16} strokeWidth={2} />
          Back to home
        </Link>

        <p className="mb-3 text-[14px] font-semibold uppercase tracking-[0.08em] text-primary-600">
          {eyebrow}
        </p>
        <h1 className="max-w-[680px] text-[30px] font-bold leading-[120%] text-neutral-900 md:text-[42px]">
          {title}
        </h1>
        <p className="mt-4 text-[15px] text-neutral-600">
          Last updated: {lastUpdated}
        </p>

        <div className="mt-16 grid gap-12 lg:grid-cols-[260px_1fr] lg:gap-16">
          <aside className="hidden lg:block">
            <nav className="sticky top-[120px] space-y-1">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block rounded-2xl px-4 py-2.5 text-[14px] text-neutral-600 transition-colors duration-200 hover:bg-white hover:text-primary-600"
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>

          <article className="max-w-[720px] space-y-14 rounded-[24px] bg-white p-6 shadow-[0_6px_24px_rgba(0,0,0,0.06)] md:p-10">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-[120px]">
                <h2 className="mb-4 text-[22px] font-semibold leading-[120%] text-neutral-900">
                  {section.title}
                </h2>

                {section.paragraphs?.map((paragraph, index) => (
                  <p
                    key={index}
                    className="mb-4 text-[16px] leading-[180%] text-neutral-700 last:mb-0"
                  >
                    {paragraph}
                  </p>
                ))}

                {section.bullets && (
                  <ul className="mt-2 space-y-2.5">
                    {section.bullets.map((bullet, index) => (
                      <li
                        key={index}
                        className="flex gap-3 text-[16px] leading-[180%] text-neutral-700"
                      >
                        <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </article>
        </div>
      </div>
    </main>
  );
}
