import React from 'react';
import { WHY_CHOOSE_ITEMS } from '../data/content';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-28 md:py-36 bg-[#F5F1EB] text-obsidian border-t border-obsidian/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center space-x-3 mb-4">
            <span className="w-6 h-[1.5px] bg-terracotta" />
            <span className="text-[11px] font-sans uppercase tracking-[0.3em] text-terracotta font-semibold">
              The INNOVIST Standard
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-obsidian leading-[1.12] font-normal tracking-tight">
            Designed Around You. <br />
            <span className="italic text-terracotta font-light">Defined by Details.</span>
          </h2>
          <p className="font-sans text-sm md:text-base text-obsidian/75 mt-4 font-light leading-relaxed">
            Our studio deliberately limits concurrent commissions to ensure senior architectural principals remain hands-on across every elevation, joint, and fabric choice.
          </p>
        </div>

        {/* Clean Editorial 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="p-8 bg-white/70 border border-obsidian/10 hover:border-terracotta hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs tracking-widest text-terracotta font-semibold block mb-4">
                  Commitment 0{idx + 1}
                </span>
                <h3 className="font-serif text-2xl text-obsidian font-normal group-hover:text-terracotta transition-colors mb-3">
                  {item.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-obsidian/75 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-obsidian/10 flex items-center justify-between text-[11px] font-sans uppercase tracking-widest text-obsidian/50">
                <span>INNOVIST Studio Pledge</span>
                <span className="w-4 h-[1.5px] bg-terracotta" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

