import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const OpenSource = () => {
  const contributions = [
    {
      title: "EthLinks",
      description:
        "Developed a dynamic user interface and integrated Ethereum smart contracts to streamline user interactions on the platform.",
      technologies: [
        "React",
        "JavaScript",
        "Ethereum",
        "Smart Contracts",
      ],
      github:
        "https://github.com/Ajay-Subramani/ethlinks_new",
    },

    {
      title: "SMedia Influ",
      description:
        "Engineered responsive full-stack web features with a focus on usability, cross-device compatibility, and application workflows.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Node.js",
        "MongoDB",
      ],
      github: "https://github.com/Ajay-Subramani",
    },
  ];

  return (
    <section id="opensource" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="bg-gradient-accent bg-clip-text text-transparent">
            Open Source Contribution
          </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 text-lg">
          Contributions and development work beyond academic projects
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {contributions.map((item, index) => (
            <Card
              key={index}
              className="p-6 bg-secondary border-border hover:border-primary transition-smooth shadow-card"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-2xl font-semibold">
                  {item.title}
                </h3>

                <Github className="h-6 w-6 text-primary" />
              </div>

              <p className="text-muted-foreground mb-5">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {item.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full border border-primary/40 text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <Button
                asChild
                size="sm"
                className="bg-primary hover:bg-primary/90"
              >
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View on GitHub
                </a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenSource;