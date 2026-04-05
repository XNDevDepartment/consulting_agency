"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap, ArrowRight, Clock } from "lucide-react";

const plans = [
  {
    name: "Standard",
    price: "$3,000",
    period: "per engagement",
    tagline: "Full service delivery with structured review cycles.",
    responseTime: "48h",
    responseLabel: "Review & change response",
    gradient: "from-blue-deep to-navy",
    badge: null,
    features: [
      "Problem discovery & scoping",
      "Solution architecture",
      "Full development & integration",
      "Testing & deployment",
      "Documentation & team handover",
      "Change requests reviewed every 48 hours",
      "2 weeks of post-launch support",
    ],
    cta: "Get Started",
    dark: false,
  },
  {
    name: "Priority",
    price: "$5,000",
    period: "per engagement",
    tagline: "Faster iteration, tighter feedback loops, quicker delivery.",
    responseTime: "24h",
    responseLabel: "Review & change response",
    gradient: "from-blue-vivid to-blue-deep",
    badge: "Recommended",
    features: [
      "Problem discovery & scoping",
      "Solution architecture",
      "Full development & integration",
      "Testing & deployment",
      "Documentation & team handover",
      "Change requests reviewed every 24 hours",
      "4 weeks of post-launch support",
      "Weekly progress calls",
      "Performance review at 30 days",
    ],
    cta: "Get Started",
    dark: true,
  },
];

export default function Pricing() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="relative bg-dark py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-vivid/40 to-transparent" />

      <div className="absolute top-20 right-0 w-96 h-96 opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none">
          <circle cx="200" cy="0" r="120" stroke="#2D5BE3" strokeWidth="1" />
          <circle cx="200" cy="0" r="80" stroke="#2D5BE3" strokeWidth="1" />
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
            <Zap size={12} />
            Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Both plans include the full service. The difference is how fast we respond to your reviews and change requests.
          </p>
        </motion.div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true, margin: "-60px" }}
              className={`relative rounded-sm overflow-hidden flex flex-col ${
                plan.dark
                  ? "border border-blue-vivid/50 bg-blue-vivid/8"
                  : "border border-white/10 bg-white/3"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute top-0 right-0">
                  <div className="bg-blue-vivid text-white text-xs font-bold px-4 py-1.5 tracking-widest uppercase">
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Top accent bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${plan.gradient}`} />

              <div className="p-8 flex flex-col flex-1">
                {/* Name & tagline */}
                <div className="mb-8">
                  <h3 className="text-white font-black text-xl mb-2">{plan.name}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{plan.tagline}</p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-end gap-2">
                    <span className="text-5xl font-black text-white">{plan.price}</span>
                  </div>
                  <span className="text-white/40 text-sm mt-1 block">{plan.period}</span>
                </div>

                {/* Response time callout */}
                <div className={`flex items-center gap-3 px-4 py-3 rounded-sm mb-8 border ${
                  plan.dark
                    ? "bg-blue-vivid/20 border-blue-vivid/40"
                    : "bg-white/5 border-white/10"
                }`}>
                  <Clock size={18} className={plan.dark ? "text-blue-light shrink-0" : "text-white/50 shrink-0"} />
                  <div>
                    <p className={`text-xs font-semibold uppercase tracking-widest mb-0.5 ${plan.dark ? "text-blue-light" : "text-white/40"}`}>
                      {plan.responseLabel}
                    </p>
                    <p className={`text-lg font-black ${plan.dark ? "text-white" : "text-white/80"}`}>
                      Within {plan.responseTime}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 mb-8" />

                {/* Features */}
                <ul className="space-y-3 mb-10 flex-1">
                  {plan.features.map((feature, fi) => (
                    <li key={fi} className="flex items-start gap-3">
                      <CheckCircle2
                        size={16}
                        className={`mt-0.5 shrink-0 ${plan.dark ? "text-blue-light" : "text-blue-vivid/70"}`}
                      />
                      <span className={`text-sm leading-relaxed ${
                        feature.includes("24 hours") || feature.includes("48 hours")
                          ? "text-white font-semibold"
                          : "text-white/70"
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button
                  onClick={scrollToContact}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full flex items-center justify-center gap-2 py-4 font-semibold text-sm rounded-sm transition-all duration-200 ${
                    plan.dark
                      ? "bg-blue-vivid hover:bg-blue-light text-white glow-blue"
                      : "border border-white/20 hover:border-blue-vivid/60 hover:bg-blue-vivid/10 text-white/80 hover:text-white"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight size={15} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-white/30 text-sm mt-10"
        >
          Need a custom scope or larger engagement?{" "}
          <button
            onClick={scrollToContact}
            className="text-blue-light hover:text-white underline underline-offset-2 transition-colors duration-200"
          >
            Let&apos;s talk.
          </button>
        </motion.p>
      </div>
    </section>
  );
}
