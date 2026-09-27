import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useBooking } from '../../context/BookingContext';
import { AppointmentForm } from '../booking/AppointmentForm';

export const BookingModal: React.FC = () => {
  const { isModalOpen, closeBookingModal, modalOptions } = useBooking();

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  if (!isModalOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeBookingModal}
          className="fixed inset-0 bg-charcoal-950/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl bg-ivory-100 rounded-3xl shadow-luxury border border-beige-300 z-10 my-auto max-h-[92vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={closeBookingModal}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-charcoal-700 hover:text-charcoal-950 border border-beige-300 flex items-center justify-center transition-colors shadow-sm"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-4 sm:p-8">
            <AppointmentForm
              initialServiceId={modalOptions.serviceId}
              initialStylistId={modalOptions.stylistId}
              initialDate={modalOptions.date}
              initialTimeSlot={modalOptions.timeSlot}
              inModal={true}
              onBackToHome={closeBookingModal}
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
