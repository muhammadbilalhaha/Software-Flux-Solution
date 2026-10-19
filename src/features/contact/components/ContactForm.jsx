"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import Container from "../../../components/ui/Container";
import PhoneInput from "../../../components/ui/PhoneInput";

const NAVY = "#1e1b7a";
const PURPLE = "#8a2490";
const CREAM = "#fef6e0";

/* ---- EmailJS (values come from .env.local) ---- */
const EMAILJS = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
};

/* ---- Fiverr gig card config ---- */
const GIG = {
  url: "https://www.fiverr.com/",
  profileUrl: "https://www.fiverr.com/",
  image: null,
  seller: "Softflux",
  rating: "4.9",
  reviews: "45",
  level: "Level 2",
  delivery: "1 day",
  title: "I will develop custom SaaS CRM ERP web and mobile applications",
  tags: ["React.js", "Next.js", "Node.js", "MongoDB", "React Native"],
};

const services = [
  "SaaS Development",
  "Mobile App Development",
  "Website Development",
  "UI/UX & Graphic Design",
  "SEO & Digital Marketing",
];

/* ---------------- Icons ---------------- */
const cardIcon = "w-10 h-10 lg:w-16 lg:h-16";

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={cardIcon} aria-hidden="true">
    <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.6 21 3 13.4 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.6a1 1 0 0 1-.25 1L6.6 10.8z" />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={cardIcon} aria-hidden="true">
    <path d="M12 2a7 7 0 0 0-7 7c0 5.2 6.2 12.2 6.5 12.5a1.1 1.1 0 0 0 1.6 0C13.4 21.2 19 14.2 19 9a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" className={cardIcon} aria-hidden="true">
    <rect x="2.5" y="5" width="19" height="14" rx="1" />
    <path d="m2.8 5.5 9.2 8 9.2-8M2.8 18.5l6.5-6.5M21.2 18.5 14.7 12" />
  </svg>
);

const socialIcon = "w-5 h-5 lg:w-[33px] lg:h-[33px]";

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={socialIcon} aria-hidden="true">
    <path d="M3 8.5h4V21H3V8.5zM5 2.5a2.3 2.3 0 1 1 0 4.6 2.3 2.3 0 0 1 0-4.6zM9.5 8.5h3.8v1.7h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.9c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V21h-4V8.5z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={socialIcon} aria-hidden="true">
    <path d="M14 8V6.5c0-.7.2-1 1.2-1H17V2h-2.7C11.2 2 10 3.8 10 6.2V8H7.5v3.5H10V22h4V11.5h2.8L17.2 8H14z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={socialIcon} aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

/* ---------------- Info cards ---------------- */
const infoCards = [
  {
    icon: PhoneIcon,
    title: "Phone No",
    lines: [
      { text: "+92(328)9777009", href: "tel:+923289777009" },
      { text: "+44(203)807-2184", href: "tel:+442038072184" },
    ],
    pos: "lg:absolute lg:left-[120px] lg:top-[-138px]",
    pad: "lg:pt-[15px] lg:pb-[3px]",
    lineClass: "text-[14px] lg:text-[21px] lg:leading-[38px]",
  },
  {
    icon: PinIcon,
    title: "Location",
    lines: [
      {
        text: "Office 1, 1st floor Shahzaib Basti barrier wah cantt Pakistan 21, Wah Cantt, 47040, Pakistan",
      },
    ],
    pos: "lg:absolute lg:left-[533px] lg:top-[-204px]",
    pad: "lg:pt-[30px] lg:pb-[35px]",
    lineClass: "text-[14px] lg:text-[22px] lg:leading-[33px]",
  },
  {
    icon: MailIcon,
    title: "Email Address",
    lines: [{ text: "kamran@softflux.co", href: "mailto:kamran@softflux.co" }],
    pos: "lg:absolute lg:left-[946px] lg:top-[-141px]",
    pad: "lg:pt-[33px] lg:pb-[35px]",
    lineClass: "text-[14px] lg:text-[22px] lg:leading-[33px]",
  },
];

function InfoCard({ card }) {
  const Icon = card.icon;
  return (
    <div
      className={`bg-white text-center rounded-2xl lg:rounded-[27px] px-4 lg:px-5 pt-6 pb-6 lg:w-[378px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] ${card.pos} ${card.pad}`}
    >
      <div
        className="mx-auto w-[88px] h-[88px] lg:w-[136px] lg:h-[136px] rounded-full flex items-center justify-center text-white border-[3px] lg:border-[5px]"
        style={{ backgroundColor: PURPLE, borderColor: "#a448ac" }}
      >
        <Icon />
      </div>

      <h3
        className="mt-3 text-[17px] lg:text-[25px] lg:leading-[37px] font-bold"
        style={{ color: NAVY }}
      >
        {card.title}
      </h3>

      <div className="mt-[3px]" style={{ color: "#444" }}>
        {card.lines.map((l) =>
          l.href ? (
            <a
              key={l.text}
              href={l.href}
              className={`block hover:text-[#8a2490] transition-colors ${card.lineClass}`}
            >
              {l.text}
            </a>
          ) : (
            <p key={l.text} className={card.lineClass}>
              {l.text}
            </p>
          )
        )}
      </div>
    </div>
  );
}

/* ---------------- Static Fiverr gig card ---------------- */
function FiverrGig() {
  return (
    <div className="w-full max-w-[33.8em] text-[10px] sm:text-[11px] lg:text-[16.6px] lg:ml-[18px] border border-[#dcdcdc] bg-white font-sans text-[#404145]">
      <div className="h-[27.1em] border-b border-[#e4e5e7] bg-white overflow-hidden">
        {GIG.image && (
          <img src={GIG.image} alt={GIG.title} className="w-full h-full object-cover" />
        )}
      </div>

      <div className="p-[0.7em] pb-[0.8em]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[0.7em]">
            <span className="w-[2.4em] h-[2.4em] rounded-full bg-[#1dbf73] text-white text-[1.1em] font-bold flex items-center justify-center">
              S
            </span>
            <div>
              <p className="text-[1.05em] font-bold leading-[1.3em] text-[#222325]">
                {GIG.seller}
              </p>
              <p className="text-[0.9em] leading-[1.3em] text-[#74767e] flex items-center gap-[0.25em]">
                <svg viewBox="0 0 24 24" className="w-[1em] h-[1em]" fill="#ffb33e" aria-hidden="true">
                  <path d="m12 2 3 6.5 7 .9-5.1 4.9 1.3 7L12 17.8 5.8 21.3l1.3-7L2 9.4l7-.9z" />
                </svg>
                <span className="font-semibold text-[#222325]">{GIG.rating}</span>
                <span>({GIG.reviews})</span>
                <span>• {GIG.level}</span>
              </p>
            </div>
          </div>

          <span className="inline-flex items-center gap-[0.35em] rounded-full bg-[#f1f1f3] px-[0.8em] py-[0.35em] text-[0.9em] text-[#74767e]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-[1em] h-[1em]" aria-hidden="true">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" />
            </svg>
            {GIG.delivery}
          </span>
        </div>

        <h4 className="mt-[0.8em] text-[1.2em] leading-[1.25em] font-bold text-[#222325]">
          {GIG.title}
        </h4>

        <div className="mt-[0.8em] flex flex-wrap gap-[0.4em]">
          {GIG.tags.map((t) => (
            <span
              key={t}
              className="rounded-[0.2em] bg-[#f1f1f3] px-[0.8em] py-[0.45em] text-[0.85em] leading-none text-[#62646a]"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-[0.9em] flex gap-[0.7em]">
          <a
            href={GIG.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-[210] h-[3.2em] rounded-[0.25em] bg-[#1dbf73] hover:bg-[#19a463] text-white text-[1em] font-bold flex items-center justify-center transition-colors"
          >
            View Gig
          </a>
          <a
            href={GIG.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-[107] h-[3.2em] rounded-[0.25em] border border-[#1dbf73] text-[#1dbf73] hover:bg-[#1dbf73] hover:text-white text-[1em] font-semibold flex items-center justify-center transition-colors"
          >
            Explore More
          </a>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Field styles ---------------- */
const field =
  "w-full h-12 lg:h-[66px] rounded-full bg-white border-2 lg:border-[3px] border-[#dcdce2] pl-5 lg:pl-[43px] pr-5 text-[15px] lg:text-[22px] text-[#333] placeholder:text-[#666] focus:outline-none focus:border-[#8a2490] transition-colors";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dialCode: "+92", // 👈 default country dial code
    service: services[0],
    brief: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSending(true);

    try {
      // Combine dial code + phone for EmailJS
      const fullPhone = `${formData.dialCode} ${formData.phone}`.trim();

      await emailjs.send(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        {
          name: formData.name,
          email: formData.email,
          phone: fullPhone, // 👈 includes country code
          service: formData.service,
          brief: formData.brief,
        },
        { publicKey: EMAILJS.publicKey }
      );

      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setFormData({
        name: "",
        email: "",
        phone: "",
        dialCode: "+92",
        service: services[0],
        brief: "",
      });
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="bg-white pt-12 pb-16 lg:pb-24 overflow-x-clip">
      <Container>
        <div className="mx-auto lg:w-[895px] lg:h-[984px] xl:w-[1126px] xl:h-[1238px]">
          <div className="lg:w-[1444px] lg:h-[1587px] lg:pt-[204px] lg:origin-top-left lg:scale-[0.62] xl:scale-[0.78]">
            {/* ============ CREAM BOX ============ */}
            <div
              className="relative mt-4 lg:mt-0 lg:h-[1383px] rounded-[36px] lg:rounded-[116px] px-5 sm:px-10 lg:px-[113px] pb-12 lg:pb-0 lg:pt-[250px]"
              style={{ backgroundColor: CREAM }}
            >
              {/* Info cards */}
              <div className="pt-6 lg:pt-0 grid grid-cols-1 md:grid-cols-3 gap-4 lg:contents">
                {infoCards.map((card) => (
                  <InfoCard key={card.title} card={card} />
                ))}
              </div>

              {/* ---------- Main 2-column area ---------- */}
              <div className="mt-10 lg:mt-0 grid grid-cols-1 lg:grid-cols-[581px_597px] lg:grid-rows-[auto_1fr] gap-x-10 gap-y-8 lg:gap-y-0">
                {/* LEFT top */}
                <div className="lg:col-start-1 lg:row-start-1">
                  <h2
                    className="text-[34px] sm:text-[40px] lg:text-[66px] lg:leading-[73px] font-extrabold leading-[1.1] mb-1 lg:mb-[7px]"
                    style={{ color: NAVY }}
                  >
                    Ready to Start?
                  </h2>
                  <p
                    className="text-[14px] leading-[20px] lg:text-[23px] lg:leading-[32px] max-w-sm lg:max-w-[415px]"
                    style={{ color: "#666" }}
                  >
                    Whether you need a full saas development services team, saas
                    development consulting, or just want to explore your
                    options, we’re here to help. Tell us about your project and
                    we’ll get back to you within 24 hours.
                  </p>
                </div>

                {/* RIGHT: form */}
                <form
                  onSubmit={handleSubmit}
                  className="lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:mt-[6px] flex flex-col gap-4 lg:gap-[23px]"
                >
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    className={field}
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className={field}
                  />

                  {/* ✅ NEW: functional country-picker phone input */}
                  <PhoneInput
                    value={formData.phone}
                    dialCode={formData.dialCode}
                    onChange={({ phone, dialCode }) =>
                      setFormData((prev) => ({ ...prev, phone, dialCode }))
                    }
                    placeholder="300 1234567"
                  />

                  {/* Service dropdown */}
                  <div className="relative">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className={`${field} appearance-none lg:pl-[46px] pr-12 lg:pr-[80px] cursor-pointer`}
                    >
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    <svg
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden="true"
                      className="absolute right-5 lg:right-[32px] top-1/2 -translate-y-1/2 pointer-events-none w-3 h-3 lg:w-5 lg:h-5"
                    >
                      <path
                        d="M2.5 4.5 6 8l3.5-3.5"
                        stroke="#444"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {/* Project brief */}
                  <textarea
                    name="brief"
                    value={formData.brief}
                    onChange={handleChange}
                    placeholder="Project Brief"
                    rows={5}
                    className="w-full h-[130px] lg:h-[178px] rounded-[28px] lg:rounded-[46px] bg-white border-2 lg:border-[3px] border-[#dcdce2] px-5 lg:px-[43px] py-4 lg:py-[28px] text-[15px] lg:text-[22px] text-[#333] placeholder:text-[#666] focus:outline-none focus:border-[#8a2490] transition-colors resize-none"
                  />

                  {error && (
                    <p className="text-sm lg:text-[20px] text-red-600">{error}</p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={sending}
                    className="mt-2 lg:mt-[136px] self-start h-12 lg:h-[66px] min-w-[155px] lg:min-w-[257px] px-8 rounded-full text-white text-[15px] lg:text-[23px] font-bold bg-gradient-to-r from-[#b948c4] to-[#85208f] hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed transition-opacity"
                  >
                    {sending ? "Sending..." : submitted ? "Message Sent ✓" : "Send Message"}
                  </button>

                  {/* Socials */}
                  <div className="mt-3 lg:mt-[38px]">
                    <p className="text-[14px] lg:text-[23px] font-extrabold uppercase tracking-[0.02em] text-black mb-[10px] lg:mb-[17px]">
                      Social Networking:
                    </p>
                    <div className="flex gap-[7px] lg:gap-3">
                      {[
                        { label: "LinkedIn", icon: LinkedinIcon },
                        { label: "Facebook", icon: FacebookIcon },
                        { label: "Instagram", icon: InstagramIcon },
                      ].map(({ label, icon: Icon }) => (
                        <a
                          key={label}
                          href="#"
                          aria-label={label}
                          className="w-12 h-12 lg:w-[66px] lg:h-[66px] rounded-full bg-white flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:bg-[#8a2490] hover:!text-white transition-colors"
                          style={{ color: NAVY }}
                        >
                          <Icon />
                        </a>
                      ))}
                    </div>
                  </div>
                </form>

                {/* LEFT bottom: Fiverr gig card */}
                <div className="lg:col-start-1 lg:row-start-2 lg:mt-[40px]">
                  <FiverrGig />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}