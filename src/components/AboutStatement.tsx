import React, { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SplitReveal } from './SplitReveal';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AboutStatementProps {
  onOpenConsultation: () => void;
}

export const AboutStatement: React.FC<AboutStatementProps> = ({ onOpenConsultation }) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const mainImageRef = useRef<HTMLDivElement | null>(null);
  const insetImageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const mainImg = mainImageRef.current;
    const insetImg = insetImageRef.current;
    if (!section || !mainImg) return;

    // 1. Image Clip-Path Unveil Animation
    const clipAnim = gsap.fromTo(
      mainImg,
      { clipPath: 'inset(18% 0% 18% 0%)', scale: 1.1 },
      {
        clipPath: 'inset(0% 0% 0% 0%)',
        scale: 1,
        duration: 1.4,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      }
    );

    // 2. Parallax scrub between main image and inset image
    const parallaxAnim = gsap.to(mainImg, {
      y: -40,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    let insetAnim: gsap.core.Tween | null = null;
    if (insetImg) {
      insetAnim = gsap.to(insetImg, {
        y: -90,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }

    return () => {
      clipAnim.kill();
      parallaxAnim.kill();
      if (insetAnim) insetAnim.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-20 sm:py-28 md:py-40 bg-transparent text-obsidian select-none z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        {/* Top Editorial Label */}
        <div className="flex items-center space-x-2.5 sm:space-x-3 mb-8 sm:mb-10">
          <span className="w-6 sm:w-8 h-[1.5px] bg-terracotta" />
          <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.24em] sm:tracking-[0.3em] text-terracotta font-semibold">
            About INNOVIST Studio
          </span>
        </div>

        {/* Asymmetrical Grid: Left Editorial Narrative, Right Layered Architectural Visuals */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6 sm:space-y-8">
            {/* Split Reveal Heading in Thick Black */}
            <SplitReveal
              as="h2"
              className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] sm:leading-[1.08] font-normal tracking-tight text-black"
            >
              {"Designing Spaces.\nCreating Experiences."}
            </SplitReveal>

            <div className="space-y-4 sm:space-y-6 font-sans text-sm sm:text-base md:text-lg leading-relaxed">
              <p className="border-l-2 border-terracotta pl-4 sm:pl-5 text-black font-semibold text-sm sm:text-base md:text-lg leading-relaxed">
                At INNOVIST, we believe great interiors go beyond visual appeal. Every space should reflect individuality, create comfort and bring functionality into everyday living.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-black/90 font-medium leading-relaxed">
                Founded with a conviction that true luxury lives in restraint, materiality, and proportion, our studio approaches every project as an unrepeatable architectural narrative. We sculpt volumes, frame natural light, and curate tactile finishes that evolve gracefully alongside the people who inhabit them.
              </p>
            </div>

            {/* Architectural Studio Pillars in Thick Black */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-6 pt-5 sm:pt-6 border-t border-black/15">
              <div>
                <span className="block font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-black">01</span>
                <span className="block text-[10px] sm:text-xs uppercase tracking-[0.14em] sm:tracking-[0.2em] text-black font-bold mt-1 font-sans">
                  Spatial Purity
                </span>
              </div>
              <div>
                <span className="block font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-black">02</span>
                <span className="block text-[10px] sm:text-xs uppercase tracking-[0.14em] sm:tracking-[0.2em] text-black font-bold mt-1 font-sans">
                  Material Truth
                </span>
              </div>
              <div>
                <span className="block font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-black">03</span>
                <span className="block text-[10px] sm:text-xs uppercase tracking-[0.14em] sm:tracking-[0.2em] text-black font-bold mt-1 font-sans">
                  Turnkey Care
                </span>
              </div>
            </div>

            <div className="pt-2 sm:pt-3">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center space-x-2 text-[11px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.22em] font-bold text-black hover:text-terracotta transition-colors group min-h-[44px]"
              >
                <span>Read Studio Manifesto & Inquire</span>
                <ArrowUpRight className="w-4 h-4 text-terracotta transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Layered Asymmetric Photography with Parallax Scrub */}
          <div className="lg:col-span-6 relative">
            <div className="relative">
              {/* Primary Architectural Image with Clip-Path Unveil */}
              <div
                ref={mainImageRef}
                className="relative overflow-hidden aspect-[4/5] shadow-2xl bg-ivory-sand will-change-transform"
              >
                <img
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop"
                  alt="Architectural Interior by INNOVIST"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.25em] text-ivory-warm font-sans bg-obsidian/85 px-3 py-1.5 backdrop-blur-sm border border-terracotta/40">
                  The Aethel Atrium • Travertine & Oak
                </div>
              </div>

              {/* Smaller Supporting Inset Image with Differential Parallax Speed */}
              <div
                ref={insetImageRef}
                className="absolute -bottom-12 -left-6 sm:-left-12 w-1/2 aspect-square shadow-2xl border-4 border-ivory-warm overflow-hidden hidden sm:block will-change-transform"
              >
                <img
                  src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=800&auto=format&fit=crop"
                  alt="Material Detailing & Joinery"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute bottom-2 left-2 text-[9px] uppercase tracking-[0.2em] text-ivory-warm font-sans bg-obsidian/90 px-2.5 py-1 border-l-2 border-terracotta">
                  Artisan Fluting
                </div>
              </div>

              {/* Editorial Caption Tag */}
              <div className="mt-6 text-right">
                <span className="text-[11px] font-sans tracking-widest text-muted-text uppercase">
                  Studio Portfolio • 2024–2025
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
