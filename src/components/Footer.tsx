"use client";

import { Linkedin, Twitter, Github, ArrowUpRight } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "AI Integration", href: "#services" },
    { label: "Process Automation", href: "#services" },
    { label: "Architecture Consulting", href: "#services" },
  ],
  Company: [
    { label: "About", href: "#about" },
    { label: "Team", href: "#team" },
    { label: "Projects", href: "#projects" },
    { label: "Values", href: "#values" },
  ],
  Connect: [
    { label: "Contact Us", href: "#contact" },
    { label: "hello@nexusai.co", href: "mailto:hello@nexusai.co" },
  ],
};

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    if (href.startsWith("mailto:")) return;
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black border-t border-blue-deep/20 pt-16 pb-8 overflow-hidden">
      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-deep/50 to-transparent" />

      {/* Subtle grid */}
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-vivid rounded-sm flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-light to-blue-deep" />
                <span className="relative text-white font-black text-sm tracking-tighter">N</span>
              </div>
              <span className="text-white font-bold text-lg tracking-wide">
                NEXUS<span className="text-blue-light">AI</span>
              </span>
            </div>
            <p className="text-white/45 text-sm leading-relaxed max-w-xs mb-6">
              Intelligence that moves business forward. We build AI-powered software and
              enterprise automation solutions that deliver measurable results.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-8 h-8 rounded-sm bg-white/5 hover:bg-blue-vivid/20 border border-white/8 hover:border-blue-vivid/30 text-white/40 hover:text-blue-light flex items-center justify-center transition-all duration-200"
                  >
                    <Icon size={14} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-4">
                {group}
              </p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("mailto:") ? (
                      <a
                        href={link.href}
                        className="text-white/55 hover:text-white text-sm flex items-center gap-1 group transition-colors duration-200"
                      >
                        {link.label}
                        <ArrowUpRight
                          size={12}
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      </a>
                    ) : (
                      <button
                        onClick={() => handleNavClick(link.href)}
                        className="text-white/55 hover:text-white text-sm transition-colors duration-200 text-left"
                      >
                        {link.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            &copy; {new Date().getFullYear()} NEXUS AI. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <button
                key={item}
                className="text-white/25 hover:text-white/50 text-xs transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
