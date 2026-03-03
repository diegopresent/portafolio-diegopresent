const AnnounceBar = () => {
  const text = "⚡ DISPONIBLE PARA TRABAJAR • EGRESADO ING. SISTEMAS • FULL STACK DEVELOPER • ✨";
  
  return (
    <div className="bg-green-500/10 border-b border-green-500/20 py-2.5 text-center overflow-hidden whitespace-nowrap">
      <div className="inline-block animate-pulse">
        <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-green-400 flex items-center gap-4">
          {text} • {text}
        </span>
      </div>
    </div>
  );
};

export default AnnounceBar;
