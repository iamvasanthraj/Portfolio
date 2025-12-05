import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiCpu, FiTool } from 'react-icons/fi';
import { skills } from '../data/content';

const categories = [
  { label: 'Frontend', icon: <FiCode /> },
  { label: 'Backend', icon: <FiCpu /> },
  { label: 'Tools', icon: <FiTool /> },
];

const Skills = () => {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-10 rounded-[28px] bg-white/5 p-6 shadow-glass ring-1 ring-white/10 sm:p-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">Toolkit</p>
            <h2 className="font-display text-3xl text-white sm:text-4xl">Crafting with modern stacks</h2>
            <p className="mt-2 max-w-2xl text-white/70">
              Clean architecture, component systems, and DX-focused tooling to ship faster with confidence.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {categories.map((cat) => {
            const list = skills[cat.label.toLowerCase()];
            return (
              <motion.div
                key={cat.label}
                whileHover={{ y: -6 }}
                className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-5 shadow-glass"
              >
                <div className="absolute inset-0 opacity-40 blur-3xl">
                  <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-accent-purple/30" />
                </div>
                <div className="relative flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-lg text-white">
                    {cat.icon}
                  </div>
                  <p className="text-lg font-semibold text-white">{cat.label}</p>
                </div>
                <div className="relative mt-4 grid grid-cols-2 gap-2">
                  {list.map((item) => (
                    <span
                      key={item}
                      className="rounded-xl bg-white/10 px-3 py-2 text-xs font-semibold text-white/80 shadow-inner shadow-black/20 transition hover:-translate-y-1 hover:bg-white/15"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
