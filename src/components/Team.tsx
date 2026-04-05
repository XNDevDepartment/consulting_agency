"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";

const team = [
  {
    name: "Alex Rivera",
    role: "CEO & AI Architect",
    bio: "10+ years building AI systems at scale. Former ML lead at a major tech firm — obsessed with solving the right problem.",
    gradient: "from-blue-vivid to-blue-deep",
    initials: "AR",
    expertise: ["LLMs", "System Design", "Strategy"],
  },
  {
    name: "Maya Chen",
    role: "Head of Automation",
    bio: "Process automation specialist who turns tangled workflows into clean, reliable automation pipelines.",
    gradient: "from-blue-deep to-navy",
    initials: "MC",
    expertise: ["n8n", "Process Design", "APIs"],
  },
  {
    name: "Jordan Kim",
    role: "Lead Engineer",
    bio: "Full-stack engineer focused on AI infrastructure, search systems, and systems built to scale.",
    gradient: "from-blue-light to-blue-vivid",
    initials: "JK",
    expertise: ["Python", "React", "Infra"],
  },
  {
    name: "Sam Torres",
    role: "Integration Specialist",
    bio: "Expert at connecting AI solutions to existing enterprise systems — so they actually get used.",
    gradient: "from-navy to-blue-vivid",
    initials: "ST",
    expertise: ["ERP", "REST/GraphQL", "DevOps"],
  },
];

export default function Team() {
  return (
    <section id="team" className="relative bg-off-white py-32 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(27,44,193,0.15) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-vivid/30 bg-blue-vivid/5 text-blue-deep text-xs font-semibold tracking-widest uppercase mb-6">
            The People Behind It
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-black leading-tight mb-4">
            Meet the Team
          </h2>
          <p className="text-black/50 text-lg max-w-xl mx-auto">
            A small, senior team. No juniors running your project, no layers between you and the people doing the work.
          </p>
        </motion.div>

        {/* Team cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white rounded-sm border border-light-gray overflow-hidden group shadow-sm hover:shadow-md hover:border-blue-light/40 transition-all duration-300"
            >
              {/* Avatar header */}
              <div className={`h-32 bg-gradient-to-br ${member.gradient} relative overflow-hidden flex items-center justify-center`}>
                <div className="absolute inset-0 opacity-20">
                  <svg viewBox="0 0 200 100" className="w-full h-full">
                    <line x1="0" y1="100" x2="100" y2="0" stroke="white" strokeWidth="0.5"/>
                    <line x1="50" y1="100" x2="150" y2="0" stroke="white" strokeWidth="0.5"/>
                    <line x1="100" y1="100" x2="200" y2="0" stroke="white" strokeWidth="0.5"/>
                  </svg>
                </div>
                <div className="relative z-10 w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center">
                  <span className="text-white font-black text-xl">{member.initials}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-black text-lg leading-tight">{member.name}</h3>
                <p className="text-blue-vivid text-xs font-semibold tracking-wide mt-0.5 mb-3">{member.role}</p>
                <p className="text-black/55 text-sm leading-relaxed mb-4">{member.bio}</p>

                {/* Expertise tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {member.expertise.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 bg-blue-vivid/8 text-blue-deep border border-blue-vivid/15 rounded-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Social links */}
                <div className="flex gap-2">
                  <button
                    className="w-8 h-8 rounded-sm bg-light-gray hover:bg-blue-vivid/10 hover:text-blue-vivid text-black/40 flex items-center justify-center transition-colors duration-200"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin size={13} />
                  </button>
                  <button
                    className="w-8 h-8 rounded-sm bg-light-gray hover:bg-blue-vivid/10 hover:text-blue-vivid text-black/40 flex items-center justify-center transition-colors duration-200"
                    aria-label={`${member.name} Twitter`}
                  >
                    <Twitter size={13} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
