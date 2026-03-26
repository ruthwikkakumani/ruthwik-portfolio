import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";

const projects = [
  {
    id: 1,
    name: "URL Shortener",
    description:
      "A high-performance URL shortening service that converts long links into concise URLs. Features fast redirects via Redis caching, custom aliases, and persistent analytics with PostgreSQL.",
    stack: ["Go", "Redis", "PostgreSQL"],
    github: "https://github.com/ruthwikkakumani/url-shortener",
  },
  {
    id: 2,
    name: "Task Manager API",
    description:
      "Production-grade RESTful API built with Express.js and MongoDB. Features JWT authentication, role-based access control, full CRUD operations, and input validation.",
    stack: ["Node.js", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/ruthwikkakumani",
  },
  {
    id: 3,
    name: "DSA Visualizer",
    description:
      "Interactive tool for visualizing sorting algorithms and graph traversals. Supports bubble sort, merge sort, BFS, DFS with step-by-step animation controls.",
    stack: ["React", "JavaScript", "CSS3"],
    github: "https://github.com/ruthwikkakumani",
  },
  {
    id: 4,
    name: "Chat App",
    description:
      "Real-time messaging application with WebSocket connections, room-based channels, user presence indicators, and message persistence with MongoDB.",
    stack: ["Node.js", "Socket.io", "MongoDB", "React"],
    github: "https://github.com/ruthwikkakumani",
  },
  {
    id: 5,
    name: "Portfolio Website",
    description:
      "This very portfolio — designed and built from scratch with React, Tailwind CSS, and smooth animations. Responsive across all device sizes.",
    stack: ["React", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/ruthwikkakumani",
  },
];

const ocids = [
  "project.item.1",
  "project.item.2",
  "project.item.3",
  "project.item.4",
  "project.item.5",
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="section-label font-mono text-sm text-primary">
            {"// 03. projects"}
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mt-3 leading-tight">
            Projects
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl text-sm">
            A selection of things I&apos;ve built — focused on real-world
            problems and clean engineering.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card
                data-ocid={ocids[i]}
                className="bg-card border-border h-full flex flex-col group hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_30px_oklch(0.78_0.16_200_/_0.08)]"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-4">
                    <CardTitle className="font-display text-xl group-hover:text-primary transition-colors">
                      {project.name}
                    </CardTitle>
                    <span className="font-mono text-xs text-muted-foreground/40 shrink-0 mt-1">
                      0{project.id}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col gap-4 flex-1">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="font-mono text-xs bg-primary/10 text-primary/80 border border-primary/15"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-auto pt-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="font-mono gap-1.5 text-xs border-border hover:border-primary/50 hover:text-primary"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-3.5 h-3.5" />
                        GitHub
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="font-mono gap-1.5 text-xs border-border hover:border-primary/50 hover:text-primary"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
