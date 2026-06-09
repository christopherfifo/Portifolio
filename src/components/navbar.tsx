import { useState } from "react";
import { Github, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [language, setLanguage] = useState<"PT" | "EN">("PT");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "PROJETOS", href: "#projetos" },
    { name: "SOBRE", href: "#sobre" },
    { name: "CONTATO", href: "#contato" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-2 md:px-4 pt-6 pointer-events-none">
      <div className="flex justify-center w-full">
        <div className="flex items-center justify-between w-full max-w-6xl px-4 md:px-8 py-3 bg-[#121212]/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl pointer-events-auto">
          
          <div className="flex items-center gap-3 md:gap-8">
            <div className="text-white font-bold tracking-widest md:tracking-[0.2em] text-[10px] md:text-base whitespace-nowrap">
              CHRISTOPHER.DEV
            </div>

            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="text-zinc-400 hover:text-white text-xs font-bold transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-6">
            <div className="hidden md:flex items-center gap-2 text-xs font-bold tracking-wider select-none">
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
              CV
            </button>

            <a
              href="https://github.com/christopherfifo"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center justify-center w-9 h-9 bg-[#1a1a1a] border border-white/10 rounded-full text-white hover:bg-white hover:text-black transition-all"
            >
              <Github size={16} />
            </a>

            <button 
              onClick={toggleMenu}
              className="flex md:hidden items-center justify-center w-8 h-8 text-white hover:text-brand-primary transition-colors"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-4 right-4 p-6 bg-[#121212] border border-white/10 rounded-[2rem] shadow-2xl pointer-events-auto md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-zinc-300 hover:text-brand-primary text-lg font-bold transition-colors border-b border-white/5 pb-2"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-4 text-sm font-bold tracking-widest text-zinc-400">
                  <span
                    onClick={() => setLanguage("PT")}
                    className={language === "PT" ? "text-white" : ""}
                  >
                    PT
                  </span>
                  <span className="text-zinc-800">|</span>
                  <span
                    onClick={() => setLanguage("EN")}
                    className={language === "EN" ? "text-white" : ""}
                  >
                    EN
                  </span>
                </div>

                <a
                  href="https://github.com/christopherfifo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-zinc-400 font-bold text-sm"
                >
                  <Github size={18} />
                  GITHUB
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
