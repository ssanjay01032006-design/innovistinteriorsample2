import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, MessageSquare, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { SplitReveal } from './SplitReveal';

export const ConsultationSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    projectType: 'Residential Interior Design',
    budgetRange: '₹25L - ₹50L',
    location: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.phone.trim() || formData.phone.length < 8) errs.phone = 'Valid phone number required';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email address required';
    if (!formData.location.trim()) errs.location = 'Property city/location required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      projectType: 'Residential Interior Design',
      budgetRange: '₹25L - ₹50L',
      location: '',
      message: '',
    });
    setSubmitted(false);
    setErrors({});
  };

  const whatsappMessage = encodeURIComponent(
    `Hello INNOVIST Team, I would like to book an interior design consultation for a ${formData.projectType || 'Project'}.`
  );

  return (
    <section id="contact" className="py-28 md:py-36 bg-[#F5F1EB] text-obsidian border-t border-obsidian/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center space-x-3 mb-4">
            <span className="w-8 h-[1.5px] bg-terracotta" />
            <span className="text-[11px] font-sans uppercase tracking-[0.3em] text-terracotta font-semibold">
              Begin The Journey
            </span>
          </div>
          <SplitReveal
            as="h2"
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-obsidian tracking-tight"
          >
            {"Let's Create a Space\nThat Feels Like You."}
          </SplitReveal>
          <p className="font-sans text-sm sm:text-base text-obsidian/75 mt-4 font-light leading-relaxed">
            Have a vision for your space? Let's discuss your ideas and bring them to life with architectural precision.
          </p>
        </div>

        {/* Master Layout: Left Contact Card & Direct Concierge, Right Comprehensive Enquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Studio Concierge & WhatsApp */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#0B0B0B] text-[#F5F1EB] p-8 sm:p-10 shadow-2xl space-y-8 border border-white/10">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-coral font-mono block mb-2 font-semibold">
                  Instant Design Concierge
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F1EB]">
                  Speak Directly With Our Senior Architects
                </h3>
              </div>

              <p className="font-sans text-xs sm:text-sm text-[#F5F1EB]/80 font-light leading-relaxed">
                Prefer immediate messaging? Share your architectural blueprints or site photographs directly with our principals via WhatsApp for an immediate preliminary review.
              </p>

              <a
                href={`https://wa.me/919876543210?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <MagneticButton className="w-full py-4 bg-terracotta text-white font-sans text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center space-x-2 hover:bg-coral transition-colors group shadow-lg">
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </MagneticButton>
              </a>

              <div className="border-t border-white/10 pt-6 space-y-4 text-xs font-sans text-[#F5F1EB]/80">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-coral shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-medium text-[#F5F1EB]">Studio Locations</span>
                    <span className="text-[#F5F1EB]/70">Bengaluru Atelier: 42 Lavelle Road</span>
                    <span className="block text-[#F5F1EB]/70">Mumbai Atelier: BKC Horizon Wing</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-coral shrink-0" />
                  <a href="tel:+919876543210" className="hover:text-[#F5F1EB] transition-colors">
                    +91 98765 43210
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-coral shrink-0" />
                  <a href="mailto:concierge@innovistinterior.com" className="hover:text-[#F5F1EB] transition-colors">
                    concierge@innovistinterior.com
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="w-4 h-4 text-coral shrink-0" />
                  <span>Mon – Sat: 10:00 AM – 7:30 PM IST</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-End Consultation Inquiry Form */}
          <div className="lg:col-span-7 bg-white/90 p-8 sm:p-12 shadow-xl border border-obsidian/10">
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-[fadeIn_0.5s_ease-out]">
                <div className="w-16 h-16 bg-terracotta/20 text-terracotta mx-auto rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl text-obsidian">
                  Thank You, {formData.fullName}.
                </h3>
                <p className="font-sans text-sm sm:text-base text-obsidian/80 font-light max-w-md mx-auto leading-relaxed">
                  Your project consultation request has been received. Our senior design principal will review your requirements and reach out within 24 business hours.
                </p>
                <div className="pt-6">
                  <button
                    onClick={resetForm}
                    className="px-6 py-2.5 border border-obsidian/30 text-xs uppercase tracking-widest text-obsidian hover:bg-terracotta hover:text-white hover:border-terracotta transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-obsidian mb-2 font-normal">
                    Book an Architectural Consultation
                  </h3>
                  <p className="font-sans text-xs text-obsidian/60 font-light tracking-wide">
                    Share your project parameters to receive a customized spatial dossier.
                  </p>
                </div>

                {/* Full Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-obsidian font-medium mb-1.5 font-sans">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Sanjana Rao"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#F5F1EB] border border-obsidian/20 px-4 py-3 text-xs sm:text-sm font-sans focus:outline-none focus:border-terracotta transition-colors"
                    />
                    {errors.fullName && <p className="text-[11px] text-red-600 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-obsidian font-medium mb-1.5 font-sans">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#F5F1EB] border border-obsidian/20 px-4 py-3 text-xs sm:text-sm font-sans focus:outline-none focus:border-terracotta transition-colors"
                    />
                    {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                {/* Email & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-obsidian font-medium mb-1.5 font-sans">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. s.rao@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#F5F1EB] border border-obsidian/20 px-4 py-3 text-xs sm:text-sm font-sans focus:outline-none focus:border-terracotta transition-colors"
                    />
                    {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-obsidian font-medium mb-1.5 font-sans">
                      Property City / Location *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Bengaluru, Mumbai, Goa"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full bg-[#F5F1EB] border border-obsidian/20 px-4 py-3 text-xs sm:text-sm font-sans focus:outline-none focus:border-terracotta transition-colors"
                    />
                    {errors.location && <p className="text-[11px] text-red-600 mt-1">{errors.location}</p>}
                  </div>
                </div>

                {/* Project Type & Budget Range */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-obsidian font-medium mb-1.5 font-sans">
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-[#F5F1EB] border border-obsidian/20 px-4 py-3 text-xs sm:text-sm font-sans focus:outline-none focus:border-terracotta transition-colors cursor-pointer"
                    >
                      <option>Residential Interior Design</option>
                      <option>Modular Kitchen Design</option>
                      <option>Bedroom & Master Suite</option>
                      <option>Living & Dining Spaces</option>
                      <option>Commercial & Studio Interior</option>
                      <option>Complete Turnkey Villa</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-obsidian font-medium mb-1.5 font-sans">
                      Estimated Investment Tier
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full bg-[#F5F1EB] border border-obsidian/20 px-4 py-3 text-xs sm:text-sm font-sans focus:outline-none focus:border-terracotta transition-colors cursor-pointer"
                    >
                      <option>₹15L - ₹25L (Specialized Space)</option>
                      <option>₹25L - ₹50L (Apartment Interior)</option>
                      <option>₹50L - ₹1 Crore (Luxury Residence)</option>
                      <option>₹1 Crore+ (Turnkey Estate / Penthouse)</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-obsidian font-medium mb-1.5 font-sans">
                    Project Vision / Special Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your property square footage, hand-over timeline, or material preferences..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#F5F1EB] border border-obsidian/20 p-4 text-xs sm:text-sm font-sans focus:outline-none focus:border-terracotta transition-colors"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <MagneticButton
                    type="submit"
                    className="w-full py-4 bg-terracotta text-white font-sans text-xs uppercase tracking-[0.2em] font-semibold hover:bg-coral transition-all shadow-xl group border border-transparent hover:shadow-[0_10px_30px_rgba(244,91,61,0.35)]"
                  >
                    <span>Submit Consultation Request</span>
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </MagneticButton>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
