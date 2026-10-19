"use client";

import { useState, useRef, useEffect } from "react";
import * as Flags from "country-flag-icons/react/3x2";

export const COUNTRIES = [
  { code: "PK", name: "Pakistan", dial: "+92" },
  { code: "US", name: "United States", dial: "+1" },
  { code: "GB", name: "United Kingdom", dial: "+44" },
  { code: "IN", name: "India", dial: "+91" },
  { code: "AE", name: "UAE", dial: "+971" },
  { code: "SA", name: "Saudi Arabia", dial: "+966" },
  { code: "AU", name: "Australia", dial: "+61" },
  { code: "CA", name: "Canada", dial: "+1" },
  { code: "DE", name: "Germany", dial: "+49" },
  { code: "FR", name: "France", dial: "+33" },
  { code: "CN", name: "China", dial: "+86" },
  { code: "JP", name: "Japan", dial: "+81" },
  { code: "BD", name: "Bangladesh", dial: "+880" },
  { code: "TR", name: "Turkey", dial: "+90" },
];

function FlagIcon({ countryCode, className = "" }) {
  const Flag = Flags[countryCode.toUpperCase()];
  if (!Flag) return null;
  return <Flag title={countryCode} className={className} />;
}

function Chevron({ open }) {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="none"
      className={`w-2.5 h-2.5 lg:w-3 lg:h-3 transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
      aria-hidden="true"
    >
      <path
        d="M2.5 4.5 6 8l3.5-3.5"
        stroke="#555"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PhoneInput({
  value = "",
  dialCode = "+92",
  onChange,
  placeholder = "(201) 555-0123",
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const wrapRef = useRef(null);

  const selected =
    COUNTRIES.find((c) => c.dial === dialCode) || COUNTRIES[0];

  // Close dropdown on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setOpen(false);
        setSearch("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        setSearch("");
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);

  const filtered = COUNTRIES.filter((c) => {
    if (!search) return true;
    const s = search.toLowerCase();
    return (
      c.name.toLowerCase().includes(s) ||
      c.dial.includes(s) ||
      c.code.toLowerCase().includes(s)
    );
  });

  const pickCountry = (country) => {
    onChange?.({ phone: value, dialCode: country.dial });
    setOpen(false);
    setSearch("");
  };

  return (
    <div
      ref={wrapRef}
      className="relative flex items-center h-12 lg:h-[66px] w-full sm:w-[200px] lg:w-[286px] rounded-full bg-white border-2 lg:border-[3px] border-[#dcdce2] focus-within:border-[#8a2490] transition-colors"
    >
      {/* ---------- Country selector button (Flag only) ---------- */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-1.5 lg:gap-2 pl-3 lg:pl-5 pr-2 lg:pr-3 h-full shrink-0 hover:opacity-80 transition-opacity"
      >
        <span className="w-6 h-4 lg:w-7 lg:h-[18px] rounded-sm overflow-hidden shrink-0 shadow-sm border border-gray-200">
          <FlagIcon countryCode={selected.code} className="w-full h-full object-cover" />
        </span>
        <Chevron open={open} />
      </button>

      {/* ---------- Number input ---------- */}
      <input
        type="tel"
        name="phone"
        value={value}
        onChange={(e) =>
          onChange?.({ phone: e.target.value, dialCode: selected.dial })
        }
        placeholder={placeholder}
        className="flex-1 min-w-0 h-full pr-3 lg:pr-4 bg-transparent text-[15px] lg:text-[22px] text-[#333] placeholder:text-[#666] focus:outline-none"
      />

      {/* ---------- Dropdown ---------- */}
      {open && (
        <div
          role="listbox"
          className="absolute left-0 top-[calc(100%+6px)] z-50 w-[260px] lg:w-[320px] rounded-2xl bg-white border border-[#e5e5ea] shadow-xl overflow-hidden"
        >
          {/* Search */}
          <div className="p-2 border-b border-[#e5e5ea]">
            <input
              type="text"
              autoFocus
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search country..."
              className="w-full h-9 px-3 rounded-lg bg-[#f5f5f7] text-[13px] text-[#333] placeholder:text-[#888] focus:outline-none"
            />
          </div>

          {/* List */}
          <ul className="max-h-[280px] overflow-y-auto py-1">
            {filtered.length === 0 && (
              <li className="px-4 py-3 text-[13px] text-[#888] text-center">
                No countries found
              </li>
            )}

            {filtered.map((c) => {
              const isActive = c.dial === selected.dial;
              return (
                <li key={c.code}>
                  <button
                    type="button"
                    onClick={() => pickCountry(c)}
                    className={`w-full flex items-center gap-3 px-4 py-2 text-left text-[14px] transition-colors ${
                      isActive
                        ? "bg-[#8a2490]/10 text-[#8a2490] font-medium"
                        : "text-[#333] hover:bg-[#f5f5f7]"
                    }`}
                  >
                    <span className="w-6 h-4 rounded-sm overflow-hidden shrink-0 shadow-sm border border-gray-200">
                      <FlagIcon countryCode={c.code} className="w-full h-full object-cover" />
                    </span>
                    <span className="flex-1 truncate">{c.name}</span>
                    {/* Dial code is removed from the right side to keep it clean */}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}