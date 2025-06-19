
import React, { useState } from 'react';
import { Menu, X, Home, Info, Map, Globe, Car, Image, MessageCircle, Mail, CalendarPlus } from 'lucide-react';

interface NavigationProps {
  scrollToSection: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const handleScrollToSection = (sectionId: string) => {
    scrollToSection(sectionId);
    closeMenu();
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <img 
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=80&q=80" 
              alt="Gitano Travel Logo" 
              className="w-10 h-10 rounded-full border-2 border-blue-200"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-teal-400 to-purple-500 bg-clip-text text-transparent">
              Gitano Travel
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {['home', 'about', 'domestic', 'international', 'rental', 'gallery', 'testimonials', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => handleScrollToSection(item)}
                className="text-slate-700 hover:text-blue-600 transition-colors capitalize font-medium"
              >
                {item === 'domestic' ? 'Domestic Tours' : 
                 item === 'international' ? 'International Tours' :
                 item === 'rental' ? 'Car Rental' : item}
              </button>
            ))}
            <button
              onClick={() => handleScrollToSection('booking')}
              className="bg-gradient-to-r from-blue-600 to-teal-400 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center gap-2"
            >
              <CalendarPlus className="w-4 h-4" />
              Enquiry
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-slate-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200">
          <div className="px-4 py-4 space-y-2">
            {[
              { id: 'home', label: 'Home', icon: Home },
              { id: 'about', label: 'About Us', icon: Info },
              { id: 'domestic', label: 'Domestic Tours', icon: Map },
              { id: 'international', label: 'International Tours', icon: Globe },
              { id: 'rental', label: 'Car Rental', icon: Car },
              { id: 'gallery', label: 'Gallery', icon: Image },
              { id: 'testimonials', label: 'Testimonials', icon: MessageCircle },
              { id: 'contact', label: 'Contact', icon: Mail }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => handleScrollToSection(id)}
                className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-slate-50 rounded-md"
              >
                <Icon className="w-5 h-5 text-blue-600" />
                {label}
              </button>
            ))}
            <button
              onClick={() => handleScrollToSection('booking')}
              className="w-full bg-gradient-to-r from-blue-600 to-teal-400 text-white px-4 py-3 rounded-lg font-semibold mt-4 flex items-center justify-center gap-2"
            >
              <CalendarPlus className="w-4 h-4" />
              Enquiry
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
