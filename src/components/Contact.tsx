import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Get In <span className="bg-gradient-accent bg-clip-text text-transparent">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Let's collaborate on your next project or discuss opportunities
        </p>
        
        <Card className="p-8 bg-secondary border-border shadow-card">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
              
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:ajaysubramani.career@gmail.com" className="hover:text-primary transition-smooth">
                    ajaysubramani.career@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a href="tel:+918220569669" className="hover:text-primary transition-smooth">
                    +91 8220569669
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p>Medavakkam, Chennai, Tamil Nadu</p>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-sm text-muted-foreground mb-3">Connect with me</p>
                <div className="flex gap-3">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-smooth"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-smooth"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-semibold mb-4">Ready to work together?</h3>
              <p className="text-muted-foreground mb-6">
                I'm currently available for freelance work, internships, and full-time opportunities. 
                Let's discuss how we can collaborate on your next project.
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 shadow-glow w-full"
                onClick={() => window.location.href = 'mailto:ajaysubramani.career@gmail.com'}
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
