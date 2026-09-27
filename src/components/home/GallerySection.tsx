import React, { useState } from 'react';
import { Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryItems, galleryCategories } from '../../data/gallery';
import type { GalleryItem } from '../../types';
import { Lightbox } from '../common/Lightbox';

interface GallerySectionProps {
  limit?: number;
  showAllLink?: boolean;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ limit }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = (
    selectedCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory)
  ).slice(0, limit || galleryItems.length);

  const handleOpenLightbox = (item: GalleryItem) => {
    const idx = filteredItems.findIndex((i) => i.id === item.id);
    if (idx !== -1) setLightboxIndex(idx);
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-beige-100/50 border-y border-beige-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-600 block mb-2">
            VISUAL PORTFOLIO
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal-900 font-normal">
            The Lumière Gallery
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 mt-3 font-normal">
            A visual glimpse into our salon interior, precision balayage, festive nail couture, and royal bridal artistry.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            {galleryCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-charcoal-900 text-ivory-100 shadow-soft'
                    : 'bg-white hover:bg-beige-200 text-charcoal-700 border border-beige-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => handleOpenLightbox(item)}
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-beige-200 shadow-soft cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-charcoal-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-ivory-100">
                  <div className="self-end bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider text-white">
                    {item.category}
                  </div>

                  <div>
                    <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-gold-400 font-semibold mb-1">
                      <Eye className="w-3.5 h-3.5" />
                      <span>View</span>
                    </span>
                    <h4 className="font-serif text-base text-white font-medium leading-snug">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <Lightbox
          items={filteredItems}
          currentIndex={lightboxIndex ?? 0}
          isOpen={lightboxIndex !== null}
          onClose={() => setLightboxIndex(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />

      </div>
    </section>
  );
};
