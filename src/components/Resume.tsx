import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import { motion } from "motion/react";

export default function Resume() {
  return (
    <section id="resume" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 mb-4">
            <FileText className="w-7 h-7 text-primary" />
          </div>
          <div>
            <span className="section-label font-mono text-sm text-primary justify-center">
              {"// 07. resume"}
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl mt-3 leading-tight">
              Download My Resume
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-md mx-auto leading-relaxed">
            Get the full picture — projects, skills, education, and everything
            in between.
          </p>
          <Button
            data-ocid="resume.download.button"
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono gap-2 px-10 shadow-[0_0_24px_oklch(0.78_0.16_200_/_0.3)] hover:shadow-[0_0_32px_oklch(0.78_0.16_200_/_0.45)] transition-shadow"
            asChild
          >
            <a href="/resume.pdf" download>
              <Download className="w-5 h-5" />
              Download Resume (PDF)
            </a>
          </Button>
          <p className="font-mono text-xs text-muted-foreground">
            Last updated: March 2026
          </p>
        </motion.div>
      </div>
    </section>
  );
}
