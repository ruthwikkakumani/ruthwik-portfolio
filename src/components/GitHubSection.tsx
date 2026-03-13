import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Cpu, ExternalLink, Github, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

const stats = [
  {
    icon: Github,
    title: "Active on GitHub",
    value: "github.com/ruthwikkakumani",
    description:
      "Consistent commits, open source contributions, and personal projects hosted on GitHub.",
  },
  {
    icon: Code2,
    title: "DSA Focus",
    value: "LeetCode",
    description:
      "Regularly solving algorithmic problems — arrays, trees, graphs, DP, and sliding window.",
  },
  {
    icon: Cpu,
    title: "Backend Engineering",
    value: "Node.js & Express",
    description:
      "Building RESTful APIs, handling middleware, and working with database integrations.",
  },
  {
    icon: TrendingUp,
    title: "Problem Solver",
    value: "Competitive Mindset",
    description:
      "Strong algorithmic thinking honed through consistent practice and deep CS fundamentals.",
  },
];

export default function GitHubSection() {
  return (
    <section id="github" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="section-label font-mono text-sm text-primary">
            {"// 05. coding"}
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mt-3 leading-tight">
            GitHub &amp; Coding
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl text-sm">
            Consistent practice, open contributions, and a commitment to
            improving daily.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 rounded-xl border border-border bg-card p-1 overflow-hidden glow-border"
        >
          <img
            src="https://github-readme-stats.vercel.app/api?username=ruthwikkakumani&show_icons=true&theme=transparent&title_color=00d4ff&icon_color=00d4ff&text_color=94a3b8&bg_color=00000000&hide_border=true"
            alt="GitHub stats for ruthwikkakumani"
            className="w-full rounded-lg"
            loading="lazy"
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map((stat) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <Card className="bg-card border-border h-full hover:border-primary/40 transition-all duration-300 group">
                <CardContent className="p-5 flex flex-col gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 w-fit group-hover:bg-primary/15 transition-colors">
                    <stat.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-sm text-foreground">
                      {stat.title}
                    </p>
                    <p className="font-mono text-xs text-primary mt-0.5">
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
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4 justify-center"
        >
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono gap-2 shadow-[0_0_24px_oklch(0.78_0.16_200_/_0.3)]"
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
            className="border-border hover:border-primary/50 font-mono gap-2"
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
    </section>
  );
}
