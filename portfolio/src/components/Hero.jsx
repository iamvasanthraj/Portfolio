import React from 'react';
import { ChevronDown, Code, Coffee } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span>🚀 Available for Opportunities</span>
          </div>
          
          <h1 className="hero-title">
            <span className="hero-name">Vasanth Raj</span>
            <span className="hero-underline"></span>
          </h1>
          
          <p className="hero-subtitle">
            <Code size={20} className="hero-icon" />
            Software Developer & Tech Enthusiast
          </p>
          
          <p className="hero-description">
            I specialize in <strong>Java Backend Development</strong> and create 
            innovative solutions that solve real-world problems through technology
          </p>
          
          <div className="hero-buttons">
            <a href="#projects" className="cta-button primary">
              <Code size={18} />
              View My Work
            </a>
            <a href="#contact" className="cta-button secondary">
              <Coffee size={18} />
              Let's Connect
            </a>
          </div>
          
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">2+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat">
              <span className="stat-number">3+</span>
              <span className="stat-label">Certifications</span>
            </div>
            <div className="stat">
              <span className="stat-number">2025</span>
              <span className="stat-label">Graduation</span>
            </div>
          </div>
        </div>
        
        <div className="hero-scroll">
          <ChevronDown size={24} className="scroll-icon" />
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;