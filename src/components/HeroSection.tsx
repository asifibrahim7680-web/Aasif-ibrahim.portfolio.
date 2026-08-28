import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail, Sparkles, MapPin, Code2, BrainCircuit, Terminal, Play, CheckCircle2, Copy, Check, User, Laptop, FileText, Award, Camera, Cpu, Cloud, Globe, Github, Linkedin, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { usePhoto } from '../context/PhotoContext';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onOpenResume }) => {
  const { photoUrl, openUploadModal, isCustomPhoto } = usePhoto();
  const [copiedCode, setCopiedCode] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [outputLog, setOutputLog] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'avatar' | 'terminal'>('avatar');

  // Dynamic Typewriter Effect matching resume skills
  const roles = [
    "B.E. Computer Science Student",
    "AI & Technology Enthusiast",
    "Community Builder",
    "TypeScript & Full-Stack Developer",
    "Cloud & Azure Practitioner"
  ];

  const techStackItems = [
    { name: "Python", icon: "🐍" },
    { name: "C++", icon: "⚡" },
    { name: "TypeScript", icon: "🔷" },
    { name: "React", icon: "⚛️" },
    { name: "Microsoft Azure", icon: "☁️" },
    { name: "Artificial Intelligence", icon: "🧠" },
    { name: "Machine Learning", icon: "🤖" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Git & GitHub", icon: "🐙" },
    { name: "SQL & Databases", icon: "🗄️" }
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = roles[currentRoleIndex];
    let typingSpeed = isDeleting ? 45 : 90;

    if (!isDeleting && displayedText === currentWord) {
      // Pause at full text
      const pauseTimer = setTimeout(() => setIsDeleting(true), 1600);
      return () => clearTimeout(pauseTimer);
    } else if (isDeleting && displayedText === "") {
      // Move to next role
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayedText((prev) =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, roles]);

  const codeSnippet = `const developer = {
  name: "${PERSONAL_INFO.name}",
  degree: "B.E. Computer Science & Engineering",
  cgpa: "${PERSONAL_INFO.cgpa}",
  college: "Aalim Muhammed Salegh College of Engineering",
  interests: ["Artificial Intelligence", "Microsoft Azure", "Community Building"],
  location: "Avadi, Chennai, Tamil Nadu",
  status: "${PERSONAL_INFO.status}"
};`;

  const handleRunScript = () => {
    setIsRunning(true);
    setOutputLog("Compiling student records & projects...");
    setTimeout(() => {
      setOutputLog("Status 200 OK: CGPA 8.3 | AI & Cloud Tech Ready.");
      setIsRunning(false);
    }, 600);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="hero" className="min-h-[90vh] flex flex-col justify-center pt-24 pb-12 lg:pt-28 lg:pb-16 relative overflow-hidden bg-white dark:bg-[#0b1326] transition-colors duration-300">
      {/* Subtle Background Glows & Grid */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-indigo-500/10 dark:bg-[#adc6ff]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-500/10 dark:bg-[#6f00be]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Text Content - Inspired by ajayportfolio.in */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6 order-2 lg:order-1">
            
            {/* Availability status & CGPA badge */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-[#131b2e] border border-slate-200 dark:border-[#424754]/50 shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="font-['JetBrains_Mono'] text-xs font-semibold text-emerald-700 dark:text-emerald-300 tracking-wide">
                  {PERSONAL_INFO.status}
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/50 text-indigo-700 dark:text-indigo-300 font-['JetBrains_Mono'] text-xs font-bold">
                <Award className="w-3.5 h-3.5 text-indigo-500" />
                <span>CGPA 8.3</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/50 text-amber-700 dark:text-amber-300 font-['JetBrains_Mono'] text-xs font-semibold">
                <span>⚡ CSE 2025-2029</span>
              </div>
            </div>

            {/* Main Greeting & Headings */}
            <div className="space-y-2">
              <h1 className="font-['Outfit'] font-extrabold text-5xl sm:text-6xl lg:text-7xl text-slate-900 dark:text-[#dae2fd] leading-tight tracking-tight">
                Hi, I'm <span className="text-indigo-600 dark:text-[#adc6ff]">Aasif</span>
              </h1>
              
              {/* Typewriter Text Element */}
              <div className="h-10 sm:h-12 flex items-center">
                <p className="font-['Outfit'] font-bold text-2xl sm:text-3xl text-indigo-600 dark:text-[#adc6ff]">
                  <span>{displayedText}</span>
                  <span className="inline-block w-0.5 h-6 sm:h-8 ml-1 bg-indigo-600 dark:bg-[#adc6ff] animate-pulse align-middle"></span>
                </p>
              </div>
            </div>

            {/* Short Introduction Paragraph */}
            <p className="text-slate-600 dark:text-[#c2c6d6] text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Computer Science & Engineering student with a strong interest in Artificial Intelligence, Machine Learning, Microsoft Azure, and practical software development. Passionate about community building and helping developers explore emerging technologies.
            </p>

            {/* Key Focus & Location Pills */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs font-['JetBrains_Mono']">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-100 dark:bg-[#171f33] border border-slate-200 dark:border-[#424754]/30 text-slate-700 dark:text-[#dae2fd]">
                <MapPin className="w-3.5 h-3.5 text-orange-500" />
                Avadi, Chennai, Tamil Nadu
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-100 dark:bg-[#171f33] border border-slate-200 dark:border-[#424754]/30 text-slate-700 dark:text-[#dae2fd]">
                <BrainCircuit className="w-3.5 h-3.5 text-indigo-500 dark:text-[#adc6ff]" />
                AI & Machine Learning
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-100 dark:bg-[#171f33] border border-slate-200 dark:border-[#424754]/30 text-slate-700 dark:text-[#dae2fd]">
                <Code2 className="w-3.5 h-3.5 text-blue-500" />
                TypeScript & Python
              </span>
            </div>

            {/* CTAs matching reference + Resume Viewer */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3 w-full sm:w-auto">
              <button
                id="hero-btn-projects"
                onClick={() => onNavigate('projects')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-['Outfit'] text-base font-semibold tracking-wide transition-all duration-200 shadow-md shadow-indigo-500/20 hover:shadow-lg flex items-center justify-center gap-2 active:scale-95 group cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-btn-resume"
                onClick={onOpenResume}
                className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-indigo-50 dark:bg-[#131b2e] hover:bg-indigo-100 dark:hover:bg-[#1c2640] border border-indigo-200 dark:border-indigo-800/60 text-indigo-700 dark:text-[#adc6ff] font-['Outfit'] text-base font-semibold tracking-wide transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 cursor-pointer shadow-sm"
              >
                <FileText className="w-4 h-4 text-indigo-600 dark:text-[#adc6ff]" />
                <span>View Resume</span>
              </button>

              <button
                id="hero-btn-contact"
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-transparent hover:bg-slate-100 dark:hover:bg-[#171f33]/60 border border-slate-300 dark:border-[#424754]/60 text-slate-700 dark:text-[#c2c6d6] font-['Outfit'] text-base font-semibold tracking-wide transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-slate-600 dark:text-[#c2c6d6]" />
                <span>Get In Touch</span>
              </button>
            </div>

            {/* Social Links Bar */}
            <div className="flex items-center gap-3 pt-2 text-slate-500 dark:text-[#8c909f]">
              <span className="text-xs font-['JetBrains_Mono']">Connect:</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-100 dark:bg-[#131b2e] hover:text-indigo-600 dark:hover:text-[#adc6ff] border border-slate-200 dark:border-[#424754]/40 transition-colors"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-100 dark:bg-[#131b2e] hover:text-indigo-600 dark:hover:text-[#adc6ff] border border-slate-200 dark:border-[#424754]/40 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 rounded-lg bg-slate-100 dark:bg-[#131b2e] hover:text-indigo-600 dark:hover:text-[#adc6ff] border border-slate-200 dark:border-[#424754]/40 transition-colors"
                title="Email Me"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Circular Profile Display or Interactive Console */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end order-1 lg:order-2 w-full">
            
            {/* View Switcher toggle */}
            <div className="flex items-center gap-1.5 p-1 mb-4 rounded-xl bg-slate-100 dark:bg-[#131b2e] border border-slate-200 dark:border-[#424754]/40 text-xs font-['JetBrains_Mono']">
              <button
                onClick={() => setViewMode('avatar')}
                className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
                  viewMode === 'avatar'
                    ? 'bg-indigo-600 text-white font-semibold shadow-sm'
                    : 'text-slate-600 dark:text-[#c2c6d6] hover:text-indigo-600'
                }`}
              >
                <User className="w-3.5 h-3.5" />
                <span>Profile Visual</span>
              </button>
              <button
                onClick={() => setViewMode('terminal')}
                className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
                  viewMode === 'terminal'
                    ? 'bg-indigo-600 text-white font-semibold shadow-sm'
                    : 'text-slate-600 dark:text-[#c2c6d6] hover:text-indigo-600'
                }`}
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>Code Console</span>
              </button>
            </div>

            {viewMode === 'avatar' ? (
              /* Circular Portrait Photo Frame */
              <div className="relative flex flex-col items-center justify-center p-4">
                {/* Glow ring */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/25 via-purple-500/20 to-blue-500/25 rounded-full blur-2xl pointer-events-none" />
                
                {/* Outer gradient border ring */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-2 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-2xl flex items-center justify-center group">
                  <div className="w-full h-full rounded-full bg-slate-900 dark:bg-[#0d1527] overflow-hidden border-4 border-white dark:border-[#0b1326] flex items-center justify-center relative shadow-inner">
                    
                    {/* Actual Portrait Photo */}
                    <img
                      src={photoUrl}
                      alt={PERSONAL_INFO.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Subtle gradient vignette overlay at bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/85 via-black/45 to-transparent flex flex-col items-center justify-end pb-3 text-center pointer-events-none">
                      <p className="font-['Outfit'] font-bold text-white text-base drop-shadow-sm leading-tight">
                        {PERSONAL_INFO.name}
                      </p>
                      <p className="text-[11px] font-['JetBrains_Mono'] text-indigo-200 drop-shadow-sm">
                        CSE Student • CGPA 8.3
                      </p>
                    </div>

                    {/* Quick Upload Button on Hover */}
                    <button
                      onClick={openUploadModal}
                      title="Upload your real photo or adjust"
                      className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center text-white cursor-pointer"
                    >
                      <div className="p-3 rounded-full bg-indigo-600 text-white shadow-lg mb-1.5">
                        <Camera className="w-6 h-6" />
                      </div>
                      <span className="font-['Outfit'] font-semibold text-xs text-white">Upload Real Photo</span>
                      <span className="text-[10px] text-indigo-200 font-['JetBrains_Mono']">Click to replace / crop</span>
                    </button>

                  </div>
                </div>

                {/* Floating Tech Badges */}
                <div className="absolute -top-1 right-2 sm:right-6 bg-white dark:bg-[#171f33] border border-slate-200 dark:border-[#424754]/50 shadow-lg px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-['JetBrains_Mono'] text-slate-800 dark:text-[#dae2fd] hover:scale-105 transition-transform">
                  <BrainCircuit className="w-3.5 h-3.5 text-indigo-500" />
                  <span>AI & Azure</span>
                </div>

                <div className="absolute -bottom-2 left-2 sm:left-6 bg-white dark:bg-[#171f33] border border-slate-200 dark:border-[#424754]/50 shadow-lg px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-['JetBrains_Mono'] text-slate-800 dark:text-[#dae2fd] hover:scale-105 transition-transform">
                  <Code2 className="w-3.5 h-3.5 text-blue-500" />
                  <span>TypeScript</span>
                </div>

                {/* Quick Photo Upload Chip below avatar */}
                <button
                  onClick={openUploadModal}
                  className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-[#171f33] hover:bg-indigo-100 dark:hover:bg-[#1f2a47] border border-indigo-200 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300 text-xs font-['JetBrains_Mono'] transition-all shadow-sm cursor-pointer"
                >
                  <Camera className="w-3.5 h-3.5 text-indigo-500" />
                  <span>{isCustomPhoto ? 'Custom Photo Active (Update)' : 'Upload Real Photo'}</span>
                </button>
              </div>
            ) : (
              /* Terminal Card */
              <div className="relative group w-full max-w-md">
                <div className="relative w-full rounded-2xl overflow-hidden bg-[#0d1527] border border-[#424754]/60 shadow-2xl flex flex-col">
                  
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between px-4 py-3 bg-[#131b2e] border-b border-[#424754]/40">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                      <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                      <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                    </div>
                    
                    <div className="flex items-center gap-1.5 text-xs font-['JetBrains_Mono'] text-[#adc6ff]/80">
                      <Terminal className="w-3.5 h-3.5" />
                      <span>aasif@portfolio:~$</span>
                    </div>

                    <button
                      onClick={handleCopyCode}
                      title="Copy code snippet"
                      aria-label="Copy code snippet"
                      className="p-1 rounded text-[#8c909f] hover:text-[#adc6ff] transition-colors cursor-pointer"
                    >
                      {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {/* Code Body */}
                  <div className="p-5 font-['JetBrains_Mono'] text-xs leading-relaxed overflow-x-auto text-[#dae2fd]">
                    <div className="space-y-1">
                      <p className="text-[#8c909f]">
                        <span className="text-[#ff7b72]">const</span> <span className="text-[#79c0ff]">developer</span> = {'{'}
                      </p>
                      <p className="pl-4">
                        <span className="text-[#7ee787]">name</span>: <span className="text-[#a5d6ff]">"{PERSONAL_INFO.name}"</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-[#7ee787]">pronouns</span>: <span className="text-[#a5d6ff]">"{PERSONAL_INFO.pronouns}"</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-[#7ee787]">bio</span>: <span className="text-[#a5d6ff]">"{PERSONAL_INFO.bioTag}"</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-[#7ee787]">github</span>: <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-[#79c0ff] hover:underline">"@{PERSONAL_INFO.githubUsername}"</a>,
                      </p>
                      <p className="pl-4">
                        <span className="text-[#7ee787]">education</span>: <span className="text-[#a5d6ff]">"B.E. CSE (2025 - 2029)"</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-[#7ee787]">interests</span>: [
                        <span className="text-[#a5d6ff]">"AI"</span>, <span className="text-[#a5d6ff]">"ML"</span>, <span className="text-[#a5d6ff]">"Full-Stack"</span>
                        ],
                      </p>
                      <p className="pl-4">
                        <span className="text-[#7ee787]">status</span>: <span className="text-emerald-400">"{PERSONAL_INFO.status}"</span>
                      </p>
                      <p className="text-[#8c909f]">{'};'}</p>
                    </div>

                    {/* Terminal Execution Output */}
                    <div className="mt-4 pt-3 border-t border-[#424754]/40 flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] text-[#8c909f] flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          node engineer.ts
                        </span>
                        <button
                          onClick={handleRunScript}
                          disabled={isRunning}
                          className="px-2.5 py-1 rounded bg-[#171f33] hover:bg-[#202b46] border border-[#424754]/50 text-[#adc6ff] text-[11px] font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <Play className="w-3 h-3 text-[#adc6ff]" />
                          <span>{isRunning ? 'Running...' : 'Execute'}</span>
                        </button>
                      </div>

                      {outputLog && (
                        <div className="p-2.5 rounded bg-[#020617] border border-emerald-500/30 text-emerald-300 text-[11px] flex items-start gap-2 animate-fadeIn">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{outputLog}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Footer Tag */}
                  <div className="px-4 py-2.5 bg-[#0b1326] border-t border-[#424754]/40 flex items-center justify-between text-[11px] font-['JetBrains_Mono'] text-[#8c909f]">
                    <span className="flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-[#ffb786]" />
                      AI Developer Profile
                    </span>
                    <span className="text-[#adc6ff]">UTF-8 • TypeScript</span>
                  </div>

                </div>
              </div>
            )}

          </div>

        </div>

        {/* Tech Stack Marquee Ticker */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-[#424754]/30">
          <div className="flex items-center justify-between gap-4 mb-3">
            <span className="text-xs font-['JetBrains_Mono'] font-semibold text-slate-500 dark:text-[#8c909f] uppercase tracking-wider">
              Core Technologies & Frameworks
            </span>
            <span className="text-[11px] font-['JetBrains_Mono'] text-indigo-600 dark:text-[#adc6ff]">
              Explore Tech Stack →
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {techStackItems.map((tech, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-100/80 dark:bg-[#131b2e] border border-slate-200 dark:border-[#424754]/40 text-xs font-['JetBrains_Mono'] text-slate-800 dark:text-[#dae2fd] hover:border-indigo-500 dark:hover:border-indigo-400 hover:scale-105 transition-all shadow-xs"
              >
                <span>{tech.icon}</span>
                <span className="font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

