import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpeg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 gradient-hero relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920')] bg-cover bg-center opacity-5" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* Left Content */}
          <div className="flex-1 text-center md:text-left space-y-6 animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold">
              Hi, I'm <span className="text-foreground">Ajay S</span>
            </h1>

            <p className="text-2xl md:text-3xl text-muted-foreground">
              Full-Stack Engineer & Software Developer
            </p>

            <p className="text-lg text-muted-foreground max-w-2xl">
              Computer Science Engineering student focused on building scalable
              software, backend systems, AI-driven applications, and real-time
              solutions using modern engineering practices.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">

              {/* Get in Touch */}
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 shadow-glow"
                asChild
              >
                <a href="mailto:ajaysubramani.career@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Get in Touch
                </a>
              </Button>

              {/* View Projects */}
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                View Projects
              </Button>

              {/* Resume */}
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
                asChild
              >
                <a
                  href="/Ajay_Subramani_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="mr-2 h-5 w-5" />
                  Resume
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start pt-4">

              {/* GitHub */}
              <a
                href="https://github.com/Ajay-Subramani"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-smooth"
              >
                <Github className="h-6 w-6" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ajay-subramani-2a504827b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-smooth"
              >
                <Linkedin className="h-6 w-6" />
              </a>

              {/* Email */}
              <a
                href="mailto:ajaysubramani.career@gmail.com"
                aria-label="Email"
                className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-smooth"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Right Profile Image */}
          <div
            className="flex-shrink-0 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-accent rounded-full blur-2xl opacity-30" />

              {/* Profile */}
              <img
                src={profilePhoto}
                alt="Ajay S"
                className="relative w-[28rem] h-[28rem] md:w-96 md:h-96 rounded-full object-cover border-4 border-primary shadow-glow brightness-75"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;