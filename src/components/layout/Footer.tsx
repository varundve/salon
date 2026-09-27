import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowUpRight, Heart } from 'lucide-react';
import { salonConfig } from '../../config/salonConfig';
import { InstagramIcon, FacebookIcon, YoutubeIcon } from '../common/SocialIcons';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal-900 text-ivory-100 pt-16 pb-24 md:pb-12 border-t border-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-charcoal-800">
          
          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-2 space-y-4 pr-0 lg:pr-8">
            <Link to="/" className="inline-block group">
              <span className="font-serif text-3xl tracking-[0.2em] uppercase text-ivory-100 group-hover:text-rose-400 transition-colors">
                {salonConfig.name}
              </span>
              <p className="text-[10px] uppercase tracking-[0.3em] text-beige-300 font-medium mt-1">
                SALON & BEAUTY STUDIO
              </p>
            </Link>
            <p className="text-charcoal-200 text-sm leading-relaxed max-w-sm">
              "{salonConfig.tagline}" An editorial sanctuary for bespoke hair design, skin wellness, and royal bridal couture in the heart of Kanpur.
            </p>
            
            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={salonConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-charcoal-800 flex items-center justify-center text-ivory-200 hover:text-white hover:bg-rose-600 transition-all"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={salonConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-charcoal-800 flex items-center justify-center text-ivory-200 hover:text-white hover:bg-rose-600 transition-all"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={salonConfig.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-charcoal-800 flex items-center justify-center text-ivory-200 hover:text-white hover:bg-rose-600 transition-all"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-serif text-sm tracking-[0.16em] uppercase text-gold-400 mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-charcoal-200">
              <li>
                <Link to="/" className="hover:text-ivory-100 transition-colors flex items-center gap-1 group">
                  <span>Home</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <a href="/#about" className="hover:text-ivory-100 transition-colors flex items-center gap-1 group">
                  <span>About Lumière</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <Link to="/services" className="hover:text-ivory-100 transition-colors flex items-center gap-1 group">
                  <span>Services Directory</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <a href="/#packages" className="hover:text-ivory-100 transition-colors flex items-center gap-1 group">
                  <span>Special Packages</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-ivory-100 transition-colors flex items-center gap-1 group">
                  <span>Visual Gallery</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/booking" className="hover:text-ivory-100 transition-colors flex items-center gap-1 group">
                  <span>Book Appointment</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services Menu */}
          <div>
            <h4 className="font-serif text-sm tracking-[0.16em] uppercase text-gold-400 mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-charcoal-200">
              <li>
                <Link to="/services?category=Hair" className="hover:text-ivory-100 transition-colors">
                  Hair Design & Balayage
                </Link>
              </li>
              <li>
                <Link to="/services?category=Skin" className="hover:text-ivory-100 transition-colors">
                  Hydra Facial & Skin Care
                </Link>
              </li>
              <li>
                <Link to="/services?category=Nails" className="hover:text-ivory-100 transition-colors">
                  Spa Manicure & Nail Art
                </Link>
              </li>
              <li>
                <Link to="/services?category=Makeup" className="hover:text-ivory-100 transition-colors">
                  Bridal HD & Glam Makeup
                </Link>
              </li>
              <li>
                <Link to="/services?category=Beauty" className="hover:text-ivory-100 transition-colors">
                  Rica Waxing & Threading
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Salon Hours & Location */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm tracking-[0.16em] uppercase text-gold-400 mb-4">
              Visit Studio
            </h4>
            
            <div className="flex items-start gap-2.5 text-xs text-charcoal-200">
              <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              <span>{salonConfig.address.full}</span>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-charcoal-200">
              <Phone className="w-4 h-4 text-rose-400 shrink-0" />
              <a href={`tel:${salonConfig.phoneRaw}`} className="hover:text-white">
                {salonConfig.phoneDisplay}
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-charcoal-200">
              <Mail className="w-4 h-4 text-rose-400 shrink-0" />
              <a href={`mailto:${salonConfig.email}`} className="hover:text-white">
                {salonConfig.email}
              </a>
            </div>

            <div className="pt-2 border-t border-charcoal-800 text-xs text-charcoal-400 space-y-1">
              <div className="flex items-center gap-1.5 text-ivory-200 font-medium">
                <Clock className="w-3.5 h-3.5 text-gold-400" />
                <span>Hours of Elegance:</span>
              </div>
              <p>Mon – Sat: 10:00 AM – 8:00 PM</p>
              <p>Sun: 11:00 AM – 6:00 PM</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-charcoal-400 gap-3">
          <p>© 2026 {salonConfig.fullName}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Crafted with <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> for luxury salon experiences.
          </p>
        </div>
      </div>
    </footer>
  );
};
