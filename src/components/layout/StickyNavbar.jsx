"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "../ui/Container";
import Button from "../ui/Button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Service", href: "/services" },
  { label: "Our Work", href: "/work" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export default function StickyNavbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Sticky visibility logic
  const [show, setShow] = useState(false);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;

      // Always hide at very top (original Navbar is there)
      if (y < 80) {
        setShow(false);
        setLastY(y);
        return;
      }

      // Scrolling up → show
      if (y < lastY) {
        setShow(true);
      }
      // Scrolling down → hide
      else if (y > lastY) {
        setShow(false);
      }

      setLastY(y);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname?.startsWith(href + "/");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50
        bg-[#2D1747] backdrop-blur-md text-white shadow-lg
        transition-transform duration-300 ease-in-out
        ${show ? "translate-y-0" : "-translate-y-full"}`}
    >
      <Container>
        <div className="flex items-center py-3">
          <Link href="/" className="flex items-center shrink-0">
            <img
              src="/images/mainLogo.svg"
              alt="Software Flux Solution"
              className="h-9 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex flex-1 items-center gap-7 ml-24 text-base font-medium">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`transition-colors hover:text-brand-purple-light ${
                    active ? "text-brand-purple-light font-semibold" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Button
              href="/contact"
              variant="primary"
              className="!h-[48px] !min-w-[160px] !px-8 !py-0 !text-[15px] !font-bold !text-white !bg-gradient-to-r !from-[#b044c0] !to-[#7e2a9f]"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden ml-auto text-2xl"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden pb-4 flex flex-col gap-3 text-sm bg-brand-purple/95 rounded-lg px-4">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`py-2 border-b border-white/10 ${
                    active ? "text-brand-purple-light font-semibold" : "text-white"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <Button
              href="/contact"
              variant="primary"
              className="!text-white mt-2 !bg-gradient-to-r !from-[#b044c0] !to-[#7e2a9f]"
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </Button>
          </div>
        )}
      </Container>
    </header>
  );
}