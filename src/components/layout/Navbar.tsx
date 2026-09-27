import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Calendar, Phone, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { salonConfig } from '../../config/salonConfig';
import { useBooking } from '../../context/BookingContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { openBookingModal } = useBooking();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about', hash: '#about' },
    { name: 'Services', path: '/services' },
    { name: 'Packages', path: '/#packages', hash: '#packages' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Stylists', path: '/#stylists', hash: '#stylists' },
    { name: 'Reviews', path: '/#reviews', hash: '#reviews' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleNavClick = (link: { name: string; path: string; hash?: string }) => {
    setMobileMenuOpen(false);
    if (link.hash) {
      if (location.pathname !== '/') {
        navigate('/' + link.hash);
      } else {
        const element = document.querySelector(link.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav py-3.5 shadow-soft border-b border-beige-200/60'
            : 'bg-ivory-100/90 backdrop-blur-sm py-5 border-b border-beige-200/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group flex flex-col items-start focus:outline-none">
            <span className="font-serif text-2xl sm:text-3xl font-normal tracking-[0.2em] text-charcoal-900 group-hover:text-rose-500 transition-colors uppercase">
              {salonConfig.name}
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-charcoal-600 font-medium">
              SALON & BEAUTY STUDIO
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7 xl:space-x-8">
            {navLinks.map((link) => {
              const isActive =
                (!link.hash && location.pathname === link.path) ||
                (link.hash && location.hash === link.hash);
              
              if (link.hash) {
                return (
                  <a
                    key={link.name}
                    href={link.hash}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link);
                    }}
                    className={`relative text-xs uppercase tracking-[0.18em] transition-colors py-1 ${
                      isActive
                        ? 'text-rose-600 font-semibold'
                        : 'text-charcoal-700 hover:text-charcoal-900 font-medium'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-rose-500 rounded-full" />
                    )}
                  </a>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative text-xs uppercase tracking-[0.18em] transition-colors py-1 ${
                    location.pathname === link.path
                      ? 'text-rose-600 font-semibold'
                      : 'text-charcoal-700 hover:text-charcoal-900 font-medium'
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-rose-500 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3.5">
            {/* WhatsApp Direct Icon */}
            <a
              href={salonConfig.getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Lumière on WhatsApp"
              className="w-10 h-10 rounded-full border border-beige-300 flex items-center justify-center text-charcoal-700 hover:text-emerald-700 hover:border-emerald-500/40 hover:bg-emerald-50/50 transition-all duration-200"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
            </a>

            {/* Primary CTA: Book Appointment */}
            <button
              onClick={() => openBookingModal()}
              className="inline-flex items-center gap-2 bg-charcoal-900 hover:bg-charcoal-800 text-ivory-100 px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-[0.16em] transition-all duration-200 shadow-soft hover:shadow-elevated active:scale-[0.98]"
            >
              <Calendar className="w-3.5 h-3.5 text-gold-400" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={() => openBookingModal()}
              className="bg-charcoal-900 text-ivory-100 text-[11px] font-medium tracking-wider uppercase px-3 py-1.5 rounded-full"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-charcoal-800 hover:text-charcoal-950 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-In Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-charcoal-950/40 backdrop-blur-sm z-50 lg:hidden"
            />

            {/* Slide Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="fixed top-0 right-0 bottom-0 w-[82%] max-w-sm bg-ivory-100 z-50 shadow-2xl flex flex-col justify-between p-6 overflow-y-auto lg:hidden"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-beige-300">
                  <div className="flex flex-col">
                    <span className="font-serif text-xl tracking-[0.2em] uppercase text-charcoal-900">
                      {salonConfig.name}
                    </span>
                    <span className="text-[9px] uppercase tracking-[0.25em] text-charcoal-600">
                      SALON & BEAUTY STUDIO
                    </span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-charcoal-700 hover:text-charcoal-900 rounded-full hover:bg-beige-200"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Links */}
                <div className="flex flex-col space-y-4 py-8">
                  {navLinks.map((link) => (
                    <div key={link.name}>
                      {link.hash ? (
                        <a
                          href={link.hash}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavClick(link);
                          }}
                          className="block text-base uppercase tracking-[0.16em] text-charcoal-800 hover:text-rose-600 py-1 font-medium transition-colors"
                        >
                          {link.name}
                        </a>
                      ) : (
                        <Link
                          to={link.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-base uppercase tracking-[0.16em] text-charcoal-800 hover:text-rose-600 py-1 font-medium transition-colors"
                        >
                          {link.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Menu Footer CTAs */}
              <div className="pt-6 border-t border-beige-300 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openBookingModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-charcoal-900 text-ivory-100 py-3 rounded-full text-xs font-medium uppercase tracking-[0.16em] shadow-soft"
                >
                  <Calendar className="w-4 h-4 text-gold-400" />
                  <span>Book Appointment</span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={salonConfig.getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 border border-emerald-600 text-emerald-700 py-2.5 rounded-full text-xs font-medium tracking-wider"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={`tel:${salonConfig.phoneRaw}`}
                    className="flex items-center justify-center gap-2 border border-beige-400 text-charcoal-800 py-2.5 rounded-full text-xs font-medium tracking-wider"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Us</span>
                  </a>
                </div>

                <p className="text-[11px] text-charcoal-500 text-center mt-3">
                  Civil Lines, Kanpur • 10:00 AM – 8:00 PM
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
