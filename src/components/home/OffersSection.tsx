import React, { useState } from 'react';
import { Copy, Check, Sparkles, Tag, ArrowRight } from 'lucide-react';
import { salonConfig } from '../../config/salonConfig';
import { useBooking } from '../../context/BookingContext';

export const OffersSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const { openBookingModal, showToast } = useBooking();
  const coupon = salonConfig.defaultCoupon;

  const handleCopy = () => {
    navigator.clipboard.writeText(coupon.code);
    setCopied(true);
    showToast(`Coupon code ${coupon.code} copied to clipboard!`);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleClaim = () => {
    openBookingModal({ couponCode: coupon.code });
  };

  return (
    <section className="py-16 sm:py-20 bg-ivory-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-charcoal-900 via-charcoal-950 to-charcoal-900 text-ivory-100 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-luxury border border-charcoal-800">
          
          {/* Subtle gold ambient glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/15 border border-gold-400/30 text-gold-400 text-xs font-semibold uppercase tracking-[0.2em]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{coupon.title}</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-ivory-100 leading-tight">
                Get <span className="italic text-gold-400 font-serif">15% OFF</span> your first salon visit.
              </h2>

              <p className="text-sm sm:text-base text-charcoal-200 max-w-xl font-normal leading-relaxed">
                Step into Lumière for the very first time. Enjoy an exclusive introductory savings across any of our hair design, hydra facials, bridal consultations, or nail rituals.
              </p>
            </div>

            {/* Right Card: Coupon Code & Claim Action */}
            <div className="lg:col-span-5 bg-charcoal-800/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-charcoal-700/80 flex flex-col items-center text-center space-y-4">
              <span className="text-xs uppercase tracking-widest text-charcoal-300 font-medium">
                Use Promo Code At Checkout
              </span>

              {/* Coupon Box with Copy Button */}
              <div className="w-full flex items-center justify-between bg-charcoal-950/80 border border-dashed border-gold-500/50 rounded-xl px-4 py-3">
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4 text-gold-400" />
                  <span className="font-mono text-lg sm:text-xl font-bold tracking-widest text-gold-400">
                    {coupon.code}
                  </span>
                </div>

                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 text-xs text-ivory-200 hover:text-white bg-charcoal-800 hover:bg-charcoal-700 px-3 py-1.5 rounded-lg transition-colors border border-charcoal-700"
                  aria-label="Copy coupon code"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-medium">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Claim CTA */}
              <button
                onClick={handleClaim}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-charcoal-950 py-3.5 rounded-full text-xs font-bold uppercase tracking-[0.16em] transition-all shadow-md active:scale-98"
              >
                <span>Claim Offer Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-charcoal-400">
                *Valid on your first appointment. Cannot be combined with other package discounts.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
