import { Card } from "@/components/ui/card";
import pythonLogo from "@/assets/tech-logos/python.svg";
import javaLogo from "@/assets/tech-logos/java.svg";
import cLogo from "@/assets/tech-logos/c.svg";
import cppLogo from "@/assets/tech-logos/cpp.svg";
import jsLogo from "@/assets/tech-logos/javascript.svg";
import tsLogo from "@/assets/tech-logos/typescript.svg";
import reactLogo from "@/assets/tech-logos/react.svg";
import nodeLogo from "@/assets/tech-logos/nodejs.svg";
import mongoLogo from "@/assets/tech-logos/mongodb.svg";
import mysqlLogo from "@/assets/tech-logos/mysql.svg";
import tailwindLogo from "@/assets/tech-logos/tailwind.svg";
import dockerLogo from "@/assets/tech-logos/docker.svg";
import gitLogo from "@/assets/tech-logos/git.svg";
import springLogo from "@/assets/tech-logos/spring.svg";
import flaskLogo from "@/assets/tech-logos/flask.svg";
import bootstrapLogo from "@/assets/tech-logos/bootstrap.svg";

const Skills = () => {
  const techLogos: { [key: string]: string } = {
    "Python": pythonLogo,
    "Java": javaLogo,
    "C": cLogo,
    "C++": cppLogo,
    "JavaScript": jsLogo,
    "TypeScript": tsLogo,
    "React.js": reactLogo,
    "React Native": reactLogo,
    "Node.js": nodeLogo,
    "MySQL": mysqlLogo,
    "MongoDB": mongoLogo,
    "Tailwind CSS": tailwindLogo,
    "Docker": dockerLogo,
    "Git": gitLogo,
    "Spring Boot": springLogo,
    "Flask": flaskLogo,
    "Bootstrap": bootstrapLogo,
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
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "Streamlit"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920')] bg-cover bg-center opacity-5"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          Technical Skills
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="p-6 bg-secondary border-border hover:border-primary transition-smooth shadow-card"
            >
              <h3 className="text-xl font-semibold mb-6 text-primary text-center">{category.title}</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex flex-col items-center gap-2">
                    <div className="bg-muted hover:bg-primary/10 p-3 rounded-lg transition-smooth cursor-pointer border border-transparent hover:border-primary w-20 h-20 flex items-center justify-center">
                      {techLogos[skill] ? (
                        <img 
                          src={techLogos[skill]} 
                          alt={skill}
                          className="w-12 h-12 object-contain"
                        />
                      ) : (
                        <div className="text-primary text-xs font-semibold text-center">{skill}</div>
                      )}
                    </div>
                    <span className="text-xs text-muted-foreground text-center max-w-[80px]">{skill}</span>
                  </div>
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
