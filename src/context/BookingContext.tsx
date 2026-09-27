import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { BookingConfirmation } from '../types';

interface BookingModalOptions {
  serviceId?: string;
  stylistId?: string;
  date?: string;
  timeSlot?: string;
  couponCode?: string;
}

interface BookingContextType {
  isModalOpen: boolean;
  modalOptions: BookingModalOptions;
  openBookingModal: (options?: BookingModalOptions) => void;
  closeBookingModal: () => void;
  toastMessage: string | null;
  showToast: (message: string) => void;
  lastConfirmedBooking: BookingConfirmation | null;
  setLastConfirmedBooking: (booking: BookingConfirmation | null) => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalOptions, setModalOptions] = useState<BookingModalOptions>({});
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [lastConfirmedBooking, setLastConfirmedBooking] = useState<BookingConfirmation | null>(null);

  const openBookingModal = (options?: BookingModalOptions) => {
    if (options) {
      setModalOptions(options);
    }
    setIsModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsModalOpen(false);
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((current) => (current === message ? null : current));
    }, 3200);
  };

  return (
    <BookingContext.Provider
      value={{
        isModalOpen,
        modalOptions,
        openBookingModal,
        closeBookingModal,
        toastMessage,
        showToast,
        lastConfirmedBooking,
        setLastConfirmedBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = (): BookingContextType => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
