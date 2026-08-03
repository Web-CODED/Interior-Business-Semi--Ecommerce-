import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { PRODUCTS } from "@/constants/products";
import { ProductGallery } from "@/components/catalogue/ProductGallery";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: `${product.title} — Ganpati Interiors`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) notFound();

  return (
    <>
      <Header />
      <main className="pt-[88px] lg:pt-[100px]">
        <section className="py-14 sm:py-20 lg:py-24">
          <Container>
            <span className="text-caption font-semibold uppercase tracking-[0.08em] text-primary-600">
              Catalogues
            </span>
            <h1 className="mt-3 max-w-[680px] text-[1.875rem] lg:text-section font-bold leading-[1.2] text-neutral-900">
              {product.title}
            </h1>
            <p className="mt-4 max-w-[640px] text-body lg:text-body-lg leading-[1.7] text-neutral-700">
              {product.description}
            </p>

            <div className="mt-12">
              <ProductGallery images={product.images} title={product.title} />
            </div>

            <div className="mt-12 flex flex-col items-start gap-4 rounded-feature bg-neutral-200 p-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-card font-semibold text-neutral-900">
                  Want this for your own space?
                </h2>
                <p className="mt-1 text-body text-neutral-700">
                  Get a free consultation and estimate for {product.title.toLowerCase()}.
                </p>
              </div>
              <a
                href="/#contact"
                className="inline-flex h-14 shrink-0 items-center justify-center rounded-button bg-primary-500 px-7 text-body font-semibold text-white transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-primary-600"
              >
                Get Free Estimate
              </a>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
