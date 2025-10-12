import React from 'react';
import { Code2 } from 'lucide-react';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="logo">
            <Code2 size={32} />
            Port<span>Folio</span>
          </div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;