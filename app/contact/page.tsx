import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CONTACT_ROWS, type ContactRow } from "@/constants/footer";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <section className="mx-auto max-w-[1280px] px-5 py-14 md:px-10 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-primary-600">
            Get in touch
          </p>
          <h1 className="mt-2 max-w-2xl text-[28px] font-bold leading-tight text-neutral-900 md:text-[42px]">
            We&apos;d love to hear about your project
          </h1>
          <p className="mt-4 max-w-xl text-base leading-[1.7] text-neutral-600 md:text-lg">
            Reach out for a free consultation, or drop by our Siliguri studio.
          </p>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
            {/* Left: contact details + map */}
            <div className="space-y-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {CONTACT_ROWS.map((row) => (
                  <ContactRowCard key={row.label} row={row} />
                ))}
              </div>

              <div className="overflow-hidden rounded-[24px] shadow-[0_6px_24px_rgba(0,0,0,0.06)]">
                <iframe
                  title="Ganpati Interiors location"
                  src="https://www.google.com/maps?q=Pradhan+Nagar+Siliguri+734003&output=embed"
                  className="h-[320px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Right: enquiry form */}
            <div className="rounded-[28px] bg-white p-6 shadow-[0_18px_48px_rgba(0,0,0,0.12)] sm:p-8">
              <h2 className="text-xl font-bold text-neutral-900">Send us a message</h2>
              <p className="mt-1.5 text-sm text-neutral-600">
                We typically respond within a few hours.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function ContactRowCard({ row }: { row: ContactRow }) {
  const Icon = row.icon;

  const content = (
    <div className="flex h-full items-start gap-3 rounded-2xl border border-neutral-300 bg-white p-4 shadow-[0_6px_24px_rgba(0,0,0,0.06)] transition-shadow duration-300 hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)]">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-100">
        <Icon className="h-5 w-5 text-primary-700" strokeWidth={1.75} aria-hidden="true" />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
          {row.label}
        </p>
        <p className="mt-0.5 text-sm font-medium text-neutral-900">{row.value}</p>
      </div>
    </div>
  );

  if (row.href) {
    return (
      <a
        href={row.href}
        target={row.href.startsWith("http") ? "_blank" : undefined}
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return content;
}

