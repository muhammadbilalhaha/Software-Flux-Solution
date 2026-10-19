import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <Link href={project.href} key={project.id} className="group block">
      {/* Image */}
      <div className="overflow-hidden rounded-2xl aspect-[4/3] bg-brand-cream mb-5">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-brand-navy leading-snug mb-2 group-hover:text-brand-purple transition-colors">
        {project.title}
      </h3>

      {/* Date */}
      <p className="text-sm font-semibold text-brand-navy/70">– {project.date}</p>
    </Link>
  );
}