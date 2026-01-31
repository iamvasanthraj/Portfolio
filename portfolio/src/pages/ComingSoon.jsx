import React from "react";
import { motion } from "framer-motion";
import { FiClock, FiTool, FiCpu } from "react-icons/fi";

const ComingSoon = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#070A12] px-4">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-10 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.07),transparent_55%)]" />
      </div>

      {/* Floating Particles */}
      {[...Array(10)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-2 w-2 rounded-full bg-white/20"
          initial={{
            opacity: 0.2,
            x: Math.random() * 1000 - 500,
            y: Math.random() * 600 - 300,
          }}
          animate={{
            y: ["-20%", "20%", "-20%"],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 6 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 w-full max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-xl sm:p-12"
      >
        {/* Gear System */}
        <div className="relative mx-auto mb-10 flex items-center justify-center">
          {/* Large Gear */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="relative z-20 flex h-28 w-28 items-center justify-center rounded-full border-4 border-white/20"
          >
            {/* Gear teeth */}
            <div className="absolute -top-2 left-1/2 h-6 w-4 -translate-x-1/2 rounded-sm bg-gradient-to-b from-blue-400 to-blue-600" />
            <div className="absolute -bottom-2 left-1/2 h-6 w-4 -translate-x-1/2 rounded-sm bg-gradient-to-t from-blue-400 to-blue-600" />
            <div className="absolute top-1/2 -left-2 h-4 w-6 -translate-y-1/2 rounded-sm bg-gradient-to-r from-blue-400 to-blue-600" />
            <div className="absolute top-1/2 -right-2 h-4 w-6 -translate-y-1/2 rounded-sm bg-gradient-to-l from-blue-400 to-blue-600" />

            {/* Diagonal teeth */}
            <div className="absolute -top-3 -left-3 h-6 w-4 rotate-45 rounded-sm bg-gradient-to-br from-blue-400 to-blue-600" />
            <div className="absolute -top-3 -right-3 h-6 w-4 -rotate-45 rounded-sm bg-gradient-to-bl from-blue-400 to-blue-600" />
            <div className="absolute -bottom-3 -left-3 h-6 w-4 -rotate-45 rounded-sm bg-gradient-to-tr from-blue-400 to-blue-600" />
            <div className="absolute -bottom-3 -right-3 h-6 w-4 rotate-45 rounded-sm bg-gradient-to-tl from-blue-400 to-blue-600" />

            {/* Center */}
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20">
              <FiCpu className="text-white" size={28} />
            </div>
          </motion.div>

          {/* Small Gear (interlocked) */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -right-4 z-10 flex h-20 w-20 items-center justify-center rounded-full border-4 border-white/15"
          >
            {/* Gear teeth */}
            <div className="absolute -top-1 left-1/2 h-4 w-3 -translate-x-1/2 rounded-sm bg-gradient-to-b from-purple-400 to-purple-600" />
            <div className="absolute -bottom-1 left-1/2 h-4 w-3 -translate-x-1/2 rounded-sm bg-gradient-to-t from-purple-400 to-purple-600" />
            <div className="absolute top-1/2 -left-1 h-3 w-4 -translate-y-1/2 rounded-sm bg-gradient-to-r from-purple-400 to-purple-600" />
            <div className="absolute top-1/2 -right-1 h-3 w-4 -translate-y-1/2 rounded-sm bg-gradient-to-l from-purple-400 to-purple-600" />

            {/* Center */}
            <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-purple-500/20 to-pink-500/20" />
          </motion.div>

          {/* Third Gear (small, on other side) */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -left-6 z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white/10"
          >
            {/* Gear teeth */}
            <div className="absolute -top-1 left-1/2 h-3 w-2 -translate-x-1/2 rounded bg-gradient-to-b from-cyan-400 to-cyan-600" />
            <div className="absolute -bottom-1 left-1/2 h-3 w-2 -translate-x-1/2 rounded bg-gradient-to-t from-cyan-400 to-cyan-600" />

            {/* Center */}
            <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-cyan-500/20 to-blue-500/20" />
          </motion.div>
        </div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center font-bold text-white sm:text-5xl text-4xl"
        >
          Advanced Development Mode 🚀
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mt-4 text-center text-white/70"
        >
          We're engineering something extraordinary with cutting-edge technology
          and precision craftsmanship ⚙️
        </motion.p>

        {/* Status Indicators */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center"
          >
            <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20">
              <FiTool className="text-blue-400" size={20} />
            </div>
            <h3 className="font-semibold text-white">Frontend</h3>
            <p className="mt-1 text-xs text-white/60">React 18 + Tailwind</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center"
          >
            <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/20">
              <FiCpu className="text-purple-400" size={20} />
            </div>
            <h3 className="font-semibold text-white">Backend</h3>
            <p className="mt-1 text-xs text-white/60">Node.js + Database</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center"
          >
            <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20">
              <FiClock className="text-green-400" size={20} />
            </div>
            <h3 className="font-semibold text-white">ETA</h3>
            <p className="mt-1 text-xs text-white/60">Q1 2024 Launch</p>
          </motion.div>
        </div>

        {/* Progress Bar */}
        <div className="mt-10">
          <div className="flex items-center justify-between text-xs text-white/60">
            <span className="flex items-center gap-2">
              <FiClock /> System Integration
            </span>
            <span>85%</span>
          </div>

          <div className="mt-3 h-3 w-full overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "85%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"
            />
          </div>

          <div className="mt-4 flex justify-between text-xs text-white/40">
            <span>Code</span>
            <span>Testing</span>
            <span>Optimization</span>
            <span>Deployment</span>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-8 text-center text-xs text-white/40">
          © {new Date().getFullYear()} • Engineering in Progress • React + Framer Motion
        </p>
      </motion.div>
    </div>
  );
};

export default ComingSoon;