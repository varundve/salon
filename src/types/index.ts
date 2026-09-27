export type ServiceCategory = 'Hair' | 'Skin' | 'Nails' | 'Makeup' | 'Beauty';

export interface Service {
  id: string;
  name: string;
  category: ServiceCategory;
  description: string;
  duration: number; // in minutes
  price: number; // in INR
  image: string;
  rating: number;
  reviewCount?: number;
  isPopular?: boolean;
  tags?: string[];
}

export interface Package {
  id: string;
  name: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  duration: string;
  includes: string[];
  isPopular?: boolean;
  badge?: string;
  image?: string;
}

export interface Stylist {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialization: string[];
  image: string;
  bio: string;
  instagram: string;
  rating: number;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  service: string;
  image: string;
  date: string;
}

export type GalleryCategory = 'All' | 'Hair' | 'Makeup' | 'Nails' | 'Salon' | 'Bridal';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Hair' | 'Makeup' | 'Nails' | 'Salon' | 'Bridal';
  image: string;
  caption?: string;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  category: 'Hair' | 'Makeup' | 'Bridal';
  beforeImage: string;
  afterImage: string;
  description: string;
  service: string;
}

export interface AppointmentBooking {
  fullName: string;
  phone: string;
  email: string;
  serviceId: string;
  stylistId?: string;
  date: string;
  timeSlot: string;
  notes?: string;
  appliedCoupon?: string;
  discountAmount?: number;
  totalPrice?: number;
}

export interface BookingConfirmation {
  bookingId: string;
  appointment: AppointmentBooking;
  serviceName: string;
  stylistName: string;
  createdAt: string;
}
