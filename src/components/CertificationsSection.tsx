import React, { useState } from 'react';
import { Award, Cloud, BrainCircuit, ExternalLink, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';
import { Certification } from '../types';
import { CertificateModal } from './CertificateModal';

export const CertificationsSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const getCertIcon = (category: string) => {
    switch (category) {
      case 'cloud':
        return <Cloud className="w-6 h-6 text-[#ddb7ff]" />;
      case 'ml':
      case 'ai':
      default:
        return <BrainCircuit className="w-6 h-6 text-[#adc6ff]" />;
    }
  };

  return (
    <section id="certifications" className="py-16 sm:py-20 scroll-mt-20 border-t border-slate-200 dark:border-[#424754]/20 relative bg-white dark:bg-transparent">
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-[#adc6ff]/10 border border-indigo-200 dark:border-[#adc6ff]/30 flex items-center justify-center text-indigo-600 dark:text-[#adc6ff]">
              <Award className="w-4 h-4" />
            </div>
            <h2 className="font-['Outfit'] font-bold text-2xl sm:text-3xl lg:text-4xl text-slate-900 dark:text-[#dae2fd]">
              Certifications
            </h2>
          </div>
          <p className="text-slate-600 dark:text-[#c2c6d6] text-base sm:text-lg max-w-2xl">
            Specialized accreditations in cloud computing, artificial intelligence, and machine learning.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATIONS_DATA.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="bg-white dark:bg-[#0f172a] rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-[#424754]/30 hover:border-indigo-500 dark:hover:border-[#adc6ff]/60 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Top icon and inspect link */}
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-[#0b1326] border border-indigo-100 dark:border-[#424754]/40 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform text-indigo-600 dark:text-[#adc6ff]">
                    {getCertIcon(cert.category)}
                  </div>
                  
                  <div className="flex items-center gap-1 text-indigo-600 dark:text-[#adc6ff] opacity-80 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs font-['JetBrains_Mono'] hidden sm:inline">Inspect</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-['Outfit'] font-bold text-xl sm:text-2xl text-slate-900 dark:text-[#dae2fd] group-hover:text-indigo-600 dark:group-hover:text-[#adc6ff] transition-colors mb-2">
                  {cert.title}
                </h3>
                
                <p className="text-xs font-['JetBrains_Mono'] text-slate-500 dark:text-[#8c909f] mb-4">
                  {cert.issuer}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-[#c2c6d6] line-clamp-2 mb-4 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Tags and status */}
              <div className="pt-4 border-t border-slate-100 dark:border-[#424754]/30 flex items-center justify-between">
                <div className="flex gap-2">
                  {cert.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded bg-slate-100 dark:bg-[#131b2e] border border-slate-200 dark:border-[#424754]/40 text-xs font-['JetBrains_Mono'] text-slate-700 dark:text-[#c2c6d6]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="text-[11px] font-['JetBrains_Mono'] text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Verification Modal */}
      <CertificateModal
        certification={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
};
