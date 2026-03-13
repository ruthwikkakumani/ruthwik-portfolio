import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GitHubSection from "./components/GitHubSection";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Timeline />
          <GitHubSection />
          <Contact />
          <Resume />
        </main>
        <Footer />
        <Toaster position="bottom-right" />
      </div>
    </QueryClientProvider>
  );
}
