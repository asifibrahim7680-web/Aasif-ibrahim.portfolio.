import React from 'react';
import { MapPin, GraduationCap, Award, Calendar, BookOpen } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  const edu = EDUCATION_DATA[0];

  return (
    <section id="education" className="py-24 relative border-t border-[var(--line)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10">
        
        {/* Centered Section Head matching fahimio */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-16">
          <span className="eyebrow mx-auto">
            Education
          </span>
          <h2 className="text-3xl sm:text-4xl font-['Manrope'] font-extrabold text-[var(--ink)] tracking-tight">
            Academic background
          </h2>
          <p className="text-base text-[var(--ink-soft)] leading-relaxed">
            Foundational computer science, algorithm theory, and engineering studies at Anna University.
          </p>
        </div>

        {/* Education Timeline Card matching fahimio */}
        <div className="max-w-3xl mx-auto relative pl-6 sm:pl-8 border-l-2 border-[var(--line)] space-y-8">
          
          {/* Timeline Dot */}
          <div className="absolute -left-[9px] top-8 w-4 h-4 rounded-full bg-[var(--ink)] border-4 border-[var(--surface)] shadow-xs" />

          {/* Education Card */}
          <div className="p-7 sm:p-9 rounded-2xl bg-[var(--surface)] border border-[var(--line)] shadow-[var(--shadow-md)] space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[var(--tint-1)] text-[var(--ink)] border border-[var(--line)]">
                Undergraduate
              </span>
              <span className="text-xs font-mono text-[var(--ink-faint)]">
                2025 — 2029
              </span>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold font-['Manrope'] text-[var(--ink)]">
                Bachelor of Engineering — Computer Science &amp; Engineering
              </h3>
              <div className="text-base font-semibold text-[var(--ink-soft)] mt-1">
                Aalim Muhammed Salegh College of Engineering (Anna University)
              </div>
            </div>

            {/* Meta Row */}
            <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-[var(--ink-soft)] pt-2 border-t border-[var(--line)]">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[var(--ink-faint)]" />
                <span>Avadi, Chennai, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-[var(--ink-faint)]" />
                <span>Expected Graduation: 2029</span>
              </div>
              <div className="flex items-center gap-1.5 font-semibold text-[var(--ink)]">
                <Award className="w-4 h-4 text-amber-500" />
                <span>Current CGPA: 8.3</span>
              </div>
            </div>

            {/* Academic Highlights */}
            <div className="pt-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--ink-faint)] block mb-2">
                Coursework &amp; Computing Focus
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-[13px] text-[var(--ink-soft)]">
                {edu.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[var(--ink)] font-bold">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
