import React, { useState } from 'react';
import { Sparkles, Layers, Eye } from 'lucide-react';
import { MATERIALS, type MaterialItem } from '../data/content';
import { SplitReveal } from './SplitReveal';

export const MaterialShowcase: React.FC = () => {
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialItem>(MATERIALS[0]);
  const [viewMode, setViewMode] = useState<'macro' | 'room'>('macro');

  return (
    <section id="materials" className="py-28 md:py-36 bg-[#0B0B0B] text-[#F5F1EB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-8 h-[1.5px] bg-terracotta" />
              <span className="text-[11px] font-sans uppercase tracking-[0.3em] text-coral font-semibold">
                Craftsmanship & Materiality
              </span>
            </div>
            <SplitReveal
              as="h2"
              className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-[#F5F1EB] tracking-tight"
            >
              {"Every Detail Has\na Purpose."}
            </SplitReveal>
            <p className="font-sans text-sm sm:text-base text-[#F5F1EB]/75 mt-4 font-light leading-relaxed">
              We source raw, authentic elements from historic quarries and sustainable mills. Explore the tactile dialogue between raw materials and architectural living.
            </p>
          </div>

          {/* Macro Detail vs Room Application Toggle */}
          <div className="flex items-center bg-white/5 p-1 border border-white/15 text-xs uppercase tracking-widest">
            <button
              onClick={() => setViewMode('macro')}
              className={`flex items-center space-x-2 px-5 py-2.5 transition-all ${
                viewMode === 'macro'
                  ? 'bg-terracotta text-white font-semibold shadow-md'
                  : 'text-[#F5F1EB]/70 hover:text-[#F5F1EB]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Macro Texture</span>
            </button>
            <button
              onClick={() => setViewMode('room')}
              className={`flex items-center space-x-2 px-5 py-2.5 transition-all ${
                viewMode === 'room'
                  ? 'bg-terracotta text-white font-semibold shadow-md'
                  : 'text-[#F5F1EB]/70 hover:text-[#F5F1EB]'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>In-Room Application</span>
            </button>
          </div>
        </div>

        {/* Material Selection Pills */}
        <div className="flex items-center space-x-3 overflow-x-auto no-scrollbar pb-6 mb-12 text-xs uppercase tracking-[0.18em]">
          {MATERIALS.map((mat) => {
            const isCurrent = selectedMaterial.id === mat.id;
            return (
              <button
                key={mat.id}
                onClick={() => setSelectedMaterial(mat)}
                className={`px-5 py-2.5 whitespace-nowrap transition-all duration-300 border ${
                  isCurrent
                    ? 'border-terracotta bg-terracotta/20 text-[#F5F1EB] font-semibold'
                    : 'border-white/15 bg-white/5 text-[#F5F1EB]/60 hover:border-terracotta/40 hover:text-[#F5F1EB]'
                }`}
              >
                <span>{mat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Master Showcase Layout: Big Responsive Visual Frame & Editorial Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Showcase (Macro or Room) */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[16/11] overflow-hidden bg-black shadow-2xl border border-white/10">
              <img
                key={`${selectedMaterial.id}-${viewMode}`}
                src={viewMode === 'macro' ? selectedMaterial.macroImage : selectedMaterial.roomImage}
                alt={selectedMaterial.name}
                className="w-full h-full object-cover transition-all duration-1000 ease-out transform hover:scale-105 animate-[fadeIn_0.6s_ease-out]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              {/* View Mode Indicator Badge */}
              <div className="absolute bottom-4 left-4 z-10 bg-black/85 px-4 py-2 backdrop-blur-sm border border-terracotta/30">
                <span className="text-[10px] uppercase tracking-[0.25em] text-coral font-mono">
                  {viewMode === 'macro' ? 'Tactile Swatch / 1:1 Macro' : 'Living Application in Residence'}
                </span>
              </div>
            </div>
          </div>

          {/* Editorial Specs & Provenance */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-coral font-mono block mb-2">
                {selectedMaterial.category} • {selectedMaterial.origin}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#F5F1EB] font-normal">
                {selectedMaterial.name}
              </h3>
            </div>

            <p className="font-sans text-sm sm:text-base text-[#F5F1EB]/85 font-light leading-relaxed">
              {selectedMaterial.description}
            </p>

            <div className="border-t border-white/10 pt-6">
              <h4 className="text-xs uppercase tracking-[0.2em] text-terracotta font-sans mb-3 flex items-center space-x-2">
                <Layers className="w-3.5 h-3.5" />
                <span>Tactile & Architectural Qualities</span>
              </h4>
              <ul className="space-y-2.5">
                {selectedMaterial.qualities.map((qual, idx) => (
                  <li key={idx} className="flex items-center space-x-2.5 text-xs sm:text-sm text-[#F5F1EB]/85 font-sans">
                    <span className="w-1.5 h-1.5 bg-coral rounded-full" />
                    <span>{qual}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-white/5 border border-white/10 text-xs text-[#F5F1EB]/75 font-sans tracking-wide leading-relaxed">
              Every client receives a curated physical sample tray with bespoke marble slabs, hand-finished timbers, and dyed fabrics prior to civil commencement.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
