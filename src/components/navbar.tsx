import { useState } from "react";
import { Github } from "lucide-react";

const Navbar = () => {

  const [language, setLanguage] = useState<"PT" | "EN">("PT");

  return (
    <nav className="flex justify-center w-full px-4 pt-6">
      <div className="flex items-center justify-between w-full max-w-6xl px-8 py-3 bg-[#121212] border border-white/10 rounded-full shadow-2xl">
        
  
        <div className="text-white font-bold tracking-[0.2em] text-sm md:text-base">
          CHRISTOPHER.DEV
        </div>

      
        <div className="flex items-center gap-6">
          
         
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider select-none">
            <span 
              onClick={() => setLanguage("PT")}
              className={`cursor-pointer transition-colors ${
                language === "PT" ? "text-white" : "text-neutral-500 hover:text-neutral-300"
              }`}
            >
              PT
            </span>
            
            <span className="text-neutral-600">|</span>
            
            <span 
              onClick={() => setLanguage("EN")}
              className={`cursor-pointer transition-colors ${
                language === "EN" ? "text-white" : "text-neutral-500 hover:text-neutral-300"
              }`}
            >
              EN
            </span>
          </div>

       
          <button className="bg-[#f7c331] hover:bg-[#ffcc33] text-black text-[10px] md:text-xs font-black px-6 py-2 rounded-full transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(247,195,49,0.3)] hover:shadow-[0_0_20px_rgba(247,195,49,0.5)]">
            BAIXAR CV
          </button>

     
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-9 h-9 bg-[#1a1a1a] border border-white/10 rounded-full text-white hover:bg-white hover:text-black transition-all"
          >
            <Github size={18} />
          </a>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;