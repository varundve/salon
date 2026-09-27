import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2, Navigation } from 'lucide-react';
import { salonConfig } from '../../config/salonConfig';
import { useBooking } from '../../context/BookingContext';

export const ContactSection: React.FC = () => {
  const { showToast } = useBooking();
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryMsg, setInquiryMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName.trim() || !inquiryPhone.trim()) {
      showToast('Please provide your name and phone number.');
      return;
    }
    setSubmitted(true);
    showToast('Inquiry sent! Our concierge will call you shortly.');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-ivory-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-600 block mb-2">
            LOCATION & CONCIERGE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal-900 font-normal">
            Visit Lumière Studio
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 mt-3 font-normal">
            We are conveniently located in Civil Lines, Kanpur. Feel free to call, visit, or chat on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Salon Details & Action Buttons */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-beige-300 shadow-soft space-y-6">
              <h3 className="font-serif text-2xl text-charcoal-900 font-medium">
                Salon Information
              </h3>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-beige-200/80 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-charcoal-800">
                    Salon Address
                  </h4>
                  <p className="text-xs sm:text-sm text-charcoal-600 mt-0.5 leading-relaxed">
                    {salonConfig.address.full}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-beige-200/80 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-charcoal-800">
                    Call Directly
                  </h4>
                  <a
                    href={`tel:${salonConfig.phoneRaw}`}
                    className="text-xs sm:text-sm font-semibold text-charcoal-900 hover:text-rose-600 mt-0.5 block transition-colors"
                  >
                    {salonConfig.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-beige-200/80 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-charcoal-800">
                    Email Inquiries
                  </h4>
                  <a
                    href={`mailto:${salonConfig.email}`}
                    className="text-xs sm:text-sm text-charcoal-600 hover:text-charcoal-900 mt-0.5 block transition-colors"
                  >
                    {salonConfig.email}
                  </a>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-3.5 pt-2 border-t border-beige-200">
                <div className="w-10 h-10 rounded-xl bg-beige-200/80 text-gold-500 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-charcoal-800">
                    Opening Hours
                  </h4>
                  <div className="text-xs sm:text-sm text-charcoal-600 mt-1 space-y-0.5">
                    {salonConfig.hours.map((h, i) => (
                      <p key={i}>
                        <span className="font-medium text-charcoal-900">{h.days}:</span> {h.time}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Action CTAs */}
              <div className="pt-4 border-t border-beige-200 flex flex-wrap gap-2.5">
                <a
                  href={`tel:${salonConfig.phoneRaw}`}
                  className="flex-1 min-w-[130px] flex items-center justify-center gap-1.5 bg-charcoal-900 hover:bg-charcoal-950 text-ivory-100 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shadow-soft"
                >
                  <Phone className="w-3.5 h-3.5 text-gold-400" />
                  <span>Call Now</span>
                </a>

                <a
                  href={salonConfig.getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[130px] flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shadow-soft"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={salonConfig.address.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 border border-beige-400 hover:bg-beige-100 text-charcoal-800 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-rose-500" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Quick Inquiry Form */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-beige-300 shadow-soft">
              <h4 className="font-serif text-lg text-charcoal-900 font-medium mb-1">
                Have a Quick Question?
              </h4>
              <p className="text-xs text-charcoal-600 mb-4">
                Leave a short message and our salon manager will get back to you.
              </p>

              {submitted ? (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Thank you! We have received your inquiry.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-beige-100/50 border border-beige-300 rounded-xl text-xs text-charcoal-900 focus:outline-none focus:ring-1 focus:ring-rose-500"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={inquiryPhone}
                      onChange={(e) => setInquiryPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-beige-100/50 border border-beige-300 rounded-xl text-xs text-charcoal-900 focus:outline-none focus:ring-1 focus:ring-rose-500"
                    />
                  </div>
                  <textarea
                    rows={2}
                    placeholder="What would you like to ask about?"
                    value={inquiryMsg}
                    onChange={(e) => setInquiryMsg(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-beige-100/50 border border-beige-300 rounded-xl text-xs text-charcoal-900 focus:outline-none focus:ring-1 focus:ring-rose-500"
                  />
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-charcoal-900 hover:bg-charcoal-950 text-ivory-100 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Send className="w-3.5 h-3.5 text-gold-400" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Google Maps Area */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-4 sm:p-5 border border-beige-300 shadow-soft h-[550px] lg:h-[650px] flex flex-col">
            <div className="flex items-center justify-between pb-3 px-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-charcoal-700">
                Salon Location • Civil Lines, Kanpur
              </span>
              <a
                href={salonConfig.address.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] uppercase tracking-wider font-semibold text-rose-600 hover:text-rose-700 flex items-center gap-1"
              >
                <span>Open in Google Maps</span>
                <Navigation className="w-3 h-3" />
              </a>
            </div>

            {/* Embedded Google Map Iframe */}
            <div className="relative flex-1 rounded-2xl overflow-hidden border border-beige-200">
              <iframe
                title="Lumière Salon Location Map"
                src={salonConfig.address.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter saturate-[0.85] contrast-[1.05]"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
