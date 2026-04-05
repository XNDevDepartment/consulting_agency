"use client";

import { motion } from "framer-motion";
import { Target, Eye, Sparkles, Link2, TrendingUp, Zap } from "lucide-react";

const values = [
  {
    icon: Target,
    name: "Precision",
    description: "We define success metrics before writing code. Every decision is traceable to a business outcome.",
  },
  {
    icon: Eye,
    name: "Transparency",
    description: "You always know what we're building and why. No black boxes — we document, explain, and hand over.",
  },
  {
    icon: Sparkles,
    name: "Innovation",
    description: "We stay at the edge of what's possible with AI, applying new capabilities when they genuinely fit.",
  },
  {
    icon: Link2,
    name: "Integration",
    description: "Solutions that live within your ecosystem — not isolated tools that create new silos.",
  },
  {
    icon: TrendingUp,
    name: "Scalability",
    description: "We design for the business you're building toward, not just the one you have today.",
  },
  {
    icon: Zap,
    name: "Impact",
    description: "Measurable results. We measure ROI from day one and don't consider a project successful until you do.",
  },
];

export default function Values() {
  return (
    <section className="relative bg-navy py-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Background geometric decorations */}
      <div className="absolute top-12 left-12 opacity-5">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
          <polygon points="100,10 190,55 190,145 100,190 10,145 10,55" stroke="#2D5BE3" strokeWidth="1" fill="none"/>
          <polygon points="100,30 170,65 170,135 100,170 30,135 30,65" stroke="#2D5BE3" strokeWidth="1" fill="none"/>
        </svg>
      </div>
      <div className="absolute bottom-12 right-12 opacity-5">
        <svg width="160" height="160" viewBox="0 0 160 160" fill="none">
          <circle cx="80" cy="80" r="70" stroke="#1B2CC1" strokeWidth="1"/>
          <circle cx="80" cy="80" r="50" stroke="#1B2CC1" strokeWidth="1"/>
          <line x1="80" y1="10" x2="80" y2="150" stroke="#1B2CC1" strokeWidth="0.5"/>
          <line x1="10" y1="80" x2="150" y2="80" stroke="#1B2CC1" strokeWidth="0.5"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-vivid/30 bg-blue-vivid/10 text-blue-light text-xs font-semibold tracking-widest uppercase mb-6">
            What Drives Us
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            Our Core Values
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            The principles that guide every engagement, every architecture decision, and every line of code we write.
          </p>
        </motion.div>

        {/* Values grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="card-glass rounded-sm p-7 cursor-default group transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-blue-vivid/15 border border-blue-vivid/20 flex items-center justify-center shrink-0 group-hover:bg-blue-vivid/30 group-hover:border-blue-vivid/50 transition-all duration-300">
                    <Icon size={20} className="text-blue-light" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">{value.name}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
