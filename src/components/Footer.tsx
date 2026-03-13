import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {}
          <div className="text-center md:text-left">
            <p className="font-display font-bold text-lg">
              <span className="text-primary glow-text">RK</span>
              <span className="ml-2 text-foreground">Ruthwik Kakumani</span>
            </p>
            <p className="font-mono text-xs text-muted-foreground mt-1">
              Full Stack Developer · Backend Engineer · CS Student
            </p>
          </div>

          {}
          <div className="flex items-center gap-3">
            <a
              data-ocid="footer.github.link"
              href="https://github.com/ruthwikkakumani"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 text-muted-foreground hover:text-primary transition-all duration-200"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              data-ocid="footer.linkedin.link"
              href="https://www.linkedin.com/in/ruthwikkakumani/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 text-muted-foreground hover:text-primary transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 text-muted-foreground hover:text-primary transition-all duration-200"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-xs text-muted-foreground text-center w-full">
            © {year} Ruthwik Kakumani. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
