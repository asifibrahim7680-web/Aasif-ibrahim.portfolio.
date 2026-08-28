import React from 'react';
import { X, Award, ShieldCheck, CheckCircle2, Calendar, FileText, ExternalLink } from 'lucide-react';
import { Certification } from '../types';

interface CertificateModalProps {
  certification: Certification | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certification, onClose }) => {
  if (!certification) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-xl bg-[#0f172a] border border-[#424754] rounded-2xl shadow-2xl overflow-hidden z-10 my-8">
        
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#424754]/40 bg-[#131b2e]">
          <div className="flex items-center gap-2 text-[#adc6ff]">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span className="font-['JetBrains_Mono'] text-xs font-bold uppercase tracking-wider text-white">
              Verified Credential
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-[#c2c6d6] hover:text-white hover:bg-[#1e293b] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Body Container */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Certificate Header Banner */}
          <div className="p-5 rounded-xl bg-[#131b2e] border border-[#adc6ff]/30 text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-[#0b1326] border border-[#adc6ff]/40 mx-auto flex items-center justify-center text-[#adc6ff]">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-['Outfit'] font-bold text-xl sm:text-2xl text-white">
              {certification.title}
            </h3>
            <p className="font-['JetBrains_Mono'] text-xs text-[#adc6ff]">
              Issued to: Aasif Ibrahim
            </p>
            <p className="text-xs text-[#8c909f]">
              Issuing Organization: {certification.issuer}
            </p>
          </div>

          {/* Verification Meta */}
          <div className="grid grid-cols-2 gap-3 text-xs font-['JetBrains_Mono']">
            <div className="p-3 rounded-lg bg-[#131b2e] border border-[#424754]/40">
              <span className="text-[#8c909f] block">Credential ID:</span>
              <span className="text-[#dae2fd] font-semibold">{certification.credentialId}</span>
            </div>
            <div className="p-3 rounded-lg bg-[#131b2e] border border-[#424754]/40">
              <span className="text-[#8c909f] block">Status:</span>
              <span className="text-emerald-400 font-semibold">{certification.date}</span>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2 text-xs sm:text-sm text-[#c2c6d6]">
            <p className="font-semibold text-white font-['Outfit']">Curriculum Focus:</p>
            <p className="leading-relaxed">{certification.description}</p>
          </div>

          {/* Skills Covered */}
          <div className="space-y-2">
            <p className="font-semibold text-white font-['Outfit'] text-xs">Skills & Modules Tested:</p>
            <div className="flex flex-wrap gap-2">
              {certification.skillsCovered.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded bg-[#131b2e] border border-[#424754]/50 text-xs font-['JetBrains_Mono'] text-[#adc6ff] flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#131b2e] border-t border-[#424754]/40 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#adc6ff] text-[#002e6a] font-['JetBrains_Mono'] text-xs font-bold hover:bg-[#4d8eff] hover:text-white transition-colors"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
