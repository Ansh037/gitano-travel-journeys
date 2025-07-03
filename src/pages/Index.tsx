
import { useEffect, useState } from 'react';
import { toast } from "@/hooks/use-toast";
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import DomesticTours from '@/components/DomesticTours';
import InternationalTours from '@/components/InternationalTours';
import CarRental from '@/components/CarRental';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const [visibleElements, setVisibleElements] = useState(new Set());

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

  const handleBooking = (tourName: string, tourType: string) => {
    toast({
      title: "Booking Initiated!",
      description: `Thank you for your interest in ${tourName}. Our team will contact you soon.`,
    });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <Navigation scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <AboutSection />
      <DomesticTours visibleElements={visibleElements} handleBooking={handleBooking} />
      <InternationalTours visibleElements={visibleElements} handleBooking={handleBooking} />
      <CarRental />
      <Gallery />
      <Testimonials />
      <ContactSection />
      <div id="booking" className="h-1"></div>
    </div>
  );
};

export default Index;
