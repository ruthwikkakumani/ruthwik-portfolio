import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  Code2,
  Download,
  FolderOpen,
  Github,
  Linkedin,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const roles = [
  "Full Stack Developer",
  "Backend Engineer",
  "Problem Solver",
  "CS Student",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          75,
        );
      } else {
        timeout = setTimeout(() => setTyping(false), 2200);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center hero-grid overflow-hidden"
    >
      {}
      <div className="hero-bloom" />

      {}
      <div className="hero-watermark">
        <span className="hero-watermark-text">RK</span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-black/10 bg-white shadow-sm mb-10"
        >
          <div className="relative flex items-center justify-center w-3 h-3">
            {[0, 1].map((i) => (
              <motion.span 
                key={i}
                initial={{ scale: 1, opacity: 0.5 }}
                animate={{ scale: 3, opacity: 0 }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeOut",
                  delay: i * 1
                }}
                className="absolute w-full h-full rounded-full bg-emerald-400/40" 
              />
            ))}
            <span className="relative w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
            Available for internships &amp; opportunities
          </span>
        </motion.div>

        {}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-bold text-5xl sm:text-7xl md:text-8xl tracking-tight leading-none mb-5"
        >
          Ruthwik <br className="sm:hidden" />
          <span className="text-primary glow-text">Kakumani</span>
        </motion.h1>

        {}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.26, ease: "easeOut" }}
          className="font-mono text-xl sm:text-2xl md:text-3xl mb-7 h-10 flex items-center justify-center gap-0"
        >
          <span className="text-foreground/70">{displayed}</span>
          <span className="text-primary animate-blink ml-0.5">▌</span>
        </motion.div>

        {}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.38, ease: "easeOut" }}
          className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Passionate about building scalable systems from first principles.
          Strong CS fundamentals, DSA, and backend engineering — aiming for
          top-tier software engineering roles.
        </motion.p>

        {}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.44, ease: "easeOut" }}
          className="w-16 h-px bg-primary/40 mx-auto mb-10"
        />

        {}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.5, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <Button
            data-ocid="hero.projects.primary_button"
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono gap-2 px-8 shadow-[0_0_24px_oklch(0.78_0.16_200_/_0.35)] hover:shadow-[0_0_32px_oklch(0.78_0.16_200_/_0.5)] transition-shadow"
            onClick={() => scrollTo("#projects")}
          >
            <FolderOpen className="w-4 h-4" />
            View Projects
          </Button>
          <Button
            data-ocid="hero.resume.secondary_button"
            size="lg"
            variant="outline"
            className="border-border hover:border-primary/60 hover:bg-primary/5 font-mono gap-2 px-8 transition-all duration-200"
            asChild
          >
            <a href="/resume.pdf" download>
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </Button>
        </motion.div>

        {}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.55, delay: 0.6 }}
          className="flex items-center justify-center gap-3"
        >
          <a
            href="https://github.com/ruthwikkakumani"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl border border-border hover:border-primary/55 hover:bg-primary/8 text-muted-foreground hover:text-primary transition-all duration-200"
            title="Ruthwik Kakumani GitHub Profile"
            aria-label="Ruthwik Kakumani GitHub Profile"
          >
            <span className="sr-only">Ruthwik Kakumani GitHub</span>
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/ruthwikkakumani/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl border border-border hover:border-primary/55 hover:bg-primary/8 text-muted-foreground hover:text-primary transition-all duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://leetcode.com/u/RuthwikKakumani/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl border border-border hover:border-orange-500/55 hover:bg-orange-500/8 text-muted-foreground hover:text-orange-500 transition-all duration-200"
            title="Ruthwik Kakumani LeetCode Profile"
            aria-label="Ruthwik Kakumani LeetCode Profile"
          >
            <span className="sr-only">Ruthwik Kakumani LeetCode</span>
            <Code2 className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-muted-foreground/60"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase">
          scroll
        </span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </motion.div>
    </section>
  );
}
