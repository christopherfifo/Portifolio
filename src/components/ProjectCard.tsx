// src/components/ProjectCard.tsx
import React from 'react';
import type { Project } from '../types/project';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-[#121212] rounded-[2.5rem] overflow-hidden border border-white/5 flex flex-col h-full hover:border-violet-500/50 hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.4)] transition-all duration-500"
    >
      <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.titulo}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-90" />
        <div className="absolute inset-0 bg-violet-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="p-6 sm:p-8 flex flex-col flex-grow relative">
        <div className="flex items-start gap-3 sm:gap-4 mb-4">
            <div className="w-1.5 h-8 bg-violet-500 rounded-full group-hover:h-10 transition-all duration-300 shrink-0" />
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white group-hover:text-violet-400 transition-colors duration-300 leading-tight">
                {project.titulo}
            </h3>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techs.map((tech, index) => (
            <span 
              key={index} 
              className="px-2.5 py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider rounded-lg border border-violet-500/20 bg-violet-500/5 text-violet-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="relative mb-8">
          <p className={`text-zinc-400 text-sm sm:text-base leading-relaxed transition-all duration-300 ${!isExpanded ? 'line-clamp-3 sm:line-clamp-none' : ''}`}>
            {project.descricao}
          </p>
          {project.descricao.length > 100 && (
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="sm:hidden mt-2 text-violet-400 text-xs font-bold uppercase tracking-widest hover:text-violet-300 transition-colors"
            >
              {isExpanded ? 'Ler menos -' : 'Ler mais +'}
            </button>
          )}
        </div>

        <div className="mt-auto flex flex-col sm:flex-row items-stretch gap-3 pt-6 border-t border-white/5">
          <a 
            href={project.repoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-zinc-900 border border-zinc-800 text-[10px] font-black uppercase tracking-[0.15em] text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-300"
          >
            <Github size={16} />
            GitHub
          </a>
          
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-violet-600 text-[10px] font-black uppercase tracking-[0.15em] text-white hover:bg-violet-500 shadow-lg shadow-violet-900/20 hover:shadow-violet-600/40 transition-all duration-300"
            >
              Live Demo
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
