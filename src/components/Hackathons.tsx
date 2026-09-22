import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy } from "lucide-react";

const Hackathons = () => {
  const hackathons = [
    {
      name: "Dekathon 3.0",
      result: "Finalist",
      description:
        "Built a platform connecting skilled, unemployed, and daily-wage workers with employers.",
    },
    {
      name: "Nexathon '25",
      result: "Finalist",
      description:
        "Created an AI-based system for drug–drug and food–drug interaction prediction from scans.",
    },
    {
      name: "ET GenAI",
      result: "Participant",
      description:
        "Participated in an AI-focused hackathon exploring generative AI solutions.",
    },
    {
      name: "HackTrix",
      result: "Participant",
      description:
        "Participated in a software development hackathon focused on building innovative solutions.",
    },
    {
      name: "La Trobe Hackathon",
      result: "Participant",
      description:
        "Participated in a collaborative technology hackathon.",
    },
    {
      name: "Smart India Hackathon",
      result: "Participant",
      description:
        "Participated in the national-level innovation and problem-solving hackathon.",
    },
  ];

  return (
    <section id="hackathons" className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="bg-gradient-accent bg-clip-text text-transparent">
            Hackathons
          </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 text-lg">
          Building and experimenting with solutions under real-world constraints
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {hackathons.map((hackathon, index) => (
            <Card
              key={index}
              className="p-6 bg-secondary border-border hover:border-primary transition-smooth shadow-card"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl font-semibold">
                      {hackathon.name}
                    </h3>

                    <Badge
                      className={
                        hackathon.result === "Finalist"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      }
                    >
                      {hackathon.result}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground">
                    {hackathon.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hackathons;