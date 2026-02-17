import { Star } from "lucide-react";
import Range, { allTechs, iconMap } from "./components/range";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a] px-6 py-20">
      <Range />

      <div className="container max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
        <div className="contents lg:flex lg:flex-1 lg:flex-col lg:items-start text-center lg:text-left">
          <h1 className="order-1 text-6xl md:text-8xl lg:text-9xl font-black leading-[0.85] mb-6 tracking-tighter">
            <span className="text-brand-primary">Christopher</span> <br />
            <span className="text-white">Willians</span>
          </h1>

          <p className="order-3 text-neutral-500 font-mono tracking-[0.4em] mt-8 lg:mt-2 mb-10 uppercase text-xs md:text-base opacity-80">
            Full Stack Developer
          </p>

          <div className="order-4 flex flex-wrap justify-center lg:justify-start gap-3 mb-12 max-w-2xl mx-auto lg:mx-0">
            {allTechs.map((tag) => {
              const Icon = iconMap[tag];
              return (
                <span
                  key={tag}
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] md:text-xs text-neutral-400 font-bold tracking-widest hover:border-brand-primary/50 hover:bg-white/10 transition-all"
                >
                  {Icon && <Icon className="text-brand-primary text-sm" />}
                  {tag}
                </span>
              );
            })}
          </div>

          <div className="order-5 flex flex-col-reverse md:flex-row gap-6 justify-center lg:justify-start w-full">
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl max-w-full md:max-w-xs backdrop-blur-md shadow-2xl">
              <span className="text-brand-primary text-4xl font-serif block mb-3 leading-none">
                “
              </span>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6 italic text-left">
                Projetos pensados para crescer com estabilidade, código limpo e
                experiência consistente.
              </p>
              <div className="text-[10px] font-black tracking-[0.2em] text-brand-primary uppercase text-left">
                Produto + Engenharia
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl min-w-full md:min-w-60 flex flex-col items-center justify-center backdrop-blur-md shadow-2xl">
              <div className="flex gap-1.5 mb-4 text-brand-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <div className="text-6xl font-black text-white">3+</div>
              <div className="text-xs text-neutral-500 font-bold tracking-[0.2em] uppercase mt-3 text-center">
                Anos de Experiência
              </div>
            </div>
          </div>
        </div>

        <div className="order-2 relative group my-8 lg:my-0 lg:ml-8">
          <div className="w-72 h-96 bg-brand-primary/20 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[100px] opacity-50" />

          <div className="relative w-72 h-96 md:w-80 md:h-112.5 overflow-hidden rounded-[3rem] border-b-10 border-r-10 border-brand-primary shadow-2xl ">
            <img
              src="cw.jpg"
              alt="Christopher Willians"
              className="w-full h-full object-cover bg-neutral-900"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
