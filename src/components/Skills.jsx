import React, { useState } from 'react';
import { 
  Code2, 
  Globe, 
  Database, 
  Cpu, 
  BarChart3, 
  Wrench, 
  Check, 
  Layers,
  Sparkles
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const categoryIcons = {
  Code2: Code2,
  Globe: Globe,
  Database: Database,
  Cpu: Cpu,
  BarChart3: BarChart3,
  Wrench: Wrench,
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...skillsData.map((c) => c.category)];

  const displayedCategories = selectedCategory === 'All'
    ? skillsData
    : skillsData.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            Technical Proficiency
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Skills & Competencies
          </h2>
          <p className="text-sm text-slate-400">
            A comprehensive catalog of languages, architectures, databases, and engineering principles I practice.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mt-2"></div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/25 scale-105'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((group) => {
            const IconComponent = categoryIcons[group.icon] || Code2;
            return (
              <div
                key={group.category}
                className="p-6 rounded-2xl glass-panel glass-panel-hover border border-slate-800/80 flex flex-col justify-between group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {group.category}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                      {group.skills.length}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                    {group.description}
                  </p>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900/90 text-slate-200 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800 hover:text-cyan-300 transition-all duration-150"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="font-mono">Tested in Projects</span>
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400/60" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
