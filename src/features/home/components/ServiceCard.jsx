import Link from "next/link";

export default function ServiceCard({ service }) {
  const { title, description, icon, href, featured } = service;

  if (featured) {
    // Highlighted center card — purple bg, larger, elevated
    return (
      <Link
        href={href}
        className="relative block bg-white rounded-[2rem] shadow-2xl border-2 border-brand-purple px-6 py-10 pt-16 text-center transition-transform duration-300 hover:-translate-y-2 lg:-mt-8 lg:mb-0 mx-auto w-full max-w-sm"
      >
        {/* Purple icon circle — floating on top */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-brand-purple flex items-center justify-center text-white text-2xl shadow-lg">
          {icon}
        </div>

        <h3 className="text-lg font-bold text-brand-purple mb-3">{title}</h3>
        <p className="text-sm text-brand-gray leading-relaxed line-clamp-3">
          {description}
        </p>
      </Link>
    );
  }

  // Side cards — cream bg, smaller, aligned down
  return (
    <Link
      href={href}
      className="relative block bg-brand-cream rounded-[2rem] px-6 py-10 pt-14 text-center transition-transform duration-300 hover:-translate-y-2 w-full max-w-sm mx-auto"
    >
      {/* Purple outline icon circle */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-white border-2 border-brand-purple flex items-center justify-center text-brand-purple text-xl">
        {icon}
      </div>

      <h3 className="text-base font-bold text-brand-navy mb-3">{title}</h3>
      <p className="text-xs text-brand-gray leading-relaxed line-clamp-3">
        {description}
      </p>
    </Link>
  );
}