import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiCalendar } from 'react-icons/fi';
import { experiences, profile } from '../data/content';

const About = () => {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="glass relative overflow-hidden rounded-[28px] border border-white/10 px-6 py-8 sm:px-10 sm:py-12">
        <div className="absolute inset-0 opacity-50 blur-3xl">
          <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-accent-aqua/30" />
          <div className="absolute right-10 bottom-10 h-32 w-32 rounded-full bg-accent-purple/25" />
        </div>
        <div className="relative grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-3 rounded-full bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              <span className="h-2 w-2 rounded-full bg-accent-blue" />
              About
            </div>
            <h2 className="font-display text-3xl text-white sm:text-4xl">Engineer with product instinct</h2>
            <p className="text-lg text-white/70">
              I craft resilient backend services and refined front-end experiences. My toolkit spans Java, Spring Boot,
              and modern web technologies, enabling me to ship performant features end-to-end.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/5 p-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                    <FiAward />
                  </span>
                  <div>
                    <p className="text-sm text-white/60">Student</p>
                    <p className="font-semibold text-white">Computer Science</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl bg-white/5 p-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                    <FiCalendar />
                  </span>
                  <div>
                    <p className="text-sm text-white/60">Graduating</p>
                    <p className="font-semibold text-white">2025</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-white/5 bg-white/5 p-4 text-sm leading-relaxed text-white/70">
              I enjoy architecting clean APIs, optimizing queries, and pairing with design to craft interfaces that feel
              effortless. Outside of code, I explore new tools, contribute to projects, and stay curious about product
              strategy.
            </div>
            <div>
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-aqua to-accent-blue px-5 py-3 text-sm font-semibold text-[#0b1224] shadow-soft-glow"
              >
                Download CV
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glass">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">Experience</p>
              <div className="mt-4 space-y-4">
                {experiences.map((exp) => (
                  <div key={exp.company} className="rounded-2xl bg-white/5 p-4">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-white">{exp.role}</p>
                      <span className="text-xs text-white/60">{exp.period}</span>
                    </div>
                    <p className="text-sm text-white/60">{exp.company}</p>
                    <ul className="mt-3 space-y-2 text-sm text-white/70">
                      {exp.points.map((point) => (
                        <li key={point} className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent-aqua" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
