import Container from "../../../components/ui/Container";

export default function SaaSDeeDive() {
  return (
    <section className="relative bg-brand-navy text-white py-20 lg:py-24 overflow-hidden">
      <img
        src="/images/illustrations/saas-dashboard-bg.jpg"
        alt="SaaS dashboard"
        className="absolute opacity-50 z-0 top-0 left-0 w-full h-auto object-contain"
      />
      <Container>
        <div className="relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: Dashboard photo */}
          <div className="rounded-2xl overflow-hidden bg-brand-purple/20">
            <img
              src="/images/illustrations/saas-dashboard.webp"
              alt="SaaS dashboard"
              className="w-full relative z-10 h-auto object-contain"
            />
          </div>

          {/* RIGHT: Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-bold leading-tight mb-4">
              SaaS Development
            </h2>
            <p className="text-white/80 leading-relaxed max-w-lg">
              Not sure where to start? Our saas development consulting helps you
              define the right architecture, stack, and roadmap before a line of
              code is written.
            </p>
          </div>
        </div>
      </Container>

      {/* Orange dot pattern bottom-right */}
      <div className="hidden lg:grid absolute right-12 bottom-12 grid-cols-6 gap-2 opacity-80 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-orange-400" />
        ))}
      </div>
    </section>
  );
}