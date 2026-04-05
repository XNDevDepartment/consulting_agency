"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Mail, Clock, ArrowRight, CheckCircle2, Loader2, MessageSquare } from "lucide-react";

type FormValues = {
  name: string;
  company: string;
  email: string;
  service: string;
  message: string;
};

const infoItems = [
  {
    icon: Mail,
    label: "Email us directly",
    value: "hello@nexusai.co",
  },
  {
    icon: Clock,
    label: "Response time",
    value: "Within 24 business hours",
  },
  {
    icon: MessageSquare,
    label: "What to expect",
    value: "A 30-min discovery call to understand your problem",
  },
];

const processSteps = [
  "We review your message and context",
  "Schedule a free 30-min discovery call",
  "Send you a scoped proposal within 5 days",
  "Kick off with a defined statement of work",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1200));
    console.log("Form submitted:", data);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative bg-navy py-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-vivid/40 to-transparent" />

      {/* Floating decoration */}
      <div className="absolute bottom-0 right-0 w-80 h-80 opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none">
          <circle cx="200" cy="200" r="100" stroke="#2D5BE3" strokeWidth="1" />
          <circle cx="200" cy="200" r="70" stroke="#2D5BE3" strokeWidth="1" />
          <circle cx="200" cy="200" r="40" stroke="#2D5BE3" strokeWidth="1" fill="#1B2CC1" fillOpacity="0.5" />
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
            Start Here
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            Let&apos;s Talk About{" "}
            <span className="text-gradient-blue">Your Problem</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Tell us what you&apos;re trying to solve. We&apos;ll tell you honestly whether we can help — and how.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — info panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="space-y-6 mb-10">
              {infoItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-sm bg-blue-vivid/15 border border-blue-vivid/25 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-blue-light" />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-white/80 text-sm">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* What happens next */}
            <div className="card-glass rounded-sm p-6">
              <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-5">
                What happens next
              </p>
              <div className="space-y-4">
                {processSteps.map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-vivid/20 border border-blue-vivid/30 flex items-center justify-center shrink-0 text-blue-light text-xs font-black">
                      {i + 1}
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed pt-0.5">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="card-glass rounded-sm p-10 text-center"
              >
                <CheckCircle2 size={48} className="text-blue-light mx-auto mb-4" />
                <h3 className="text-white font-bold text-2xl mb-2">Message Received</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Thanks for reaching out. We&apos;ll review your message and be in touch within 24 business hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-white/50 uppercase tracking-widest mb-2">
                      Name *
                    </label>
                    <input
                      {...register("name", { required: "Name is required" })}
                      placeholder="Your full name"
                      className="form-input w-full px-4 py-3 rounded-sm text-sm"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-white/50 uppercase tracking-widest mb-2">
                      Company
                    </label>
                    <input
                      {...register("company")}
                      placeholder="Your company"
                      className="form-input w-full px-4 py-3 rounded-sm text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/50 uppercase tracking-widest mb-2">
                    Email *
                  </label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Please enter a valid email",
                      },
                    })}
                    type="email"
                    placeholder="you@company.com"
                    className="form-input w-full px-4 py-3 rounded-sm text-sm"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/50 uppercase tracking-widest mb-2">
                    Service Interest *
                  </label>
                  <select
                    {...register("service", { required: "Please select a service" })}
                    className="form-input w-full px-4 py-3 rounded-sm text-sm appearance-none"
                    style={{ colorScheme: "dark" }}
                  >
                    <option value="" style={{ background: "#0A0F2C" }}>Select a service...</option>
                    <option value="ai-integration" style={{ background: "#0A0F2C" }}>AI Integration & Development</option>
                    <option value="automation" style={{ background: "#0A0F2C" }}>Enterprise Process Automation</option>
                    <option value="both" style={{ background: "#0A0F2C" }}>Both / Not sure yet</option>
                  </select>
                  {errors.service && (
                    <p className="text-red-400 text-xs mt-1">{errors.service.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/50 uppercase tracking-widest mb-2">
                    Tell us about your problem *
                  </label>
                  <textarea
                    {...register("message", {
                      required: "Please describe your problem",
                      minLength: { value: 20, message: "Please provide more detail (at least 20 chars)" },
                    })}
                    rows={5}
                    placeholder="Describe the problem you're trying to solve, your current situation, and any constraints..."
                    className="form-input w-full px-4 py-3 rounded-sm text-sm resize-none"
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full flex items-center justify-center gap-2 py-4 bg-blue-vivid hover:bg-blue-light disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm rounded-sm transition-colors duration-200 glow-blue"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight size={16} />
                    </>
                  )}
                </motion.button>

                <p className="text-white/25 text-xs text-center">
                  No spam. No cold follow-ups. Just a genuine conversation about your problem.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
