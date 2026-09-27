import React from 'react';
import { Star, Calendar } from 'lucide-react';
import { stylists } from '../../data/stylists';
import { useBooking } from '../../context/BookingContext';
import { InstagramIcon } from '../common/SocialIcons';

export const StylistsSection: React.FC = () => {
  const { openBookingModal } = useBooking();

  return (
    <section id="stylists" className="py-20 lg:py-28 bg-beige-100/50 border-y border-beige-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-600 block mb-2">
            MASTER ARTISTS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal-900 font-normal">
            Meet Our Stylists
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 mt-3 font-normal">
            Trained at world-renowned academies, our master artists bring unmatched precision, empathetic listening, and signature passion to every chair.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stylists.map((stylist) => (
            <div
              key={stylist.id}
              className="group bg-white rounded-3xl overflow-hidden border border-beige-300 shadow-soft hover:shadow-elevated transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Stylist Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden bg-beige-200">
                  <img
                    src={stylist.image}
                    alt={stylist.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Rating Badge */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-sm text-charcoal-900">
                    <Star className="w-3 h-3 fill-gold-500 text-gold-500" />
                    <span>{stylist.rating}</span>
                  </div>

                  {/* Instagram Button */}
                  <a
                    href={stylist.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${stylist.name} on Instagram`}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-charcoal-900/80 hover:bg-rose-600 text-white flex items-center justify-center transition-colors shadow-sm"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>

                  {/* Experience Badge */}
                  <div className="absolute bottom-3 left-3 right-3 text-ivory-100 text-xs">
                    <span className="bg-charcoal-950/70 backdrop-blur-md px-2.5 py-1 rounded-full font-medium inline-block">
                      {stylist.experience}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 sm:p-6 space-y-3">
                  <div>
                    <h3 className="font-serif text-xl font-medium text-charcoal-900 group-hover:text-rose-600 transition-colors">
                      {stylist.name}
                    </h3>
                    <p className="text-xs font-medium text-charcoal-600 mt-0.5">
                      {stylist.role}
                    </p>
                  </div>

                  {/* Bio */}
                  <p className="text-xs text-charcoal-600 leading-relaxed line-clamp-2">
                    {stylist.bio}
                  </p>

                  {/* Specialization Tags */}
                  <div className="pt-2 border-t border-beige-200">
                    <p className="text-[10px] uppercase font-bold tracking-wider text-charcoal-500 mb-2">
                      Specializes in:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {stylist.specialization.map((spec, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] bg-beige-100 text-charcoal-800 px-2 py-0.5 rounded-full border border-beige-200 font-medium"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Book with Stylist Button */}
              <div className="px-5 pb-5 pt-0">
                <button
                  onClick={() => openBookingModal({ stylistId: stylist.id })}
                  className="w-full py-2.5 bg-ivory-100 hover:bg-charcoal-900 text-charcoal-900 hover:text-ivory-100 border border-charcoal-900/20 hover:border-charcoal-900 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5 text-gold-500" />
                  <span>Book with {stylist.name.split(' ')[0]}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
