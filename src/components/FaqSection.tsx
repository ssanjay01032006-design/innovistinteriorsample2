import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../data/content';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 md:py-36 bg-[#F5F1EB] text-obsidian border-t border-obsidian/10 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center space-x-2.5 sm:space-x-3 mb-3 sm:mb-4">
            <span className="w-5 sm:w-6 h-[1.5px] bg-terracotta" />
            <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.24em] sm:tracking-[0.3em] text-terracotta font-semibold">
              Clarity & Transparency
            </span>
            <span className="w-5 sm:w-6 h-[1.5px] bg-terracotta" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-obsidian tracking-tight">
            Frequently Asked Questions.
          </h2>
          <p className="font-sans text-xs sm:text-sm md:text-base text-obsidian/75 mt-3 sm:mt-4 font-light leading-relaxed">
            Everything you need to know about partnering with INNOVIST for your interior architecture journey.
          </p>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-obsidian/15 border-t border-b border-obsidian/15">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-5 sm:py-7">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between text-left group focus:outline-none min-h-[48px]"
                >
                  <span className="font-serif text-lg sm:text-xl md:text-2xl text-obsidian group-hover:text-terracotta transition-colors pr-4">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-none border border-obsidian/20 flex items-center justify-center shrink-0 group-hover:border-terracotta transition-colors">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-terracotta" />
                    ) : (
                      <Plus className="w-4 h-4 text-obsidian" />
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-400 ease-in-out ${
                    isOpen ? 'max-h-96 mt-3 sm:mt-4 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="font-sans text-xs sm:text-sm md:text-base text-obsidian/75 font-light leading-relaxed pr-4 sm:pr-8 border-l-2 border-terracotta pl-3.5 sm:pl-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

