# LUMIÈRE SALON & BEAUTY STUDIO
> *"Where Beauty Meets Confidence."*

A modern, responsive, and editorial-grade luxury Salon & Beauty Parlour web application built with **React, TypeScript, Tailwind CSS, React Router, Lucide React, and Framer Motion**.

---

## 🌟 Brand & Aesthetic Direction
- **Brand Name:** LUMIÈRE SALON & BEAUTY STUDIO
- **Location:** 123, Main Street, Civil Lines, Kanpur, Uttar Pradesh 208001
- **Color Palette:**
  - **Warm Ivory (`#F8F5F0`)**: Primary light background & sanctuary atmosphere
  - **Soft Beige (`#E9DED2`)**: Elegant borders, cards & subtle highlights
  - **Muted Rose (`#B9827A`)**: Sophisticated accents & badges
  - **Deep Charcoal (`#242222`)**: Contrast typography, primary buttons & luxury dark surfaces
  - **Subtle Gold (`#B89B5E`)**: Accents on ratings, bestseller badges & bridal flourishes
- **Typography:**
  - Headings: **Playfair Display** (Editorial Serif)
  - Body: **Plus Jakarta Sans** (Contemporary, high-readability sans)

---

## ✨ Features & Architecture

### 1. Header & Navigation (`Navbar.tsx`)
- Sticky frosted glass effect (`glass-nav`) on scroll
- Editorial brand title & subtitle
- Desktop navigation links with underline indicator
- Direct CTAs: **Book Appointment** & **WhatsApp**
- Touch-friendly animated mobile drawer navigation

### 2. Editorial Hero Section (`Hero.tsx`)
- Bold editorial typography: *"Beauty that feels uniquely you."*
- Verified social proof badges:
  - **★ 4.9/5 Customer Rating**
  - **5000+ Happy Clients**
- Primary CTA (*Book an Appointment*) & Secondary CTA (*Explore Services*)
- Real-time opening status indicator (*Open Today: 10:00 AM – 8:00 PM*)

### 3. Immediate Quick Booking Bar (`QuickBookingBar.tsx`)
- Positioned directly below the hero
- Fields: Service dropdown, Date selector, Time slot, Name, and Phone
- **Check Availability** engine with instant slot confirmation banner and prefilled booking flow

### 4. About Section (`AboutSection.tsx`)
- Asymmetrical luxury image collage
- Narrative explaining master stylists, sterile hygiene, and relaxing experience
- Four certified pillars:
  - ✓ Certified Professionals
  - ✓ Premium Products (Kérastase, L'Oréal, Olaplex, Dermalogica)
  - ✓ Personalized Consultation
  - ✓ Hygienic & Comfortable

### 5. Services Directory & Interactive Filtering (`ServicesSection.tsx` & `ServicesPage.tsx`)
- Categories: **All | Hair | Skin | Nails | Makeup | Beauty**
- Smooth animated category filtering with Framer Motion
- Reusable `ServiceCard` showing duration, rating, Indian Rupee pricing (`₹`), and direct booking trigger
- Real-time search by service name/description
- Price sorting: *Most Popular, Price: Low → High, Price: High → Low, Duration*
- Empty & error state handling

### 6. Most Loved Services (`MostLovedServices.tsx`)
- Highlights top 4 client favorites with hover zoom interactions

### 7. Special Packages (`SpecialPackages.tsx`)
- Curated bundles with original price strike-through and savings calculation:
  - **Glow & Revitalize Package** (`₹1,999`)
  - **Bridal Glow Signature Ritual** (`₹4,999`) — marked **MOST POPULAR**
  - **Hair Revival & Nourish** (`₹2,499`)
  - **Pre-Bridal Royale Indulgence** (`₹8,999`)

### 8. Promotional Offers & Coupon Engine (`OffersSection.tsx`)
- **FIRST VISIT SPECIAL**: 15% OFF introductory discount
- Promo code: `LUMIERE15`
- One-click copy button with instant feedback toast
- **Claim Offer** CTA which automatically applies the coupon in the booking calculator

### 9. Haute Bridal Studio (`BridalSection.tsx`)
- Dedicated bridal showcase: Royal Bridal Makeup, HD Water-Resistant finish, Hair Styling, Dupatta & Saree Draping, Pre-Bridal Glow Rituals, and Trial Consultations
- Direct WhatsApp Bridal Desk link

### 10. Interactive Before & After Slider (`BeforeAfterSection.tsx`)
- True interactive comparison slider supporting mouse and touch drag
- Switch between **Hair** (Balayage transformation), **Bridal** (Royal wedding transformation), and **Makeup** (Evening cocktail glam)

### 11. Meet Our Stylists (`StylistsSection.tsx`)
- Team profiles with experience badges, specialties, bios, and Instagram handles:
  - **Aarohi Sharma** (Creative Hair Director & Colorist - 8+ Years)
  - **Meera Kapoor** (Celebrity Bridal & HD Makeup Artist - 10+ Years)
  - **Rohan Verma** (Senior Hair Texture & Treatment Specialist - 7+ Years)
  - **Tanya Sen** (Master Aesthetician & Skin Therapist - 6+ Years)
- Dedicated "Book with [Stylist]" triggers

### 12. Visual Portfolio & Lightbox (`GallerySection.tsx`, `GalleryPage.tsx`, `Lightbox.tsx`)
- Categorized gallery grid (Hair, Makeup, Nails, Salon, Bridal)
- Fullscreen accessible Lightbox modal:
  - Next / Previous controls
  - Keyboard navigation (`ArrowRight`, `ArrowLeft`, `Escape`)
  - Image counter and descriptive captions

### 13. Customer Testimonials Carousel (`TestimonialsSection.tsx`)
- Verified customer reviews with avatars, star ratings, and tagged salon service used
- Slide controls and pagination indicators

### 14. Why Choose Us (`WhyChooseUs.tsx`)
- 6 core pillars with elegant Lucide icons

### 15. Complete Appointment Booking Flow (`BookingPage.tsx`, `AppointmentForm.tsx`, `BookingSummary.tsx`)
- Multi-field validated booking form:
  - Personal Information (Full Name, Phone with Indian format validation, Email, Special Requests)
  - Service selection & Stylist preference
  - Date & interactive Time Slot pills
- Live Appointment Summary with real-time price calculation, coupon discount, and complimentary sanitation fees
- **Celebration Confetti** upon confirmation
- Confirmation screen with unique **Booking Reference ID** (e.g. `LUM-8492`), **Send Appointment Details via WhatsApp** (prefilled with appointment data), **Call Salon**, and **Book Another** options

### 16. Fast-Access Booking Modal (`BookingModal.tsx`)
- Accessible from any "Book" button throughout the site without page refresh

### 17. Location, Concierge & Google Maps (`ContactSection.tsx`, `ContactPage.tsx`)
- Address, phone, email, and opening hours
- Responsive embedded Google Maps iframe for Civil Lines, Kanpur
- Quick message inquiry form
- Frequently Asked Questions accordion

### 18. Mobile-First Conversion Elements
- **Floating WhatsApp Button (`FloatingWhatsApp.tsx`)**: Bottom-right with pulse animation, accessible tooltip, and direct chat link
- **Fixed Mobile Bottom Action Bar (`MobileActionBar.tsx`)**: Persistent `Call | WhatsApp | Book Now` bar on mobile screens (< 768px)

---

## 🛠️ Centralized Salon Configuration

All salon business information can be updated in a single file: `src/config/salonConfig.ts`:
- Salon Name & Tagline
- Phone number (display & raw format for `tel:`)
- WhatsApp number (for `wa.me`)
- Address, Google Maps embed & direction links
- Opening hours
- Promo coupon code and discount percentage
- Social media profiles

---

## 💻 Running the Project Locally

```bash
# Navigate to project directory
cd lumiere-salon

# Install dependencies (if not already installed)
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```
