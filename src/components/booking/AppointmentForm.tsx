import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle, MessageCircle, PhoneCall, Sparkles, ArrowRight, RotateCcw } from 'lucide-react';
import { services } from '../../data/services';
import { stylists } from '../../data/stylists';
import { salonConfig } from '../../config/salonConfig';
import { BookingSummary } from './BookingSummary';
import type { BookingConfirmation } from '../../types';
import { useBooking } from '../../context/BookingContext';

interface AppointmentFormProps {
  initialServiceId?: string;
  initialStylistId?: string;
  initialDate?: string;
  initialTimeSlot?: string;
  onSuccess?: (confirmation: BookingConfirmation) => void;
  onBackToHome?: () => void;
  inModal?: boolean;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({
  initialServiceId = '',
  initialStylistId = '',
  initialDate = '',
  initialTimeSlot = '',
  onSuccess,
  onBackToHome,
  inModal = false
}) => {
  const { setLastConfirmedBooking } = useBooking();

  // Form State
  const [serviceId, setServiceId] = useState(initialServiceId);
  const [stylistId, setStylistId] = useState(initialStylistId);
  const [date, setDate] = useState(initialDate || new Date().toISOString().split('T')[0]);
  const [timeSlot, setTimeSlot] = useState(initialTimeSlot || '11:30 AM');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);

  // Status & Validation
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmation, setConfirmation] = useState<BookingConfirmation | null>(null);

  // Available Time Slots
  const timeSlots = [
    '10:30 AM', '11:30 AM', '01:00 PM', '02:30 PM', '04:00 PM', '05:30 PM', '07:00 PM'
  ];

  // Update if initial props change
  useEffect(() => {
    if (initialServiceId) setServiceId(initialServiceId);
    if (initialStylistId) setStylistId(initialStylistId);
    if (initialDate) setDate(initialDate);
    if (initialTimeSlot) setTimeSlot(initialTimeSlot);
  }, [initialServiceId, initialStylistId, initialDate, initialTimeSlot]);

  const selectedService = services.find((s) => s.id === serviceId) || null;
  const selectedStylist = stylists.find((s) => s.id === stylistId) || null;

  // Validation
  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!fullName.trim() || fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name (at least 2 letters)';
    }

    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!serviceId) {
      newErrors.serviceId = 'Please select a salon service';
    }

    if (!date) {
      newErrors.date = 'Please select an appointment date';
    }

    if (!timeSlot) {
      newErrors.timeSlot = 'Please choose a preferred time slot';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleApplyCoupon = (code: string) => {
    if (code === salonConfig.defaultCoupon.code) {
      setCouponCode(code);
      setDiscountPercent(salonConfig.defaultCoupon.discountPercent);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate network submission
    setTimeout(() => {
      const bookingId = `LUM-${Math.floor(1000 + Math.random() * 9000)}`;
      const basePrice = selectedService ? selectedService.price : 0;
      const discount = (basePrice * discountPercent) / 100;
      const total = basePrice - discount;

      const confirmData: BookingConfirmation = {
        bookingId,
        serviceName: selectedService?.name || 'Salon Ritual',
        stylistName: selectedStylist?.name || 'Any Senior Master Stylist',
        createdAt: new Date().toLocaleDateString('en-IN', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        appointment: {
          fullName,
          phone,
          email,
          serviceId,
          stylistId,
          date,
          timeSlot,
          notes,
          appliedCoupon: couponCode,
          discountAmount: discount,
          totalPrice: total
        }
      };

      setConfirmation(confirmData);
      setLastConfirmedBooking(confirmData);
      setIsSubmitting(false);

      if (onSuccess) onSuccess(confirmData);

      // Trigger Celebration Confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#B89B5E', '#B9827A', '#242222', '#F8F5F0']
        });
      } catch (err) {
        console.error(err);
      }
    }, 700);
  };

  // If Confirmed, render Confirmation View
  if (confirmation) {
    return (
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-beige-300 shadow-luxury max-w-2xl mx-auto text-center space-y-6 animate-fade-in">
        <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
          <CheckCircle className="w-8 h-8" />
        </div>

        <div>
          <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
            Booking Confirmed
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal-900 mt-3">
            We Look Forward To Welcoming You!
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-600 mt-1.5 max-w-md mx-auto">
            Your appointment has been registered in our salon calendar. A confirmation message has been queued.
          </p>
        </div>

        {/* Confirmation Details Card */}
        <div className="bg-beige-100/60 rounded-2xl p-5 border border-beige-300 text-left space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-beige-300">
            <span className="text-xs uppercase tracking-wider text-charcoal-500 font-medium">Booking ID</span>
            <span className="font-mono text-sm font-bold text-charcoal-900 bg-white px-2.5 py-0.5 rounded border border-beige-300">
              {confirmation.bookingId}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div>
              <span className="text-charcoal-500 block">Client Name</span>
              <span className="font-semibold text-charcoal-900">{confirmation.appointment.fullName}</span>
            </div>
            <div>
              <span className="text-charcoal-500 block">Phone</span>
              <span className="font-semibold text-charcoal-900">{confirmation.appointment.phone}</span>
            </div>
            <div>
              <span className="text-charcoal-500 block">Service</span>
              <span className="font-semibold text-charcoal-900">{confirmation.serviceName}</span>
            </div>
            <div>
              <span className="text-charcoal-500 block">Date & Time</span>
              <span className="font-semibold text-charcoal-900">
                {confirmation.appointment.date} at {confirmation.appointment.timeSlot}
              </span>
            </div>
            <div>
              <span className="text-charcoal-500 block">Preferred Stylist</span>
              <span className="font-semibold text-charcoal-900">{confirmation.stylistName}</span>
            </div>
            <div>
              <span className="text-charcoal-500 block">Estimated Amount</span>
              <span className="font-semibold text-charcoal-900">
                ₹{confirmation.appointment.totalPrice?.toLocaleString('en-IN')} (Pay at Salon)
              </span>
            </div>
          </div>
        </div>

        {/* Direct Action Buttons */}
        <div className="space-y-3 pt-2">
          {/* WhatsApp Confirmation Button */}
          <a
            href={salonConfig.getBookingWhatsAppLink({
              name: confirmation.appointment.fullName,
              serviceName: confirmation.serviceName,
              date: confirmation.appointment.date,
              timeSlot: confirmation.appointment.timeSlot,
              stylistName: confirmation.stylistName,
              bookingId: confirmation.bookingId
            })}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 px-6 rounded-full text-xs sm:text-sm font-semibold tracking-wider transition-colors shadow-soft"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Send Appointment Details via WhatsApp</span>
          </a>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href={`tel:${salonConfig.phoneRaw}`}
              className="flex items-center justify-center gap-2 border border-beige-400 hover:bg-beige-100 text-charcoal-800 py-3 rounded-full text-xs font-semibold tracking-wider transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-rose-500" />
              <span>Call Salon ({salonConfig.phoneDisplay})</span>
            </a>

            <button
              onClick={() => {
                setConfirmation(null);
                setFullName('');
                setPhone('');
                setEmail('');
                setNotes('');
              }}
              className="flex items-center justify-center gap-2 border border-beige-300 hover:bg-beige-100 text-charcoal-700 py-3 rounded-full text-xs font-medium tracking-wider transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Book Another</span>
            </button>
          </div>

          {onBackToHome && (
            <button
              onClick={onBackToHome}
              className="text-xs uppercase tracking-widest text-charcoal-500 hover:text-charcoal-900 font-semibold pt-2 inline-block underline underline-offset-4"
            >
              Back to Home Page
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 ${inModal ? 'lg:grid-cols-1' : 'lg:grid-cols-12'} gap-8 items-start`}>
      {/* Main Form Fields */}
      <div className={`${inModal ? 'w-full' : 'lg:col-span-7 xl:col-span-8'} bg-white rounded-3xl p-6 sm:p-8 border border-beige-300 shadow-soft`}>
        <div className="pb-6 border-b border-beige-200 mb-6">
          <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-rose-600 block mb-1">
            Reservations
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-charcoal-900 font-normal">
            Book Your Lumière Experience
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-600 mt-1">
            Select your desired ritual, artist preference, and convenient slot.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Step 1: Service Selection */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700">
              1. Select Service <span className="text-rose-600">*</span>
            </label>
            <div className="relative">
              <Sparkles className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <select
                value={serviceId}
                onChange={(e) => {
                  setServiceId(e.target.value);
                  if (errors.serviceId) setErrors({ ...errors, serviceId: '' });
                }}
                className={`w-full pl-10 pr-4 py-3 bg-beige-100/50 border rounded-xl text-xs sm:text-sm text-charcoal-900 focus:outline-none focus:ring-1 focus:ring-rose-500 appearance-none ${
                  errors.serviceId ? 'border-rose-500 bg-rose-50/30' : 'border-beige-300'
                }`}
              >
                <option value="">-- Choose a Salon Service --</option>
                <optgroup label="Hair Rituals">
                  {services.filter((s) => s.category === 'Hair').map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name} ({s.duration} min) — ₹{s.price}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Skin & Hydra Facials">
                  {services.filter((s) => s.category === 'Skin').map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name} ({s.duration} min) — ₹{s.price}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Nail Couture">
                  {services.filter((s) => s.category === 'Nails').map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name} ({s.duration} min) — ₹{s.price}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Makeup & Bridal">
                  {services.filter((s) => s.category === 'Makeup').map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name} ({s.duration} min) — ₹{s.price}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Beauty & Waxing">
                  {services.filter((s) => s.category === 'Beauty').map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name} ({s.duration} min) — ₹{s.price}
                    </option>
                  ))}
                </optgroup>
              </select>
            </div>
            {errors.serviceId && <p className="text-rose-600 text-xs mt-1">{errors.serviceId}</p>}
          </div>

          {/* Step 2: Stylist Preference */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700">
              2. Select Stylist <span className="text-charcoal-400 font-normal lowercase">(optional)</span>
            </label>
            <select
              value={stylistId}
              onChange={(e) => setStylistId(e.target.value)}
              className="w-full px-4 py-3 bg-beige-100/50 border border-beige-300 rounded-xl text-xs sm:text-sm text-charcoal-900 focus:outline-none focus:ring-1 focus:ring-rose-500"
            >
              <option value="">Any Available Senior Specialist</option>
              {stylists.map((st) => (
                <option key={st.id} value={st.id}>
                  {st.name} — {st.role} ({st.experience})
                </option>
              ))}
            </select>
          </div>

          {/* Step 3: Date & Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700">
                3. Date <span className="text-rose-600">*</span>
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  value={date}
                  onChange={(e) => {
                    setDate(e.target.value);
                    if (errors.date) setErrors({ ...errors, date: '' });
                  }}
                  className={`w-full pl-10 pr-4 py-3 bg-beige-100/50 border rounded-xl text-xs sm:text-sm text-charcoal-900 focus:outline-none focus:ring-1 focus:ring-rose-500 ${
                    errors.date ? 'border-rose-500 bg-rose-50/30' : 'border-beige-300'
                  }`}
                />
              </div>
              {errors.date && <p className="text-rose-600 text-xs mt-1">{errors.date}</p>}
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700">
                Time Slot <span className="text-rose-600">*</span>
              </label>
              <div className="relative">
                <Clock className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <select
                  value={timeSlot}
                  onChange={(e) => {
                    setTimeSlot(e.target.value);
                    if (errors.timeSlot) setErrors({ ...errors, timeSlot: '' });
                  }}
                  className={`w-full pl-10 pr-4 py-3 bg-beige-100/50 border rounded-xl text-xs sm:text-sm text-charcoal-900 focus:outline-none focus:ring-1 focus:ring-rose-500 ${
                    errors.timeSlot ? 'border-rose-500 bg-rose-50/30' : 'border-beige-300'
                  }`}
                >
                  <option value="">Select Time Slot</option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
              {errors.timeSlot && <p className="text-rose-600 text-xs mt-1">{errors.timeSlot}</p>}
            </div>
          </div>

          {/* Quick slot chips */}
          <div className="flex flex-wrap gap-2 pt-1">
            {timeSlots.map((slot) => (
              <button
                type="button"
                key={slot}
                onClick={() => setTimeSlot(slot)}
                className={`text-[11px] px-3 py-1.5 rounded-full border transition-all ${
                  timeSlot === slot
                    ? 'bg-charcoal-900 text-ivory-100 border-charcoal-900 font-semibold'
                    : 'bg-white text-charcoal-700 border-beige-300 hover:border-beige-400'
                }`}
              >
                {slot}
              </button>
            ))}
          </div>

          {/* Step 4: Personal Information */}
          <div className="pt-4 border-t border-beige-200 space-y-4">
            <h3 className="font-serif text-lg text-charcoal-900 font-medium">
              4. Contact Information
            </h3>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700 mb-1">
                Full Name <span className="text-rose-600">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  placeholder="e.g. Aditi Singhal"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                    if (errors.fullName) setErrors({ ...errors, fullName: '' });
                  }}
                  className={`w-full pl-10 pr-4 py-3 bg-beige-100/50 border rounded-xl text-xs sm:text-sm text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none focus:ring-1 focus:ring-rose-500 ${
                    errors.fullName ? 'border-rose-500 bg-rose-50/30' : 'border-beige-300'
                  }`}
                />
              </div>
              {errors.fullName && <p className="text-rose-600 text-xs mt-1">{errors.fullName}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700 mb-1">
                  Phone Number <span className="text-rose-600">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="tel"
                    placeholder="e.g. 98765 43210"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (errors.phone) setErrors({ ...errors, phone: '' });
                    }}
                    className={`w-full pl-10 pr-4 py-3 bg-beige-100/50 border rounded-xl text-xs sm:text-sm text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none focus:ring-1 focus:ring-rose-500 ${
                      errors.phone ? 'border-rose-500 bg-rose-50/30' : 'border-beige-300'
                    }`}
                  />
                </div>
                {errors.phone && <p className="text-rose-600 text-xs mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700 mb-1">
                  Email Address <span className="text-charcoal-400 font-normal lowercase">(optional)</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="email"
                    placeholder="aditi@example.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    className={`w-full pl-10 pr-4 py-3 bg-beige-100/50 border rounded-xl text-xs sm:text-sm text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none focus:ring-1 focus:ring-rose-500 ${
                      errors.email ? 'border-rose-500 bg-rose-50/30' : 'border-beige-300'
                    }`}
                  />
                </div>
                {errors.email && <p className="text-rose-600 text-xs mt-1">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700 mb-1">
                Special Requests or Notes <span className="text-charcoal-400 font-normal lowercase">(optional)</span>
              </label>
              <div className="relative">
                <MessageSquare className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-3.5 pointer-events-none" />
                <textarea
                  rows={2}
                  placeholder="e.g. Sensitive scalp, bridal consultation, preference for quiet session..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-beige-100/50 border border-beige-300 rounded-xl text-xs sm:text-sm text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none focus:ring-1 focus:ring-rose-500"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 bg-charcoal-900 hover:bg-charcoal-950 text-ivory-100 py-4 px-6 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] transition-all duration-200 shadow-soft hover:shadow-elevated disabled:opacity-60"
            >
              {isSubmitting ? (
                <span>Confirming Appointment...</span>
              ) : (
                <>
                  <span>Confirm Appointment</span>
                  <ArrowRight className="w-4 h-4 text-gold-400" />
                </>
              )}
            </button>
            <p className="text-[11px] text-charcoal-500 text-center mt-2.5">
              ✓ Free rescheduling up to 3 hours prior • No advance payment required
            </p>
          </div>
        </form>
      </div>

      {/* Summary Column */}
      <div className={`${inModal ? 'w-full mt-4' : 'lg:col-span-5 xl:col-span-4'}`}>
        <BookingSummary
          selectedService={selectedService}
          selectedStylist={selectedStylist}
          selectedDate={date}
          selectedTime={timeSlot}
          couponCode={couponCode}
          onApplyCoupon={handleApplyCoupon}
          discountPercent={discountPercent}
        />
      </div>
    </div>
  );
};
