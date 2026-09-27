import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Sparkles, X, ArrowUpDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { services, serviceCategories } from '../data/services';
import type { ServiceCategory } from '../types';
import { ServiceCard } from '../components/common/ServiceCard';

export const ServicesPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'popular' | 'price-asc' | 'price-desc' | 'duration'>('popular');

  // Keep state in sync with URL
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat && serviceCategories.includes(cat as any)) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === 'All') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category });
    }
  };

  const filteredAndSortedServices = useMemo(() => {
    let result = [...services];

    // Filter by category
    if (selectedCategory !== 'All') {
      result = result.filter((s) => s.category === (selectedCategory as ServiceCategory));
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q) ||
          s.category.toLowerCase().includes(q) ||
          (s.tags && s.tags.some((t) => t.toLowerCase().includes(q)))
      );
    }

    // Sorting
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'duration') {
      result.sort((a, b) => a.duration - b.duration);
    } else {
      // Popular (rating & review count)
      result.sort((a, b) => b.rating - a.rating || (b.reviewCount || 0) - (a.reviewCount || 0));
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="pt-28 pb-24 bg-ivory-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 text-rose-600 text-xs font-semibold uppercase tracking-[0.2em] mb-2">
            <Sparkles className="w-3.5 h-3.5 text-gold-500" />
            <span>SALON DIRECTORY</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl text-charcoal-900 font-normal">
            Services & Treatments
          </h1>
          <p className="text-sm sm:text-base text-charcoal-600 mt-3 font-normal">
            Explore our curated menu of hair styling, restorative skin facials, nail couture, and royal bridal rituals.
          </p>
        </div>

        {/* Controls Bar: Search, Category Tabs, Sort Filter */}
        <div className="bg-white rounded-3xl p-5 sm:p-7 border border-beige-300 shadow-soft mb-12 space-y-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search services (e.g. balayage, facial)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2.5 bg-beige-100/50 border border-beige-300 rounded-xl text-xs sm:text-sm text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none focus:ring-1 focus:ring-rose-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal-400 hover:text-charcoal-600"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sorting Dropdown */}
            <div className="flex items-center gap-2 w-full md:w-auto self-end md:self-auto">
              <span className="text-xs uppercase font-semibold tracking-wider text-charcoal-500 shrink-0">
                Sort By:
              </span>
              <div className="relative flex-1 md:w-56">
                <ArrowUpDown className="w-3.5 h-3.5 text-charcoal-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="w-full pl-8 pr-4 py-2.5 bg-beige-100/50 border border-beige-300 rounded-xl text-xs font-medium text-charcoal-900 focus:outline-none focus:ring-1 focus:ring-rose-500"
                >
                  <option value="popular">Most Popular</option>
                  <option value="price-asc">Price: Low → High</option>
                  <option value="price-desc">Price: High → Low</option>
                  <option value="duration">Duration: Shortest First</option>
                </select>
              </div>
            </div>

          </div>

          {/* Category Filter Tabs */}
          <div className="pt-2 border-t border-beige-200 flex flex-wrap items-center gap-2">
            {serviceCategories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-charcoal-900 text-ivory-100 shadow-soft'
                    : 'bg-beige-100 hover:bg-beige-200 text-charcoal-700 border border-beige-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between text-xs text-charcoal-500 mb-6 px-1">
          <span>
            Showing <strong className="text-charcoal-900">{filteredAndSortedServices.length}</strong> services
            {selectedCategory !== 'All' ? ` in ${selectedCategory}` : ''}
            {searchQuery ? ` matching "${searchQuery}"` : ''}
          </span>
          {(searchQuery || selectedCategory !== 'All') && (
            <button
              onClick={() => {
                setSearchQuery('');
                handleCategoryChange('All');
              }}
              className="text-rose-600 hover:underline font-medium"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Dynamic Services Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredAndSortedServices.map((service) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredAndSortedServices.length === 0 && (
          <div className="bg-white rounded-3xl p-12 text-center border border-beige-300 shadow-soft max-w-lg mx-auto my-12 space-y-4">
            <div className="w-14 h-14 rounded-full bg-beige-200 text-charcoal-500 flex items-center justify-center mx-auto">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-medium text-charcoal-900">
              No services found
            </h3>
            <p className="text-xs text-charcoal-600 leading-relaxed">
              We couldn't find any treatment matching "{searchQuery}". Try selecting another category or resetting your search.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                handleCategoryChange('All');
              }}
              className="inline-flex items-center gap-1.5 bg-charcoal-900 text-ivory-100 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shadow-soft"
            >
              Reset Search & Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
