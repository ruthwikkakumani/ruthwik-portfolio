import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "motion/react";
import { useRef } from "react";
import {
  SiCplusplus,
  SiCss,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiTailwindcss,
} from "react-icons/si";

interface Skill {
  label: string;
  icon?: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>;
  textIcon?: string;
  color: string;
  bgAlpha?: number;
}

interface Category {
  name: string;
  learning?: boolean;
  skills: Skill[];
}

const categories: Category[] = [
  {
    name: "Languages",
    skills: [
      { label: "C", textIcon: "C", color: "#60A5FA", bgAlpha: 0.08 },
      { label: "C++", icon: SiCplusplus, color: "#60A5FA", bgAlpha: 0.08 },
      { label: "Go", icon: SiGo, color: "#00ADD8", bgAlpha: 0.08 },
      { label: "Python", icon: SiPython, color: "#FCD34D", bgAlpha: 0.07 },
      {
        label: "JavaScript",
        icon: SiJavascript,
        color: "#FCD34D",
        bgAlpha: 0.07,
      },
      { label: "Java", textIcon: "☕", color: "#FB923C", bgAlpha: 0.08 },
    ],
  },
  {
    name: "Frontend",
    skills: [
      { label: "HTML5", icon: SiHtml5, color: "#F97316", bgAlpha: 0.08 },
      { label: "CSS3", icon: SiCss, color: "#38BDF8", bgAlpha: 0.08 },
      {
        label: "Tailwind",
        icon: SiTailwindcss,
        color: "#22D3EE",
        bgAlpha: 0.08,
      },
      { label: "React", icon: SiReact, color: "#67E8F9", bgAlpha: 0.08 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { label: "Node.js", icon: SiNodedotjs, color: "#4ADE80", bgAlpha: 0.08 },
      { label: "Express.js", icon: SiExpress, color: "#D1D5DB", bgAlpha: 0.05 },
    ],
  },
  {
    name: "Databases",
    skills: [
      { label: "PostgreSQL", icon: SiPostgresql, color: "#336791", bgAlpha: 0.08 },
      { label: "MongoDB", icon: SiMongodb, color: "#4ADE80", bgAlpha: 0.08 },
      { label: "Redis", icon: SiRedis, color: "#DC382D", bgAlpha: 0.08 },
      { label: "SQL", icon: SiMysql, color: "#38BDF8", bgAlpha: 0.08 },
    ],
  },
  {
    name: "Tools",
    skills: [
      { label: "Git", icon: SiGit, color: "#FB923C", bgAlpha: 0.08 },
      { label: "GitHub", icon: SiGithub, color: "#D1D5DB", bgAlpha: 0.05 },
      { label: "Docker", icon: SiDocker, color: "#38BDF8", bgAlpha: 0.08 },
    ],
  },
  {
    name: "Currently Learning",
    learning: true,
    skills: [
      { label: "System Design", textIcon: "⚙", color: "#67E8F9", bgAlpha: 0.1 },
      { label: "OS Internals", textIcon: "🖥", color: "#67E8F9", bgAlpha: 0.1 },
      { label: "Backend Arch.", textIcon: "🏗", color: "#67E8F9", bgAlpha: 0.1 },
    ],
  },
];

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

function SkillTile({ skill, learning }: { skill: Skill; learning?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const iconBg = `color-mix(in oklch, ${skill.color} ${Math.round((skill.bgAlpha ?? 0.08) * 100)}%, transparent)`;
  const GlowColor = skill.color + "40";

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className={`relative h-28 w-28 sm:h-32 sm:w-32 rounded-3xl transition-all duration-300 ${
        learning
          ? "border-2 border-primary/20 bg-primary/5 shadow-[0_0_20px_oklch(0.78_0.16_200_/_0.05)]"
          : "bg-card/40 backdrop-blur-md border border-white/5 hover:border-white/20 shadow-xl"
      }`}
    >
      <div
        style={{
          transform: "translateZ(30px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-2 text-center"
      >
        <div
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-lg relative group"
          style={{ background: iconBg }}
        >
          <div 
            className="absolute inset-0 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ backgroundColor: GlowColor }}
          />
          {skill.icon ? (
            <skill.icon className="w-7 h-7 sm:w-8 sm:h-8 relative z-10" style={{ color: skill.color }} />
          ) : (
            <span
              className="font-mono text-lg sm:text-xl font-bold leading-none relative z-10"
              style={{ color: skill.color }}
            >
              {skill.textIcon}
            </span>
          )}
        </div>
        <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-tight text-muted-foreground/80 leading-none">
          {skill.label}
        </span>
      </div>
      
      {!learning && (
        <div 
          className="absolute inset-0 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ 
            background: `radial-gradient(circle at center, ${skill.color}15 0%, transparent 70%)` 
          }}
        />
      )}
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-card/10 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 text-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 font-mono text-xs text-primary mb-6 shadow-sm">
            {"// 02. skills"}
          </span>
          <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl tracking-tighter leading-none">
            Tech <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary/80 to-blue-400">Stack</span>
          </h2>
          <p className="text-muted-foreground mt-8 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Building complex systems with a blend of low-level optimization and high-level architecture.
          </p>
        </motion.div>

        <div className="flex flex-col gap-24">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: ci * 0.15, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <div className="flex items-center gap-5 mb-12">
                <div className="h-0.5 w-12 sm:w-24 bg-gradient-to-r from-transparent via-primary/40 to-primary/10" />
                <h3 className={`font-mono text-xs sm:text-sm uppercase tracking-[0.4em] font-black ${
                  cat.learning ? "text-primary glow-text" : "text-foreground"
                }`}>
                  {cat.name}
                </h3>
                <div className="h-0.5 w-12 sm:w-24 bg-gradient-to-l from-transparent via-primary/40 to-primary/10" />
              </div>

              <div className="flex flex-wrap justify-center gap-6 sm:gap-8 max-w-5xl">
                {cat.skills.map((skill, si) => (
                  <motion.div
                    key={skill.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (ci * 0.1) + (si * 0.05) }}
                  >
                    <SkillTile
                      skill={skill}
                      learning={cat.learning}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Scroll indicator for the section */}
      <div className="absolute top-0 right-10 bottom-0 w-px bg-gradient-to-b from-transparent via-border/50 to-transparent hidden md:block" />
    </section>
  );
}
