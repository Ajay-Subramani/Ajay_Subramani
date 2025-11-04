import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Store, Droplet, MessageCircle, TrendingUp } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Queueless Shopping System",
      description: "A queue-less shopping mobile application enabling users to scan QR/Barcode tags to add or remove clothing items from a digital cart and complete payments instantly.",
      technologies: ["MERN Stack", "React Native", "TypeScript", "JavaScript"],
      highlights: [
        "Integrated RFID stickers verification to automatically deactivate purchased items",
        "Implemented GPS-based store selection to connect with nearby partnered stores",
        "Built product management system for store admins"
      ],
      status: "Ongoing",
      icon: ShoppingCart
    },
    {
      title: "E-Commerce Website",
      description: "A comprehensive e-commerce platform with product catalogs, filtering, cart functionality, and order processing.",
      technologies: ["React.js", "Spring Boot", "REST APIs"],
      highlights: [
        "Developed product catalog with advanced filtering capabilities",
        "Implemented cart functionality and order processing system",
        "Planning Spring Security authentication for enhanced security"
      ],
      status: "Ongoing",
      icon: Store
    },
    {
      title: "Blood Bank Management System",
      description: "Blood donor and stock management platform handling 1000+ records with improved response time.",
      technologies: ["Flask", "MySQL", "Bootstrap"],
      highlights: [
        "Applied SQL triggers to ensure data consistency across multiple modules",
        "Designed responsive UI using Bootstrap",
        "Optimized database queries for better performance"
      ],
      status: "Completed",
      icon: Droplet
    },
    {
      title: "Real-Time Chat Application",
      description: "Engineered real-time chat application supporting multiple concurrent users with JWT authentication.",
      technologies: ["React.js", "Node.js", "Express.js", "WebSocket", "MongoDB"],
      highlights: [
        "Implemented real-time messaging using WebSocket",
        "Built JWT authentication for secure user sessions",
        "Used MongoDB Atlas for scalable data storage"
      ],
      status: "Completed",
      icon: MessageCircle
    },
    {
      title: "Crime Rate Analyzer Tool",
      description: "Analyzed 50,000+ crime records to identify trends and forecast rates, reducing analysis time by 50%.",
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Streamlit"],
      highlights: [
        "Created interactive Streamlit dashboard with 5+ data visualizations",
        "Implemented data analysis algorithms for trend identification",
        "Built forecasting models for crime rate prediction"
      ],
      status: "Completed",
      icon: TrendingUp
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920')] bg-cover bg-center opacity-5"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-foreground">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Building scalable applications that solve real-world problems
        </p>
        
        <div className="space-y-8 max-w-5xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const isHovered = hoveredProject === index;
            
            return (
              <Card
                key={index}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                className={`relative overflow-hidden transition-all duration-500 cursor-pointer ${
                  isHovered 
                    ? 'bg-secondary border-primary shadow-glow' 
                    : 'bg-secondary/50 border-border hover:border-primary/50'
                }`}
              >
                {!isHovered ? (
                  <div className="flex items-center gap-6 p-6">
                    <div className="w-48 h-48 bg-muted/30 rounded-lg flex items-center justify-center flex-shrink-0 border border-border">
                      <Icon className="w-16 h-16 text-primary/50" />
                      <span className="absolute text-xs text-muted-foreground mt-24">Screenshot</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                      <Badge 
                        variant={project.status === "Completed" ? "default" : "secondary"}
                        className={`${project.status === "Completed" ? "bg-primary" : "bg-accent"}`}
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                ) : (
                  <div className="flex gap-6 p-6 animate-fade-in">
                    <div className="w-64 h-64 bg-muted/30 rounded-lg flex items-center justify-center flex-shrink-0 border border-primary/50">
                      <Icon className="w-20 h-20 text-primary/50" />
                      <span className="absolute text-xs text-muted-foreground mt-32">Project Screenshot</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl font-semibold">{project.title}</h3>
                        <Badge 
                          variant={project.status === "Completed" ? "default" : "secondary"}
                          className={project.status === "Completed" ? "bg-primary" : "bg-accent"}
                        >
                          {project.status}
                        </Badge>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      
                      <ul className="space-y-2 mb-4">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-accent mt-1">▹</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <Badge 
                            key={i} 
                            variant="outline"
                            className="border-primary/50 text-primary"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
