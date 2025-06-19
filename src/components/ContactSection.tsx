
import React from 'react';
import { Mail } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-slate-800 mb-8">Ready to Start Your Journey?</h2>
        <p className="text-xl text-slate-700 mb-8">
          Contact us today to plan your perfect getaway with Gitano Travel
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-gradient-to-r from-blue-600 to-teal-400 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all flex items-center gap-2">
            <Mail className="w-5 h-5" />
            Get Quote
          </button>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold border-2 border-blue-200 hover:bg-slate-50 transition-all">
            Call Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
