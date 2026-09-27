import React from 'react';
import { Check, Sparkles, Clock, ArrowRight } from 'lucide-react';
import { packages } from '../../data/packages';
import { useBooking } from '../../context/BookingContext';

export const SpecialPackages: React.FC = () => {
  const { openBookingModal } = useBooking();

  return (
    <section id="packages" className="py-20 lg:py-28 bg-beige-100/60 border-b border-beige-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-600 block mb-2">
            CURATED RITUALS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal-900 font-normal">
            Special Packages
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 mt-3 font-normal">
            Thoughtfully packaged combinations delivering all-in-one beauty rejuvenation at exclusive bundled pricing.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {packages.slice(0, 3).map((pkg) => {
            const isFeatured = pkg.isPopular;

            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? 'bg-white shadow-luxury border-2 border-gold-500/80 md:-translate-y-2'
                    : 'bg-white/90 shadow-soft border border-beige-300 hover:shadow-elevated'
                }`}
              >
                {/* Popular Badge */}
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-charcoal-900 text-gold-400 border border-gold-500/50 text-[10px] uppercase font-bold tracking-[0.2em] px-4 py-1 rounded-full shadow-sm flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-gold-400" />
                    <span>{pkg.badge}</span>
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-xs text-charcoal-500 mb-1">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-rose-500" />
                        <span>{pkg.duration}</span>
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl font-normal text-charcoal-900">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-charcoal-600 mt-1 leading-relaxed">
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="py-4 my-4 border-y border-beige-200">
                    <div className="flex items-baseline gap-2">
                      <span className="font-serif text-3xl sm:text-4xl font-semibold text-charcoal-900">
                        ₹{pkg.price.toLocaleString('en-IN')}
                      </span>
                      {pkg.originalPrice && (
                        <span className="text-sm text-charcoal-400 line-through">
                          ₹{pkg.originalPrice.toLocaleString('en-IN')}
                        </span>
                      )}
                    </div>
                    {pkg.originalPrice && (
                      <span className="text-[11px] text-emerald-700 font-semibold tracking-wide">
                        Save ₹{(pkg.originalPrice - pkg.price).toLocaleString('en-IN')} with this bundle
                      </span>
                    )}
                  </div>

                  {/* Included Services List */}
                  <div className="space-y-2.5 my-6">
                    <p className="text-[11px] uppercase tracking-wider font-bold text-charcoal-700">
                      Package Includes:
                    </p>
                    {pkg.includes.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-charcoal-700">
                        <div className="w-4 h-4 rounded-full bg-rose-500/10 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => openBookingModal()}
                  className={`w-full py-3.5 px-6 rounded-full text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-200 flex items-center justify-center gap-2 ${
                    isFeatured
                      ? 'bg-charcoal-900 hover:bg-charcoal-950 text-ivory-100 shadow-soft'
                      : 'bg-ivory-100 hover:bg-charcoal-900 text-charcoal-900 hover:text-ivory-100 border border-charcoal-900/30 hover:border-charcoal-900'
                  }`}
                >
                  <span>Book Package</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
