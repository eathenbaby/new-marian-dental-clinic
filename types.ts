
export type Language = 'en' | 'ml';

export interface Location {
  id: string;
  name: string;
  shortName: string;
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  rating: number;
  reviews: number;
  mapsUrl: string;
  hours: string;
  sundayHours: string;
}

export interface Doctor {
  id: string;
  name: string;
  title: string;
  qualifications: string[];
  specializations: string[];
  bio: string;
  image: string;
  contacts: {
    phone: string;
    whatsapp: string;
    email: string;
    instagram?: string;
    youtube?: string;
    facebook?: string;
  };
}

export interface Service {
  id: string;
  name: string;
  shortDesc: string;
  longDesc: string;
  icon: string;
  featured: boolean;
  category: 'primary' | 'additional';
}

export interface GalleryItem {
  id: number;
  category: 'Implants' | 'Orthodontics' | 'Cosmetic' | 'General';
  title: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  quote: string;
  rating: number;
  treatment: string;
}
