import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },
  { name: "Bootstrap", level: 85, category: "frontend" },
  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "MySQL", level: 75, category: "backend" },
  { name: "Apache", level: 70, category: "backend" },
  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "CI/CD", level: 80, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Canva", level: 95, category: "tools" },
  { name: "Android Studio", level: 75, category: "tools" },
  { name: "Adobe Photoshop", level: 70, category: "tools" },
  { name: "MS Office", level: 95, category: "tools" },
  // Programming Languages
  { name: "C", level: 70, category: "programming languages" },
  { name: "C++", level: 75, category: "programming languages" },
  { name: "Python", level: 75, category: "programming languages" },
  { name: "Java", level: 80, category: "programming languages" },
  // Languages
  { name: "Arabic", level: 100, category: "languages" },
  { name: "English", level: 90, category: "languages" },
  { name: "French", level: 85, category: "languages" },
  { name: "Turkish", level: 80, category: "languages" },
  { name: "Spanish", level: 20, category: "languages" },
  // Soft Skills
  { name: "Communication", level: 95, category: "soft skills" },
  { name: "Team collaboration", level: 100, category: "soft skills" },
  { name: "Problem-solving", level: 90, category: "soft skills" },
  { name: "Adaptability", level: 100, category: "soft skills" },
  { name: "Trends research", level: 90, category: "soft skills" },
  { name: "Editorial photography", level: 90, category: "soft skills" },
  { name: "Content Writing", level: 90, category: "soft skills" },
];

const categories = [
  "all",
  "frontend",
  "backend",
  "tools",
  "programming languages",
  "languages",
  "soft skills",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  const displayedSkills = showAll ? filteredSkills : filteredSkills.slice(0, 6);

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary/80"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        {filteredSkills.length > 6 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-primary font-semibold flex items-center gap-2 mx-auto"
            >
              {showAll ? "Show Less" : "Show More"}{" "}
              <ChevronDown
                className={cn(
                  "transition-transform duration-300",
                  showAll ? "rotate-180" : "rotate-0"
                )}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
