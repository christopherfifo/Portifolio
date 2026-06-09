import React, { useState, useRef } from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import { LayoutGrid, SlidersHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const ProjectsSection: React.FC = () => {
  const { t } = useLanguage();
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollAmount = clientWidth * 0.8;
      const scrollTo = direction === 'left' 
        ? scrollLeft - scrollAmount 
        : scrollLeft + scrollAmount;
      
      carouselRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="projetos" className="py-24 px-0 md:px-12 lg:px-24 max-w-[1600px] mx-auto text-white">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16 px-6 md:px-0">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
            {t.projects.title}
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex items-center bg-zinc-900/50 backdrop-blur-md border border-zinc-800 p-1 rounded-2xl shadow-xl self-start"
        >
          <button
            onClick={() => setViewMode('carousel')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
              viewMode === 'carousel' 
                ? 'bg-violet-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.4)]' 
                : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            <SlidersHorizontal size={18} />
            {t.projects.showcase}
          </button>
          <button
            onClick={() => setViewMode('grid')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
              viewMode === 'grid' 
                ? 'bg-violet-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.4)]' 
                : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            <LayoutGrid size={18} />
            {t.projects.grid}
          </button>
        </motion.div>
      </div>

      <div className="relative">
        <AnimatePresence mode="wait">
          {viewMode === 'carousel' ? (
            <motion.div 
              key="carousel"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative flex items-center group"
            >
              <button 
                onClick={() => scroll('left')}
                className="hidden xl:flex absolute -left-16 z-30 bg-zinc-900/80 border border-zinc-800 p-4 rounded-full hover:bg-zinc-800 hover:border-violet-500/50 transition-all active:scale-95 shadow-2xl opacity-0 group-hover:opacity-100"
                aria-label="Anterior"
              >
                <ChevronLeft size={24} className="text-zinc-400" />
              </button>

              <div 
                ref={carouselRef}
                className="flex gap-4 md:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-8 cursor-grab active:cursor-grabbing px-6 md:px-0"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {projects.map((project) => (
                  <div 
                    key={project.id} 
                    className="w-[320px] sm:w-[380px] md:w-[450px] lg:w-[500px] shrink-0 snap-center first:ml-0 last:mr-0"
                  >
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>

              <button 
                onClick={() => scroll('right')}
                className="hidden xl:flex absolute -right-16 z-30 bg-zinc-900/80 border border-zinc-800 p-4 rounded-full hover:bg-zinc-800 hover:border-violet-500/50 transition-all active:scale-95 shadow-2xl opacity-0 group-hover:opacity-100"
                aria-label="Próximo"
              >
                <ChevronRight size={24} className="text-zinc-400" />
              </button>
            </motion.div>
          ) : (
            <motion.div 
              key="grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 px-6 md:px-0"
            >
              {projects.map((project) => (
                <div key={project.id} className="h-full">
                  <ProjectCard project={project} />
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;
