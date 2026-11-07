import React, { useEffect, useRef } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  onOpenConsultation: () => void;
  mouseOffset?: { x: number; y: number };
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, mouseOffset = { x: 0, y: 0 } }) => {
  const heroRef = useRef<HTMLElement | null>(null);
  const leftColRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<HTMLDivElement | null>(null);
  const imageContainerRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const metaBadgeRef = useRef<HTMLDivElement | null>(null);

  // Signature Architectural Reveal Animation Sequence
  useEffect(() => {
    const hero = heroRef.current;
    const leftCol = leftColRef.current;
    const frame = frameRef.current;
    const imgContainer = imageContainerRef.current;
    const img = imageRef.current;
    const meta = metaBadgeRef.current;

    if (!hero || !leftCol || !frame || !imgContainer || !img) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Initial state
      gsap.set(frame, { opacity: 0, scale: 0.96 });
      gsap.set(imgContainer, { clipPath: 'inset(100% 0% 0% 0%)' });
      gsap.set(img, { scale: 1.15 });

      const headingLines = leftCol.querySelectorAll('.hero-heading-line');
      const eyebrow = leftCol.querySelector('.hero-eyebrow');
      const desc = leftCol.querySelector('.hero-desc');
      const ctas = leftCol.querySelectorAll('.hero-cta');
      const footerMeta = leftCol.querySelector('.hero-footer-meta');

      gsap.set([eyebrow, desc, footerMeta], { opacity: 0, y: 20 });
      gsap.set(headingLines, { yPercent: 110, opacity: 0 });
      gsap.set(ctas, { opacity: 0, y: 15 });
      if (meta) gsap.set(meta, { opacity: 0 });

      // Step 1: Terracotta Frame reveal
      tl.to(frame, { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }, 0.2);

      // Step 2: Primary Photograph clip-path expansion
      tl.to(
        imgContainer,
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1.4,
          ease: 'power3.inOut',
        },
        0.35
      );
      tl.to(img, { scale: 1, duration: 1.6, ease: 'power2.out' }, 0.35);

      // Step 3: Eyebrow & Headline line-by-line vertical reveal
      tl.to(eyebrow, { opacity: 1, y: 0, duration: 0.8 }, 0.5);
      tl.to(
        headingLines,
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.1,
          stagger: 0.16,
          ease: 'power3.out',
          clearProps: 'opacity',
        },
        0.6
      );

      // Step 4: Supporting text
      tl.to(desc, { opacity: 1, y: 0, duration: 0.9, clearProps: 'opacity' }, 0.85);

      // Step 5: CTAs reveal sequentially
      tl.to(ctas, { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 }, 1.0);

      // Step 6: Architectural Annotations and metadata
      if (meta) tl.to(meta, { opacity: 1, duration: 0.8 }, 1.15);
      tl.to(footerMeta, { opacity: 1, y: 0, duration: 0.8, clearProps: 'opacity' }, 1.2);

      // Scroll Transition
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
      });

      scrollTl.to(leftCol, { y: -50, ease: 'none' }, 0);
      scrollTl.to(img, { scale: 1.06, y: 30, ease: 'none' }, 0);
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      aria-label="INNOVIST Studio Hero"
      className="relative w-full min-h-[650px] sm:min-h-[750px] lg:min-h-screen bg-transparent text-obsidian flex items-center pt-28 sm:pt-32 pb-16 lg:py-28 select-none z-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full relative z-10">
        {/* Asymmetrical Editorial Composition Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* ======================================================== */}
          {/* LEFT COLUMN: Editorial Typography on Light Warm Ivory Canvas */}
          {/* ======================================================== */}
          <div
            ref={leftColRef}
            className="lg:col-span-7 flex flex-col justify-between space-y-6 sm:space-y-8 lg:pr-4"
          >
            {/* Studio Identification Label */}
            <div className="hero-eyebrow flex items-center space-x-2.5 sm:space-x-3">
              <span className="w-6 sm:w-8 h-[2px] bg-terracotta" />
              <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.24em] sm:tracking-[0.28em] text-terracotta font-bold">
                INNOVIST / INTERIOR ARCHITECTURE & DESIGN
              </span>
            </div>

            {/* Oversized Headline with Line-by-Line Masking & Thick Black Typography */}
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-normal leading-[1.08] sm:leading-[1.05] tracking-tight">
              <span className="block overflow-hidden">
                <span className="hero-heading-line block text-black font-medium">
                  Spaces that
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="hero-heading-line block italic font-light text-terracotta">
                  feel like you.
                </span>
              </span>
            </h1>

            {/* Human-Centred Supporting Description in Thick Visible Black */}
            <div className="hero-desc max-w-xl">
              <p className="font-sans text-sm sm:text-base md:text-lg text-black font-medium leading-relaxed border-l-2 border-terracotta pl-4 sm:pl-5">
                We shape thoughtful interiors around your lifestyle, your stories and the moments that make a space feel like home.
              </p>
            </div>

            {/* Two Refined Call-To-Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-5 pt-2">
              {/* Primary CTA with Terracotta / Coral Accent */}
              <a href="#projects" className="hero-cta">
                <MagneticButton className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-terracotta text-white text-xs uppercase tracking-[0.2em] font-semibold hover:bg-coral hover:shadow-[0_10px_30px_rgba(244,91,61,0.35)] transition-all duration-300 group shadow-md border border-transparent min-h-[48px]">
                  <span>Explore Our Work</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </MagneticButton>
              </a>

              {/* Secondary CTA with Thick Black Border & Text */}
              <div className="hero-cta">
                <MagneticButton
                  onClick={onOpenConsultation}
                  className="w-full sm:w-auto px-5 sm:px-6 py-3.5 sm:py-4 bg-white/80 border-2 border-black text-black text-xs uppercase tracking-[0.2em] font-bold hover:border-terracotta hover:text-terracotta hover:bg-white transition-colors duration-300 group backdrop-blur-sm shadow-sm min-h-[48px]"
                >
                  <span className="relative">
                    Let's Talk About Your Space
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-terracotta group-hover:w-full transition-all duration-300" />
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-terracotta transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </MagneticButton>
              </div>
            </div>

            {/* Small Editorial Meta & Studio Coordinates in Thick Black */}
            <div className="hero-footer-meta pt-6 sm:pt-8 border-t border-black/15 flex flex-wrap items-center justify-between text-[10px] sm:text-[11px] font-sans tracking-[0.16em] sm:tracking-[0.2em] uppercase gap-3 sm:gap-4">
              <span className="text-black font-bold">
                THOUGHTFUL DESIGN. MEANINGFUL LIVING.
              </span>
              <span className="text-terracotta font-mono font-bold">
                STUDIO BENGALURU & MUMBAI
              </span>
            </div>
          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: Asymmetric Architectural Frame & Photograph */}
          {/* ======================================================== */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div
              className="relative w-full max-w-[460px] mx-auto lg:max-w-none transition-transform duration-500 ease-out will-change-transform"
              style={{
                transform: `translate3d(${-mouseOffset.x}px, ${-mouseOffset.y}px, 0)`,
              }}
            >
              {/* Signature Architectural Terracotta Frame with Tight Black Shadow */}
              <div
                ref={frameRef}
                className="relative z-10 border-2 border-terracotta p-2.5 sm:p-4 bg-white/95 backdrop-blur-md shadow-[0_10px_25px_rgba(0,0,0,0.12)]"
              >

                {/* Layer 3: The Single Curated Architectural Photograph Container */}
                <div
                  ref={imageContainerRef}
                  className="relative aspect-[4/5] overflow-hidden bg-ivory-sand shadow-inner will-change-transform"
                >
                  <img
                    ref={imageRef}
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=85&w=1600&auto=format&fit=crop"
                    alt="INNOVIST Architectural Interior — Bespoke Residential Atelier"
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out hover:scale-105"
                    loading="eager"
                  />

                  {/* Multi-tier warm shadows */}
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent pointer-events-none" />

                  {/* Image Editorial Annotation Badge */}
                  <div
                    ref={metaBadgeRef}
                    className="absolute bottom-4 left-4 right-4 z-20 flex items-end justify-between text-ivory-warm text-xs font-sans"
                  >
                    <div className="bg-obsidian/90 px-3.5 py-2 backdrop-blur-md border border-white/10 shadow-lg">
                      <span className="text-[9px] uppercase tracking-[0.25em] text-coral font-mono block font-bold">
                        FIG. 01 — PRIVATE ATELIER
                      </span>
                      <span className="font-serif text-sm text-ivory-warm">
                        Smoked Oak & Travertine Volume
                      </span>
                    </div>

                    <div className="hidden sm:block bg-obsidian/90 px-3 py-2 backdrop-blur-md border border-white/10 font-mono text-[10px] text-ivory-warm/90 tracking-wider">
                      REF. 2025 // 01
                    </div>
                  </div>
                </div>

                {/* Subtle Architectural Measurement Tick below the frame */}
                <div className="pt-2.5 px-1 flex items-center justify-between text-[9px] font-mono tracking-widest text-obsidian/60 uppercase font-semibold">
                  <span>SCALE 1:25</span>
                  <div className="w-16 h-[1.5px] bg-terracotta" />
                  <span>ELEVATION 01</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
