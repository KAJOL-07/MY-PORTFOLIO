import React from 'react';

export default function PageHeader({ badge, title, subtitle }) {
  return (
    <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 pt-6">
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-mocha-cream/20 text-burgundy-deep border border-mocha-cream/50 shadow-warm-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-burgundy-deep animate-pulse"></span>
          {badge}
        </div>
      )}

      <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-espresso">
        {title}
      </h1>

      {/* Mocha Cream & Deep Burgundy decorative divider */}
      <div className="flex items-center justify-center gap-2 pt-1">
        <div className="w-10 h-px bg-gradient-to-r from-transparent to-mocha-cream"></div>
        <div className="w-2 h-2 rounded-full bg-burgundy-deep"></div>
        <div className="w-10 h-px bg-gradient-to-l from-transparent to-mocha-cream"></div>
      </div>

      {subtitle && (
        <p className="text-sm sm:text-base text-muted-text max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
