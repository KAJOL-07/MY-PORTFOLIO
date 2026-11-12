import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Crown, 
  CheckCircle2, 
  Workflow, 
  AlertCircle, 
  Lightbulb, 
  Code2, 
  UserCheck, 
  Sparkles 
} from 'lucide-react';
import { Github } from '../components/Icons';
import { projectsData } from '../data/portfolioData';

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const isVaxiMatch = project.id === 'vaximatch';

  return (
    <div className="py-16 sm:py-24 bg-cosmic-grid relative min-h-[calc(100vh-80px)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Top Navigation Back Link */}
        <div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-text hover:text-burgundy-deep transition-colors py-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Project Hero Card */}
        <div className="p-8 sm:p-10 rounded-3xl luxury-card border border-mocha-cream/50 space-y-6 bg-white/95 shadow-warm-md">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-cosmic-soft text-burgundy-deep border border-mocha-cream/40 font-medium">
              {project.category}
            </span>
            {project.featured && (
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-mocha-cream/20 text-burgundy-deep border border-mocha-cream/50">
                {isVaxiMatch ? (
                  <>
                    <Sparkles className="w-3.5 h-3.5 text-burgundy-deep" /> Latest Project
                  </>
                ) : (
                  <>
                    <Crown className="w-3.5 h-3.5 text-burgundy-deep" /> Flagship System
                  </>
                )}
              </span>
            )}
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-espresso tracking-tight">
              {project.title}
            </h1>
            <p className="text-base sm:text-lg font-serif font-semibold text-burgundy-deep">
              {project.subtitle}
            </p>
          </div>

          <p className="text-sm sm:text-base text-espresso/90 leading-relaxed max-w-4xl">
            {project.overview}
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold bg-burgundy-deep hover:bg-burgundy-dark text-cosmic-latte shadow-warm-sm transition-all"
            >
              <Github className="w-4 h-4 text-cosmic-latte" />
              <span>Explore GitHub Repository</span>
            </a>
          </div>
        </div>

        {/* Problem vs Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Problem */}
          <div className="p-6 sm:p-8 rounded-2xl luxury-card border border-mocha-cream/40 space-y-4 bg-white/90 shadow-warm-sm">
            <div className="flex items-center gap-3 text-burgundy-deep">
              <div className="w-10 h-10 rounded-xl bg-mocha-cream/20 border border-mocha-cream/50 flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-burgundy-deep" />
              </div>
              <h3 className="text-base font-serif font-bold text-espresso">
                The Problem & Challenge
              </h3>
            </div>
            <p className="text-sm text-muted-text leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="p-6 sm:p-8 rounded-2xl luxury-card border border-mocha-cream/40 space-y-4 bg-white/90 shadow-warm-sm">
            <div className="flex items-center gap-3 text-burgundy-deep">
              <div className="w-10 h-10 rounded-xl bg-mocha-cream/20 border border-mocha-cream/50 flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-burgundy-deep" />
              </div>
              <h3 className="text-base font-serif font-bold text-espresso">
                Architectural Solution
              </h3>
            </div>
            <p className="text-sm text-muted-text leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Technologies & My Contribution */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Tech Stack */}
          <div className="md:col-span-5 p-6 sm:p-8 rounded-2xl luxury-card border border-mocha-cream/40 space-y-4 bg-white/90 shadow-warm-sm">
            <h3 className="text-sm uppercase font-bold tracking-widest text-burgundy-deep flex items-center gap-2">
              <Code2 className="w-4 h-4 text-burgundy-deep" /> Applied Technologies
            </h3>
            <div className="flex flex-wrap gap-2 pt-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-cosmic-soft text-espresso border border-mocha-cream/40"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Engineering Contribution */}
          <div className="md:col-span-7 p-6 sm:p-8 rounded-2xl luxury-card border border-mocha-cream/40 space-y-3 bg-white/90 shadow-warm-sm">
            <h3 className="text-sm uppercase font-bold tracking-widest text-burgundy-deep flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-burgundy-deep" /> My Engineering Contribution
            </h3>
            <p className="text-sm text-espresso/90 leading-relaxed pt-1">
              {project.contribution}
            </p>
          </div>
        </div>

        {/* Workflow Stages */}
        <div className="p-6 sm:p-8 rounded-2xl luxury-card border border-mocha-cream/40 space-y-6 bg-white/90 shadow-warm-sm">
          <div className="flex items-center justify-between pb-4 border-b border-mocha-cream/30">
            <h3 className="text-base font-serif font-bold text-espresso flex items-center gap-2">
              <Workflow className="w-5 h-5 text-burgundy-deep" /> System Architecture & Execution Workflow
            </h3>
            <span className="text-xs font-mono text-muted-text">Pipeline steps</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.workflow.map((step, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-cosmic-soft border border-mocha-cream/35 flex items-start gap-3"
              >
                <span className="w-6 h-6 rounded-full bg-mocha-cream/25 text-burgundy-deep border border-mocha-cream/50 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                  {idx + 1}
                </span>
                <p className="text-xs text-muted-text leading-relaxed">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features List */}
        <div className="p-6 sm:p-8 rounded-2xl luxury-card border border-mocha-cream/40 space-y-4 bg-white/90 shadow-warm-sm">
          <h3 className="text-base font-serif font-bold text-espresso flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-burgundy-deep" /> Core Features & Capabilities
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {project.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-cosmic-soft border border-mocha-cream/30 text-xs text-muted-text">
                <CheckCircle2 className="w-4 h-4 text-burgundy-deep shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
