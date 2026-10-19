import Container from "../../../components/ui/Container";

const NAVY = "#1e1b7a";
const PURPLE = "#8a2490";
const SHADOW_REST = "#dcd9dc"; // grey offset shadow at rest

/* White polka-dot background (same pattern as the blog section) */
const dotsBg = {
  backgroundColor: "#f7f6f4",
  backgroundImage:
    "radial-gradient(circle, rgba(255,255,255,0.95) 6px, transparent 6.5px), radial-gradient(circle, rgba(255,255,255,0.95) 6px, transparent 6.5px)",
  backgroundSize: "104px 104px",
  backgroundPosition: "0 0, 52px 52px",
};

/* ---------------- Icons ---------------- */
const base = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  width: 48,
  height: 48,
  "aria-hidden": true,
};

const OrbitIcon = () => (
  <svg {...base}>
    <circle cx="23" cy="25" r="13" />
    <circle cx="23" cy="25" r="8" />
    <circle cx="23" cy="25" r="2.5" />
    <circle cx="33" cy="34" r="2.6" fill="currentColor" />
  </svg>
);

const UserCheckIcon = () => (
  <svg {...base}>
    <circle cx="19" cy="14" r="6.5" />
    <path d="M6 36v-2.500a8 8 0 0 1 8-8h10a8 8 0 0 1 8 8V36a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z" />
    <path d="m33 21 3.500 3.500L43 18" />
  </svg>
);

const FigmaIcon = () => (
  <svg width="44" height="44" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M8 2h4v6H8a3 3 0 0 1 0-6z" />
    <path d="M12 2h4a3 3 0 0 1 0 6h-4z" />
    <path d="M8 8h4v6H8a3 3 0 0 1 0-6z" />
    <circle cx="15" cy="11" r="3" />
    <path d="M12 14v3a3 3 0 1 1-3-3z" />
  </svg>
);

const GearIcon = () => (
  <svg {...base}>
    <circle cx="24" cy="24" r="8" />
    <circle cx="24" cy="24" r="2.800" />
    <path d="M24 5v6M24 37v6M5 24h6M37 24h6M10.600 10.600l4.200 4.200M33.200 33.200l4.200 4.200M10.600 37.400l4.200-4.200M33.200 14.800l4.200-4.200" />
  </svg>
);

const ClipboardIcon = () => (
  <svg {...base}>
    <rect x="10" y="9" width="28" height="33" rx="4" />
    <path d="M18 9V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
    <path d="M17 22h2M17 29h2M17 36h2M24 22h8M24 29h8M24 36h8" />
  </svg>
);

/* ---------------- Data ---------------- */
const features = {
  leftTop: {
    icon: OrbitIcon,
    title: "SaaS-Exclusive Focus",
    description: "We don't do everything. We do SaaS, and we do it exceptionally well.",
    circle: "#fce7ee",
  },
  leftBottom: {
    icon: FigmaIcon,
    title: "Scalable by Design",
    description:
      "Every product we build is architected to grow with your business from day one.",
    circle: "#e8e8fb",
  },
  center: {
    icon: GearIcon,
    title: "Fully Secured",
    description: "Every Product Built to Grow Securely From Day One.",
    circle: PURPLE,
    purple: true,
  },
  rightTop: {
    icon: UserCheckIcon,
    title: "Transparent Process",
    description: "You're kept in the loop at every stage. No surprises, no black boxes.",
    circle: "#e4f6ee",
  },
  rightBottom: {
    icon: ClipboardIcon,
    title: "Proven Track Record",
    description: "300+ SaaS projects delivered across industries and markets worldwide.",
    circle: "#fdf5e1",
  },
};

/* ---------------- Card ----------------
 * Rest:  grey offset shadow
 * Hover: the offset shadow fades to the icon-circle colour (and back on leave)
 * Pure CSS (no event handlers) so it works in a Next.js server component.
 */
function FeatureCard({ feature }) {
  const Icon = feature.icon;
  return (
    <div
      className={`rounded-[56px] shadow-[10px_10px_0_var(--rest)] cursor-pointer hover:shadow-[10px_10px_0_var(--c)] bg-white pt-[41px] pb-[31px] pl-[50px] pr-[50px] border transition-shadow duration-300 ease-out ${
        feature.purple ? "border-transparent" : "border-[#e4e1e6]"
      }`}
      style={{
        "--c": feature.circle,
        "--rest": feature.purple ? "transparent" : SHADOW_REST,
      }}
    >
      {/* Icon circle */}
      <div
        className="w-[115px] h-[115px] rounded-full flex items-center justify-center mb-6"
        style={{
          backgroundColor: feature.circle,
          color: feature.purple ? "#ffffff" : NAVY,
        }}
      >
        <Icon />
      </div>

      <h3
        className="text-[24px] xl:text-[26px] font-bold leading-[29px] mb-[7px]"
        style={{ color: NAVY }}
      >
        {feature.title}
      </h3>

      <p className="text-base xl:text-[17px] leading-[29px]" style={{ color: "#6e6a73" }}>
        {feature.description}
      </p>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section
      className="relative py-16 lg:pt-[60px] lg:pb-[100px] overflow-hidden"
      style={dotsBg}
    >
      <Container className="relative z-10">
        {/* ---------- Heading ---------- */}
        <div className="text-center max-w-[930px] mx-auto mb-12 lg:mb-[72px]">
          <p
            className="text-[15px] lg:text-[17px] font-bold uppercase tracking-[0.18em] mb-3"
            style={{ color: PURPLE }}
          >
            Why Choose Us
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-[42px] font-bold leading-[1.05]"
            style={{ color: NAVY }}
          >
            Innovate, Scale, Succeed, Choose Software Flux Solution
          </h2>
        </div>

        {/* ---------- Grid ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[406fr_409fr_406fr] gap-8 lg:gap-x-[31px] items-start">
          {/* LEFT column */}
          <div className="contents lg:flex lg:flex-col lg:gap-[52px]">
            <FeatureCard feature={features.leftTop} />
            <FeatureCard feature={features.leftBottom} />
          </div>

          {/* CENTER column: phone illustration sits behind the purple card */}
          <div className="contents lg:flex lg:flex-col">
            <div className="hidden lg:flex justify-center h-[334px] overflow-hidden">
              <img
                src="/images/illustrations/about-phone.png"
                alt=""
                aria-hidden="true"
                className="w-[395px] max-w-none h-auto object-cover object-top"
              />
            </div>
            <FeatureCard feature={features.center} />
          </div>

          {/* RIGHT column */}
          <div className="contents lg:flex lg:flex-col lg:gap-[52px]">
            <FeatureCard feature={features.rightTop} />
            <FeatureCard feature={features.rightBottom} />
          </div>
        </div>
      </Container>
    </section>
  );
}