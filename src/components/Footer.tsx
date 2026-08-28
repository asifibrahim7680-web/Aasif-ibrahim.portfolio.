import React from 'react';
import { Terminal, Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onScrollToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToTop }) => {
  return (
    <footer className="bg-slate-100 dark:bg-[#060e20] border-t border-slate-200 dark:border-[#424754]/30 w-full py-12 text-slate-600 dark:text-[#c2c6d6] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2 font-['Outfit'] font-bold text-lg text-slate-900 dark:text-[#adc6ff]">
            <span>Aasif<span className="text-indigo-600 dark:text-indigo-400">.</span></span>
          </div>
          <p className="text-xs text-slate-500 dark:text-[#8c909f] font-['JetBrains_Mono']">
            © 2026 Aasif Ibrahim. All Rights Reserved.
          </p>
          <p className="text-[11px] text-slate-400 dark:text-[#424754] font-['JetBrains_Mono']">
            Designed & Engineered with technical precision.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-5 text-xs font-['JetBrains_Mono']">
          <a
            id="footer-github-link"
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-600 dark:hover:text-[#adc6ff] transition-colors flex items-center gap-1.5 text-slate-700 dark:text-[#c2c6d6]"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          <a
            id="footer-linkedin-link"
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-600 dark:hover:text-[#adc6ff] transition-colors flex items-center gap-1.5 text-slate-700 dark:text-[#c2c6d6]"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>

          <a
            id="footer-twitter-link"
            href={PERSONAL_INFO.twitter}
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-600 dark:hover:text-[#adc6ff] transition-colors flex items-center gap-1.5 text-slate-700 dark:text-[#c2c6d6]"
          >
            <Twitter className="w-4 h-4" />
            <span>Twitter</span>
          </a>
        </div>

        {/* Scroll to Top */}
        <button
          id="btn-scroll-to-top"
          onClick={onScrollToTop}
          className="p-2.5 rounded-xl bg-white dark:bg-[#131b2e] border border-slate-300 dark:border-[#424754]/40 hover:border-indigo-600 dark:hover:border-[#adc6ff] text-indigo-600 dark:text-[#adc6ff] hover:bg-slate-50 dark:hover:bg-[#171f33] transition-all duration-200 cursor-pointer shadow-sm"
          title="Scroll back to top"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>

      </div>
    </footer>
  );
};
