import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Calendar, Clock } from "lucide-react";

interface BookDemoDrawerProps {
  trigger?: React.ReactNode;
}

const BookDemoDrawer = ({ trigger }: BookDemoDrawerProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    timezone: 'IST',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', 
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const timezones = [
    { value: 'IST', label: 'India Standard Time (IST)' },
    { value: 'EST', label: 'Eastern Standard Time (EST)' },
    { value: 'PST', label: 'Pacific Standard Time (PST)' },
    { value: 'GMT', label: 'Greenwich Mean Time (GMT)' },
    { value: 'CET', label: 'Central European Time (CET)' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSelectChange = (value: string, field: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent, onClose: () => void) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.preferredDate || !formData.preferredTime) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Demo Scheduled!",
        description: `We've scheduled your demo for ${formData.preferredDate} at ${formData.preferredTime}. You'll receive a confirmation email shortly.`,
      });
      
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        timezone: 'IST',
        preferredDate: '',
        preferredTime: '',
        message: ''
      });
      
      onClose();
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "We couldn't schedule your demo. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        {trigger || (
          <Button variant="outline" className="border-productica-blue text-productica-blue hover:bg-productica-blue/10">
            Book a Demo
          </Button>
        )}
      </DrawerTrigger>
      <DrawerContent className="bg-productica-blue-dark border-t border-gray-800">
        <div className="mx-auto w-full max-w-md">
          <DrawerHeader>
            <DrawerTitle className="text-2xl text-white">Book Your Personalized Demo</DrawerTitle>
            <DrawerDescription className="text-gray-400">
              Schedule a walkthrough of Productica with one of our product specialists.
            </DrawerDescription>
          </DrawerHeader>
          
          <div className="p-4 pb-0">
            <form id="demo-form" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input 
                    id="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe" 
                    className="bg-productica-blue-dark/50 border-gray-700" 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input 
                    id="email" 
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com" 
                    className="bg-productica-blue-dark/50 border-gray-700" 
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input 
                    id="company" 
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="ACME Inc." 
                    className="bg-productica-blue-dark/50 border-gray-700" 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 123-4567" 
                    className="bg-productica-blue-dark/50 border-gray-700" 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Timezone</Label>
                <Select 
                  value={formData.timezone} 
                  onValueChange={(value) => handleSelectChange(value, 'timezone')}
                >
                  <SelectTrigger className="bg-productica-blue-dark/50 border-gray-700">
                    <SelectValue placeholder="Select your timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    {timezones.map((tz) => (
                      <SelectItem key={tz.value} value={tz.value}>
                        {tz.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="preferredDate">Preferred Date *</Label>
                  <div className="relative">
                    <Input 
                      id="preferredDate" 
                      type="date"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className="bg-productica-blue-dark/50 border-gray-700 pl-10" 
                      min={new Date().toISOString().split('T')[0]}
                    />
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Preferred Time *</Label>
                  <div className="relative">
                    <Select 
                      value={formData.preferredTime} 
                      onValueChange={(value) => handleSelectChange(value, 'preferredTime')}
                    >
                      <SelectTrigger className="bg-productica-blue-dark/50 border-gray-700 pl-10">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Additional Information</Label>
                <Textarea 
                  id="message" 
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your specific needs or questions..." 
                  rows={3} 
                  className="bg-productica-blue-dark/50 border-gray-700" 
                />
              </div>
            </form>
          </div>
          
          <DrawerFooter>
            <Button 
              type="submit" 
              className="w-full bg-productica-blue hover:bg-productica-blue-light"
              disabled={isSubmitting}
              onClick={(e) => {
                const closeDrawer = () => {
                  const closeButton = document.querySelector('[data-state="open"] button[data-radix-collection-item]');
                  if (closeButton instanceof HTMLElement) {
                    closeButton.click();
                  }
                };
                handleSubmit(e, closeDrawer);
              }}
            >
              {isSubmitting ? 'Scheduling...' : 'Schedule Demo'}
            </Button>
            
            <DrawerClose asChild>
              <Button variant="outline" className="border-gray-700">
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default BookDemoDrawer;
