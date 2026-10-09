import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";
import { Sparkles, Code2 } from "lucide-react";

const ProjectsSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-24 border-t border-white/5" id="proyectos">
      {/* CABECERA DE LA SECCIÓN */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Showcase de Ingeniería</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Proyectos <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">Destacados</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full" />
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed pt-2">
            Sistemas reales diseñados con arquitectura limpia, escalabilidad, seguridad y una experiencia de usuario interactiva y fluida.
          </p>
        </div>

        <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/[0.03] border border-white/10 text-xs text-gray-400 backdrop-blur-sm self-start md:self-auto">
          <Code2 className="w-4 h-4 text-blue-400" />
          <span>Explora vistas dinámicas y detalles técnicos</span>
        </div>
      </div>

      {/* GRID DE PROYECTOS MODERNIZADO */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
