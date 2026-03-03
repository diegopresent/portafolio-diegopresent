import ContactForm from "./ContactForm";
import { GithubIcon, LinkedinIcon } from "./Icons";

const ContactSection = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-32 border-t border-white/5">
      <div className="bg-gradient-to-br from-blue-900/10 to-transparent p-12 md:p-20 rounded-[4rem] border border-white/5 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full"></div>

        <div className="text-center mb-16 relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">¿Conectamos?</h2>
          <p className="text-gray-400 max-w-lg mx-auto text-xl italic font-light mb-12">
            Buscando oportunidades para aplicar mis conocimientos en proyectos reales de alto impacto.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a
              href="https://www.linkedin.com/in/diegopresent/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-blue-600/20 border border-white/10 hover:border-blue-500/50 rounded-2xl transition-all group active:scale-95"
            >
              <LinkedinIcon className="size-6 group-hover:text-blue-400 transition-colors" />
              <span className="text-base font-bold tracking-wide">LinkedIn</span>
            </a>
            <a
              href="https://github.com/diegopresent"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all group active:scale-95"
            >
              <GithubIcon className="size-6 group-hover:text-gray-300 transition-colors" />
              <span className="text-base font-bold tracking-wide">GitHub</span>
            </a>
          </div>
        </div>

        <div className="max-w-2xl mx-auto relative z-10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
