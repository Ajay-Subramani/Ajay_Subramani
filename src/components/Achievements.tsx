import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Trophy, Code } from "lucide-react";

const Achievements = () => {
  const certifications = [
    "Front-End Developer Certification – Infosys (Infosys Springboard)",
    "Python Essential and CCNA Level 1 – Cisco",
    "NPTEL: IoT (Top 1%), Social Networks"
  ];

  const achievements = [
    "Finalist: Dekathon 3.0, Nexathon'25",
    "Solved 250+ problems on LeetCode",
    "Earned 5+ badges on HackerRank and CodeChef"
  ];

  const hackathons = [
    "Techathon (IITM)",
    "Accenture Hackathon",
    "Flipkart Hackathon",
    "TVS Credit Hackathon",
    "Walmart Sparkathon",
    "Smart India Hackathon",
    "Naan Mudhalvan Learnathon"
  ];

  return (
    <section id="achievements" className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Achievements & <span className="bg-gradient-accent bg-clip-text text-transparent">Certifications</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 bg-secondary border-border shadow-card">
            <Award className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-4">Certifications</h3>
            <ul className="space-y-3">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-accent mt-1">▹</span>
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-6 bg-secondary border-border shadow-card">
            <Trophy className="h-10 w-10 text-accent mb-4" />
            <h3 className="text-xl font-semibold mb-4">Achievements</h3>
            <ul className="space-y-3">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary mt-1">▹</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-6 bg-secondary border-border shadow-card">
            <Code className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-4">Hackathons</h3>
            <div className="flex flex-wrap gap-2">
              {hackathons.map((hackathon, index) => (
                <Badge 
                  key={index}
                  variant="secondary"
                  className="bg-muted text-xs"
                >
                  {hackathon}
                </Badge>
              ))}
            </div>
          </Card>
        </div>

        <Card className="p-6 bg-gradient-accent text-primary-foreground shadow-glow">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Problem Solving Excellence</h3>
            <p className="text-lg opacity-90">
              Active competitive programmer with 250+ solved problems across multiple platforms
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Achievements;
