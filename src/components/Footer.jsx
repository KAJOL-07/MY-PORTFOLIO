import React from 'react';
import { Mail, ArrowUp, Crown } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-cosmic-soft border-t border-mocha-cream/30 py-12 relative overflow-hidden">
      {/* Subtle warm ambient glow */}
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-mocha-cream/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Identity */}
          <div className="flex items-center gap-3.5 text-center md:text-left">
            <div className="w-10 h-10 rounded-xl bg-white border border-mocha-cream/50 flex items-center justify-center text-burgundy-deep shadow-warm-sm">
              <Crown className="w-4 h-4 text-burgundy-deep" />
            </div>
            <div>
              <div className="font-serif text-lg font-bold tracking-widest text-espresso">
                KAJOL T A
              </div>
              <p className="text-xs text-muted-text mt-0.5">
                Computer Science Engineering Student
              </p>
            </div>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white border border-mocha-cream/40 text-muted-text hover:text-burgundy-deep hover:border-burgundy-deep shadow-warm-sm transition-all duration-200"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white border border-mocha-cream/40 text-muted-text hover:text-burgundy-deep hover:border-burgundy-deep shadow-warm-sm transition-all duration-200"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socials.emailMailto}
              className="p-2.5 rounded-xl bg-white border border-mocha-cream/40 text-muted-text hover:text-burgundy-deep hover:border-burgundy-deep shadow-warm-sm transition-all duration-200"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-burgundy-deep hover:bg-burgundy-dark text-cosmic-latte shadow-warm-sm hover:shadow-warm-md transition-all duration-200 ml-2"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright & Palette Signature */}
        <div className="mt-8 pt-6 border-t border-mocha-cream/25 text-center text-xs text-muted-text flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© 2026 Kajol T A. All rights reserved.</span>
          <span className="text-[11px] text-muted-text/80 font-mono">
            Cosmic Latte • Mocha Cream • Deep Burgundy • Espresso
          </span>
        </div>
      </div>
    </footer>
  );
}
