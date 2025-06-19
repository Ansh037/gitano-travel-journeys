
import React from 'react';
import { Image } from 'lucide-react';
import { galleryImages } from '@/data/constants';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-slate-800 mb-12 flex items-center gap-3">
          <Image className="w-8 h-8 text-blue-600" />
          Gallery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-40 object-cover rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
