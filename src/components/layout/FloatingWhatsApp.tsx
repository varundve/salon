import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { salonConfig } from '../../config/salonConfig';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-40 flex items-center">
      {/* Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 mr-3 bg-charcoal-900 text-ivory-100 text-xs py-2 px-3.5 rounded-full shadow-luxury border border-beige-300/30 animate-fade-in">
          <span>Need consultation? Chat on WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-charcoal-400 hover:text-white ml-1"
            aria-label="Dismiss message"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={salonConfig.getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Lumière Salon on WhatsApp"
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-luxury hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
      >
        {/* Subtle Pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping opacity-75" />
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 relative z-10" />
      </a>
    </div>
  );
};
