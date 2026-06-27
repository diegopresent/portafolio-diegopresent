import Image from "next/image";
import { MapPin, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

const Hero = () => {
  return (
    <section className="max-w-6xl mx-auto pt-24 pb-20 px-6">
      <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
          <div className="relative w-32 h-32 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-[#050505] shadow-2xl">
            <Image
              src="/me.jpg"
              alt="Luis Diego Condori Flores"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 128px, 224px"
            />
          </div>
        </div>

        <div className="text-center md:text-left space-y-6 flex-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-bold uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            #OpenToWork
          </div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none">
            Luis Diego <span className="text-blue-500">CF.</span>
          </h1>
          <h2 className="text-2xl md:text-4xl text-gray-400 font-light max-w-2xl leading-tight">
            Ingeniero en Sistemas <span className="text-white">&</span> Software Developer
          </h2>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-gray-400 pt-2">
            <span className="flex items-center gap-2 text-sm font-medium">
              <MapPin className="size-[18px] text-blue-500" /> Santa Cruz, Bolivia
            </span>
            <div className="flex gap-4 items-center">
              <a
                href="https://github.com/diegopresent"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <GithubIcon className="size-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/diegopresent/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="size-6" />
              </a>
              <a
                href="/cv-luis-diego-condori-Ing_Sistemas_1.4.pdf"
                download
                className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-sm font-bold transition-all hover:scale-105 shadow-xl shadow-blue-500/20"
              >
                <FileText className="size-[18px]" /> Mi CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
