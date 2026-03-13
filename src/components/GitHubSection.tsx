import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Cpu, ExternalLink, Github, TrendingUp, Trophy } from "lucide-react";
import { motion } from "motion/react";

const stats = [
  {
    icon: Github,
    title: "Active on GitHub",
    value: "Consistent Commits",
    description: "Regular open source contributions and personal projects.",
  },
  {
    icon: Trophy,
    title: "Achievement Hunter",
    value: "Competitive Mindset",
    description: "Always pushing for high-quality, bug-free implementations.",
  },
  {
    icon: Code2,
    title: "DSA Performance",
    value: "Algorithm Mastery",
    description: "Daily problem solving across complex data structures.",
  },
  {
    icon: TrendingUp,
    title: "Growth Driven",
    value: "Daily Progress",
    description: "Committed to leveling up backend and architecture skills every day.",
  },
];

export default function GitHubSection() {
  return (
    <section id="github" className="py-24 px-6 relative overflow-hidden">
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="section-label font-mono text-sm text-primary">
            {"// 05. coding history"}
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-6xl mt-4 leading-tight">
            GitHub & <span className="text-primary">Performance</span>
          </h2>
          <div className="w-20 h-1 bg-primary/30 mx-auto mt-4 rounded-full" />
          <p className="text-muted-foreground mt-6 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Real-time coding activity and contribution statistics. Consistency is the key to engineering excellence.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* GitHub Streak Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/5 bg-card/40 backdrop-blur-xl p-4 sm:p-6 shadow-2xl hover:border-primary/30 transition-all duration-500 group"
          >
            <div className="flex items-center gap-2 mb-6 text-primary">
              <Trophy className="w-4 h-4" />
              <span className="font-mono text-xs uppercase tracking-widest font-bold">Contribution Streak</span>
            </div>
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=ruthwikkakumani&theme=transparent&hide_border=true&stroke=00d4ff&ring=00d4ff&fire=00d4ff&currStreakNum=00d4ff&sideNums=94a3b8&sideLabels=94a3b8&dates=94a3b8"
              alt="GitHub streak for ruthwikkakumani"
              className="w-full rounded-lg filter drop-shadow-[0_0_10px_rgba(0,212,255,0.1)]"
              loading="lazy"
            />
          </motion.div>

          {/* GitHub Overall Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/5 bg-card/40 backdrop-blur-xl p-4 sm:p-6 shadow-2xl hover:border-primary/30 transition-all duration-500 group"
          >
             <div className="flex items-center gap-2 mb-6 text-primary">
              <TrendingUp className="w-4 h-4" />
              <span className="font-mono text-xs uppercase tracking-widest font-bold">Overall Statistics</span>
            </div>
            <img
              src="https://github-readme-stats.vercel.app/api?username=ruthwikkakumani&show_icons=true&theme=transparent&title_color=00d4ff&icon_color=00d4ff&text_color=94a3b8&bg_color=00000000&hide_border=true&rank_icon=github"
              alt="GitHub stats for ruthwikkakumani"
              className="w-full rounded-lg filter drop-shadow-[0_0_10px_rgba(0,212,255,0.1)]"
              loading="lazy"
            />
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card className="bg-card/30 backdrop-blur-sm border-white/5 h-full hover:border-primary/40 hover:bg-card/50 transition-all duration-300 group">
                <CardContent className="p-6 flex flex-col gap-4 text-center items-center">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 w-fit group-hover:bg-primary/20 transition-all duration-300">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-foreground">
                      {stat.title}
                    </h3>
                    <p className="font-mono text-[10px] text-primary mt-1 uppercase tracking-wider font-bold">
                      {stat.value}
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-6 justify-center"
        >
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono gap-2 px-8 min-w-[200px] shadow-[0_0_24px_oklch(0.78_0.16_200_/_0.3)] hover:shadow-[0_0_32px_oklch(0.78_0.16_200_/_0.5)] transition-all"
            asChild
          >
            <a
              href="https://github.com/ruthwikkakumani"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4" />
              View GitHub Profile
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/10 hover:border-primary/50 bg-white/5 backdrop-blur-sm font-mono gap-2 px-8 min-w-[200px] transition-all"
            asChild
          >
            <a
              href="https://leetcode.com/u/RuthwikKakumani/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Code2 className="w-4 h-4" />
              LeetCode Profile
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </Button>
        </motion.div>
      </div>
      
      {/* Visual Accent */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
