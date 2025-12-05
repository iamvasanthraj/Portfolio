import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data/content';

const Education = () => {
  return (
    <section id="education" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="glass rounded-[28px] border border-white/10 p-6 shadow-glass sm:p-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">Education & Achievements</p>
            <h2 className="font-display text-3xl text-white sm:text-4xl">Growth milestones</h2>
            <p className="mt-2 max-w-2xl text-white/70">
              Hands-on training and certifications that reinforce backend and full stack expertise.
            </p>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          {education.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-5 shadow-glass"
            >
              <div className="absolute left-4 top-4 h-10 w-10 rounded-xl bg-gradient-to-br from-accent-blue/70 to-accent-purple/70 opacity-40 blur-2xl" />
              <div className="relative flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/60">{item.year}</p>
                  <h3 className="font-display text-xl text-white">{item.title}</h3>
                  <p className="text-sm text-white/70">{item.place}</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-white/70">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

