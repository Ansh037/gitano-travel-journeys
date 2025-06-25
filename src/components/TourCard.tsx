
import React from 'react';
import { Calendar, ShoppingCart, Eye } from 'lucide-react';

interface TourCardProps {
  tour: {
    title: string;
    image: string;
    description: string;
    duration: string;
    price: string;
    originalPrice: string;
  };
  onBook: (tourName: string, tourType: string) => void;
  tourType: string;
  index: number;
  visibleElements: Set<unknown>;
}

const TourCard: React.FC<TourCardProps> = ({ tour, onBook, tourType, index, visibleElements }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 opacity-100 translate-y-0">
      <div className="relative">
        <img src={tour.image} alt={tour.title} className="w-full h-48 object-cover" />
        <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-lg text-sm font-semibold">
          Save ₹{parseInt(tour.originalPrice.replace('₹', '').replace(',', '')) - parseInt(tour.price.replace('₹', '').replace(',', ''))}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-blue-600 mb-2">{tour.title}</h3>
        <p className="text-slate-700 mb-3 text-sm">{tour.description}</p>
        <div className="flex items-center gap-2 mb-3">
          <Calendar className="w-4 h-4 text-slate-500" />
          <span className="text-sm text-slate-600">{tour.duration}</span>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl font-bold text-green-600">{tour.price}</span>
          <span className="text-sm text-slate-500 line-through">{tour.originalPrice}</span>
          <span className="text-sm text-slate-600">per person</span>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => onBook(tour.title, tourType)}
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            Book Now
          </button>
          <button className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg font-semibold hover:bg-slate-200 transition-colors flex items-center gap-2">
            <Eye className="w-4 h-4" />
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
