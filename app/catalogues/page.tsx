import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CatalogueGrid } from "@/components/catalogue/CatalogueGrid";

export const metadata: Metadata = {
  title: "Catalogues — Ganpati Interiors",
  description: "Browse every design category we offer, from modular kitchens to pooja rooms.",
};

export default function CataloguesPage() {
  return (
    <>
      <Header />
      <main className="pt-[88px] lg:pt-[100px]">
        <section className="py-14 sm:py-20 lg:py-24">
          <Container>
            <SectionTitle
              eyebrow="Catalogues"
              heading="Every space we design, in one place"
              description="From modular kitchens to pooja rooms — explore each category and see the finish quality for yourself."
              align="center"
              className="mb-14 mx-auto"
            />
            <CatalogueGrid />
          </Container>
        </section>
      </main>
    </>
  );
}
