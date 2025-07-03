
import React, { useState } from 'react';
import { CalendarPlus, User, Mail, Phone, MapPin, Calendar, Users, MessageSquare } from 'lucide-react';
import { toast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const EnquirySection: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    email: '',
    selectedTour: '',
    travelDates: '',
    numberOfPeople: '',
    customMessage: ''
  });

  const tourPackages = [
    'Golden Triangle Tour',
    'Kerala Backwaters',
    'Rajasthan Heritage Tour',
    'Goa Beach Holiday',
    'Himachal Adventure',
    'Europe Explorer',
    'Thailand Paradise',
    'Dubai Luxury',
    'Singapore Malaysia',
    'Bali Indonesia'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Received!",
      description: "We will get back to you soon with the details.",
    });
    setFormData({
      name: '',
      contactNumber: '',
      email: '',
      selectedTour: '',
      travelDates: '',
      numberOfPeople: '',
      customMessage: ''
    });
    setIsDialogOpen(false);
  };

  return (
    <section id="enquiry" className="py-20 bg-gradient-to-br from-blue-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Enquiry & Booking</h2>
          <p className="text-xl text-slate-700 mb-8">
            Ready to embark on your dream journey? Let us help you plan the perfect trip!
          </p>
        </div>

        <div className="flex justify-center">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-teal-400 text-white hover:shadow-2xl transition-all px-12 py-4 text-lg font-semibold"
              >
                <CalendarPlus className="w-6 h-6 mr-3" />
                Book Your Trip Now
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-center">Trip Enquiry Form</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contactNumber" className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Contact Number
                    </Label>
                    <Input
                      id="contactNumber"
                      name="contactNumber"
                      type="tel"
                      value={formData.contactNumber}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email ID
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <Label htmlFor="selectedTour" className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Selected Tour Package
                  </Label>
                  <Select onValueChange={(value) => handleSelectChange('selectedTour', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Choose your preferred tour package" />
                    </SelectTrigger>
                    <SelectContent>
                      {tourPackages.map((tour) => (
                        <SelectItem key={tour} value={tour}>
                          {tour}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="travelDates" className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Travel Dates
                    </Label>
                    <Input
                      id="travelDates"
                      name="travelDates"
                      type="date"
                      value={formData.travelDates}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="numberOfPeople" className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Number of People
                    </Label>
                    <Select onValueChange={(value) => handleSelectChange('numberOfPeople', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select number of travelers" />
                      </SelectTrigger>
                      <SelectContent>
                        {[...Array(10)].map((_, i) => (
                          <SelectItem key={i + 1} value={String(i + 1)}>
                            {i + 1} {i === 0 ? 'Person' : 'People'}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="customMessage" className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Custom Message
                  </Label>
                  <Textarea
                    id="customMessage"
                    name="customMessage"
                    value={formData.customMessage}
                    onChange={handleInputChange}
                    className="mt-1"
                    rows={4}
                    placeholder="Tell us about your preferences, special requirements, or any questions you have..."
                  />
                </div>

                <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-teal-400 text-white py-3 text-lg font-semibold">
                  <CalendarPlus className="w-5 h-5 mr-2" />
                  Submit Enquiry
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default EnquirySection;
