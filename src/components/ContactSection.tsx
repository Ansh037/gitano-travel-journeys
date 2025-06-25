
import React from 'react';
import { Mail } from 'lucide-react';
import { toast } from "@/hooks/use-toast";

const ContactSection: React.FC = () => {
  const handleGetQuote = () => {
    toast({
      title: "Quote Request Received!",
      description: "Thanks for showing interest, the quote will be shared to you via email.",
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-slate-800 mb-8">Ready to Start Your Journey?</h2>
        <p className="text-xl text-slate-700 mb-8">
          Contact us today to plan your perfect getaway with Gitano Travel
        </p>
        <div className="flex justify-center">
          <button 
            onClick={handleGetQuote}
            className="bg-gradient-to-r from-blue-600 to-teal-400 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all flex items-center gap-2"
          >
            <Mail className="w-5 h-5" />
            Get Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
