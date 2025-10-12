import React from 'react';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-links">
          <a href="https://github.com/iamvasanthraj" className="social-link">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/iamvasanthraj/" className="social-link">
            <Linkedin size={20} />
          </a>
          <a href="https://www.instagram.com/im_vasanxx_24" className="social-link">
            <Instagram size={20} />
          </a>
          <a href="mailto:iamvasanthraj003@gmail.com" className="social-link">
            <Mail size={20} />
          </a>
        </div>
        <p>&copy; 2024 Vasanth Raj. All rights reserved.</p>
       
      </div>
    </footer>
  );
};

export default Footer;