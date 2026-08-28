import React from 'react';
import { Languages as LanguagesIcon, Check } from 'lucide-react';
import { LANGUAGES_DATA } from '../data/portfolioData';

export const LanguagesSection: React.FC = () => {
  return (
    <section id="languages" className="py-12 border-t border-slate-200 dark:border-[#424754]/20 relative bg-slate-50/50 dark:bg-transparent">
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-[#adc6ff]/10 border border-indigo-200 dark:border-[#adc6ff]/30 flex items-center justify-center text-indigo-600 dark:text-[#adc6ff]">
            <LanguagesIcon className="w-4 h-4" />
          </div>
          <h3 className="font-['Outfit'] font-bold text-xl sm:text-2xl text-slate-900 dark:text-[#dae2fd]">
            Languages
          </h3>
        </div>

        {/* Languages Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {LANGUAGES_DATA.map((lang) => (
            <div
              key={lang.name}
              className="bg-white dark:bg-[#0f172a] p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-[#424754]/30 shadow-sm flex items-center justify-between group hover:border-indigo-500 dark:hover:border-[#adc6ff]/50 transition-colors"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-['Outfit'] font-bold text-lg text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-[#adc6ff] transition-colors">
                    {lang.name}
                  </span>
                  <span className="text-[10px] font-['JetBrains_Mono'] px-2 py-0.5 rounded bg-indigo-50 dark:bg-[#171f33] text-indigo-700 dark:text-[#adc6ff] border border-indigo-200 dark:border-[#424754]/40">
                    Fluent
                  </span>
                </div>
                <p className="text-xs font-['JetBrains_Mono'] text-slate-500 dark:text-[#8c909f]">
                  {lang.level}
                </p>
              </div>

              <div className="w-8 h-8 rounded-full bg-indigo-50 dark:bg-[#131b2e] border border-indigo-200 dark:border-[#424754]/40 flex items-center justify-center text-indigo-600 dark:text-[#adc6ff]">
                <Check className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
