import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SplitRevealProps {
  children: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';
  delay?: number;
  triggerHook?: string;
  byWords?: boolean;
}

export const SplitReveal: React.FC<SplitRevealProps> = ({
  children,
  className = '',
  as = 'h2',
  delay = 0,
  triggerHook = 'top 85%',
  byWords = false,
}) => {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const targets = el.querySelectorAll('.split-inner');
    if (!targets.length) return;

    gsap.set(targets, { yPercent: 120, opacity: 0 });

    const anim = gsap.to(targets, {
      yPercent: 0,
      opacity: 1,
      duration: 1.1,
      stagger: byWords ? 0.04 : 0.12,
      ease: 'power3.out',
      clearProps: 'opacity',
      delay,
      scrollTrigger: {
        trigger: el,
        start: triggerHook,
        toggleActions: 'play none none none',
      },
    });

    return () => {
      anim.kill();
    };
  }, [delay, triggerHook, byWords]);

  const Component = as as any;

  if (byWords) {
    const words = children.split(' ');
    return (
      <Component ref={containerRef} className={`${className} inline-block`}>
        {words.map((word, idx) => (
          <span key={idx} className="inline-block overflow-hidden mr-[0.25em] align-top">
            <span className="split-inner inline-block will-change-transform">
              {word}
            </span>
          </span>
        ))}
      </Component>
    );
  }

  // Split by lines (break at \n or explicit lines)
  const lines = children.split('\n');

  return (
    <Component ref={containerRef} className={className}>
      {lines.map((line, idx) => (
        <span key={idx} className="block overflow-hidden">
          <span className="split-inner block will-change-transform">
            {line}
          </span>
        </span>
      ))}
    </Component>
  );
};

