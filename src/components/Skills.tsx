import { Card } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { 
  Code2, Layout, Server, Database, BarChart3, Languages,
  FileCode, Braces, Coffee, Package
} from "lucide-react";

const Skills = () => {
  const techIcons: { [key: string]: React.ReactNode } = {
    "Python": <Code2 className="w-10 h-10" />,
    "Java": <Coffee className="w-10 h-10" />,
    "C": <FileCode className="w-10 h-10" />,
    "C++": <FileCode className="w-10 h-10" />,
    "JavaScript": <Braces className="w-10 h-10" />,
    "TypeScript": <Braces className="w-10 h-10" />,
    "SQL": <Database className="w-10 h-10" />,
    "HTML": <Layout className="w-10 h-10" />,
    "CSS": <Layout className="w-10 h-10" />,
    "React.js": <Layout className="w-10 h-10" />,
    "Tailwind CSS": <Layout className="w-10 h-10" />,
    "Bootstrap": <Layout className="w-10 h-10" />,
    "React Native": <Layout className="w-10 h-10" />,
    "Node.js": <Server className="w-10 h-10" />,
    "Spring Boot": <Server className="w-10 h-10" />,
    "Flask": <Server className="w-10 h-10" />,
    "Express.js": <Server className="w-10 h-10" />,
    "REST APIs": <Server className="w-10 h-10" />,
    "MySQL": <Database className="w-10 h-10" />,
    "MongoDB": <Database className="w-10 h-10" />,
    "Git": <Package className="w-10 h-10" />,
    "Docker": <Package className="w-10 h-10" />,
    "Vercel": <Package className="w-10 h-10" />,
    "Pandas": <BarChart3 className="w-10 h-10" />,
    "Matplotlib": <BarChart3 className="w-10 h-10" />,
    "Seaborn": <BarChart3 className="w-10 h-10" />,
    "Streamlit": <BarChart3 className="w-10 h-10" />,
  };

  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "Java", "C", "C++", "JavaScript", "TypeScript", "SQL", "HTML", "CSS"]
    },
    {
      title: "Frontend",
      skills: ["React.js", "Tailwind CSS", "Bootstrap", "React Native"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Spring Boot", "Flask", "Express.js", "REST APIs"]
    },
    {
      title: "Database & Tools",
      skills: ["MySQL", "MongoDB", "Git", "Docker", "Vercel"]
    },
    {
      title: "Data & ML",
      skills: ["Pandas", "Matplotlib", "Seaborn", "Streamlit"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="bg-gradient-accent bg-clip-text text-transparent">Technical Skills</span>
        </h2>
        
        <TooltipProvider>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="p-6 bg-secondary border-border hover:border-primary transition-smooth shadow-card"
              >
                <h3 className="text-xl font-semibold mb-6 text-primary text-center">{category.title}</h3>
                <div className="flex flex-wrap gap-4 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Tooltip key={skillIndex}>
                      <TooltipTrigger asChild>
                        <div className="bg-muted hover:bg-primary/10 p-3 rounded-lg transition-smooth cursor-pointer border border-transparent hover:border-primary">
                          <div className="text-primary">
                            {techIcons[skill] || <Code2 className="w-10 h-10" />}
                          </div>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{skill}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
};

export default Skills;
