
import { Location, Doctor, Service, Testimonial, GalleryItem } from './types';

export const CLINIC_SOCIALS = {
  facebook: 'https://www.facebook.com/mariandentalclinicpala/',
  instagram: 'https://www.instagram.com/mariandentalclinicpala',
  youtube: 'https://www.youtube.com/@ABY2401',
  whatsapp: 'https://wa.me/918848198200',
  emergency: 'tel:+918848198200',
  email: 'abyjoseph1991@gmail.com'
};

export const CLINIC_IMAGES = {
  hero: 'https://images.unsplash.com/photo-1629909608135-ca29ed974bb9?q=80&w=1920&auto=format&fit=crop',
  reception: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop',
  treatment: 'https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?q=80&w=1200&auto=format&fit=crop',
  gallery: [
    'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1460672985063-6764ac8b9c74?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&auto=format&fit=crop',
  ]
};

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 1, category: 'Implants', title: 'Single Tooth Replacement', description: 'Advanced titanium implant restoration for natural look and feel.', image: CLINIC_IMAGES.gallery[0] },
  { id: 2, category: 'Cosmetic', title: 'Smile Transformation', description: 'Full mouth porcelain veneers for a Hollywood smile.', image: CLINIC_IMAGES.gallery[1] },
  { id: 3, category: 'Orthodontics', title: 'Clear Aligner Treatment', description: 'Invisible teeth straightening for professional adults.', image: 'https://images.unsplash.com/photo-1513412306089-c94627c39c88?q=80&w=800&auto=format&fit=crop' },
  { id: 4, category: 'General', title: 'Pediatric Care', description: 'Friendly and gentle checkups for our youngest patients.', image: CLINIC_IMAGES.gallery[2] },
  { id: 5, category: 'Implants', title: 'All-on-4 Full Bridge', description: 'Complete restorative solution for edentulous patients.', image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=800&auto=format&fit=crop' },
  { id: 6, category: 'Cosmetic', title: 'Laser Whitening', description: 'Instant 4-shade brightening in a single 60-minute session.', image: CLINIC_IMAGES.gallery[3] },
];

export const LOCATIONS: Location[] = [
  {
    id: 'primary',
    name: 'New Marian Dental Clinic and Implant Centre',
    shortName: 'Main Branch (Old Market Rd)',
    address: 'Chittetu Building, Near Civil Station, Old Market Rd, Pala, Kerala 686575',
    phone: '+91-88481-98200',
    whatsapp: '918848198200',
    email: 'abyjoseph1991@gmail.com',
    rating: 4.9,
    reviews: 58,
    mapsUrl: 'https://maps.app.goo.gl/NSpYcuyPGUDogZH16',
    hours: '9:00 AM - 8:00 PM (Mon-Sat)',
    sundayHours: '10:00 AM - 2:00 PM (Sunday)',
  },
  {
    id: 'secondary',
    name: 'Marian Dental Clinic and Orthodontic Centre',
    shortName: 'Ramapuram Road Branch',
    address: 'Puthumana Tower, Pala - Ramapuram Rd, Pala, Kerala 686575',
    phone: '+91-4822-212345',
    whatsapp: '918848198200',
    email: 'abyjoseph1991@gmail.com',
    rating: 4.3,
    reviews: 21,
    mapsUrl: 'https://www.google.com/maps/search/Marian+Dental+Clinic+Pala+Ramapuram+Road',
    hours: '9:00 AM - 8:00 PM (Mon-Sat)',
    sundayHours: 'Emergency Only (Sunday)',
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-aby',
    name: 'Dr. ABY JOSEPH THOMAS',
    title: 'Dental Surgeon & Implantologist',
    qualifications: ['BDS', 'MDS'],
    specializations: ['Dental Implants', 'Root Canal Treatment', 'Oral Surgery'],
    bio: 'With over 15 years of clinical excellence, Dr. Aby leads the implantology department, focusing on precision aesthetics and pain-free complex surgeries.',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop',
    contacts: {
      phone: '+91-88481-98200',
      whatsapp: '918848198200',
      email: 'abyjoseph1991@gmail.com',
      instagram: 'mariandentalclinicpala',
      youtube: 'ABY2401',
      facebook: 'mariandentalclinicpala'
    }
  },
  {
    id: 'dr-meenu',
    name: 'Dr. MEENU MARIAM REJI',
    title: 'Dental Surgeon',
    qualifications: ['BDS'],
    specializations: ['General Dentistry', 'Cosmetic Dentistry', 'Paediatrics'],
    bio: 'Dr. Meenu specializes in restorative and pediatric care, ensuring a gentle experience for children and stunning aesthetic transformations for adults.',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=800&auto=format&fit=crop',
    contacts: {
      phone: '+91-88481-98200',
      whatsapp: '918848198200',
      email: 'abyjoseph1991@gmail.com',
      instagram: 'mariandentalclinicpala',
      facebook: 'mariandentalclinicpala'
    }
  }
];

export const SERVICES: Service[] = [
  { id: 'implants', name: 'Dental Implants', shortDesc: 'Permanent tooth replacement', longDesc: 'High-quality titanium implants to restore function and aesthetics.', icon: 'Plus', featured: true, category: 'primary' },
  { id: 'rct', name: 'Root Canal Treatment', shortDesc: 'Pain-free therapy', longDesc: 'Advanced microscopic RCT for saving natural teeth.', icon: 'Shield', featured: true, category: 'primary' },
  { id: 'cosmetic', name: 'Smile Designing', shortDesc: 'Smile makeovers', longDesc: 'Veneers, crowns, and teeth whitening for a perfect smile.', icon: 'Sparkles', featured: true, category: 'primary' },
  { id: 'laser', name: 'Laser Dentistry', shortDesc: 'Painless laser care', longDesc: 'Minimally invasive gum treatments and oral surgeries using laser tech.', icon: 'Sun', featured: true, category: 'primary' },
  { id: 'paediatrics', name: 'Paediatric Dentistry', shortDesc: 'Kids dental care', longDesc: 'Gentle dentistry for children in a friendly environment.', icon: 'Heart', featured: true, category: 'primary' },
  { id: 'emergency', name: 'Emergency Care', shortDesc: '24/7 dental support', longDesc: 'Immediate relief for trauma, pain, or infections.', icon: 'AlertCircle', featured: true, category: 'primary' },
  { id: 'cleaning', name: 'Ultrasonic Scaling', shortDesc: 'Professional cleaning', longDesc: 'Effective removal of plaque and tartar for healthy gums.', icon: 'Brush', featured: false, category: 'additional' },
  { id: 'ortho', name: 'Orthodontics', shortDesc: 'Braces and Aligners', longDesc: 'Straighten teeth with traditional or clear aligners.', icon: 'Layout', featured: false, category: 'additional' },
  { id: 'extraction', name: 'Extractions', shortDesc: 'Painless removal', longDesc: 'Safe removal of wisdom teeth or damaged teeth.', icon: 'Scissors', featured: false, category: 'additional' },
  { id: 'checkup', name: 'General Check-Ups', shortDesc: 'Comprehensive exams', longDesc: 'Detailed oral health checkups and cancer screenings.', icon: 'Stethoscope', featured: false, category: 'additional' },
  { id: 'xray', name: 'Digital X-Ray', shortDesc: 'High-precision imaging', longDesc: 'Low radiation digital dental imaging for better diagnosis.', icon: 'Scan', featured: false, category: 'additional' },
  { id: 'bridges', name: 'Bridges & Dentures', shortDesc: 'Restorative options', longDesc: 'Full and partial solutions for missing teeth.', icon: 'Box', featured: false, category: 'additional' }
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, name: 'Sajeev K.', location: 'Pala', quote: 'The most modern clinic in Pala. Dr. Aby explained everything perfectly and the RCT was painless.', rating: 5, treatment: 'Root Canal' },
  { id: 2, name: 'Nimmy Thomas', location: 'Kottayam', quote: 'I am so happy with my smile makeover. The staff is very courteous and professional.', rating: 5, treatment: 'Cosmetic' },
];

export const BILINGUAL_TEXT = {
  en: {
    heroTitle: "Pala's Leading Dental & Implant Center",
    heroSubtitle: "Experience world-class dental care with advanced technology and expert surgeons across two locations in Pala.",
    bookNow: "Book Consultation",
    whatsapp: "Chat on WhatsApp",
    emergencyBanner: "24/7 Emergency Care: +91-88481-98200",
    ourServices: "Expert Dental Services",
    meetDoctors: "Meet Our Specialists",
    locations: "Our Locations",
    saveContact: "Save Contact",
    getDirections: "Get Directions",
    transformation: "Transformation Stories",
    transformationSub: "Real results using digital imaging and precision surgery."
  },
  ml: {
    heroTitle: "പാലയിലെ ഏറ്റവും മികച്ച ദന്തചികിത്സാ കേന്ദ്രം",
    heroSubtitle: "അത്യാധുനിക സാങ്കേതികവിദ്യയും വിദഗ്ധ ഡോക്ടർമാരും - പാലയിലെ രണ്ട് കേന്ദ്രങ്ങളിൽ മികച്ച സേവനം.",
    bookNow: "അപ്പോയിന്റ്മെന്റ് എടുക്കുക",
    whatsapp: "വാട്ട്സ്ആപ്പ് ചെയ്യുക",
    emergencyBanner: "24/7 എമർജൻസി കെയർ: +91-88481-98200",
    ourServices: "ഞങ്ങളുടെ സേവനങ്ങൾ",
    meetDoctors: "വിദഗ്ധ ഡോക്ടർമാർ",
    locations: "ഞങ്ങളുടെ കേന്ദ്രങ്ങൾ",
    saveContact: "കോൺടാക്റ്റ് സേവ് ചെയ്യുക",
    getDirections: "വഴി അറിയുക",
    transformation: "ചിരിയുടെ മാറ്റങ്ങൾ",
    transformationSub: "മികച്ച ചികിത്സാ ഫലങ്ങൾ ഞങ്ങൾ ഉറപ്പുനൽകുന്നു."
  }
};
