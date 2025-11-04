import { Card } from "@/components/ui/card";
import { Code2, GraduationCap, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-8xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="text-foreground">About Me</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 bg-secondary border-border hover:border-primary transition-smooth shadow-card">
            <Code2 className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Full-Stack Development</h3>
            <p className="text-muted-foreground">
              Experienced in building scalable web applications using modern frameworks and technologies.
            </p>
          </Card>
          
          <Card className="p-6 bg-secondary border-border hover:border-primary transition-smooth shadow-card">
            <Target className="h-10 w-10 text-accent mb-4" />
            <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
            <p className="text-muted-foreground">
              Passionate about creating intelligent software solutions using ML and data analysis.
            </p>
          </Card>
          
          <Card className="p-6 bg-secondary border-border hover:border-primary transition-smooth shadow-card">
            <GraduationCap className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Continuous Learning</h3>
            <p className="text-muted-foreground">
              Always exploring new technologies and methodologies to stay ahead in the field.
            </p>
          </Card>
        </div>

        <Card className="p-8 bg-secondary border-border shadow-card">
          <h3 className="text-2xl font-semibold mb-4">Education</h3>
          <div className="space-y-4">
            <div className="border-l-2 border-primary pl-4">
              <h4 className="text-xl font-semibold">B.E. Computer Science and Engineering</h4>
              <p className="text-primary">Easwari Engineering College, Chennai</p>
              <p className="text-muted-foreground">2023 – 2027 | CGPA: 9.09</p>
            </div>
            <div className="border-l-2 border-accent pl-4">
              <h4 className="text-xl font-semibold">Higher Secondary (HSC)</h4>
              <p className="text-accent">Agathiya Matric Higher Secondary School, Chennai</p>
              <p className="text-muted-foreground">2023 | 96%</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
