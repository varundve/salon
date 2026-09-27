export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export const salonFAQs: FAQItem[] = [
  {
    question: "Do I need to book an appointment in advance?",
    answer: "We strongly recommend booking in advance to ensure your preferred stylist and time slot are reserved, especially for weekends and bridal rituals. However, we also welcome walk-ins based on availability."
  },
  {
    question: "What products and brands do you use?",
    answer: "We exclusively use authentic, premium international professional brands including Kérastase Paris, L'Oréal Professionnel, Olaplex, Dermalogica, O3+, TEMPTU Airbrush, and Rica Italy. All products are 100% genuine and dermatologically tested."
  },
  {
    question: "Do you offer bridal trials before the wedding day?",
    answer: "Yes, absolutely! Our Bridal Consultation and Trial package allows you to experiment with hair styling, makeup shades, draping techniques, and lash preferences with our lead celebrity artist Meera Kapoor."
  },
  {
    question: "How do I apply the first-time visitor discount?",
    answer: "Use the promo code 'LUMIERE15' during your online appointment booking or mention it at our reception desk when checking out to receive an instant 15% discount on your first visit."
  },
  {
    question: "What are your sanitation and hygiene protocols?",
    answer: "We strictly practice hospital-grade sterilization. All metallic tools are autoclaved, single-use disposable kits and towels are utilized for waxing, pedicures, and cleanups, and stations are disinfected after every client."
  },
  {
    question: "What is your cancellation or rescheduling policy?",
    answer: "We understand schedules change! You can reschedule or cancel your appointment free of charge by calling us or messaging on WhatsApp up to 3 hours prior to your scheduled slot."
  }
];
