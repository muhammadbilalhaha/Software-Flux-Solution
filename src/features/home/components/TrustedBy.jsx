"use client";

import { useState, useRef, useEffect } from "react";
import Container from "../../../components/ui/Container";
import ClientLogo from "./ClientLogo";
import { clients } from "../data/clients";

export default function TrustedBy() {
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const positionRef = useRef(0);
  
  const isDragging = useRef(false);
  const startX = useRef(0);
  const dragStartPos = useRef(0);
  const [isHovered, setIsHovered] = useState(false);

  // Triple the items so there is always seamless content available on both sides
  const items = [...clients, ...clients, ...clients];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Single set width (half of content width since we tripled)
    const singleSetWidth = container.scrollWidth / 3;

    const animate = () => {
      if (!isDragging.current && !isHovered) {
        // Continuous movement speed (1px per frame)
        positionRef.current += 0.5;

        // Infinite loop wrap-around logic
        if (positionRef.current >= singleSetWidth) {
          positionRef.current -= singleSetWidth;
        } else if (positionRef.current < 0) {
          positionRef.current += singleSetWidth;
        }

        container.style.transform = `translateX(-${positionRef.current}px)`;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isHovered]);

  // Drag / Swipe handlers
  const handleStart = (clientX) => {
    isDragging.current = true;
    startX.current = clientX;
    dragStartPos.current = positionRef.current;
  };

  const handleMove = (clientX) => {
    if (!isDragging.current || !containerRef.current) return;
    
    const singleSetWidth = containerRef.current.scrollWidth / 3;
    const deltaX = startX.current - clientX;
    let newPos = dragStartPos.current + deltaX;

    // Keep position wrapped smoothly while dragging
    if (newPos >= singleSetWidth) {
      newPos -= singleSetWidth;
    } else if (newPos < 0) {
      newPos += singleSetWidth;
    }

    positionRef.current = newPos;
    containerRef.current.style.transform = `translateX(-${newPos}px)`;
  };

  const handleEnd = () => {
    isDragging.current = false;
  };

  return (
    <section className="bg-white py-16 lg:py-20 overflow-hidden">
      <Container>
        {/* Heading */}
        <h3 className="text-center text-xl sm:text-2xl font-semibold text-brand-navy mb-12">
          Trusted by SaaS Companies and Global Businesses
        </h3>

        {/* Carousel Outer Wrapper */}
        <div
          className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing select-none"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            handleEnd();
          }}
          onMouseDown={(e) => handleStart(e.clientX)}
          onMouseMove={(e) => handleMove(e.clientX)}
          onMouseUp={handleEnd}
          onTouchStart={(e) => handleStart(e.touches[0].clientX)}
          onTouchMove={(e) => handleMove(e.touches[0].clientX)}
          onTouchEnd={handleEnd}
        >
          {/* Gradient Side Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Continuous Moving Track */}
          <div
            ref={containerRef}
            className="flex items-center gap-5 sm:gap-5 w-max py-4 will-change-transform"
          >
            {items.map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="shrink-0 transition-transform duration-300 hover:scale-110 grayscale hover:grayscale-0 opacity-80 hover:opacity-100 pointer-events-none"
              >
                <ClientLogo client={client} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}