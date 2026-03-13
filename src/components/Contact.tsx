import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle2,
  Github,
  Linkedin,
  Loader2,
  Mail,
  Send,
  XCircle,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

const socials = [
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/ruthwikkakumani",
    href: "https://github.com/ruthwikkakumani",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/ruthwikkakumani",
    href: "https://www.linkedin.com/in/ruthwikkakumani/",
  },
  {
    icon: Mail,
    label: "Email",
    value: "ruthwikkakumani@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=ruthwikkakumani@gmail.com&su=Hello Ruthwik",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("loading");
    try {
      const response = await fetch("https://formsubmit.co/ajax/ruthwikkakumani@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `New Portfolio Inquiry from ${form.name}`,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        toast.success("Message sent successfully!");
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      setStatus("error");
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="section-label font-mono text-sm text-primary">
            {"// 06. contact"}
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mt-3 leading-tight">
            Get In Touch
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl text-sm">
            Open to internship opportunities, collaborations, or just a chat
            about software engineering.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-display font-semibold text-xl mb-2">
                Let&apos;s Connect
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Whether you have an exciting opportunity, want to collaborate on
                a project, or just want to discuss backend architecture and DSA
                — I&apos;m always up for a conversation.
              </p>
            </div>
            <div className="space-y-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 group"
                >
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <social.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {social.label}
                    </p>
                    <p className="font-mono text-xs text-muted-foreground">
                      {social.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="bg-card border-border glow-border">
              <CardContent className="p-6">
                {status === "success" ? (
                  <div
                    data-ocid="contact.success_state"
                    className="flex flex-col items-center justify-center gap-4 py-12 text-center"
                  >
                    <CheckCircle2 className="w-12 h-12 text-primary" />
                    <h3 className="font-display font-semibold text-xl">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Thanks for reaching out. I&apos;ll get back to you as soon
                      as possible.
                    </p>
                    <Button
                      variant="outline"
                      className="font-mono mt-2 border-border hover:border-primary/50"
                      onClick={() => setStatus("idle")}
                    >
                      Send Another
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <Label
                        htmlFor="contact-name"
                        className="font-mono text-xs text-muted-foreground"
                      >
                        Name
                      </Label>
                      <Input
                        id="contact-name"
                        data-ocid="contact.name.input"
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, name: e.target.value }))
                        }
                        className="bg-background border-border focus:border-primary font-mono text-sm"
                        required
                        autoComplete="name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="contact-email"
                        className="font-mono text-xs text-muted-foreground"
                      >
                        Email
                      </Label>
                      <Input
                        id="contact-email"
                        data-ocid="contact.email.input"
                        type="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, email: e.target.value }))
                        }
                        className="bg-background border-border focus:border-primary font-mono text-sm"
                        required
                        autoComplete="email"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="contact-message"
                        className="font-mono text-xs text-muted-foreground"
                      >
                        Message
                      </Label>
                      <Textarea
                        id="contact-message"
                        data-ocid="contact.message.textarea"
                        placeholder="Tell me about your opportunity, project, or question..."
                        value={form.message}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, message: e.target.value }))
                        }
                        className="bg-background border-border focus:border-primary font-mono text-sm min-h-32 resize-none"
                        required
                      />
                    </div>
                    {status === "error" && (
                      <div
                        data-ocid="contact.error_state"
                        className="flex items-center gap-2 text-sm text-destructive"
                      >
                        <XCircle className="w-4 h-4" />
                        Failed to send. Please try again.
                      </div>
                    )}
                    <Button
                      data-ocid="contact.submit_button"
                      type="submit"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-mono gap-2 shadow-[0_0_20px_oklch(0.78_0.16_200_/_0.25)]"
                      disabled={status === "loading"}
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
