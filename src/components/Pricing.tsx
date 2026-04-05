"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Process Automation",
    price: "$3,000",
    period: "per engagement",
    tagline: "Automate the workflows slowing your team down.",
    gradient: "from-blue-deep to-navy",
    badge: null,
    features: [
      "Full process audit & mapping",
      "Automation opportunity analysis",
      "Up to 3 automated workflows",
      "Integration with your existing tools",
      "Testing & deployment",
      "Documentation & team handover",
      "2 weeks of post-launch support",
    ],
    cta: "Start Automating",
    dark: false,
  },
  {
    name: "AI Integration",
    price: "$5,000",
    period: "per engagement",
    tagline: "Embed AI into your product or operations end-to-end.",
    gradient: "from-blue-vivid to-blue-deep",
    badge: "Most Popular",
    features: [
      "Problem discovery & scoping",
      "Full solution architecture",
      "AI model selection & configuration",
      "Custom development & integration",
      "Testing, deployment & monitoring setup",
      "Documentation & team handover",
      "4 weeks of post-launch support",
      "Performance review at 30 days",
    ],
    cta: "Start Building",
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

      {/* Background decoration */}
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
            Two focused services. Fixed-price engagements. No retainers, no hidden fees — just a clear scope and a defined outcome.
          </p>
        </motion.div>

        {/* Plans grid */}
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
              {/* Popular badge */}
              {plan.badge && (
                <div className="absolute top-0 right-0">
                  <div className="bg-blue-vivid text-white text-xs font-bold px-4 py-1.5 tracking-widest uppercase">
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Gradient top bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${plan.gradient}`} />

              <div className="p-8 flex flex-col flex-1">
                {/* Plan name & tagline */}
                <div className="mb-8">
                  <h3 className="text-white font-black text-xl mb-2">{plan.name}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{plan.tagline}</p>
                </div>

                {/* Price */}
                <div className="mb-8 pb-8 border-b border-white/10">
                  <div className="flex items-end gap-2">
                    <span className="text-5xl font-black text-white">{plan.price}</span>
                  </div>
                  <span className="text-white/40 text-sm mt-1 block">{plan.period}</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-10 flex-1">
                  {plan.features.map((feature, fi) => (
                    <li key={fi} className="flex items-start gap-3">
                      <CheckCircle2
                        size={16}
                        className={`mt-0.5 shrink-0 ${plan.dark ? "text-blue-light" : "text-blue-vivid/70"}`}
                      />
                      <span className="text-white/70 text-sm leading-relaxed">{feature}</span>
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
          Need something larger or more complex?{" "}
          <button
            onClick={scrollToContact}
            className="text-blue-light hover:text-white underline underline-offset-2 transition-colors duration-200"
          >
            Let&apos;s talk about a custom scope.
          </button>
        </motion.p>
      </div>
    </section>
  );
}
