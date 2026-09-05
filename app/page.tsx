import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/sections/Hero";
import { Services } from "@/sections/Services";
import { EstimateTeaser } from "@/sections/EstimateTeaser";
import { Featured } from "@/sections/Featured";
import { InspirationGallery } from "@/sections/InspirationGallery";
import { WhyChooseUs } from "@/sections/WhyChooseUs";
import { Testimonials } from "@/sections/Testimonials";
import { Process } from "@/sections/Process";
import { Statistics } from "@/sections/Statistics";
import { FAQSection } from "@/sections/FAQSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <EstimateTeaser />
        <Featured />
        <InspirationGallery />
        <WhyChooseUs />
        <Testimonials />
        <Process />
        <Statistics />
        <FAQSection />
        {/* Next up: EstimateCalculator, ProjectShowcase, BeforeAfter, Gallery,
            Awards, Media, FinalCTA, Newsletter */}
      </main>
      <Footer />
    </>
  );
}
