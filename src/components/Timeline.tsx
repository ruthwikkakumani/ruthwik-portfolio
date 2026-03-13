import { BookOpen, Code2, Globe, Rocket, Server } from "lucide-react";
import { motion } from "motion/react";

const events = [
  {
    year: "2022",
    icon: Code2,
    title: "The Foundation",
    description:
      "Started B.Tech Computer Science. Dived deep into C and C++ — learning memory management, pointers, data structures, and algorithmic thinking from first principles.",
    status: "done",
  },
  {
    year: "2023",
    icon: Globe,
    title: "Entering Web Development",
    description:
      "Discovered the web ecosystem. Built first React projects, learned HTML/CSS/JavaScript, and fell in love with creating interactive UIs. Started contributing to GitHub.",
    status: "done",
  },
  {
    year: "2024",
    icon: Server,
    title: "Backend Engineering",
    description:
      "Went deeper into backend with Node.js and Express.js. Built REST APIs with MongoDB, learned SQL, explored authentication patterns with JWT, and began using Docker.",
    status: "done",
  },
  {
    year: "2025",
    icon: BookOpen,
    title: "Systems Thinking",
    description:
      "Currently studying system design, OS internals, and distributed systems. Bridging the gap between application-level code and the systems that power them at scale.",
    status: "current",
  },
  {
    year: "Future",
    icon: Rocket,
    title: "Top-Tier SWE Role",
    description:
      "Targeting software engineering internships and full-time roles at top product companies. Continuing to sharpen problem-solving, DSA mastery, and system design skills.",
    status: "future",
  },
];

export default function Timeline() {
  return (
    <section id="journey" className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="section-label font-mono text-sm text-primary">
            {"// 04. journey"}
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mt-3 leading-tight">
            Learning Journey
          </h2>
          <p className="text-muted-foreground mt-3 text-sm">
            The milestones that shaped who I am as a developer.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px timeline-line hidden sm:block" />
          <div className="space-y-10">
            {events.map((event) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex gap-6"
              >
                <div className="relative flex-shrink-0">
                  <div
                    className={`w-12 h-12 rounded-xl border flex items-center justify-center z-10 relative ${
                      event.status === "current"
                        ? "bg-primary/20 border-primary text-primary shadow-[0_0_20px_oklch(0.78_0.16_200_/_0.3)]"
                        : event.status === "future"
                          ? "bg-muted/30 border-border text-muted-foreground"
                          : "bg-card border-border text-primary"
                    }`}
                  >
                    <event.icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="flex-1 pb-2">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className={`font-mono text-sm font-bold ${
                        event.status === "current"
                          ? "text-primary"
                          : "text-muted-foreground"
                      }`}
                    >
                      {event.year}
                    </span>
                    {event.status === "current" && (
                      <span className="px-2 py-0.5 rounded-full bg-primary/10 border border-primary/30 font-mono text-xs text-primary">
                        current
                      </span>
                    )}
                    {event.status === "future" && (
                      <span className="px-2 py-0.5 rounded-full bg-muted border border-border font-mono text-xs text-muted-foreground">
                        goal
                      </span>
                    )}
                  </div>
                  <h3
                    className={`font-display font-semibold text-lg mb-1.5 leading-tight ${
                      event.status === "future"
                        ? "text-muted-foreground"
                        : "text-foreground"
                    }`}
                  >
                    {event.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
