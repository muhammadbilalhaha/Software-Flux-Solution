import Container from "../../../components/ui/Container";
import WorkCard from "./WorkCard";
import { workProjects } from "../data/projects";

export default function WorkGrid() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {workProjects.map((project) => (
            <WorkCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}