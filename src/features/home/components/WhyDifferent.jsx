import Container from "../../../components/ui/Container";

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white" aria-hidden="true">
        <path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7zm2 18h-4v-1h4v1zm-3-3v-1.1c-2.34-.64-4-2.77-4-5.4 0-3.31 2.69-6 6-6s6 2.69 6 6c0 2.63-1.66 4.76-4 5.4V17h-4z" />
      </svg>
    ),
    title: "New Business Opportunities",
    description:
      "We identify the fastest path to market for your SaaS idea and build a product that opens real revenue doors from day one.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white" aria-hidden="true">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
      </svg>
    ),
    title: "Trusted and Reliable",
    description:
      "As a SaaS based product development company trusted by 300+ clients globally, our delivery track record speaks louder than promises.",
  },
];

export default function WhyDifferent() {
  return (
    <section className="relative bg-white py-16 lg:py-24 overflow-hidden">
      {/* Decorative large beige blob on the left */}

      <img src="/images/illustrations/ovalCirlce.png" className="hidden lg:block absolute left-10 top-1/2 -translate-y-1/2 pointer-events-none -z-0" alt="" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT: Photo with rounded-3xl shape */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md rounded-[32px] overflow-hidden shadow-xl bg-[#fef6e0]">
              <img
                src="/images/illustrations/team.webp"
                alt="Our team working together"
                className="w-full h-auto object-cover aspect-[4/4.5]"
              />
            </div>
          </div>

          {/* RIGHT: Text + Features */}
          <div className="lg:col-span-7">
            <p className="text-md font-black tracking-[0.25em] text-[#8a2490] uppercase mb-3">
              WHY WE'RE DIFFERENT
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#1e1b7a] leading-[1.15] mb-5">
              A SaaS Development Agency Built for Long-Term Product Success
            </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-10 max-w-2xl">
              As a dedicated saas application development company, Software Flux Solution partners with businesses at every stage, from MVP to enterprise scale. Our saas software development company has delivered 300+ projects across industries, with a team that brings both technical depth and product thinking to every engagement.
            </p>

            <div className="flex flex-col gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-5 items-start">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#a855f7] to-[#8a2490] flex items-center justify-center text-white shadow-md">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1e1b7a] mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed max-w-xl">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}