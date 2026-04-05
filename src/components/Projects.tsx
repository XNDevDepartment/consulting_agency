"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Category = "All" | "AI Integration" | "Automation";

const projects = [
  {
    name: "Inventory Forecast Engine",
    category: "AI Integration" as Category,
    description: "ML-powered demand forecasting that reduced overstock by 32% for a national retail chain.",
    tags: ["Python", "OpenAI", "FastAPI", "React"],
    gradient: "from-blue-deep to-navy",
  },
  {
    name: "HR Onboarding Automator",
    category: "Automation" as Category,
    description: "End-to-end onboarding pipeline connecting HR systems, Slack, Notion, and email — zero manual steps.",
    tags: ["n8n", "Slack API", "Notion", "REST"],
    gradient: "from-blue-vivid/80 to-blue-deep",
  },
  {
    name: "Customer Churn Predictor",
    category: "AI Integration" as Category,
    description: "Real-time customer churn predictor integrated into a SaaS CRM, improving retention by 21%.",
    tags: ["ML", "React", "PostgreSQL", "Python"],
    gradient: "from-navy to-blue-vivid/60",
  },
  {
    name: "Supply Chain Optimiser",
    category: "AI Integration" as Category,
    description: "AI-powered logistics platform with natural language search and route optimisation built in.",
    tags: ["Next.js", "FastAPI", "Redis", "AI"],
    gradient: "from-blue-light/60 to-blue-deep",
  },
  {
    name: "Document Processing Pipeline",
    category: "Automation" as Category,
    description: "Automated document ingestion, text extraction, and classification for a financial services firm.",
    tags: ["n8n", "OCR", "REST API", "PostgreSQL"],
    gradient: "from-blue-deep to-blue-vivid/70",
  },
  {
    name: "Support Ticket Classifier",
    category: "AI Integration" as Category,
    description: "AI triage system that auto-classifies and routes support tickets — 85% fully automated.",
    tags: ["OpenAI", "Zendesk API", "Node.js", "TypeScript"],
    gradient: "from-blue-vivid/60 to-navy",
  },
];

const filters: Category[] = ["All", "AI Integration", "Automation"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Category>("All");

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative bg-dark py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-vivid/30 bg-blue-vivid/10 text-blue-light text-xs font-semibold tracking-widest uppercase mb-6">
            Our Work
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            Projects Gallery
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            A selection of systems we&apos;ve built — each one solving a real business problem.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center gap-2 mb-12 flex-wrap"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 text-sm font-semibold rounded-sm transition-all duration-200 ${
                activeFilter === filter
                  ? "bg-blue-vivid text-white"
                  : "text-white/50 hover:text-white border border-white/10 hover:border-white/20"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects grid — proper CSS grid for mobile reliability */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-sm border border-white/8 cursor-pointer"
                whileHover={{ y: -3 }}
              >
                {/* Gradient header — uniform height */}
                <div className={`bg-gradient-to-br ${project.gradient} h-32 relative overflow-hidden`}>
                  <div className="absolute inset-0 grid-bg opacity-20" />

                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span className="text-xs font-semibold px-2 py-0.5 bg-black/30 backdrop-blur-sm text-white/80 rounded-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <ArrowUpRight size={18} className="text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card content */}
                <div className="bg-dark border-t border-white/5 p-6 group-hover:bg-blue-vivid/5 transition-colors duration-300">
                  <h3 className="text-white font-bold text-base mb-2">{project.name}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 bg-blue-vivid/10 text-blue-light border border-blue-vivid/20 rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
