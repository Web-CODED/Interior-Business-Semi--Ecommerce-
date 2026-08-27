import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { services } from "@/constants/services";

/**
 * Services
 *
 * Matches the Livspace "One-stop shop for all things interiors" pattern:
 * heading + description, then a grid of cards with the image on top and
 * title/description in the card body. Two columns on mobile, three on
 * desktop. The last card (Renovations) spans both remaining columns
 * instead of leaving an empty cell beside it — a wider aspect ratio
 * keeps the stretched image from looking oversized.
 */
export function Services() {
  return (
    <section className="bg-white py-14 md:py-24" aria-label="Our services">
      <Container>
        <h2 className="max-w-[680px] text-[28px] font-bold leading-tight text-neutral-900 md:text-[42px]">
          One-stop shop for all things interiors
        </h2>
        <p className="mt-4 max-w-[640px] text-base leading-[1.7] text-neutral-600 md:text-lg">
          Be it end-to-end interiors, renovation or modular solutions, we
          have it all for your home or office. With a wide range of
          furniture &amp; decor, we have your back from start to finish.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4 md:mt-12 md:grid-cols-3 md:gap-6">
          {services.map((service, index) => {
            const isLast = index === services.length - 1;

            return (
              <Link
                key={service.id}
                href={service.href}
                className={cn(
                  "group flex flex-col overflow-hidden rounded-3xl bg-white shadow-[0_6px_24px_rgba(0,0,0,0.06)] transition-shadow duration-300 hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)]",
                  isLast && "col-span-2"
                )}
              >
                <div
                  className={cn(
                    "relative w-full overflow-hidden",
                    isLast ? "aspect-[21/9]" : "aspect-[4/3]"
                  )}
                >
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    fill
                    sizes={isLast ? "100vw" : "(min-width: 768px) 33vw, 50vw"}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 md:p-5">
                  <h3 className="text-base font-bold leading-snug text-neutral-900 md:text-lg">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-sm leading-snug text-neutral-600">
                    {service.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center md:mt-14">
          <Link href ="/catalogues">
          <Button size="lg" variant="primary">
            Explore All Services
            <ArrowRight className="ml-2 size-5" strokeWidth={2} aria-hidden="true" />
          </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default Services;
