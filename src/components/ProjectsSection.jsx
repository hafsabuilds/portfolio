import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Library Management System",
    description:
      "OTU Library is a multiuser platform for librarians and students. Users can book study rooms, request books, and track fines, while admins manage and update the library database. A dashboard displays key library data on the website.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "PHP", "SQL"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "EIA Tech Website",
    description:
      "A professional company website built for an automation business, featuring a modern design and an interactive dashboard for data visualization and analytics.",
    image: "/projects/project2.png",
    tags: ["HTML/CSS", "JavaScript", "Figma"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Hybrid Website",
    description:
      "A corporate website for Aterya, an elevator fabrication company, showcasing products and allowing customers to request quotes. The site supports multiple languages and offers a user-friendly interface.",
    image: "/projects/project3.png",
    tags: ["React", "TailwindCSS", "WordPress"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of projects crafted for performance and great user experience.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-1 text-left">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title and Description */}
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-1 truncate">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </div>

                {/* Demo Link (sticky at bottom) */}
                <div className="mt-auto flex space-x-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                  {/*
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                  */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Check My Github Button */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/hafsabuilds"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
