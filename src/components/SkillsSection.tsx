import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, SiTypescript, SiNextdotjs, SiNodedotjs, 
  SiSpringboot, SiDocker, SiLinux, SiPostgresql, 
  SiMysql, SiPrisma, SiExpress, SiGit, SiTailwindcss, SiJavascript
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbApi } from "react-icons/tb";

const skillCategories = [
  {
    title: "Linguagens",
    skills: [
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Java", icon: FaJava, color: "#007396" },
    ]
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      { name: "Express", icon: SiExpress, color: "#FFFFFF" },
      { name: "Rest API", icon: TbApi, color: "#FFFFFF" },
    ]
  },
  {
    title: "Banco de Dados",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
    ]
  },
  {
    title: "Infra & Ferramentas",
    skills: [
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
      { name: "Git", icon: SiGit, color: "#F05032" },
    ]
  }
];

const SkillsSection: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
          Linguagens & Ferramentas
        </h2>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          Tecnologias que utilizo para construir soluções robustas, escaláveis e de alto desempenho.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-8 rounded-[2rem] bg-zinc-900/40 border border-zinc-800 backdrop-blur-sm hover:border-violet-500/30 transition-all group"
          >
            <h3 className="text-xl font-bold mb-6 text-violet-400 group-hover:text-violet-300 transition-colors">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-4">
              {category.skills.map((skill) => (
                <div 
                  key={skill.name}
                  className="flex items-center gap-2 px-4 py-2 bg-zinc-800/50 rounded-xl border border-zinc-700/50 hover:border-violet-500/50 transition-all hover:bg-zinc-800"
                  title={skill.name}
                >
                  <skill.icon size={20} style={{ color: skill.color }} />
                  <span className="text-sm font-medium text-zinc-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
