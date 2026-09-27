import React from 'react';
import { Clock, Star, ArrowRight } from 'lucide-react';
import type { Service } from '../../types';
import { useBooking } from '../../context/BookingContext';

interface ServiceCardProps {
  service: Service;
  featured?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, featured = false }) => {
  const { openBookingModal } = useBooking();

  return (
    <div
      className={`group bg-white rounded-2xl overflow-hidden border border-beige-200 transition-all duration-300 hover:shadow-elevated hover:border-beige-300 flex flex-col justify-between ${
        featured ? 'ring-1 ring-gold-400/40' : ''
      }`}
    >
      <div>
        {/* Service Image with subtle zoom on hover */}
        <div className="relative aspect-[16/10] overflow-hidden bg-beige-100">
          <img
            src={service.image}
            alt={service.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
          
          {/* Category Tag */}
          <span className="absolute top-3 left-3 bg-ivory-100/90 backdrop-blur-md text-charcoal-800 text-[10px] uppercase font-semibold tracking-wider px-2.5 py-1 rounded-full border border-beige-300">
            {service.category}
          </span>

          {/* Rating */}
          <div className="absolute top-3 right-3 bg-charcoal-900/80 backdrop-blur-md text-gold-400 text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1 shadow-sm">
            <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
            <span className="text-white text-[11px]">{service.rating.toFixed(1)}</span>
          </div>

          {/* Duration Badge */}
          <div className="absolute bottom-3 left-3 text-ivory-100 text-xs font-medium flex items-center gap-1 bg-charcoal-950/60 backdrop-blur-sm px-2.5 py-0.5 rounded-full">
            <Clock className="w-3 h-3 text-rose-300" />
            <span>{service.duration} min</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 space-y-2">
          <h3 className="font-serif text-lg sm:text-xl font-normal text-charcoal-900 leading-snug group-hover:text-rose-600 transition-colors">
            {service.name}
          </h3>
          <p className="text-charcoal-600 text-xs sm:text-sm line-clamp-2 leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>

      {/* Footer: Price & CTA */}
      <div className="px-5 sm:px-6 pb-5 pt-2 border-t border-beige-200/60 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-wider text-charcoal-500 font-medium">Starting from</span>
          <span className="font-serif text-xl sm:text-2xl font-medium text-charcoal-900">
            ₹{service.price.toLocaleString('en-IN')}
          </span>
        </div>

        <button
          onClick={() => openBookingModal({ serviceId: service.id })}
          className="inline-flex items-center gap-1.5 bg-ivory-100 hover:bg-charcoal-900 text-charcoal-900 hover:text-ivory-100 border border-charcoal-900/20 hover:border-charcoal-900 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 group-hover:bg-charcoal-900 group-hover:text-ivory-100"
        >
          <span>Book</span>
          <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </div>
  );
};
