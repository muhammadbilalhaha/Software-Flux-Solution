"use client";

import { useRef, useEffect, useState } from "react";

export default function AccordionItem({
  title,
  description,
  bullets,
  isOpen,
  onToggle,
}) {
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState(0);

  // Measure content height whenever it changes or open state toggles
  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen, description, bullets]);

  return (
    <div className="border-b border-brand-navy/15 py-2">
      {/* Header row */}
      <button
        onClick={onToggle}
        className="w-full flex items-center cursor-pointer justify-between py-[22px] text-left group"
      >
        <span
          className={`text-[20px] lg:text-[25px] font-black leading-tight transition-colors duration-300 ease-out ${
            isOpen ? "text-brand-purple" : "text-brand-navy"
          } group-hover:text-brand-purple`}
        >
          {title}
        </span>

        <span
          className={`text-[22px] font-black leading-none transition-all duration-300 ease-out ${
            isOpen
              ? "text-brand-purple rotate-0"
              : "text-brand-navy"
          }`}
          aria-hidden="true"
        >
          {isOpen ? "↓" : "→"}
        </span>
      </button>

      {/* Expanded content — animated */}
      <div
        className="overflow-hidden transition-[max-height,opacity] duration-400 ease-in-out"
        style={{
          maxHeight: `${maxHeight}px`,
          opacity: isOpen ? 1 : 0,
        }}
        aria-hidden={!isOpen}
      >
        <div ref={contentRef} className="pb-7 pr-12">
          {description && (
            <p className="text-[14px] text-brand-gray leading-[1.7] mb-4">
              {description}
            </p>
          )}

          {bullets && bullets.length > 0 && (
            <div className="flex flex-col gap-[6px] text-[14px] text-brand-gray leading-[1.7]">
              {bullets.map((bullet, i) => (
                <p key={i}>{bullet}</p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}