import { workProjects } from "../../../features/work/data/projects";

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = workProjects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="pt-40 pb-20 text-center">
        <h1 className="text-3xl font-bold text-brand-navy">Project Not Found</h1>
      </section>
    );
  }

  return (
    <section className="pt-40 pb-20">
              <img
          className="max-h-30 absolute left-0 top-0 w-full object-cover"
          src="/images/illustrations/about-dots.jpg"
          alt=""
        />
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-brand-navy mb-4">
          {project.title}
        </h1>
        <p className="text-brand-gray mb-8">– {project.date}</p>
        <img
          src={project.image}
          alt={project.title}
          className="rounded-2xl w-full"
        />
      </div>
    </section>
  );
}