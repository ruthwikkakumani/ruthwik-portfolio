import { motion } from "motion/react";
import {
  SiCplusplus,
  SiCss,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPython,
  SiReact,
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
      { label: "SQL", icon: SiMysql, color: "#38BDF8", bgAlpha: 0.08 },
      { label: "MongoDB", icon: SiMongodb, color: "#4ADE80", bgAlpha: 0.08 },
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

function SkillTile({ skill, learning }: { skill: Skill; learning?: boolean }) {
  const iconBg = `color-mix(in oklch, ${skill.color} ${Math.round((skill.bgAlpha ?? 0.08) * 100)}%, transparent)`;

  return (
    <div
      className={`skill-tile flex flex-col items-center gap-2 p-3 rounded-xl border cursor-default ${
        learning
          ? "skill-tile-learning border-primary/25"
          : "bg-card border-border hover:border-primary/40"
      }`}
    >
      {}
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
        style={{ background: iconBg }}
      >
        {skill.icon ? (
          <skill.icon className="w-5 h-5" style={{ color: skill.color }} />
        ) : (
          <span
            className="font-mono text-sm font-bold leading-none"
            style={{ color: skill.color }}
          >
            {skill.textIcon}
          </span>
        )}
      </div>
      {}
      <span className="font-mono text-xs text-muted-foreground whitespace-nowrap leading-none">
        {skill.label}
      </span>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="section-label font-mono text-sm text-primary">
            {"// 02. skills"}
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mt-3 leading-tight">
            Tech Stack
          </h2>
          <p className="text-muted-foreground mt-3 text-sm">
            Languages and tools I build with — and what I&apos;m actively
            levelling up.
          </p>
        </motion.div>

        <div className="space-y-10">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: ci * 0.07 }}
            >
              {}
              <div
                className={`flex items-center gap-3 mb-4 pl-3 ${
                  cat.learning
                    ? "border-l-2 border-primary/50"
                    : "border-l-2 border-border"
                }`}
              >
                <h3
                  className={`font-mono text-xs uppercase tracking-widest ${
                    cat.learning ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {cat.name}
                </h3>
                {cat.learning && (
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded-full border border-primary/30 bg-primary/8 text-primary">
                    in progress
                  </span>
                )}
              </div>

              {}
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill) => (
                  <SkillTile
                    key={skill.label}
                    skill={skill}
                    learning={cat.learning}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
