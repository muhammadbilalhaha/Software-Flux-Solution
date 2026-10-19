"use client";

import { useState, useRef } from "react";
import Container from "../../../components/ui/Container";

/* ------------------------------------------------------------------ */
/*  ICONS (inline SVG, use currentColor so they can change colour)      */
/* ------------------------------------------------------------------ */
const svgProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "w-12 h-12",
  "aria-hidden": true,
};

const CloudIcon = () => (
  <svg {...svgProps}>
    <path d="M7 18a4 4 0 0 1-.5-7.97A5.5 5.5 0 0 1 17 8.5a4.75 4.75 0 0 1 .5 9.5H7z" />
    <path d="M12 16v-5m0 0-2 2m2-2 2 2" />
  </svg>
);

const FigmaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9" aria-hidden="true">
    <path d="M8 2h4v6H8a3 3 0 0 1 0-6z" />
    <path d="M12 2h4a3 3 0 0 1 0 6h-4z" />
    <path d="M8 8h4v6H8a3 3 0 0 1 0-6z" />
    <circle cx="15" cy="11" r="3" />
    <path d="M12 14v3a3 3 0 1 1-3-3z" />
  </svg>
);

const LaptopCodeIcon = () => (
  <svg {...svgProps} strokeWidth={1.4}>
    <rect x="4.5" y="4.5" width="15" height="11" rx="2" />
    <path d="M2.5 19h19M2.5 19v-1.5a2 2 0 0 1 2-2M21.5 19v-1.5a2 2 0 0 0-2-2" />
    <path d="m10 8.5-2 2 2 2M14 8.5l2 2-2 2" />
  </svg>
);

const PhoneIcon = () => (
  <svg {...svgProps} className="w-10 h-10" strokeWidth={1.4}>
    <rect x="6.5" y="2" width="11" height="20" rx="2.2" />
    <path d="M11 18.2h2" />
  </svg>
);

const SeoIcon = () => (
  <svg {...svgProps}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="m16 16 5 5M9 13.5v-2M11 13.5v-4.5M13 13.5v-3" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  DATA                                                             */
/* ------------------------------------------------------------------ */
const services = [
  {
    id: "saas",
    title: "SaaS Development",
    description:
      "We build scalable, secure cloud platforms from MVP to enterprise – covering architecture, billing, multi-tenancy and integrations.",
    icon: CloudIcon,
  },
  {
    id: "ui-ux",
    title: "UI/UX & Graphic Design",
    description:
      "Good design is a business decision. We create interfaces and visual identities that guide users, build trust and drive conversions.",
    icon: FigmaIcon,
  },
  {
    id: "website",
    title: "Website Development",
    description:
      "We build websites designed to convert – not just impress. From marketing sites and landing pages to complex web portals.",
    icon: LaptopCodeIcon,
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    description:
      "We design and develop iOS and Android applications that people actually enjoy using, built for speed and scale.",
    icon: PhoneIcon,
  },
  {
    id: "seo",
    title: "SEO & Digital Marketing",
    description:
      "Rank higher and grow faster with technical SEO, content strategy and performance campaigns that bring qualified leads.",
    icon: SeoIcon,
  },
];

const PURPLE = "#8a2490";
const NAVY = "#1e1b7a";
const CREAM = "#fef6e0";

/* ------------------------------------------------------------------ */
/*  CARD                                                              */
/* ------------------------------------------------------------------ */
function Card({ service, active, onClick }) {
  const Icon = service.icon;
  return (
    <div
      onClick={onClick}
      role={active ? undefined : "button"}
      className={`relative h-full rounded-full pl-[70px] pr-[50px] pt-[64px] pb-[38px] transition-all duration-500 select-none ${active ? "border-4 bg-white" : "border-4 cursor-pointer"
        }`}
      style={{
        borderColor: active ? PURPLE : CREAM,
        backgroundColor: active ? "#ffffff" : CREAM,
      }}
    >
      {/* Icon circle */}
      <div
        className="absolute -top-[56px] left-[62px] w-[110px] h-[110px] rounded-full border-4 flex items-center justify-center transition-colors duration-500 pointer-events-none"
        style={{
          borderColor: PURPLE,
          backgroundColor: active ? PURPLE : "#ffffff",
          color: active ? "#ffffff" : "#111111",
        }}
      >
        <Icon />
      </div>

      <h3
        className="text-[26px] font-bold leading-[29px] mb-3 pointer-events-none"
        style={{ color: NAVY }}
      >
        {service.title}
      </h3>
      <p className="text-base leading-[29px] text-gray-500 line-clamp-3 pointer-events-none">
        {service.description}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION                                                           */
/* ------------------------------------------------------------------ */
const CARD_W = 408;
const STEP = 438;

export default function Services() {
  const [active, setActive] = useState(2);
  const n = services.length;

  const dragStartX = useRef(0);
  const dragOffsetX = useRef(0);
  const [isDragging, setIsDragging] = useState(false);

  const offsetOf = (i) => ((i - active + n + Math.floor(n / 2)) % n) - Math.floor(n / 2);

  const handleTouchStart = (e) => {
    dragStartX.current = e.touches[0].clientX;
    dragOffsetX.current = 0;
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    dragOffsetX.current = e.touches[0].clientX - dragStartX.current;
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const threshold = 60; // minimum pixels to trigger card switch
    if (dragOffsetX.current > threshold) {
      setActive((prev) => (prev - 1 + n) % n); // Swipe Right -> previous card
    } else if (dragOffsetX.current < -threshold) {
      setActive((prev) => (prev + 1) % n); // Swipe Left -> next card
    }
    dragOffsetX.current = 0;
  };

  const handleMouseDown = (e) => {
    dragStartX.current = e.clientX;
    dragOffsetX.current = 0;
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    dragOffsetX.current = e.clientX - dragStartX.current;
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const threshold = 60;
    if (dragOffsetX.current > threshold) {
      setActive((prev) => (prev - 1 + n) % n);
    } else if (dragOffsetX.current < -threshold) {
      setActive((prev) => (prev + 1) % n);
    }
    dragOffsetX.current = 0;
  };

  return (
    <section className="relative bg-white py-20 lg:py-28 overflow-hidden">
      <Container>
        {/* ---------- Heading ---------- */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-10">
          <h2
            className="text-3xl sm:text-4xl lg:text-[42px] font-bold leading-tight"
            style={{ color: NAVY }}
          >
            All the SaaS Application
            <br />
            Development Services You Need
          </h2>
        </div>

        {/* ---------- Desktop & General Carousel (Draggable) ---------- */}
        <div
          className="relative h-[300px] xl:h-[400px] cursor-grab active:cursor-grabbing select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[1285px] h-[400px] origin-top scale-[0.72] xl:scale-100">
            {services.map((service, i) => {
              const off = offsetOf(i);
              const isActive = off === 0;
              const visible = Math.abs(off) <= 1;
              return (
                <div
                  key={service.id}
                  className="absolute top-[56px] transition-all duration-500 ease-in-out"
                  style={{
                    width: CARD_W,
                    left: `calc(50% - ${CARD_W / 2}px)`,
                    transform: `translate(${off * STEP}px, ${isActive ? 0 : 69}px)`,
                    opacity: visible ? 1 : 0,
                    pointerEvents: visible ? "auto" : "none",
                    zIndex: isActive ? 10 : 1,
                  }}
                >
                  <Card
                    service={service}
                    active={isActive}
                    onClick={() => {
                      if (Math.abs(dragOffsetX.current) < 5) {
                        setActive(i);
                      }
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* ---------- Pagination dots ---------- */}
        <div className="flex justify-center items-center mt-10 lg:mt-0 ">
          {services.map((service, i) => {
            const isActive = i === active;
            return (

              <button
                key={service.id}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show ${service.title}`}
                aria-current={isActive}
                className="w-[30px] h-[30px]  rounded-full flex items-center justify-center transition-colors duration-300"
                style={{
                  backgroundColor: isActive
                    ? "rgba(138,36,144,0.45)"
                    : "transparent",
                }}
              >
                <span
                  className="block cursor-pointer w-[9px] h-[9px] rounded-full transition-colors duration-300"
                  style={{
                    backgroundColor: isActive ? "#c0266f" : PURPLE,
                  }}
                />
              </button>
            );
          })}
        </div>
      </Container>
    </section>
  );
}