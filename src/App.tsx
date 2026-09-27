import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { BookingProvider } from './context/BookingContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { FloatingWhatsApp } from './components/layout/FloatingWhatsApp';
import { MobileActionBar } from './components/layout/MobileActionBar';
import { BookingModal } from './components/common/BookingModal';
import { Toast } from './components/common/Toast';
import { ScrollToTop } from './components/common/ScrollToTop';

import { Home } from './pages/Home';
import { ServicesPage } from './pages/ServicesPage';
import { BookingPage } from './pages/BookingPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

export const App: React.FC = () => {
  return (
    <BookingProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-ivory-100 text-charcoal-900 selection:bg-rose-500 selection:text-white">
          <Navbar />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/booking" element={<BookingPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          <Footer />

          {/* Interactive Global Elements */}
          <FloatingWhatsApp />
          <MobileActionBar />
          <BookingModal />
          <Toast />
        </div>
      </BrowserRouter>
    </BookingProvider>
  );
};

export default App;
