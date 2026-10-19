import Container from "../../../components/ui/Container";

const bullets = [
  "Custom SaaS solutions designed for business growth.",
  "Scalable platforms with enterprise-level security features.",
  "Expert consulting with intuitive UI/UX design.",
];

export default function DashboardFeature() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: Dashboard image */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src="/images/illustrations/dashboard_mockup.png"
              alt="SaaS dashboard"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* RIGHT: Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-bold text-brand-navy leading-tight mb-6">
              End-to-End SaaS
              <br />
              Development Services for
              <br />
              Startups & Enterprises
            </h2>

            <ul className="flex flex-col gap-3 text-brand-gray leading-relaxed">
              {bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="text-brand-purple mt-1">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}