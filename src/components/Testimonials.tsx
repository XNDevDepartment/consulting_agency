"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "They didn't just build software — they redesigned how our entire operations work. The AI integration they delivered became the core of our competitive advantage within months.",
    name: "David Hartmann",
    title: "CTO",
    company: "RetailCore Inc.",
    stars: 5,
    highlight: "Redesigned how our operations work",
    gradient: "from-blue-deep to-navy",
    initials: "DH",
  },
  {
    quote:
      "The automation pipeline they built for our finance team saves us over 40 hours of manual work every single week. The ROI was evident in the first month of deployment.",
    name: "Sarah Liu",
    title: "VP of Operations",
    company: "FinanceGroup Ltd.",
    stars: 5,
    highlight: "Saves 40+ hours every week",
    gradient: "from-blue-vivid to-blue-deep",
    initials: "SL",
  },
  {
    quote:
      "Best AI implementation partner we've worked with — and we've worked with several. NEXUS AI's approach starts with understanding, not selling. That made all the difference.",
    name: "Marcus Webb",
    title: "Director of Engineering",
    company: "TechCorp Systems",
    stars: 5,
    highlight: "Starts with understanding, not selling",
    gradient: "from-navy to-blue-vivid/70",
    initials: "MW",
  },
  {
    quote:
      "We went from 3 FTEs manually processing documents to a single automated pipeline. The solution handles edge cases we didn't even anticipate. Genuinely impressive engineering.",
    name: "Elena Morales",
    title: "Head of Finance Operations",
    company: "CapitalBridge Group",
    stars: 5,
    highlight: "From 3 FTEs to fully automated",
    gradient: "from-blue-light/60 to-blue-deep",
    initials: "EM",
  },
  {
    quote:
      "The architecture they designed for our AI product is something our internal team couldn't have built in twice the time. Deeply knowledgeable, always on time, never over-engineered.",
    name: "James Park",
    title: "Co-founder & CEO",
    company: "Veloci AI",
    stars: 5,
    highlight: "Never over-engineered",
    gradient: "from-blue-deep to-blue-vivid/60",
    initials: "JP",
  },
  {
    quote:
      "Our support ticket automation went from concept to production in 6 weeks with an 85% automation rate. The handover and documentation were as impressive as the build itself.",
    name: "Priya Nair",
    title: "Director of Customer Success",
    company: "SaaS Ventures",
    stars: 5,
    highlight: "85% automation rate in 6 weeks",
    gradient: "from-navy to-blue-vivid",
    initials: "PN",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="text-blue-light fill-blue-light" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative bg-off-white py-32 overflow-hidden">
      {/* Decorative top shape */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-blue-vivid/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-vivid/30 bg-blue-vivid/5 text-blue-deep text-xs font-semibold tracking-widest uppercase mb-6">
            Social Proof
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-black leading-tight mb-4">
            What Clients Say
          </h2>
          <p className="text-black/50 text-lg max-w-xl mx-auto">
            Don&apos;t take our word for it — here&apos;s what the companies we&apos;ve worked with have to say.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true, margin: "-60px" }}
              className="bg-white rounded-sm border border-light-gray p-8 relative overflow-hidden group hover:border-blue-light/30 hover:shadow-md transition-all duration-300"
            >
              {/* Large background quote mark */}
              <Quote
                size={80}
                className="absolute top-4 right-4 text-blue-deep/5 rotate-180"
              />

              {/* Stars */}
              <div className="mb-4">
                <StarRating count={t.stars} />
              </div>

              {/* Highlight callout */}
              <div className="inline-block px-2.5 py-1 bg-blue-vivid/8 border border-blue-vivid/15 text-blue-deep text-xs font-semibold rounded-sm mb-4">
                &ldquo;{t.highlight}&rdquo;
              </div>

              {/* Quote text */}
              <p className="text-black/65 text-sm leading-relaxed mb-6 relative z-10">
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center shrink-0`}
                >
                  <span className="text-white font-bold text-xs">{t.initials}</span>
                </div>
                <div>
                  <p className="text-black font-semibold text-sm">{t.name}</p>
                  <p className="text-black/45 text-xs">
                    {t.title} · {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t border-light-gray flex flex-wrap justify-center gap-6 sm:gap-12 text-center"
        >
          {[
            { value: "5.0", label: "Average Rating" },
            { value: "30+", label: "Happy Clients" },
            { value: "100%", label: "On-time Delivery" },
            { value: "98%", label: "Repeat Engagement" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-black text-gradient-blue">{stat.value}</div>
              <div className="text-xs text-black/40 mt-1 tracking-widest uppercase">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
