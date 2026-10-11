import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, FileText, Sparkles, Zap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import Hyperspeed from './Hyperspeed';

interface HeroSectionProps {
  darkMode?: boolean;
  onNavigate: (sectionId: string) => void;
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  darkMode = true, 
  onNavigate, 
  onOpenResume 
}) => {
  // Typewriter effect for "Hi, I'm Aasif Ibrahim"
  const fullGreeting = "Hi, I'm Aasif Ibrahim";
  const [typedGreeting, setTypedGreeting] = useState('');
  const [isBoosting, setIsBoosting] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullGreeting.length) {
        setTypedGreeting(fullGreeting.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[720px] flex items-center">
      
      {/* Interactive Hyperspeed 3D Canvas Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-auto">
        <Hyperspeed
          curve="winding"
          curvature={0.9}
          speed={1.1}
          boost={3.5}
          fov={85}
          boostFov={128}
          lanes={3}
          roadWidth={12}
          medianWidth={2}
          density={38}
          trailLength={1.1}
          lightSize={1.2}
          poles={22}
          dust={130}
          glow={0.55}
          reflections={0.45}
          roadOpacity={0.06}
          steer={0.3}
          theme={darkMode ? 'dark' : 'light'}
          tailColors={darkMode ? ['#d856bf', '#818cf8', '#c084fc'] : ['#a21caf', '#6366f1', '#9333ea']}
          headColors={darkMode ? ['#06b6d4', '#0ea5e9', '#38bdf8'] : ['#0284c7', '#0369a1', '#06b6d4']}
          poleColors={['#06b6d4']}
          interactive
          onBoostStart={() => setIsBoosting(true)}
          onBoostEnd={() => setIsBoosting(false)}
        />
        
        {/* Soft radial and linear gradient scrims to ensure 100% WCAG AA text legibility */}
        <div 
          className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[var(--bg)]/95 via-[var(--bg)]/80 to-[var(--bg)]/60 dark:from-[var(--bg)]/95 dark:via-[var(--bg)]/80 dark:to-[var(--bg)]/50" 
          aria-hidden="true" 
        />
        <div 
          className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[var(--bg)]/40 via-transparent to-[var(--bg)]" 
          aria-hidden="true" 
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Hero Copy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill Badge & Warp indicator */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[var(--surface-glass)] backdrop-blur-md border border-[var(--line)] text-xs font-medium text-[var(--ink)] shadow-xs">
                <span className="status-dot" />
                <span>Available for Opportunities &amp; Projects</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--tint-1)] border border-[var(--line-subtle)] text-[11px] font-mono text-[var(--ink-faint)]">
                <Zap className={`w-3 h-3 ${isBoosting ? 'text-amber-400 animate-bounce' : 'text-cyan-400'}`} />
                <span>{isBoosting ? 'HYPERSPEED WARP ACTIVE' : 'Hold click to Hyperspeed'}</span>
              </div>
            </div>

            {/* Typewriter Greeting Tag */}
            <div className="text-sm sm:text-base font-['JetBrains_Mono'] text-[var(--ink-soft)] font-medium tracking-tight">
              <span>{typedGreeting}</span>
              <span className="inline-block w-2.5 h-4 ml-0.5 bg-[var(--ink)] align-middle animate-pulse" />
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-['Manrope'] font-extrabold tracking-tight text-[var(--ink)] leading-[1.12]">
              Computer Science &amp; Engineering Student <br />
              <span className="text-[var(--ink-soft)] font-bold">
                &amp; AI &amp; Software Developer
              </span>
            </h1>

            {/* Subtitle description */}
            <p className="text-base sm:text-lg text-[var(--ink-soft)] leading-relaxed max-w-xl">
              Building practical digital experiences, exploring artificial intelligence, machine learning, and Microsoft Azure cloud systems, while actively growing student tech communities.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('projects');
                }}
                className="btn primary shadow-md"
              >
                View My Projects
              </a>
              <button
                onClick={onOpenResume}
                className="btn secondary shadow-xs"
              >
                <FileText className="w-4 h-4 text-[var(--ink-soft)]" />
                <span>View Resume</span>
              </button>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="GitHub Profile"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="social-btn"
                aria-label="Email Me"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="social-btn"
                aria-label="Call Me"
                title="Telephone Contact"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>

            {/* Mini Stats strip matching fahimio */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-[var(--line)] max-w-md">
              <div className="p-3 rounded-xl bg-[var(--surface-glass)] backdrop-blur-md border border-[var(--line)]">
                <div className="text-xl sm:text-2xl font-bold font-['Manrope'] text-[var(--ink)]">
                  8.3
                </div>
                <div className="text-[11px] font-medium text-[var(--ink-faint)] uppercase tracking-wider mt-0.5">
                  CGPA Score
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[var(--surface-glass)] backdrop-blur-md border border-[var(--line)]">
                <div className="text-xl sm:text-2xl font-bold font-['Manrope'] text-[var(--ink)]">
                  7+
                </div>
                <div className="text-[11px] font-medium text-[var(--ink-faint)] uppercase tracking-wider mt-0.5">
                  GitHub Builds
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[var(--surface-glass)] backdrop-blur-md border border-[var(--line)]">
                <div className="text-xl sm:text-2xl font-bold font-['Manrope'] text-[var(--ink)]">
                  2+
                </div>
                <div className="text-[11px] font-medium text-[var(--ink-faint)] uppercase tracking-wider mt-0.5">
                  AI &amp; Cloud Specs
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Code Window Visual */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0 flex justify-center">
            
            {/* Floating Top Badge */}
            <div className="float-chip -top-4 -left-2 sm:-left-4">
              <span>⚡</span> Always Shipping
            </div>

            {/* Code Window */}
            <div className="code-window w-full max-w-md text-xs sm:text-[13px] font-mono leading-relaxed select-none backdrop-blur-md">
              
              {/* Titlebar with Mac dots */}
              <div className="code-titlebar flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="code-dot r" />
                  <span className="code-dot y" />
                  <span className="code-dot g" />
                </div>
                <span className="text-[#888888] font-['JetBrains_Mono'] text-[11px] font-medium">
                  aasif.ts
                </span>
                <span className="w-10 text-right text-[10px] text-[#555]">TS</span>
              </div>

              {/* Code Body */}
              <div className="p-5 sm:p-6 text-[#E0E0E0] space-y-1.5 overflow-x-auto bg-[#0a0a0a]/90">
                <p>
                  <span className="text-[#FF7B72]">interface</span>{' '}
                  <span className="text-[#FFA657]">Engineer</span> {'{'}
                </p>
                <p className="pl-4">
                  <span className="text-[#79C0FF]">name</span>: <span className="text-[#A5D6FF]">string</span>;
                </p>
                <p className="pl-4">
                  <span className="text-[#79C0FF]">college</span>: <span className="text-[#A5D6FF]">string</span>;
                </p>
                <p className="pl-4">
                  <span className="text-[#79C0FF]">cgpa</span>: <span className="text-[#79C0FF]">number</span>;
                </p>
                <p className="pl-4">
                  <span className="text-[#79C0FF]">focus</span>: <span className="text-[#A5D6FF]">string</span>[];
                </p>
                <p>{'}'}</p>
                <br />
                <p>
                  <span className="text-[#FF7B72]">const</span>{' '}
                  <span className="text-[#D2A8FF]">aasif</span>:{' '}
                  <span className="text-[#FFA657]">Engineer</span> = {'{'}
                </p>
                <p className="pl-4">
                  <span className="text-[#79C0FF]">name</span>:{' '}
                  <span className="text-[#A5D6FF]">"{PERSONAL_INFO.name}"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-[#79C0FF]">college</span>:{' '}
                  <span className="text-[#A5D6FF]">"AMSCE (Anna Univ)"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-[#79C0FF]">cgpa</span>:{' '}
                  <span className="text-[#79C0FF]">8.3</span>,
                </p>
                <p className="pl-4">
                  <span className="text-[#79C0FF]">focus</span>: [
                </p>
                <p className="pl-8 text-[#A5D6FF]">
                  "AI &amp; Machine Learning",
                </p>
                <p className="pl-8 text-[#A5D6FF]">
                  "Microsoft Azure",
                </p>
                <p className="pl-8 text-[#A5D6FF]">
                  "TypeScript Web Apps"
                </p>
                <p className="pl-4">]</p>
                <p>{'};'}</p>
                <br />
                <p className="text-[#7EE787]">
                  <span className="text-[#FF7B72]">export default</span> aasif;
                </p>
              </div>

            </div>

            {/* Floating Bottom Badge */}
            <div className="float-chip -bottom-4 -right-2 sm:-right-4">
              <span>🎓</span> Anna University CSE
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
