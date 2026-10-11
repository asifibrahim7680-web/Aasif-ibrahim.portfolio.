import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  FileText, 
  Download, 
  ExternalLink, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  GraduationCap, 
  Award, 
  CheckCircle2 
} from 'lucide-react';
import { 
  PERSONAL_INFO, 
  EDUCATION_DATA, 
  PROJECTS, 
  CERTIFICATIONS_DATA, 
  COMMUNITY_INVOLVEMENT, 
  CORE_STRENGTHS 
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const plainTextResume = `AASIF IBRAHIM
B.E. Computer Science & Engineering | AI & Technology Enthusiast
Avadi, Chennai, Tamil Nadu, India • +91 80725 96741 • asifibrahim7680@gmail.com
LinkedIn: linkedin.com/in/aasif-ibrahim-135b9b371 • GitHub: github.com/asifibrahim7680-web

EDUCATION
B.E. Computer Science & Engineering
Aalim Muhammed Salegh College of Engineering (Anna University)
CGPA: 8.3 | Expected Graduation: 2029

TECHNICAL FOCUS
• Artificial Intelligence & Machine Learning
• Microsoft Azure Cloud Computing
• Modern Full-Stack Web Development (TypeScript, React, Tailwind CSS)
• Database Management & Systems

PROJECTS
• MedVault: Secure healthcare and medical record management vault built with TypeScript.
• Bean & Byte AI Coffee Shop: AI-focused interactive coffee platform built in TypeScript.
• Learn Track (Foundation AI): Structured learning and curriculum diagnostic tool for students.
• Daily Attendance System: Digital student attendance tracking with cryptographic verification.
• Luxury Electronics: Responsive high-end electronics digital showroom and catalog.

CERTIFICATIONS
• Artificial Intelligence & Microsoft Azure Course
• Machine Learning Specialization Course
`;

  const copyPlainText = () => {
    navigator.clipboard.writeText(plainTextResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[var(--surface)] border border-[var(--line)] rounded-2xl shadow-2xl overflow-hidden z-10 my-8 flex flex-col max-h-[90vh]">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--line)] bg-[var(--bg-alt)]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="font-['Manrope'] font-bold text-sm text-[var(--ink)]">
              Verified Curriculum Vitae
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyPlainText}
              className="p-2 rounded-lg text-xs font-medium border border-[var(--line)] hover:bg-[var(--tint-1)] text-[var(--ink)] flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Copy plain text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="p-2 rounded-lg text-xs font-medium border border-[var(--line)] hover:bg-[var(--tint-1)] text-[var(--ink)] flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Print document"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg border border-[var(--line)] flex items-center justify-center text-[var(--ink-soft)] hover:text-[var(--ink)] hover:bg-[var(--tint-1)] transition-colors cursor-pointer ml-1"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-white text-slate-900 font-sans">
          
          {/* Header */}
          <div className="border-b border-slate-200 pb-6 text-center sm:text-left flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold font-['Manrope'] tracking-tight text-slate-950 uppercase">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-sm font-medium text-slate-700 mt-1">
                {PERSONAL_INFO.role}
              </p>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1 text-xs text-slate-500 mt-2 font-mono">
                <span>📍 {PERSONAL_INFO.location}</span>
                <span>📞 {PERSONAL_INFO.phone}</span>
                <span>✉️ {PERSONAL_INFO.email}</span>
              </div>
            </div>

            <div className="text-xs font-mono px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 text-center sm:text-right shrink-0">
              <div>STATUS: VERIFIED</div>
              <div className="text-slate-500 text-[10px]">ANNA UNIVERSITY CSE</div>
            </div>
          </div>

          {/* Profile Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2 border-b border-slate-200 pb-1">
              Profile Summary
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              {PERSONAL_INFO.profileText}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 border-b border-slate-200 pb-1">
              Education
            </h2>
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm font-semibold text-slate-950">
                <span>B.E. Computer Science &amp; Engineering</span>
                <span className="font-mono text-xs text-slate-500">2025 – 2029 (Expected)</span>
              </div>
              <div className="text-sm text-slate-700">
                Aalim Muhammed Salegh College of Engineering • Anna University
              </div>
              <div className="text-xs font-mono text-emerald-700 font-semibold">
                Academic Standing: CGPA 8.3
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 border-b border-slate-200 pb-1">
              Featured Engineering Projects
            </h2>
            <div className="space-y-4 text-sm text-slate-700">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between font-semibold text-slate-900">
                    <span>{proj.title}</span>
                    <span className="text-xs font-mono text-slate-500">{proj.techStack.join(' • ')}</span>
                  </div>
                  <p className="text-xs leading-relaxed text-slate-600">
                    {proj.fullDescription}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 border-b border-slate-200 pb-1">
              Certifications &amp; Core Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                <div className="font-bold text-slate-900">Microsoft Azure &amp; Artificial Intelligence</div>
                <div className="text-slate-600">Cognitive services, cloud infrastructure and model integration</div>
                <div className="text-[10px] font-mono text-slate-500">Credential: AZ-AI-AZURE-VERIFIED</div>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                <div className="font-bold text-slate-900">Machine Learning Specialization</div>
                <div className="text-slate-600">Supervised and unsupervised models, evaluation, heuristic design</div>
                <div className="text-[10px] font-mono text-slate-500">Credential: ML-COURSE-ACCREDITED</div>
              </div>
            </div>
          </div>

          {/* Community Involvement */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2 border-b border-slate-200 pb-1">
              Community Involvement
            </h2>
            <ul className="list-disc list-inside text-xs text-slate-700 space-y-1">
              {COMMUNITY_INVOLVEMENT.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};
