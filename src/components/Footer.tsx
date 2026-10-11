import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Phone, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onScrollToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToTop }) => {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--surface)] text-[var(--ink)] py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 space-y-12">
        
        {/* Top Tier matching fahimio */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Left Brand & Tagline */}
          <div className="md:col-span-6 space-y-3">
            <a href="#hero" className="inline-block text-xl font-extrabold font-['Manrope'] tracking-tight text-[var(--ink)]">
              Aasif Ibrahim<span className="text-[var(--ink-faint)]">.</span>
            </a>
            <p className="text-xs sm:text-sm text-[var(--ink-soft)] leading-relaxed max-w-sm">
              Computer Science &amp; Engineering student at Anna University building practical AI, cloud systems, and web software, one project at a time.
            </p>
          </div>

          {/* Right Navigation & Connect Links */}
          <div className="md:col-span-6 grid grid-cols-2 gap-8 text-xs sm:text-sm">
            <div>
              <h4 className="font-bold text-[var(--ink)] font-['Manrope'] mb-3 uppercase tracking-wider text-[11px]">
                Navigate
              </h4>
              <ul className="space-y-2 text-[var(--ink-soft)]">
                <li><a href="#about" className="hover:text-[var(--ink)] transition-colors">About</a></li>
                <li><a href="#skills" className="hover:text-[var(--ink)] transition-colors">Skills</a></li>
                <li><a href="#projects" className="hover:text-[var(--ink)] transition-colors">Projects</a></li>
                <li><a href="#interactive-lab" className="hover:text-[var(--ink)] transition-colors">Interactive Lab</a></li>
                <li><a href="#education" className="hover:text-[var(--ink)] transition-colors">Education</a></li>
                <li><a href="#resume" className="hover:text-[var(--ink)] transition-colors">Resume</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[var(--ink)] font-['Manrope'] mb-3 uppercase tracking-wider text-[11px]">
                Connect
              </h4>
              <ul className="space-y-2 text-[var(--ink-soft)]">
                <li>
                  <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--ink)] transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--ink)] transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-[var(--ink)] transition-colors">
                    Email
                  </a>
                </li>
                <li>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-[var(--ink)] transition-colors">
                    Phone
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Tier matching fahimio */}
        <div className="pt-8 border-t border-[var(--line)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--ink-faint)]">
          <div>
            Designed &amp; Built by Aasif Ibrahim · © 2026. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--ink)] transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--ink)] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="hover:text-[var(--ink)] transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={onScrollToTop}
              className="w-8 h-8 rounded-full border border-[var(--line)] flex items-center justify-center hover:border-[var(--ink)] hover:text-[var(--ink)] transition-colors cursor-pointer"
              title="Scroll to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
