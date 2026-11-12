import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, FileText, Crown } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenResume }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 luxury-nav shadow-warm-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo: KAJOL T A with Serif Font */}
          <Link 
            to="/" 
            className="group flex items-center gap-2.5 text-espresso font-bold tracking-widest text-base sm:text-lg transition-transform hover:scale-102"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-mocha-cream/30 via-cosmic-soft to-cosmic-latte border border-mocha-cream/50 flex items-center justify-center text-burgundy-deep shadow-warm-sm group-hover:border-burgundy-deep transition-colors">
              <Crown className="w-4 h-4 text-burgundy-deep" />
            </div>
            <span className="font-serif font-bold tracking-widest text-espresso group-hover:text-burgundy-deep transition-colors">
              KAJOL T A
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/80 p-1.5 rounded-full border border-mocha-cream/40 backdrop-blur-md shadow-warm-sm">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 relative ${
                    isActive
                      ? 'text-cosmic-latte bg-burgundy-deep shadow-warm-sm font-bold'
                      : 'text-muted-text hover:text-espresso hover:bg-mocha-cream/15'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Right CTA: Resume Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="group inline-flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl bg-burgundy-deep hover:bg-burgundy-dark text-cosmic-latte shadow-warm-sm hover:shadow-warm-md transition-all active:scale-95"
            >
              <FileText className="w-3.5 h-3.5 text-cosmic-latte group-hover:rotate-6 transition-transform" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="p-2 rounded-lg bg-white text-burgundy-deep border border-mocha-cream/50 shadow-warm-sm"
              aria-label="View Resume"
            >
              <FileText className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white text-muted-text hover:text-burgundy-deep border border-mocha-cream/50 focus:outline-none shadow-warm-sm"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-burgundy-deep" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-cosmic-latte/98 border-b border-mocha-cream/40 px-4 pt-3 pb-6 backdrop-blur-2xl animate-in slide-in-from-top-2 duration-200 shadow-warm-md">
          <div className="flex flex-col gap-1 py-2">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-burgundy-deep text-cosmic-latte font-bold shadow-warm-sm'
                      : 'text-muted-text hover:bg-white hover:text-espresso'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          <div className="pt-4 mt-2 border-t border-mocha-cream/30">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold rounded-xl bg-burgundy-deep text-cosmic-latte shadow-warm-sm"
            >
              <FileText className="w-4 h-4 text-cosmic-latte" />
              <span>View Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
