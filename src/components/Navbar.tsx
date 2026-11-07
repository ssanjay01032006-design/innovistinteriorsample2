import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['hero', 'about', 'projects', 'services', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setMobileMenuOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#F5F1EB]/90 backdrop-blur-md py-4 border-b border-obsidian/10 shadow-sm text-obsidian'
            : 'bg-[#F5F1EB]/70 backdrop-blur-sm py-6 text-obsidian border-b border-obsidian/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Wordmark */}
          <a
            href="#hero"
            className="group flex flex-col tracking-wider focus:outline-none"
          >
            <span className="font-serif text-2xl md:text-3xl tracking-[0.2em] font-medium uppercase transition-colors text-obsidian group-hover:text-terracotta">
              INNOVIST
            </span>
            <span className="text-[9px] uppercase tracking-[0.35em] font-sans -mt-1 text-terracotta font-semibold">
              Interior Architecture
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-9 text-xs font-medium uppercase tracking-[0.22em]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`relative py-1 transition-colors duration-300 hover:text-terracotta ${
                  activeSection === link.href.substring(1)
                    ? 'text-terracotta font-bold'
                    : 'text-obsidian/80'
                }`}
              >
                {link.label}
                {activeSection === link.href.substring(1) && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-terracotta transition-all duration-300" />
                )}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Trigger */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onOpenConsultation}
              className="hidden sm:inline-flex items-center space-x-2 text-xs uppercase tracking-[0.18em] px-5 py-2.5 rounded-none transition-all duration-300 group border border-terracotta bg-terracotta text-white hover:bg-coral hover:border-coral hover:shadow-md"
            >
              <span>Book a Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              aria-expanded={mobileMenuOpen}
              className="lg:hidden p-2.5 text-obsidian hover:text-terracotta transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Editorial Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-obsidian text-ivory-warm transform transition-transform duration-500 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden flex flex-col justify-between p-6 sm:p-8 overflow-y-auto`}
      >
        <div className="flex items-center justify-between border-b border-ivory-warm/10 pb-5 shrink-0">
          <div className="flex flex-col">
            <span className="font-serif text-2xl tracking-[0.2em] font-medium uppercase text-ivory-warm">
              INNOVIST
            </span>
            <span className="text-[9px] uppercase tracking-[0.35em] text-terracotta font-semibold">
              Interior Architecture
            </span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close Navigation Menu"
            className="p-2.5 text-ivory-warm/80 hover:text-coral transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col space-y-4 sm:space-y-6 my-auto py-8">
          {navLinks.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="group flex items-center justify-between font-serif text-2xl sm:text-3xl tracking-wide hover:text-coral transition-colors py-2 min-h-[48px]"
            >
              <span className="flex items-center space-x-3">
                <span className="text-xs font-sans tracking-widest text-terracotta font-semibold">
                  0{idx + 1}
                </span>
                <span>{link.label}</span>
              </span>
              <ArrowUpRight className="w-5 h-5 text-terracotta opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </a>
          ))}
        </nav>

        <div className="border-t border-ivory-warm/10 pt-5 space-y-4 shrink-0">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenConsultation();
            }}
            className="w-full py-4 bg-terracotta text-white font-sans text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center space-x-2 hover:bg-coral transition-colors shadow-lg min-h-[48px]"
          >
            <span>Start Your Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-grey-warm font-sans tracking-wider pt-2 gap-2 text-center sm:text-left">
            <a href="tel:+919876543210" className="flex items-center space-x-1.5 hover:text-ivory-warm py-1">
              <Phone className="w-3.5 h-3.5 text-terracotta" />
              <span>+91 98765 43210</span>
            </a>
            <span className="text-terracotta font-mono text-[11px]">Bengaluru • Mumbai</span>
          </div>
        </div>
      </div>
    </>
  );
};
