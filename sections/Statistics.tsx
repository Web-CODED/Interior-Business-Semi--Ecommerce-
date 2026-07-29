import { Container } from "@/components/ui/Container";
import { StatCard } from "@/components/cards/StatCard";
import { STATS } from "@/constants/stats";

export function Statistics() {
  return (
    <section className="py-14 sm:py-16">
      <Container>
        <div className="rounded-calculator bg-neutral-200 p-8 sm:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <StatCard key={stat.id} {...stat} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
