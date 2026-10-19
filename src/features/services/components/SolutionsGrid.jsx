import Container from "../../../components/ui/Container";
import { solutionsList } from "../data/services";

function SolutionCard({ solution }) {
  return (
    <div
      className={`bg-white cursor-pointer rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 ${solution.offset}`}
    >
      {/* Purple circle icon */}
      <div className="w-14 h-14 rounded-full bg-brand-purple flex items-center justify-center text-white text-2xl mb-6">
        {solution.icon}
      </div>

      <h3 className="text-lg font-bold text-brand-navy mb-3">
        {solution.title}
      </h3>

      <p className="text-sm text-brand-gray leading-relaxed">
        {solution.description}
      </p>
    </div>
  );
}

export default function SolutionsGrid() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        {/* Heading */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-bold tracking-[0.25em] text-brand-purple uppercase mb-3">
            Solutions for all your needs
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-brand-navy leading-tight">
            Creating World Class Digital
            <br />
            Solutions
          </h2>
        </div>

        {/* 3-column grid with staggered offsets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {solutionsList.map((solution) => (
            <SolutionCard key={solution.id} solution={solution} />
          ))}
        </div>
      </Container>
    </section>
  );
}