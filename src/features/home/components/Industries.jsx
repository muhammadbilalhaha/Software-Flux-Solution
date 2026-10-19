import Container from "../../../components/ui/Container";

/**
 * Industries section
 *
 * LEFT-SIDE PINK SPLASH
 * ---------------------
 * By default the watercolour splash is drawn with SVG (no image file needed).
 * If you have the real texture image, save it as
 *   /public/images/illustrations/pinkSplash.png
 * and set USE_IMAGE = true below – the image will be used instead.
 */
const USE_IMAGE = false;

export default function Industries() {
  return (
    <section
      className="relative py-20 lg:py-[100px] overflow-hidden"
      style={{ backgroundColor: "#faf8f6" }}
    >
      {/* ============ LEFT PINK SPLASH ============ */}
      {USE_IMAGE ? (
        <img
          src="/images/illustrations/pinkSplash.png"
          alt=""
          aria-hidden="true"
          className="hidden md:block absolute left-0 top-0 h-full w-auto max-w-[50%] object-cover object-left pointer-events-none select-none"
        />
      ) : (
        <svg
          aria-hidden="true"
          viewBox="0 0 800 700"
          preserveAspectRatio="xMinYMin slice"
          className="absolute left-0 top-0 h-full w-[60%] min-w-[420px] pointer-events-none select-none"
        >
          <defs>
            {/* rough, watercolour-like edge */}
            <filter id="splash" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.018 0.022"
                numOctaves="4"
                seed="7"
                result="noise"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale="70"
                xChannelSelector="R"
                yChannelSelector="G"
                result="rough"
              />
              <feGaussianBlur in="rough" stdDeviation="1.2" />
            </filter>
            <filter id="grain" x="0" y="0" width="100%" height="100%">
              <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="3" />
              <feColorMatrix
                values="0 0 0 0 0.98  0 0 0 0 0.97  0 0 0 0 0.96  0 0 0 0.9 -0.25"
              />
              <feComposite in2="SourceGraphic" operator="in" />
            </filter>
            <linearGradient id="fade" x1="0" y1="0" x2="1" y2="0.6">
              <stop offset="0" stopColor="#f3d6e2" stopOpacity="0.75" />
              <stop offset="0.7" stopColor="#f7e3ea" stopOpacity="0.55" />
              <stop offset="1" stopColor="#faf0f3" stopOpacity="0.15" />
            </linearGradient>
          </defs>

          {/* main splash */}
          <path
            filter="url(#splash)"
            fill="url(#fade)"
            d="M-40 -20 L470 -20 C500 30 470 80 420 115 C380 150 360 200 300 235
               C240 270 170 300 120 350 C70 400 40 470 30 560 C25 620 10 680 -40 720 Z"
          />
          {/* lighter wash on top */}
          <path
            filter="url(#splash)"
            fill="#f9e9ef"
            fillOpacity="0.55"
            d="M-40 200 C60 170 140 190 230 160 C330 130 380 60 470 40
               C440 120 360 190 270 240 C190 285 110 330 70 400 C40 460 20 560 -40 620 Z"
          />
          {/* paper grain over the splash */}
          <rect width="800" height="700" filter="url(#grain)" opacity="0.25" />
        </svg>
      )}

      {/* ============ CONTENT ============ */}
      <Container className="relative z-10">
        {/* Section heading (centered) */}
        <h2
          className="text-center text-3xl sm:text-4xl lg:text-[40px] font-bold leading-[1.1] mb-14 lg:mb-[58px]"
          style={{ color: "#1e1b7a" }}
        >
          Delivering SaaS Application
          <br />
          Development Solutions Across Industries
        </h2>

        {/* Sub heading + paragraph (left aligned) */}
        <h3 className="text-[28px] sm:text-3xl lg:text-[36px] font-extrabold leading-[1.1] text-black mb-6">
          We’re Here to Build
          <br />
          Better SaaS Products.
        </h3>

        <p
          className="text-base lg:text-[17px] leading-[29px]"
          style={{ color: "#6e6e6e" }}
        >
          Software Flux Solution is a full-service saas app development company
          that turns complex ideas into scalable, revenue-generating SaaS
          products. Our saas software development company has worked with
          startups, SMEs, and enterprises across the globe – delivering custom
          saas development solutions that are fast, secure, and built to last.
        </p>
      </Container>

      {/* ============ DECORATIVE YELLOW DOTS (right edge) ============ */}
      <div
        aria-hidden="true"
        className="hidden lg:grid absolute right-[70px] top-[300px] grid-cols-4 gap-1 pointer-events-none"
      >
        {Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i}
            className="block w-[3px] h-[3px] rounded-full"
            style={{ backgroundColor: "#f8d34a", opacity: 0.8 }}
          />
        ))}
      </div>
    </section>
  );
}