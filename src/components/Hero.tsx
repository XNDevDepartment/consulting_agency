"use client";

import { motion } from "framer-motion";
import { ArrowDown, Zap, Cpu } from "lucide-react";

const floatingShapes = [
  { size: 300, x: "75%", y: "15%", color: "rgba(27, 44, 193, 0.12)", delay: 0, duration: 8 },
  { size: 180, x: "10%", y: "60%", color: "rgba(45, 91, 227, 0.08)", delay: 2, duration: 10 },
  { size: 120, x: "85%", y: "70%", color: "rgba(79, 142, 247, 0.1)", delay: 4, duration: 7 },
  { size: 80, x: "30%", y: "20%", color: "rgba(27, 44, 193, 0.15)", delay: 1, duration: 9 },
  { size: 200, x: "50%", y: "80%", color: "rgba(45, 91, 227, 0.06)", delay: 3, duration: 11 },
];

export default function Hero() {
  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy">
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-bg animate-grid-pulse" />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-deep/20 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy to-transparent" />

      {/* Floating geometric shapes */}
      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            background: `radial-gradient(circle, ${shape.color}, transparent 70%)`,
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            y: [0, -25, -10, 0],
            x: [0, 10, -5, 0],
            scale: [1, 1.05, 0.98, 1],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Geometric lines — top right */}
      <div className="absolute top-20 right-0 w-72 h-72 opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
          <line x1="0" y1="200" x2="200" y2="0" stroke="#2D5BE3" strokeWidth="1" />
          <line x1="40" y1="200" x2="200" y2="40" stroke="#2D5BE3" strokeWidth="1" />
          <line x1="80" y1="200" x2="200" y2="80" stroke="#2D5BE3" strokeWidth="1" />
          <line x1="120" y1="200" x2="200" y2="120" stroke="#2D5BE3" strokeWidth="1" />
        </svg>
      </div>

      {/* Geometric lines — bottom left */}
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
          <circle cx="0" cy="200" r="60" stroke="#1B2CC1" strokeWidth="1" fill="none" />
          <circle cx="0" cy="200" r="110" stroke="#1B2CC1" strokeWidth="1" fill="none" />
          <circle cx="0" cy="200" r="160" stroke="#1B2CC1" strokeWidth="1" fill="none" />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-vivid/30 bg-blue-vivid/10 text-blue-light text-xs font-semibold tracking-widest uppercase mb-8"
        >
          <Zap size={12} />
          AI Integration & Process Automation
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight text-white mb-6"
        >
          We Build the{" "}
          <span className="text-gradient">Intelligence</span>
          <br />
          Behind Your Business.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We go from understanding your problem all the way to deploying AI systems
          and automated workflows that change how your business operates.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            onClick={scrollToServices}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-8 py-4 bg-blue-vivid hover:bg-blue-light text-white font-semibold text-sm rounded-sm transition-colors duration-200 glow-blue"
          >
            <Cpu size={16} />
            Explore Our Services
          </motion.button>
          <motion.button
            onClick={scrollToProjects}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-8 py-4 border border-white/20 hover:border-blue-vivid/60 hover:bg-blue-vivid/10 text-white/80 hover:text-white font-semibold text-sm rounded-sm transition-all duration-200"
          >
            See Our Work
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="flex flex-wrap justify-center gap-8 sm:gap-12 mt-14 sm:mt-20"
        >
          {[
            { value: "50+", label: "Projects Delivered" },
            { value: "30+", label: "Enterprise Clients" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "5x", label: "Avg. Efficiency Gain" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-black text-gradient-blue">{stat.value}</div>
              <div className="text-xs text-white/40 mt-1 tracking-widest uppercase">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-xs tracking-widest uppercase"
      >
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
