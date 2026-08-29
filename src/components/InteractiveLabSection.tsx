import React, { useState } from 'react';
import { 
  FlaskConical, 
  Bot, 
  Sparkles, 
  Coffee, 
  BookOpen, 
  CheckCircle2, 
  QrCode, 
  Cpu, 
  ArrowRight, 
  Play, 
  RotateCcw, 
  Sliders, 
  Terminal, 
  Check, 
  ShieldCheck, 
  Flame,
  Zap,
  Layers,
  Code2
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

type LabTab = 'coffee-ai' | 'edtech-ai' | 'attendance-qr' | 'radar';

export const InteractiveLabSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<LabTab>('coffee-ai');

  // Lab 1: Bean & Byte AI Coffee Matcher
  const [coffeeProfile, setCoffeeProfile] = useState<'fruity' | 'chocolate' | 'nutty' | 'floral'>('chocolate');
  const [intensity, setIntensity] = useState<number>(75);
  const [brewMethod, setBrewMethod] = useState<'Espresso' | 'Pour Over' | 'Cold Brew'>('Espresso');
  const [isGeneratingCoffee, setIsGeneratingCoffee] = useState(false);
  const [coffeeResult, setCoffeeResult] = useState<{
    roast: string;
    beans: string;
    flavorNotes: string[];
    acidity: string;
    matchScore: number;
  }>({
    roast: 'Dark Roast (Vienna Style)',
    beans: '100% Arabica Ethiopian Yirgacheffe & Colombian Supremo',
    flavorNotes: ['Dark Cocoa', 'Toasted Hazelnut', 'Caramelized Molasses'],
    acidity: 'Low & Silky',
    matchScore: 96
  });

  const handleGenerateCoffeeRecommendation = () => {
    setIsGeneratingCoffee(true);
    setTimeout(() => {
      setIsGeneratingCoffee(false);
      if (coffeeProfile === 'fruity') {
        setCoffeeResult({
          roast: 'Light-Medium Roast (Cinnamon)',
          beans: 'Washed Kenyan AA Single Origin',
          flavorNotes: ['Wild Berry', 'Bergamot Citrus', 'Honey Nectar'],
          acidity: 'Crisp & Bright',
          matchScore: 98
        });
      } else if (coffeeProfile === 'chocolate') {
        setCoffeeResult({
          roast: 'Medium-Dark Roast (Full City)',
          beans: 'Guatemalan Antigua & Brazilian Cerrado',
          flavorNotes: ['Belgian Dark Chocolate', 'Roasted Almond', 'Brown Sugar'],
          acidity: 'Smooth & Balanced',
          matchScore: 95
        });
      } else if (coffeeProfile === 'nutty') {
        setCoffeeResult({
          roast: 'Medium Roast (American)',
          beans: 'Costa Rican Tarrazu & Java Estate',
          flavorNotes: ['Pecan Praline', 'Creamy Walnut', 'Vanilla Bean'],
          acidity: 'Mellow',
          matchScore: 94
        });
      } else {
        setCoffeeResult({
          roast: 'Artisan Light Roast',
          beans: 'Panama Geisha Highland Micro-lot',
          flavorNotes: ['Jasmine Blossom', 'Lemongrass', 'Peach Tea'],
          acidity: 'Vibrant & Delicate',
          matchScore: 99
        });
      }
    }, 600);
  };

  // Lab 2: Learn Track (Foundation AI) Topic Diagnoser
  const [edTopic, setEdTopic] = useState('Recursion & Tree Traversals');
  const [edLevel, setEdLevel] = useState<'beginner' | 'intermediate' | 'advanced'>('intermediate');
  const [isDiagnosing, setIsDiagnosing] = useState(false);
  const [edPlan, setEdPlan] = useState<{
    coreConcept: string;
    masterySteps: string[];
    codePattern: string;
    estimatedHours: string;
  }>({
    coreConcept: 'Call Stack Frames & Divide-and-Conquer State Unwinding',
    masterySteps: [
      'Establish Base Case (Stopping invariant to prevent Maximum Call Stack Exceeded)',
      'Subproblem Decomposition (Recurrence relation T(n) = 2T(n/2) + O(1))',
      'In-Order / Pre-Order / Post-Order Node Visit Sequence'
    ],
    codePattern: 'const dfs = (node: TreeNode | null): void => { if (!node) return; dfs(node.left); visit(node); dfs(node.right); };',
    estimatedHours: '3.5 Hours'
  });

  const handleDiagnoseTopic = (e: React.FormEvent) => {
    e.preventDefault();
    if (!edTopic.trim()) return;
    setIsDiagnosing(true);
    setTimeout(() => {
      setIsDiagnosing(false);
      setEdPlan({
        coreConcept: `${edTopic} Structural Decomposition (${edLevel.toUpperCase()})`,
        masterySteps: [
          `Phase 1: Conceptual mental model & prerequisite verification for ${edTopic}`,
          `Phase 2: TypeScript type invariants & boundary conditions`,
          `Phase 3: Applied real-world synthesis with test runner validation`
        ],
        codePattern: `// Foundation AI diagnostic snippet for ${edTopic}\ninterface Solution<T> {\n  evaluate(input: T): Result<T>;\n  validateInvariants(): boolean;\n}`,
        estimatedHours: edLevel === 'beginner' ? '2.0 Hours' : edLevel === 'intermediate' ? '4.5 Hours' : '7.0 Hours'
      });
    }, 600);
  };

  // Lab 3: Daily Attendance System Generator
  const [studentId, setStudentId] = useState('AMSCE-2025-CSE-042');
  const [courseCode, setCourseCode] = useState('CS3401 - Algorithms & AI');
  const [attendanceStatus, setAttendanceStatus] = useState<'Verified' | 'Pending'>('Verified');
  const [verificationCode, setVerificationCode] = useState('VERIF-88392-OK');
  const [attendanceLogged, setAttendanceLogged] = useState(false);

  const handleGenerateAttendancePass = () => {
    setAttendanceLogged(true);
    setVerificationCode(`VERIF-${Math.floor(10000 + Math.random() * 90000)}-${studentId.slice(-3)}`);
    setAttendanceStatus('Verified');
  };

  return (
    <section id="interactive-lab" className="py-20 scroll-mt-20 border-t border-slate-200 dark:border-[#334155]/40 relative bg-slate-50/70 dark:bg-[#070b16] cyber-grid">
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300 text-xs font-['JetBrains_Mono'] mb-3">
              <FlaskConical className="w-3.5 h-3.5 text-indigo-500 animate-pulse" />
              <span>Interactive Engineering Sandbox</span>
            </div>
            <h2 className="font-['Outfit'] font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-[#dae2fd] tracking-tight">
              Live Project Lab & Sandbox
            </h2>
            <p className="text-slate-600 dark:text-[#94a3b8] text-sm sm:text-base max-w-2xl mt-1.5">
              Experience the core algorithmic logic and interactive workflows powering my featured TypeScript and AI projects.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-['JetBrains_Mono'] text-indigo-600 dark:text-[#adc6ff]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Interactive Web Simulator</span>
          </div>
        </div>

        {/* Lab Navigation Switcher */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 p-1.5 rounded-2xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-[#334155]/60 shadow-sm mb-8">
          <button
            onClick={() => setActiveTab('coffee-ai')}
            className={`p-3 rounded-xl flex items-center gap-3 transition-all cursor-pointer text-left ${
              activeTab === 'coffee-ai'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-700 dark:text-[#c2c6d6] hover:bg-slate-100 dark:hover:bg-[#1e293b]'
            }`}
          >
            <Coffee className="w-4 h-4 flex-shrink-0" />
            <div>
              <div className="font-['Outfit'] font-bold text-xs">Bean & Byte AI</div>
              <div className="text-[10px] opacity-80 font-['JetBrains_Mono']">Roast Algorithm</div>
            </div>
          </button>

          <button
            onClick={() => setActiveTab('edtech-ai')}
            className={`p-3 rounded-xl flex items-center gap-3 transition-all cursor-pointer text-left ${
              activeTab === 'edtech-ai'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-700 dark:text-[#c2c6d6] hover:bg-slate-100 dark:hover:bg-[#1e293b]'
            }`}
          >
            <BookOpen className="w-4 h-4 flex-shrink-0" />
            <div>
              <div className="font-['Outfit'] font-bold text-xs">Foundation AI</div>
              <div className="text-[10px] opacity-80 font-['JetBrains_Mono']">EdTech Diagnoser</div>
            </div>
          </button>

          <button
            onClick={() => setActiveTab('attendance-qr')}
            className={`p-3 rounded-xl flex items-center gap-3 transition-all cursor-pointer text-left ${
              activeTab === 'attendance-qr'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-700 dark:text-[#c2c6d6] hover:bg-slate-100 dark:hover:bg-[#1e293b]'
            }`}
          >
            <QrCode className="w-4 h-4 flex-shrink-0" />
            <div>
              <div className="font-['Outfit'] font-bold text-xs">Daily Attendance</div>
              <div className="text-[10px] opacity-80 font-['JetBrains_Mono']">Digital Checksum</div>
            </div>
          </button>

          <button
            onClick={() => setActiveTab('radar')}
            className={`p-3 rounded-xl flex items-center gap-3 transition-all cursor-pointer text-left ${
              activeTab === 'radar'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-700 dark:text-[#c2c6d6] hover:bg-slate-100 dark:hover:bg-[#1e293b]'
            }`}
          >
            <Cpu className="w-4 h-4 flex-shrink-0" />
            <div>
              <div className="font-['Outfit'] font-bold text-xs">Skills Matrix</div>
              <div className="text-[10px] opacity-80 font-['JetBrains_Mono']">Live Benchmarks</div>
            </div>
          </button>
        </div>

        {/* Active Lab Workbench */}
        <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-[#334155]/60 shadow-xl overflow-hidden">
          
          {/* TAB 1: Bean & Byte AI Coffee Roast Matcher */}
          {activeTab === 'coffee-ai' && (
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-100 dark:border-[#334155]/40 mb-6">
                <div>
                  <h3 className="font-['Outfit'] font-bold text-xl text-slate-900 dark:text-white flex items-center gap-2">
                    <Bot className="w-5 h-5 text-indigo-500" />
                    AI Sensory Flavor & Roast Profiler
                  </h3>
                  <p className="text-xs font-['JetBrains_Mono'] text-slate-500 dark:text-[#94a3b8] mt-1">
                    Live simulation of the recommendation engine built for <span className="text-indigo-600 dark:text-indigo-400 font-semibold">bean-byte-aicoffee-shop</span>
                  </p>
                </div>
                <span className="px-3 py-1 rounded-md text-xs font-['JetBrains_Mono'] bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                  TypeScript • Heuristic Engine
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Inputs */}
                <div className="lg:col-span-5 space-y-5">
                  <div>
                    <label className="block text-xs font-['JetBrains_Mono'] font-bold text-slate-700 dark:text-[#dae2fd] mb-2">
                      1. Select Desired Flavor Archetype:
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { id: 'chocolate', label: '🍫 Cocoa & Dark' },
                        { id: 'fruity', label: '🍓 Wild Berry & Citrus' },
                        { id: 'nutty', label: '🌰 Roasted Hazelnut' },
                        { id: 'floral', label: '🌸 Jasmine & Geisha' }
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setCoffeeProfile(item.id as any)}
                          className={`p-2.5 rounded-lg text-xs font-['Outfit'] font-medium border transition-all cursor-pointer text-left ${
                            coffeeProfile === item.id
                              ? 'bg-indigo-50 dark:bg-indigo-950/80 border-indigo-500 text-indigo-700 dark:text-indigo-300 font-bold shadow-xs'
                              : 'bg-slate-50 dark:bg-[#131b2e] border-slate-200 dark:border-[#334155]/40 text-slate-700 dark:text-[#c2c6d6] hover:border-slate-300'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-['JetBrains_Mono'] text-slate-700 dark:text-[#dae2fd] mb-2 font-bold">
                      <span>2. Body & Roast Intensity:</span>
                      <span className="text-indigo-600 dark:text-indigo-400">{intensity}%</span>
                    </div>
                    <input
                      type="range"
                      min="20"
                      max="100"
                      value={intensity}
                      onChange={(e) => setIntensity(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 dark:bg-[#131b2e] rounded-lg appearance-none cursor-pointer accent-indigo-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-['JetBrains_Mono'] font-bold text-slate-700 dark:text-[#dae2fd] mb-2">
                      3. Preferred Extraction Method:
                    </label>
                    <div className="flex gap-2">
                      {(['Espresso', 'Pour Over', 'Cold Brew'] as const).map((method) => (
                        <button
                          key={method}
                          type="button"
                          onClick={() => setBrewMethod(method)}
                          className={`flex-1 py-2 px-2.5 rounded-lg text-xs font-['JetBrains_Mono'] border transition-all cursor-pointer ${
                            brewMethod === method
                              ? 'bg-indigo-600 text-white border-indigo-600 font-bold'
                              : 'bg-slate-50 dark:bg-[#131b2e] border-slate-200 dark:border-[#334155]/40 text-slate-700 dark:text-[#c2c6d6]'
                          }`}
                        >
                          {method}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={handleGenerateCoffeeRecommendation}
                    disabled={isGeneratingCoffee}
                    className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:scale-[0.99] text-white font-['Outfit'] font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                  >
                    {isGeneratingCoffee ? (
                      <>
                        <Zap className="w-4 h-4 animate-spin" />
                        <span>Synthesizing Profile...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4" />
                        <span>Run AI Sensory Matcher</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Output Card */}
                <div className="lg:col-span-7">
                  <div className="p-6 rounded-2xl bg-slate-900 dark:bg-[#070b16] border border-slate-800 dark:border-[#334155]/60 text-white space-y-4 relative overflow-hidden shadow-inner">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-xs font-['JetBrains_Mono'] text-slate-400">Match Confidence: {coffeeResult.matchScore}%</span>
                      </div>
                      <span className="text-xs font-['JetBrains_Mono'] text-indigo-400 font-semibold">{brewMethod} Profile</span>
                    </div>

                    <div>
                      <div className="text-[11px] font-['JetBrains_Mono'] text-slate-400 uppercase tracking-wider">Recommended Roast Profile</div>
                      <h4 className="font-['Outfit'] font-extrabold text-xl sm:text-2xl text-white mt-0.5">
                        {coffeeResult.roast}
                      </h4>
                      <p className="text-xs font-['JetBrains_Mono'] text-indigo-300 mt-1">{coffeeResult.beans}</p>
                    </div>

                    <div>
                      <div className="text-[11px] font-['JetBrains_Mono'] text-slate-400 uppercase tracking-wider mb-2">Detected Sensory Notes</div>
                      <div className="flex flex-wrap gap-2">
                        {coffeeResult.flavorNotes.map((note, i) => (
                          <span key={i} className="px-3 py-1 rounded-full text-xs font-['JetBrains_Mono'] bg-indigo-950/80 border border-indigo-700/60 text-indigo-200">
                            ✨ {note}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-['JetBrains_Mono']">
                      <span className="text-slate-400">Acidity Balance: <strong className="text-white">{coffeeResult.acidity}</strong></span>
                      <a 
                        href="https://bean-byte-aicoffee-shop.vercel.app" 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1"
                      >
                        <span>Open Live Shop</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Foundation AI Topic Diagnoser */}
          {activeTab === 'edtech-ai' && (
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-100 dark:border-[#334155]/40 mb-6">
                <div>
                  <h3 className="font-['Outfit'] font-bold text-xl text-slate-900 dark:text-white flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-indigo-500" />
                    Structured Learning Curriculum Diagnoser
                  </h3>
                  <p className="text-xs font-['JetBrains_Mono'] text-slate-500 dark:text-[#94a3b8] mt-1">
                    Simulating the student breakdown engine for <span className="text-indigo-600 dark:text-indigo-400 font-semibold">foundation-eduction.vercel.app</span>
                  </p>
                </div>
                <span className="px-3 py-1 rounded-md text-xs font-['JetBrains_Mono'] bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/30">
                  EdTech • Cognitive Architecture
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <form onSubmit={handleDiagnoseTopic} className="lg:col-span-5 space-y-4">
                  <div>
                    <label className="block text-xs font-['JetBrains_Mono'] font-bold text-slate-700 dark:text-[#dae2fd] mb-2">
                      Topic or Computational Challenge:
                    </label>
                    <input
                      type="text"
                      value={edTopic}
                      onChange={(e) => setEdTopic(e.target.value)}
                      placeholder="e.g. Dynamic Programming, Dijkstra, Azure Functions"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-[#131b2e] border border-slate-300 dark:border-[#334155] text-slate-900 dark:text-white text-xs font-['JetBrains_Mono'] focus:ring-2 focus:ring-indigo-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-['JetBrains_Mono'] font-bold text-slate-700 dark:text-[#dae2fd] mb-2">
                      Target Audience Depth:
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {(['beginner', 'intermediate', 'advanced'] as const).map((lvl) => (
                        <button
                          key={lvl}
                          type="button"
                          onClick={() => setEdLevel(lvl)}
                          className={`py-2 px-2 rounded-lg text-xs font-['JetBrains_Mono'] uppercase border transition-all cursor-pointer ${
                            edLevel === lvl
                              ? 'bg-indigo-600 text-white border-indigo-600 font-bold'
                              : 'bg-slate-50 dark:bg-[#131b2e] border-slate-200 dark:border-[#334155]/40 text-slate-700 dark:text-[#c2c6d6]'
                          }`}
                        >
                          {lvl}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#131b2e]/60 border border-slate-200 dark:border-[#334155]/30 text-xs text-slate-600 dark:text-[#94a3b8]">
                    💡 <em>Generates prerequisite verification, recursive invariants, and TypeScript blueprint.</em>
                  </div>

                  <button
                    type="submit"
                    disabled={isDiagnosing}
                    className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-['Outfit'] font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                  >
                    {isDiagnosing ? <Zap className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
                    <span>Generate Structured Study Path</span>
                  </button>
                </form>

                <div className="lg:col-span-7">
                  <div className="p-6 rounded-2xl bg-slate-900 dark:bg-[#070b16] border border-slate-800 dark:border-[#334155]/60 text-white space-y-4 shadow-inner">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-['JetBrains_Mono']">
                      <span className="text-indigo-400 font-semibold">Foundational Study Framework</span>
                      <span className="text-slate-400">Est. Time: {edPlan.estimatedHours}</span>
                    </div>

                    <div>
                      <div className="text-[11px] font-['JetBrains_Mono'] text-slate-400 uppercase tracking-wider">Target Concept Core</div>
                      <h4 className="font-['Outfit'] font-bold text-lg text-white mt-0.5">{edPlan.coreConcept}</h4>
                    </div>

                    <div className="space-y-2">
                      <div className="text-[11px] font-['JetBrains_Mono'] text-slate-400 uppercase tracking-wider">Milestone Execution Sequence:</div>
                      {edPlan.masterySteps.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs font-['JetBrains_Mono'] text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-slate-800">
                      <div className="text-[10px] font-['JetBrains_Mono'] text-slate-400 mb-1.5">Generated TypeScript Invariant Code:</div>
                      <pre className="p-3 rounded-lg bg-black/70 border border-slate-800 text-[11px] font-['JetBrains_Mono'] text-emerald-300 overflow-x-auto">
                        {edPlan.codePattern}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Daily Attendance Checksum Generator */}
          {activeTab === 'attendance-qr' && (
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-100 dark:border-[#334155]/40 mb-6">
                <div>
                  <h3 className="font-['Outfit'] font-bold text-xl text-slate-900 dark:text-white flex items-center gap-2">
                    <QrCode className="w-5 h-5 text-indigo-500" />
                    Digital Student Attendance Checksum Generator
                  </h3>
                  <p className="text-xs font-['JetBrains_Mono'] text-slate-500 dark:text-[#94a3b8] mt-1">
                    Simulating paperless attendance verification and roll record authentication
                  </p>
                </div>
                <span className="px-3 py-1 rounded-md text-xs font-['JetBrains_Mono'] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                  Real-Time Database Log
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 space-y-4">
                  <div>
                    <label className="block text-xs font-['JetBrains_Mono'] font-bold text-slate-700 dark:text-[#dae2fd] mb-1.5">
                      Student Roll / Registration ID:
                    </label>
                    <input
                      type="text"
                      value={studentId}
                      onChange={(e) => setStudentId(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#131b2e] border border-slate-300 dark:border-[#334155] text-slate-900 dark:text-white text-xs font-['JetBrains_Mono']"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-['JetBrains_Mono'] font-bold text-slate-700 dark:text-[#dae2fd] mb-1.5">
                      Class / Subject Track:
                    </label>
                    <input
                      type="text"
                      value={courseCode}
                      onChange={(e) => setCourseCode(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#131b2e] border border-slate-300 dark:border-[#334155] text-slate-900 dark:text-white text-xs font-['JetBrains_Mono']"
                    />
                  </div>

                  <button
                    onClick={handleGenerateAttendancePass}
                    className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-['Outfit'] font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                  >
                    <ShieldCheck className="w-4 h-4" />
                    <span>Issue Authenticated Digital Token</span>
                  </button>
                </div>

                <div className="lg:col-span-7">
                  <div className="p-6 rounded-2xl bg-slate-900 dark:bg-[#070b16] border border-emerald-500/40 text-white space-y-4 shadow-xl">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-['JetBrains_Mono']">
                      <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                        <Check className="w-4 h-4" /> Attendance Verified & Stamped
                      </span>
                      <span className="text-slate-400">{new Date().toLocaleDateString()}</span>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-6 py-2">
                      <div className="w-28 h-28 bg-white p-2 rounded-xl flex items-center justify-center shadow-lg">
                        <QrCode className="w-24 h-24 text-slate-950" />
                      </div>
                      <div className="space-y-1.5 text-center sm:text-left font-['JetBrains_Mono']">
                        <div className="text-xs text-slate-400">Authentication Token:</div>
                        <div className="text-lg font-bold text-emerald-400">{verificationCode}</div>
                        <div className="text-xs text-slate-300">{studentId}</div>
                        <div className="text-xs text-indigo-300">{courseCode}</div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-['JetBrains_Mono'] text-slate-400">
                      <span>Status: <strong className="text-emerald-400">Present (Anna Univ CSE)</strong></span>
                      <span>Checksum: SHA-256 Validated</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: Skills Matrix & Benchmark Visualizer */}
          {activeTab === 'radar' && (
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-100 dark:border-[#334155]/40 mb-6">
                <div>
                  <h3 className="font-['Outfit'] font-bold text-xl text-slate-900 dark:text-white flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-indigo-500" />
                    Engineering Competency & Benchmark Matrix
                  </h3>
                  <p className="text-xs font-['JetBrains_Mono'] text-slate-500 dark:text-[#94a3b8] mt-1">
                    Real-world proficiency across core engineering disciplines
                  </p>
                </div>
                <span className="px-3 py-1 rounded-md text-xs font-['JetBrains_Mono'] bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/30">
                  CGPA 8.3 • CSE 2025-2029
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { domain: 'Artificial Intelligence & Machine Learning', score: 92, focus: 'Heuristics, Supervised Learning, Model Evaluation, Cognitive API Integrations' },
                  { domain: 'Microsoft Azure & Cloud Computing', score: 88, focus: 'Azure Cognitive Services, Cloud Architectures, Serverless Workloads' },
                  { domain: 'TypeScript & Frontend Systems', score: 94, focus: 'Strict Typing, Modular Architecture, React, Tailwind CSS, State Engines' },
                  { domain: 'Educational Software & Community', score: 96, focus: 'Interactive Learning Workflows, Workshops, Mentorship, Practical Tools' }
                ].map((item, idx) => (
                  <div key={idx} className="p-5 rounded-xl bg-slate-50 dark:bg-[#131b2e] border border-slate-200 dark:border-[#334155]/40 space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-['Outfit'] font-bold text-sm text-slate-900 dark:text-white">{item.domain}</h4>
                      <span className="font-['JetBrains_Mono'] text-xs font-bold text-indigo-600 dark:text-indigo-400">{item.score}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                        style={{ width: `${item.score}%` }}
                      />
                    </div>
                    <p className="text-xs font-['JetBrains_Mono'] text-slate-600 dark:text-[#94a3b8] leading-relaxed">
                      {item.focus}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
