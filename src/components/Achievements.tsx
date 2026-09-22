import { Card } from "@/components/ui/card";
import {
  Trophy,
  Award,
  Code2,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "GATE 2026 Qualified",
      description:
        "Qualified the Graduate Aptitude Test in Engineering (GATE) 2026 in Computer Science.",
      icon: GraduationCap,
    },
    {
      title: "400+ DSA Problems",
      description:
        "Solved 400+ Data Structures and Algorithms problems on LeetCode.",
      icon: Code2,
    },
    {
      title: "Dekathon 3.0 Finalist",
      description:
        "Finalist in Dekathon 3.0 for developing a platform connecting skilled, unemployed, and daily-wage workers with employers.",
      icon: Trophy,
    },
    {
      title: "Nexathon '25 Finalist",
      description:
        "Finalist in Nexathon '25 for developing an AI-based system for drug–drug and food–drug interaction prediction from scans.",
      icon: Trophy,
    },
  ];

  const certifications = [
    "Oracle Certified Professional: Java SE 17 Developer",
    "Cisco: Python Essentials",
    "Cisco: Data Science Fundamentals",
    "Cisco: AI Analytics",
    "Cisco: CCNA Levels 1–3",
    "Infosys Springboard: Front-End Developer Certification",
  ];

  return (
    <section id="achievements" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Achievements & Certifications
            </span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Milestones, competitive achievements, and professional
            certifications that reflect my technical growth.
          </p>
        </div>

        {/* Achievements + Certifications */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Achievements */}
          <Card className="p-6 md:p-8 bg-secondary border-border shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-primary/10">
                <Trophy className="h-6 w-6 text-primary" />
              </div>

              <h3 className="text-2xl font-semibold">
                Achievements
              </h3>
            </div>

            <div className="space-y-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;

                return (
                  <div
                    key={index}
                    className="flex gap-4 group"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="p-2 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg mb-1">
                        {achievement.title}
                      </h4>

                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Certifications */}
          <Card className="p-6 md:p-8 bg-secondary border-border shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-primary/10">
                <Award className="h-6 w-6 text-primary" />
              </div>

              <h3 className="text-2xl font-semibold">
                Certifications
              </h3>
            </div>

            <div className="space-y-4">
              {certifications.map((certification, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg bg-background/40 hover:bg-background/60 transition-colors"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />

                  <p className="text-sm leading-relaxed">
                    {certification}
                  </p>
                </div>
              ))}
            </div>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default Achievements;