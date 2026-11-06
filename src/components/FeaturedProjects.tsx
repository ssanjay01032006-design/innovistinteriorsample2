import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, MapPin, Maximize2 } from 'lucide-react';
import { PROJECTS, type Project } from '../data/content';
import { SplitReveal } from './SplitReveal';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FeaturedProjectsProps {
  onSelectProject: (p: Project) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const gridRef = useRef<HTMLDivElement | null>(null);

  const categories = [
    'All',
    'Residential Interiors',
    'Luxury Living Spaces',
    'Complete Home Interiors',
    'Modern Kitchens',
    'Commercial Interiors',
  ];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  // ScrollTrigger Clip-path reveal for cards
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cards = grid.querySelectorAll('.project-card');
    if (!cards.length) return;

    gsap.set(cards, { opacity: 0, y: 40 });

    const anim = gsap.to(cards, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: grid,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    return () => {
      anim.kill();
    };
  }, [activeCategory]);

  return (
    <section id="projects" className="py-28 md:py-36 bg-ivory-warm text-obsidian relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header & Editorial Introduction */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-obsidian/10 pb-8 mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-8 h-[1.5px] bg-terracotta" />
              <span className="text-[11px] font-sans uppercase tracking-[0.3em] text-terracotta font-semibold">
                Portfolio Showcase
              </span>
            </div>
            <SplitReveal
              as="h2"
              className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-obsidian tracking-tight"
            >
              Selected Works
            </SplitReveal>
            <p className="font-sans text-sm sm:text-base text-grey-muted mt-4 font-light leading-relaxed">
              A collection of spaces thoughtfully shaped around people, materials and everyday experiences.
            </p>
          </div>

          <div className="text-right hidden md:block">
            <span className="text-xs uppercase tracking-[0.25em] text-terracotta font-mono">
              06 Commissions Curated
            </span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar pb-4 mb-14 text-xs uppercase tracking-[0.18em]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 whitespace-nowrap transition-all duration-300 border ${
                activeCategory === cat
                  ? 'bg-obsidian border-terracotta text-ivory-warm shadow-md'
                  : 'bg-ivory-sand/40 border-transparent text-obsidian/70 hover:border-terracotta/40 hover:text-terracotta'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-start"
        >
          {filteredProjects.map((project, index) => {
            const isWide = index % 3 === 0;
            const colSpan = isWide ? 'md:col-span-8' : 'md:col-span-4';
            const aspect = isWide ? 'aspect-[16/10]' : 'aspect-[4/5]';

            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`project-card ${colSpan} group cursor-pointer flex flex-col space-y-4`}
              >
                {/* Image Container with Smooth Scale & Mask Overlay */}
                <div className={`relative ${aspect} overflow-hidden bg-ivory-stone shadow-lg`}>
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-1000 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle Gradient Shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-obsidian/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Top Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-[10px] uppercase tracking-[0.22em] font-sans bg-obsidian/90 text-ivory-warm px-3 py-1 backdrop-blur-sm border border-terracotta/40">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Floating Action Indicator */}
                  <div className="absolute bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                    <div className="w-11 h-11 bg-terracotta text-ivory-warm flex items-center justify-center shadow-2xl hover:bg-coral transition-colors">
                      <ArrowUpRight className="w-5 h-5 text-ivory-warm" />
                    </div>
                  </div>
                </div>

                {/* Editorial Metadata Block */}
                <div className="flex flex-col space-y-2 pt-1">
                  <div className="flex items-center justify-between text-xs text-grey-muted font-sans tracking-widest uppercase">
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5 text-terracotta" />
                      <span>{project.location}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Maximize2 className="w-3.5 h-3.5 text-terracotta" />
                      <span>{project.area}</span>
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-obsidian group-hover:text-terracotta transition-colors duration-300 font-normal">
                    {project.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-obsidian/75 font-light line-clamp-2">
                    {project.subtitle}
                  </p>

                  <div className="pt-1 flex items-center space-x-1.5 text-xs font-sans uppercase tracking-[0.2em] text-terracotta font-medium group-hover:text-coral group-hover:underline">
                    <span>View Architectural Dossier</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
