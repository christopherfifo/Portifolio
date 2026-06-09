import React from 'react';
import { motion } from 'framer-motion';
import { User, Code2, GraduationCap, Coffee } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: <Code2 size={20} />, label: t.about.stats.stack, value: 'Full Stack' },
    { icon: <GraduationCap size={20} />, label: t.about.stats.focus, value: t.about.stats.engineering },
    { icon: <User size={20} />, label: t.about.stats.profile, value: t.about.stats.innovative },
    { icon: <Coffee size={20} />, label: t.about.stats.mindset, value: 'Agile' },
  ];

  return (
    <section id="sobre" className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 text-white">
            {t.about.title}
          </h2>
          
          <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
            <p dangerouslySetInnerHTML={{ __html: t.about.p1 }} />
            <p>{t.about.p2}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-violet-500/30 transition-colors"
              >
                <div className="text-violet-400 mb-2">{stat.icon}</div>
                <div className="text-xs text-zinc-500 uppercase tracking-widest font-bold">{stat.label}</div>
                <div className="text-sm text-zinc-200 font-semibold">{stat.value}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-violet-600/10 blur-[120px] rounded-full" />
          <div className="relative bg-zinc-900/40 backdrop-blur-xl border border-zinc-800 p-8 md:p-12 rounded-[2.5rem] overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
               <div className="w-20 h-20 border-t-2 border-r-2 border-violet-500/20 rounded-tr-3xl" />
            </div>
            
            <h4 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
              {t.about.philosophyTitle} <span className="text-violet-500 text-3xl">.</span>
            </h4>
            
            <ul className="space-y-4">
              {t.about.philosophyItems.map((text, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2.5 shrink-0" />
                  <p className="text-zinc-400 font-medium">{text}</p>
                </li>
              ))}
            </ul>
            
            <div className="mt-10 p-6 bg-violet-600/10 rounded-2xl border border-violet-500/20">
              <p className="text-sm text-violet-300 font-mono italic">
                {t.about.quote}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
