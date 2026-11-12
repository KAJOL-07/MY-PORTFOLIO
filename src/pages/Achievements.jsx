import React from 'react';
import PageHeader from '../components/PageHeader';
import { 
  Trophy, 
  MapPin, 
  Flag, 
  CheckCircle2 
} from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export default function Achievements() {
  return (
    <div className="py-16 sm:py-24 bg-cosmic-grid relative min-h-[calc(100vh-80px)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <PageHeader 
          badge="Competitive Honors"
          title="Achievements & Competitions"
          subtitle="National-level collegiate hackathons and rapid frontend design competitions evaluated by industry experts."
        />

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievementsData.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl luxury-card border border-mocha-cream/40 hover:border-burgundy-deep/40 flex flex-col justify-between group relative overflow-hidden bg-white/90 shadow-warm-sm hover:shadow-warm-md"
            >
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-mocha-cream/15 rounded-bl-full pointer-events-none"></div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-mocha-cream/20 border border-mocha-cream/60 flex items-center justify-center text-burgundy-deep group-hover:scale-110 transition-transform shadow-warm-sm">
                    <Trophy className="w-6 h-6" />
                  </div>

                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-mocha-cream/20 text-burgundy-deep border border-mocha-cream/40 flex items-center gap-1">
                    <Flag className="w-3 h-3 text-burgundy-deep" />
                    {item.level}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-serif font-bold text-espresso tracking-tight group-hover:text-burgundy-deep transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-sm font-semibold text-burgundy-deep mt-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-burgundy-deep" />
                    <span>{item.institution}</span>
                  </div>
                </div>

                <p className="text-xs text-muted-text leading-relaxed pt-1">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-mocha-cream/30 flex items-center justify-between text-xs text-muted-text font-mono">
                <span className="text-burgundy-deep flex items-center gap-1 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-burgundy-deep" /> {item.highlight}
                </span>
                <span className="text-muted-text text-[11px]">National Record</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
