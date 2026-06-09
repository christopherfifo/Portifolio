import { Star } from "lucide-react";
import { motion } from "framer-motion";
import Range from "./components/range";
import { useLanguage } from "../context/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a] px-4 md:px-6 pt-28 pb-12 md:py-20">
      <Range />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="container max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16"
      >
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:flex-1 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-bold tracking-widest uppercase mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
            </span>
            {t.hero.available}
          </div>

          <h1 className="text-[13vw] sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.85] mb-6 tracking-tighter">
            <span className="text-brand-primary">Christopher</span> <br />
            <span className="text-white">Willians</span>
          </h1>

          <p className="text-neutral-500 font-mono tracking-[0.3em] md:tracking-[0.4em] mt-4 mb-10 uppercase text-[10px] sm:text-xs md:text-base opacity-80">
            {t.hero.role} <span className="text-brand-primary mx-2">/</span> {t.hero.softwareEngineer}
          </p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:hidden relative group mb-12"
          >
            <div className="w-64 h-80 bg-brand-primary/20 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[60px] opacity-40" />
            <div className="relative w-64 h-80 overflow-hidden rounded-[2rem] border-b-6 border-r-6 border-brand-primary shadow-2xl">
              <img
                src="cw.jpg"
                alt="Christopher Willians"
                className="w-full h-full object-cover bg-neutral-900"
              />
            </div>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-6 w-full">
            <div className="bg-white/5 border border-white/10 p-6 rounded-3xl flex-1 backdrop-blur-md shadow-2xl group hover:border-violet-500/30 transition-colors">
              <span className="text-brand-primary text-4xl font-serif block mb-2 leading-none">
                “
              </span>
              <p className="text-neutral-400 text-sm leading-relaxed mb-4 italic text-left">
                {t.hero.quote}
              </p>
              <div className="text-[10px] font-black tracking-[0.2em] text-brand-primary uppercase text-left">
                {t.hero.productEngineering}
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-3xl min-w-[200px] flex flex-col items-center justify-center backdrop-blur-md shadow-2xl group hover:border-violet-500/30 transition-colors">
              <div className="flex gap-1 mb-3 text-brand-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <div className="text-5xl font-black text-white">3+</div>
              <div className="text-[10px] text-neutral-500 font-bold tracking-[0.2em] uppercase mt-2 text-center">
                {t.hero.yearsOfExperience}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:block relative group lg:ml-8"
        >
          <div className="w-72 h-96 md:w-80 md:h-[450px] bg-brand-primary/20 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[100px] opacity-30 group-hover:opacity-50 transition-opacity" />

          <div className="relative w-72 h-96 md:w-80 md:h-[450px] overflow-hidden rounded-[3rem] border-b-8 border-r-8 border-brand-primary shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-500">
            <img
              src="cw.jpg"
              alt="Christopher Willians"
              className="w-full h-full object-cover bg-neutral-900 scale-105 group-hover:scale-100 transition-transform duration-700"
            />
          </div>
          
          <div className="absolute -bottom-6 -left-6 bg-zinc-900 border border-zinc-800 p-4 rounded-2xl shadow-2xl">
            <div className="text-xs text-zinc-500 font-bold uppercase tracking-widest mb-1">{t.hero.locationTitle}</div>
            <div className="text-sm text-white font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              {t.hero.location}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
