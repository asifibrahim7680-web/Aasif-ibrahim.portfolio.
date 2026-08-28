import React, { useState } from 'react';
import { 
  X, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Sparkles, 
  Bot, 
  Coffee, 
  Layers, 
  Play, 
  Send,
  Sliders,
  Check,
  Search,
  Filter
} from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Interactive mini-demo states for Foundation AI
  const [aiPrompt, setAiPrompt] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<string | null>(null);

  // Interactive mini-demo states for BeanCoffee
  const [selectedRoast, setSelectedRoast] = useState<'Light' | 'Medium' | 'Dark'>('Medium');
  const [brewMethod, setBrewMethod] = useState<'Espresso' | 'Pour Over' | 'French Press'>('Pour Over');

  if (!project) return null;

  const handleSimulateAiAnalysis = (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiPrompt.trim()) return;

    setAnalyzing(true);
    setAnalysisResult(null);

    setTimeout(() => {
      setAnalyzing(false);
      setAnalysisResult(
        `Diagnostic Analysis Complete for "${aiPrompt}":\n• Primary concept mastery: 78%\n• Identified learning gap: Recursive edge-case handling & memory footprint\n• Recommended personalized modules: 2 tailored practice challenges and step-by-step visual trace.`
      );
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Backdrop click area */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl bg-[#0f172a] border border-[#424754] rounded-2xl shadow-2xl overflow-hidden z-10 my-8 flex flex-col max-h-[90vh]">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#424754]/40 bg-[#131b2e]">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded text-xs font-['JetBrains_Mono'] font-bold bg-[#adc6ff]/10 text-[#adc6ff] border border-[#adc6ff]/30">
              {project.badgeLabel}
            </span>
            <h3 className="font-['Outfit'] font-bold text-xl text-white">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#c2c6d6] hover:text-white hover:bg-[#1e293b] transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-[#c2c6d6]">
          
          {/* Top Hero Media & Summary */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-6 rounded-xl overflow-hidden border border-[#1e293b] relative group">
              <img
                src={project.image}
                alt={project.imageAlt}
                className="w-full h-56 sm:h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                <span className="text-xs font-['JetBrains_Mono'] text-[#adc6ff] bg-[#0b1326]/90 px-3 py-1 rounded border border-[#424754]/40">
                  {project.category}
                </span>
              </div>
            </div>

            <div className="md:col-span-6 space-y-3">
              <h4 className="font-['Outfit'] font-bold text-lg text-white">Project Overview</h4>
              <p className="text-sm leading-relaxed text-[#dae2fd]">
                {project.fullDescription}
              </p>
              
              <div className="pt-2">
                <p className="text-xs font-['JetBrains_Mono'] text-[#8c909f]">Role & Contribution:</p>
                <p className="text-xs font-semibold text-[#adc6ff]">{project.role}</p>
              </div>

              {project.metrics && (
                <div className="p-3 rounded-lg bg-[#131b2e] border border-[#424754]/30 text-xs font-['JetBrains_Mono'] text-[#ffb786]">
                  ⚡ {project.metrics}
                </div>
              )}
            </div>
          </div>

          {/* Features & Tech Stack */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-[#424754]/30">
            <div>
              <h5 className="font-['Outfit'] font-bold text-white text-sm mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#adc6ff]" />
                Key Engineered Capabilities
              </h5>
              <ul className="space-y-2 text-xs font-['JetBrains_Mono'] text-[#dae2fd]">
                {project.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#adc6ff] flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="font-['Outfit'] font-bold text-white text-sm mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#ddb7ff]" />
                Technology Stack
              </h5>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded bg-[#131b2e] border border-[#424754]/40 text-xs font-['JetBrains_Mono'] text-[#dae2fd]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Live Demo Simulation Sandbox */}
          <div className="mt-4 p-5 rounded-xl bg-[#0b1326] border border-[#adc6ff]/30 space-y-4">
            <div className="flex items-center justify-between border-b border-[#424754]/40 pb-2">
              <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#adc6ff] flex items-center gap-2">
                <Play className="w-3.5 h-3.5 fill-[#adc6ff]" />
                Interactive Sandbox Preview
              </span>
              <span className="text-[11px] font-['JetBrains_Mono'] text-[#8c909f]">Real-time Feature Demo</span>
            </div>

            {project.id === 'learn-track' ? (
              <div className="space-y-3">
                <p className="text-xs text-[#c2c6d6]">
                  Test the AI Learning Gap Diagnostic by submitting any topic or question (e.g., "Data Structures", "Dynamic Programming", "Azure Cloud"):
                </p>
                <form onSubmit={handleSimulateAiAnalysis} className="flex gap-2">
                  <input
                    type="text"
                    value={aiPrompt}
                    onChange={(e) => setAiPrompt(e.target.value)}
                    placeholder="Enter concept (e.g., Binary Search Trees, React State)..."
                    className="flex-1 px-3.5 py-2 rounded-lg bg-[#131b2e] border border-[#424754] text-xs font-['JetBrains_Mono'] text-white focus:outline-none focus:border-[#adc6ff]"
                  />
                  <button
                    type="submit"
                    disabled={analyzing}
                    className="px-4 py-2 rounded-lg bg-[#adc6ff] text-[#002e6a] font-['JetBrains_Mono'] text-xs font-bold hover:bg-[#4d8eff] hover:text-white transition-colors flex items-center gap-1.5 disabled:opacity-50"
                  >
                    {analyzing ? 'Analyzing...' : 'Diagnose'}
                    <Bot className="w-3.5 h-3.5" />
                  </button>
                </form>

                {analysisResult && (
                  <div className="p-3.5 rounded-lg bg-[#131b2e] border border-[#6f00be]/40 text-xs font-['JetBrains_Mono'] text-[#dae2fd] whitespace-pre-line leading-relaxed">
                    {analysisResult}
                  </div>
                )}
              </div>
            ) : project.id === 'daily-attendance' ? (
              <div className="space-y-3">
                <p className="text-xs text-[#c2c6d6]">
                  Daily Attendance Tracker Simulator - Track sessions and log attendance in real time:
                </p>
                <div className="p-3.5 rounded-lg bg-[#131b2e] border border-[#424754]/40 flex flex-wrap items-center justify-between gap-3 text-xs font-['JetBrains_Mono']">
                  <div>
                    <p className="font-bold text-white">Class: CSE 2025-2029 Batch</p>
                    <p className="text-[#8c909f] text-[11px]">Today's Status: 96% Present • 42 Recorded</p>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-emerald-950 text-emerald-300 border border-emerald-700 text-xs">
                    ✓ Synced to Local Storage
                  </span>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-xs text-[#c2c6d6]">
                  Interact with the artisan coffee selector and brew parameter calculator:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-['JetBrains_Mono']">
                  <div>
                    <label className="block text-[#8c909f] mb-1.5">Select Roast Profile:</label>
                    <div className="flex gap-2">
                      {(['Light', 'Medium', 'Dark'] as const).map((r) => (
                        <button
                          key={r}
                          onClick={() => setSelectedRoast(r)}
                          className={`px-3 py-1.5 rounded border text-xs ${
                            selectedRoast === r
                              ? 'bg-[#df7412] text-white border-[#df7412] font-bold'
                              : 'bg-[#131b2e] text-[#c2c6d6] border-[#424754]'
                          }`}
                        >
                          {r}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#8c909f] mb-1.5">Brewing Method:</label>
                    <div className="flex gap-2">
                      {(['Pour Over', 'Espresso', 'French Press'] as const).map((b) => (
                        <button
                          key={b}
                          onClick={() => setBrewMethod(b)}
                          className={`px-3 py-1.5 rounded border text-xs ${
                            brewMethod === b
                              ? 'bg-[#adc6ff] text-[#002e6a] border-[#adc6ff] font-bold'
                              : 'bg-[#131b2e] text-[#c2c6d6] border-[#424754]'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-[#131b2e] border border-[#df7412]/40 text-xs font-['JetBrains_Mono'] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Coffee className="w-5 h-5 text-[#df7412]" />
                    <div>
                      <p className="font-bold text-white">Selected: {selectedRoast} Roast via {brewMethod}</p>
                      <p className="text-[#c2c6d6] text-[11px]">Recommended Water Temp: 92°C | Grind: Medium-Fine | Ratio: 1:16</p>
                    </div>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                    Active Preset
                  </span>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-[#424754]/40 bg-[#131b2e] flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3">
            {project.liveDemoUrl.startsWith('http') && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#adc6ff] hover:bg-[#4d8eff] text-xs font-['JetBrains_Mono'] font-bold text-[#002e6a] hover:text-white transition-colors shadow-sm"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Launch Live Application</span>
              </a>
            )}

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0b1326] border border-[#424754] text-xs font-['JetBrains_Mono'] text-[#dae2fd] hover:text-white hover:border-[#adc6ff] transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>View Source on GitHub</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#1e293b] hover:bg-[#2d3449] text-xs font-['JetBrains_Mono'] text-[#c2c6d6] hover:text-white transition-colors"
          >
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
};
