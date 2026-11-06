import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Navbar } from './components/Navbar';
import { HeroAboutZone } from './components/HeroAboutZone';
import { FeaturedProjects } from './components/FeaturedProjects';
import { HorizontalPortfolio } from './components/HorizontalPortfolio';
import { ProjectModal } from './components/ProjectModal';
import { DesignPhilosophy } from './components/DesignPhilosophy';
import { ServicesSection } from './components/ServicesSection';
import { MaterialShowcase } from './components/MaterialShowcase';
import { CinematicStorytelling } from './components/CinematicStorytelling';
import { DesignProcess } from './components/DesignProcess';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { ConsultationSection } from './components/ConsultationSection';
import { Footer } from './components/Footer';
import { PROJECTS, type Project } from './data/content';

gsap.registerPlugin(ScrollTrigger);

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Synchronize Lenis Momentum Scroll with GSAP ScrollTrigger
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // Update ScrollTrigger on Lenis scroll
    lenis.on('scroll', ScrollTrigger.update);

    // Sync GSAP ticker with Lenis raf
    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
    };
  }, []);

  const handleOpenConsultation = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F1EB] text-obsidian font-sans relative selection:bg-terracotta selection:text-white">
      {/* Navigation Bar */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Page Layout Sequence */}
      <main>
        {/* 1. Cinematic Hero & About Zone with Fixed Sculptural Branch Background */}
        <HeroAboutZone onOpenConsultation={handleOpenConsultation} />

        {/* 2. Featured Projects Portfolio Showcase (Asymmetric Editorial Grid) */}
        <FeaturedProjects onSelectProject={(project) => setSelectedProject(project)} />

        {/* 4. Horizontal Portfolio Gallery (Pinned Vertical-to-Horizontal Scrub Showcase) */}
        <HorizontalPortfolio onSelectProject={(project) => setSelectedProject(project)} />

        {/* 5. Design Philosophy (Synchronized Interactive Principles) */}
        <DesignPhilosophy />

        {/* 6. Services Section (Desktop Mask Image Reveal & Mobile Accordion) */}
        <ServicesSection onOpenConsultation={handleOpenConsultation} />

        {/* 7. Cinematic Material & Craftsmanship Showcase (Macro Texture vs In-Room Living) */}
        <MaterialShowcase />

        {/* 8. Featured Project Storytelling: Sticky Case Study Evolution */}
        <CinematicStorytelling />

        {/* 9. Our Design Process (Progressive Animated Timeline) */}
        <DesignProcess />

        {/* 10. Testimonials (Client Feedback Carousel) */}
        <Testimonials />

        {/* 12. Frequently Asked Questions (Smooth Accordion) */}
        <FaqSection />

        {/* 13. Consultation / Contact CTA with Functional Form & WhatsApp */}
        <ConsultationSection />
      </main>

      {/* 14. Editorial Footer with Massive Watermark & Magnetic Actions */}
      <Footer />

      {/* Full-Screen Project Detail Experience Modal with Before & After Slider */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onOpenConsultation={() => {
            setSelectedProject(null);
            handleOpenConsultation();
          }}
          onSelectProject={(p) => setSelectedProject(p)}
          allProjects={PROJECTS}
        />
      )}
    </div>
  );
}

export default App;
