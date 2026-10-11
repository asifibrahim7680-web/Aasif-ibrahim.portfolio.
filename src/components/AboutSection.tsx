import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutSectionProps {
  onOpenResume?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResume }) => {
  return (
    <section id="about" className="py-24 relative border-t border-[var(--line)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10 space-y-8">
        
        {/* Eyebrow */}
        <div>
          <span className="eyebrow">
            About Me
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-['Manrope'] font-extrabold text-[var(--ink)] tracking-tight leading-tight">
          A student who prefers building to just reading about it
        </h2>

        {/* Editorial Narrative */}
        <div className="space-y-5 text-base sm:text-lg text-[var(--ink-soft)] leading-relaxed">
          <p>
            I am a Computer Science &amp; Engineering student at <span className="text-[var(--ink)] font-semibold">{PERSONAL_INFO.college}</span> (<span className="text-[var(--ink)] font-semibold">{PERSONAL_INFO.university}</span>) with an academic CGPA of <span className="text-[var(--ink)] font-semibold">{PERSONAL_INFO.cgpa}</span>. I enjoy turning abstract concepts into working, responsive software—from intelligent web applications to structured educational tools.
          </p>
          <p>
            My technical focus centers around Artificial Intelligence, Machine Learning, Microsoft Azure cloud computing, and modern full-stack web engineering with TypeScript. I believe in hands-on development as the ultimate teacher: designing systems, debugging edge cases, and shipping usable digital products.
          </p>
          <p>
            Beyond writing code, I am dedicated to community building—sharing practical knowledge about AI and cloud tooling, organizing workshops, and encouraging fellow students to become confident technology builders.
          </p>
        </div>

        {/* 4 Info Cards Grid matching fahimio */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-4">
          <div className="info-card">
            <div className="label">Degree &amp; Program</div>
            <div className="value">B.E. Computer Science &amp; Eng.</div>
          </div>

          <div className="info-card">
            <div className="label">Core Specialization</div>
            <div className="value">AI &amp; Cloud Systems</div>
          </div>

          <div className="info-card">
            <div className="label">Academic Standing</div>
            <div className="value">CGPA 8.3 • Anna University</div>
          </div>

          <div className="info-card">
            <div className="label">Location Base</div>
            <div className="value">Chennai, Tamil Nadu, India</div>
          </div>
        </div>

        {/* Action link */}
        <div className="pt-2 flex flex-wrap items-center gap-4">
          <a href="#contact" className="btn primary">
            Let's Connect
          </a>
          {onOpenResume && (
            <button
              onClick={onOpenResume}
              className="btn secondary"
            >
              <FileText className="w-4 h-4 text-[var(--ink-soft)]" />
              <span>View Full Verified Resume</span>
            </button>
          )}
        </div>

      </div>
    </section>
  );
};
