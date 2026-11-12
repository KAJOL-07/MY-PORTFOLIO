import React from 'react';
import PageHeader from '../components/PageHeader';
import { 
  Briefcase, 
  Calendar, 
  ChevronRight, 
  ShieldCheck,
  Sparkles 
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <div className="py-16 sm:py-24 bg-cosmic-grid relative min-h-[calc(100vh-80px)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <PageHeader 
          badge="Work History"
          title="Experience"
          subtitle="Software development internship experience applying clean architecture, cross-platform modules, and production REST APIs."
        />

        {/* Vertical Timeline */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Timeline Spine */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-burgundy-deep via-mocha-cream to-transparent"></div>

          <div className="space-y-12">
            {experienceData.map((item, idx) => (
              <div key={idx} className="relative pl-12 sm:pl-20">
                
                {/* Timeline Node */}
                <div className="absolute left-2 sm:left-6 top-6 w-5 h-5 -translate-x-1/2 rounded-full bg-white border-2 border-burgundy-deep flex items-center justify-center shadow-warm-sm">
                  <div className="w-2 h-2 rounded-full bg-burgundy-deep"></div>
                </div>

                {/* Experience Card */}
                <div className="p-6 sm:p-8 rounded-2xl luxury-card border border-mocha-cream/40 space-y-6 bg-white/90 shadow-warm-sm">
                  
                  {/* Top: Role, Company, Date */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-mocha-cream/30">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-mocha-cream/20 border border-mocha-cream/60 flex items-center justify-center text-burgundy-deep shrink-0 shadow-warm-sm">
                        <Briefcase className="w-6 h-6" />
                      </div>

                      <div>
                        <span className="inline-flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-widest text-burgundy-deep bg-mocha-cream/20 px-2.5 py-0.5 rounded-full border border-mocha-cream/40 mb-1.5">
                          <Sparkles className="w-3 h-3" />
                          {item.badge}
                        </span>

                        <h3 className="text-xl sm:text-2xl font-serif font-bold text-espresso">
                          {item.position}
                        </h3>

                        <div className="text-sm font-semibold text-burgundy-deep mt-0.5 flex items-center gap-2">
                          <span>{item.company}</span>
                          <span className="text-muted-text">•</span>
                          <span className="text-muted-text font-normal">{item.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-cosmic-soft border border-mocha-cream/40 text-burgundy-deep text-xs font-mono self-start md:self-center">
                      <Calendar className="w-3.5 h-3.5 text-burgundy-deep" />
                      <span>{item.date}</span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-espresso/90 leading-relaxed">
                    {item.summary}
                  </p>

                  {/* Responsibilities list */}
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs uppercase tracking-widest font-bold text-burgundy-deep flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-burgundy-deep" /> Core Responsibilities & Technical Work
                    </h4>

                    <ul className="space-y-2.5">
                      {item.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-3 text-sm text-muted-text leading-relaxed">
                          <div className="mt-1 w-4 h-4 rounded-full bg-mocha-cream/25 text-burgundy-deep flex items-center justify-center shrink-0">
                            <ChevronRight className="w-3 h-3" />
                          </div>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Used */}
                  <div className="pt-4 border-t border-mocha-cream/30 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-text mr-1">
                      Applied Tools:
                    </span>
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-cosmic-soft text-espresso border border-mocha-cream/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
