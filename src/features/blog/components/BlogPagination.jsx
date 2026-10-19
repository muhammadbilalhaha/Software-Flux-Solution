"use client";

import { useEffect } from "react";
import Link from "next/link";

const NAVY = "#1e1b7a";
const PURPLE = "#8a2490";

function getPages(current, total) {
  const set = new Set([1, current - 1, current, current + 1, total]);
  const nums = [...set]
    .filter((n) => n >= 1 && n <= total)
    .sort((a, b) => a - b);

  const out = [];
  nums.forEach((n, i) => {
    if (i > 0 && n - nums[i - 1] > 1) out.push("…");
    out.push(n);
  });
  return out;
}

const pill =
  "h-[47px] w-[84px] flex items-center justify-center rounded-full border-[1.5px] bg-white text-[14px] font-bold transition-colors";
const circle =
  "w-[47px] h-[47px] flex items-center justify-center rounded-full text-[14px] font-bold transition-colors";

export default function BlogPagination({ currentPage = 1, totalPages = 1 }) {
  const pages = getPages(currentPage, totalPages);
  const hasPrev = currentPage > 1;
  const hasNext = currentPage < totalPages;

  // Scroll to top whenever page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <nav
      aria-label="Blog pagination"
      className="flex justify-center items-center gap-[5px] pb-16 lg:pb-20 flex-wrap"
    >
      {hasPrev ? (
        <Link
          href={`/blog?page=${currentPage - 1}`}
          className={`${pill} mr-[3px] hover:bg-[#8a2490] hover:text-white`}
          style={{ borderColor: PURPLE, color: NAVY }}
        >
          Prev
        </Link>
      ) : (
        <span
          className={`${pill} mr-[3px] opacity-50 cursor-not-allowed`}
          style={{ borderColor: PURPLE, color: NAVY }}
        >
          Prev
        </span>
      )}

      {pages.map((p, i) => {
        if (p === "…") {
          return (
            <span
              key={`dots-${i}`}
              className={`${circle} bg-[#efefef]`}
              style={{ color: NAVY }}
            >
              …
            </span>
          );
        }

        const isActive = p === currentPage;
        return (
          <Link
            key={p}
            href={`/blog?page=${p}`}
            aria-current={isActive ? "page" : undefined}
            className={`${circle} ${
              isActive ? "text-white" : "bg-[#efefef] hover:bg-[#8a2490]/15"
            }`}
            style={isActive ? { backgroundColor: PURPLE } : { color: NAVY }}
          >
            {p}
          </Link>
        );
      })}

      {hasNext ? (
        <Link
          href={`/blog?page=${currentPage + 1}`}
          className={`${pill} ml-[3px] hover:bg-[#8a2490] hover:text-white`}
          style={{ borderColor: PURPLE, color: NAVY }}
        >
          Next
        </Link>
      ) : (
        <span
          className={`${pill} ml-[3px] opacity-50 cursor-not-allowed`}
          style={{ borderColor: PURPLE, color: NAVY }}
        >
          Next
        </span>
      )}
    </nav>
  );
}