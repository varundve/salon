import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Sparkles, ArrowLeft, ShieldCheck, Clock, Award } from 'lucide-react';
import { AppointmentForm } from '../components/booking/AppointmentForm';

export const BookingPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const initialServiceId = searchParams.get('service') || '';
  const initialStylistId = searchParams.get('stylist') || '';
  const initialDate = searchParams.get('date') || '';
  const initialTime = searchParams.get('time') || '';

  return (
    <div className="pt-28 pb-24 bg-ivory-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back navigation & Page Title */}
        <div className="mb-8">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-charcoal-600 hover:text-charcoal-900 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to previous page</span>
          </button>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 text-rose-600 text-xs font-semibold uppercase tracking-[0.2em] mb-2">
                <Sparkles className="w-3.5 h-3.5 text-gold-500" />
                <span>ONLINE RESERVATIONS</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal-900 font-normal">
                Reserve Your Appointment
              </h1>
            </div>

            {/* Quick Guarantees */}
            <div className="flex items-center gap-4 text-xs text-charcoal-600">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Zero Advance Payment</span>
              </span>
              <span className="text-charcoal-300">•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-rose-500" />
                <span>Instant WhatsApp Confirm</span>
              </span>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <AppointmentForm
          initialServiceId={initialServiceId}
          initialStylistId={initialStylistId}
          initialDate={initialDate}
          initialTimeSlot={initialTime}
          onBackToHome={() => navigate('/')}
        />

        {/* Salon Assurance Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-beige-300">
          <div className="bg-white/80 p-5 rounded-2xl border border-beige-300/80 flex items-start gap-3">
            <Award className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-900">
                100% Genuine Products
              </h4>
              <p className="text-xs text-charcoal-600 mt-0.5">
                Exclusively using Kérastase, L'Oréal Professionnel, and Dermalogica.
              </p>
            </div>
          </div>

          <div className="bg-white/80 p-5 rounded-2xl border border-beige-300/80 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-900">
                Hospital-Grade Sanitation
              </h4>
              <p className="text-xs text-charcoal-600 mt-0.5">
                Disinfected stations and autoclaved tools for your complete wellness.
              </p>
            </div>
          </div>

          <div className="bg-white/80 p-5 rounded-2xl border border-beige-300/80 flex items-start gap-3">
            <Clock className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-900">
                Flexible Rescheduling
              </h4>
              <p className="text-xs text-charcoal-600 mt-0.5">
                Modify or cancel anytime via WhatsApp up to 3 hours prior to your slot.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
