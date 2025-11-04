import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "SRM Groups",
      location: "Chennai",
      period: "Jul 2025 – Present",
      description: [
        "Engineered 2+ full-stack applications that improved and digitalized the existing conventional system, increasing portal engagement by 20%",
        "Integrated multiple frontend and backend frameworks, boosting web portal performance by 30%"
      ],
      current: true
    },
    {
      title: "Web Developer",
      company: "SMedia Influ (Own Startup)",
      location: "Chennai",
      period: "Jun 2023 – Sep 2023",
      description: [
        "Created 5+ landing pages for retail shops and portfolios using front-end tools"
      ],
      current: false
    }
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
