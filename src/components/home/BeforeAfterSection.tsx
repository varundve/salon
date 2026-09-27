import React, { useState, useRef, useCallback } from 'react';
import { MoveHorizontal, ArrowRight } from 'lucide-react';
import { beforeAfterItems } from '../../data/beforeAfter';
import { useBooking } from '../../context/BookingContext';

export const BeforeAfterSection: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 - 100
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const { openBookingModal } = useBooking();

  const currentItem = beforeAfterItems[selectedIdx];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    const percentage = Math.min(Math.max((x / width) * 100, 0), 100);
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    handleMove(e.clientX);
  };

  const handleMouseDown = () => {
    isDraggingRef.current = true;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  return (
    <section className="py-20 lg:py-28 bg-ivory-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-600 block mb-2">
            REAL CLIENT RESULTS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal-900 font-normal">
            Before & After
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 mt-3 font-normal">
            Drag the slider horizontally to reveal true hair, makeup, and bridal transformations created at Lumière.
          </p>

          {/* Transformation Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            {beforeAfterItems.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => {
                  setSelectedIdx(idx);
                  setSliderPosition(50);
                }}
                className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                  selectedIdx === idx
                    ? 'bg-charcoal-900 text-ivory-100 shadow-soft'
                    : 'bg-beige-200/60 hover:bg-beige-200 text-charcoal-700 border border-beige-300'
                }`}
              >
                {item.category}: {item.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Comparison Slider Container */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-4 sm:p-6 rounded-3xl shadow-luxury border border-beige-300">
            
            {/* Slider Visual Box */}
            <div
              ref={containerRef}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden cursor-ew-resize select-none bg-charcoal-950"
            >
              {/* After Image (Full Background) */}
              <img
                src={currentItem.afterImage}
                alt="After transformation"
                className="absolute inset-0 w-full h-full object-cover"
                draggable={false}
              />
              <span className="absolute bottom-4 right-4 bg-charcoal-900/80 backdrop-blur-md text-gold-400 font-semibold text-xs uppercase tracking-widest px-3 py-1 rounded-full border border-gold-500/40 z-10">
                After
              </span>

              {/* Before Image (Clipped Left Layer) */}
              <div
                className="absolute inset-y-0 left-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={currentItem.beforeImage}
                  alt="Before transformation"
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{
                    width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                    height: '100%'
                  }}
                  draggable={false}
                />
                <span className="absolute bottom-4 left-4 bg-charcoal-900/80 backdrop-blur-md text-ivory-200 font-semibold text-xs uppercase tracking-widest px-3 py-1 rounded-full border border-charcoal-700 z-10">
                  Before
                </span>
              </div>

              {/* Divider Handle Line */}
              <div
                className="absolute inset-y-0 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Circular Center Grip */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-charcoal-900 text-gold-400 border-2 border-white shadow-2xl flex items-center justify-center pointer-events-auto cursor-grab active:cursor-grabbing">
                  <MoveHorizontal className="w-5 h-5" />
                </div>
              </div>

            </div>

            {/* Transformation Description Info */}
            <div className="pt-6 px-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-rose-600 block">
                  Service: {currentItem.service}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-charcoal-900 font-medium mt-0.5">
                  {currentItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-600 mt-1 max-w-2xl leading-relaxed">
                  {currentItem.description}
                </p>
              </div>

              <button
                onClick={() => openBookingModal()}
                className="self-start sm:self-auto shrink-0 inline-flex items-center gap-2 bg-charcoal-900 hover:bg-charcoal-950 text-ivory-100 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shadow-soft"
              >
                <span>Book Similar</span>
                <ArrowRight className="w-3.5 h-3.5 text-gold-400" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
