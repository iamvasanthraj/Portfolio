import React from 'react';
import { socials, profile } from '../data/content';

const Footer = () => {
  return (
    <footer className="mt-10 border-t border-white/5 bg-[#050914] py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="text-sm text-white/60">© 2024 {profile.name}. Crafted with care.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white/5 px-3 py-2 text-sm font-semibold text-white/80 transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
