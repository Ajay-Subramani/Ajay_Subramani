import Navigation from "@/components/Navigation";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Hackathons from "@/components/Hackathons";
import OpenSource from "@/components/OpenSource";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Hackathons />
      <OpenSource />
      <Contact />

      <footer className="py-6 text-center text-muted-foreground border-t border-border">
        <p>© 2026 Ajay S. Built with React & Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default Index;