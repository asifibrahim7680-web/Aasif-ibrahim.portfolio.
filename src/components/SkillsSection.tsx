import React from 'react';
import { Code, Brain, Cloud, Terminal } from 'lucide-react';

interface SkillItem {
  name: string;
  level: 'Specialist' | 'Working With' | 'Proficient' | 'Learning';
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: SkillItem[];
}

export const SkillsSection: React.FC = () => {
  const categories: SkillCategory[] = [
    {
      title: "Programming & Languages",
      icon: <Code className="w-5 h-5 text-[var(--ink)]" />,
      skills: [
        { name: "TypeScript", level: "Specialist" },
        { name: "JavaScript", level: "Working With" },
        { name: "Python", level: "Working With" },
        { name: "C / C++", level: "Working With" },
        { name: "SQL", level: "Proficient" },
        { name: "HTML & CSS", level: "Working With" }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="w-5 h-5 text-[var(--ink)]" />,
      skills: [
        { name: "Artificial Intelligence", level: "Specialist" },
        { name: "Machine Learning", level: "Specialist" },
        { name: "Generative AI", level: "Proficient" },
        { name: "Prompt Engineering", level: "Proficient" },
        { name: "Supervised Learning", level: "Working With" },
        { name: "Cognitive Workflows", level: "Proficient" }
      ]
    },
    {
      title: "Cloud & Web Engineering",
      icon: <Cloud className="w-5 h-5 text-[var(--ink)]" />,
      skills: [
        { name: "Microsoft Azure", level: "Specialist" },
        { name: "React", level: "Working With" },
        { name: "Cloud Computing", level: "Proficient" },
        { name: "REST APIs", level: "Working With" },
        { name: "Responsive UI", level: "Working With" },
        { name: "Tailwind CSS", level: "Working With" }
      ]
    },
    {
      title: "Tools & Ecosystem",
      icon: <Terminal className="w-5 h-5 text-[var(--ink)]" />,
      skills: [
        { name: "Git & GitHub", level: "Working With" },
        { name: "VS Code", level: "Working With" },
        { name: "Node.js", level: "Working With" },
        { name: "Linux / Terminal", level: "Working With" },
        { name: "Vercel", level: "Working With" },
        { name: "Educational Tech", level: "Specialist" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative bg-[var(--bg-alt)] border-t border-[var(--line)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10">
        
        {/* Centered Section Head matching fahimio */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-16">
          <span className="eyebrow mx-auto">
            Skills &amp; Technologies
          </span>
          <h2 className="text-3xl sm:text-4xl font-['Manrope'] font-extrabold text-[var(--ink)] tracking-tight">
            What I build with
          </h2>
          <p className="text-base text-[var(--ink-soft)] leading-relaxed">
            A snapshot of the languages, frameworks, and tools I use — categorized honestly by how comfortable I am with each.
          </p>
        </div>

        {/* 4 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-[var(--surface)] border border-[var(--line)] shadow-[var(--shadow-sm)] space-y-5 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-[var(--line)]">
                <div className="w-10 h-10 rounded-xl bg-[var(--tint-1)] border border-[var(--line)] flex items-center justify-center">
                  {cat.icon}
                </div>
                <h3 className="text-lg font-bold font-['Manrope'] text-[var(--ink)]">
                  {cat.title}
                </h3>
              </div>

              {/* Skill chips */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-chip">
                    <span className="text-[var(--ink)] font-medium text-xs sm:text-[13px]">
                      {skill.name}
                    </span>
                    <span className="lvl text-[11px] px-2 py-0.5 rounded-md bg-[var(--tint-1)] border border-[var(--line-subtle)] text-[var(--ink-faint)] whitespace-nowrap">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
