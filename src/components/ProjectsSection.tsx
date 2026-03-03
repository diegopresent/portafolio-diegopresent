import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

const ProjectsSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5" id="proyectos">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="space-y-4">
          <h3 className="text-4xl md:text-6xl font-bold tracking-tight">
            Proyectos <span className="text-blue-500">Destacados</span>
          </h3>
          <div className="h-1 w-24 bg-blue-600 rounded-full"></div>
        </div>
        <p className="text-gray-500 max-w-md md:text-right text-lg leading-relaxed font-light italic">
          Donde la lógica se encuentra con la creatividad para resolver problemas del mundo real.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-10">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="w-full sm:w-[calc(50%-2.5rem)] lg:w-[calc(33.33%-2.5rem)] min-w-[320px] max-w-[400px] h-[36rem]"
          >
            <ProjectCard project={project} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
