
import React from 'react';
import { Info } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-800 mb-4 flex items-center justify-center gap-3">
          <Info className="w-8 h-8 text-blue-600" />
          About Us
        </h2>
        <p className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
          <strong>Gitano Travel</strong> is an Indore-based travel company dedicated to making journeys extraordinary. 
          We offer handpicked <strong>domestic and international tours</strong>, premium <strong>car rental services</strong>, 
          and customer-first flexibility. Whether you dream of the Himalayas, Europe, or an offbeat adventure, 
          our experienced team ensures your travel is smooth, safe, and memorable.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
