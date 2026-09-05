import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { FAQ_ITEMS } from "@/constants/faq";

export function FAQSection() {
  return (
    <section className="bg-[#FFF5F2] py-24">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-10">
        <div className="mx-auto mb-12 max-w-[680px] text-center lg:text-left">
          <p className="mb-3 text-[14px] font-semibold uppercase tracking-[0.08em] text-[#E3553D]">
            Common Questions
          </p>
          <h2 className="text-[30px] font-bold leading-[120%] text-neutral-900 md:text-[42px]">
            FAQs About Home Interior Design
          </h2>
        </div>

        <div className="mx-auto max-w-[720px]">
          <FAQAccordion items={FAQ_ITEMS} />
        </div>
      </div>
    </section>
  );
}
