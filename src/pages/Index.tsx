
import { useEffect, useState } from 'react';
import { Calendar, Menu, X, Home, Info, Map, Globe, Car, Image, MessageCircle, Mail, CalendarPlus, Star, Calculator } from 'lucide-react';
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleElements, setVisibleElements] = useState(new Set());

  const bannerImages = [
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1519681393-2de5e0c1df6a?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
  ];

  const domesticTours = [
    {
      title: "Ladakh Adventure",
      image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
      description: "Snow deserts, monasteries, Pangong Lake, and adventure rides. 7 days, all inclusive."
    },
    {
      title: "Gangtok & North Sikkim",
      image: "https://images.unsplash.com/photo-1519681393-2de5e0c1df6a?auto=format&fit=crop&w=600&q=80",
      description: "Lachung, Gurudongmar, Yumthang Valley, MG Road. 6 days, Himalayan beauty."
    },
    {
      title: "Kerala Backwaters",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      description: "Alleppey houseboats, Munnar, tea gardens, wildlife. 5 days, relaxing escape."
    },
    {
      title: "Goa Beaches",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
      description: "Sun, sand, nightlife, forts & spice plantations. 4 days, coastal fun."
    },
    {
      title: "Royal Rajasthan",
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
      description: "Jaipur, Udaipur, Jodhpur palaces, camel safari. 7 days, cultural grandeur."
    },
    {
      title: "Andaman Islands",
      image: "https://images.unsplash.com/photo-1465101178521-c1a9136a9375?auto=format&fit=crop&w=600&q=80",
      description: "Havelock, Radhanagar beach, scuba diving. 5 days, island paradise."
    }
  ];

  const internationalTours = [
    { title: "Vietnam", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80", description: "Hanoi, Halong Bay, Ho Chi Minh. 7 days, vibrant culture." },
    { title: "Dubai", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80", description: "Burj Khalifa, desert safari, shopping. 5 days, futuristic city." },
    { title: "Russia", image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80", description: "Moscow, St. Petersburg, Red Square. 8 days, grand history." },
    { title: "Estonia", image: "https://images.unsplash.com/photo-1518976024611-4886d2ba0a10?auto=format&fit=crop&w=600&q=80", description: "Tallinn old town, Baltic coast. 6 days, fairy tale Europe." },
    { title: "Spain", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80", description: "Barcelona, Madrid, flamenco, beaches. 8 days, fiesta!" },
    { title: "Japan", image: "https://images.unsplash.com/photo-1465101178521-c1a9136a9375?auto=format&fit=crop&w=600&q=80", description: "Tokyo, Kyoto, Mt. Fuji, cherry blossoms. 8 days, tech meets tradition." },
    { title: "Egypt", image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80", description: "Pyramids, Nile cruise, ancient wonders. 7 days, timeless marvels." },
    { title: "Australia", image: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?auto=format&fit=crop&w=600&q=80", description: "Sydney, Great Barrier Reef, Gold Coast. 9 days, adventure down under." }
  ];

  const testimonials = [
    {
      name: "Rahul Jain",
      tour: "Ladakh Tour",
      image: "https://randomuser.me/api/portraits/men/15.jpg",
      text: "Our Ladakh trip with Gitano was flawless – great hotel, friendly guide, and seamless travel. Will plan our next with them!"
    },
    {
      name: "Simran Kaur",
      tour: "Vietnam Tour", 
      image: "https://randomuser.me/api/portraits/women/22.jpg",
      text: "Vietnam was magical! From the food to the guides, every detail was perfect. Highly recommend Gitano for international tours."
    },
    {
      name: "Amit Soni",
      tour: "Car Rental",
      image: "https://randomuser.me/api/portraits/men/33.jpg", 
      text: "Booked a sedan from Indore to Bhopal. Car was clean, driver polite, and fare reasonable. Booking was easy!"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set(prev).add(entry.target.id || entry.target.className));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-seq').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

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

    const baseFares = { mini: 10, sedan: 15, suv: 20 };
    const distance = Math.floor(Math.random() * 500) + 100;
    const fare = distance * baseFares[service as keyof typeof baseFares];
    
    toast({
      title: "Fare Calculated!",
      description: `Estimated fare: ₹${fare} for ${distance}km (${service.toUpperCase()})`,
    });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Navigation */}
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
                  onClick={() => scrollToSection(item)}
                  className="text-slate-700 hover:text-blue-600 transition-colors capitalize font-medium"
                >
                  {item === 'domestic' ? 'Domestic Tours' : 
                   item === 'international' ? 'International Tours' :
                   item === 'rental' ? 'Car Rental' : item}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('booking')}
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
                  onClick={() => scrollToSection(id)}
                  className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-slate-50 rounded-md"
                >
                  <Icon className="w-5 h-5 text-blue-600" />
                  {label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('booking')}
                className="w-full bg-gradient-to-r from-blue-600 to-teal-400 text-white px-4 py-3 rounded-lg font-semibold mt-4 flex items-center justify-center gap-2"
              >
                <CalendarPlus className="w-4 h-4" />
                Enquiry
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 relative h-screen flex items-center">
        <div className="absolute inset-0 overflow-hidden rounded-2xl mx-4 mt-4 border border-slate-200">
          <img
            src={bannerImages[currentSlide]}
            alt="Travel destination"
            className="w-full h-full object-cover transition-opacity duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-blue-600/20" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 leading-tight mb-6">
              Experience the World<br />
              with <span className="text-blue-600">Gitano Travel</span>
            </h1>
            <p className="text-xl text-slate-700 mb-8 max-w-2xl">
              Curated journeys & unique adventures. Indore-based, trusted for Domestic & International tours, 
              premium car rentals, and lifetime memories. Let's plan your next getaway!
            </p>
            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => scrollToSection('domestic')}
                className="bg-gradient-to-r from-blue-600 to-teal-400 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all flex items-center gap-2"
              >
                <Map className="w-5 h-5" />
                Explore Tours
              </button>
              <button
                onClick={() => scrollToSection('booking')}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold border-2 border-blue-200 hover:bg-slate-50 transition-all flex items-center gap-2"
              >
                <CalendarPlus className="w-5 h-5" />
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
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

      {/* Domestic Tours */}
      <section id="domestic" className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-800 mb-12 flex items-center gap-3">
            <Map className="w-8 h-8 text-blue-600" />
            Domestic Tours
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {domesticTours.map((tour, index) => (
              <div
                key={tour.title}
                className={`bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 fade-seq ${
                  visibleElements.has('fade-seq') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img src={tour.image} alt={tour.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">{tour.title}</h3>
                  <p className="text-slate-700">{tour.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International Tours */}
      <section id="international" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-800 mb-12 flex items-center gap-3">
            <Globe className="w-8 h-8 text-blue-600" />
            International Tours
          </h2>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
            {internationalTours.map((tour, index) => (
              <div
                key={tour.title}
                className={`bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 fade-seq ${
                  visibleElements.has('fade-seq') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img src={tour.image} alt={tour.title} className="w-full h-32 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-blue-600 mb-1">{tour.title}</h3>
                  <p className="text-slate-700 text-sm">{tour.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Car Rental */}
      <section id="rental" className="py-20 bg-white/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-800 mb-12 flex items-center gap-3">
            <Car className="w-8 h-8 text-blue-600" />
            Car Rental
          </h2>
          
          <form onSubmit={handleRentalCalculation} className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-slate-200">
            <div className="grid md:grid-cols-4 gap-6 items-end">
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
                  <option value="">Select Car</option>
                  <option value="mini">Mini</option>
                  <option value="sedan">Sedan</option>
                  <option value="suv">SUV</option>
                </select>
              </div>
              
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-teal-400 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Calculator className="w-5 h-5" />
                Calculate Fare
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-800 mb-12 flex items-center gap-3">
            <Image className="w-8 h-8 text-blue-600" />
            Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1519681393-2de5e0c1df6a?auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1465101178521-c1a9136a9375?auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80"
            ].map((src, index) => (
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

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-800 mb-12 flex items-center gap-3">
            <MessageCircle className="w-8 h-8 text-blue-600" />
            Testimonials
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border-2 border-blue-200"
                  />
                  <div>
                    <h4 className="font-semibold text-slate-800">{testimonial.name}</h4>
                    <p className="text-sm text-blue-600">{testimonial.tour}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-blue-500 text-blue-500" />
                  ))}
                </div>
                <p className="text-slate-700">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
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

      {/* Booking Section (Hidden, used for scroll target) */}
      <div id="booking" className="h-1"></div>
    </div>
  );
};

export default Index;
