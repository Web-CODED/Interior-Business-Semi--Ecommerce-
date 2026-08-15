"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProductCard } from "@/components/cards/ProductCard";
import { PRODUCTS } from "@/constants/products";
import { staggerContainer, viewportOnce } from "@/lib/motion";

/**
 * Homepage "Featured" strip — a curated subset of the full Catalogues page.
 * Pulls any product flagged `featured: true` in constants/products.ts.
 *
 * Grid is 2 columns on mobile, 3 on desktop. If the last card would
 * otherwise land alone with empty space beside it, it stretches to fill
 * that gap — computed from the actual product count rather than
 * hardcoded, since `featured` products can be added/removed over time.
 */
export function Featured() {
  const featuredProducts = PRODUCTS.filter((p) => p.featured);
  const total = featuredProducts.length;

  const remainderMobile = total % 2; // 2-col grid
  const remainderDesktop = total % 3; // 3-col grid

  return (
    <section id="featured" className="py-16 sm:py-20 lg:py-24 bg-neutral-200">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <SectionTitle
            eyebrow="Featured Work"
            heading="Our most-loved design categories"
            description="A look at the spaces we're asked to design most — browse the full catalogue for everything we offer."
          />
          <a
            href="/catalogues"
            className="inline-flex h-12 shrink-0 items-center justify-center rounded-button border border-neutral-400 bg-white px-7 text-body font-semibold text-neutral-900 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-neutral-200"
          >
            View Full Catalogue
          </a>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
          className="grid grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {featuredProducts.map((product, index) => {
            const isLast = index === total - 1;

            // Only span if that card would otherwise leave a gap beside it.
            const mobileSpan = isLast && remainderMobile === 1 ? "col-span-2" : "";
            const desktopSpan = isLast
              ? remainderDesktop === 1
                ? "lg:col-span-3"
                : remainderDesktop === 2
                ? "lg:col-span-2"
                : ""
              : "";

            return (
              <div key={product.id} className={`${mobileSpan} ${desktopSpan}`.trim()}>
                <ProductCard product={product} />
              </div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}

export default Featured;
