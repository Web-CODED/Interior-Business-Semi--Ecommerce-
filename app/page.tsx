import { Header } from "@/components/layout/Header";
import { Hero } from "@/sections/Hero";
import { Services } from "@/sections/Services";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        {/* Next up: CategoryChips, InspirationGallery, WhyChooseUs, Testimonials,
            Process, Statistics, EstimateCalculator, ProjectShowcase, BeforeAfter,
            Gallery, Awards, Media, FAQ, FinalCTA, Newsletter, Footer */}
      </main>
    </>
  );
}
