"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const differentiators = [
  "We solve problems, not sell tools.",
  "We listen first, then we build.",
  "We stay until it works — and your team owns it.",
];

export default function About() {
  return (
    <section id="about" className="relative bg-off-white py-32 overflow-hidden">
      {/* Decorative corner shape */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
          <rect x="40" y="40" width="120" height="120" stroke="#1B2CC1" strokeWidth="2" />
          <rect x="60" y="60" width="80" height="80" stroke="#2D5BE3" strokeWidth="1" />
          <rect x="80" y="80" width="40" height="40" fill="#1B2CC1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-vivid/30 bg-blue-vivid/5 text-blue-deep text-xs font-semibold tracking-widest uppercase mb-6">
              Who We Are
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-black leading-tight mb-6">
              Engineers who{" "}
              <span className="text-gradient-blue">think like strategists.</span>
            </h2>

            <p className="text-black/60 text-lg leading-relaxed mb-8">
              NEXUS AI is an AI consulting agency focused on two things: building
              AI into your software, and automating the workflows that slow your
              team down. We don&apos;t do everything — we do these two things exceptionally well.
            </p>

            <p className="text-black/60 leading-relaxed mb-10">
              Every engagement starts with understanding your actual problem —
              not just the one you described. We listen, we design, we build,
              and we stay until it works.
            </p>

            <div className="space-y-4">
              {differentiators.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={20}
                    className="text-blue-vivid mt-0.5 shrink-0"
                  />
                  <p className="text-black/70 text-sm leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — abstract network visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative flex items-center justify-center"
          >
            <NetworkVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function NetworkVisual() {
  const nodes = [
    { cx: 200, cy: 200, r: 28, label: "AI Core" },
    { cx: 80, cy: 80, r: 18, label: "Data" },
    { cx: 320, cy: 80, r: 18, label: "API" },
    { cx: 80, cy: 320, r: 18, label: "Ops" },
    { cx: 320, cy: 320, r: 18, label: "UX" },
    { cx: 200, cy: 60, r: 12, label: "" },
    { cx: 340, cy: 200, r: 12, label: "" },
    { cx: 60, cy: 200, r: 12, label: "" },
    { cx: 200, cy: 340, r: 12, label: "" },
  ];

  const edges = [
    [0, 1], [0, 2], [0, 3], [0, 4],
    [0, 5], [0, 6], [0, 7], [0, 8],
    [1, 5], [2, 5], [2, 6], [4, 6],
    [3, 7], [1, 7], [3, 8], [4, 8],
  ];

  return (
    <div className="relative w-full max-w-md mx-auto">
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full"
        style={{ filter: "drop-shadow(0 0 40px rgba(45, 91, 227, 0.15))" }}
      >
        {/* Edges */}
        {edges.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={nodes[a].cx}
            y1={nodes[a].cy}
            x2={nodes[b].cx}
            y2={nodes[b].cy}
            stroke="#2D5BE3"
            strokeWidth="1"
            initial={{ opacity: 0, pathLength: 0 }}
            whileInView={{ opacity: 0.25, pathLength: 1 }}
            transition={{ duration: 0.8, delay: i * 0.05 }}
            viewport={{ once: true }}
          />
        ))}

        {/* Pulse rings on center node */}
        {[60, 90, 120].map((r, i) => (
          <motion.circle
            key={i}
            cx={200}
            cy={200}
            r={r}
            fill="none"
            stroke="#2D5BE3"
            strokeWidth="0.5"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: [0, 0.15, 0] }}
            transition={{ duration: 3, delay: i * 0.8, repeat: Infinity }}
            viewport={{ once: true }}
          />
        ))}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <g key={i}>
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r={node.r + 6}
              fill="#1B2CC1"
              fillOpacity={0.06}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.06 + 0.5 }}
              viewport={{ once: true }}
            />
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r={node.r}
              fill={i === 0 ? "#2D5BE3" : "#1B2CC1"}
              fillOpacity={i === 0 ? 0.9 : 0.7}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.06 + 0.5, type: "spring" }}
              viewport={{ once: true }}
            />
            {node.label && (
              <motion.text
                x={node.cx}
                y={node.cy + 4}
                textAnchor="middle"
                fill="white"
                fontSize={i === 0 ? "8" : "6"}
                fontWeight="600"
                fontFamily="system-ui"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.06 + 0.8 }}
                viewport={{ once: true }}
              >
                {node.label}
              </motion.text>
            )}
          </g>
        ))}
      </svg>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-gradient-radial from-blue-deep/10 via-transparent to-transparent rounded-full" />
    </div>
  );
}
