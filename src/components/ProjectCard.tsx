"use client";
import { motion } from "framer-motion";
import { ExternalLink, Server, Layout } from "lucide-react";
import Image from "next/image";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="h-full bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all group shadow-xl flex flex-col"
    >
      {/* IMAGEN DEL PROYECTO */}
      <div className="relative h-48 min-h-[12rem] overflow-hidden">
        <div className="absolute inset-0 bg-gray-800 animate-pulse" />
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
      </div>

      {/* CONTENIDO */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* TECNOLOGÍAS */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-300 bg-blue-900/20 rounded-md border border-blue-500/20"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* BOTONES DE ACCIÓN */}
        <div className="flex flex-col gap-3">
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold transition-colors"
            >
              <ExternalLink className="size-[18px]" /> Ver Demo
            </a>
          )}

          <div className="flex gap-2">
            {project.links.repoFrontend && (
              <a
                href={project.links.repoFrontend}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-xs border border-gray-700 transition-colors"
                title="Ver código Frontend"
              >
                <Layout className="size-[14px]" /> Frontend
              </a>
            )}

            {project.links.repoBackend && (
              <a
                href={project.links.repoBackend}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-xs border border-gray-700 transition-colors"
                title="Ver código Backend"
              >
                <Server className="size-[14px]" /> Backend
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
