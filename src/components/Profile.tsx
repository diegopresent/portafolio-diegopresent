import { Globe, BrainCircuit } from "lucide-react";

const Profile = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 border-t border-white/5">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
              Perfil Profesional
            </h3>
            <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
          </div>
          <p className="text-gray-400 text-xl leading-relaxed font-light">
            Egresado de Ingeniería en Sistemas con sólidos conocimientos en desarrollo de software y bases de datos. Apasionado por la tecnología y la resolución de problemas complejos.
          </p>
          <p className="text-gray-400 text-xl leading-relaxed font-light">
            Me enfoco en el aprendizaje continuo y en la aplicación de mis habilidades técnicas en proyectos reales que generen valor. Poseo gran capacidad de adaptación y trabajo en equipo.
          </p>
          <div className="flex flex-wrap gap-6 pt-6">
            <div className="flex flex-col items-center p-5 bg-white/5 rounded-[2rem] border border-white/10 min-w-[140px] hover:bg-white/10 transition-colors">
              <Globe className="size-7 text-blue-400 mb-3" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Español</span>
              <span className="text-xs text-blue-300 font-bold mt-1">NATIVO</span>
            </div>
            <div className="flex flex-col items-center p-5 bg-white/5 rounded-[2rem] border border-white/10 min-w-[140px] hover:bg-white/10 transition-colors">
              <Globe className="size-7 text-purple-400 mb-3" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Inglés</span>
              <span className="text-xs text-purple-300 font-bold mt-1">BÁSICO</span>
            </div>
          </div>
        </div>
        <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 bg-gradient-to-br from-blue-500/10 to-transparent flex items-center justify-center p-16 group">
          <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full scale-50 group-hover:scale-100 transition-transform duration-1000"></div>
          <div className="relative z-10 text-center space-y-6">
            <BrainCircuit className="size-20 text-blue-500 mx-auto animate-pulse" />
            <p className="text-lg italic text-gray-400 font-serif">Apasionado por transformar la lógica en soluciones funcionales que impacten positivamente en la sociedad.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
