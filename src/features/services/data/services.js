import { Globe, Headphones, BookOpen } from "lucide-react";

export const servicesList = [
  {
    id: "saas-development",
    title: "SaaS Development",
    subtitle: "SaaS Development",
    icon: "⚙️",
    iconBg: "bg-pink-100 text-pink-500",
    href: "/services/saas-development",
  },
  {
    id: "ui-ux-graphic-design",
    title: "UI/UX & Graphic Design",
    subtitle: "UI/UX & Graphic Design",
    icon: "🎨",
    iconBg: "bg-green-100 text-green-600",
    href: "/services/ui-ux-design",
  },
  {
    id: "website-development",
    title: "Website Development",
    subtitle: "Website Development",
    icon: "💻",
    iconBg: "bg-purple-100 text-purple-500",
    href: "/services/website-development",
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    subtitle: "Mobile App Development",
    icon: "📱",
    iconBg: "bg-brand-purple text-white",
    href: "/services/mobile-app-development",
    featured: true,
  },
  {
    id: "seo-digital-marketing",
    title: "SEO & Digital Marketing",
    subtitle: "SEO & Digital Marketing",
    icon: "📊",
    iconBg: "bg-yellow-100 text-yellow-600",
    href: "/services/seo-digital-marketing",
  },
];

export const solutionsList = [
  {
    id: "custom-saas",
    icon: <Globe className="w-7 h-7 text-white" />,
    title: "Custom SaaS Development",
    description:
      "We create fully tailored SaaS solutions built around your business model, users, and growth objectives.",
    offset: "lg:mt-24", // pushed down like in the design
  },
  {
    id: "enterprise",
    icon: <Headphones className="w-7 h-7 text-white" />,
    title: "Enterprise-Ready Platforms",
    description:
      "Scalable and secure SaaS platforms designed for multi-tenancy, SSO, and millions of users.",
    offset: "lg:mt-8",
  },
  {
    id: "consulting",
    icon: <BookOpen className="w-7 h-7 text-white" />,
    title: "SaaS Consulting & Design",
    description:
      "Guidance on architecture, tech stack, and roadmap, plus intuitive UI/UX for maximum user engagement.",
    offset: "lg:-mt-4",
  },
];