import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Sparkles, Star, Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { salonConfig } from '../../config/salonConfig';
import { useBooking } from '../../context/BookingContext';

export const Hero: React.FC = () => {
  const { openBookingModal } = useBooking();

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-ivory-100">
      {/* Subtle background ambient glow */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-beige-200/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-rose-300/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Typography */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-7 space-y-6 sm:space-y-8"
          >
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-beige-200/70 border border-beige-300/80 text-charcoal-800 text-xs font-semibold uppercase tracking-[0.2em]">
              <Sparkles className="w-3.5 h-3.5 text-gold-500" />
              <span>PREMIUM BEAUTY STUDIO</span>
            </div>

            {/* Large Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-normal text-charcoal-900 leading-[1.08] tracking-tight">
              Beauty that feels <br />
              <span className="italic font-normal font-serif text-rose-600">uniquely</span> you.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-charcoal-700 max-w-xl font-normal leading-relaxed">
              From precision haircuts to bridal beauty, experience personalized salon services delivered by professionals who understand your style.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => openBookingModal()}
                className="inline-flex items-center justify-center gap-2.5 bg-charcoal-900 hover:bg-charcoal-950 text-ivory-100 px-8 py-4 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] transition-all duration-300 shadow-soft hover:shadow-elevated active:scale-95 group"
              >
                <Calendar className="w-4 h-4 text-gold-400" />
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 border border-charcoal-900/30 hover:border-charcoal-900 hover:bg-beige-200/50 text-charcoal-900 px-8 py-4 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] transition-all duration-200"
              >
                <span>Explore Services</span>
              </Link>
            </div>

            {/* Location & Brand Assurance Badge */}
            <div className="pt-4 flex items-center gap-6 border-t border-beige-200/80 text-xs text-charcoal-600">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Open Today: 10:00 AM – 8:00 PM</span>
              </div>
              <span className="text-charcoal-300">|</span>
              <div>Civil Lines, Kanpur</div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Hero Imagery with Floating Social Proof */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame */}
              <div className="absolute -inset-3 rounded-[2.5rem] border border-beige-300/80 -z-10 translate-x-2 translate-y-2 hidden sm:block" />

              {/* Main Image Container */}
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-elevated bg-beige-200">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=85"
                  alt="Lumière Salon luxury interior and styling"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/40 via-transparent to-transparent" />
              </div>

              {/* Floating Stat Card 1: 4.9/5 Customer Rating */}
              <div className="absolute -bottom-5 sm:-bottom-6 left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-elevated border border-beige-200 flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-500">
                  <Star className="w-6 h-6 fill-gold-500" />
                </div>
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="font-serif text-2xl font-bold text-charcoal-900">
                      {salonConfig.stats.rating}
                    </span>
                    <span className="text-[10px] text-charcoal-500 uppercase font-medium">Verified</span>
                  </div>
                  <p className="text-xs text-charcoal-600 font-medium">Customer Rating</p>
                </div>
              </div>

              {/* Floating Stat Card 2: 5000+ Happy Clients */}
              <div className="absolute top-6 sm:top-8 -right-3 sm:-right-6 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-elevated border border-beige-200 flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-600">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-serif text-2xl font-bold text-charcoal-900 block">
                    {salonConfig.stats.clientsCount}
                  </span>
                  <p className="text-xs text-charcoal-600 font-medium">Happy Clients</p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
