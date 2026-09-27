import React from 'react';
import { Award, Sparkles, HeartHandshake, ShieldCheck, CalendarCheck, Smile } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Award,
      title: 'Expert Professionals',
      desc: 'Our team comprises academy-certified master colorists, bridal makeup artists, and clinical skin aestheticians.'
    },
    {
      icon: Sparkles,
      title: 'Premium Products',
      desc: 'We exclusively utilize genuine professional formulations from Kérastase, L\'Oréal, Olaplex, Dermalogica & O3+.'
    },
    {
      icon: HeartHandshake,
      title: 'Personalized Service',
      desc: 'Unhurried one-on-one consultations tailored precisely to your skin tone, hair texture, and individual lifestyle.'
    },
    {
      icon: ShieldCheck,
      title: 'Hygienic Environment',
      desc: 'Hospital-grade tool autoclaving, single-use sanitary kits, and sterilized stations for uncompromising safety.'
    },
    {
      icon: CalendarCheck,
      title: 'Easy Booking',
      desc: 'Seamless real-time online slot reservation with instant WhatsApp confirmation and zero cancellation penalties.'
    },
    {
      icon: Smile,
      title: 'Customer First',
      desc: 'Dedicated to your complete comfort with complimentary herbal teas, relaxing music, and satisfaction guarantee.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-ivory-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-600 block mb-2">
            THE LUMIÈRE DIFFERENCE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal-900 font-normal">
            Why Choose Us
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 mt-3 font-normal">
            Elevating your beauty experience through craftsmanship, uncompromising hygiene, and heartfelt hospitality.
          </p>
        </div>

        {/* 6 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border border-beige-300 shadow-soft hover:shadow-elevated transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-beige-200/80 group-hover:bg-charcoal-900 group-hover:text-gold-400 text-charcoal-900 flex items-center justify-center transition-colors duration-300 mb-5">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif text-xl font-normal text-charcoal-900 mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-normal">
                    {feature.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-beige-200/60">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-charcoal-400">
                    Lumière Standard #{idx + 1}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
