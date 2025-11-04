import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4">
          <span className="text-foreground">Get In Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-10 sm:mb-12 text-base sm:text-lg leading-relaxed px-2">
          Let's collaborate on your next project or discuss opportunities
        </p>
        
        <Card className="p-5 sm:p-8 bg-secondary border-border shadow-card">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Contact Info Section */}
            <div className="space-y-5 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                Contact Information
              </h3>
              
              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a 
                    href="mailto:ajaysubramani.career@gmail.com" 
                    className="hover:text-primary transition-smooth break-all"
                  >
                    ajaysubramani.career@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a 
                    href="tel:+918220569669" 
                    className="hover:text-primary transition-smooth break-all"
                  >
                    +91 8220569669
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p>Medavakkam, Chennai, Tamil Nadu</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-3 sm:pt-4">
                <p className="text-sm text-muted-foreground mb-2 sm:mb-3">
                  Connect with me
                </p>
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

            {/* Message Section */}
            <div className="flex flex-col justify-center mt-6 md:mt-0">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                Ready to work together?
              </h3>
              <p className="text-muted-foreground mb-5 sm:mb-6 text-sm sm:text-base leading-relaxed">
                I'm currently available for freelance work, internships, and full-time opportunities. 
                Let's discuss how we can collaborate on your next project.
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 shadow-glow w-full text-sm sm:text-base"
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
