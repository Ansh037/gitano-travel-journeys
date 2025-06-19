
import React, { useEffect, useState } from 'react';
import { Map, CalendarPlus } from 'lucide-react';
import { bannerImages } from '@/data/constants';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="pt-16 relative h-screen flex items-center">
      <div className="absolute inset-0 overflow-hidden rounded-2xl mx-4 mt-4 border border-slate-200">
        <img
          src={bannerImages[currentSlide]}
          alt="Travel destination"
          className="w-full h-full object-cover transition-opacity duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-blue-600/20" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 leading-tight mb-6">
            Experience the World<br />
            with <span className="text-blue-600">Gitano Travel</span>
          </h1>
          <p className="text-xl text-slate-700 mb-8 max-w-2xl">
            Curated journeys & unique adventures. Indore-based, trusted for Domestic & International tours, 
            premium car rentals, and lifetime memories. Let's plan your next getaway!
          </p>
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => scrollToSection('domestic')}
              className="bg-gradient-to-r from-blue-600 to-teal-400 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all flex items-center gap-2"
            >
              <Map className="w-5 h-5" />
              Explore Tours
            </button>
            <button
              onClick={() => scrollToSection('booking')}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold border-2 border-blue-200 hover:bg-slate-50 transition-all flex items-center gap-2"
            >
              <CalendarPlus className="w-5 h-5" />
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
