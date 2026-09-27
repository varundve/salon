export const salonConfig = {
  name: "Lumière",
  fullName: "Lumière Salon & Beauty Studio",
  tagline: "Where Beauty Meets Confidence.",
  description: "From precision haircuts to royal bridal beauty, experience personalized salon rituals crafted by certified master stylists in a luxurious, serene sanctuary.",
  
  // Contact details
  phoneDisplay: "+91 99999 99999",
  phoneRaw: "+919999999999",
  whatsappNumber: "919999999999", // International format without +
  email: "hello@lumiere-salon.com",
  
  // Location
  address: {
    line1: "123, Main Street, Civil Lines",
    city: "Kanpur",
    state: "Uttar Pradesh",
    pincode: "208001",
    full: "123, Main Street, Civil Lines, Kanpur, Uttar Pradesh 208001",
    mapUrl: "https://maps.google.com/?q=Civil+Lines+Kanpur+Uttar+Pradesh",
    // Embed URL for responsive iframe
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114324.63462153244!2d80.25895784344445!3d26.471676646549248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c47796d1912f7%3A0xb36b567d025ea945!2sCivil%20Lines%2C%20Kanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
  },
  
  // Timings
  hours: [
    { days: "Monday – Saturday", time: "10:00 AM – 8:00 PM" },
    { days: "Sunday", time: "11:00 AM – 6:00 PM" }
  ],
  
  // Promotional
  defaultCoupon: {
    code: "LUMIERE15",
    discountPercent: 15,
    title: "FIRST VISIT SPECIAL",
    description: "Get 15% OFF your first salon appointment"
  },
  
  // Stats
  stats: {
    rating: "4.9/5",
    reviewCount: "850+",
    clientsCount: "5,000+",
    yearsInService: "8+",
    certifiedStylists: "12+"
  },

  // Socials
  socials: {
    instagram: "https://instagram.com/lumiere.salon.in",
    facebook: "https://facebook.com/lumiere.salon.in",
    youtube: "https://youtube.com/@lumieresalon"
  },
  
  // Helper to generate dynamic WhatsApp links
  getWhatsAppLink: (customMessage?: string) => {
    const text = customMessage || "Hello Lumière Salon, I would like to inquire about booking an appointment.";
    return `https://wa.me/${salonConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
  },
  
  getBookingWhatsAppLink: (details: {
    name: string;
    serviceName: string;
    date: string;
    timeSlot: string;
    stylistName?: string;
    bookingId?: string;
  }) => {
    const message = `✨ *Lumière Salon Appointment Request* ✨
• *Booking ID:* ${details.bookingId || 'New'}
• *Name:* ${details.name}
• *Service:* ${details.serviceName}
• *Date:* ${details.date}
• *Time:* ${details.timeSlot}
${details.stylistName ? `• *Stylist:* ${details.stylistName}\n` : ''}
Please confirm my slot. Thank you!`;
    return `https://wa.me/${salonConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
  },

  getBridalWhatsAppLink: () => {
    const message = `Hello Lumière Salon, I am interested in booking a Bridal Consultation & Trial for my upcoming wedding events.`;
    return `https://wa.me/${salonConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
  }
};
