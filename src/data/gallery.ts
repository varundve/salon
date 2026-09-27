import type { GalleryItem } from '../types';

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    title: "Champagne Blonde Balayage & Waves",
    category: "Hair",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=85",
    caption: "Dimensional freehand balayage with warm caramel and champagne undertones."
  },
  {
    id: "g2",
    title: "Royal Crimson Bridal Glam",
    category: "Bridal",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85",
    caption: "Timeless Indian bride with dewy skin, defined kohl eyes, and traditional jewellery setting."
  },
  {
    id: "g3",
    title: "Minimalist Glazed Donut Nails",
    category: "Nails",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1200&q=85",
    caption: "Chrome pearlescent finish over almond gel extensions."
  },
  {
    id: "g4",
    title: "Lumière Styling Lounge & Wash Bar",
    category: "Salon",
    image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=85",
    caption: "A serene warm ivory and soft beige sanctuary designed for ultimate tranquility."
  },
  {
    id: "g5",
    title: "Dewy Glass-Skin Evening Makeup",
    category: "Makeup",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=85",
    caption: "Flawless satin finish with soft monochromatic peach lips and wispy lashes."
  },
  {
    id: "g6",
    title: "Silky Glass Hair Keratin Infusion",
    category: "Hair",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1200&q=85",
    caption: "Zero frizz, deep shine restoration after our Brazilian protein ritual."
  },
  {
    id: "g7",
    title: "Destination Wedding Sangeet Glow",
    category: "Bridal",
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1200&q=85",
    caption: "Soft glam with dramatic eyes and modern textured Hollywood waves."
  },
  {
    id: "g8",
    title: "Private Aesthetic Treatment Room",
    category: "Salon",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85",
    caption: "Private medical aesthetic suite with ambient warm lighting and sterile hygiene."
  },
  {
    id: "g9",
    title: "Hand-Painted Bridal Mehndi Nail Art",
    category: "Nails",
    image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=1200&q=85",
    caption: "Rose gold chrome accents and Swarovski micro-crystals."
  },
  {
    id: "g10",
    title: "Precision Textured Bob & Tone",
    category: "Hair",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85",
    caption: "Structured chin-length bob tailored precisely to cheekbone structure."
  },
  {
    id: "g11",
    title: "Golden Hour Glow Editorial Makeup",
    category: "Makeup",
    image: "https://images.unsplash.com/photo-1500840216050-6ffa99d75160?auto=format&fit=crop&w=1200&q=85",
    caption: "Sun-drenched champagne highlight with glossy nude lip tint."
  },
  {
    id: "g12",
    title: "Pastel French Almond Tips",
    category: "Nails",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=85",
    caption: "Subtle muted rose ombre tips on healthy fortified natural nails."
  }
];

export const galleryCategories = ["All", "Hair", "Makeup", "Nails", "Salon", "Bridal"] as const;
