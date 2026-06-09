// src/components/Footer.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="relative bg-[#0a0a0a] pt-24 pb-12 px-6 md:px-12 lg:px-24 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6">
              Vamos criar algo <br /> 
              <span className="text-brand-primary">extraordinário?</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-md mb-8">
              Estou sempre aberto a novos projetos, colaborações ou apenas um café virtual para falar sobre tecnologia.
            </p>
            
            <div className="flex flex-col gap-4">
              <a 
                href="mailto:christopherwillians.sc@gmail.com" 
                className="group flex items-center gap-4 text-zinc-300 hover:text-white transition-colors min-w-0"
              >
                <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex shrink-0 items-center justify-center group-hover:border-brand-primary/50 transition-all">
                  <Mail size={20} className="text-brand-primary" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Email</div>
                  <div className="text-sm md:text-base font-medium break-all md:break-normal">christopherwillians.sc@gmail.com</div>
                </div>
              </a>

              <a 
                href="tel:+5511991973295" 
                className="group flex items-center gap-4 text-zinc-300 hover:text-white transition-colors min-w-0"
              >
                <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex shrink-0 items-center justify-center group-hover:border-brand-primary/50 transition-all">
                  <Phone size={20} className="text-brand-primary" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">WhatsApp / Celular</div>
                  <div className="text-sm md:text-base font-medium">+55 11 99197-3295</div>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col justify-end"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a 
                href="https://github.com/christopherfifo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-6 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-violet-500/30 transition-all group"
              >
                <div className="flex justify-between items-start mb-4">
                  <Github size={28} className="text-zinc-400 group-hover:text-white transition-colors" />
                  <ExternalLink size={16} className="text-zinc-600 opacity-0 group-hover:opacity-100 transition-all" />
                </div>
                <div className="font-bold text-white mb-1">GitHub</div>
                <div className="text-xs text-zinc-500 font-medium">@christopherfifo</div>
              </a>

              <a 
                href="https://www.linkedin.com/in/christopher-willians/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-6 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-violet-500/30 transition-all group"
              >
                <div className="flex justify-between items-start mb-4">
                  <Linkedin size={28} className="text-[#0A66C2] group-hover:text-[#0A66C2]/80 transition-colors" />
                  <ExternalLink size={16} className="text-zinc-600 opacity-0 group-hover:opacity-100 transition-all" />
                </div>
                <div className="font-bold text-white mb-1">LinkedIn</div>
                <div className="text-xs text-zinc-500 font-medium">Christopher Willians</div>
              </a>
            </div>
          </motion.div>
        </div>

        <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-zinc-500 text-sm font-medium">
            © {currentYear} <span className="text-zinc-300">Christopher Willians</span>. Todos os direitos reservados.
          </div>
          
          <div className="flex items-center gap-8">
            <a href="#" className="text-xs font-bold text-zinc-500 hover:text-white transition-colors tracking-widest uppercase">Início</a>
            <a href="#projetos" className="text-xs font-bold text-zinc-500 hover:text-white transition-colors tracking-widest uppercase">Projetos</a>
            <a href="#sobre" className="text-xs font-bold text-zinc-500 hover:text-white transition-colors tracking-widest uppercase">Sobre</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
