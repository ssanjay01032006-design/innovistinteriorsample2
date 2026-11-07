import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { STORY_STAGES, type StoryStage } from '../data/content';
import { SplitReveal } from './SplitReveal';

export const CinematicStorytelling: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStage: StoryStage = STORY_STAGES[activeStepIndex];

  return (
    <section id="story" className="py-20 sm:py-28 md:py-36 bg-[#F5F1EB] text-obsidian border-t border-obsidian/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-16">
          <div className="flex items-center space-x-2.5 sm:space-x-3 mb-3 sm:mb-4">
            <span className="w-6 sm:w-8 h-[1.5px] bg-terracotta" />
            <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.24em] sm:tracking-[0.3em] text-terracotta font-semibold">
              Project Case Story • The Aethel Residence
            </span>
          </div>
          <SplitReveal
            as="h2"
            className="font-serif text-3xl sm:text-5xl md:text-6xl text-obsidian leading-[1.12] font-normal tracking-tight"
          >
            {"From Vision to\nLiving Space."}
          </SplitReveal>
          <p className="font-sans text-xs sm:text-sm md:text-base text-obsidian/75 mt-3 sm:mt-4 font-light leading-relaxed">
            Follow the metamorphosis of a raw penthouse shell into an enduring architectural sanctuary. Step through each evolutionary phase below.
          </p>
        </div>

        {/* 5-Step Stage Stepper Bar */}
        <div className="flex sm:grid sm:grid-cols-5 gap-2 sm:gap-3 overflow-x-auto no-scrollbar touch-pan-x border-b border-obsidian/15 pb-4 mb-8 sm:mb-12">
          {STORY_STAGES.map((stg, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={stg.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`text-left p-3 sm:p-3.5 border-b-2 transition-all duration-300 shrink-0 min-w-[130px] sm:min-w-0 ${
                  isActive
                    ? 'border-terracotta bg-terracotta/10 shadow-sm'
                    : 'border-transparent hover:border-obsidian/20 opacity-60 hover:opacity-100'
                }`}
              >
                <span className="font-mono text-[10px] sm:text-xs tracking-widest text-terracotta font-semibold block">
                  Stage {stg.step}
                </span>
                <span className="font-serif text-sm sm:text-base md:text-lg text-obsidian font-medium block truncate">
                  {stg.title.split('&')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Stage Presentation: Split Screen with Crossfading Architectural Visual & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Showcase with Stage Image */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[16/10] overflow-hidden bg-obsidian/10 shadow-2xl">
              {STORY_STAGES.map((stg, idx) => (
                <div
                  key={stg.step}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    activeStepIndex === idx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <img
                    src={stg.image}
                    alt={stg.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                </div>
              ))}

              {/* Floating Stage Identifier */}
              <div className="absolute bottom-4 left-4 z-20 bg-black/90 px-4 py-2 backdrop-blur-sm text-[#F5F1EB]">
                <span className="text-[10px] uppercase tracking-widest text-coral font-mono block">
                  Stage {currentStage.step} of 05
                </span>
                <span className="font-serif text-base text-[#F5F1EB]">
                  {currentStage.subtitle}
                </span>
              </div>
            </div>

            {/* Stepper Navigation Buttons */}
            <div className="flex items-center justify-between mt-4">
              <span className="text-xs font-sans tracking-widest text-obsidian/60 uppercase">
                0{activeStepIndex + 1} / 05 Stages
              </span>
              <div className="flex items-center space-x-2">
                <button
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 border border-obsidian/20 text-xs uppercase tracking-widest disabled:opacity-30 hover:bg-terracotta hover:text-white hover:border-terracotta transition-colors"
                >
                  Previous
                </button>
                <button
                  disabled={activeStepIndex === STORY_STAGES.length - 1}
                  onClick={() => setActiveStepIndex((prev) => Math.min(STORY_STAGES.length - 1, prev + 1))}
                  className="px-4 py-2 border border-obsidian/20 text-xs uppercase tracking-widest disabled:opacity-30 hover:bg-terracotta hover:text-white hover:border-terracotta transition-colors flex items-center space-x-1"
                >
                  <span>Next Stage</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          {/* Editorial Stage Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-coral font-mono font-semibold block mb-2">
                Phase {currentStage.step} • {currentStage.subtitle}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-obsidian font-normal">
                {currentStage.title}
              </h3>
            </div>

            <p className="font-sans text-sm sm:text-base text-obsidian/85 font-light leading-relaxed">
              {currentStage.description}
            </p>

            <blockquote className="border-l-2 border-terracotta pl-4 italic font-serif text-lg text-terracotta font-light my-4">
              "{currentStage.quote}"
            </blockquote>

            <div className="border-t border-obsidian/15 pt-6">
              <h4 className="text-xs uppercase tracking-[0.2em] text-obsidian font-sans font-semibold mb-3 flex items-center space-x-2">
                <Sparkles className="w-3.5 h-3.5 text-coral" />
                <span>Phase Deliverables</span>
              </h4>
              <ul className="space-y-2.5">
                {currentStage.details.map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-2 text-xs sm:text-sm text-obsidian/80">
                    <CheckCircle className="w-3.5 h-3.5 text-terracotta shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
