import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-28 md:py-36 bg-[#F5F1EB] text-obsidian border-t border-obsidian/10 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-3 mb-4">
            <span className="w-6 h-[1.5px] bg-terracotta" />
            <span className="text-[11px] font-sans uppercase tracking-[0.3em] text-terracotta font-semibold">
              Client Feedback
            </span>
            <span className="w-6 h-[1.5px] bg-terracotta" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-obsidian tracking-tight">
            Words From Our Clients.
          </h2>
        </div>

        {/* Testimonial Presentation Card */}
        <div className="relative bg-white/90 p-8 sm:p-14 md:p-16 shadow-xl border border-obsidian/10">
          <Quote className="w-12 h-12 text-terracotta/30 mb-6" />

          {/* Testimonial Quote */}
          <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-obsidian font-light leading-relaxed mb-10 transition-opacity duration-500">
            "{current.quote}"
          </blockquote>

          {/* Author Details & Carousel Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-obsidian/10 pt-6 gap-6">
            <div className="flex items-center space-x-4">
              <img
                src={current.image}
                alt={current.author}
                className="w-12 h-12 rounded-full object-cover border border-terracotta"
              />
              <div>
                <span className="font-serif text-lg md:text-xl font-normal text-obsidian block">
                  {current.author}
                </span>
                <span className="text-xs uppercase tracking-widest text-obsidian/60 font-sans block">
                  {current.role} • {current.residence} ({current.location})
                </span>
              </div>
            </div>

            {/* Previous / Next Controls */}
            <div className="flex items-center space-x-3">
              <span className="text-xs font-mono tracking-widest text-obsidian/60 mr-2">
                0{currentIndex + 1} / 0{TESTIMONIALS.length}
              </span>
              <button
                onClick={handlePrev}
                aria-label="Previous Testimonial"
                className="p-2.5 border border-obsidian/20 hover:bg-terracotta hover:text-white hover:border-terracotta transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Testimonial"
                className="p-2.5 border border-obsidian/20 hover:bg-terracotta hover:text-white hover:border-terracotta transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

