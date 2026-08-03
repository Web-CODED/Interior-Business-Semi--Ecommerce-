"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp } from "@/lib/motion";
import type { Product } from "@/constants/products";

export interface ProductCardProps {
  product: Product;
}

/**
 * Catalogue product card. Same visual language as ServiceCard so the
 * Catalogues page and homepage Featured strip feel like one system.
 */
export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.a
      href={`/catalogues/${product.slug}`}
      variants={fadeUp}
      className="group block overflow-hidden rounded-card bg-white shadow-[0_6px_24px_rgba(0,0,0,0.06)] transition-all duration-250 ease-out hover:-translate-y-1.5 hover:shadow-[0_18px_42px_rgba(0,0,0,0.10)]"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-200">
        <Image
          src={product.images[0]}
          alt={product.title}
          fill
          sizes="(min-width: 1024px) 25vw, 50vw"
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
        />
      </div>
      <div className="flex items-center justify-between gap-3 p-5">
        <div>
          <h3 className="text-card font-semibold text-neutral-900">{product.title}</h3>
          <p className="mt-1 text-small text-neutral-600 line-clamp-2">{product.description}</p>
        </div>
        <ArrowRight className="size-4 shrink-0 text-primary-600 transition-transform duration-250 group-hover:translate-x-1.5" />
      </div>
    </motion.a>
  );
}
