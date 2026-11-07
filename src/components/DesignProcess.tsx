import React, { useEffect, useRef } from 'react';
import { DESIGN_PROCESS } from '../data/content';
import { SplitReveal } from './SplitReveal';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const DesignProcess: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const line = lineRef.current;
    if (!section || !line) return;

    const anim = gsap.fromTo(
      line,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      }
    );

    return () => {
      anim.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="py-20 sm:py-28 md:py-36 bg-[#F5F1EB] text-obsidian border-t border-obsidian/10 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-obsidian/10 pb-6 sm:pb-8 mb-10 sm:mb-16 gap-4 sm:gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-2.5 sm:space-x-3 mb-3 sm:mb-4">
              <span className="w-6 sm:w-8 h-[1.5px] bg-terracotta" />
              <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.24em] sm:tracking-[0.3em] text-terracotta font-semibold">
                Methodology & Execution
              </span>
            </div>
            <SplitReveal
              as="h2"
              className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-obsidian tracking-tight"
            >
              {"From First Conversation\nto Final Reveal."}
            </SplitReveal>
            <p className="font-sans text-xs sm:text-sm md:text-base text-obsidian/75 mt-3 sm:mt-4 font-light leading-relaxed">
              A transparent, milestone-driven pathway engineered to eliminate uncertainty and deliver perfection.
            </p>
          </div>

          <div className="hidden lg:block text-right">
            <span className="text-xs uppercase tracking-[0.25em] text-coral font-mono font-semibold">
              04 Phase Rigor
            </span>
          </div>
        </div>

        {/* Desktop Horizontal Timeline / Mobile Vertical Timeline */}
        <div className="relative">
          {/* Animated Connecting Line on Desktop */}
          <div
            ref={lineRef}
            className="hidden lg:block absolute top-[28px] left-8 right-8 h-[2px] bg-terracotta origin-left z-0 will-change-transform"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 relative z-10">
            {DESIGN_PROCESS.map((step, index) => (
              <div
                key={step.number}
                className="bg-white/80 border border-obsidian/10 p-6 md:p-8 flex flex-col justify-between group hover:border-terracotta hover:shadow-2xl transition-all duration-300 relative shadow-sm"
              >
                {/* Step Top Bar: Number Pin & Duration */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-13 h-13 px-4 py-2 bg-obsidian text-white flex items-center justify-center font-serif text-xl font-light group-hover:bg-terracotta transition-colors shadow-md">
                    {step.number}
                  </div>
                  <span className="text-[11px] font-sans uppercase tracking-widest text-terracotta font-semibold bg-terracotta/10 px-2.5 py-1">
                    {step.duration}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-obsidian/60 block">
                    {step.tagline}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-obsidian font-normal group-hover:text-terracotta transition-colors">
                    {step.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-obsidian/80 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Step Progress Line */}
                <div className="mt-8 pt-4 border-t border-obsidian/10 flex items-center justify-between text-[11px] font-mono text-obsidian/60 uppercase">
                  <span>Milestone 0{index + 1}</span>
                  <span className="group-hover:translate-x-1 transition-transform text-coral font-bold">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
