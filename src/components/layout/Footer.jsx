import Link from "next/link";
import Container from "../ui/Container";

const whatWeDo = [
  { label: "SaaS Development", href: "/services/saas-development" },
  { label: "Mobile App Development", href: "/services/mobile-app-development" },
  { label: "Website Development", href: "/services/website-development" },
  { label: "UI/UX & Graphic Design", href: "/services/ui-ux-design" },
  { label: "SEO & Digital Marketing", href: "/services/seo-digital-marketing" },
];

const usefulLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Work", href: "/work" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

const socials = [
  { label: "Facebook", href: "#", icon: FacebookIcon },
  { label: "LinkedIn", href: "#", icon: LinkedinIcon },
  { label: "Instagram", href: "#", icon: InstagramIcon },
];

/* ---------------- Small icons ---------------- */
function PinIcon() {
  return (
    <svg width="20" height="22" viewBox="0 0 24 26" fill="currentColor" aria-hidden="true" className="shrink-0 mt-[6px]">
      <path d="M12 0C6.5 0 2 4.4 2 9.8c0 7 8.2 15.2 9.1 16a1.3 1.3 0 0 0 1.8 0C13.8 25 22 16.800 22 9.800 22 4.400 17.500 0 12 0zm0 13.500a3.700 3.700 0 1 1 0-7.400 3.700 3.700 0 0 1 0 7.400z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0">
      <path d="M5 3h3.5l1.8 4.500-2.300 1.500a12 12 0 0 0 6 6l1.500-2.300L20 14.500V18a2 2 0 0 1-2 2A15 15 0 0 1 3 5a2 2 0 0 1 2-2z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12a12 12 0 1 0-13.900 11.900v-8.400H7.100V12h3V9.400c0-3 1.800-4.700 4.500-4.700 1.300 0 2.700.2 2.700.2v3h-1.500c-1.500 0-2 .9-2 1.900V12h3.400l-.5 3.500h-2.900v8.400A12 12 0 0 0 24 12z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3 8.500h4V21H3V8.500zM5 2.500a2.300 2.300 0 1 1 0 4.600 2.300 2.300 0 0 1 0-4.600zM9.500 8.500h3.800v1.700h.1c.5-1 1.800-2 3.800-2 4 0 4.800 2.600 4.800 6V21h-4v-5.900c0-1.400 0-3.200-2-3.200s-2.300 1.500-2.300 3.100V21h-4V8.500z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.500" cy="6.500" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* ---------------- Footer column heading ---------------- */
function ColumnTitle({ children }) {
  return (
    <div className="mb-[34px]">
      <h3 className="text-[28px] lg:text-[31px] font-bold leading-tight text-white">
        {children}
      </h3>
      <span className="block w-[58px] h-1 bg-white rounded-full mt-2" />
    </div>
  );
}

/* ---------------- Underline hover link ---------------- */
// Uses a pseudo-element that scales in from left → right on hover,
// and shrinks back out on leave. No color change.
function UnderlineLink({ href, children, className = "" }) {
  return (
    <Link
      href={href}
      className={`relative inline-block group/underline ${className}`}
    >
      <span className="relative">
        {children}
        <span
          aria-hidden="true"
          className="
            absolute left-0 right-0 -bottom-0.5 h-[1px] bg-current
            origin-left scale-x-0
            transition-transform duration-300 ease-out
            group-hover/underline:scale-x-100
          "
        />
      </span>
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#301848] text-white pt-16 lg:pt-[110px] pb-8 lg:pb-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[658fr_328fr_299fr] gap-12 lg:gap-0">
          {/* ---------- Column 1: logo + contact ---------- */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <img
                src="/images/mainLogo.svg"
                alt="Software Flux Solution"
                className="h-11 w-auto"
              />
            </Link>

            <p className="text-[19px] leading-[26px]">Drop us an email</p>
            <p
              href="mailto:kamran@softflux.co"
              className="block text-[19px] leading-[26px] font-bold"
            >
              kamran@softflux.co
            </p>
            <p
              href="mailto:hr@softflux.co"
              className="block text-[19px] leading-[26px] font-bold mt-[18px]"
            >
              hr@softflux.co
            </p>

            <div className="flex gap-4 mt-9 max-w-[430px]">
              <PinIcon />
              <p className="text-[19px] leading-[33px] font-medium">
                Office 1, 1st floor Shahzaib Basti barrier wah cantt Pakistan
                21, Wah Cantt, 47040, Pakistan
              </p>
            </div>

            <div className="mt-3 flex flex-col gap-[5px]">
              <p
                href="tel:+923289777009"
                className="flex items-center cursor-pointer gap-2 text-[19px] leading-[27px]"
              >
                <PhoneIcon />
                +92(328)9777009
              </p>
              <p
                href="tel:+442038072184"
                className="flex items-center cursor-pointer gap-2 text-[19px] leading-[27px]"
              >
                <PhoneIcon />
                +442038072184
              </p>
            </div>
          </div>

          {/* ---------- Column 2: What We Do ---------- */}
          <div>
            <ColumnTitle>What We Do</ColumnTitle>
            <ul className="flex flex-col gap-[22px] pl-[9px]">
              {whatWeDo.map((item) => (
                <li key={item.href}>
                  <p
                    href={item.href}
                    className="text-[17px] leading-[22px] font-medium text-white/85"
                  >
                    {item.label}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* ---------- Column 3: Useful Links + socials ---------- */}
          <div>
            <ColumnTitle>Useful Links</ColumnTitle>
            <ul className="flex flex-col gap-[22px] pl-[10px]">
              {usefulLinks.map((item) => (
                <li key={item.href}>
                  <UnderlineLink
                    href={item.href}
                    className="text-[17px] leading-[22px] font-medium text-white/85"
                  >
                    {item.label}
                  </UnderlineLink>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-[13px] mt-[14px]">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-14 h-14 rounded-full border-[1.5px] border-white flex items-center justify-center text-white hover:bg-white hover:text-[#301848] transition-colors"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ---------- Copyright ---------- */}
        <p className="text-center text-[17px] mt-8 lg:mt-2 text-white">
          © 2026. <span className="font-bold">Software Flux Solution</span>
        </p>
      </Container>
    </footer>
  );
}