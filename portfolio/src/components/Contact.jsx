import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiSend } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass rounded-[28px] border border-white/10 p-6 shadow-glass sm:p-8"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">Contact</p>
          <h3 className="mt-2 font-display text-2xl text-white sm:text-3xl">Let’s build something great</h3>
          <p className="mt-3 text-white/70">
            Reach out for collaborations, full-time opportunities, or just to say hi.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                <FiMail />
              </span>
              <div>
                <p className="text-sm text-white/60">Email</p>
                <a href="mailto:iamvasanthraj003@gmail.com" className="font-semibold text-white hover:underline">
                  iamvasanthraj003@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                <FiMapPin />
              </span>
              <div>
                <p className="text-sm text-white/60">Based in</p>
                <p className="font-semibold text-white">Bengaluru, India</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="glass rounded-[28px] border border-white/10 p-6 shadow-glass sm:p-8"
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          <input type="hidden" name="access_key" value="78f652f7-5606-4453-b979-c4df10de08a7" />
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm text-white/70">
              Name
              <input
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-white outline-none transition focus:border-white/30"
                name="name"
                placeholder="Your name"
                required
              />
            </label>
            <label className="text-sm text-white/70">
              Email
              <input
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-white outline-none transition focus:border-white/30"
                type="email"
                name="email"
                placeholder="you@example.com"
                required
              />
            </label>
          </div>
          <label className="mt-4 block text-sm text-white/70">
            Subject
            <input
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-white outline-none transition focus:border-white/30"
              name="subject"
              placeholder="Project idea or opportunity"
              required
            />
          </label>
          <label className="mt-4 block text-sm text-white/70">
            Message
            <textarea
              className="mt-2 min-h-[140px] w-full rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-white outline-none transition focus:border-white/30"
              name="message"
              placeholder="Tell me about your project and timelines"
              required
            />
          </label>
          <button
            type="submit"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple px-6 py-3 text-sm font-semibold text-white shadow-soft-glow transition hover:-translate-y-0.5"
          >
            <FiSend /> Send message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;