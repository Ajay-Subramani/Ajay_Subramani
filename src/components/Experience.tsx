import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const Experience = () => {
 const experiences = [
  {
    title: "Full-Stack Engineer Intern",
    company: "SRM Groups",
    location: "Chennai",
    period: "July 2025 – December 2025",
    description: [
      "Developed and maintained full-stack medical portal features using React.js, Node.js, REST APIs, and MongoDB, integrating frontend workflows with backend services.",
      "Implemented and consumed REST APIs for application workflows, handling HTTP requests, JSON data, authentication, and database operations.",
      "Debugged frontend and backend issues and optimized application workflows using Git-based development practices.",
    ],
    current: false,
  },

  {
    title: "Green Intern",
    company: "1M1B (One Million for One Billion)",
    location: "Online",
    period: "August 2025 – October 2025",
    description: [
      "Built a MERN-based Carbon Footprint Tracker with interactive analytics for calculating and monitoring personal CO₂ emissions.",
      "Implemented JWT authentication and secure session handling while integrating frontend components with backend REST services.",
    ],
    current: false,
  },

  {
    title: "Web Developer",
    company: "SMedia Influ",
    location: "Chennai",
    period: "June 2023 – September 2023",
    description: [
      "Developed responsive frontend interfaces and full-stack web features with a focus on usability and cross-device compatibility.",
    ],
    current: false,
  },
];

  return (
    <section id="experience" className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-8xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="text-foreground">Experience</span>
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="p-6 bg-secondary border-border hover:border-primary transition-smooth shadow-card"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-2xl font-semibold">{exp.title}</h3>
                    {exp.current && (
                      <Badge className="bg-primary text-primary-foreground">Current</Badge>
                    )}
                  </div>
                  <p className="text-xl text-primary mb-1">{exp.company}</p>
                  <p className="text-muted-foreground mb-4">{exp.period} | {exp.location}</p>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-accent mt-1">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
