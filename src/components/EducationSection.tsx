import React from 'react';
import { School, GraduationCap, Calendar, MapPin, Sparkles, BookOpen } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-16 sm:py-20 scroll-mt-20 border-t border-slate-200 dark:border-[#424754]/20 relative bg-slate-50/50 dark:bg-transparent">
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-[#adc6ff]/10 border border-indigo-200 dark:border-[#adc6ff]/30 flex items-center justify-center text-indigo-600 dark:text-[#adc6ff]">
              <School className="w-4 h-4" />
            </div>
            <h2 className="font-['Outfit'] font-bold text-2xl sm:text-3xl lg:text-4xl text-slate-900 dark:text-[#dae2fd]">
              Education
            </h2>
          </div>
          <p className="text-slate-600 dark:text-[#c2c6d6] text-base sm:text-lg max-w-2xl">
            Formal engineering foundations and continuous algorithmic rigor.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-300 dark:border-[#2d3449] ml-3 sm:ml-4 space-y-8">
          {EDUCATION_DATA.map((item, index) => (
            <div key={index} className="relative group">
              
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-white dark:bg-[#0b1326] border-2 border-indigo-600 dark:border-[#adc6ff] shadow-sm flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-[#adc6ff] animate-pulse" />
              </div>

              {/* Education Card */}
              <div className="bg-white dark:bg-[#0f172a] rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-[#424754]/30 shadow-sm hover:shadow-md hover:border-indigo-500 dark:hover:border-[#adc6ff]/50 transition-all duration-300 hover:-translate-y-1">
                
                {/* Header info */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="font-['JetBrains_Mono'] text-xs font-bold text-indigo-700 dark:text-[#adc6ff] px-3 py-1 rounded bg-indigo-50 dark:bg-[#171f33] border border-indigo-200 dark:border-[#adc6ff]/30">
                    {item.status.toUpperCase()}
                  </span>
                  
                  <div className="flex items-center gap-3 text-xs font-['JetBrains_Mono'] text-slate-500 dark:text-[#8c909f]">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-amber-500" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-indigo-500 dark:text-[#adc6ff]" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Degree & Institution */}
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="font-['Outfit'] font-bold text-2xl sm:text-3xl text-slate-900 dark:text-[#dae2fd]">
                    {item.degree}
                  </h3>
                  <span className="font-['JetBrains_Mono'] text-sm font-bold text-indigo-700 dark:text-[#adc6ff] bg-indigo-50 dark:bg-[#171f33] px-3 py-1 rounded-lg border border-indigo-200 dark:border-[#adc6ff]/30">
                    CGPA: {item.cgpa}
                  </span>
                </div>

                <div className="text-base sm:text-lg text-slate-700 dark:text-[#c2c6d6] font-medium mb-4">
                  <span className="font-semibold text-slate-900 dark:text-white">{item.institution}</span>
                  <span className="text-slate-400 mx-2">•</span>
                  <span className="text-indigo-600 dark:text-[#adc6ff]">{item.university}</span>
                </div>

                {/* Highlights List */}
                <div className="space-y-2.5 pt-4 border-t border-slate-100 dark:border-[#424754]/30">
                  <p className="text-xs font-['JetBrains_Mono'] text-slate-500 dark:text-[#8c909f] font-semibold flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-amber-500" />
                    Academic Highlights & Core Competencies:
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm font-['Inter'] text-slate-600 dark:text-[#c2c6d6] pl-1">
                    {item.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-indigo-600 dark:text-[#adc6ff] mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
