import React from "react";
import { ExternalLink, Github, Code2 } from "lucide-react";
import Project1Image from "../assets/project1.png";

const Projects = () => {
  const projects = [
    {
      title: "Taskify",
      description:
        "A simple task management app built with React and Vite. Add, complete, and track your tasks with a clean interface.",
      tech: ["React", "Vite", "HTML5", "CSS3"],
      demoLink: "https://iamvasanthraj.github.io/Taskify/", // live GitHub Pages demo
      codeLink: "https://github.com/iamvasanthraj/Taskify", // GitHub repo
      image: Project1Image,
    },
    {
      title: "Java Projects",
      description:
        "Developed multiple Java applications focusing on object-oriented programming principles",
      tech: ["Java", "OOP", "Data Structures"],
      demoLink: "#",
      codeLink: "https://github.com/iamvasanthraj",
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive portfolio website showcasing my projects and skills",
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      demoLink: "#",
      codeLink: "https://github.com/iamvasanthraj",
    },
    
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card fade-in-up">
              <div className="project-image">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-img"
                  />
                ) : (
                  <Code2 size={48} color="var(--text-secondary)" />
                )}
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div style={{ marginTop: "1rem" }}>
                  <strong>Technologies:</strong> {project.tech.join(", ")}
                </div>
                <div className="project-links">
                  <a href={project.demoLink} className="project-link" target="_blank">
                    <ExternalLink size={16} style={{ marginRight: "5px" }} />
                    Live Demo
                  </a>
                  <a
                    href={project.codeLink}
                    className="project-link" target="_blank"
                    style={{ background: "#333" }}
                  >
                    <Github size={16} style={{ marginRight: "5px" }} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
