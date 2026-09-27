import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import type { GalleryItem } from '../../types';

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev
}) => {
  const currentItem = items[currentIndex];

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isOpen) return;
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowRight') onNext();
    if (e.key === 'ArrowLeft') onPrev();
  }, [isOpen, onClose, onNext, onPrev]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !currentItem) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-charcoal-950/90 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.25 }}
          className="relative max-w-5xl w-full max-h-[90vh] bg-charcoal-900 rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col border border-beige-300/20"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-charcoal-800 bg-charcoal-950/40">
            <div className="flex items-center gap-2 text-ivory-200 text-xs">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span className="uppercase tracking-widest font-medium text-gold-400">
                {currentItem.category}
              </span>
              <span className="text-charcoal-400">•</span>
              <span className="text-charcoal-300">
                {currentIndex + 1} of {items.length}
              </span>
            </div>

            <button
              onClick={onClose}
              className="text-ivory-300 hover:text-white p-1 rounded-full hover:bg-charcoal-800 transition-colors"
              aria-label="Close Lightbox (Esc)"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Image Canvas with Nav Arrows */}
          <div className="relative flex-1 min-h-[350px] max-h-[68vh] flex items-center justify-center bg-black/40 overflow-hidden">
            <img
              src={currentItem.image}
              alt={currentItem.title}
              className="max-h-[68vh] w-auto max-w-full object-contain mx-auto select-none"
            />

            {/* Left Nav Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-charcoal-900/80 hover:bg-charcoal-800 text-white flex items-center justify-center transition-all border border-beige-300/20 shadow-lg active:scale-95"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Nav Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-charcoal-900/80 hover:bg-charcoal-800 text-white flex items-center justify-center transition-all border border-beige-300/20 shadow-lg active:scale-95"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Caption Bar */}
          <div className="p-4 sm:p-5 bg-charcoal-900 text-ivory-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-charcoal-800">
            <div>
              <h3 className="font-serif text-lg text-ivory-100">{currentItem.title}</h3>
              {currentItem.caption && (
                <p className="text-xs text-charcoal-300 mt-0.5">{currentItem.caption}</p>
              )}
            </div>
            <div className="text-[11px] text-charcoal-400 font-mono hidden sm:block">
              Use ← → keys to browse, Esc to close
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
