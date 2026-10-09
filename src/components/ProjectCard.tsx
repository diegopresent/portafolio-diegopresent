"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Server,
  Layout,
  Lock,
  Eye,
  CheckCircle2,
  Sparkles,
  ArrowUpRight
} from "lucide-react";
import Image from "next/image";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [activeViewIndex, setActiveViewIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const activeView = project.views[activeViewIndex] || project.views[0];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative rounded-3xl bg-[#0c1017] border border-white/10 hover:border-blue-500/40 transition-all duration-500 shadow-2xl overflow-hidden flex flex-col group h-full"
      style={{
        background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.08), transparent 70%), #0c1017`,
      }}
    >
      {/* GLOW DECORATIVO DE FONDO */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-500/20 transition-all duration-700" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-500/15 transition-all duration-700" />

      {/* MARCO DE NAVEGADOR INTERACTIVO */}
      <div className="p-4 sm:p-5 pb-0 flex flex-col">
        <div className="bg-[#141923] border border-white/10 rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/40">
          
          {/* BARRA SUPERIOR DE VENTANA TIPO BROWSER */}
          <div className="bg-[#10141d] px-4 py-3 border-b border-white/5 flex flex-wrap items-center justify-between gap-3">
            {/* BOTONES DE VENTANA */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block shadow-sm" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block shadow-sm" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block shadow-sm" />
            </div>

            {/* BARRA DE DIRECCIÓN URL */}
            <div className="flex-1 max-w-sm sm:max-w-md mx-auto hidden sm:flex items-center gap-2 px-3 py-1 rounded-lg bg-[#0b0e14] border border-white/5 text-xs text-gray-400 font-mono truncate">
              <Lock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="truncate text-gray-300">{project.browserUrl}</span>
            </div>

            {/* STATUS BADGE */}
            <div className="flex items-center gap-2 text-[11px] font-medium px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {project.status}
            </div>
          </div>

          {/* SELECTOR DE VISTAS TIPO TABS */}
          {project.views.length > 1 && (
            <div className="bg-[#121620] px-3 py-2 border-b border-white/5 flex items-center justify-between gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden [scrollbar-width:none] [-ms-overflow-style:none]">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-gray-400 flex items-center gap-1.5 pl-1 shrink-0">
                <Eye className="w-3.5 h-3.5 text-blue-400" />
                Vistas:
              </span>
              <div className="flex items-center gap-1.5">
                {project.views.map((v, vIdx) => {
                  const isActive = vIdx === activeViewIndex;
                  return (
                    <button
                      key={v.id}
                      onClick={() => setActiveViewIndex(vIdx)}
                      className={`text-xs px-3 py-1.5 rounded-lg transition-all duration-200 font-medium whitespace-nowrap cursor-pointer ${
                        isActive
                          ? "bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold"
                          : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
                      }`}
                    >
                      {v.label}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* PANTALLA CON EFECTO AUTO-SCROLL AL HACER HOVER */}
          <div className="relative h-64 sm:h-72 md:h-80 w-full overflow-hidden bg-[#07090e] cursor-pointer group/screen">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeView.image}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full overflow-hidden"
              >
                {/* IMAGEN CON TRANSICIÓN DE DESPLAZAMIENTO SUAVE AL HOVER */}
                <div
                  className="w-full h-full relative transition-transform duration-[4500ms] ease-in-out"
                  style={{
                    transform: isHovered ? "translateY(calc(-100% + 100%))" : "translateY(0%)",
                  }}
                >
                  <Image
                    src={activeView.image}
                    alt={`${project.title} - ${activeView.label}`}
                    fill
                    priority={index === 0}
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover/screen:scale-105"
                  />
                </div>

                {/* GRADIENTE SUPERIOR E INFERIOR PARA PROFUNDIDAD */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1017]/80 via-transparent to-transparent pointer-events-none opacity-40 group-hover/screen:opacity-10 transition-opacity" />

                {/* HINT INTERACTIVO: SCROLL ON HOVER */}
                <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-[11px] text-gray-300 flex items-center gap-1.5 shadow-lg pointer-events-none transition-opacity duration-300 group-hover/screen:opacity-0">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
                  <span>Hover para explorar</span>
                </div>

                {/* BOTÓN OVERLAY PARA ABRIR DEMO DIRECTA SI TIENE LINK */}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-3 right-3 p-2 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-white hover:bg-blue-600 hover:border-blue-500 transition-all opacity-0 group-hover/screen:opacity-100 shadow-xl"
                    title="Abrir demo en pestaña nueva"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* DESCRIPCIÓN CORTA DE LA VISTA SELECCIONADA */}
          {activeView.description && (
            <div className="bg-[#10141d] px-4 py-2 border-t border-white/5 text-[12px] text-gray-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span className="italic">{activeView.description}</span>
            </div>
          )}
        </div>
      </div>

      {/* CONTENIDO Y DETALLES TÉCNICOS */}
      <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between gap-6">
        <div>
          {/* CATEGORÍA & BADGE */}
          <div className="flex items-center justify-between gap-3 mb-2.5">
            <span className="text-[11px] uppercase tracking-wider font-bold text-blue-400 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
              {project.category}
            </span>
          </div>

          {/* TÍTULO Y TAGLINE */}
          <h3 className="text-2xl font-bold text-white mb-1.5 group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm font-medium text-blue-200/80 mb-3">
            {project.tagline}
          </p>

          {/* DESCRIPCIÓN GENERAL */}
          <p className="text-gray-400 text-sm leading-relaxed mb-5">
            {project.description}
          </p>

          {/* HIGHLIGHTS / PUNTOS DE INGENIERÍA */}
          <div className="space-y-2 mb-6 p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-gray-300 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              Aspectos Clave de Arquitectura & Lógica:
            </h4>
            <ul className="space-y-1.5 text-xs text-gray-300">
              {project.highlights.map((h, hIdx) => (
                <li key={hIdx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* TECNOLOGÍAS */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 text-[11px] font-medium text-gray-300 bg-white/5 hover:bg-blue-500/10 hover:text-blue-300 hover:border-blue-500/30 rounded-lg border border-white/5 transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* ACCIONES Y ENLACES */}
        <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row gap-3">
          {project.links.demo ? (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-xl font-semibold text-sm shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all cursor-pointer"
            >
              <ExternalLink className="w-4 h-4" />
              Probar Demo en Vivo
            </a>
          ) : (
            <div className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-white/5 text-gray-400 rounded-xl font-medium text-sm border border-white/5">
              <Server className="w-4 h-4 text-emerald-400" />
              API Lista & Documentada
            </div>
          )}

          <div className="flex gap-2 shrink-0">
            {project.links.repoFrontend && (
              <a
                href={project.links.repoFrontend}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 bg-white/5 hover:bg-white/10 text-gray-200 hover:text-white rounded-xl text-xs font-medium border border-white/10 transition-colors"
                title="Ver repositorio de código"
              >
                <Layout className="w-4 h-4 text-blue-400" />
                {project.links.repoBackend ? "Frontend" : "Código"}
              </a>
            )}

            {project.links.repoBackend && (
              <a
                href={project.links.repoBackend}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 bg-white/5 hover:bg-white/10 text-gray-200 hover:text-white rounded-xl text-xs font-medium border border-white/10 transition-colors"
                title="Ver repositorio Backend"
              >
                <Server className="w-4 h-4 text-indigo-400" />
                Backend
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
