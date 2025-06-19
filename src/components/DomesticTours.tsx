
import React from 'react';
import { Map } from 'lucide-react';
import { domesticTours } from '@/data/constants';
import TourCard from './TourCard';

interface DomesticToursProps {
  visibleElements: Set<unknown>;
  handleBooking: (tourName: string, tourType: string) => void;
}

const DomesticTours: React.FC<DomesticToursProps> = ({ visibleElements, handleBooking }) => {
  return (
    <section id="domestic" className="py-20 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-slate-800 mb-12 flex items-center gap-3">
          <Map className="w-8 h-8 text-blue-600" />
          Domestic Tours
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domesticTours.map((tour, index) => (
            <TourCard
              key={tour.title}
              tour={tour}
              onBook={handleBooking}
              tourType="domestic"
              index={index}
              visibleElements={visibleElements}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomesticTours;
