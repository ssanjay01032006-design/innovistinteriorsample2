import React, { useState } from 'react';
import { PHILOSOPHY_POINTS } from '../data/content';
import { SplitReveal } from './SplitReveal';

export const DesignPhilosophy: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="philosophy" className="py-20 sm:py-28 md:py-36 bg-ivory-warm text-obsidian border-t border-obsidian/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-16">
          <div className="flex items-center space-x-2.5 sm:space-x-3 mb-3 sm:mb-4">
            <span className="w-6 sm:w-8 h-[1.5px] bg-terracotta" />
            <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.24em] sm:tracking-[0.3em] text-terracotta font-semibold">
              Design Philosophy
            </span>
          </div>
          <SplitReveal
            as="h2"
            className="font-serif text-3xl sm:text-5xl md:text-6xl text-obsidian leading-[1.12] font-normal"
          >
            {"Where Thoughtful Design\nMeets Everyday Living."}
          </SplitReveal>
          <p className="font-sans text-xs sm:text-sm md:text-base text-grey-muted mt-3 sm:mt-4 font-light leading-relaxed max-w-xl">
            We reject ephemeral decoration in pursuit of lasting spatial resonance. Our ethos is anchored in three inviolable architectural commitments.
          </p>
        </div>

        {/* Interactive Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: 3 Interactive Principle Rows */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-obsidian/15">
            {PHILOSOPHY_POINTS.map((item, index) => {
              const isActive = activeTab === index;
              return (
                <div
                  key={item.num}
                  onClick={() => setActiveTab(index)}
                  className={`py-8 cursor-pointer transition-all duration-300 group ${
                    isActive ? 'opacity-100' : 'opacity-65 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-xs font-sans tracking-[0.25em] text-terracotta font-semibold">
                      {item.num}
                    </span>
                    <span className="text-[11px] font-sans uppercase tracking-widest text-grey-muted hidden sm:inline">
                      {item.subtitle}
                    </span>
                  </div>

                  <h3 className={`font-serif text-2xl sm:text-3xl md:text-4xl transition-colors ${
                    isActive ? 'text-obsidian font-normal' : 'text-obsidian/80 group-hover:text-terracotta'
                  }`}>
                    {item.title}
                  </h3>

                  <div className={`overflow-hidden transition-all duration-500 ${
                    isActive ? 'max-h-48 mt-4 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <p className="font-sans text-sm md:text-base text-obsidian/80 font-light leading-relaxed border-l-2 border-terracotta pl-4">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Architectural Image Display */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] overflow-hidden bg-ivory-sand shadow-2xl border border-terracotta/20">
              {PHILOSOPHY_POINTS.map((item, index) => (
                <img
                  key={item.num}
                  src={item.image}
                  alt={item.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
                    activeTab === index
                      ? 'opacity-100 scale-100 z-10'
                      : 'opacity-0 scale-105 z-0 pointer-events-none'
                  }`}
                  loading="lazy"
                />
              ))}

              {/* Floating Caption */}
              <div className="absolute bottom-4 left-4 z-20 bg-obsidian/90 px-4 py-2 backdrop-blur-sm text-ivory-warm border border-terracotta/40">
                <span className="block text-[10px] uppercase tracking-widest text-coral font-mono">
                  Principle {PHILOSOPHY_POINTS[activeTab].num}
                </span>
                <span className="font-serif text-base text-ivory-warm">
                  {PHILOSOPHY_POINTS[activeTab].title}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
