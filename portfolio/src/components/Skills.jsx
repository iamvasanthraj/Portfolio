import React from "react";
import { Layout, Server, Database } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      icon: <Layout size={48} />,
      title: " Frontend Development",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap"],
    },
    {
      icon: <Server size={48} />,
      title: " Backend Development",
      skills: ["Java", "Python", "Spring Boot", "Node.js"],
    },
    {
      icon: <Database size={48} />,
      title: "Databases & Tools",
      skills: [
        "MySQL",
        "Firebase",
        "AWS",
        "Git",
        "VS Code",
      ],
    },
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card fade-in-up">
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <ul style={{ listStyle: "none", marginTop: "1rem", padding: 0 }}>
                {skill.skills.map((item, idx) => (
                  <li
                    key={idx}
                    style={{
                      margin: "0.5rem 0",
                      fontSize: "0.9rem",
                      color: "var(--text-color)",
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "3rem", textAlign: "center" }}>
          <h3
            style={{
              color: "var(--accent-color)",
              marginBottom: "1rem",
            }}
          >
            Certifications
          </h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              alignItems: "center",
            }}
          >
            <div>Java Core Internship - Motioncut</div>
             <div>Python Programming Internship - Motioncut</div>
            <div>AWS Academy Graduate - AWS Academy Cloud Foundations</div>
            
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
