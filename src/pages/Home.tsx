import React from 'react';
import { Hero } from '../components/home/Hero';
import { QuickBookingBar } from '../components/home/QuickBookingBar';
import { AboutSection } from '../components/home/AboutSection';
import { MostLovedServices } from '../components/home/MostLovedServices';
import { ServicesSection } from '../components/home/ServicesSection';
import { SpecialPackages } from '../components/home/SpecialPackages';
import { OffersSection } from '../components/home/OffersSection';
import { BridalSection } from '../components/home/BridalSection';
import { BeforeAfterSection } from '../components/home/BeforeAfterSection';
import { StylistsSection } from '../components/home/StylistsSection';
import { GallerySection } from '../components/home/GallerySection';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { ContactSection } from '../components/home/ContactSection';

export const Home: React.FC = () => {
  return (
    <div className="space-y-0">
      <Hero />
      <QuickBookingBar />
      <AboutSection />
      <MostLovedServices />
      <ServicesSection />
      <SpecialPackages />
      <OffersSection />
      <BridalSection />
      <BeforeAfterSection />
      <StylistsSection />
      <GallerySection limit={8} />
      <WhyChooseUs />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
};
