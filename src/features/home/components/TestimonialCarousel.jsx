"use client";

import { useState, useEffect } from "react";

export default function TestimonialCarousel({ testimonials }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);


  const current = testimonials[active];

  return (
    <div
      className="relative max-w-4xl mx-auto pt-8"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* SVG double-quote icon on top */}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-brand-purple flex items-center justify-center text-white shadow-md z-10">
        <svg
          className="w-6 h-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 7L8 14H11V17H5V14L7 7H10ZM19 7L17 14H20V17H14V14L16 7H19Z" />
        </svg>
      </div>

      {/* Beige card with adjusted border radius */}
      <div className="bg-brand-cream rounded-full px-8 sm:px-16 lg:p-20 lg:scale-125 pt-16 pb-12 text-center transition-all duration-500 shadow-sm">
        {/* Stars */}
        <div className="flex justify-center gap-1.5 mb-5 text-xl">
          {Array.from({ length: current.stars }).map((_, i) => (
            <span key={i} className="text-amber-400">
              ★
            </span>
          ))}
        </div>

        {/* Quote */}
        <p className="text-base font-semibold sm:text-lg lg:text-xl text-brand-navy leading-relaxed mb-8 max-w-2xl mx-auto font-normal">
          {current.quote}
        </p>

        {/* Name / Company */}
        <p className="text-lg font-bold text-blue-950">{current.name}</p>
        {current.role && (
          <p className="text-sm text-brand-gray mt-0.5">{current.role}</p>
        )}
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center cursor-pointer items-center gap-2 mt-15">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Show testimonial ${i + 1}`}
            className={`rounded-full transition-all cursor-pointer duration-300 ${
              i === active
                ? "w-3.5 h-3.5 cursor-pointer bg-brand-purple ring-4 ring-brand-purple/20"
                : "w-2.5 h-2.5 bg-brand-purple/40 cursor-pointer hover:bg-brand-purple/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}