import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';
import { testimonials } from '../../data/testimonials';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const activeReview = testimonials[currentIndex];

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-beige-100/60 border-y border-beige-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 text-rose-600 text-xs font-semibold uppercase tracking-[0.2em] mb-2">
            <Sparkles className="w-3.5 h-3.5 text-gold-500" />
            <span>VERIFIED EXPERIENCES</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal-900 font-normal">
            Customer Reviews
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 mt-3 font-normal">
            Real feedback from valued patrons across Kanpur who trust Lumière for their most cherished occasions.
          </p>
        </div>

        {/* Testimonials Carousel Box */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-3xl p-8 sm:p-12 shadow-luxury border border-beige-300">
            
            {/* Watermark Quote Icon */}
            <Quote className="absolute top-6 right-8 w-16 h-16 text-beige-200/80 pointer-events-none -z-0" />

            <div className="relative z-10 space-y-6">
              
              {/* Rating Stars & Service Tag */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(activeReview.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                  ))}
                  <span className="ml-2 text-xs font-bold text-charcoal-800">5.0 / 5.0</span>
                </div>

                <span className="text-xs uppercase tracking-wider font-semibold text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
                  Service: {activeReview.service}
                </span>
              </div>

              {/* Review Text */}
              <blockquote className="font-serif text-lg sm:text-2xl text-charcoal-900 font-normal leading-relaxed italic">
                "{activeReview.review}"
              </blockquote>

              {/* Reviewer Details */}
              <div className="pt-4 border-t border-beige-200 flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <img
                    src={activeReview.image}
                    alt={activeReview.name}
                    className="w-12 h-12 rounded-full object-cover border border-beige-300 shadow-sm"
                  />
                  <div>
                    <h4 className="font-serif text-base font-medium text-charcoal-900">
                      {activeReview.name}
                    </h4>
                    <p className="text-xs text-charcoal-500">
                      {activeReview.location} • {activeReview.date}
                    </p>
                  </div>
                </div>

                {/* Carousel Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous testimonial"
                    className="w-10 h-10 rounded-full border border-beige-300 hover:bg-beige-100 text-charcoal-800 flex items-center justify-center transition-colors active:scale-95"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next testimonial"
                    className="w-10 h-10 rounded-full border border-beige-300 hover:bg-beige-100 text-charcoal-800 flex items-center justify-center transition-colors active:scale-95"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center items-center gap-2 mt-8 pt-4 border-t border-beige-200/50">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    currentIndex === idx ? 'w-8 bg-charcoal-900' : 'w-2 bg-beige-300 hover:bg-beige-400'
                  }`}
                />
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
