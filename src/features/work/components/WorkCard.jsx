import Link from "next/link";

export default function WorkCard({ project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block relative rounded-2xl overflow-hidden aspect-[16/10] bg-brand-navy"
    >
      {/* Image */}
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Dark gradient overlay at the bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

      {/* Text content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
        <h3 className="text-white text-lg lg:text-xl font-bold leading-snug mb-2 line-clamp-2">
          {project.title}
        </h3>
        <p className="text-white/80 text-sm">– {project.date}</p>
      </div>
    </Link>
  );
}