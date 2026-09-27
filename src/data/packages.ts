import type { Package } from '../types';

export const packages: Package[] = [
  {
    id: "glow-package",
    name: "Glow & Revitalize Package",
    tagline: "Essential radiance head-to-toe refresh",
    price: 1999,
    originalPrice: 2899,
    duration: "2.5 Hours",
    includes: [
      "Deep Cleansing Facial Cleanup",
      "O3+ Radiant Glow Facial",
      "Signature Rose Spa Manicure",
      "Organic Aromatherapy Pedicure",
      "Herbal Eyebrow & Upper Lip Threading"
    ],
    isPopular: false,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bridal-glow",
    name: "Bridal Glow Signature Ritual",
    tagline: "The complete pre-wedding glow & trial experience",
    price: 4999,
    originalPrice: 7500,
    duration: "3.5 Hours",
    includes: [
      "Full Bridal Makeup Consultation & Trial",
      "Hydra Glow Skin Infusion Facial",
      "Bridal Hair Styling & Texture Prep",
      "Luxury Rose Petal Manicure",
      "Aromatherapy Spa Pedicure",
      "Complimentary Eyebrow Tinting"
    ],
    isPopular: true,
    badge: "MOST POPULAR",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "hair-revival",
    name: "Hair Revival & Nourish",
    tagline: "Deep repair for dry, colored, or heat-styled hair",
    price: 2499,
    originalPrice: 3800,
    duration: "2 Hours",
    includes: [
      "Kérastase Luxury Micro-Mist Hair Spa",
      "Intensive Bond Repair Treatment",
      "Split-End Trim & Styling Consultation",
      "Signature Bouncy Blowdry & Serum Seal"
    ],
    isPopular: false,
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "pre-bridal-royale",
    name: "Pre-Bridal Royale Indulgence",
    tagline: "The definitive bespoke luxury journey for the modern bride",
    price: 8999,
    originalPrice: 12500,
    duration: "4.5 Hours",
    includes: [
      "Diamond Microdermabrasion Full Body Polish",
      "7-Step Medical Hydra Facial",
      "Full Body Rica White Chocolate Waxing",
      "Deluxe Gel Polish Manicure & Pedicure",
      "Kérastase Caviar Hair Spa & Blowout",
      "Bridal Consultation & Personalized Routine Chart"
    ],
    isPopular: false,
    badge: "LUXURY SUITE",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
  }
];
