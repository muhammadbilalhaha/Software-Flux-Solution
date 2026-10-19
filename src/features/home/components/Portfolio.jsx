"use client";

import { useState, useEffect, useRef } from "react";
import Container from "../../../components/ui/Container";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/portfolio";

const PURPLE = "#8a2490";

const REVIEW_URL =
  "https://www.google.com/maps/place//data=!4m3!3m2!1s0x38dfa75dfe7bcf9f:0x7bd49c955951cc41!12e1?source=g.page.m._&laa=merchant-review-solicitation";

export default function Portfolio() {
  const [perSlide, setPerSlide] = useState(3);
  const [active, setActive] = useState(0);
  const scrollRef = useRef(null);
  const cardRefs = useRef([]);

  // ---------- Responsive perSlide ----------
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 768) setPerSlide(1);
      else if (w < 1024) setPerSlide(2);
      else setPerSlide(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // ---------- Compute pages ----------
  const totalPages = Math.max(1, Math.ceil(projects.length / perSlide));
  // Clamp active page if resize changes totalPages
  useEffect(() => {
    if (active >= totalPages) setActive(0);
  }, [totalPages, active]);

  // ---------- Scroll to a specific page ----------
  const scrollToPage = (pageIndex) => {
    const el = scrollRef.current;
    if (!el) return;

    // Scroll to the first card of that page
    const targetCard = cardRefs.current[pageIndex * perSlide];
    if (targetCard) {
      el.scrollTo({
        left: targetCard.offsetLeft - el.offsetLeft,
        behavior: "smooth",
      });
    }
  };

  // When user clicks a dot
  const handleDotClick = (i) => {
    setActive(i);
    scrollToPage(i);
  };

  // ---------- Sync dots on manual swipe ----------
  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    // Find the card closest to the left edge of the container
    let closestIndex = 0;
    let closestDistance = Infinity;
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const distance = Math.abs(card.offsetLeft - el.offsetLeft - el.scrollLeft);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = i;
      }
    });

    // Convert card index → page index
    const newPage = Math.floor(closestIndex / perSlide);
    if (newPage !== active) setActive(newPage);
  };

  return (
    <section className="bg-white py-20 lg:py-24">
      <Container>
        {/* ---------- Carousel ---------- */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-6 pb-4 mb-10 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {projects.map((project, i) => (
            <div
              key={project.id}
              ref={(el) => (cardRefs.current[i] = el)}
              className="snap-start shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* ---------- Pagination dots (always rendered for debug) ---------- */}
        <div className="flex justify-center items-center mt-10 mb-12">
          {Array.from({ length: totalPages }).map((_, i) => {
            const isActive = i === active;
            return (
              <button
                key={i}
                type="button"
                onClick={() => handleDotClick(i)}
                aria-label={`Show slide ${i + 1}`}
                aria-current={isActive}
                className="w-[30px] h-[30px] rounded-full flex items-center justify-center transition-colors duration-300"
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

        {/* ---------- Review button ---------- */}
        <div className="flex justify-center">
          <a
            href={REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold transition-all duration-200 bg-brand-gradient text-white hover:opacity-90 shadow-lg"
          >
            Give Us a Review
          </a>
        </div>
      </Container>
    </section>
  );
}