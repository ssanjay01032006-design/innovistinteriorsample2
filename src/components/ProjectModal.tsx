import React, { useState, useEffect } from 'react';
import { X, ArrowRight, ArrowLeft, ArrowUpRight, Sparkles, MapPin, Calendar, Maximize2 } from 'lucide-react';
import type { Project } from '../data/content';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenConsultation: () => void;
  onSelectProject: (p: Project) => void;
  allProjects: Project[];
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onOpenConsultation,
  onSelectProject,
  allProjects
}) => {
  const [activeTab, setActiveTab] = useState<'gallery' | 'comparison' | 'concept'>('gallery');
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    if (!project) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  const handleSliderMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#0B0B0B]/95 backdrop-blur-xl text-[#F5F1EB] flex flex-col justify-between animate-[fadeIn_0.3s_ease-out]"
    >
      {/* Sticky Header with Close & Breadcrumbs */}
      <header className="sticky top-0 z-30 bg-[#0B0B0B]/90 backdrop-blur-md border-b border-white/10 px-4 sm:px-6 md:px-12 py-3.5 sm:py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2.5 sm:space-x-3 text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#F5F1EB]/70">
          <span className="text-terracotta font-semibold">Selected Work</span>
          <span>/</span>
          <span className="text-[#F5F1EB] truncate max-w-[150px] sm:max-w-none">{project.title}</span>
        </div>

        <button
          onClick={onClose}
          aria-label="Close Project Modal"
          className="p-2 border border-white/20 text-[#F5F1EB] hover:bg-terracotta hover:text-white hover:border-terracotta transition-colors flex items-center space-x-1.5 sm:space-x-2 text-xs uppercase tracking-widest min-h-[44px]"
        >
          <span>Close</span>
          <X className="w-4 h-4" />
        </button>
      </header>

      {/* Main Modal Body */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-6 sm:py-10 w-full space-y-8 sm:space-y-12">
        {/* Project Title & Metadata Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-6 sm:pb-8 gap-5 sm:gap-6">
          <div>
            <span className="text-[11px] sm:text-xs font-sans uppercase tracking-[0.24em] sm:tracking-[0.28em] text-coral font-semibold block mb-1.5 sm:mb-2">
              {project.category}
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#F5F1EB]">
              {project.title}
            </h2>
            <p className="font-sans text-xs sm:text-sm md:text-base text-[#F5F1EB]/70 font-light mt-2 max-w-2xl">
              {project.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-[11px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.2em] text-[#F5F1EB]/80 font-sans">
            <div className="flex items-center space-x-1.5 sm:space-x-2">
              <MapPin className="w-3.5 h-3.5 text-coral" />
              <span>{project.location}</span>
            </div>
            <div className="flex items-center space-x-1.5 sm:space-x-2">
              <Calendar className="w-3.5 h-3.5 text-coral" />
              <span>{project.year}</span>
            </div>
            <div className="flex items-center space-x-1.5 sm:space-x-2">
              <Maximize2 className="w-3.5 h-3.5 text-coral" />
              <span>{project.area}</span>
            </div>
          </div>
        </div>

        {/* Presentation Mode Selector */}
        <div className="flex items-center space-x-4 sm:space-x-6 border-b border-white/10 pb-3 sm:pb-4 text-xs uppercase tracking-[0.16em] sm:tracking-[0.2em] overflow-x-auto no-scrollbar touch-pan-x whitespace-nowrap">
          <button
            onClick={() => setActiveTab('gallery')}
            className={`pb-2 transition-colors relative shrink-0 min-h-[44px] flex items-center ${
              activeTab === 'gallery' ? 'text-coral font-semibold' : 'text-[#F5F1EB]/60 hover:text-[#F5F1EB]'
            }`}
          >
            <span>Interior Gallery ({project.gallery.length})</span>
            {activeTab === 'gallery' && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-terracotta" />}
          </button>

          {project.beforeImage && (
            <button
              onClick={() => setActiveTab('comparison')}
              className={`pb-2 transition-colors relative flex items-center space-x-1.5 shrink-0 min-h-[44px] ${
                activeTab === 'comparison' ? 'text-coral font-semibold' : 'text-[#F5F1EB]/60 hover:text-[#F5F1EB]'
              }`}
            >
              <Sparkles className="w-3 h-3 text-coral" />
              <span>Before & After</span>
              {activeTab === 'comparison' && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-terracotta" />}
            </button>
          )}

          <button
            onClick={() => setActiveTab('concept')}
            className={`pb-2 transition-colors relative shrink-0 min-h-[44px] flex items-center ${
              activeTab === 'concept' ? 'text-coral font-semibold' : 'text-[#F5F1EB]/60 hover:text-[#F5F1EB]'
            }`}
          >
            <span>Architectural Concept</span>
            {activeTab === 'concept' && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-terracotta" />}
          </button>
        </div>

        {/* Tab 1: High-Res Visual Gallery */}
        {activeTab === 'gallery' && (
          <div className="space-y-6">
            {/* Main Featured Photo */}
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-black shadow-2xl">
              <img
                src={project.gallery[activeImageIndex]}
                alt={`${project.title} Interior`}
                className="w-full h-full object-cover transition-opacity duration-700"
              />
              <div className="absolute bottom-4 right-4 bg-black/80 px-3 py-1 text-[11px] font-sans tracking-widest uppercase text-[#F5F1EB]/90 backdrop-blur-sm border border-terracotta/30">
                Shot 0{activeImageIndex + 1} of 0{project.gallery.length}
              </div>
            </div>

            {/* Gallery Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              {project.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative aspect-[16/10] overflow-hidden border-2 transition-all ${
                    activeImageIndex === idx ? 'border-terracotta scale-[1.02]' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Interactive Before & After Slider */}
        {activeTab === 'comparison' && project.beforeImage && (
          <div className="space-y-4">
            <div
              className="relative w-full aspect-[16/9] overflow-hidden select-none cursor-ew-resize border border-white/20 shadow-2xl touch-none"
              onMouseMove={handleSliderMove}
              onTouchMove={handleSliderMove}
              onTouchStart={handleSliderMove}
            >
              {/* After Image (Full background) */}
              <img
                src={project.afterImage || project.coverImage}
                alt="After Transformation"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />
              <span className="absolute top-4 right-4 bg-black/80 text-[#F5F1EB] text-xs font-sans uppercase tracking-[0.2em] px-3 py-1 z-10 backdrop-blur-sm border border-terracotta/30">
                After Transformation
              </span>

              {/* Before Image (Clipped overlay) */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img
                  src={project.beforeImage}
                  alt="Raw Site Condition"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 bg-black/80 text-[#F5F1EB] text-xs font-sans uppercase tracking-[0.2em] px-3 py-1 z-10 backdrop-blur-sm border border-terracotta/30">
                  Raw Site Condition
                </span>
              </div>

              {/* Vertical Drag Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-terracotta cursor-ew-resize z-20 shadow-[0_0_15px_rgba(244,91,61,0.8)]"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0B0B0B] border-2 border-terracotta flex items-center justify-center text-[#F5F1EB] shadow-lg">
                  <span className="text-[10px] tracking-tighter text-coral">◀▶</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Detailed Design Narrative & Concept */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-6">
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-serif text-2xl md:text-3xl font-light text-[#F5F1EB]">
              The Spatial Concept
            </h3>
            <p className="font-sans text-sm md:text-base text-[#F5F1EB]/85 font-light leading-relaxed">
              {project.description}
            </p>
            <blockquote className="border-l-2 border-terracotta pl-4 italic font-serif text-lg md:text-xl text-coral font-light my-6">
              "{project.concept}"
            </blockquote>

            <div>
              <h4 className="text-xs uppercase tracking-[0.22em] text-[#F5F1EB]/70 font-sans mb-3">
                Key Architectural Highlights
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-[#F5F1EB]/85 tracking-wide">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-terracotta rounded-full" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 md:p-8 space-y-6">
            <div>
              <h4 className="text-xs uppercase tracking-[0.22em] text-coral font-sans mb-4 font-semibold">
                Curated Material Palette
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.materials.map((mat, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-sans tracking-wider bg-white/10 px-3 py-1.5 border border-white/10 text-[#F5F1EB]/90"
                  >
                    {mat}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h4 className="font-serif text-xl font-light text-[#F5F1EB] mb-2">
                Envision a Similar Sanctuary?
              </h4>
              <p className="font-sans text-xs text-[#F5F1EB]/70 font-light leading-relaxed mb-6">
                Our principal designers are available to discuss tailored architectural solutions for your upcoming residence.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onOpenConsultation();
                }}
                className="w-full py-3.5 bg-terracotta text-white font-sans text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center space-x-2 hover:bg-coral transition-colors shadow-lg"
              >
                <span>Consult On This Project Scope</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Next / Previous Project Navigation */}
        <div className="border-t border-white/10 pt-8 flex items-center justify-between">
          <button
            onClick={() => onSelectProject(prevProject)}
            className="group flex items-center space-x-3 text-left"
          >
            <ArrowLeft className="w-4 h-4 text-terracotta transform group-hover:-translate-x-1 transition-transform" />
            <div>
              <span className="block text-[10px] uppercase tracking-widest text-[#F5F1EB]/50">Previous Project</span>
              <span className="font-serif text-base md:text-lg text-[#F5F1EB] group-hover:text-coral transition-colors">
                {prevProject.title}
              </span>
            </div>
          </button>

          <button
            onClick={() => onSelectProject(nextProject)}
            className="group flex items-center space-x-3 text-right"
          >
            <div>
              <span className="block text-[10px] uppercase tracking-widest text-[#F5F1EB]/50">Next Project</span>
              <span className="font-serif text-base md:text-lg text-[#F5F1EB] group-hover:text-coral transition-colors">
                {nextProject.title}
              </span>
            </div>
            <ArrowRight className="w-4 h-4 text-terracotta transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </main>
    </div>
  );
};
