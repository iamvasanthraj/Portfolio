import React from 'react';
import { Server, Layout, Database } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      icon: <Server size={48} />,
      title: 'Backend Development',
      skills: [
        'Spring & Spring Boot',
        'Hibernate ORM',
        'Java Servlets',
        'RESTful APIs',
        'Maven Build Tool',
        'Multithreading'
      ]
    },
    {
      icon: <Layout size={48} />,
      title: 'Frontend Development',
      skills: [
        'React',
        'JavaScript',
        'HTML5 & CSS3',
        'Responsive Design',

      ]
    },
    {
      icon: <Database size={48} />,
      title: 'Database & Tools',
      skills: [
        'JDBC & Database Management',
        'MySQL',
        'Git & GitHub',
        'Firebase',
        'Problem Solving',
        
      ]
    }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <ul style={{ listStyle: 'none', marginTop: '1rem' }}>
                {skill.skills.map((item, idx) => (
                  <li key={idx} style={{ margin: '0.5rem 0', fontSize: '0.9rem' }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <h3 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>Certifications</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
            <div>AWS Academy Graduate - AWS Academy Cloud Foundations</div>
            <div>Java Programming Internship - Motioncut</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;