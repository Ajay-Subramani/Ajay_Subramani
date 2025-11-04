import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 gradient-hero">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left space-y-6 animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold">
              Hi, I'm <span className="bg-gradient-accent bg-clip-text text-transparent">Ajay S</span>
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground">
              Full-Stack Developer & ML Enthusiast
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Passionate about building scalable applications and intelligent software solutions. 
              Creating efficient, user-centric systems that bridge technology with real-world impact.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-glow">
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                View Projects
              </Button>
            </div>
            <div className="flex gap-4 justify-center md:justify-start pt-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-smooth"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-smooth"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="mailto:ajaysubramani.career@gmail.com"
                className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-smooth"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="flex-shrink-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-accent rounded-full blur-2xl opacity-30"></div>
              <img 
                src={profilePhoto} 
                alt="Ajay S" 
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary shadow-glow brightness-75"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
