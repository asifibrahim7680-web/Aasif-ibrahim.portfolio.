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
  Code, 
  Award, 
  Users, 
  Sparkles,
  Globe
} from 'lucide-react';
import { 
  PERSONAL_INFO, 
  EDUCATION_DATA, 
  PROJECTS, 
  CERTIFICATIONS_DATA, 
  COMMUNITY_INVOLVEMENT, 
  CORE_STRENGTHS, 
  LANGUAGES_DATA 
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
B.E. Computer Science & Engineering | AI & Technology Enthusiast | Community Builder
Avadi, Chennai, Tamil Nadu, India • +91 80725 96741 • asifibrahim7680@gmail.com • linkedin.com/in/aasif-ibrahim-135b9b371

PROFILE
Computer Science and Engineering student with a CGPA of 8.3 and a strong interest in Artificial Intelligence, Machine Learning, Microsoft Azure, cloud computing, software development, and educational technology. Passionate about building practical technology projects, learning through hands-on development, and helping students and developers discover emerging technologies.

EDUCATION
B.E. Computer Science & Engineering
Aalim Muhammed Salegh College of Engineering • Anna University — CGPA: 8.3 | Expected Graduation: 2029

PROJECTS
Bean & Byte AI Coffee Shop | TypeScript
• Developed an AI-focused coffee shop web project with a modern interactive experience.
• Applied TypeScript-based development and explored practical AI and web technology use cases.

Learn Track | TypeScript
• Developed a learning-focused platform designed to support students and structured learning.
• Focused on an accessible user experience and educational technology.

Daily Attendance | TypeScript
• Developed a digital attendance management application for student information and attendance records.
• Created a practical education-management solution.

TECHNICAL SKILLS
• AI: Artificial Intelligence, Generative AI, Machine Learning
• Cloud: Microsoft Azure, Cloud Computing
• Development: TypeScript, Web Development, Frontend Development, Backend & Database Integration, API Integration
• Interests: Educational Technology, Developer Tools, Technical Project Development

CERTIFICATIONS & COURSES
• Artificial Intelligence & Microsoft Azure Course
• Machine Learning Course

COMMUNITY INVOLVEMENT
• Interested in building technology communities for students and developers.
• Passionate about sharing knowledge about AI, cloud computing, and software development.
• Interested in organizing technical demonstrations, workshops, and learning activities.
• Motivated to help beginners explore emerging technologies through practical projects.

CORE STRENGTHS
Problem Solving • Technical Curiosity • Fast Learning • Communication • Collaboration • Community Building • Project Development

LANGUAGES
• English — Professional
• Tamil — Native

CAREER OBJECTIVE
To grow as a technology professional while contributing to student and developer communities. I aim to use AI, Machine Learning, and cloud technologies to build practical solutions, share technical knowledge, organize learning activities, and encourage more students to become confident technology builders.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(plainTextResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md overflow-y-auto print:p-0 print:bg-white print:static"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-white dark:bg-[#0d1527] border border-slate-200 dark:border-[#424754]/50 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col print:max-h-none print:border-none print:shadow-none print:rounded-none print:bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Toolbar (hidden on print) */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-slate-100 dark:bg-[#131b2e] border-b border-slate-200 dark:border-[#424754]/40 print:hidden flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-['Outfit'] font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                Official Resume
              </h3>
              <p className="text-[11px] font-['JetBrains_Mono'] text-slate-500 dark:text-slate-400">
                Aasif Ibrahim • Verified B.E. CSE Resume
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-[#1e293b] hover:bg-slate-50 dark:hover:bg-[#283548] text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 text-xs font-['Outfit'] font-semibold transition-all cursor-pointer shadow-sm"
              title="Copy plain-text resume to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-500" />
                  <span className="hidden sm:inline">Copy Text</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-['Outfit'] font-semibold transition-all cursor-pointer shadow-sm"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-[#1e293b] transition-colors ml-1 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Container */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 md:p-10 bg-slate-50 dark:bg-[#070d19] print:bg-white print:p-0 print:overflow-visible">
          
          {/* A4 Paper styled document card */}
          <div className="max-w-[760px] mx-auto bg-white text-slate-900 p-8 sm:p-12 rounded-xl shadow-lg border border-slate-200 print:shadow-none print:border-none print:p-4 print:max-w-full font-['Inter',sans-serif]">
            
            {/* Resume Header */}
            <div className="pb-4 border-b-2 border-slate-900">
              <div className="text-center sm:text-left">
                <h1 className="font-['Outfit'] font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-wide uppercase">
                  Aasif Ibrahim
                </h1>
                <p className="font-['Outfit'] text-sm sm:text-base font-semibold text-slate-700 mt-1">
                  B.E. Computer Science & Engineering <span className="text-slate-400">|</span> AI & Technology Enthusiast <span className="text-slate-400">|</span> Community Builder
                </p>
                
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1 mt-2 text-xs text-slate-600 font-['JetBrains_Mono']">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-indigo-600" />
                    Avadi, Chennai, Tamil Nadu, India
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-indigo-600" />
                    +91 80725 96741
                  </span>
                  <span className="text-slate-300">•</span>
                  <a href="mailto:asifibrahim7680@gmail.com" className="flex items-center gap-1 text-indigo-600 hover:underline">
                    <Mail className="w-3.5 h-3.5" />
                    asifibrahim7680@gmail.com
                  </a>
                  <span className="text-slate-300">•</span>
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-indigo-600 hover:underline">
                    <Linkedin className="w-3.5 h-3.5" />
                    linkedin.com/in/aasif-ibrahim-135b9b371
                  </a>
                </div>
              </div>
            </div>

            {/* Profile Section */}
            <div className="mt-5">
              <h2 className="font-['Outfit'] font-bold text-xs uppercase tracking-widest text-slate-900 border-b border-slate-900 pb-1 mb-2">
                Profile
              </h2>
              <p className="text-xs sm:text-[13px] leading-relaxed text-slate-800 text-justify">
                {PERSONAL_INFO.profileText}
              </p>
            </div>

            {/* Education Section */}
            <div className="mt-4">
              <h2 className="font-['Outfit'] font-bold text-xs uppercase tracking-widest text-slate-900 border-b border-slate-900 pb-1 mb-2">
                Education
              </h2>
              <div className="space-y-1">
                <div className="flex flex-wrap justify-between items-baseline">
                  <h3 className="font-['Outfit'] font-bold text-sm text-slate-900">
                    B.E. Computer Science & Engineering
                  </h3>
                  <span className="text-xs font-semibold font-['JetBrains_Mono'] text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                    CGPA: 8.3
                  </span>
                </div>
                <p className="text-xs text-slate-700 font-medium">
                  Aalim Muhammed Salegh College of Engineering • Anna University <span className="text-slate-400">—</span> Expected Graduation: 2029
                </p>
              </div>
            </div>

            {/* Projects Section */}
            <div className="mt-4">
              <h2 className="font-['Outfit'] font-bold text-xs uppercase tracking-widest text-slate-900 border-b border-slate-900 pb-1 mb-2">
                Projects
              </h2>
              
              <div className="space-y-3">
                {/* Project 1 */}
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-['Outfit'] font-bold text-xs sm:text-sm text-slate-900 flex items-center gap-2">
                      <span>Bean & Byte AI Coffee Shop</span>
                      <span className="font-['JetBrains_Mono'] text-[11px] font-normal text-slate-500">| TypeScript</span>
                    </h3>
                    <a 
                      href="https://bean-byte-aicoffee-shop.vercel.app" 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-[11px] font-['JetBrains_Mono'] text-indigo-600 hover:underline flex items-center gap-1 print:hidden"
                    >
                      <span>Live App</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <ul className="list-disc list-outside ml-4 mt-1 text-xs text-slate-700 space-y-0.5">
                    <li>Developed an AI-focused coffee shop web project with a modern interactive experience.</li>
                    <li>Applied TypeScript-based development and explored practical AI and web technology use cases.</li>
                  </ul>
                </div>

                {/* Project 2 */}
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-['Outfit'] font-bold text-xs sm:text-sm text-slate-900 flex items-center gap-2">
                      <span>Learn Track</span>
                      <span className="font-['JetBrains_Mono'] text-[11px] font-normal text-slate-500">| TypeScript</span>
                    </h3>
                    <a 
                      href="https://foundation-eduction.vercel.app" 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-[11px] font-['JetBrains_Mono'] text-indigo-600 hover:underline flex items-center gap-1 print:hidden"
                    >
                      <span>Live App</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <ul className="list-disc list-outside ml-4 mt-1 text-xs text-slate-700 space-y-0.5">
                    <li>Developed a learning-focused platform designed to support students and structured learning.</li>
                    <li>Focused on an accessible user experience and educational technology.</li>
                  </ul>
                </div>

                {/* Project 3 */}
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-['Outfit'] font-bold text-xs sm:text-sm text-slate-900 flex items-center gap-2">
                      <span>Daily Attendance</span>
                      <span className="font-['JetBrains_Mono'] text-[11px] font-normal text-slate-500">| TypeScript</span>
                    </h3>
                  </div>
                  <ul className="list-disc list-outside ml-4 mt-1 text-xs text-slate-700 space-y-0.5">
                    <li>Developed a digital attendance management application for student information and attendance records.</li>
                    <li>Created a practical education-management solution.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="mt-4">
              <h2 className="font-['Outfit'] font-bold text-xs uppercase tracking-widest text-slate-900 border-b border-slate-900 pb-1 mb-2">
                Technical Skills
              </h2>
              <div className="text-xs text-slate-800 space-y-1">
                <div>
                  <span className="font-bold text-slate-900">AI:</span> Artificial Intelligence, Generative AI, Machine Learning
                </div>
                <div>
                  <span className="font-bold text-slate-900">Cloud:</span> Microsoft Azure, Cloud Computing
                </div>
                <div>
                  <span className="font-bold text-slate-900">Development:</span> TypeScript, Web Development, Frontend Development, Backend & Database Integration, API Integration
                </div>
                <div>
                  <span className="font-bold text-slate-900">Interests:</span> Educational Technology, Developer Tools, Technical Project Development
                </div>
              </div>
            </div>

            {/* Certifications & Courses */}
            <div className="mt-4">
              <h2 className="font-['Outfit'] font-bold text-xs uppercase tracking-widest text-slate-900 border-b border-slate-900 pb-1 mb-2">
                Certifications & Courses
              </h2>
              <ul className="list-disc list-outside ml-4 text-xs text-slate-700 space-y-0.5">
                <li><span className="font-semibold text-slate-900">Artificial Intelligence & Microsoft Azure Course</span></li>
                <li><span className="font-semibold text-slate-900">Machine Learning Course</span></li>
              </ul>
            </div>

            {/* Community Involvement */}
            <div className="mt-4">
              <h2 className="font-['Outfit'] font-bold text-xs uppercase tracking-widest text-slate-900 border-b border-slate-900 pb-1 mb-2">
                Community Involvement
              </h2>
              <ul className="list-disc list-outside ml-4 text-xs text-slate-700 space-y-0.5">
                {COMMUNITY_INVOLVEMENT.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Core Strengths */}
            <div className="mt-4">
              <h2 className="font-['Outfit'] font-bold text-xs uppercase tracking-widest text-slate-900 border-b border-slate-900 pb-1 mb-2">
                Core Strengths
              </h2>
              <p className="text-xs text-slate-800 font-medium">
                {CORE_STRENGTHS.join(' • ')}
              </p>
            </div>

            {/* Languages */}
            <div className="mt-4">
              <h2 className="font-['Outfit'] font-bold text-xs uppercase tracking-widest text-slate-900 border-b border-slate-900 pb-1 mb-2">
                Languages
              </h2>
              <p className="text-xs text-slate-800">
                <span className="font-semibold">English</span> — Professional <span className="text-slate-400 mx-2">•</span> <span className="font-semibold">Tamil</span> — Native
              </p>
            </div>

            {/* Career Objective */}
            <div className="mt-4">
              <h2 className="font-['Outfit'] font-bold text-xs uppercase tracking-widest text-slate-900 border-b border-slate-900 pb-1 mb-2">
                Career Objective
              </h2>
              <p className="text-xs sm:text-[13px] leading-relaxed text-slate-800 text-justify">
                {PERSONAL_INFO.careerObjective}
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
