import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Code2, ExternalLink, Github, TrendingUp, Trophy } from "lucide-react";

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
      {/* Background Accents to match screenshot's clean look */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-10" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-black/10 bg-black/[0.03] font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-8">
            {"// 05. system telemetry"}
          </span>
          <h2 className="font-display font-black text-6xl sm:text-7xl md:text-8xl tracking-tighter leading-none text-foreground">
            Coding <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary/80 to-blue-400">Metrics</span>
          </h2>
          <p className="text-muted-foreground mt-8 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Real-time synchronization with GitHub and LeetCode. Monitoring consistency, performance, and engineering growth.
          </p>
        </motion.div>

        {/* The "Command Center" Dashboard */}
        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Activity Monitor (GitHub Graph) */}
          <div className="lg:col-span-8 group relative rounded-3xl border border-black/[0.08] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 sm:p-10 overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center border border-black/5">
                  <Github className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-foreground tracking-tight">GitHub Pulse</h3>
                  <div className="flex items-center gap-2 mt-1">
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
                      <span className="relative w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Live Connectivity</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contribution Graph - Heatmap stays green as requested */}
            <div className="relative overflow-x-auto pb-6 scrollbar-hide mb-8">
              <img
                src="https://ghchart.rshah.org/2ea44f/ruthwikkakumani"
                alt="GitHub contribution chart"
                className="w-full h-auto min-h-[160px] object-contain drop-shadow-[0_0_20px_rgba(46,164,79,0.1)] saturate-[1.2]"
                loading="lazy"
              />
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
                <div className="rounded-2xl p-4 transition-all hover:bg-primary/[0.04] group/streak">
                   <img 
                     src="https://streak-stats.demolab.com/?user=ruthwikkakumani&theme=tokyonight-duo&hide_border=true&stroke=00d4ff&ring=00d4ff&fire=ff8c00&currStreakNum=00d4ff&sideNums=1f2937&sideLabels=4b5563&dates=4b5563&background=00000000" 
                     className="w-full scale-105 group-hover/streak:scale-110 transition-transform duration-500"
                     alt="GitHub Streak Statistics"
                   />
                </div>
                <div className="rounded-2xl p-4 transition-all hover:bg-primary/[0.04] group/stats">
                   <img 
                     src="https://github-readme-stats.vercel.app/api?username=ruthwikkakumani&show_icons=true&theme=default&title_color=00d4ff&icon_color=00d4ff&text_color=1f2937&bg_color=00000000&hide_border=true&rank_icon=github" 
                     className="w-full scale-105 group-hover/stats:scale-110 transition-transform duration-500"
                     alt="General GitHub Statistics"
                   />
                </div>
            </div>
          </div>

          {/* LeetCode Side Monitor */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="relative h-full rounded-3xl p-8 flex flex-col transition-all group">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20 shadow-inner group-hover:scale-110 transition-transform duration-300">
                  <Code2 className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-foreground tracking-tight">LeetCode Logic</h3>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-orange-500 font-bold">Algorithms / Data Structures</span>
                </div>
              </div>
 
              <div className="flex-1 flex flex-col justify-center">
                 <div className="flex items-center justify-center transition-all hover:scale-[1.05] duration-500">
                   <img
                    src="https://leetcard.jacoblin.cool/RuthwikKakumani?theme=light&font=Inter"
                    alt="LeetCode Performance Stats"
                    className="w-full drop-shadow-[0_8px_24px_rgba(0,0,0,0.04)]"
                    loading="lazy"
                  />
                 </div>
              </div>
              
              <div className="mt-8 pt-6">
                <Button
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-mono h-12 rounded-2xl shadow-lg shadow-orange-500/20 gap-2 border-none transition-all hover:-translate-y-1 hover:shadow-orange-500/40"
                  asChild
                >
                  <a href="https://leetcode.com/u/RuthwikKakumani/" target="_blank" rel="noopener noreferrer">
                    Analyze Solutions <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Skill Tiles Bottom Overlay */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="bg-white border border-black/[0.05] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <stat.icon className="w-4 h-4 text-primary" />
                  <h4 className="font-mono text-[11px] uppercase tracking-widest font-bold text-foreground">{stat.title}</h4>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <Button
            size="lg"
            className="bg-black text-white hover:bg-black/90 font-mono gap-3 px-12 h-16 rounded-2xl shadow-xl transition-transform duration-300 hover:scale-[1.02]"
            asChild
          >
            <a href="https://github.com/ruthwikkakumani" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
              <span className="text-base font-bold">Initialize GitHub Direct</span>
              <ExternalLink className="w-4 h-4 opacity-50" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
