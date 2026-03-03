import { GithubIcon, LinkedinIcon } from "./Icons";

const Footer = () => {
  return (
    <footer className="py-20 text-center border-t border-white/5">
      <div className="flex flex-col items-center gap-8 mb-8">
        <div className="flex gap-12">
          <a
            href="https://github.com/diegopresent"
            target="_blank"
            className="text-gray-500 hover:text-white transition-all hover:scale-125"
          >
            <GithubIcon className="size-7" />
          </a>
          <a
            href="https://www.linkedin.com/in/diegopresent/"
            target="_blank"
            className="text-gray-500 hover:text-white transition-all hover:scale-125"
          >
            <LinkedinIcon className="size-7" />
          </a>
        </div>
        <div className="space-y-2">
          <p className="text-gray-400 font-mono tracking-[0.3em] uppercase text-xs">
            luisdiego362@gmail.com
          </p>
          <p className="text-blue-500/50 font-mono tracking-[0.3em] uppercase text-[10px]">
            +591 67751649
          </p>
        </div>
      </div>
      <p className="text-gray-700 text-[10px] uppercase tracking-[0.5em] font-bold">
        © {new Date().getFullYear()} Luis Diego Condori Flores • Santa Cruz, Bolivia
      </p>
    </footer>
  );
};

export default Footer;
