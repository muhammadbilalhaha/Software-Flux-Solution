"use client";

import { useState } from "react";
import Container from "../../../components/ui/Container";
import AccordionItem from "./AccordionItem";

const items = [
  {
    id: "custom-saas",
    title: "Custom SaaS Development",
    description:
      "End-to-end SaaS product development — from discovery and architecture to launch and scale.",
    bullets: [
      "Multi-tenant architecture with secure auth & billing",
      "Integration with third-party APIs and payment gateways",
      "Scalable cloud infrastructure (AWS, GCP, Azure)",
      "Ongoing maintenance, monitoring, and feature iterations",
    ],
  },
  {
    id: "mobile-app",
    title: "Mobile App Development",
    description:
      "Native iOS and Android apps using Swift, Kotlin, and React Native",
    bullets: [
      "Cross-platform apps with a single codebase and native-level performance",
      "App integrations with REST APIs, third-party services, and SaaS backends",
      "Offline-first mobile architectures for field and enterprise use cases",
      "App Store and Google Play submission, optimization, and post-launch support",
    ],
  },
  {
    id: "website",
    title: "Website Development",
    description:
      "Blazing-fast marketing websites and web apps built on modern frameworks.",
    bullets: [
      "Next.js, React, and static site generation for speed & SEO",
      "CMS integrations (Strapi, Sanity, WordPress) for easy content edits",
      "Conversion-focused landing pages and design systems",
      "Responsive, accessible, and tested across all major browsers",
    ],
  },
  {
    id: "seo",
    title: "SEO & Digital Marketing",
    description:
      "Rank higher, get found, and turn traffic into revenue.",
    bullets: [
      "On-page and technical SEO audits",
      "Content strategy, keyword research, and backlink building",
      "Paid ads (Google, Meta, LinkedIn) and conversion tracking",
      "Monthly performance reports and iterative optimization",
    ],
  },
  {
    id: "ui-ux",
    title: "UI/UX & Graphic Design",
    description:
      "Interfaces and brand identities that guide users and grow businesses.",
    bullets: [
      "User research, wireframes, and interactive prototypes",
      "Design systems in Figma with reusable components",
      "Brand identity: logos, typography, color, and guidelines",
      "Usability testing and continuous design iteration",
    ],
  },
];

export default function WhyChooseUs() {
  const [openId, setOpenId] = useState("mobile-app");

  const handleToggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        {/* Heading block */}
        <div className="text-center max-w-[720px] mx-auto mb-14 lg:mb-20">
          <p className="text-[15px] font-black tracking-[0.18em] text-brand-purple uppercase mb-3">
            Why Choose Us
          </p>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-extrabold text-brand-navy leading-[1.22] tracking-[-0.01em]">
            We Provide Complete, End-to-End
            <br />
            SaaS Development Services
          </h2>
        </div>

        {/* Two-column: accordion left, illustration right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-2 items-start">
          {/* Accordion */}
          <div className="w-full">
            {items.map((item) => (
              <AccordionItem
                key={item.id}
                title={item.title}
                description={item.description}
                bullets={item.bullets}
                isOpen={openId === item.id}
                onToggle={() => handleToggle(item.id)}
              />
            ))}
          </div>

          {/* Illustration */}
          <div className="hidden lg:flex justify-center items-start ">
            <img
              src="/images/illustrations/handQuestion.webp"
              alt=""
              aria-hidden="true"
              className="w-full max-w-[600px] object-contain"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}