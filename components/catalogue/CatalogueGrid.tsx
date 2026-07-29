"use client";

import { motion } from "framer-motion";
import { ProductCard } from "@/components/cards/ProductCard";
import { PRODUCTS } from "@/constants/products";
import { staggerContainer, viewportOnce } from "@/lib/motion";

export function CatalogueGrid() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer(0.08)}
      className="grid grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {PRODUCTS.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </motion.div>
  );
}
