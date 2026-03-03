import { GraduationCap } from "lucide-react";

const Experience = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24 border-t border-white/5">
      <h3 className="text-4xl md:text-6xl font-bold tracking-tight mb-20 text-center md:text-left flex items-center gap-6">
        Trayectoria <GraduationCap className="size-[50px] text-blue-500" />
      </h3>

      <div className="space-y-20">
        {/* Overscope */}
        <div className="relative pl-8 md:pl-0 border-l-2 md:border-l-0 border-blue-500/30 flex flex-col md:flex-row md:gap-16 group">
          <div className="md:w-1/3 md:text-right">
            <span className="text-blue-500 font-black text-xl tracking-tighter">03/2025 - 07/2025</span>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-1">Experiencia Laboral</p>
          </div>
          <div className="hidden md:block relative">
            <div className="w-5 h-5 rounded-full bg-blue-500 absolute top-2 -left-[10px] group-hover:scale-150 transition-all shadow-[0_0_20px_rgba(59,130,246,0.8)]"></div>
          </div>
          <div className="md:w-2/3 pb-6">
            <h4 className="text-3xl font-black text-white mb-2 tracking-tight uppercase italic group-hover:text-blue-400 transition-colors">Overscope</h4>
            <p className="text-blue-400 text-sm mb-6 font-bold uppercase tracking-[0.3em]">Software Developer</p>
            <div className="text-gray-400 text-lg leading-relaxed space-y-3 font-light">
              <p className="flex items-start gap-3"><span className="text-blue-500 mt-1.5">•</span> Desarrollo del módulo de seguridad avanzada para el control de porteros/guardias de un condominio.</p>
              <p className="flex items-start gap-3"><span className="text-blue-500 mt-1.5">•</span> Implementación y desarrollo integral del módulo de proveedores.</p>
            </div>
          </div>
        </div>

        {/* Universidad Nur */}
        <div className="relative pl-8 md:pl-0 border-l-2 md:border-l-0 border-white/10 flex flex-col md:flex-row md:gap-16 group">
          <div className="md:w-1/3 md:text-right">
            <span className="text-white font-black text-xl tracking-tighter">EGRESADO</span>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-1 italic">Formación Académica</p>
          </div>
          <div className="hidden md:block relative">
            <div className="w-5 h-5 rounded-full bg-white/20 absolute top-2 -left-[10px] group-hover:scale-150 transition-all border border-white/20"></div>
          </div>
          <div className="md:w-2/3">
            <h4 className="text-3xl font-black text-white mb-2 tracking-tight uppercase italic group-hover:text-gray-400 transition-colors">Ingeniería en Sistemas</h4>
            <p className="text-gray-500 text-sm mb-6 font-bold uppercase tracking-[0.3em]">Universidad Nur</p>
            <p className="text-gray-600 text-lg leading-relaxed font-light">
              Formación superior de alto rigor enfocada en ingeniería de software moderna, bases de datos avanzadas y sistemas distribuidos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
