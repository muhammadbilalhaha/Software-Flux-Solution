"use client";

import Container from "../../../components/ui/Container";

// Capsule path in a 598 x 470 box (matches the reference shape)
const BLOB_PATH =
  "M205 90 L430 5 C500 -15 560 40 590 130 C615 210 590 280 520 320 L300 430 C260 450 215 470 170 470 C70 470 0 400 0 300 C0 200 90 135 205 90 Z";

export default function ServiceHero() {
  return (
    // overflow stays visible so the photo can hang below the section
    <section
      className="relative text-white z-10"
      style={{ backgroundColor: "#2e1651" }}
    >
      {/* Inline style for the smooth up-and-down floating animation */}
      <style jsx>{`
        @keyframes floatUpDown {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        .animate-float {
          animation: floatUpDown 4s ease-in-out infinite;
        }
      `}</style>

      {/* ============ CLIPPED BACKGROUND LAYER (texture + orange ring) ============ */}
      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        {/* Dotted texture (left) */}
        <img
          src="/images/illustrations/about-dots.jpg"
          alt=""
          className="absolute left-0 top-0 h-full w-auto max-w-none object-cover object-left"
        />

        {/* Orange ring — glued to the left edge with up/down movement */}
        <img
          src="/images/illustrations/halfCircle.png"
          alt=""
          className="hidden lg:block absolute -left-[30px] top-[137px] w-[125px] animate-float"
        />
      </div>

      {/* ============ CONTENT ============ */}
      <Container className="relative">
        <div className="relative pt-32 pb-14 lg:pt-0 lg:h-[572px] flex flex-col justify-end lg:pb-[75px]">
          {/* ---------- LEFT: text ---------- */}
          <div className="relative z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-[40px] font-bold leading-[48px] mb-5">
              Our Services
            </h1>
            <p className="text-base w-[550px] lg:text-[17px] font-bold text-white">
              Software Flux Solution is a full-service saas development agency delivering custom saas development, saas platform development, and saas application development services that help businesses launch faster and scale smarter.
            </p>
          </div>

          {/* ---------- RIGHT: capsule-shaped photo ---------- */}
          <div className="relative z-20 mt-10 w-full max-w-[460px] mx-auto lg:mx-0 lg:mt-0 lg:max-w-none lg:absolute lg:right-0 lg:top-[145px] lg:w-[598px]">
            <svg
              viewBox="0 0 598 470"
              className="block w-full h-auto"
              role="img"
              aria-label="Our team"
            >
              <defs>
                <clipPath id="about-blob">
                  <path d={BLOB_PATH} />
                </clipPath>
              </defs>
              <image
                href="/images/illustrations/about-hero.jpg"
                x="0"
                y="0"
                width="598"
                height="470"
                preserveAspectRatio="xMidYMid slice"
                clipPath="url(#about-blob)"
              />
            </svg>

            {/* Yellow ring on top of the photo */}
            <img
              src="/images/illustrations/fullCircle.png"
              alt=""
              aria-hidden="true"
              className="absolute left-[14.4%] top-[15.3%] w-[15%] pointer-events-none"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}