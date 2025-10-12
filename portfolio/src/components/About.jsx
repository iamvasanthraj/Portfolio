import React from 'react';
import { Download, Award, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <img 
              src="/img.png" 
              alt="Vasanth Raj" 
            />
          </div>
          
          <div className="about-text">
            <p>
              Hello, I'm <strong>Vasanth Raj</strong>, a passionate Software Developer 
              specializing in <strong>Java backend development</strong> and modern web technologies.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <Award size={18} />
                <span>Computer Science Engineering Student</span>
              </div>
              <div className="highlight-item">
                <Calendar size={18} />
                <span>Graduating in 2025</span>
              </div>
            </div>

            <p style={{ marginTop: '1rem' }}>
              I have extensive expertise in <strong>Java frameworks including Spring Boot, Hibernate, and Servlets</strong>, 
              with strong skills in multithreading, exception handling, and database management. 
              Currently expanding my knowledge in advanced Java concepts and eager to contribute 
              to innovative backend projects.
            </p>
            <p style={{ marginTop: '1rem' }}>
              When I'm not coding, you can find me exploring new technologies, contributing to projects, 
              and continuously learning to improve my skills in full-stack development.
            </p>
            <div style={{ marginTop: '2rem' }}>
            <a 
    href="https://docs.google.com/document/d/1W6dp_yYIEc5rY0G3jB5wC263mqf6iunC/export?format=pdf"
    download="Vasanth_Raj_CV.pdf"
    className="cv-button cta-style"
>
    <Download size={16} />
    Download CV
</a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;