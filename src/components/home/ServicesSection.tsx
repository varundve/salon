import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { services, serviceCategories } from '../../data/services';
import type { ServiceCategory } from '../../types';
import { ServiceCard } from '../common/ServiceCard';

export const ServicesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredServices =
    selectedCategory === 'All'
      ? services
      : services.filter((s) => s.category === (selectedCategory as ServiceCategory));

  return (
    <section id="services" className="py-20 lg:py-28 bg-ivory-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-600 block mb-2">
            COMPLETE MENU
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal-900 font-normal">
            Our Services
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 mt-3 font-normal">
            Everything you need to look and feel your best. Crafted with authentic professional formulations and master technique.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            {serviceCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-charcoal-900 text-ivory-100 shadow-soft'
                    : 'bg-beige-200/60 hover:bg-beige-200 text-charcoal-700 border border-beige-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Services Grid with Animated Transition */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredServices.length === 0 && (
          <div className="text-center py-16 text-charcoal-500 text-sm">
            No services found for this category.
          </div>
        )}
      </div>
    </section>
  );
};
