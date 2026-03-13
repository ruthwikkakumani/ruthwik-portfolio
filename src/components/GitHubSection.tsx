import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Code2, ExternalLink, Github, TrendingUp, Trophy, AlertCircle, RefreshCw } from "lucide-react";

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

interface Submission {
  id: string;
  title: string;
  statusDisplay: string;
  lang: string;
  timestamp: string;
}

function LeetCodeSubmissions() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchSubmissions = async () => {
    setLoading(true);
    setError(false);
    try {
      const targetUrl = 'https://leetcode-api-pied.vercel.app/user/ruthwikkakumani/submissions';
      
      // Attempt 1: AllOrigins (Commonly used, somewhat throttled)
      try {
        const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(targetUrl)}&timestamp=${Date.now()}`);
        if (response.ok) {
          const data = await response.json();
          if (data.contents) {
            const parsedData = JSON.parse(data.contents);
            if (Array.isArray(parsedData)) {
              setSubmissions(parsedData.slice(0, 10));
              setLoading(false);
              return;
            }
          }
        }
      } catch (e) { console.warn("AllOrigins fallback triggered"); }

      // Attempt 2: CodeTabs (Fast, simple proxy)
      try {
        const response = await fetch(`https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(targetUrl)}`);
        if (response.ok) {
          const parsedData = await response.json();
          if (Array.isArray(parsedData)) {
            setSubmissions(parsedData.slice(0, 10));
            setLoading(false);
            return;
          }
        }
      } catch (e) { console.warn("CodeTabs fallback failed"); }

      throw new Error("All proxies failed");
    } catch (error) {
      console.error("Failed to fetch LeetCode submissions:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col gap-3">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-11 w-full bg-orange-500/[0.03] animate-pulse rounded-xl border border-orange-500/5" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-6 gap-4 text-center">
        <div className="w-12 h-12 rounded-full bg-orange-500/5 flex items-center justify-center border border-orange-500/10">
          <AlertCircle className="w-6 h-6 text-orange-500/50" />
        </div>
        <div>
          <p className="text-xs font-mono font-bold text-muted-foreground uppercase tracking-wider">Feed Sync Interrupted</p>
          <p className="text-[10px] text-muted-foreground/60 mt-1">Network traffic or proxy timeout.</p>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={fetchSubmissions}
          className="h-9 px-4 rounded-xl font-mono text-[10px] uppercase tracking-widest border-orange-500/10 hover:bg-orange-500/5 hover:text-orange-600 transition-all gap-2"
        >
          <RefreshCw className="w-3 h-3" /> Re-sync Monitor
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 max-h-[300px] overflow-y-auto pr-2 scrollbar-hide hover:scrollbar-default transition-all">
      <AnimatePresence>
        {submissions.map((sub, i) => (
          <motion.div
            key={sub.id}
            initial={{ opacity: 0, x: -10, filter: "blur(4px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            className="group/item flex items-center justify-between p-3.5 rounded-xl border border-black/[0.03] bg-white hover:bg-orange-500/[0.02] transition-all hover:border-orange-500/10 hover:shadow-sm mb-1 last:mb-0"
          >
            <div className="flex items-center gap-3 overflow-hidden">
              <div className={`w-2 h-2 rounded-full flex-shrink-0 animate-pulse ${sub.statusDisplay === 'Accepted' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]' : 'bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.4)]'}`} />
              <span className="font-display font-bold text-sm text-foreground truncate">{sub.title}</span>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground bg-gray-50/50 px-2 py-0.5 rounded border border-black/[0.02]">{sub.lang}</span>
              <span className={`font-mono text-[10px] font-black uppercase tracking-tighter ${sub.statusDisplay === 'Accepted' ? 'text-emerald-500' : 'text-orange-500'}`}>
                {sub.statusDisplay === 'Accepted' ? 'PASS' : 'FAIL'}
              </span>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

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
          <div className="lg:col-span-8 group relative rounded-[32px] border border-emerald-500/10 bg-white shadow-[0_8px_40px_rgba(0,0,0,0.02)] p-6 sm:p-10 overflow-hidden transition-all duration-700 hover:shadow-[0_20px_60px_rgba(16,185,129,0.05)] hover:border-emerald-500/20">
            {/* Subtle Emerald Glow Accent */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-emerald-500/10 transition-colors duration-700" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12 relative z-10">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center border border-black/5 shadow-sm group-hover:scale-110 transition-transform duration-500">
                  <Github className="w-7 h-7 text-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-black text-2xl text-foreground tracking-tight mb-1">GitHub Pulse</h3>
                  <div className="flex items-center gap-3">
                    <div className="relative flex items-center justify-center w-4 h-4">
                      {[0, 1, 2].map((i) => (
                        <motion.span
                          key={i}
                          initial={{ scale: 0.8, opacity: 0.6 }}
                          animate={{ scale: 3.5, opacity: 0 }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeOut",
                            delay: i * 0.8
                          }}
                          className="absolute w-full h-full rounded-full bg-emerald-400/30"
                        />
                      ))}
                      <span className="relative w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.6)] animate-pulse" />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-black">Live Connectivity</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contribution Graph - Heatmap stays green as requested */}
            <div className="relative overflow-x-auto pb-8 scrollbar-hide mb-10 group/graph">
              <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover/graph:opacity-100 blur-2xl transition-opacity duration-700 rounded-full" />
              <img
                src="https://ghchart.rshah.org/2ea44f/ruthwikkakumani"
                alt="GitHub contribution chart"
                className="w-full h-auto min-h-[160px] object-contain drop-shadow-[0_0_25px_rgba(46,164,79,0.15)] saturate-[1.3] relative z-10 transition-transform duration-700 group-hover/graph:scale-[1.01]"
                loading="lazy"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="rounded-[24px] p-5 transition-all hover:bg-emerald-50/40 group/streak border border-transparent hover:border-emerald-100/50">
                <img
                  src="https://streak-stats.demolab.com/?user=ruthwikkakumani&theme=tokyonight-duo&hide_border=true&stroke=00d4ff&ring=00d4ff&fire=ff8c00&currStreakNum=00d4ff&sideNums=1f2937&sideLabels=4b5563&dates=4b5563&background=00000000"
                  className="w-full scale-105 group-hover/streak:scale-110 transition-transform duration-700 ease-out"
                  alt="GitHub Streak Statistics"
                />
              </div>
              <div className="rounded-[24px] p-5 transition-all hover:bg-blue-50/40 group/stats border border-transparent hover:border-blue-100/50">
                <img
                  src="https://github-readme-stats.vercel.app/api?username=ruthwikkakumani&show_icons=true&theme=default&title_color=00d4ff&icon_color=00d4ff&text_color=1f2937&bg_color=00000000&hide_border=true&rank_icon=github"
                  className="w-full scale-105 group-hover/stats:scale-110 transition-transform duration-700 ease-out"
                  alt="General GitHub Statistics"
                />
              </div>
            </div>
          </div>

          {/* LeetCode Side Monitor */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="relative rounded-[32px] border border-orange-500/10 bg-white shadow-[0_8px_40px_rgba(0,0,0,0.02)] p-8 flex flex-col transition-all duration-700 hover:shadow-[0_20px_60px_rgba(249,115,22,0.05)] hover:border-orange-500/20 group">
              {/* Subtle Orange Glow Accent */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-500/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-orange-500/10 transition-colors duration-700" />
              
              <div className="flex items-center gap-5 mb-10 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-orange-500/5 flex items-center justify-center border border-orange-500/10 shadow-sm group-hover:rotate-12 transition-transform duration-500">
                  <Code2 className="w-7 h-7 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-display font-black text-2xl text-foreground tracking-tight mb-1">Logic Monitor</h3>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-orange-500 font-black">Data Structures / Alg</span>
                </div>
              </div>
 
              <div className="flex flex-col justify-center relative z-10">
                 <div className="flex items-center justify-center transition-all hover:scale-[1.05] duration-700 ease-out">
                   <img
                    src="https://leetcard.jacoblin.cool/RuthwikKakumani?theme=light&font=Inter"
                    alt="LeetCode Performance Stats"
                    className="w-full drop-shadow-[0_12px_30px_rgba(0,0,0,0.05)]"
                    loading="lazy"
                  />
                 </div>
              </div>
              
              <div className="mt-10 relative z-10">
                <Button
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-mono h-14 rounded-2xl shadow-lg shadow-orange-500/20 gap-3 border-none transition-all duration-500 hover:-translate-y-1 hover:shadow-orange-500/40 text-sm font-black tracking-widest uppercase"
                  asChild
                >
                  <a href="https://leetcode.com/u/RuthwikKakumani/" target="_blank" rel="noopener noreferrer">
                    Analyze Engine <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* LeetCode Activity Feed */}
            <div className="relative rounded-[32px] border border-orange-500/5 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.01)] p-8 flex flex-col group/activity transition-all duration-700 hover:border-orange-500/10 hover:shadow-[0_12px_40px_rgba(0,0,0,0.02)]">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                  <h3 className="font-display font-black text-lg text-foreground tracking-tight">Logic Activity</h3>
                </div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground font-bold">Real-time Feed</span>
              </div>
              
              <LeetCodeSubmissions />
            </div>
          </div>
        </div>

        {/* Skill Tiles Bottom Overlay */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 relative z-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div className="group bg-white border border-black/[0.04] rounded-[28px] p-7 shadow-[0_4px_24px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.03)] hover:border-primary/10 transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-center gap-4 mb-5 relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] font-black text-foreground">{stat.title}</h4>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed relative z-10 font-medium">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 flex justify-center relative z-10">
          <Button
            size="lg"
            className="group bg-black text-white hover:bg-black/90 font-mono gap-4 px-16 h-20 rounded-[28px] shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-primary/20"
            asChild
          >
            <a href="https://github.com/ruthwikkakumani" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 group-hover:rotate-12 transition-transform duration-500" />
              <span className="text-lg font-black tracking-tight">Initialize Production Sync</span>
              <ExternalLink className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
