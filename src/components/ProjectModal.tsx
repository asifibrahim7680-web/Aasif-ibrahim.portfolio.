import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, Code2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Box */}
      <div className="relative w-full max-w-3xl bg-[var(--surface)] border border-[var(--line)] rounded-2xl shadow-2xl overflow-hidden z-10 my-8 flex flex-col max-h-[90vh]">
        
        {/* Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--line)] bg-[var(--bg-alt)]">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="font-['Manrope'] font-bold text-sm text-[var(--ink)]">
              Case Study &amp; Technical Details
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg border border-[var(--line)] flex items-center justify-center text-[var(--ink-soft)] hover:text-[var(--ink)] hover:bg-[var(--tint-1)] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-[var(--ink)]">
          
          {/* Title & Tagline */}
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[var(--tint-1)] text-[var(--ink)]">
                {project.category}
              </span>
              <span className="text-xs text-[var(--ink-faint)] font-mono">
                Role: {project.role}
              </span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-bold font-['Manrope'] tracking-tight text-[var(--ink)]">
              {project.title}
            </h2>
            
            <p className="text-sm text-[var(--ink-soft)] leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Key Features */}
          <div className="p-5 rounded-xl bg-[var(--bg-alt)] border border-[var(--line)] space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--ink)]">
              Core Capabilities &amp; Features
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[var(--ink-soft)]">
              {project.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--ink)]">
              Technologies &amp; Architecture
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="px-3 py-1.5 rounded-lg border border-[var(--line)] bg-[var(--surface)] text-xs font-medium text-[var(--ink)]">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Engineering Metrics / Results */}
          {project.metrics && (
            <div className="p-4 rounded-xl border border-[var(--line)] bg-[var(--surface)] text-xs text-[var(--ink-soft)] flex items-center justify-between">
              <span className="font-semibold text-[var(--ink)]">Outcome Metric</span>
              <span className="font-mono text-[var(--ink)]">{project.metrics}</span>
            </div>
          )}

          {/* Action Links */}
          <div className="pt-4 border-t border-[var(--line)] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn secondary sm"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Source Code</span>
                </a>
              )}

              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn primary sm"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Application</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-xs font-medium text-[var(--ink-faint)] hover:text-[var(--ink)] transition-colors cursor-pointer"
            >
              Close Details
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
