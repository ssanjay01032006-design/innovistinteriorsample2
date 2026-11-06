import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, MapPin, Maximize2 } from 'lucide-react';
import { PROJECTS, type Project } from '../data/content';

gsap.registerPlugin(ScrollTrigger);

interface HorizontalPortfolioProps {
  onSelectProject: (p: Project) => void;
}

export const HorizontalPortfolio: React.FC<HorizontalPortfolioProps> = ({ onSelectProject }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const progress = progressBarRef.current;
    if (!section || !track) return;

    // Only run on desktop/tablet where pinning makes sense
    const mm = gsap.matchMedia();

    mm.add('(min-width: 768px)', () => {
      const totalScroll = track.scrollWidth - window.innerWidth + 120;

      const tl = gsap.to(track, {
        x: -totalScroll,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1.2,
          start: 'top top',
          end: () => `+=${totalScroll}`,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progress) {
              progress.style.width = `${self.progress * 100}%`;
            }
          },
        },
      });

      return () => {
        tl.kill();
      };
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0B0B0B] text-[#F5F1EB] overflow-hidden min-h-screen flex flex-col justify-between py-12 md:py-16 select-none"
    >
      {/* Top Header & Section Title */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex items-end justify-between mb-8 z-10">
        <div>
          <div className="flex items-center space-x-3 mb-3">
            <span className="w-8 h-[1.5px] bg-terracotta" />
            <span className="text-[11px] font-sans uppercase tracking-[0.3em] text-coral font-semibold">
              Curated Panoramic Gallery
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F5F1EB] font-light">
            Architectural Explorations
          </h2>
        </div>

        <div className="hidden sm:flex items-center space-x-3 text-xs uppercase tracking-widest text-[#F5F1EB]/60 font-sans">
          <span>Curated Series</span>
        </div>
      </div>

      {/* Horizontal Scrolling Track */}
      <div className="w-full overflow-hidden flex-1 flex items-center">
        <div
          ref={trackRef}
          className="flex items-center space-x-8 md:space-x-12 px-6 md:px-12 will-change-transform"
        >
          {PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer shrink-0 relative flex flex-col justify-between bg-white/5 border border-white/10 p-4 md:p-6 transition-all duration-500 hover:border-terracotta hover:shadow-2xl"
              style={{
                width: idx % 2 === 0 ? 'min(78vw, 680px)' : 'min(65vw, 540px)',
              }}
            >
              {/* Image Frame with Mask Reveal */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-1000 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-40 group-hover:opacity-70 transition-opacity" />

                <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 text-[10px] uppercase tracking-widest text-[#F5F1EB] font-mono backdrop-blur-sm border border-terracotta/30">
                  0{idx + 1} • {project.category}
                </div>

                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                  <div className="w-10 h-10 bg-terracotta text-white flex items-center justify-center hover:bg-coral transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Project Meta Info */}
              <div className="mt-5 space-y-2">
                <div className="flex items-center justify-between text-xs font-sans tracking-widest text-[#F5F1EB]/60 uppercase">
                  <div className="flex items-center space-x-1.5">
                    <MapPin className="w-3.5 h-3.5 text-coral" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Maximize2 className="w-3.5 h-3.5 text-coral" />
                    <span>{project.area}</span>
                  </div>
                </div>

                <h3 className="font-serif text-2xl md:text-3xl text-[#F5F1EB] group-hover:text-coral transition-colors font-normal">
                  {project.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-[#F5F1EB]/75 font-light line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}

          {/* End of Gallery Call to Action Panel */}
          <div className="shrink-0 w-80 md:w-96 aspect-[16/10] border border-terracotta/40 p-8 flex flex-col justify-between bg-white/5">
            <div>
              <span className="text-xs uppercase tracking-widest text-coral font-mono block mb-2 font-semibold">
                Your Commission
              </span>
              <h3 className="font-serif text-2xl text-[#F5F1EB]">
                Begin Your Residence Transformation
              </h3>
            </div>
            <p className="font-sans text-xs text-[#F5F1EB]/70 font-light">
              Every space begins with a thoughtful lifestyle audit and personalized spatial planning.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-terracotta hover:text-coral transition-colors font-semibold"
            >
              <span>Schedule Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Progress Bar Indicator */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full pt-8 flex items-center justify-between text-xs text-[#F5F1EB]/60 font-mono">
        <span>01 / 0{PROJECTS.length}</span>
        <div className="w-48 sm:w-64 h-[2px] bg-white/20 overflow-hidden ml-4">
          <div
            ref={progressBarRef}
            className="h-full bg-terracotta transition-all duration-75"
            style={{ width: '10%' }}
          />
        </div>
      </div>
    </section>
  );
};

