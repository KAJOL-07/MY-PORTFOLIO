import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { 
  Code2, 
  Globe, 
  Database, 
  Cpu, 
  BarChart3, 
  Wrench, 
  Sparkles 
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const iconMap = {
  Code2,
  Globe,
  Database,
  Cpu,
  BarChart3,
  Wrench,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...skillsData.map((s) => s.category)];

  const displayedSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter((s) => s.category === activeCategory);

  return (
    <div className="py-16 sm:py-24 bg-cosmic-grid relative min-h-[calc(100vh-80px)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <PageHeader 
          badge="Technical Proficiency"
          title="Technical Skills"
          subtitle="A comprehensive inventory of programming languages, web engineering frameworks, databases, and core computer science foundations."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-burgundy-deep text-cosmic-latte font-bold shadow-warm-sm scale-105'
                  : 'bg-white text-muted-text hover:text-espresso hover:bg-cosmic-soft border border-mocha-cream/40 shadow-warm-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedSkills.map((group) => {
            const IconComponent = iconMap[group.icon] || Code2;

            return (
              <div
                key={group.category}
                className="p-6 sm:p-7 rounded-2xl luxury-card border border-mocha-cream/40 flex flex-col justify-between group hover:border-burgundy-deep/40 hover:shadow-warm-md bg-white/90"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-mocha-cream/20 border border-mocha-cream/50 flex items-center justify-center text-burgundy-deep group-hover:scale-110 transition-transform shadow-warm-sm">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-serif font-bold text-espresso group-hover:text-burgundy-deep transition-colors">
                        {group.category}
                      </h3>
                    </div>

                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cosmic-soft text-burgundy-deep border border-mocha-cream/40">
                      {group.skills.length} skills
                    </span>
                  </div>

                  <p className="text-xs text-muted-text mb-5 leading-relaxed">
                    {group.description}
                  </p>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-cosmic-soft text-espresso border border-mocha-cream/40 hover:border-burgundy-deep hover:text-burgundy-deep transition-all duration-150"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-burgundy-deep"></span>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-mocha-cream/30 flex items-center justify-between text-[11px] text-muted-text">
                  <span className="font-mono">Tested in Projects</span>
                  <Sparkles className="w-3.5 h-3.5 text-burgundy-deep" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
