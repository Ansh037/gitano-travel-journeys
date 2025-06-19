import { useEffect, useState } from 'react';
import { Calendar, Menu, X, Home, Info, Map, Globe, Car, Image, MessageCircle, Mail, CalendarPlus, Star, Calculator, Eye, ShoppingCart } from 'lucide-react';
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
      description: "Snow deserts, monasteries, Pangong Lake, and adventure rides through the world's highest motorable roads.",
      duration: "7 Days / 6 Nights",
      price: "₹35,999",
      originalPrice: "₹42,000"
    },
    {
      title: "Gangtok & North Sikkim",
      image: "https://images.unsplash.com/photo-1519681393-2de5e0c1df6a?auto=format&fit=crop&w=600&q=80",
      description: "Lachung, Gurudongmar Lake, Yumthang Valley, MG Road. Experience pristine Himalayan beauty.",
      duration: "6 Days / 5 Nights",
      price: "₹28,999",
      originalPrice: "₹34,000"
    },
    {
      title: "Kerala Backwaters",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      description: "Alleppey houseboats, Munnar tea gardens, Thekkady wildlife sanctuary. God's own country awaits.",
      duration: "5 Days / 4 Nights",
      price: "₹22,999",
      originalPrice: "₹27,000"
    },
    {
      title: "Goa Beaches",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
      description: "Sun, sand, nightlife, Portuguese forts & spice plantations. Perfect coastal getaway.",
      duration: "4 Days / 3 Nights",
      price: "₹18,999",
      originalPrice: "₹23,000"
    },
    {
      title: "Royal Rajasthan",
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
      description: "Jaipur Pink City, Udaipur lakes, Jodhpur Blue City, camel safari. Royal heritage tour.",
      duration: "7 Days / 6 Nights",
      price: "₹31,999",
      originalPrice: "₹38,000"
    },
    {
      title: "Himachal Paradise",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
      description: "Shimla, Manali, Rohtang Pass, Solang Valley. Hill station bliss with adventure activities.",
      duration: "6 Days / 5 Nights",
      price: "₹26,999",
      originalPrice: "₹32,000"
    },
    {
      title: "Andaman Islands",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=600&q=80",
      description: "Havelock Island, Radhanagar Beach, scuba diving, water sports. Tropical paradise escape.",
      duration: "5 Days / 4 Nights",
      price: "₹33,999",
      originalPrice: "₹40,000"
    }
  ];

  const internationalTours = [
    {
      title: "Vietnam Discovery",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80",
      description: "Hanoi, Halong Bay cruise, Ho Chi Minh City, Cu Chi Tunnels. Vibrant culture and cuisine.",
      duration: "7 Days / 6 Nights",
      price: "₹65,999",
      originalPrice: "₹75,000"
    },
    {
      title: "Dubai Extravaganza",
      image: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?auto=format&fit=crop&w=600&q=80",
      description: "Burj Khalifa, Dubai Mall, desert safari, Palm Jumeirah. Futuristic city experience.",
      duration: "5 Days / 4 Nights",
      price: "₹45,999",
      originalPrice: "₹55,000"
    },
    {
      title: "Russia Grand Tour",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
      description: "Moscow Red Square, St. Petersburg Hermitage, Trans-Siberian glimpse. Grand historical journey.",
      duration: "8 Days / 7 Nights",
      price: "₹85,999",
      originalPrice: "₹95,000"
    },
    {
      title: "Estonia Baltic Charm",
      image: "https://images.unsplash.com/photo-1518976024611-4886d2ba0a10?auto=format&fit=crop&w=600&q=80",
      description: "Tallinn medieval old town, Lahemaa National Park, Baltic coast. Fairy tale Europe.",
      duration: "6 Days / 5 Nights",
      price: "₹58,999",
      originalPrice: "₹68,000"
    },
    {
      title: "Spain Fiesta",
      image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=600&q=80",
      description: "Barcelona Sagrada Familia, Madrid Prado, flamenco shows, Costa del Sol beaches.",
      duration: "8 Days / 7 Nights",
      price: "₹75,999",
      originalPrice: "₹85,000"
    },
    {
      title: "Japan Cultural Journey",
      image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=600&q=80",
      description: "Tokyo modern marvels, Kyoto temples, Mt. Fuji, cherry blossoms. Tech meets tradition.",
      duration: "8 Days / 7 Nights",
      price: "₹95,999",
      originalPrice: "₹110,000"
    },
    {
      title: "Singapore Malaysia",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80",
      description: "Singapore Gardens, Universal Studios, Kuala Lumpur Twin Towers, Genting Highlands.",
      duration: "6 Days / 5 Nights",
      price: "₹52,999",
      originalPrice: "₹62,000"
    },
    {
      title: "Thailand Paradise",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=600&q=80",
      description: "Bangkok temples, Phuket beaches, Phi Phi Islands, Thai cuisine and cultural shows.",
      duration: "6 Days / 5 Nights",
      price: "₹42,999",
      originalPrice: "₹50,000"
    }
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

  const carFleet = [
    {
      type: "Innova",
      image: "https://images.unsplash.com/photo-1566473965997-3de9c817e938?auto=format&fit=crop&w=400&q=80",
      description: "Perfect for family trips and group travel with comfortable seating.",
      capacity: "7 Seater",
      rate: "₹18/km"
    },
    {
      type: "Tempo Traveller",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=400&q=80",
      description: "Ideal for large groups and corporate travel with ample space.",
      capacity: "12-15 Seater",
      rate: "₹25/km"
    },
    {
      type: "Luxury Bus",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=400&q=80",
      description: "Premium comfort for large groups and long-distance journeys.",
      capacity: "35-45 Seater",
      rate: "₹40/km"
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

  const handleBooking = (tourName: string, tourType: string) => {
    toast({
      title: "Booking Initiated!",
      description: `Thank you for your interest in ${tourName}. Our team will contact you soon.`,
    });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domesticTours.map((tour, index) => (
              <div
                key={tour.title}
                className={`bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 fade-seq ${
                  visibleElements.has('fade-seq') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
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
                      onClick={() => handleBooking(tour.title, 'domestic')}
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {internationalTours.map((tour, index) => (
              <div
                key={tour.title}
                className={`bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 fade-seq ${
                  visibleElements.has('fade-seq') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img src={tour.image} alt={tour.title} className="w-full h-36 object-cover" />
                  <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-lg text-xs font-semibold">
                    Save ₹{parseInt(tour.originalPrice.replace('₹', '').replace(',', '')) - parseInt(tour.price.replace('₹', '').replace(',', ''))}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-blue-600 mb-2">{tour.title}</h3>
                  <p className="text-slate-700 mb-3 text-xs">{tour.description}</p>
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-3 h-3 text-slate-500" />
                    <span className="text-xs text-slate-600">{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-lg font-bold text-green-600">{tour.price}</span>
                    <span className="text-xs text-slate-500 line-through">{tour.originalPrice}</span>
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleBooking(tour.title, 'international')}
                      className="flex-1 bg-blue-600 text-white px-3 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-1 text-sm"
                    >
                      <ShoppingCart className="w-3 h-3" />
                      Book
                    </button>
                    <button className="bg-slate-100 text-slate-700 px-3 py-2 rounded-lg font-semibold hover:bg-slate-200 transition-colors flex items-center gap-1 text-sm">
                      <Eye className="w-3 h-3" />
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="rental" className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-800 mb-12 flex items-center gap-3">
            <Car className="w-8 h-8 text-blue-600" />
            Car Rental Services
          </h2>
          
          {/* Fleet Overview */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-slate-800 mb-8">Our Fleet</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {carFleet.map((vehicle, index) => (
                <div key={vehicle.type} className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300">
                  <img src={vehicle.image} alt={vehicle.type} className="w-full h-40 object-cover" />
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-blue-600 mb-2">{vehicle.type}</h4>
                    <p className="text-slate-700 mb-3 text-sm">{vehicle.description}</p>
                    <div className="flex justify-between items-center mb-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {vehicle.capacity}
                      </span>
                      <span className="text-xl font-bold text-green-600">{vehicle.rate}</span>
                    </div>
                    <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Book {vehicle.type}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

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
              "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&q=80"
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

      <div id="booking" className="h-1"></div>
    </div>
  );
};

export default Index;
