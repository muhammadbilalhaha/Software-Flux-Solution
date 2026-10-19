import Link from "next/link";

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  external = false, // 👈 new prop
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200";

  const variants = {
    primary: "bg-brand-gradient text-white hover:opacity-90 shadow-md hover:shadow-lg",
    secondary: "bg-transparent text-white border-2 border-brand-purple-light hover:bg-white/10",
    outline: "bg-white text-brand-purple border-2 border-brand-purple hover:bg-brand-purple hover:text-white",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    // External link — use plain <a>
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }

    // Internal link — use Next.js <Link>
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}