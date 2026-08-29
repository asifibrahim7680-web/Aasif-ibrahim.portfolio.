import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Mail, 
  Sparkles, 
  MapPin, 
  Code2, 
  BrainCircuit, 
  Terminal, 
  Play, 
  CheckCircle2, 
  Copy, 
  Check, 
  Laptop, 
  FileText, 
  Award, 
  Cpu, 
  Cloud, 
  Globe, 
  Github, 
  Linkedin, 
  ExternalLink, 
  Flame, 
  Clock, 
  Zap, 
  RotateCcw,
  Sliders
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onOpenResume }) => {
  // Developer Cockpit tab state: 'cli' | 'specs' | 'code'
  const [activeCockpitTab, setActiveCockpitTab] = useState<'cli' | 'specs' | 'code'>('cli');

  // Live Chennai Time State (IST = UTC+5:30)
  const [chennaiTime, setChennaiTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setChennaiTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Dynamic Typewriter Effect matching resume skills
  const roles = [
    "B.E. Computer Science Student",
    "AI & Technology Enthusiast",
    "Community Builder",
    "TypeScript & Full-Stack Developer",
    "Cloud & Azure Practitioner"
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = roles[currentRoleIndex];
    let typingSpeed = isDeleting ? 45 : 85;

    if (!isDeleting && displayedText === currentWord) {
      const pauseTimer = setTimeout(() => setIsDeleting(true), 1800);
      return () => clearTimeout(pauseTimer);
    } else if (isDeleting && displayedText === "") {
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

  // CLI State
  const [cliInput, setCliInput] = useState('');
  const [cliLogs, setCliLogs] = useState<Array<{ command: string; output: string | React.ReactNode; isError?: boolean }>>([
    { command: 'whoami', output: `Aasif Ibrahim • B.E. CSE @ Anna University (CGPA 8.3) • AI & Cloud Enthusiast` },
    { command: 'get-status', output: `🟢 Active • Available for internships, AI projects & technical community workshops.` }
  ]);

  const executeCliCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    let response: React.ReactNode = '';
    let isErr = false;

    switch (trimmed) {
      case 'help':
        response = `Available commands: whoami, skills, projects, stats, edu, contact, lab, resume, clear`;
        break;
      case 'whoami':
        response = `${PERSONAL_INFO.name}: ${PERSONAL_INFO.headline}. Based in ${PERSONAL_INFO.location}.`;
        break;
      case 'skills':
        response = `Artificial Intelligence, Machine Learning, Microsoft Azure, TypeScript, React, Cloud Computing, EdTech Software.`;
        break;
      case 'projects':
        response = `1. Bean & Byte AI Coffee Shop (TypeScript/AI) | 2. Foundation AI (Learn Track) | 3. Daily Attendance System.`;
        break;
      case 'stats':
        response = `CGPA: 8.3 / 10 | Degree: B.E. CSE (2025-2029) | Location: Chennai, India.`;
        break;
      case 'edu':
        response = `Aalim Muhammed Salegh College of Engineering (Anna University) — B.E. Computer Science & Engineering.`;
        break;
      case 'contact':
        response = `Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone} | GitHub: ${PERSONAL_INFO.githubUsername}`;
        break;
      case 'lab':
        onNavigate('interactive-lab');
        response = `Navigating to Live Project Lab...`;
        break;
      case 'resume':
        onOpenResume();
        response = `Opening Official Verified Resume Modal...`;
        break;
      case 'clear':
        setCliLogs([]);
        setCliInput('');
        return;
      default:
        response = `Command '${trimmed}' not recognized. Type 'help' for command list.`;
        isErr = true;
    }

    setCliLogs((prev) => [...prev, { command: cmd, output: response, isError: isErr }]);
    setCliInput('');
  };

  const handleCliSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCliCommand(cliInput);
  };

  // Code Tab state
  const [copiedCode, setCopiedCode] = useState(false);
  const [isRunningScript, setIsRunningScript] = useState(false);
  const [scriptResult, setScriptResult] = useState<string | null>(null);

  const codeSnippet = `// aasif_profile.ts
import { Engineer } from '@anna-univ/cse';

export const engineer: Engineer = {
  name: "${PERSONAL_INFO.name}",
  degree: "B.E. Computer Science & Engineering",
  cgpa: 8.3,
  interests: ["Artificial Intelligence", "Microsoft Azure", "Community Building"],
  activeProjects: ["Bean & Byte AI Coffee", "Learn Track (Foundation AI)"],
  isAvailableForWork: true
};`;

  const handleRunTypeScript = () => {
    setIsRunningScript(true);
    setScriptResult("Compiling TypeScript AST with strict mode...");
    setTimeout(() => {
      setIsRunningScript(false);
      setScriptResult("✓ Success: 0 errors | Target: ESNext | CGPA: 8.3 validated | AI Engine Online");
    }, 600);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

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

  return (
    <section id="hero" className="min-h-[92vh] flex flex-col justify-center pt-24 pb-14 lg:pt-28 lg:pb-16 relative overflow-hidden bg-white dark:bg-[#070b16] cyber-grid transition-colors duration-300">
      {/* Subtle Background Glows */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Status & Live Telemetry Pill */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-300 text-xs font-['JetBrains_Mono'] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-semibold">Available for Opportunities</span>
              </div>

              {chennaiTime && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-[#131b2e] border border-slate-200 dark:border-[#334155]/60 text-slate-700 dark:text-[#adc6ff] text-xs font-['JetBrains_Mono']">
                  <Clock className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Chennai {chennaiTime}</span>
                </div>
              )}
            </div>

            {/* Main Headline & Identity */}
            <div>
              <div className="text-xs font-['JetBrains_Mono'] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-1.5 flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5" />
                <span>Developer & AI Enthusiast Portfolio</span>
              </div>
              <h1 className="font-['Outfit'] font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white tracking-tight leading-[1.1]">
                Aasif Ibrahim
              </h1>

              {/* Dynamic Typewriter */}
              <div className="h-10 sm:h-12 flex items-center mt-2">
                <span className="font-['Outfit'] text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-500 dark:from-indigo-400 dark:via-purple-300 dark:to-indigo-300 bg-clip-text text-transparent">
                  {displayedText}
                </span>
                <span className="w-0.5 h-6 sm:h-7 bg-indigo-600 dark:bg-indigo-400 ml-1.5 animate-pulse" />
              </div>
            </div>

            {/* Bio Description */}
            <p className="text-slate-600 dark:text-[#c2c6d6] text-sm sm:text-base leading-relaxed max-w-xl">
              Computer Science & Engineering student at <strong className="text-slate-900 dark:text-white">Aalim Muhammed Salegh College of Engineering (Anna University)</strong> with an <strong className="text-indigo-600 dark:text-indigo-400">8.3 CGPA</strong>. Architecting practical AI projects, TypeScript applications, and community learning initiatives.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <button
                id="hero-explore-projects-btn"
                onClick={() => onNavigate('projects')}
                className="px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] text-white font-['Outfit'] font-bold text-sm tracking-wide shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all flex items-center gap-2.5 cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-open-resume-btn"
                onClick={onOpenResume}
                className="px-5 py-3.5 rounded-xl bg-white dark:bg-[#131b2e] hover:bg-slate-50 dark:hover:bg-[#1e293b] active:scale-[0.98] text-slate-800 dark:text-white border border-slate-200 dark:border-[#334155]/60 font-['Outfit'] font-bold text-sm transition-all flex items-center gap-2 shadow-sm cursor-pointer"
              >
                <FileText className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>Verified Resume</span>
              </button>

              <button
                onClick={() => onNavigate('interactive-lab')}
                className="px-4 py-3.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/60 font-['Outfit'] font-bold text-sm transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Live Project Lab</span>
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-3 pt-3 border-t border-slate-200 dark:border-[#334155]/40 font-['JetBrains_Mono'] text-xs">
              <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-[#334155]/40">
                <div className="text-slate-400 dark:text-[#8c909f] text-[10px]">Academic Standing</div>
                <div className="font-bold text-slate-900 dark:text-white text-sm">8.3 CGPA</div>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-[#334155]/40">
                <div className="text-slate-400 dark:text-[#8c909f] text-[10px]">University</div>
                <div className="font-bold text-slate-900 dark:text-white text-sm truncate">Anna Univ</div>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-[#334155]/40">
                <div className="text-slate-400 dark:text-[#8c909f] text-[10px]">Cloud & AI</div>
                <div className="font-bold text-indigo-600 dark:text-indigo-400 text-sm">Azure Cert</div>
              </div>
            </div>

          </div>

          {/* Right Column: Multi-tab Developer Cockpit */}
          <div className="lg:col-span-6">
            <div className="bg-slate-900 dark:bg-[#0f172a] rounded-2xl border border-slate-800 dark:border-[#334155] shadow-2xl overflow-hidden">
              
              {/* Cockpit Window Header */}
              <div className="px-4 py-3 bg-slate-950 dark:bg-[#070b16] border-b border-slate-800 dark:border-[#334155]/60 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-['JetBrains_Mono'] text-slate-400 ml-2 font-medium">aasif-developer-cockpit</span>
                </div>

                {/* Tab Switcher */}
                <div className="flex items-center gap-1 p-0.5 rounded-lg bg-slate-900 dark:bg-[#131b2e] border border-slate-800 text-[11px] font-['JetBrains_Mono']">
                  <button
                    onClick={() => setActiveCockpitTab('cli')}
                    className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                      activeCockpitTab === 'cli' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Terminal
                  </button>
                  <button
                    onClick={() => setActiveCockpitTab('specs')}
                    className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                      activeCockpitTab === 'specs' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Specs
                  </button>
                  <button
                    onClick={() => setActiveCockpitTab('code')}
                    className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                      activeCockpitTab === 'code' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Code
                  </button>
                </div>
              </div>

              {/* TAB 1: Interactive CLI */}
              {activeCockpitTab === 'cli' && (
                <div className="p-4 sm:p-5 font-['JetBrains_Mono'] text-xs text-slate-300 space-y-4">
                  
                  {/* CLI preset chips */}
                  <div className="flex flex-wrap items-center gap-1.5 pb-2 border-b border-slate-800">
                    <span className="text-[10px] text-slate-500 uppercase">Quick:</span>
                    {['help', 'whoami', 'skills', 'projects', 'stats', 'edu', 'contact', 'clear'].map((cmd) => (
                      <button
                        key={cmd}
                        onClick={() => executeCliCommand(cmd)}
                        className="px-2 py-0.5 rounded bg-slate-800 hover:bg-indigo-600 text-slate-300 hover:text-white text-[10px] transition-colors cursor-pointer"
                      >
                        ${cmd}
                      </button>
                    ))}
                  </div>

                  {/* CLI Log stream */}
                  <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1">
                    {cliLogs.map((log, index) => (
                      <div key={index} className="space-y-1">
                        <div className="flex items-center gap-2 text-indigo-400">
                          <span className="text-emerald-400">aasif@chennai:~$</span>
                          <span className="font-bold">{log.command}</span>
                        </div>
                        <div className={`pl-4 leading-relaxed ${log.isError ? 'text-rose-400' : 'text-slate-300'}`}>
                          {log.output}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CLI Form Input */}
                  <form onSubmit={handleCliSubmit} className="flex items-center gap-2 pt-2 border-t border-slate-800">
                    <span className="text-emerald-400 font-bold">aasif@chennai:~$</span>
                    <input
                      type="text"
                      value={cliInput}
                      onChange={(e) => setCliInput(e.target.value)}
                      placeholder="type a command (e.g. 'skills' or 'help')..."
                      className="flex-1 bg-transparent border-none text-white focus:outline-none text-xs font-['JetBrains_Mono'] placeholder:text-slate-600"
                    />
                    <button
                      type="submit"
                      className="px-2.5 py-1 rounded bg-indigo-600 hover:bg-indigo-700 text-white text-[11px] font-bold transition-colors cursor-pointer"
                    >
                      Run
                    </button>
                  </form>
                </div>
              )}

              {/* TAB 2: System Specs & Metric Gauges */}
              {activeCockpitTab === 'specs' && (
                <div className="p-5 font-['JetBrains_Mono'] text-xs text-slate-300 space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                      <span className="text-slate-500 text-[10px] uppercase">Academic Gauge</span>
                      <div className="text-xl font-bold text-white">8.3 / 10</div>
                      <div className="text-[10px] text-indigo-400">Anna University CSE</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                      <span className="text-slate-500 text-[10px] uppercase">Timeline</span>
                      <div className="text-xl font-bold text-white">2025 - 2029</div>
                      <div className="text-[10px] text-emerald-400">Undergraduate Track</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-slate-400">Azure Cloud & AI Mastery</span>
                      <span className="text-indigo-400 font-bold">92%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-500 rounded-full w-[92%]" />
                    </div>
                    <div className="flex justify-between text-[11px]">
                      <span className="text-slate-400">TypeScript & Frontend Systems</span>
                      <span className="text-emerald-400 font-bold">95%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full w-[95%]" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                    <span>Host: Chennai, Tamil Nadu (India)</span>
                    <span className="text-emerald-400 flex items-center gap-1 font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> System Optimal
                    </span>
                  </div>
                </div>
              )}

              {/* TAB 3: TypeScript Code Sandbox */}
              {activeCockpitTab === 'code' && (
                <div className="p-4 sm:p-5 font-['JetBrains_Mono'] text-xs text-slate-300 space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <span className="text-indigo-400 text-[11px] font-bold">aasif_profile.ts</span>
                    <div className="flex gap-2">
                      <button
                        onClick={handleCopyCode}
                        className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[10px] flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        {copiedCode ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedCode ? 'Copied' : 'Copy'}</span>
                      </button>
                      <button
                        onClick={handleRunTypeScript}
                        disabled={isRunningScript}
                        className="px-2.5 py-1 rounded bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] font-bold flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <Play className="w-3 h-3" />
                        <span>Execute</span>
                      </button>
                    </div>
                  </div>

                  <pre className="text-[11px] text-slate-300 overflow-x-auto leading-relaxed bg-slate-950 p-3 rounded-lg border border-slate-800/80">
                    {codeSnippet}
                  </pre>

                  {scriptResult && (
                    <div className="p-2.5 rounded bg-slate-950 border border-emerald-500/40 text-[11px] text-emerald-300">
                      {scriptResult}
                    </div>
                  )}
                </div>
              )}

            </div>
          </div>

        </div>

        {/* Tech Stack Marquee Ticker */}
        <div className="mt-14 pt-8 border-t border-slate-200 dark:border-[#334155]/40">
          <div className="flex items-center justify-between gap-4 mb-3">
            <span className="text-xs font-['JetBrains_Mono'] font-bold text-slate-500 dark:text-[#8c909f] uppercase tracking-wider">
              Core Technical Stack & Tools
            </span>
            <span className="text-xs font-['JetBrains_Mono'] text-indigo-600 dark:text-indigo-400 font-semibold">
              Hands-On Production Mastery →
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {techStackItems.map((tech, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-100 dark:bg-[#0f172a] border border-slate-200 dark:border-[#334155]/60 text-xs font-['JetBrains_Mono'] text-slate-800 dark:text-[#dae2fd] hover:border-indigo-500 dark:hover:border-indigo-400 hover:scale-105 transition-all shadow-xs"
              >
                <span>{tech.icon}</span>
                <span className="font-semibold">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
