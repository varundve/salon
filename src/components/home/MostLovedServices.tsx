import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import { services } from '../../data/services';
import { ServiceCard } from '../common/ServiceCard';

export const MostLovedServices: React.FC = () => {
  // Highlight 4 top loved services
  const featuredIds = ['haircut', 'balayage', 'hydra-facial', 'bridal-makeup'];
  const featuredServices = services.filter((s) => featuredIds.includes(s.id));

  return (
    <section className="py-20 bg-beige-100/50 border-y border-beige-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-rose-600 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-gold-500" />
              <span>CLIENT FAVORITES</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-normal">
              Most Loved Services
            </h2>
            <p className="text-sm text-charcoal-600 mt-2 max-w-xl">
              Our signature rituals celebrated by clients for impeccable craft, long-lasting results, and restorative calm.
            </p>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-charcoal-800 hover:text-rose-600 group self-start md:self-auto transition-colors"
          >
            <span>View All Services Directory</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredServices.map((service) => (
            <ServiceCard key={service.id} service={service} featured={true} />
          ))}
        </div>

      </div>
    </section>
  );
};
