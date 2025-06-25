
import React from 'react';
import { Car, Map, Calendar, Star, CalendarPlus, Calculator } from 'lucide-react';
import { toast } from "@/hooks/use-toast";

const CarRental: React.FC = () => {
  const handleRentalCalculation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const source = formData.get('source') as string;
    const destination = formData.get('destination') as string;
    const service = formData.get('service') as string;

    if (!source || !destination || !service) {
      toast({
        title: "Missing Information",
        description: "Please fill all fields to calculate fare.",
        variant: "destructive"
      });
      return;
    }

    const baseFares = { economy: 12, premium: 20, luxury: 35 };
    const distance = Math.floor(Math.random() * 500) + 100;
    const fare = distance * baseFares[service as keyof typeof baseFares];
    
    toast({
      title: "Fare Calculated!",
      description: `Estimated fare: ₹${fare} for ${distance}km (${service.toUpperCase()})`,
    });
  };

  return (
    <section id="rental" className="py-20 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-slate-800 mb-12 flex items-center gap-3">
          <Car className="w-8 h-8 text-blue-600" />
          Car Rental Services
        </h2>

        {/* Services Offered */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-slate-800 mb-8">Services Offered</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Car className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">Airport Transfers</h4>
              <p className="text-sm text-slate-600">Comfortable rides to/from airports</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Map className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">City Tours</h4>
              <p className="text-sm text-slate-600">Explore cities with local drivers</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">Long Distance</h4>
              <p className="text-sm text-slate-600">Intercity travel with comfort</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">Corporate Travel</h4>
              <p className="text-sm text-slate-600">Business travel solutions</p>
            </div>
          </div>
        </div>

        {/* Rental Pricing Info */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-slate-800 mb-8">Pricing Information</h3>
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-blue-600 mb-2">Economy</h4>
                <p className="text-3xl font-bold text-green-600 mb-2">₹10-15</p>
                <p className="text-sm text-slate-600">per km</p>
                <ul className="mt-4 text-sm text-slate-700 space-y-1">
                  <li>• Hatchback & Sedan</li>
                  <li>• AC & Music System</li>
                  <li>• 4-5 Seater</li>
                </ul>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-blue-600 mb-2">Premium</h4>
                <p className="text-3xl font-bold text-green-600 mb-2">₹18-25</p>
                <p className="text-sm text-slate-600">per km</p>
                <ul className="mt-4 text-sm text-slate-700 space-y-1">
                  <li>• SUV & Innova</li>
                  <li>• Premium Comfort</li>
                  <li>• 6-7 Seater</li>
                </ul>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-blue-600 mb-2">Luxury</h4>
                <p className="text-3xl font-bold text-green-600 mb-2">₹30-50</p>
                <p className="text-sm text-slate-600">per km</p>
                <ul className="mt-4 text-sm text-slate-700 space-y-1">
                  <li>• Tempo & Bus</li>
                  <li>• Group Travel</li>
                  <li>• 12+ Seater</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Fare Calculator */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-slate-200 mb-12">
          <h3 className="text-2xl font-semibold text-slate-800 mb-6 text-center">Calculate Your Fare</h3>
          <form onSubmit={handleRentalCalculation} className="grid md:grid-cols-4 gap-6 items-end">
            <div>
              <label htmlFor="source" className="block text-sm font-medium text-slate-700 mb-2">Source</label>
              <select name="source" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:outline-none bg-slate-50">
                <option value="">Select Source</option>
                <option value="indore">Indore</option>
                <option value="bhopal">Bhopal</option>
                <option value="ujjain">Ujjain</option>
                <option value="pune">Pune</option>
                <option value="mumbai">Mumbai</option>
                <option value="delhi">Delhi</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="destination" className="block text-sm font-medium text-slate-700 mb-2">Destination</label>
              <select name="destination" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:outline-none bg-slate-50">
                <option value="">Select Destination</option>
                <option value="indore">Indore</option>
                <option value="bhopal">Bhopal</option>
                <option value="ujjain">Ujjain</option>
                <option value="pune">Pune</option>
                <option value="mumbai">Mumbai</option>
                <option value="delhi">Delhi</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">Car Type</label>
              <select name="service" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:outline-none bg-slate-50">
                <option value="">Select Car Type</option>
                <option value="economy">Economy</option>
                <option value="premium">Premium</option>
                <option value="luxury">Luxury</option>
              </select>
            </div>
            
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-teal-400 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <Calculator className="w-5 h-5" />
              Calculate Fare
            </button>
          </form>
        </div>

        {/* Booking CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-slate-800 mb-4">Ready to Book Your Ride?</h3>
          <p className="text-lg text-slate-600 mb-8">Contact us now for instant booking and best rates</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-blue-600 to-teal-400 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all flex items-center gap-2">
              <CalendarPlus className="w-5 h-5" />
              Book Now
            </button>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold border-2 border-blue-200 hover:bg-slate-50 transition-all">
              Call Now: +91 98765 43210
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarRental;
