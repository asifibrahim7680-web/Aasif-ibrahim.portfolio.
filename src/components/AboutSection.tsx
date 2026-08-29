import React, { useState } from 'react';
import { 
  GraduationCap, 
  Rocket, 
  BrainCircuit, 
  Users, 
  User, 
  CheckCircle2, 
  FileText, 
  Award, 
  Terminal, 
  Code2, 
  Sparkles, 
  Layers, 
  MapPin, 
  Calendar, 
  ArrowUpRight,
  BookOpen,
  HeartHandshake,
  Cpu,
  Check
} from 'lucide-react';
import { PERSONAL_INFO, CORE_STRENGTHS, COMMUNITY_INVOLVEMENT } from '../data/portfolioData';

interface AboutSectionProps {
  onOpenResume?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResume }) => {
  const [activeStrength, setActiveStrength] = useState<string | null>(null);

  return (
    <section id="about" className="py-20 scroll-mt-20 border-t border-slate-200 dark:border-[#334155]/40 relative bg-white dark:bg-[#070b16] transition-colors duration-300">
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300 text-xs font-['JetBrains_Mono'] mb-3">
              <User className="w-3.5 h-3.5" />
              <span>Architectural Biography & Mission</span>
            </div>
            <h2 className="font-['Outfit'] font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-[#dae2fd] tracking-tight">
              About & Engineering Philosophy
            </h2>
          </div>

          {onOpenResume && (
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-[#131b2e] dark:hover:bg-[#1e293b] text-slate-800 dark:text-white border border-slate-200 dark:border-[#334155]/60 text-xs font-['Outfit'] font-bold transition-all cursor-pointer shadow-sm"
            >
              <FileText className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>View Full Verified Resume</span>
            </button>
          )}
        </div>

        {/* Bento Grid Layout (4 distinct architectural cells) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Cell 1 (Span 7): Vision, Technical Core & Purpose */}
          <div className="md:col-span-7 bento-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-[#334155]/50">
                <span className="text-xs font-['JetBrains_Mono'] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider flex items-center gap-2">
                  <Terminal className="w-4 h-4" />
                  Technical Focus & Vision
                </span>
                <span className="text-xs font-['JetBrains_Mono'] text-slate-400">Anna Univ • CSE</span>
              </div>

              <p className="text-slate-700 dark:text-[#dae2fd] font-medium text-base leading-relaxed">
                {PERSONAL_INFO.aboutText1}
              </p>

              <p className="text-slate-600 dark:text-[#94a3b8] text-sm leading-relaxed">
                {PERSONAL_INFO.aboutText2}
              </p>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#070b16] border border-slate-200 dark:border-[#334155]/60 text-xs font-['JetBrains_Mono'] text-slate-700 dark:text-[#c2c6d6] space-y-2">
                <div className="font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  Primary Career Objective:
                </div>
                <p className="leading-relaxed">
                  {PERSONAL_INFO.careerObjective}
                </p>
              </div>
            </div>

            {/* Core Values Bullets */}
            <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-200 dark:border-[#334155]/50 text-xs font-['JetBrains_Mono'] text-slate-700 dark:text-[#dae2fd]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Strict TypeScript Code</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Azure & AI Deployment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>EdTech & Student Tools</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Open Community Builder</span>
              </div>
            </div>
          </div>

          {/* Cell 2 (Span 5): Academic Excellence & Progression Gauge */}
          <div className="md:col-span-5 bento-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-[#334155]/50 mb-5">
                <span className="text-xs font-['JetBrains_Mono'] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  Academic Mastery
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 text-xs font-['JetBrains_Mono'] font-bold border border-emerald-300 dark:border-emerald-800">
                  8.3 CGPA
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-['Outfit'] font-extrabold text-2xl text-slate-900 dark:text-white">
                    B.E. Computer Science
                  </h3>
                  <p className="text-xs font-['JetBrains_Mono'] text-indigo-600 dark:text-indigo-400 mt-1">
                    Aalim Muhammed Salegh College of Engineering
                  </p>
                  <p className="text-xs text-slate-500 dark:text-[#8c909f]">Affiliated with Anna University</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#070b16] border border-slate-200 dark:border-[#334155]/60 space-y-2">
                  <div className="flex justify-between text-xs font-['JetBrains_Mono']">
                    <span className="text-slate-500 dark:text-[#8c909f]">Undergraduate Timeline</span>
                    <span className="text-indigo-600 dark:text-indigo-400 font-bold">2025 - 2029</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full w-[35%]" />
                  </div>
                  <div className="flex justify-between text-[10px] font-['JetBrains_Mono'] text-slate-400">
                    <span>Year 1 Foundation</span>
                    <span>Expected: 2029</span>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs text-slate-600 dark:text-[#94a3b8]">
                  <div className="flex items-center gap-2 font-['JetBrains_Mono']">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>Avadi, Chennai, Tamil Nadu, India</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-[#334155]/50 flex items-center justify-between text-xs font-['JetBrains_Mono']">
              <span className="text-slate-500">Degree Status:</span>
              <span className="text-slate-900 dark:text-white font-bold">In Active Study</span>
            </div>
          </div>

          {/* Cell 3 (Span 6): Community & Knowledge Sharing Beacon */}
          <div className="md:col-span-6 bento-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-[#334155]/50">
                <span className="text-xs font-['JetBrains_Mono'] font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Community Leadership & Workshops
                </span>
                <span className="text-xs font-['JetBrains_Mono'] text-purple-500 font-bold">Active</span>
              </div>

              <h3 className="font-['Outfit'] font-bold text-xl text-slate-900 dark:text-white">
                Sharing Emerging Technology with Student Builders
              </h3>

              <div className="space-y-2.5">
                {COMMUNITY_INVOLVEMENT.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-[#c2c6d6]">
                    <div className="w-5 h-5 rounded-full bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800/60 flex items-center justify-center flex-shrink-0 mt-0.5 text-purple-600 dark:text-purple-400">
                      <HeartHandshake className="w-3 h-3" />
                    </div>
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-purple-50/50 dark:bg-[#120d26] border border-purple-200 dark:border-purple-900/40 text-xs font-['JetBrains_Mono'] text-purple-800 dark:text-purple-300">
              ⚡ <em>Organizing student learning activities and AI technology demonstrations in Chennai.</em>
            </div>
          </div>

          {/* Cell 4 (Span 6): Core Strengths & Interactive Competency Chips */}
          <div className="md:col-span-6 bento-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-[#334155]/50">
                <span className="text-xs font-['JetBrains_Mono'] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider flex items-center gap-2">
                  <Cpu className="w-4 h-4" />
                  Core Strengths Matrix
                </span>
                <span className="text-xs font-['JetBrains_Mono'] text-slate-400">Click to Inspect</span>
              </div>

              <h3 className="font-['Outfit'] font-bold text-xl text-slate-900 dark:text-white">
                Engineering Discipline & Soft Skills
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {CORE_STRENGTHS.map((strength) => (
                  <button
                    key={strength}
                    onClick={() => setActiveStrength(activeStrength === strength ? null : strength)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-['JetBrains_Mono'] font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                      activeStrength === strength
                        ? 'bg-indigo-600 text-white shadow-md scale-105'
                        : 'bg-slate-100 dark:bg-[#070b16] text-slate-700 dark:text-[#dae2fd] border border-slate-200 dark:border-[#334155]/60 hover:border-indigo-500'
                    }`}
                  >
                    <span>{strength}</span>
                    {activeStrength === strength && <Check className="w-3.5 h-3.5" />}
                  </button>
                ))}
              </div>

              {activeStrength && (
                <div className="p-3.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-xs font-['JetBrains_Mono'] text-indigo-700 dark:text-indigo-300 animate-fadeIn">
                  ✓ Verified engineering attribute applied throughout Aasif's academic and practical software projects.
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-[#334155]/50 text-xs font-['JetBrains_Mono'] text-slate-500 dark:text-[#8c909f]">
              <span>Languages Fluent: </span>
              <strong className="text-slate-800 dark:text-white">English (Professional), Tamil (Native)</strong>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
