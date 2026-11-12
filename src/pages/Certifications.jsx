import React from 'react';
import PageHeader from '../components/PageHeader';
import { 
  Award, 
  Calendar, 
  ShieldCheck 
} from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export default function Certifications() {
  return (
    <div className="py-16 sm:py-24 bg-cosmic-grid relative min-h-[calc(100vh-80px)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <PageHeader 
          badge="Verified Credentials"
          title="Certifications"
          subtitle="Official technical credentials awarded by Cisco Networking Academy verifying computational, programming, and engineering fundamentals."
        />

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificationsData.map((cert, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl luxury-card border border-mocha-cream/40 hover:border-burgundy-deep/40 flex flex-col justify-between group relative overflow-hidden bg-white/90 shadow-warm-sm hover:shadow-warm-md"
            >
              {/* Subtle top right aura */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-mocha-cream/15 rounded-bl-full pointer-events-none"></div>

              <div className="space-y-4">
                {/* Badge & Icon */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-mocha-cream/20 border border-mocha-cream/60 flex items-center justify-center text-burgundy-deep group-hover:scale-110 transition-transform shadow-warm-sm">
                    <Award className="w-6 h-6" />
                  </div>

                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-mocha-cream/20 text-burgundy-deep border border-mocha-cream/40 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-burgundy-deep" />
                    {cert.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-serif font-bold text-espresso tracking-tight group-hover:text-burgundy-deep transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-burgundy-deep mt-1">
                    {cert.issuer}
                  </p>
                </div>

                <p className="text-xs text-muted-text leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills Learned */}
                <div className="pt-2">
                  <div className="text-[10px] uppercase tracking-wider font-bold text-muted-text mb-2">
                    Verified Competencies:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-cosmic-soft text-espresso border border-mocha-cream/40"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-mocha-cream/30 flex items-center justify-between text-xs text-muted-text font-mono">
                <div className="flex items-center gap-1.5 text-burgundy-deep font-medium">
                  <Calendar className="w-3.5 h-3.5 text-burgundy-deep" />
                  <span>{cert.date}</span>
                </div>
                <span className="text-muted-text text-[11px]">Cisco Academy</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
