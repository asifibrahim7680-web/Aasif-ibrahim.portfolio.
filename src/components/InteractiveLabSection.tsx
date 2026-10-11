import React, { useState, useRef } from 'react';
import { Coffee, BookOpen, QrCode, Sparkles, Check, ArrowRight, Play, RotateCcw, Activity, Globe, SunMedium } from 'lucide-react';
import RippleGrid from './RippleGrid';
import { HorizonBloom, HorizonBloomHandle, HorizonBloomPreset, HORIZON_BLOOM_PRESETS } from './HorizonBloom';

type LabTab = 'coffee-ai' | 'edtech-ai' | 'attendance-qr' | 'ripple-grid' | 'horizon-bloom';

interface InteractiveLabSectionProps {
  darkMode?: boolean;
}

export const InteractiveLabSection: React.FC<InteractiveLabSectionProps> = ({ darkMode = true }) => {
  const [activeTab, setActiveTab] = useState<LabTab>('coffee-ai');

  // Lab 5: Horizon Bloom Pro Shader Workbench
  const bloomRef = useRef<HorizonBloomHandle>(null);
  const [bloomPreset, setBloomPreset] = useState<HorizonBloomPreset>('dawn');
  const [bloomSunrise, setBloomSunrise] = useState<number>(1);
  const [bloomAtmosphere, setBloomAtmosphere] = useState<number>(1);
  const [bloomAurora, setBloomAurora] = useState<number>(1.2);
  const [bloomAutoAurora, setBloomAutoAurora] = useState<boolean>(true);
  const [bloomStars, setBloomStars] = useState<number>(0.6);
  const [bloomCurvature, setBloomCurvature] = useState<number>(1);

  // Lab 4: RippleGrid Interactive Shader Workbench States
  const [gridVariant, setGridVariant] = useState<'lines' | 'dots' | 'cross'>('lines');
  const [gridCellSize, setGridCellSize] = useState<number>(48);
  const [gridStrength, setGridStrength] = useState<number>(1.2);
  const [gridGlow, setGridGlow] = useState<number>(0.6);
  const [gridTilt, setGridTilt] = useState<number>(0);
  const [gridAutoRipple, setGridAutoRipple] = useState<'center' | 'random' | 'none'>('center');

  // Lab 1: Coffee Matcher
  const [flavor, setFlavor] = useState<'chocolate' | 'fruity' | 'nutty' | 'floral'>('chocolate');
  const [intensity, setIntensity] = useState<number>(75);
  const [brewMethod, setBrewMethod] = useState<'Espresso' | 'Pour Over' | 'Cold Brew'>('Espresso');
  const [isProcessing, setIsProcessing] = useState(false);
  const [coffeeOutput, setCoffeeOutput] = useState({
    roast: 'Dark Roast (Vienna Style)',
    beanOrigin: '100% Arabica Ethiopian Yirgacheffe & Colombian Supremo',
    flavorNotes: ['Dark Cocoa', 'Toasted Hazelnut', 'Caramelized Molasses'],
    score: 96
  });

  const handleSimulateCoffee = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      if (flavor === 'fruity') {
        setCoffeeOutput({
          roast: 'Light-Medium Roast (Cinnamon)',
          beanOrigin: 'Washed Kenyan AA Single Origin',
          flavorNotes: ['Wild Berry', 'Bergamot Citrus', 'Honey Nectar'],
          score: 98
        });
      } else if (flavor === 'nutty') {
        setCoffeeOutput({
          roast: 'Medium Roast (American)',
          beanOrigin: 'Costa Rican Tarrazu & Java Estate',
          flavorNotes: ['Pecan Praline', 'Creamy Walnut', 'Vanilla Bean'],
          score: 94
        });
      } else if (flavor === 'floral') {
        setCoffeeOutput({
          roast: 'Artisan Light Roast',
          beanOrigin: 'Panama Geisha Highland Micro-lot',
          flavorNotes: ['Jasmine Blossom', 'Lemongrass', 'Peach Tea'],
          score: 99
        });
      } else {
        setCoffeeOutput({
          roast: 'Medium-Dark Roast (Full City)',
          beanOrigin: 'Guatemalan Antigua & Brazilian Cerrado',
          flavorNotes: ['Belgian Dark Chocolate', 'Roasted Almond', 'Brown Sugar'],
          score: 95
        });
      }
    }, 450);
  };

  // Lab 2: Foundation AI Diagnoser
  const [topic, setTopic] = useState('Recursion & Tree Traversals');
  const [level, setLevel] = useState<'Beginner' | 'Intermediate' | 'Advanced'>('Intermediate');
  const [isDiagnosing, setIsDiagnosing] = useState(false);
  const [diagnosticResult, setDiagnosticResult] = useState({
    concept: 'Call Stack Frames & Divide-and-Conquer State Unwinding',
    steps: [
      'Establish Base Case (Stopping invariant to prevent Maximum Call Stack Exceeded)',
      'Subproblem Decomposition (Recurrence relation T(n) = 2T(n/2) + O(1))',
      'In-Order / Pre-Order / Post-Order Node Visit Sequence'
    ],
    hours: '3.5 Hours'
  });

  const handleDiagnose = (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) return;
    setIsDiagnosing(true);
    setTimeout(() => {
      setIsDiagnosing(false);
      setDiagnosticResult({
        concept: `${topic} Structural Decomposition (${level})`,
        steps: [
          `Phase 1: Conceptual mental model & prerequisite verification for ${topic}`,
          `Phase 2: TypeScript type invariants & recursive boundary conditions`,
          `Phase 3: Applied real-world synthesis with test runner validation`
        ],
        hours: level === 'Beginner' ? '2.0 Hours' : level === 'Intermediate' ? '4.5 Hours' : '7.0 Hours'
      });
    }, 450);
  };

  // Lab 3: Attendance Pass Generator
  const [studentId, setStudentId] = useState('AMSCE-2025-CSE-042');
  const [attendanceCode, setAttendanceCode] = useState('VERIF-88392-OK');
  const [passGenerated, setPassGenerated] = useState(false);

  const handleGeneratePass = () => {
    setPassGenerated(true);
    setAttendanceCode(`VERIF-${Math.floor(10000 + Math.random() * 90000)}-${studentId.slice(-3)}`);
  };

  return (
    <section id="interactive-lab" className="py-24 relative bg-[var(--bg-alt)] border-t border-[var(--line)] overflow-hidden">
      
      {/* Interactive WebGL RippleGrid Background Canvas */}
      <div className="absolute inset-0 z-0 pointer-events-auto opacity-35 dark:opacity-45 overflow-hidden">
        <RippleGrid
          color={darkMode ? "#38bdf8" : "#0284c7"}
          variant="lines"
          cellSize={48}
          lineWidth={1}
          glow={0.5}
          rippleStrength={1.2}
          rippleSpeed={1}
          rippleSize={1.1}
          autoRipple="center"
          rippleInterval={3.2}
          fade={0.65}
          mouseInteraction={true}
          clickRipple={true}
          lightMode={!darkMode}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-alt)]/80 via-transparent to-[var(--bg-alt)]/90 pointer-events-none" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 relative z-10 pointer-events-auto">
        
        {/* Section Head matching fahimio */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <span className="eyebrow">
              Interactive Sandbox
            </span>
            <h2 className="text-3xl sm:text-4xl font-['Manrope'] font-extrabold text-[var(--ink)] tracking-tight">
              Live Engineering Simulations
            </h2>
            <p className="text-base text-[var(--ink-soft)] leading-relaxed">
              Test the live heuristic algorithms, diagnostic pipelines, and verification models powering my featured TypeScript and AI builds.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--surface-glass)] backdrop-blur-md border border-[var(--line)] text-xs font-mono text-[var(--ink-faint)] shadow-xs">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>WebGL RippleGrid Active · Move or click</span>
          </div>
        </div>

        {/* Tab Controls Bar */}
        <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-[var(--surface)] border border-[var(--line)] max-w-xl mb-8">
          <button
            onClick={() => setActiveTab('coffee-ai')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'coffee-ai'
                ? 'bg-[var(--ink)] text-[var(--surface)] shadow-xs'
                : 'text-[var(--ink-soft)] hover:text-[var(--ink)]'
            }`}
          >
            <Coffee className="w-4 h-4" />
            <span>Bean &amp; Byte AI</span>
          </button>

          <button
            onClick={() => setActiveTab('edtech-ai')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'edtech-ai'
                ? 'bg-[var(--ink)] text-[var(--surface)] shadow-xs'
                : 'text-[var(--ink-soft)] hover:text-[var(--ink)]'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Foundation AI</span>
          </button>

          <button
            onClick={() => setActiveTab('attendance-qr')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'attendance-qr'
                ? 'bg-[var(--ink)] text-[var(--surface)] shadow-xs'
                : 'text-[var(--ink-soft)] hover:text-[var(--ink)]'
            }`}
          >
            <QrCode className="w-4 h-4" />
            <span>Daily Attendance</span>
          </button>

          <button
            onClick={() => setActiveTab('ripple-grid')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'ripple-grid'
                ? 'bg-[var(--ink)] text-[var(--surface)] shadow-xs'
                : 'text-[var(--ink-soft)] hover:text-[var(--ink)]'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>RippleGrid Shader</span>
          </button>

          <button
            onClick={() => setActiveTab('horizon-bloom')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'horizon-bloom'
                ? 'bg-[var(--ink)] text-[var(--surface)] shadow-xs'
                : 'text-[var(--ink-soft)] hover:text-[var(--ink)]'
            }`}
          >
            <SunMedium className="w-4 h-4 text-amber-500" />
            <span>Horizon Bloom</span>
            <span className="px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-amber-500/15 text-amber-500">
              Pro
            </span>
          </button>
        </div>

        {/* Interactive Workbench Container */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[var(--surface)] border border-[var(--line)] shadow-[var(--shadow-md)]">
          
          {/* TAB 1: Bean & Byte AI Coffee Matcher */}
          {activeTab === 'coffee-ai' && (
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[var(--line)]">
                <div>
                  <h3 className="text-lg font-bold font-['Manrope'] text-[var(--ink)]">
                    Sensory Roast &amp; Flavor Profiler
                  </h3>
                  <p className="text-xs text-[var(--ink-faint)] mt-0.5">
                    Live simulation of the recommendation engine built for bean-byte-aicoffee-shop
                  </p>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-[var(--tint-1)] text-[var(--ink-soft)]">
                  TypeScript • Heuristic Engine
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Inputs */}
                <div className="lg:col-span-5 space-y-5">
                  <div>
                    <label className="block text-xs font-semibold text-[var(--ink)] uppercase tracking-wider mb-2">
                      1. Desired Flavor Profile
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { id: 'chocolate', label: '🍫 Cocoa & Dark' },
                        { id: 'fruity', label: '🍓 Wild Berries' },
                        { id: 'nutty', label: '🌰 Hazelnut Praline' },
                        { id: 'floral', label: '🌸 Jasmine Geisha' }
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setFlavor(item.id as any)}
                          className={`p-2.5 rounded-xl text-xs font-medium border text-left cursor-pointer transition-all ${
                            flavor === item.id
                              ? 'bg-[var(--ink)] text-[var(--surface)] border-[var(--ink)]'
                              : 'bg-[var(--surface)] border-[var(--line)] text-[var(--ink-soft)] hover:border-[var(--ink-soft)]'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold text-[var(--ink)] mb-2">
                      <span>2. Roast Intensity</span>
                      <span className="font-mono">{intensity}%</span>
                    </div>
                    <input
                      type="range"
                      min="20"
                      max="100"
                      value={intensity}
                      onChange={(e) => setIntensity(Number(e.target.value))}
                      className="w-full accent-[var(--ink)] cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[var(--ink)] uppercase tracking-wider mb-2">
                      3. Extraction Method
                    </label>
                    <div className="flex gap-2">
                      {(['Espresso', 'Pour Over', 'Cold Brew'] as const).map((method) => (
                        <button
                          key={method}
                          type="button"
                          onClick={() => setBrewMethod(method)}
                          className={`flex-1 py-2 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                            brewMethod === method
                              ? 'bg-[var(--ink)] text-[var(--surface)] border-[var(--ink)]'
                              : 'bg-[var(--surface)] border-[var(--line)] text-[var(--ink-soft)]'
                          }`}
                        >
                          {method}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={handleSimulateCoffee}
                    disabled={isProcessing}
                    className="btn primary w-full text-center"
                  >
                    {isProcessing ? 'Computing Roast Match...' : 'Generate AI Coffee Profile'}
                  </button>
                </div>

                {/* Output Card */}
                <div className="lg:col-span-7 p-6 rounded-xl bg-[var(--bg-alt)] border border-[var(--line)] space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[var(--line)]">
                    <span className="text-xs font-mono text-[var(--ink-faint)]">RECOMMENDATION RESULT</span>
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 font-mono">
                      MATCH SCORE {coffeeOutput.score}%
                    </span>
                  </div>

                  <div>
                    <span className="text-xs text-[var(--ink-faint)] uppercase block">Optimal Roast</span>
                    <div className="text-lg font-bold font-['Manrope'] text-[var(--ink)]">
                      {coffeeOutput.roast}
                    </div>
                  </div>

                  <div>
                    <span className="text-xs text-[var(--ink-faint)] uppercase block">Bean Origin</span>
                    <div className="text-sm text-[var(--ink)] font-medium">
                      {coffeeOutput.beanOrigin}
                    </div>
                  </div>

                  <div>
                    <span className="text-xs text-[var(--ink-faint)] uppercase block mb-1.5">Sensory Notes</span>
                    <div className="flex flex-wrap gap-1.5">
                      {coffeeOutput.flavorNotes.map((note, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded-md text-xs bg-[var(--surface)] border border-[var(--line)] text-[var(--ink)]">
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Foundation AI EdTech Diagnoser */}
          {activeTab === 'edtech-ai' && (
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[var(--line)]">
                <div>
                  <h3 className="text-lg font-bold font-['Manrope'] text-[var(--ink)]">
                    Curriculum Diagnostic &amp; Study Pipeline
                  </h3>
                  <p className="text-xs text-[var(--ink-faint)] mt-0.5">
                    Live simulation of the educational diagnostic tool built for Foundation AI
                  </p>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-[var(--tint-1)] text-[var(--ink-soft)]">
                  TypeScript • EdTech Pipeline
                </span>
              </div>

              <form onSubmit={handleDiagnose} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[var(--ink)] uppercase tracking-wider mb-2">
                      Topic or Concept
                    </label>
                    <input
                      type="text"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[var(--line)] bg-[var(--surface)] text-[var(--ink)] text-sm focus:outline-hidden focus:border-[var(--ink)]"
                      placeholder="e.g. Dynamic Programming, Graph BFS"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[var(--ink)] uppercase tracking-wider mb-2">
                      Proficiency Level
                    </label>
                    <div className="flex gap-2">
                      {(['Beginner', 'Intermediate', 'Advanced'] as const).map((lvl) => (
                        <button
                          key={lvl}
                          type="button"
                          onClick={() => setLevel(lvl)}
                          className={`flex-1 py-2 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                            level === lvl
                              ? 'bg-[var(--ink)] text-[var(--surface)] border-[var(--ink)]'
                              : 'bg-[var(--surface)] border-[var(--line)] text-[var(--ink-soft)]'
                          }`}
                        >
                          {lvl}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isDiagnosing}
                    className="btn primary w-full text-center"
                  >
                    {isDiagnosing ? 'Analyzing Concept...' : 'Diagnose Concept Mastery'}
                  </button>
                </div>

                <div className="lg:col-span-7 p-6 rounded-xl bg-[var(--bg-alt)] border border-[var(--line)] space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[var(--line)]">
                    <span className="text-xs font-mono text-[var(--ink-faint)]">DIAGNOSTIC BLUEPRINT</span>
                    <span className="text-xs font-mono font-bold text-[var(--ink)]">
                      ESTIMATED: {diagnosticResult.hours}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs text-[var(--ink-faint)] uppercase block">Core Invariant</span>
                    <div className="text-base font-bold font-['Manrope'] text-[var(--ink)] mt-0.5">
                      {diagnosticResult.concept}
                    </div>
                  </div>

                  <div>
                    <span className="text-xs text-[var(--ink-faint)] uppercase block mb-2">Mastery Sequence</span>
                    <ol className="space-y-2 text-xs sm:text-sm text-[var(--ink-soft)] list-decimal list-inside">
                      {diagnosticResult.steps.map((st, i) => (
                        <li key={i} className="leading-relaxed">
                          {st}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </form>
            </div>
          )}

          {/* TAB 3: Daily Attendance Pass Generator */}
          {activeTab === 'attendance-qr' && (
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[var(--line)]">
                <div>
                  <h3 className="text-lg font-bold font-['Manrope'] text-[var(--ink)]">
                    Digital Attendance Checksum Generator
                  </h3>
                  <p className="text-xs text-[var(--ink-faint)] mt-0.5">
                    Verification hash and record verification for Daily Attendance System
                  </p>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-[var(--tint-1)] text-[var(--ink-soft)]">
                  TypeScript • Verification Hash
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[var(--ink)] uppercase tracking-wider mb-2">
                      Student Roll ID
                    </label>
                    <input
                      type="text"
                      value={studentId}
                      onChange={(e) => setStudentId(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[var(--line)] bg-[var(--surface)] text-[var(--ink)] text-sm font-mono focus:outline-hidden focus:border-[var(--ink)]"
                    />
                  </div>

                  <button
                    onClick={handleGeneratePass}
                    className="btn primary w-full text-center"
                  >
                    Generate Digital Verification Pass
                  </button>
                </div>

                <div className="lg:col-span-7 p-6 rounded-xl bg-[var(--bg-alt)] border border-[var(--line)] space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[var(--line)]">
                    <span className="text-xs font-mono text-[var(--ink-faint)]">DIGITAL PASS STATUS</span>
                    <span className="text-xs font-bold font-mono text-emerald-600 dark:text-emerald-400">
                      STATUS: VERIFIED
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-[var(--ink-faint)] block uppercase">Student ID</span>
                      <span className="font-mono font-bold text-[var(--ink)]">{studentId}</span>
                    </div>
                    <div>
                      <span className="text-[var(--ink-faint)] block uppercase">Checksum Token</span>
                      <span className="font-mono font-bold text-[var(--ink)]">{attendanceCode}</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-[var(--surface)] border border-[var(--line)] text-xs text-[var(--ink-soft)] flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Cryptographic checksum verified for Anna University academic attendance portal.</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: Interactive RippleGrid WebGL Shader Workbench */}
          {activeTab === 'ripple-grid' && (
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[var(--line)]">
                <div>
                  <h3 className="text-lg font-bold font-['Manrope'] text-[var(--ink)]">
                    RippleGrid WebGL Shader Workbench
                  </h3>
                  <p className="text-xs text-[var(--ink-faint)] mt-0.5">
                    Live GPU interactive grid distortion shader from React Bits — tune geometry, ripples, and perspective in real-time.
                  </p>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-[var(--tint-1)] text-[var(--ink-soft)]">
                  GLSL ES 3.0 • WebGL2 • 60 FPS
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Parameter Controls */}
                <div className="lg:col-span-5 space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[var(--ink)] uppercase tracking-wider mb-2">
                      Grid Variant
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {(['lines', 'dots', 'cross'] as const).map((variant) => (
                        <button
                          key={variant}
                          type="button"
                          onClick={() => setGridVariant(variant)}
                          className={`py-2 rounded-xl text-xs font-medium border capitalize transition-all cursor-pointer ${
                            gridVariant === variant
                              ? 'bg-[var(--ink)] text-[var(--surface)] border-[var(--ink)]'
                              : 'bg-[var(--surface)] border-[var(--line)] text-[var(--ink-soft)] hover:border-[var(--ink-soft)]'
                          }`}
                        >
                          {variant}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold text-[var(--ink)] mb-2">
                      <span>Cell Size</span>
                      <span className="font-mono">{gridCellSize}px</span>
                    </div>
                    <input
                      type="range"
                      min="24"
                      max="80"
                      step="4"
                      value={gridCellSize}
                      onChange={(e) => setGridCellSize(Number(e.target.value))}
                      className="w-full accent-[var(--ink)] cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold text-[var(--ink)] mb-2">
                      <span>Ripple Strength</span>
                      <span className="font-mono">{gridStrength.toFixed(1)}x</span>
                    </div>
                    <input
                      type="range"
                      min="0.2"
                      max="3.0"
                      step="0.1"
                      value={gridStrength}
                      onChange={(e) => setGridStrength(Number(e.target.value))}
                      className="w-full accent-[var(--ink)] cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold text-[var(--ink)] mb-2">
                      <span>Glow Intensity</span>
                      <span className="font-mono">{gridGlow.toFixed(2)}</span>
                    </div>
                    <input
                      type="range"
                      min="0.1"
                      max="1.5"
                      step="0.05"
                      value={gridGlow}
                      onChange={(e) => setGridGlow(Number(e.target.value))}
                      className="w-full accent-[var(--ink)] cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold text-[var(--ink)] mb-2">
                      <span>Perspective Tilt</span>
                      <span className="font-mono">{gridTilt}°</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="60"
                      step="5"
                      value={gridTilt}
                      onChange={(e) => setGridTilt(Number(e.target.value))}
                      className="w-full accent-[var(--ink)] cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[var(--ink)] uppercase tracking-wider mb-2">
                      Auto Ripple Generator
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {(['center', 'random', 'none'] as const).map((mode) => (
                        <button
                          key={mode}
                          type="button"
                          onClick={() => setGridAutoRipple(mode)}
                          className={`py-2 rounded-xl text-xs font-medium border capitalize transition-all cursor-pointer ${
                            gridAutoRipple === mode
                              ? 'bg-[var(--ink)] text-[var(--surface)] border-[var(--ink)]'
                              : 'bg-[var(--surface)] border-[var(--line)] text-[var(--ink-soft)] hover:border-[var(--ink-soft)]'
                          }`}
                        >
                          {mode}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Live RippleGrid Preview Box */}
                <div className="lg:col-span-7 space-y-3">
                  <div className="relative w-full h-[360px] sm:h-[400px] rounded-2xl overflow-hidden border border-[var(--line)] bg-[var(--surface)] shadow-inner">
                    <RippleGrid
                      color={darkMode ? "#38bdf8" : "#0284c7"}
                      variant={gridVariant}
                      cellSize={gridCellSize}
                      lineWidth={1.2}
                      glow={gridGlow}
                      rippleStrength={gridStrength}
                      rippleSpeed={1}
                      rippleSize={1.2}
                      tilt={gridTilt}
                      autoRipple={gridAutoRipple}
                      rippleInterval={2.6}
                      fade={0.5}
                      mouseInteraction={true}
                      clickRipple={true}
                      lightMode={!darkMode}
                    />

                    {/* Instruction Tag */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                      <span className="px-3 py-1 rounded-full bg-[var(--surface-glass)] backdrop-blur-md border border-[var(--line)] text-[11px] font-mono text-[var(--ink-soft)]">
                        🖱️ Move cursor &amp; click to propagate shockwaves
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-[var(--tint-1)] text-[10px] font-mono text-[var(--ink-faint)]">
                        React Bits Open Source
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-[var(--ink-faint)] leading-relaxed">
                    Powered by high-performance GLSL 300 ES fragment math executing on the GPU via raw WebGL2 contexts without three.js overhead.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: Horizon Bloom Pro Shader Workbench */}
          {activeTab === 'horizon-bloom' && (
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[var(--line)]">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold font-['Manrope'] text-[var(--ink)]">
                      Horizon Bloom WebGL Engine
                    </h3>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500/15 text-amber-500 border border-amber-500/30">
                      React Bits Pro
                    </span>
                  </div>
                  <p className="text-xs text-[var(--ink-faint)] mt-0.5">
                    A sunrise breaking over the glowing edge of a dark planet with atmospheric scattering, OKLab color blending, orbital parallax, and reactive aurora curtains.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => bloomRef.current?.replay()}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium border border-[var(--line)] bg-[var(--surface)] text-[var(--ink)] hover:bg-[var(--bg-alt)] transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5 text-amber-500" />
                    <span>Replay Sunrise</span>
                  </button>
                  <button
                    onClick={() => bloomRef.current?.bloom(0.5, 1.5)}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-500 text-black hover:bg-amber-400 transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Trigger Aurora</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Control Suite */}
                <div className="lg:col-span-5 space-y-4 p-5 rounded-xl bg-[var(--bg-alt)] border border-[var(--line)] text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[var(--ink)] flex items-center gap-1.5">
                      <SunMedium className="w-4 h-4 text-amber-500" />
                      Atmospheric Presets
                    </span>
                    <span className="text-[10px] font-mono text-[var(--ink-faint)]">Three.js + GLSL</span>
                  </div>

                  {/* Preset Pills */}
                  <div className="grid grid-cols-4 gap-1.5 pt-1">
                    {(['dawn', 'eclipse', 'crescent', 'aurora', 'overhead', 'edge', 'twilight', 'halo'] as HorizonBloomPreset[]).map((preset) => (
                      <button
                        key={preset}
                        onClick={() => {
                          setBloomPreset(preset);
                          const cfg = HORIZON_BLOOM_PRESETS[preset];
                          if (cfg) {
                            if (cfg.sunrise !== undefined) setBloomSunrise(cfg.sunrise);
                            if (cfg.atmosphere !== undefined) setBloomAtmosphere(cfg.atmosphere);
                            if (cfg.aurora !== undefined) setBloomAurora(cfg.aurora);
                            if (cfg.stars !== undefined) setBloomStars(cfg.stars);
                            if (cfg.curvature !== undefined) setBloomCurvature(cfg.curvature);
                            if (cfg.autoAurora !== undefined) setBloomAutoAurora(cfg.autoAurora);
                          }
                        }}
                        className={`py-1.5 px-2 rounded-lg text-[11px] font-medium capitalize transition-all cursor-pointer text-center ${
                          bloomPreset === preset
                            ? 'bg-[var(--ink)] text-[var(--surface)] shadow-xs font-bold'
                            : 'bg-[var(--surface)] text-[var(--ink-soft)] hover:text-[var(--ink)] border border-[var(--line)]'
                        }`}
                      >
                        {preset}
                      </button>
                    ))}
                  </div>

                  {/* Slider Controls */}
                  <div className="space-y-3 pt-3 border-t border-[var(--line)]">
                    <div>
                      <div className="flex justify-between text-[11px] text-[var(--ink-soft)] mb-1">
                        <span>Sunrise Intensity</span>
                        <span className="font-mono">{bloomSunrise.toFixed(2)}x</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="1.5"
                        step="0.05"
                        value={bloomSunrise}
                        onChange={(e) => setBloomSunrise(parseFloat(e.target.value))}
                        className="w-full accent-amber-500 cursor-pointer"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-[11px] text-[var(--ink-soft)] mb-1">
                        <span>Atmosphere Glow</span>
                        <span className="font-mono">{bloomAtmosphere.toFixed(2)}x</span>
                      </div>
                      <input
                        type="range"
                        min="0.2"
                        max="2.5"
                        step="0.1"
                        value={bloomAtmosphere}
                        onChange={(e) => setBloomAtmosphere(parseFloat(e.target.value))}
                        className="w-full accent-amber-500 cursor-pointer"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-[11px] text-[var(--ink-soft)] mb-1">
                        <span>Aurora Ray Intensity</span>
                        <span className="font-mono">{bloomAurora.toFixed(2)}</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="2.5"
                        step="0.1"
                        value={bloomAurora}
                        onChange={(e) => setBloomAurora(parseFloat(e.target.value))}
                        className="w-full accent-amber-500 cursor-pointer"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-[11px] text-[var(--ink-soft)] mb-1">
                        <span>Curvature (Planet Radius)</span>
                        <span className="font-mono">{bloomCurvature.toFixed(2)}</span>
                      </div>
                      <input
                        type="range"
                        min="0.3"
                        max="4.5"
                        step="0.1"
                        value={bloomCurvature}
                        onChange={(e) => setBloomCurvature(parseFloat(e.target.value))}
                        className="w-full accent-amber-500 cursor-pointer"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-[11px] text-[var(--ink-soft)] mb-1">
                        <span>Background Star Density</span>
                        <span className="font-mono">{bloomStars.toFixed(2)}</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="1.5"
                        step="0.1"
                        value={bloomStars}
                        onChange={(e) => setBloomStars(parseFloat(e.target.value))}
                        className="w-full accent-amber-500 cursor-pointer"
                      />
                    </div>

                    <div className="pt-2 flex items-center justify-between">
                      <span className="text-[11px] text-[var(--ink-soft)]">Automatic Periodic Auroras</span>
                      <button
                        onClick={() => setBloomAutoAurora(!bloomAutoAurora)}
                        className={`w-10 h-5 rounded-full transition-colors relative cursor-pointer ${
                          bloomAutoAurora ? 'bg-amber-500' : 'bg-[var(--line)]'
                        }`}
                      >
                        <div
                          className={`w-4 h-4 rounded-full bg-white absolute top-0.5 transition-transform ${
                            bloomAutoAurora ? 'left-5' : 'left-0.5'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Live Horizon Bloom Canvas Box */}
                <div className="lg:col-span-7 space-y-3">
                  <div className="relative w-full h-[400px] sm:h-[440px] rounded-2xl overflow-hidden border border-[var(--line)] bg-[#050508] shadow-2xl">
                    <HorizonBloom
                      ref={bloomRef}
                      colors={HORIZON_BLOOM_PRESETS[bloomPreset]?.colors ?? ['#FF9FFC', '#5227FF']}
                      backgroundColor={darkMode ? '#050508' : '#0B0F19'}
                      horizon={HORIZON_BLOOM_PRESETS[bloomPreset]?.horizon ?? 0.72}
                      curvature={bloomCurvature}
                      tilt={HORIZON_BLOOM_PRESETS[bloomPreset]?.tilt ?? 0}
                      sunPosition={HORIZON_BLOOM_PRESETS[bloomPreset]?.sunPosition ?? 0.15}
                      sunrise={bloomSunrise}
                      spread={HORIZON_BLOOM_PRESETS[bloomPreset]?.spread ?? 0.4}
                      atmosphere={bloomAtmosphere}
                      thickness={HORIZON_BLOOM_PRESETS[bloomPreset]?.thickness ?? 1}
                      rim={HORIZON_BLOOM_PRESETS[bloomPreset]?.rim ?? 1}
                      flare={HORIZON_BLOOM_PRESETS[bloomPreset]?.flare ?? 1}
                      airglow={HORIZON_BLOOM_PRESETS[bloomPreset]?.airglow ?? 0.5}
                      clouds={HORIZON_BLOOM_PRESETS[bloomPreset]?.clouds ?? 0.5}
                      stars={bloomStars}
                      aurora={bloomAurora}
                      autoAurora={bloomAutoAurora}
                      speed={0.6}
                      drift={0.4}
                      parallax={0.6}
                      bloom={0.7}
                      grain={0.25}
                      interactive={true}
                      intro={true}
                      dpr={2}
                    >
                      {/* Floating Orbital HUD overlay */}
                      <div className="absolute inset-0 p-6 flex flex-col justify-between pointer-events-none select-none">
                        <div className="flex items-center justify-between">
                          <div className="px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/80 text-[11px] font-mono flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                            <span>PLANETARY HORIZON // {bloomPreset.toUpperCase()}</span>
                          </div>
                          <span className="px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white/60">
                            130K GLSL Multi-Pass
                          </span>
                        </div>

                        <div className="flex items-end justify-between">
                          <div className="space-y-1">
                            <p className="text-xs font-mono text-amber-300/90 font-medium">
                              Interactive Orbital Sensor
                            </p>
                            <p className="text-[11px] text-white/60 font-mono">
                              Click or tap anywhere along the edge to erupt solar auroras
                            </p>
                          </div>
                          <span className="px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono text-white/80">
                            Parallax Active
                          </span>
                        </div>
                      </div>
                    </HorizonBloom>

                    {/* Instruction Tag */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between pointer-events-none">
                      <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono text-white/80">
                        ✨ Move cursor for orbit camera drifting &amp; click for auroras
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-mono border border-amber-500/30">
                        @reactbits-starter/horizon-bloom-tw
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-[var(--ink-faint)] leading-relaxed">
                    Employs high-fidelity multi-pass bloom pyramid downsampling/upsampling, OKLab chromatic atmosphere integration, and hardware-accelerated FBM noise star fields.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
