import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { salonConfig } from '../../config/salonConfig';

export const AboutSection: React.FC = () => {
  const highlights = [
    { text: 'Certified Professionals', desc: 'Academy-trained senior stylists & dermatologically aware therapists' },
    { text: 'Premium Products', desc: 'Authentic Kérastase, L\'Oréal, Olaplex & Dermalogica formulations' },
    { text: 'Personalized Consultation', desc: 'Detailed assessment of your hair texture, undertones & facial structure' },
    { text: 'Hygienic & Comfortable', desc: 'Autoclaved precision instruments & single-use sanitized treatment kits' }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-ivory-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Collage */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-4 sm:space-y-6">
                <div className="relative rounded-3xl overflow-hidden shadow-elevated aspect-[4/5] bg-beige-200">
                  <img
                    src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80"
                    alt="Lumière salon interior and styling lounge"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-beige-200/60 rounded-3xl p-6 border border-beige-300">
                  <p className="font-serif text-3xl font-medium text-charcoal-900">
                    {salonConfig.stats.yearsInService}
                  </p>
                  <p className="text-xs uppercase tracking-wider text-charcoal-600 font-semibold mt-1">
                    Years of Luxury Hair & Skin Artistry in Kanpur
                  </p>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6 pt-8 sm:pt-12">
                <div className="relative rounded-3xl overflow-hidden shadow-elevated aspect-[4/5] bg-beige-200">
                  <img
                    src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80"
                    alt="Hair stylist at Lumière studio"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative rounded-3xl overflow-hidden shadow-elevated aspect-[4/3] bg-beige-200">
                  <img
                    src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80"
                    alt="Facial and skin care session"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Central Stamp */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-charcoal-900 text-ivory-100 p-4 rounded-full shadow-2xl border-4 border-ivory-100 hidden sm:flex items-center justify-center w-24 h-24 text-center">
              <span className="font-serif text-[11px] uppercase tracking-widest leading-tight">
                Pure <br /> Serenity
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-600 block mb-2">
                ABOUT {salonConfig.name.toUpperCase()}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal-900 font-normal leading-[1.15]">
                More than a salon. <br />
                <span className="italic font-serif text-charcoal-800">A space to feel your best.</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed font-normal">
              At {salonConfig.fullName}, we believe beauty is an intimate form of self-expression. Located in Civil Lines, Kanpur, our studio was founded to redefine the standard salon visit into an unhurried, luxurious personal ritual.
            </p>

            <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed font-normal">
              Whether you are preparing for your bridal celebrations, refreshing your seasonal balayage, or indulging in restorative medical skin therapy, our certified specialists create bespoke experiences designed precisely around your comfort.
            </p>

            {/* Four Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white/70 p-3.5 rounded-2xl border border-beige-200">
                  <div className="w-6 h-6 rounded-full bg-rose-500/15 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-900">
                      {item.text}
                    </h4>
                    <p className="text-[11px] text-charcoal-600 mt-0.5 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4 flex items-center gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-charcoal-900 hover:bg-charcoal-950 text-ivory-100 px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.16em] transition-all shadow-soft group"
              >
                <span>Discover Our Story & Menu</span>
                <ArrowRight className="w-4 h-4 text-gold-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
