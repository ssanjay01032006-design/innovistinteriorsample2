import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Clock, X } from 'lucide-react';
import { SERVICES, type Service } from '../data/content';
import { SplitReveal } from './SplitReveal';

interface ServicesSectionProps {
  onOpenConsultation: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenConsultation }) => {
  const [activeService, setActiveService] = useState<Service>(SERVICES[0]);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<Service | null>(null);
  const [expandedMobileId, setExpandedMobileId] = useState<string | null>(SERVICES[0].id);

  return (
    <section id="services" className="py-20 sm:py-28 md:py-36 bg-ivory-warm text-obsidian border-t border-obsidian/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-obsidian/10 pb-6 sm:pb-8 mb-10 sm:mb-16 gap-4 sm:gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-2.5 sm:space-x-3 mb-3 sm:mb-4">
              <span className="w-6 sm:w-8 h-[1.5px] bg-terracotta" />
              <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.24em] sm:tracking-[0.3em] text-terracotta font-semibold">
                Studio Disciplines
              </span>
            </div>
            <SplitReveal
              as="h2"
              className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-obsidian tracking-tight"
            >
              Our Expertise
            </SplitReveal>
            <p className="font-sans text-xs sm:text-sm md:text-base text-grey-muted mt-3 sm:mt-4 font-light leading-relaxed">
              Complete interior solutions, carefully considered from the first idea to the final detail.
            </p>
          </div>

          <div className="hidden lg:block text-right">
            <span className="text-xs uppercase tracking-[0.25em] text-terracotta font-sans font-medium">
              Architectural & Turnkey
            </span>
          </div>
        </div>

        {/* Master Services Layout: Desktop Hover Dynamic Image Mask + Mobile Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left Column: 6 Services List */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-obsidian/15">
            {SERVICES.map((srv) => {
              const isSelected = activeService.id === srv.id;
              const isMobileExpanded = expandedMobileId === srv.id;

              return (
                <div
                  key={srv.id}
                  onMouseEnter={() => setActiveService(srv)}
                  onClick={() => {
                    if (window.innerWidth < 1024) {
                      setExpandedMobileId(isMobileExpanded ? null : srv.id);
                    } else {
                      setSelectedServiceForModal(srv);
                    }
                  }}
                  className={`py-5 sm:py-7 md:py-8 cursor-pointer transition-all duration-300 group ${
                    isSelected ? 'opacity-100 lg:pl-3' : 'opacity-75 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline space-x-3 sm:space-x-4 md:space-x-6">
                      <span className="font-mono text-xs md:text-sm tracking-widest text-terracotta font-semibold">
                        {srv.number}
                      </span>
                      <div>
                        <h3 className={`font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl transition-colors font-normal ${
                          isSelected ? 'text-obsidian font-medium' : 'text-obsidian/85 group-hover:text-terracotta'
                        }`}>
                          {srv.title}
                        </h3>
                        <span className="block text-[10px] sm:text-[11px] uppercase tracking-[0.16em] sm:tracking-[0.2em] text-grey-muted mt-1 font-sans">
                          {srv.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-2 border border-obsidian/20 group-hover:border-terracotta group-hover:bg-terracotta group-hover:text-white transition-all shrink-0 ml-2">
                      <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-obsidian/75 font-light mt-2.5 sm:mt-3 pl-6 sm:pl-10 md:pl-12 max-w-xl">
                    {srv.shortDesc}
                  </p>

                  {/* Inline Mobile Image & Action Reveal */}
                  {isMobileExpanded && (
                    <div className="lg:hidden mt-5 pl-4 sm:pl-10 space-y-3.5 animate-[fadeIn_0.4s_ease-out]">
                      <div className="relative aspect-[16/10] overflow-hidden shadow-md">
                        <img
                          src={srv.image}
                          alt={srv.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-xs text-obsidian/80 font-light leading-relaxed">
                        {srv.fullDesc}
                      </p>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedServiceForModal(srv);
                        }}
                        className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-widest text-terracotta font-medium hover:text-coral min-h-[44px] py-1"
                      >
                        <span>View Scope & Deliverables</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Desktop Sticky Architectural Photograph Preview with Mask Transition */}
          <div className="lg:col-span-5 hidden lg:block sticky top-28">
            <div className="relative aspect-[3/4] overflow-hidden bg-ivory-sand shadow-2xl border border-terracotta/25">
              {SERVICES.map((srv) => (
                <div
                  key={srv.id}
                  className={`absolute inset-0 transition-all duration-700 ease-out ${
                    activeService.id === srv.id
                      ? 'opacity-100 scale-100 z-10'
                      : 'opacity-0 scale-105 z-0 pointer-events-none'
                  }`}
                >
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/30 to-transparent" />
                </div>
              ))}

              {/* Floating Service Overlay Details */}
              <div className="absolute bottom-6 left-6 right-6 z-20 text-ivory-warm space-y-2">
                <span className="text-[10px] uppercase tracking-[0.25em] text-coral font-mono block font-bold">
                  Service {activeService.number} • Scope
                </span>
                <h4 className="font-serif text-2xl font-light text-ivory-warm">
                  {activeService.title}
                </h4>
                <p className="font-sans text-xs text-ivory-warm/85 font-light leading-relaxed line-clamp-3">
                  {activeService.shortDesc}
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setSelectedServiceForModal(activeService)}
                    className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-coral hover:text-white transition-colors"
                  >
                    <span>View Scope & Deliverables</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedServiceForModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 overflow-y-auto bg-obsidian/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        >
          <div className="relative w-full max-w-2xl bg-ivory-warm text-obsidian shadow-2xl border border-terracotta/30 p-8 sm:p-10 animate-[fadeIn_0.3s_ease-out]">
            <button
              onClick={() => setSelectedServiceForModal(null)}
              aria-label="Close Service Modal"
              className="absolute top-6 right-6 p-2 text-obsidian/60 hover:text-terracotta transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs uppercase tracking-[0.25em] text-terracotta font-mono font-semibold block mb-2">
              Service {selectedServiceForModal.number} • {selectedServiceForModal.category}
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-obsidian mb-4">
              {selectedServiceForModal.title}
            </h3>

            <p className="font-sans text-sm sm:text-base text-obsidian/80 font-light leading-relaxed mb-6">
              {selectedServiceForModal.fullDesc}
            </p>

            <div className="space-y-4 mb-8">
              <h4 className="text-xs uppercase tracking-[0.2em] text-obsidian font-sans font-semibold">
                Typical Scope & Deliverables
              </h4>
              <ul className="space-y-2">
                {selectedServiceForModal.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-obsidian/85">
                    <CheckCircle2 className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center space-x-2 text-xs uppercase tracking-widest text-grey-muted mb-8">
              <Clock className="w-4 h-4 text-terracotta" />
              <span>Typical Timeline: {selectedServiceForModal.duration}</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 border-t border-obsidian/10 pt-6">
              <button
                onClick={() => {
                  setSelectedServiceForModal(null);
                  onOpenConsultation();
                }}
                className="w-full sm:w-auto px-8 py-3.5 bg-terracotta text-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-coral transition-colors shadow-md"
              >
                Inquire For This Service
              </button>
              <button
                onClick={() => setSelectedServiceForModal(null)}
                className="w-full sm:w-auto px-6 py-3.5 border border-obsidian/20 text-xs uppercase tracking-[0.2em] text-obsidian hover:bg-obsidian/5 transition-colors"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
