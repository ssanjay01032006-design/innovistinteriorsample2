import React from 'react';
import { ArrowUp, Mail, Phone } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0B0B] text-[#F5F1EB] pt-28 pb-12 border-t border-white/10 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Large Architectural Statement */}
        <div className="border-b border-white/10 pb-16 mb-16">
          <span className="text-[11px] font-sans uppercase tracking-[0.3em] text-coral font-semibold block mb-4">
            The Studio Creed
          </span>
          <p className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#F5F1EB] tracking-tight leading-[1.1]">
            "Thoughtfully designed. <br />
            <span className="italic text-terracotta font-light">Beautifully lived."</span>
          </p>
        </div>

        {/* 4-Column Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Col 1: Studio Wordmark & Summary */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex flex-col">
              <span className="font-serif text-3xl tracking-[0.2em] font-medium uppercase text-[#F5F1EB]">
                INNOVIST
              </span>
              <span className="text-[9px] uppercase tracking-[0.35em] text-coral -mt-0.5 font-semibold">
                Interior Architecture Studio
              </span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-[#F5F1EB]/70 font-light leading-relaxed max-w-sm">
              An international-standard interior architecture practice sculpting private residences, penthouses, and bespoke hospitality spaces through material authenticity and timeless proportions.
            </p>
          </div>

          {/* Col 2: Studio Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-coral font-sans font-semibold block mb-2">
              Navigation
            </span>
            <ul className="space-y-2.5 text-xs font-sans tracking-wider text-[#F5F1EB]/80">
              <li><a href="#about" className="hover:text-coral transition-colors">About Studio</a></li>
              <li><a href="#projects" className="hover:text-coral transition-colors">Selected Works</a></li>
              <li><a href="#philosophy" className="hover:text-coral transition-colors">Design Philosophy</a></li>
              <li><a href="#materials" className="hover:text-coral transition-colors">Craftsmanship</a></li>
              <li><a href="#process" className="hover:text-coral transition-colors">Our Process</a></li>
              <li><a href="#faq" className="hover:text-coral transition-colors">Client FAQs</a></li>
            </ul>
          </div>

          {/* Col 3: Disciplines */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-coral font-sans font-semibold block mb-2">
              Disciplines
            </span>
            <ul className="space-y-2.5 text-xs font-sans tracking-wider text-[#F5F1EB]/80">
              <li>Residential Architecture</li>
              <li>Modular Kitchen Joinery</li>
              <li>Master Bedroom Suites</li>
              <li>Bespoke Furniture Fabrication</li>
              <li>Turnkey Civil Supervision</li>
              <li>Art & Lighting Curation</li>
            </ul>
          </div>

          {/* Col 4: Ateliers & Direct Contact */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-coral font-sans font-semibold block mb-2">
              Ateliers
            </span>
            <div className="space-y-2 text-xs font-sans text-[#F5F1EB]/75">
              <p>Bengaluru: 42 Lavelle Road, Central District</p>
              <p>Mumbai: BKC Horizon Wing, Level 6</p>
              <div className="pt-2 space-y-1.5">
                <a href="tel:+919876543210" className="flex items-center space-x-2 hover:text-coral transition-colors">
                  <Phone className="w-3.5 h-3.5 text-terracotta" />
                  <span>+91 98765 43210</span>
                </a>
                <a href="mailto:concierge@innovistinterior.com" className="flex items-center space-x-2 hover:text-coral transition-colors">
                  <Mail className="w-3.5 h-3.5 text-terracotta" />
                  <span>concierge@innovistinterior.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Massive Editorial INNOVIST Watermark */}
        <div className="py-10 text-center border-b border-white/10 overflow-hidden">
          <span className="font-serif text-6xl sm:text-8xl md:text-9xl tracking-[0.25em] uppercase text-white/[0.04] font-bold select-none block leading-none">
            INNOVIST
          </span>
        </div>

        {/* Bottom Bar: Copyright, Socials, Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F5F1EB]/60 font-sans gap-4">
          <div className="flex items-center space-x-4">
            <span>© {new Date().getFullYear()} INNOVIST INTERIOR DESIGN. All Rights Reserved.</span>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-[#F5F1EB]/70 hover:text-coral transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-[#F5F1EB]/70 hover:text-coral transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            <MagneticButton
              onClick={scrollToTop}
              className="flex items-center space-x-1.5 text-[#F5F1EB] hover:text-coral transition-colors uppercase tracking-widest text-[11px]"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </MagneticButton>
          </div>
        </div>
      </div>
    </footer>
  );
};
