import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { ContactSection } from '../components/home/ContactSection';
import { salonFAQs } from '../data/faqs';

export const ContactPage: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="pt-28 pb-16 bg-ivory-100 min-h-screen">
      {/* Contact Section Component with Map and Info */}
      <ContactSection />

      {/* Frequently Asked Questions Section */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 text-rose-600 text-xs font-semibold uppercase tracking-[0.2em] mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-rose-500" />
            <span>COMMON INQUIRIES</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-normal">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-600 mt-2">
            Everything you need to know regarding bookings, products, and consultations.
          </p>
        </div>

        <div className="space-y-3.5">
          {salonFAQs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-beige-300 overflow-hidden shadow-soft transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg text-charcoal-900 font-medium">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-beige-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-charcoal-900 text-ivory-100' : 'text-charcoal-700'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-charcoal-600 leading-relaxed border-t border-beige-200 pt-3 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
