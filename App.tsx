import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './components/LanguageContext.tsx';
import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';
import { Home } from './pages/Home.tsx';
import { Gallery } from './pages/Gallery.tsx';
import { Contact } from './pages/Contact.tsx';
import { AIAssistant } from './components/AIAssistant.tsx';
import { IconMap } from './components/Icons.tsx';
import { SERVICES, CLINIC_SOCIALS } from './constants.ts';

// --- Dedicated Services Page ---
const ServicesPage = () => (
  <div className="py-32 px-4 bg-dark min-h-screen">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16 space-y-4">
        <h1 className="text-5xl md:text-7xl font-display font-bold text-white">Clinical Excellence</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">Serving the Pala community with advanced diagnostic tools and painless treatment protocols.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service) => {
          const Icon = IconMap[service.icon] || IconMap.Plus;
          return (
            <div key={service.id} className="glass p-10 rounded-[48px] group hover:border-primary/50 transition-all duration-500">
              <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                <Icon className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">{service.name}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{service.longDesc}</p>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

// --- Dedicated About Page ---
const AboutPage = () => (
  <div className="py-32 px-4 bg-dark min-h-screen">
    <div className="max-w-7xl mx-auto space-y-32">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <span className="text-primary font-bold text-xs uppercase tracking-[0.3em]">OUR MISSION</span>
          <h1 className="text-5xl md:text-8xl font-display font-bold text-white">The Legacy of <br/><span className="italic font-serif text-primary-light">New Marian.</span></h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Founded in 2008, New Marian Dental Clinic was established with a singular goal: to revolutionize dental healthcare in Central Kerala by combining cutting-edge technology with empathetic patient care.
          </p>
          <div className="flex gap-12 pt-8">
            <div>
              <p className="text-white text-5xl font-black mb-2">15+</p>
              <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Years of Trust</p>
            </div>
            <div>
              <p className="text-white text-5xl font-black mb-2">50k+</p>
              <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Smile Makeovers</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-10 bg-primary/10 blur-[120px] rounded-full -z-10" />
          <img 
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop" 
            className="rounded-[60px] shadow-2xl border border-white/5 grayscale hover:grayscale-0 transition-all duration-700" 
            alt="Clinic Team" 
          />
        </div>
      </div>
    </div>
  </div>
);

// --- Scroll Manager ---
const ScrollManager = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

const EmergencyBanner: React.FC = () => {
  const [show, setShow] = useState(true);
  if (!show) return null;
  return (
    <div className="bg-red-600 text-white py-3 px-4 sticky top-0 z-[100] flex items-center justify-center gap-6 animate-in slide-in-from-top duration-500 backdrop-blur-md bg-opacity-90">
      <div className="flex items-center gap-3 animate-pulse">
        <IconMap.AlertCircle className="w-5 h-5" />
        <span className="text-xs md:text-sm font-bold uppercase tracking-[0.1em]">24/7 EMERGENCY: +91 88481 98200</span>
      </div>
      <button onClick={() => setShow(false)} aria-label="Close Banner">
        <IconMap.X className="w-5 h-5" />
      </button>
    </div>
  );
};

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('App Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-dark flex items-center justify-center p-4">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-white">Something went wrong</h1>
            <p className="text-gray-400">Please refresh the page</p>
            <button 
              onClick={() => window.location.reload()} 
              className="bg-primary text-white px-6 py-3 rounded-lg font-bold"
            >
              Reload
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <Router>
          <ScrollManager />
          <div className="flex flex-col bg-dark min-h-screen">
            <EmergencyBanner />
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/locations" element={<Contact />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
            <AIAssistant />
            <a href={CLINIC_SOCIALS.whatsapp} target="_blank" rel="noopener noreferrer" className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all animate-bounce">
              <IconMap.MessageCircle className="w-8 h-8" />
            </a>
          </div>
        </Router>
      </LanguageProvider>
    </ErrorBoundary>
  );
};

export default App;