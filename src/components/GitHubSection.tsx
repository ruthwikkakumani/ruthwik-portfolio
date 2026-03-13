import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Cpu, ExternalLink, Github, TrendingUp, Trophy } from "lucide-react";
import { motion } from "motion/react";

const stats = [
  {
    icon: Github,
    title: "Engineering Output",
    value: "Production Ready",
    description: "Developing robust, maintainable code with a focus on system reliability.",
  },
  {
    icon: Trophy,
    title: "Global Standing",
    value: "Top Performer",
    description: "Consistently aiming for the top 5% in competitive programming and skill benchmarks.",
  },
  {
    icon: Code2,
    title: "Logic Architect",
    value: "Scalable Thinking",
    description: "Designing efficient algorithms to solve complex real-world bottlenecks.",
  },
  {
    icon: TrendingUp,
    title: "Deep Tech",
    value: "Infinite Growth",
    description: "Mastering the full stack from OS internals to modern web architectures.",
  },
];

export default function GitHubSection() {
  return (
    <section id="github" className="py-32 px-6 relative overflow-hidden bg-background">
      {/* Cinematic Background Accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-20" />
      <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[160px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[160px] pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 text-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 font-mono text-xs text-primary mb-6 shadow-sm">
            {"// 05. system telemetry"}
          </span>
          <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl tracking-tighter leading-none">
            Coding <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary/80 to-blue-400">Metrics</span>
          </h2>
          <p className="text-muted-foreground mt-10 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Real-time synchronization with GitHub and LeetCode. Monitoring consistency, performance, and engineering growth.
          </p>
        </motion.div>

        {/* The "Command Center" Dashboard */}
        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Activity Monitor (GitHub Graph) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 group relative rounded-3xl border border-white/5 bg-card/20 backdrop-blur-2xl p-6 sm:p-10 shadow-2xl overflow-hidden"
          >
            {/* Scanline Effect */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-50 bg-[length:100%_2px,3px_100%]" />
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 shadow-inner">
                  <Github className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-foreground tracking-tight">GitHub Pulse</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Live Link Active</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative overflow-x-auto pb-6 scrollbar-hide">
              <img
                src="https://github-chart.com/c/ruthwikkakumani?bg=00000000&color=00d4ff"
                alt="GitHub contribution chart"
                className="min-w-[850px] h-40 object-contain drop-shadow-[0_0_15px_rgba(0,212,255,0.15)] filter saturate-[1.2]"
                loading="lazy"
              />
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6 mt-6">
               <div className="p-1 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent">
                  <div className="bg-[#050505]/60 backdrop-blur-md rounded-[14px] p-4 flex flex-col items-center justify-center">
                    <img 
                      src="https://streak-stats.demolab.com/?user=ruthwikkakumani&theme=transparent&hide_border=true&stroke=00d4ff&ring=00d4ff&fire=00d4ff&currStreakNum=00d4ff&sideNums=94a3b8&sideLabels=94a3b8&dates=94a3b8" 
                      className="w-full"
                      alt="Streak Stats"
                    />
                  </div>
               </div>
               <div className="p-1 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent">
                  <div className="bg-[#050505]/60 backdrop-blur-md rounded-[14px] p-4">
                    <img 
                      src="https://github-readme-stats.vercel.app/api?username=ruthwikkakumani&show_icons=true&theme=transparent&title_color=00d4ff&icon_color=00d4ff&text_color=94a3b8&bg_color=00000000&hide_border=true&rank_icon=github" 
                      className="w-full"
                      alt="General Stats"
                    />
                  </div>
               </div>
            </div>
          </motion.div>

          {/* LeetCode Side Monitor */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-4 flex flex-col gap-6"
          >
            <div className="group relative h-full rounded-3xl border border-white/5 bg-card/20 backdrop-blur-2xl p-8 shadow-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-500">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20 shadow-inner">
                  <Code2 className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-foreground tracking-tight">LeetCode Logic</h3>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-orange-500/80 font-bold">Algorithms / Data Structures</span>
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-center">
                 <img
                  src="https://leetcard.jacoblin.cool/RuthwikKakumani?theme=dark&font=Inter&ext=streak"
                  alt="LeetCode stats"
                  className="w-full rounded-xl filter drop-shadow-[0_0_20px_rgba(249,115,22,0.1)] transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              
              <div className="mt-10 pt-6 border-t border-white/5">
                <Button
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-mono h-12 rounded-2xl shadow-lg shadow-orange-500/20 gap-2 transition-all transform hover:-translate-y-1"
                  asChild
                >
                  <a href="https://leetcode.com/u/RuthwikKakumani/" target="_blank" rel="noopener noreferrer">
                    Analyze Solutions <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skill Tiles Bottom Overlay */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="bg-white/[0.02] border border-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/[0.04] transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <stat.icon className="w-4 h-4 text-primary" />
                  <h4 className="font-mono text-[11px] uppercase tracking-widest font-bold text-foreground">{stat.title}</h4>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <Button
            size="lg"
            className="group relative bg-primary text-primary-foreground hover:bg-primary/90 font-mono gap-3 px-12 h-16 rounded-2xl shadow-[0_0_40px_rgba(0,212,255,0.2)] overflow-hidden transition-all duration-500 hover:scale-105"
            asChild
          >
            <a href="https://github.com/ruthwikkakumani" target="_blank" rel="noopener noreferrer">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
              <Github className="w-5 h-5 relative z-10" />
              <span className="relative z-10 text-base">Initialize GitHub Direct</span>
              <ExternalLink className="w-4 h-4 relative z-10 opacity-70" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
