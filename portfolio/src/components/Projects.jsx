import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiSliders } from 'react-icons/fi';
import { projects } from '../data/content';

const filters = ['All', 'Web Apps', 'Backends', 'UI Designs'];

const Projects = () => {
  const [active, setActive] = useState('All');

  const filtered = useMemo(() => {
    if (active === 'All') return projects;
    return projects.filter((project) => project.tag === active);
  }, [active]);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">Selected Work</p>
            <h2 className="font-display text-3xl text-white sm:text-4xl">Projects that ship value</h2>
            <p className="mt-2 max-w-2xl text-white/70">
              Modern experiences with crisp visuals, instant feedback, and accessible interactions.
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs text-white/60">
            <FiSliders /> Filter by type
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                active === filter
                  ? 'bg-gradient-to-r from-accent-blue to-accent-purple text-white shadow-soft-glow'
                  : 'bg-white/5 text-white/70 hover:bg-white/10'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                layout
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glass"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-0 transition duration-300 group-hover:opacity-100" />
                <div className="relative z-10 flex items-start justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/50">{project.tag}</p>
                    <h3 className="mt-1 font-display text-2xl text-white">
                      <span className="mr-2 text-lg">{project.icon || '✨'}</span>
                      {project.title}
                    </h3>
                    <p className="mt-3 text-white/70">{project.description}</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/70">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="relative z-10 mt-6 flex gap-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/20"
                  >
                    <FiExternalLink /> Live
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/80 transition hover:-translate-y-0.5 hover:border-white/30 hover:text-white"
                  >
                    <FiGithub /> Code
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
