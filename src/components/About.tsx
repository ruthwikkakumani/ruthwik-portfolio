import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Code2, GraduationCap, Target } from "lucide-react";
import { motion } from "motion/react";

const goals = [
  { icon: Target, text: "Land SWE role at a top product company" },
  {
    icon: Code2,
    text: "Master scalable system design and backend architecture",
  },
  {
    icon: BookOpen,
    text: "Deepen understanding of OS internals and distributed systems",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="section-label font-mono text-sm text-primary">
            {"// 01. about"}
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mt-3 leading-tight">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square max-w-sm mx-auto rounded-2xl border border-border bg-card glow-border overflow-hidden relative">
              <div
                className="w-full h-full flex items-center justify-center"
                style={{
                  background:
                    "radial-gradient(circle at 40% 40%, oklch(0.2 0.04 200), oklch(0.12 0.015 250))",
                }}
              >
                <span className="font-display font-bold text-8xl text-primary/20 select-none">
                  RK
                </span>
              </div>
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary/50 rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary/50 rounded-br-2xl" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m{" "}
                <span className="text-foreground font-medium">
                  Ruthwik Kakumani
                </span>
                , a Computer Science student in my 6th semester with a deep
                passion for building software that scales. I believe in
                mastering fundamentals before frameworks — strong CS theory is
                what separates good engineers from great ones.
              </p>
              <p>
                My journey started with C and C++, which gave me a solid
                foundation in memory management and algorithms. Since then
                I&apos;ve expanded into full stack development, backend
                engineering, and I&apos;m actively diving into system design and
                OS internals.
              </p>
              <p>
                I love Data Structures &amp; Algorithms — not just for interview
                prep, but because elegant algorithms genuinely fascinate me. I
                write clean, structured code and always ask &quot;why&quot;
                before &quot;how.&quot;
              </p>
            </div>

            <Card className="bg-card border-border glow-border">
              <CardContent className="p-5 flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground">
                    B.Tech Computer Science
                  </p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    6th Semester
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge
                      variant="secondary"
                      className="font-mono text-xs bg-primary/10 text-primary border-primary/20"
                    >
                      CGPA: 7.0
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div>
              <p className="font-mono text-xs text-primary mb-4">
                {"// career goals"}
              </p>
              <ul className="space-y-3">
                {goals.map((goal) => (
                  <motion.li
                    key={goal.text}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <div className="p-1.5 rounded-md bg-primary/10 shrink-0">
                      <goal.icon className="w-3.5 h-3.5 text-primary" />
                    </div>
                    {goal.text}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
