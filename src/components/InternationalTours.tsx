
import React from 'react';
import { Globe, Calendar, ShoppingCart } from 'lucide-react';
import { internationalTours } from '@/data/constants';

interface InternationalToursProps {
  visibleElements: Set<unknown>;
  handleBooking: (tourName: string, tourType: string) => void;
}

const InternationalTours: React.FC<InternationalToursProps> = ({ visibleElements, handleBooking }) => {
  return (
    <section id="international" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-slate-800 mb-12 flex items-center gap-3">
          <Globe className="w-8 h-8 text-blue-600" />
          International Tours
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {internationalTours.map((tour, index) => (
            <div
              key={tour.title}
              className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 opacity-100 translate-y-0 flex flex-col h-full"
            >
              <div className="relative">
                <img src={tour.image} alt={tour.title} className="w-full h-36 object-cover" />
                <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-lg text-xs font-semibold">
                  Save ₹{parseInt(tour.originalPrice.replace('₹', '').replace(',', '')) - parseInt(tour.price.replace('₹', '').replace(',', ''))}
                </div>
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">{tour.title}</h3>
                <p className="text-slate-700 mb-3 text-xs flex-grow">{tour.description}</p>
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-3 h-3 text-slate-500" />
                  <span className="text-xs text-slate-600">{tour.duration}</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg font-bold text-green-600">{tour.price}</span>
                  <span className="text-xs text-slate-500 line-through">{tour.originalPrice}</span>
                </div>
                <button 
                  onClick={() => handleBooking(tour.title, 'international')}
                  className="w-full bg-blue-600 text-white px-3 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-1 text-sm mt-auto"
                >
                  <ShoppingCart className="w-3 h-3" />
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternationalTours;
