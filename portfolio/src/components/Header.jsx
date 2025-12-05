import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';
import { Code2 } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  const handleNav = (href) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="glass mt-5 flex items-center justify-between rounded-2xl px-4 py-3 sm:px-6"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-accent-blue">
              <Code2 size={24} />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/60">Portfolio</p>
              <p className="font-display text-lg font-semibold text-white">Vasanth Raj</p>
            </div>
          </div>

          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-sm font-medium text-white/80 transition hover:text-white"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="rounded-full bg-white/5 p-2 text-white/80 transition hover:bg-white/10"
            >
              {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="rounded-full bg-white/5 p-2 text-white/80 transition hover:bg-white/10"
            >
              {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
            <button
              onClick={() => setOpen((p) => !p)}
              aria-label="Toggle navigation"
              className="rounded-xl bg-white/5 p-2 text-white"
            >
              {open ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </motion.nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className="glass mt-3 rounded-2xl px-4 py-4 md:hidden"
            >
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNav(link.href)}
                    className="rounded-xl px-3 py-3 text-left text-sm font-semibold text-white/80 transition hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;