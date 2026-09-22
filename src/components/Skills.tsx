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
  // Programming
  "Python": pythonLogo,
  "Java": javaLogo,
  "C": cLogo,
  "C++": cppLogo,
  "JavaScript": jsLogo,
  "TypeScript": tsLogo,

  // Frontend
  "React.js": reactLogo,
  "React Native": reactLogo,
  "Tailwind CSS": tailwindLogo,
  "Bootstrap": bootstrapLogo,

  // Backend
  "Node.js": nodeLogo,
  "Express.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  "Spring Boot": springLogo,
  "Flask": flaskLogo,
  "FastAPI":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",

  // Databases
  "MySQL": mysqlLogo,
  "MongoDB": mongoLogo,
  "SQLite":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",

  // DevOps / Tools
  "Docker": dockerLogo,
  "Git": gitLogo,
  "GitHub":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  "AWS":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  "Vercel":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",

  // AI / ML
  "PyTorch":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
  "OpenCV":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg",
  "Pandas":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
  "NumPy":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
  "Scikit-learn":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",

  // Other
  "Postman":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
};

  const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      "Java",
      "Python",
      "C++",
      "JavaScript",
      "TypeScript",
      "SQL",
    ],
  },

  {
    title: "Core Computer Science",
    skills: [
      "Data Structures & Algorithms",
      "OOP",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
  },

  {
    title: "Backend & APIs",
    skills: [
      "Spring Boot",
      "Node.js",
      "Express.js",
      "FastAPI",
      "Flask",
      "REST APIs",
      "HTTP",
      "JSON",
    ],
  },

  {
    title: "Frontend",
    skills: [
      "React.js",
      "React Native",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },

  {
    title: "Databases",
    skills: [
      "MySQL",
      "MongoDB",
      "SQLite",
    ],
  },

  {
    title: "AI / Machine Learning",
    skills: [
      "LangChain",
      "RAG",
      "FAISS",
      "LLMs",
      "PyTorch",
      "OpenCV",
      "Scikit-learn",
      "Pandas",
      "NumPy",
    ],
  },

  {
    title: "DevOps & Tools",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "CI/CD",
      "AWS",
      "Vercel",
      "Postman",
    ],
  },
];

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920')] bg-cover bg-center opacity-5"></div>
      <div className="container mx-auto max-w-8xl relative z-10">
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
