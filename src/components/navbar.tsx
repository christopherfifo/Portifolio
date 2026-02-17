import { useState } from "react";
import { Github } from "lucide-react";

const Navbar = () => {
  const [language, setLanguage] = useState<"PT" | "EN">("PT");

  return (
    <nav className="flex justify-center w-full px-2 md:px-4 pt-6">
      <div className="flex items-center justify-between w-full max-w-6xl px-4 md:px-8 py-3 bg-[#121212] border border-white/10 rounded-full shadow-2xl">
        
        <div className="text-white font-bold tracking-widest md:tracking-[0.2em] text-[10px] md:text-base whitespace-nowrap">
          CHRISTOPHER.DEV
        </div>


        <div className="flex items-center gap-2 md:gap-6">
          

          <div className="flex items-center gap-1 md:gap-2 text-[10px] md:text-xs font-bold tracking-wider select-none">
            <span
              onClick={() => setLanguage("PT")}
              className={`cursor-pointer transition-colors ${
                language === "PT" ? "text-white" : "text-neutral-500"
              }`}
            >
              PT
            </span>
            <span className="text-neutral-600">|</span>
            <span
              onClick={() => setLanguage("EN")}
              className={`cursor-pointer transition-colors ${
                language === "EN" ? "text-white" : "text-neutral-500"
              }`}
            >
              EN
            </span>
          </div>

          <button
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/doc/CV Christopher-Willians.pdf";
              link.download = "CV Christopher-Willians.pdf";
              link.click();
            }}
            className="bg-brand-primary hover:bg-[#d4bfff] text-black text-[9px] md:text-xs font-black px-3 py-1.5 md:px-6 md:py-2 rounded-full transition-all transform active:scale-95 shadow-[0_0_10px_rgba(195,166,255,0.3)]"
          >
            BAIXAR CV
          </button>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-7 h-7 md:w-9 md:h-9 bg-[#1a1a1a] border border-white/10 rounded-full text-white hover:bg-white hover:text-black transition-all"
          >
            <Github size={14} className="md:w-4.5" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;