import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Store, Droplet, MessageCircle, TrendingUp, Banknote, Github } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
  {
    title: "Enterprise E-Commerce Platform",
    description:
      "Full-stack e-commerce platform built with Java and Spring Boot for product, order, user, and payment workflows, with a React frontend and MySQL database.",
    technologies: [
      "Java",
      "Spring Boot",
      "React.js",
      "MySQL",
      "Docker",
      "AWS",
      "CI/CD",
    ],
    highlights: [
      "Developed REST APIs for product, order, user, and payment workflows using Spring Boot.",
      "Implemented JWT authentication, role-based access control, input validation, and layered backend architecture.",
      "Integrated MySQL database operations with backend services and configured Docker and GitHub-based CI/CD workflows.",
    ],
    status: "Ongoing",
    icon: Store,
    githubUrl:
      "https://github.com/Ajay-Subramani",
  },

  {
    title: "Real-Time Distributed Chat Application",
    description:
      "Real-time messaging application supporting concurrent users, bidirectional communication, authentication, and persistent message storage.",
    technologies: [
      "React Native",
      "Node.js",
      "Express.js",
      "Socket.IO",
      "MongoDB",
      "JWT",
    ],
    highlights: [
      "Implemented real-time bidirectional messaging and room-based communication using Socket.IO.",
      "Built JWT-secured REST APIs for authentication and message management.",
      "Integrated MongoDB persistence for users and messages with connection and event management.",
    ],
    status: "Completed",
    icon: MessageCircle,
    githubUrl:
      "https://github.com/Ajay-Subramani/Real-Time-Chat-Application",
  },

  {
    title: "UPI Payment Exception Investigator",
    description:
      "AI-assisted investigation system for analyzing UPI payment exceptions across transaction, settlement, reversal, and PSP records.",
    technologies: [
      "Python",
      "FastAPI",
      "LangChain",
      "RAG",
      "FAISS",
      "LLM",
      "SQLite",
    ],
    highlights: [
      "Developed FastAPI services for processing and investigating payment exception workflows.",
      "Built a LangChain-based RAG pipeline with FAISS vector search to retrieve relevant transaction evidence and payment rules.",
      "Implemented deterministic Python workflows for automated investigation, validation, and financial exposure analysis.",
    ],
    status: "Ongoing",
    icon: Banknote,
  },

  {
    title: "SemantiCache: Semantic Cache Optimization",
    description:
      "Research-oriented semantic caching system for reducing redundant LLM inference using vector similarity and Pareto-based optimization.",
    technologies: [
      "Python",
      "FAISS",
      "Sentence Transformers",
      "DBSCAN",
      "Pareto Optimization",
      "LLMs",
    ],
    highlights: [
      "Developed semantic caching using sentence-transformer embeddings and FAISS similarity search.",
      "Applied Pareto-based optimization to jointly consider token-saving potential and query volatility.",
      "Evaluated the approach using the MOSS conversational dataset against existing semantic caching strategies.",
    ],
    status: "Completed",
    icon: TrendingUp,
    githubUrl:
      "https://github.com/Ajay-Subramani/SementiCache-Pareto-Optimization",
  },

  {
    title: "Blood Bank Management System",
    description:
      "Web-based blood donor and inventory management system for handling donor records, blood stock, requests, and administrative workflows.",
    technologies: [
      "Flask",
      "MySQL",
      "Bootstrap",
    ],
    highlights: [
      "Implemented donor registration, inventory management, blood requests, and administrative workflows.",
      "Integrated MySQL database operations with Flask backend services.",
      "Designed responsive interfaces using Bootstrap for administrative and staff workflows.",
    ],
    status: "Completed",
    icon: Droplet,
    githubUrl:
      "https://github.com/Ajay-Subramani/Blood-Bank-Managment-System",
  },

  {
    title: "Crime Rate Analyzer Tool",
    description:
      "Data analysis and visualization system for identifying crime trends, patterns, and hotspots using historical crime data.",
    technologies: [
      "Python",
      "Pandas",
      "Matplotlib",
      "Scikit-learn",
      "Streamlit",
    ],
    highlights: [
      "Built interactive visualizations for analyzing crime trends and category-wise patterns.",
      "Implemented data processing and analytical workflows using Pandas and Python.",
      "Explored machine learning techniques for crime-rate prediction and pattern analysis.",
    ],
    status: "Completed",
    icon: TrendingUp,
    githubUrl:
      "https://github.com/Ajay-Subramani/Crime-Rate-Predictor",
  },
];
  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920')] bg-cover bg-center opacity-5"></div>
      <div className="container mx-auto max-w-8xl relative z-10">
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
                      
                      <div className="flex flex-wrap gap-2 mb-4">
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
                      
                        {project.githubUrl && (
                        <Button
                          asChild
                          size="sm"
                          className="bg-primary hover:bg-primary/90"
                        >
                          <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                          >
                          <Github className="h-4 w-4" />
                          View on GitHub
                          </a>
                        </Button>
                        )}
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
