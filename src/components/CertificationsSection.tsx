import React from 'react';
import { Award, Brain, Cloud, Users, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';

export const CertificationsSection: React.FC = () => {
  const highlights = [
    {
      icon: <Cloud className="w-5 h-5 text-[var(--ink)]" />,
      sub: "Cloud & AI Credential",
      title: "Artificial Intelligence & Microsoft Azure Course",
      description: "Completed specialized training in AI workloads, Azure cognitive services, and enterprise cloud architecture.",
      date: "Verified Coursework",
      id: "AZ-AI-AZURE-VERIFIED"
    },
    {
      icon: <Brain className="w-5 h-5 text-[var(--ink)]" />,
      sub: "Machine Learning Credential",
      title: "Machine Learning Specialization",
      description: "Covered supervised and unsupervised algorithms, model evaluation, regression, classification, and heuristic pipelines.",
      date: "Accredited",
      id: "ML-COURSE-ACCREDITED"
    },
    {
      icon: <Users className="w-5 h-5 text-[var(--ink)]" />,
      sub: "Community Leadership",
      title: "Tech Community Builder & Mentor",
      description: "Dedicated to organizing learning sessions, sharing practical AI knowledge, and guiding students to build hands-on applications.",
      date: "Active Involvement",
      id: "COMMUNITY-LEADER"
    },
    {
      icon: <Award className="w-5 h-5 text-[var(--ink)]" />,
      sub: "Academic Standing",
      title: "Anna University CSE • CGPA 8.3",
      description: "Maintained a strong 8.3 CGPA at Aalim Muhammed Salegh College of Engineering with strong foundations in computing algorithms.",
      date: "Graduating 2029",
      id: "AMSCE-ACADEMIC"
    }
  ];

  return (
    <section id="achievements" className="py-24 relative bg-[var(--bg-alt)] border-t border-[var(--line)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10">
        
        {/* Section Head matching fahimio */}
        <div className="max-w-2xl space-y-3 mb-16">
          <span className="eyebrow">
            Achievements &amp; Highlights
          </span>
          <h2 className="text-3xl sm:text-4xl font-['Manrope'] font-extrabold text-[var(--ink)] tracking-tight">
            Moments worth mentioning
          </h2>
          <p className="text-base text-[var(--ink-soft)] leading-relaxed">
            Certifications, academic achievements, and community milestones across computing, AI, and cloud technology.
          </p>
        </div>

        {/* Highlights Grid matching fahimio achieve-grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-[var(--surface)] border border-[var(--line)] shadow-[var(--shadow-sm)] flex flex-col justify-between space-y-4 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[var(--tint-1)] border border-[var(--line)] flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-xs font-mono text-[var(--ink-faint)]">
                    {item.date}
                  </span>
                </div>

                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--ink-faint)] block mb-1">
                    {item.sub}
                  </span>
                  <h3 className="text-lg font-bold font-['Manrope'] text-[var(--ink)]">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[var(--ink-soft)] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--line)] flex items-center justify-between text-xs font-mono text-[var(--ink-faint)]">
                <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-sans font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verified Milestone
                </span>
                <span>ID: {item.id}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
