import Container from "../../../components/ui/Container";

// Big elliptical curve (horizontal radius 50% = full-width ellipse)
const curveStyle = {
  borderBottomLeftRadius: "50% var(--curve)",
  borderBottomRightRadius: "50% var(--curve)",
};

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden pb-12 [--curve:110px] md:[--curve:180px] lg:[--curve:265px]">
      {/* ============ PINK BAND ============ */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 bottom-12 translate-y-10"
        style={{ ...curveStyle, backgroundColor: "#ecd3dc" }}
      />

      {/* ============ PURPLE HERO ============ */}
      <div
        className="relative text-white overflow-hidden lg:min-h-[875px]"
        style={{
          ...curveStyle,
          background:
            "linear-gradient(100deg, #4e0b5c 0%, #440a52 45%, #2f0e33 75%, #251321 100%)",
        }}
      >
        {/* ---------- DECORATIVE IMAGES ---------- */}

        {/* Yellow ring — top right */}
        <img
          src="/images/illustrations/fullCircle.png"
          alt=""
          aria-hidden="true"
          className="hidden lg:block absolute right-[5%] top-3 w-[90px] pointer-events-none animate-move-y-reverse"
        />

        {/* Yellow dots — bottom right of the illustration */}
        <img
          src="/images/illustrations/dots.png"
          alt=""
          aria-hidden="true"
          className="hidden lg:block absolute left-[61%] top-[77%] w-36 pointer-events-none animate-move-x"
        />

        {/* ---------- HERO CONTENT ---------- */}
        <Container className="relative z-10 pt-28 pb-24 lg:pt-[140px] lg:pb-[245px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 items-center">
            {/* LEFT: text — animated entrance */}
            <div className="lg:col-span-5 relative z-10">
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold leading-[1.1] tracking-tight mb-6 lg:whitespace-nowrap animate-hero-up">
                Trusted SaaS <br />
                Development Company
              </h1>

              <p
                className="text-white text-base sm:text-lg lg:text-[21px] leading-[1.7] mb-12 max-w-[540px] animate-hero-up"
                style={{ animationDelay: "0.15s" }}
              >
                We are a leading SaaS application development company helping
                startups and enterprises turn ideas into powerful, scalable
                cloud products. From custom SaaS development to full-cycle SaaS
                platform development we deliver it all.
              </p>

              <div
                className="flex flex-wrap gap-[10px] animate-hero-up"
                style={{ animationDelay: "0.3s" }}
              >
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center h-[59px] min-w-[207px] rounded-full text-[17px] font-semibold text-white border-2 border-transparent bg-gradient-to-r from-[#b044c0] to-[#7e2a9f] hover:brightness-110 transition"
                >
                  Get Started
                </a>
                <a
                  href="/work"
                  className="inline-flex items-center justify-center h-[59px] min-w-[205px] rounded-full text-[17px] font-semibold text-white border-2 border-white/90 bg-gradient-to-r from-[#a53cb8] to-[#7a2a9c] hover:brightness-110 transition"
                >
                  See Our Work
                </a>
              </div>
            </div>

            {/* RIGHT: floating illustration — unchanged, only continuous float */}
            <div className="lg:col-span-7 flex justify-center lg:justify-end lg:pr-6">
              <img
                src="/images/illustrations/hero.webp"
                alt="SaaS Development Illustration"
                className="w-full max-w-[800px] object-contain animate-float"
              />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}