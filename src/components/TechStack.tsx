import { Layout, Server, Sparkles, Rocket } from "lucide-react";
import { BentoItem } from "./BentoItem";

const TechStack = () => {
  const frontendStack = ["JavaScript", "React", "Next.js", "Tailwind", "Git"];
  const backendStack = ["Node.js", "PHP", "Laravel", "Java", "Python", "MySQL"];
  const softSkills = ["Trabajo en equipo", "Resolución de problemas", "Adaptabilidad"];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
      <div className="text-center mb-16 space-y-4">
        <h3 className="text-4xl md:text-6xl font-bold tracking-tight text-white">Mi Arsenal</h3>
        <p className="text-gray-500 text-xl font-light tracking-wide">
          Tecnologías y herramientas que domino.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        <div className="w-full sm:w-[calc(50%-2rem)] lg:w-[calc(33.33%-2rem)] min-w-[300px] h-[24rem]">
          <BentoItem
            title="Frontend Ecosystem"
            description="Interfaces modernas."
            icon={<Layout className="size-6" />}
            className="border-blue-500/30 bg-blue-900/5 shadow-2xl shadow-blue-500/5"
            header={
              <div className="grid grid-cols-2 gap-3 w-full p-8">
                {frontendStack.map((tag) => (
                  <div
                    key={tag}
                    className="bg-blue-950/30 border border-blue-500/20 text-blue-300 text-[11px] font-mono py-2.5 rounded text-center font-bold tracking-wider"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            }
          />
        </div>
        <div className="w-full sm:w-[calc(50%-2rem)] lg:w-[calc(33.33%-2rem)] min-w-[300px] h-[24rem]">
          <BentoItem
            title="Backend & Enterprise"
            description="Sistemas robustos y gestión de datos."
            icon={<Server className="size-6" />}
            className="border-blue-500/30 bg-blue-900/5 shadow-2xl shadow-blue-500/5"
            header={
              <div className="relative w-full h-full p-8 grid grid-cols-2 gap-3 items-center">
                <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full"></div>
                {backendStack.map((tag) => (
                  <div
                    key={tag}
                    className="relative z-10 bg-green-950/30 border border-green-500/20 text-green-300 text-[11px] font-mono py-2.5 rounded text-center font-bold tracking-wider"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            }
          />
        </div>
        <div className="w-full sm:w-[calc(50%-2rem)] lg:w-[calc(33.33%-2rem)] min-w-[300px] h-[24rem]">
          <BentoItem
            title="Soft Skills & Values"
            description="Habilidades que garantizan el éxito en el equipo."
            icon={<Sparkles className="size-6" />}
            className="border-yellow-500/30 bg-yellow-900/5 shadow-2xl shadow-yellow-500/5"
            header={
              <div className="flex flex-col items-center justify-center h-full text-center p-8 space-y-6">
                <div className="space-y-3">
                  {softSkills.map((skill) => (
                    <p
                      key={skill}
                      className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em]"
                    >
                      {skill}
                    </p>
                  ))}
                </div>
                <div className="flex items-center gap-3 text-xs text-yellow-500/80 bg-yellow-900/10 px-5 py-2.5 rounded-full border border-yellow-500/20 font-bold tracking-widest">
                  <Rocket className="size-4" /> APRENDIZAJE CONTINUO
                </div>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default TechStack;
