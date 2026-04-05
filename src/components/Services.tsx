"use client";

import { motion } from "framer-motion";
import { Brain, Workflow, ArrowRight, Search, Lightbulb, GitBranch, Code2, Plug, ClipboardList, BarChart3, Cog, Rocket, MonitorCheck } from "lucide-react";

const aiIntegrationSteps = [
  {
    icon: Search,
    number: "01",
    title: "Problem Discovery",
    description: "We embed in your business to understand the real problem — not the stated one.",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Solution Design",
    description: "We define the right AI approach, scoped precisely to what you actually need.",
  },
  {
    icon: GitBranch,
    number: "03",
    title: "Architecture",
    description: "System design, data pipelines, and API contracts — planned before any code.",
  },
  {
    icon: Code2,
    number: "04",
    title: "Development",
    description: "We build the full solution: AI models, APIs, interfaces, and backend systems.",
  },
  {
    icon: Plug,
    number: "05",
    title: "Integration",
    description: "Deployed into your existing systems, with full handover to your team.",
  },
];

const automationSteps = [
  {
    icon: ClipboardList,
    number: "01",
    title: "Process Audit",
    description: "We map your current workflows and find where time and money are being wasted.",
  },
  {
    icon: BarChart3,
    number: "02",
    title: "Impact Analysis",
    description: "We quantify what automation would save — time, cost, and risk.",
  },
  {
    icon: Cog,
    number: "03",
    title: "Automation Design",
    description: "We design what to automate, how to handle edge cases, and what tools to use.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Build",
    description: "We build automated workflows — integrated into your apps or running standalone.",
  },
  {
    icon: MonitorCheck,
    number: "05",
    title: "Deploy & Monitor",
    description: "Live deployment with monitoring and documentation your team can own.",
  },
];

function StepFlow({ steps, dark }: { steps: typeof aiIntegrationSteps; dark: boolean }) {
  return (
    <div className="relative">
      {/* Desktop connector line */}
      <div
        className={`absolute top-7 hidden lg:block h-px ${
          dark ? "bg-blue-deep/30" : "bg-blue-vivid/20"
        }`}
        style={{ left: "10%", right: "10%" }}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-60px" }}
              className="relative flex flex-col items-center text-center group sm:col-span-1"
            >
              {/* Icon circle */}
              <div
                className={`relative z-10 w-14 h-14 rounded-full flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 ${
                  dark
                    ? "bg-blue-vivid/20 border border-blue-vivid/40 group-hover:bg-blue-vivid/40"
                    : "bg-blue-deep/10 border border-blue-deep/20 group-hover:bg-blue-deep/20"
                }`}
              >
                <Icon size={22} className={dark ? "text-blue-light" : "text-blue-vivid"} />
                <span
                  className={`absolute -top-1 -right-1 w-5 h-5 rounded-full text-xs font-black flex items-center justify-center ${
                    dark ? "bg-navy text-blue-light border border-blue-vivid/30" : "bg-off-white text-blue-deep border border-blue-deep/20"
                  }`}
                >
                  {i + 1}
                </span>
              </div>

              {/* Desktop arrow */}
              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-7 -right-3 z-20 items-center justify-center">
                  <ArrowRight
                    size={14}
                    className={dark ? "text-blue-deep" : "text-blue-vivid/40"}
                  />
                </div>
              )}

              <h4 className={`text-sm font-bold mb-2 ${dark ? "text-white" : "text-black"}`}>
                {step.title}
              </h4>
              <p className={`text-xs leading-relaxed ${dark ? "text-white/50" : "text-black/55"}`}>
                {step.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative">
      {/* Service 1 — AI Integration (dark) */}
      <div className="relative bg-dark py-32 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-deep/5 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="lg:col-span-2"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-vivid/30 bg-blue-vivid/10 text-blue-light text-xs font-semibold tracking-widest uppercase mb-5">
                <Brain size={12} />
                Service 01
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-5">
                AI Integration
                <span className="block text-gradient-blue">&amp; Development</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed max-w-xl">
                We embed AI into your software and processes — from smart features
                to predictive systems to AI-powered interfaces. We handle everything
                from architecture to live deployment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="lg:pt-8"
            >
              <div className="card-glass rounded-sm p-8 space-y-3">
                <p className="text-xs font-semibold text-white/40 uppercase tracking-widest">Good fit if you are</p>
                {[
                  "Adding AI features to an existing product",
                  "Building internal AI tools for your team",
                  "Launching a new AI-native product",
                  "Needing expert guidance on AI architecture",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-white/70">
                    <div className="w-1 h-1 bg-blue-light rounded-full shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-10">
              How it works — 5 phases
            </p>
            <StepFlow steps={aiIntegrationSteps} dark={true} />
          </motion.div>
        </div>
      </div>

      {/* Divider */}
      <div className="section-divider" />

      {/* Service 2 — Process Automation (light) */}
      <div className="relative bg-off-white py-32 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-vivid/5 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="order-2 lg:order-1 lg:pt-8"
            >
              <div className="bg-white rounded-sm p-8 border border-light-gray space-y-3 shadow-sm">
                <p className="text-xs font-semibold text-black/40 uppercase tracking-widest">Good fit if you are</p>
                {[
                  "Spending too much time on manual, repetitive tasks",
                  "Needing workflows to run across multiple tools",
                  "Looking to free up your team for higher-value work",
                  "Already using tools like Notion, Slack, or an ERP",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-black/70">
                    <div className="w-1 h-1 bg-blue-vivid rounded-full shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="order-1 lg:order-2 lg:col-span-2"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-vivid/30 bg-blue-vivid/5 text-blue-deep text-xs font-semibold tracking-widest uppercase mb-5">
                <Workflow size={12} />
                Service 02
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-black leading-tight mb-5">
                Enterprise Process
                <span className="block text-gradient-blue">Automation</span>
              </h2>
              <p className="text-black/60 text-lg leading-relaxed max-w-xl">
                We analyse your current workflows, find the automation opportunities,
                and build them — automated workflows integrated into your apps or
                running standalone.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-semibold text-black/30 uppercase tracking-widest mb-10">
              How it works — 5 phases
            </p>
            <StepFlow steps={automationSteps} dark={false} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
