import React from 'react';
import { Sparkles, Calendar, MessageCircle, Crown, Check } from 'lucide-react';
import { salonConfig } from '../../config/salonConfig';
import { useBooking } from '../../context/BookingContext';

export const BridalSection: React.FC = () => {
  const { openBookingModal } = useBooking();

  const bridalFeatures = [
    { title: 'Royal Bridal Makeup', desc: 'Bespoke HD & Airbrush formulas matching natural undertones' },
    { title: 'HD Water-Resistant Finish', desc: 'Sweat-proof, tear-resistant formulations lasting 16+ hours' },
    { title: 'Intricate Hair Styling', desc: 'Floral adornments, textured waves, and traditional royal updos' },
    { title: 'Dupatta & Saree Draping', desc: 'Precision pleated styling for Lehenga, Kanjeevaram & Dupattas' },
    { title: 'Pre-Bridal Glow Rituals', desc: 'Full-body polishing, hydra facials, and manicure-pedicure suites' },
    { title: 'Bridal Trial Consultation', desc: 'One-on-one session to finalize hair, eye looks, and drape style' }
  ];

  return (
    <section className="py-20 lg:py-28 bg-ivory-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Luxury Editorial Bridal Imagery */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Decorative Luxury Border */}
              <div className="absolute -inset-4 rounded-[2.5rem] border border-gold-500/30 -z-10 translate-x-2 -translate-y-2 hidden sm:block" />

              {/* Main Bridal Image */}
              <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-luxury bg-beige-200">
                <img
                  src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85"
                  alt="Royal Indian Bride with HD Makeup and Traditional Adornment"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent" />
                
                {/* Floating quote pill */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-charcoal-950/80 backdrop-blur-md border border-gold-500/40 text-ivory-100">
                  <p className="font-serif italic text-sm text-gold-300">
                    "Crafting unforgettable royal transformations for over 500+ Indian brides."
                  </p>
                  <p className="text-[10px] uppercase tracking-widest text-charcoal-300 mt-1">
                    Lead Artist: Meera Kapoor
                  </p>
                </div>
              </div>

              {/* Badge */}
              <div className="absolute top-6 left-6 bg-charcoal-900/90 backdrop-blur-md text-gold-400 border border-gold-500/50 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest flex items-center gap-1.5 shadow-md">
                <Crown className="w-3.5 h-3.5 text-gold-400" />
                <span>Haute Bridal Studio</span>
              </div>

            </div>
          </div>

          {/* Right: Bridal Narrative & Service Breakdown */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-600 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                <Sparkles className="w-3.5 h-3.5 text-gold-500" />
                <span>THE BRIDAL EXPERIENCE</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal-900 font-normal leading-[1.15]">
                Your Big Day Deserves <br />
                <span className="italic font-serif text-rose-600">Your Best Look.</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed font-normal">
              Every bride carries an individual dream for her wedding celebrations. Our bridal team blends classical royalty with contemporary elegance, ensuring your skin remains radiantly luminous from your first Haldi click to the final Vidaai farewell.
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {bridalFeatures.map((item, idx) => (
                <div key={idx} className="bg-white/90 p-3.5 rounded-2xl border border-beige-200 shadow-sm flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-gold-500/15 text-gold-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-charcoal-900">{item.title}</h4>
                    <p className="text-[11px] text-charcoal-600 leading-tight mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={() => openBookingModal({ serviceId: 'bridal-makeup' })}
                className="inline-flex items-center justify-center gap-2 bg-charcoal-900 hover:bg-charcoal-950 text-ivory-100 px-7 py-4 rounded-full text-xs font-semibold uppercase tracking-[0.16em] transition-all shadow-soft active:scale-98"
              >
                <Calendar className="w-4 h-4 text-gold-400" />
                <span>Book Bridal Consultation</span>
              </button>

              <a
                href={salonConfig.getBridalWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-emerald-600/60 hover:bg-emerald-50 text-emerald-800 px-6 py-4 rounded-full text-xs font-semibold tracking-wider transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Bridal Desk</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
