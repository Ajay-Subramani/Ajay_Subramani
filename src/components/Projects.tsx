import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Store, Droplet, MessageCircle, TrendingUp, Github } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Queueless Shopping System",
      description: "A revolutionary queue-less shopping mobile application that transforms the retail experience by enabling users to scan QR/Barcode tags on clothing items to seamlessly add or remove them from a digital cart and complete secure payments instantly within the app, eliminating traditional checkout lines and reducing wait times significantly.",
      technologies: ["MERN Stack", "React Native", "TypeScript", "JavaScript"],
      highlights: [
        "Integrated RFID sticker verification system to automatically deactivate security tags on purchased items, ensuring seamless exit from stores without manual intervention",
        "Implemented GPS-based store selection feature allowing users to automatically connect with nearby partnered retail stores and access their real-time inventory",
        "Built comprehensive product management dashboard for store administrators to manage inventory, track sales analytics, and monitor customer shopping patterns"
      ],
      status: "Ongoing",
      icon: ShoppingCart,
      githubUrl: "https://github.com"
    },
    {
      title: "E-Commerce Website",
      description: "A full-featured e-commerce platform featuring dynamic product catalogs with real-time inventory updates, advanced multi-criteria filtering options, complete shopping cart functionality, and streamlined order processing system built with modern React frontend and robust Spring Boot backend architecture.",
      technologies: ["React.js", "Spring Boot", "REST APIs"],
      highlights: [
        "Developed comprehensive product catalog with advanced filtering capabilities including price range, categories, brands, and ratings to enhance user shopping experience",
        "Implemented full-featured cart functionality with real-time price calculations, discount applications, and secure order processing system with payment gateway integration",
        "Planning Spring Security authentication implementation with JWT tokens for enhanced security, user session management, and role-based access control for admin and customer portals"
      ],
      status: "Ongoing",
      icon: Store,
      githubUrl: "https://github.com"
    },
    {
      title: "EthLink - Linkio",
      description: "EthLinks is a small prototype demonstrating simple interactions with Ethereum smart contracts. It contains mock data and examples for ERC‑20 token transfers, ERC‑20 approvals, and basic NFT minting flows. Use this project as a starting point for building a UI or backend that interacts with Ethereum contracts using Ethers.js or Web3.js.",
      technologies: ["Node.js", "Ethers.js", "Next.js"],
highlights: [
  "Transfer ERC‑20 tokens between addresses",
  "Approve ERC‑20 allowances for third‑party spending",
  "Mint NFTs with a metadata URL",
  "Example contract addresses and JSON parameters for testing"
],
      status: "Completed",
      icon: Droplet,
      githubUrl: "https://github.com/Ajay-Subramani/ethlinks_new"
    },
    {
      title: "Blood Bank Management System",
      description: "A comprehensive blood donor and inventory management platform efficiently handling 1000+ donor records and blood stock data with significantly improved response time. The system streamlines blood bank operations including donor registration, blood inventory tracking, request management, and automated notifications for critical stock levels.",
      technologies: ["Flask", "MySQL", "Bootstrap"],
      highlights: [
        "Applied advanced SQL triggers and stored procedures to ensure data consistency and integrity across multiple interconnected modules including donor management, inventory control, and request processing systems",
        "Designed fully responsive and intuitive user interface using Bootstrap framework, ensuring seamless access across desktop, tablet, and mobile devices for both administrators and staff members",
        "Optimized complex database queries using indexing strategies and query optimization techniques, resulting in 50% faster response times for critical operations like blood availability checks and donor history retrieval"
      ],
      status: "Completed",
      icon: Droplet,
      githubUrl: "https://github.com/Ajay-Subramani/Blood-Bank-Managment-System"
    },
    {
      title: "Real-Time Chat Application",
      description: "Engineered a robust real-time chat application supporting multiple concurrent users with bidirectional communication, enabling instant message delivery, online presence indicators, typing indicators, and message read receipts. Built with scalable architecture using WebSocket protocol and secured with JWT token-based authentication for protected user sessions.",
      technologies: ["React.js", "Node.js", "Express.js", "WebSocket", "MongoDB"],
      highlights: [
        "Implemented real-time bidirectional messaging using WebSocket protocol with Socket.io library, supporting instant message delivery, message persistence, and connection recovery mechanisms for uninterrupted communication",
        "Built comprehensive JWT-based authentication system with token refresh mechanisms for secure user sessions, password encryption using bcrypt, and middleware protection for private routes and API endpoints",
        "Utilized MongoDB Atlas cloud database for scalable and distributed data storage, implementing efficient message indexing and aggregation pipelines for chat history retrieval and user conversation management"
      ],
      status: "Completed",
      icon: MessageCircle,
      githubUrl: "https://github.com"
    },
    {
      title: "Crime Rate Analyzer Tool",
      description: "Developed a comprehensive data analysis tool that processes and analyzes 50,000+ historical crime records to identify significant trends, patterns, and hotspots while forecasting future crime rates. The system reduces manual analysis time by 50% through automated data processing pipelines and interactive visualizations, providing actionable insights for law enforcement and policy makers.",
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Streamlit"],
      highlights: [
        "Created interactive Streamlit dashboard featuring 5+ dynamic data visualizations including heatmaps, time-series plots, geographical crime distribution maps, and category-wise breakdown charts for comprehensive crime pattern analysis",
        "Implemented advanced data analysis algorithms using Pandas for trend identification, correlation analysis between different crime types, temporal pattern recognition, and geographical clustering to identify crime hotspots and recurring patterns",
        "Built and trained multiple forecasting models using time-series analysis techniques and machine learning algorithms for accurate crime rate prediction, incorporating seasonal trends, historical patterns, and demographic factors to improve prediction accuracy"
      ],
      status: "Completed",
      icon: TrendingUp,
      githubUrl: "https://github.com/Ajay-Subramani/Crime-Rate-Predictor"
    }
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
