import React, { useState } from 'react';
import { Tag, Check, Sparkles, Clock, Calendar as CalendarIcon, UserCheck } from 'lucide-react';
import type { Service, Stylist } from '../../types';
import { salonConfig } from '../../config/salonConfig';
import { useBooking } from '../../context/BookingContext';

interface BookingSummaryProps {
  selectedService: Service | null;
  selectedStylist: Stylist | null;
  selectedDate: string;
  selectedTime: string;
  couponCode: string;
  onApplyCoupon: (code: string) => void;
  discountPercent: number;
}

export const BookingSummary: React.FC<BookingSummaryProps> = ({
  selectedService,
  selectedStylist,
  selectedDate,
  selectedTime,
  couponCode,
  onApplyCoupon,
  discountPercent
}) => {
  const [inputCode, setInputCode] = useState(couponCode || '');
  const { showToast } = useBooking();

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCode.trim()) return;
    
    if (inputCode.trim().toUpperCase() === salonConfig.defaultCoupon.code) {
      onApplyCoupon(salonConfig.defaultCoupon.code);
      showToast('15% First-Visit Discount Applied!');
    } else {
      showToast('Invalid Coupon Code. Try LUMIERE15');
    }
  };

  const basePrice = selectedService ? selectedService.price : 0;
  const discountAmount = discountPercent > 0 ? Math.round((basePrice * discountPercent) / 100) : 0;
  const finalPrice = Math.max(0, basePrice - discountAmount);

  return (
    <div className="bg-beige-100/70 border border-beige-300 rounded-2xl p-5 sm:p-6 space-y-5">
      <div className="flex items-center justify-between pb-3 border-b border-beige-300">
        <h3 className="font-serif text-lg text-charcoal-900 font-medium">Appointment Summary</h3>
        <span className="text-[11px] uppercase tracking-wider font-semibold text-rose-600 bg-rose-100/60 px-2 py-0.5 rounded-full">
          Live Estimate
        </span>
      </div>

      {/* Selected Items Breakdown */}
      <div className="space-y-3.5 text-xs text-charcoal-700">
        {/* Service */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-2">
            <Sparkles className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-charcoal-900 text-sm">
                {selectedService ? selectedService.name : 'No service selected'}
              </p>
              {selectedService && (
                <p className="text-charcoal-500 flex items-center gap-1 mt-0.5">
                  <Clock className="w-3 h-3 text-charcoal-400" />
                  <span>{selectedService.duration} minutes</span>
                </p>
              )}
            </div>
          </div>
          <span className="font-serif text-sm font-semibold text-charcoal-900">
            {selectedService ? `₹${basePrice.toLocaleString('en-IN')}` : '—'}
          </span>
        </div>

        {/* Stylist */}
        {selectedStylist && (
          <div className="flex items-center justify-between text-xs pt-2 border-t border-beige-200">
            <span className="flex items-center gap-2 text-charcoal-600">
              <UserCheck className="w-3.5 h-3.5 text-rose-500" />
              Stylist:
            </span>
            <span className="font-medium text-charcoal-900">{selectedStylist.name}</span>
          </div>
        )}

        {/* Date & Time */}
        <div className="flex items-center justify-between text-xs pt-2 border-t border-beige-200">
          <span className="flex items-center gap-2 text-charcoal-600">
            <CalendarIcon className="w-3.5 h-3.5 text-charcoal-400" />
            Slot:
          </span>
          <span className="font-medium text-charcoal-900">
            {selectedDate ? selectedDate : 'Select date'} {selectedTime ? `at ${selectedTime}` : ''}
          </span>
        </div>
      </div>

      {/* Coupon Application Box */}
      <div className="pt-3 border-t border-beige-300">
        <form onSubmit={handleApply} className="flex gap-2">
          <div className="relative flex-1">
            <Tag className="w-3.5 h-3.5 text-charcoal-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Coupon (e.g. LUMIERE15)"
              value={inputCode}
              onChange={(e) => setInputCode(e.target.value.toUpperCase())}
              className="w-full pl-8 pr-3 py-2 text-xs uppercase bg-white border border-beige-300 rounded-lg text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none focus:ring-1 focus:ring-rose-500 focus:border-rose-500"
            />
          </div>
          <button
            type="submit"
            className="bg-charcoal-900 hover:bg-charcoal-800 text-ivory-100 text-xs px-3.5 py-2 rounded-lg font-medium transition-colors"
          >
            Apply
          </button>
        </form>

        {discountPercent > 0 && (
          <div className="mt-2 flex items-center justify-between text-[11px] text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1.5 rounded-lg">
            <span className="flex items-center gap-1 font-medium">
              <Check className="w-3.5 h-3.5" /> Code {salonConfig.defaultCoupon.code} applied ({discountPercent}% OFF)
            </span>
            <span className="font-semibold">-₹{discountAmount}</span>
          </div>
        )}
      </div>

      {/* Total Calculations */}
      <div className="pt-4 border-t border-beige-300 space-y-1.5">
        <div className="flex justify-between text-xs text-charcoal-600">
          <span>Subtotal</span>
          <span>₹{basePrice.toLocaleString('en-IN')}</span>
        </div>
        {discountAmount > 0 && (
          <div className="flex justify-between text-xs text-emerald-700 font-medium">
            <span>Special Discount</span>
            <span>- ₹{discountAmount.toLocaleString('en-IN')}</span>
          </div>
        )}
        <div className="flex justify-between text-xs text-charcoal-600">
          <span>Taxes & Sanitation Kit</span>
          <span className="text-emerald-700 font-medium">Complimentary</span>
        </div>
        <div className="flex justify-between items-baseline pt-2 border-t border-beige-300">
          <div>
            <span className="font-serif text-sm font-semibold text-charcoal-900 block">Total Payable</span>
            <span className="text-[10px] text-charcoal-500">Pay at salon after service</span>
          </div>
          <span className="font-serif text-2xl font-bold text-charcoal-900">
            ₹{finalPrice.toLocaleString('en-IN')}
          </span>
        </div>
      </div>
    </div>
  );
};
