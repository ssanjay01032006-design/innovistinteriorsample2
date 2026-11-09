import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Hero } from './Hero';
import { AboutStatement } from './AboutStatement';
import branchImg from '../assets/sculptural-branch-transparent.png';

gsap.registerPlugin(ScrollTrigger);

interface HeroAboutZoneProps {
  onOpenConsultation: () => void;
}

export const HeroAboutZone: React.FC<HeroAboutZoneProps> = ({ onOpenConsultation }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const branchParallaxRef = useRef<HTMLDivElement | null>(null);

  // Mouse tilt for desktop
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return;
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const deltaX = (clientX - centerX) / centerX;
    const deltaY = (clientY - centerY) / centerY;

    setMouseOffset({
      x: deltaX * 18,
      y: deltaY * 18,
    });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  // Cinematic Scroll-Driven Parallax on the Sculptural Branch
  useEffect(() => {
    const container = containerRef.current;
    const branch = branchParallaxRef.current;
    if (!container || !branch) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Mobile Touch Devices (< 768px):
      // More pronounced differential travel and responsive scrub for tactile feel
      mm.add('(max-width: 767px)', () => {
        gsap.fromTo(
          branch,
          {
            yPercent: 0,
            rotation: 0,
            scale: 1,
          },
          {
            yPercent: -22, // Distinct vertical drift on mobile
            rotation: -2.5,
            scale: 1.08,
            ease: 'none',
            scrollTrigger: {
              trigger: container,
              start: 'top top',
              end: 'bottom bottom',
              scrub: 0.6, // Rapid scrub for immediate touch response
              invalidateOnRefresh: true,
            },
          }
        );
      });

      // Desktop & Tablet (>= 768px):
      // Smooth cinematic weighted glide
      mm.add('(min-width: 768px)', () => {
        gsap.fromTo(
          branch,
          {
            yPercent: 0,
            rotation: 0,
            scale: 1,
          },
          {
            yPercent: -16,
            rotation: -2,
            scale: 1.06,
            ease: 'none',
            scrollTrigger: {
              trigger: container,
              start: 'top top',
              end: 'bottom bottom',
              scrub: 1.1,
              invalidateOnRefresh: true,
            },
          }
        );
      });
    }, containerRef);

    // Refresh ScrollTrigger once DOM layout settles
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="hero-about-zone"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full overflow-clip bg-[#F5F1EB]"
    >
      {/* 
        Sticky Viewport Stage:
        Remains pinned across Hero & About while driving both scroll parallax and mouse parallax
      */}
      <div
        aria-hidden="true"
        className="sticky top-0 left-0 w-full h-[100svh] min-h-screen pointer-events-none z-0 flex items-center justify-start overflow-hidden select-none"
      >
        {/* Layer 1: GSAP ScrollTrigger Differential Parallax */}
        <div
          ref={branchParallaxRef}
          className="w-full h-full flex items-center justify-start will-change-transform"
        >
          {/* Layer 2: Interactive Desktop Cursor Parallax */}
          <div
            style={{
              transform: `translate3d(${-mouseOffset.x * 0.6}px, ${-mouseOffset.y * 0.6}px, 0)`,
            }}
            className="w-[140vw] sm:w-[125vw] max-w-[1900px] min-w-[950px] sm:min-w-[1150px] -ml-[160px] sm:-ml-[140px] md:-ml-[12vw] lg:-ml-[9vw] transition-transform duration-700 ease-out will-change-transform"
          >
            <img
              src={branchImg}
              alt="Sculptural Branch"
              className="w-full h-auto object-contain opacity-90 filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.12)]"
            />
          </div>
        </div>
      </div>

      {/* Scrolling Content: Hero and About scroll smoothly over the parallax branch */}
      <div className="relative z-10 -mt-[100vh]">
        <Hero onOpenConsultation={onOpenConsultation} mouseOffset={mouseOffset} />
        <AboutStatement onOpenConsultation={onOpenConsultation} />
      </div>
    </div>
  );
};
