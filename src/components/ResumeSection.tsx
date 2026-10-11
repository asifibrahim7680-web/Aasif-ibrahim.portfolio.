import React from 'react';
import { FileText, Download, Printer, CheckCircle2, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeSectionProps {
  onOpenResume: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResume }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="py-24 relative bg-[var(--bg-alt)] border-t border-[var(--line)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center p-8 sm:p-12 rounded-3xl bg-[var(--surface)] border border-[var(--line)] shadow-[var(--shadow-lg)]">
          
          {/* Left Text & CTAs */}
          <div className="lg:col-span-6 space-y-6">
            <span className="eyebrow">
              Curriculum Vitae
            </span>

            <h2 className="text-3xl sm:text-4xl font-['Manrope'] font-extrabold text-[var(--ink)] tracking-tight leading-tight">
              Want to know more about my journey?
            </h2>

            <p className="text-base text-[var(--ink-soft)] leading-relaxed">
              Take a look at my verified resume to explore my coursework, technical skills across AI and cloud computing, featured software projects, and community initiatives.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={onOpenResume}
                className="btn primary"
              >
                <FileText className="w-4 h-4" />
                <span>View Full Resume</span>
              </button>

              <button
                onClick={handlePrint}
                className="btn secondary"
              >
                <Download className="w-4 h-4" />
                <span>Download / Print PDF</span>
              </button>
            </div>
          </div>

          {/* Right Preview Frame matching fahimio */}
          <div className="lg:col-span-6 relative">
            
            {/* macOS Window Frame */}
            <div className="code-window border border-[var(--line)] shadow-2xl relative overflow-hidden bg-[var(--surface)]">
              {/* Window Bar */}
              <div className="code-titlebar flex items-center justify-between bg-[var(--bg-alt)] border-b border-[var(--line)]">
                <div className="flex items-center gap-1.5">
                  <span className="code-dot r" />
                  <span className="code-dot y" />
                  <span className="code-dot g" />
                </div>
                <span className="text-xs font-mono font-medium text-[var(--ink-soft)]">
                  Aasif_Ibrahim_Resume.pdf
                </span>
                <span className="text-[10px] font-mono text-[var(--ink-faint)]">100%</span>
              </div>

              {/* Realistic Document Paper View */}
              <div className="p-6 sm:p-8 bg-white text-slate-900 text-xs font-sans space-y-4 max-h-[380px] overflow-y-auto select-none">
                <div className="border-b border-slate-200 pb-3">
                  <div className="text-base font-bold font-['Manrope'] text-slate-950 uppercase tracking-tight">
                    {PERSONAL_INFO.name}
                  </div>
                  <div className="text-[11px] text-slate-600 mt-0.5">
                    {PERSONAL_INFO.role}
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono mt-1 flex flex-wrap gap-x-3">
                    <span>{PERSONAL_INFO.location}</span>
                    <span>{PERSONAL_INFO.phone}</span>
                    <span>{PERSONAL_INFO.email}</span>
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-bold text-slate-800 uppercase tracking-wider mb-1">
                    Education
                  </div>
                  <div className="font-semibold text-slate-900">
                    B.E. Computer Science &amp; Engineering • Anna University
                  </div>
                  <div className="text-[11px] text-slate-600">
                    Aalim Muhammed Salegh College of Engineering — CGPA: 8.3
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-bold text-slate-800 uppercase tracking-wider mb-1">
                    Featured Projects
                  </div>
                  <div className="font-semibold text-slate-900">
                    MedVault • Healthcare &amp; Medical Records Platform
                  </div>
                  <div className="text-[10px] text-slate-600">
                    Bean &amp; Byte AI Coffee Shop • TypeScript &amp; Heuristic AI
                  </div>
                  <div className="text-[10px] text-slate-600">
                    Learn Track (Foundation AI) • Educational Technology Platform
                  </div>
                  <div className="text-[10px] text-slate-600">
                    Daily Attendance System • Digital College Attendance Passes
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-bold text-slate-800 uppercase tracking-wider mb-1">
                    Certifications &amp; Skills
                  </div>
                  <div className="text-[10px] text-slate-600">
                    Microsoft Azure &amp; Artificial Intelligence • Machine Learning Specialization • TypeScript • React
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Up To Date Badge matching fahimio */}
            <div className="absolute -bottom-3 -right-2 px-3 py-1 rounded-full bg-[var(--surface)] border border-[var(--line)] shadow-md flex items-center gap-1.5 text-xs font-medium text-[var(--ink)]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Up to date</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
