
import React, { useState } from 'react';
import { Camera, Filter } from 'lucide-react';

const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
      title: "Himachal Pradesh",
      category: "domestic",
      alt: "Beautiful mountain landscape in Himachal Pradesh"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      title: "Kerala Backwaters",
      category: "domestic",
      alt: "Serene backwaters of Kerala"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
      title: "Rajasthan Palace",
      category: "domestic",
      alt: "Historic palace in Rajasthan"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      title: "Goa Beaches",
      category: "domestic",
      alt: "Beautiful Goa beaches"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
      title: "Vietnam Discovery",
      category: "international",
      alt: "Beautiful Vietnam landscape"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?auto=format&fit=crop&w=800&q=80",
      title: "Dubai Extravaganza",
      category: "international", 
      alt: "Dubai modern skyline"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
      title: "Russia Grand Tour",
      category: "international",
      alt: "Russian architecture"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=800&q=80",
      title: "Spain Fiesta",
      category: "international",
      alt: "Beautiful Spanish architecture"
    }
  ];

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  const filterButtons = [
    { key: 'all', label: 'All Tours' },
    { key: 'domestic', label: 'Domestic Tours' },
    { key: 'international', label: 'International Tours' }
  ];

  return (
    <section id="gallery" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4 flex items-center justify-center gap-3">
            <Camera className="w-8 h-8 text-blue-600" />
            Photo Gallery
          </h2>
          <p className="text-xl text-slate-700 mb-8">
            Explore the beauty of destinations through our curated collection
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {filterButtons.map((button) => (
              <button
                key={button.key}
                onClick={() => setActiveFilter(button.key)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                  activeFilter === button.key
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-slate-700 hover:bg-blue-50 border border-slate-200'
                }`}
              >
                <Filter className="w-4 h-4" />
                {button.label}
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  console.log(`Failed to load image: ${image.src}`);
                  // Fallback to a placeholder if image fails to load
                  e.currentTarget.src = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg mb-1">{image.title}</h3>
                  <span className="text-blue-200 text-sm capitalize">{image.category} Tour</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 text-lg">No images found for the selected category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
