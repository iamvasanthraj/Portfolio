import React from 'react';
import './index.css';
import Navbar from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './components/ThemeProvider';
import Education from './components/Education';

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen overflow-hidden bg-[#060b16] text-white transition-colors duration-500 dark:bg-[#060b16]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-16 top-10 h-72 w-72 rounded-full bg-accent-purple/30 blur-[120px]" />
          <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-accent-blue/25 blur-[140px]" />
          <div className="absolute inset-0 bg-hero-grid bg-[length:26px_26px] opacity-[0.2]" />
        </div>
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;