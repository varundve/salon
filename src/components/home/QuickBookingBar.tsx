import React, { useState } from 'react';
import { Calendar, Clock, Sparkles, User, Phone, CheckCircle2, ArrowRight, X } from 'lucide-react';
import { services } from '../../data/services';
import { useBooking } from '../../context/BookingContext';

export const QuickBookingBar: React.FC = () => {
  const { openBookingModal } = useBooking();

  const [serviceId, setServiceId] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState('11:30 AM');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const [errorMsg, setErrorMsg] = useState('');
  const [availabilityResult, setAvailabilityResult] = useState<{
    available: boolean;
    serviceName: string;
    date: string;
    time: string;
    name: string;
    phone: string;
  } | null>(null);

  const timeOptions = [
    '10:30 AM', '11:30 AM', '01:00 PM', '02:30 PM', '04:00 PM', '05:30 PM', '07:00 PM'
  ];

  const handleCheckAvailability = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!serviceId) {
      setErrorMsg('Please select a service first.');
      return;
    }
    if (!name.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }
    if (!phone.trim() || phone.replace(/\D/g, '').length < 10) {
      setErrorMsg('Please enter a valid 10-digit phone number.');
      return;
    }

    const selected = services.find((s) => s.id === serviceId);
    setAvailabilityResult({
      available: true,
      serviceName: selected?.name || 'Selected Ritual',
      date,
      time,
      name,
      phone
    });
  };

  return (
    <section className="relative -mt-6 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-elevated border border-beige-300">
        
        {/* Header bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-beige-200">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
            <h2 className="font-serif text-lg text-charcoal-900 font-medium">
              Quick Appointment Reservation
            </h2>
          </div>
          <span className="text-xs text-charcoal-500">
            Instant slot confirmation • No advance payment
          </span>
        </div>

        {/* Form Fields */}
        <form onSubmit={handleCheckAvailability}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 items-end">
            
            {/* Field 1: Service */}
            <div className="space-y-1.5">
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-charcoal-600">
                Select Service
              </label>
              <div className="relative">
                <Sparkles className="w-4 h-4 text-charcoal-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <select
                  value={serviceId}
                  onChange={(e) => setServiceId(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 bg-beige-100/50 border border-beige-300 rounded-xl text-xs text-charcoal-900 focus:outline-none focus:ring-1 focus:ring-rose-500"
                >
                  <option value="">Choose Service</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name} (₹{s.price})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Field 2: Date */}
            <div className="space-y-1.5">
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-charcoal-600">
                Select Date
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 text-charcoal-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 bg-beige-100/50 border border-beige-300 rounded-xl text-xs text-charcoal-900 focus:outline-none focus:ring-1 focus:ring-rose-500"
                />
              </div>
            </div>

            {/* Field 3: Time */}
            <div className="space-y-1.5">
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-charcoal-600">
                Select Time
              </label>
              <div className="relative">
                <Clock className="w-4 h-4 text-charcoal-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 bg-beige-100/50 border border-beige-300 rounded-xl text-xs text-charcoal-900 focus:outline-none focus:ring-1 focus:ring-rose-500"
                >
                  {timeOptions.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Field 4: Name & Phone */}
            <div className="space-y-1.5">
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-charcoal-600">
                Your Name & Phone
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                <div className="relative">
                  <User className="w-3.5 h-3.5 text-charcoal-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-7 pr-2 py-2.5 bg-beige-100/50 border border-beige-300 rounded-xl text-xs text-charcoal-900 focus:outline-none focus:ring-1 focus:ring-rose-500"
                  />
                </div>
                <div className="relative">
                  <Phone className="w-3.5 h-3.5 text-charcoal-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="tel"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-7 pr-2 py-2.5 bg-beige-100/50 border border-beige-300 rounded-xl text-xs text-charcoal-900 focus:outline-none focus:ring-1 focus:ring-rose-500"
                  />
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <button
                type="submit"
                className="w-full h-[42px] bg-charcoal-900 hover:bg-charcoal-950 text-ivory-100 font-medium text-xs uppercase tracking-wider rounded-xl transition-all shadow-soft flex items-center justify-center gap-1.5"
              >
                <span>Check Availability</span>
                <ArrowRight className="w-3.5 h-3.5 text-gold-400" />
              </button>
            </div>
          </div>
        </form>

        {errorMsg && (
          <p className="text-rose-600 text-xs mt-3 pl-1 font-medium">{errorMsg}</p>
        )}

        {/* Availability Result Banner */}
        {availabilityResult && (
          <div className="mt-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-fade-in">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs sm:text-sm font-semibold text-emerald-950">
                  Slot Available for {availabilityResult.serviceName}!
                </p>
                <p className="text-xs text-emerald-800 mt-0.5">
                  Requested for <span className="font-semibold">{availabilityResult.date}</span> at <span className="font-semibold">{availabilityResult.time}</span> for {availabilityResult.name}.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 self-end sm:self-auto">
              <button
                onClick={() =>
                  openBookingModal({
                    serviceId,
                    date,
                    timeSlot: time,
                  })
                }
                className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-wider transition-colors shadow-sm"
              >
                Confirm Slot
              </button>
              <button
                onClick={() => setAvailabilityResult(null)}
                className="text-emerald-700 hover:text-emerald-950 p-1"
                aria-label="Dismiss result"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
