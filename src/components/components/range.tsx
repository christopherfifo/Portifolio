import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiSpringboot,
  SiDocker,
  SiLinux,
  SiPostgresql,
  SiMysql,
  SiPrisma,
  SiExpress,
  SiGit,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import type { IconType } from "react-icons";

export const allTechs: string[] = [
  "NEXT.JS",
  "REACT",
  "JAVA",
  "SPRING BOOT",
  "GIT",
  "DOCKER",
  "LINUX",
  "TYPESCRIPT",
  "NODE.JS",
  "POSTGRESQL",
  "MySQL",
  "REST API",
  "PRISMA",
  "EXPRESS",
];

export const iconMap: Record<string, IconType> = {
  "NEXT.JS": SiNextdotjs,
  REACT: SiReact,
  JAVA: FaJava,
  "SPRING BOOT": SiSpringboot,
  GIT: SiGit,
  DOCKER: SiDocker,
  LINUX: SiLinux,
  TYPESCRIPT: SiTypescript,
  "NODE.JS": SiNodedotjs,
  POSTGRESQL: SiPostgresql,
  MySQL: SiMysql,
  "REST API": TbApi,
  PRISMA: SiPrisma,
  EXPRESS: SiExpress,
};

function Range() {
  const TechContent = ({ isReverse = false }) => (
    <div
      className={`flex ${isReverse ? "animate-marquee-reverse" : "animate-marquee"} whitespace-nowrap`}
    >
      {[...allTechs, ...allTechs].map((tech, i) => {
        const Icon = iconMap[tech];
        return (
          <span
            key={i}
            className={`flex items-center gap-2 text-white font-black uppercase tracking-tighter mx-10 text-xl italic ${isReverse ? "opacity-50" : ""}`}
          >
            <span className="text-brand-primary/80">
              {Icon ? <Icon size={20} /> : "•"}
            </span>
            {tech}
          </span>
        );
      })}
    </div>
  );

  return (
    <div className="absolute inset-0 z-0 flex flex-col justify-center pointer-events-none opacity-15">
      <div className="relative w-[120%] -left-10 h-14 bg-linear-to-r from-brand-secondary to-brand-primary rotate-2 blur-[1px] flex items-center overflow-hidden">
        <TechContent />
      </div>

      <div className="relative w-[120%] -left-10 h-14 bg-linear-to-r from-brand-primary to-brand-secondary -rotate-2 -mt-6 blur-[3px] flex items-center overflow-hidden">
        <TechContent isReverse />
      </div>
    </div>
  );
}

export default Range;
