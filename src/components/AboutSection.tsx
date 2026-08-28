import React from 'react';
import { GraduationCap, Rocket, BrainCircuit, Users, User, CheckCircle2, FileText, Award, Camera } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { usePhoto } from '../context/PhotoContext';

interface AboutSectionProps {
  onOpenResume?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResume }) => {
  const { photoUrl, openUploadModal } = usePhoto();
  const statCards = [
    {
      title: "CGPA 8.3",
      subtitle: "Aalim Muhammed Salegh (Anna Univ)",
      icon: GraduationCap,
      tag: "Academic Excellence"
    },
    {
      title: "3+ Projects",
      subtitle: "TypeScript, AI & EdTech Solutions",
      icon: Rocket,
      tag: "Practical Engineering"
    },
    {
      title: "AI & Azure",
      subtitle: "Machine Learning & Cloud Specialization",
      icon: BrainCircuit,
      tag: "Technology Stack"
    },
    {
      title: "Community Builder",
      subtitle: "Workshops & Peer Mentoring",
      icon: Users,
      tag: "Community Leadership"
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 scroll-mt-20 border-t border-slate-200 dark:border-[#424754]/20 relative bg-white dark:bg-transparent">
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Section Header with Divider */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-[#adc6ff]/10 border border-indigo-200 dark:border-[#adc6ff]/30 flex items-center justify-center text-indigo-600 dark:text-[#adc6ff]">
              <User className="w-4 h-4" />
            </div>
            <h2 className="font-['Outfit'] font-bold text-2xl sm:text-3xl text-slate-900 dark:text-[#dae2fd]">
              About Me
            </h2>
          </div>
          <div className="h-px bg-slate-200 dark:bg-[#424754]/40 flex-1 ml-2" />

          {onOpenResume && (
            <button
              onClick={onOpenResume}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 border border-indigo-200 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300 text-xs font-['Outfit'] font-semibold transition-all cursor-pointer shadow-sm"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Full Resume</span>
            </button>
          )}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Text Description Column */}
          <div className="lg:col-span-6 space-y-4 text-slate-600 dark:text-[#c2c6d6] leading-relaxed text-base sm:text-lg">
            <p className="p-4 rounded-xl bg-slate-50 dark:bg-[#131b2e] border border-slate-200 dark:border-[#424754]/30 text-slate-800 dark:text-[#dae2fd] font-medium">
              {PERSONAL_INFO.aboutText1}
            </p>
            <p>
              {PERSONAL_INFO.aboutText2}
            </p>
            <p className="text-sm text-slate-500 dark:text-[#8c909f]">
              {PERSONAL_INFO.aboutText3}
            </p>

            {/* Quick engineering values */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-['JetBrains_Mono'] text-slate-700 dark:text-[#dae2fd]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-[#adc6ff] flex-shrink-0" />
                <span>Clean TypeScript code</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-[#adc6ff] flex-shrink-0" />
                <span>AI & Cloud integration</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-[#adc6ff] flex-shrink-0" />
                <span>Community knowledge sharing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-[#adc6ff] flex-shrink-0" />
                <span>Hands-on project builder</span>
              </div>
            </div>

            {onOpenResume && (
              <div className="pt-3">
                <button
                  onClick={onOpenResume}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-['Outfit'] text-sm font-semibold transition-all duration-200 shadow-sm active:scale-95 cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>View & Download Verified Resume</span>
                </button>
              </div>
            )}
          </div>

          {/* Bento Stats & Profile Column */}
          <div className="lg:col-span-6 space-y-4">
            {/* Profile Overview Card */}
            <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-indigo-50/80 via-white to-purple-50/50 dark:from-[#131b2e] dark:via-[#171f33] dark:to-[#1a1c2e] border border-indigo-100 dark:border-[#424754]/50 flex items-center gap-4 shadow-sm">
              <div 
                onClick={openUploadModal}
                title="Click to change or upload real photo"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 border-indigo-500/40 shadow-sm flex-shrink-0 relative group cursor-pointer"
              >
                <img
                  src={photoUrl}
                  alt={PERSONAL_INFO.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity text-white">
                  <Camera className="w-5 h-5" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-['Outfit'] font-bold text-base sm:text-lg text-slate-900 dark:text-white truncate">
                    {PERSONAL_INFO.name}
                  </h3>
                  <span className="px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 text-[10px] font-['JetBrains_Mono'] font-bold border border-indigo-200 dark:border-indigo-800/50">
                    CGPA 8.3
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-[#c2c6d6] font-['JetBrains_Mono'] mt-0.5 truncate">
                  B.E. CSE • Aalim Muhammed Salegh
                </p>
                <p className="text-[11px] text-slate-500 dark:text-[#8c909f] mt-1 line-clamp-1">
                  AI • Machine Learning • Azure Cloud • Community
                </p>
              </div>
            </div>

            {/* 4 Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {statCards.map((stat, idx) => {
                const IconComp = stat.icon;
                return (
                  <div
                    key={idx}
                    className={`p-4 sm:p-5 rounded-xl bg-white dark:bg-[#131b2e]/80 border border-slate-200 dark:border-[#424754]/40 hover:border-indigo-500 dark:hover:border-indigo-400 shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2 rounded-lg bg-indigo-50 dark:bg-[#0b1326] border border-indigo-100 dark:border-indigo-900/50 text-indigo-600 dark:text-indigo-400">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <span className="font-['JetBrains_Mono'] text-xs text-slate-400 dark:text-[#8c909f] font-semibold">0{idx + 1}</span>
                    </div>

                    <div>
                      <h3 className="font-['Outfit'] font-bold text-base sm:text-lg text-slate-900 dark:text-[#dae2fd] group-hover:text-indigo-600 dark:group-hover:text-[#adc6ff] transition-colors">
                        {stat.title}
                      </h3>
                      <p className="font-['JetBrains_Mono'] text-xs text-slate-500 dark:text-[#8c909f] mt-1">
                        {stat.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

