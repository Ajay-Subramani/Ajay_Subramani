import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const Skills = () => {
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
    },
    {
      title: "Other",
      skills: ["Leadership", "Time Management", "English", "Tamil"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Technical <span className="bg-gradient-accent bg-clip-text text-transparent">Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="p-6 bg-secondary border-border hover:border-primary transition-smooth shadow-card"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary"
                    className="bg-muted hover:bg-primary hover:text-primary-foreground transition-smooth"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
