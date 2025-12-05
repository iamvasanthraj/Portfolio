import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiDownload } from 'react-icons/fi';
import heroImg from '/img.png';
import { profile, stats } from '../data/content';

const Hero = () => {
  return (
    <section id="home" className="relative mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 lg:px-8 lg:pt-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/80 shadow-glass">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-accent-aqua to-accent-blue" />
            {profile.availability}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-lg font-semibold uppercase tracking-[0.3em] text-white/50">Hello, I’m</p>
            <h1 className="font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              {profile.name}
              <span className="mt-2 block bg-gradient-to-r from-accent-blue via-accent-purple to-accent-aqua bg-clip-text text-transparent">
                {profile.title}
              </span>
            </h1>
            <p className="max-w-2xl text-lg text-white/70">{profile.summary}</p>
          </motion.div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple px-6 py-3 text-sm font-semibold shadow-glass transition hover:-translate-y-0.5 hover:shadow-soft-glow"
            >
              Explore work
              <FiArrowUpRight className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white/80 transition hover:-translate-y-0.5 hover:border-white/30 hover:text-white"
            >
              <FiDownload /> View resume
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-white/5 p-4 shadow-glass ring-1 ring-white/5 transition hover:-translate-y-1 hover:bg-white/10"
              >
                <p className="text-sm uppercase tracking-wide text-white/50">{stat.label}</p>
                <p className="font-display text-3xl font-semibold text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="glass relative overflow-hidden rounded-[28px] p-6">
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent" />
            <div className="aspect-square overflow-hidden rounded-2xl bg-white/5">
              <img
                src={heroImg}
                alt="Vasanth Raj"
                className="h-full w-full object-cover object-center transition duration-700 ease-out hover:scale-[1.02]"
              />
            </div>
            <div className="mt-5 flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-sm text-white/70">
              <span>Precision-built backends • Elegant interfaces</span>
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(16,185,129,0.2)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;