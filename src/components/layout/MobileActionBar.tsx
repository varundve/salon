import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { salonConfig } from '../../config/salonConfig';
import { useBooking } from '../../context/BookingContext';

export const MobileActionBar: React.FC = () => {
  const { openBookingModal } = useBooking();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-ivory-100/95 backdrop-blur-md border-t border-beige-300 px-4 py-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="flex items-center gap-2">
        {/* Call button */}
        <a
          href={`tel:${salonConfig.phoneRaw}`}
          className="flex-1 flex items-center justify-center gap-1.5 bg-beige-200 hover:bg-beige-300 text-charcoal-900 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-rose-500" />
          <span>Call</span>
        </a>

        {/* WhatsApp button */}
        <a
          href={salonConfig.getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 rounded-full text-xs font-semibold tracking-wider transition-colors"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        {/* Book button */}
        <button
          onClick={() => openBookingModal()}
          className="flex-[1.4] flex items-center justify-center gap-1.5 bg-charcoal-900 hover:bg-charcoal-950 text-ivory-100 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase shadow-soft active:scale-95 transition-transform"
        >
          <Calendar className="w-3.5 h-3.5 text-gold-400" />
          <span>Book Now</span>
        </button>
      </div>
    </div>
  );
};
