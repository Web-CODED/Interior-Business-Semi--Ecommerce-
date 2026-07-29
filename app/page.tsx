import { Header } from "@/components/layout/Header";
import { Hero } from "@/sections/Hero";
import { Services } from "@/sections/Services";
import { Featured } from "@/sections/Featured";
import { InspirationGallery } from "@/sections/InspirationGallery";
import { WhyChooseUs } from "@/sections/WhyChooseUs";
import { Testimonials } from "@/sections/Testimonials";
import { Process } from "@/sections/Process";
import { Statistics } from "@/sections/Statistics";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Featured />
        <InspirationGallery />
        <WhyChooseUs />
        <Testimonials />
        <Process />
        <Statistics />
        {/* Next up: EstimateCalculator, ProjectShowcase, BeforeAfter, Gallery,
            Awards, Media, FAQ, FinalCTA, Newsletter, Footer */}
      </main>
    </>
  );
}
