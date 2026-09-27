import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useBooking } from '../../context/BookingContext';

export const Toast: React.FC = () => {
  const { toastMessage } = useBooking();

  return (
    <AnimatePresence>
      {toastMessage && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-24 md:bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-charcoal-900 text-ivory-100 px-5 py-3 rounded-full shadow-luxury border border-beige-300/30 text-sm font-medium tracking-wide"
        >
          <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0" />
          <span>{toastMessage}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
