
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="py-20 bg-productica-blue-dark/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-productica-blue/10 border border-productica-blue/20 rounded-full px-4 py-1 text-sm text-gray-300 mb-4">
            Get In Touch
          </div>
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-gray-400">
            Have questions or need assistance? Our team is here to help you get started with Productica.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-productica-blue-dark/30 p-8 rounded-lg border border-gray-800">
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input 
                    id="name" 
                    placeholder="John Doe" 
                    required 
                    className="bg-productica-blue-dark/50 border-gray-700 focus:border-productica-blue"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    required 
                    className="bg-productica-blue-dark/50 border-gray-700 focus:border-productica-blue"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input 
                  id="subject" 
                  placeholder="How can we help you?" 
                  required 
                  className="bg-productica-blue-dark/50 border-gray-700 focus:border-productica-blue"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us more about your project, needs, and timeline..." 
                  rows={5} 
                  required 
                  className="bg-productica-blue-dark/50 border-gray-700 focus:border-productica-blue"
                />
              </div>
              
              <Button type="submit" className="w-full bg-productica-blue hover:bg-productica-blue-light">
                Send Message
              </Button>
            </form>
          </div>
          
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <p className="text-gray-400 mb-8">
                Our team is ready to assist you with any questions about our product, pricing, or how Productica can help grow your business.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-productica-blue/20 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-productica-blue" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email Us</h3>
                    <p className="text-gray-400 mt-1">support@productica.com</p>
                    <p className="text-gray-400">sales@productica.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-productica-blue/20 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-productica-blue" />
                  </div>
                  <div>
                    <h3 className="font-medium">Call Us</h3>
                    <p className="text-gray-400 mt-1">+1 (555) 123-4567</p>
                    <p className="text-gray-400">Mon-Fri 9AM to 6PM EST</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-productica-blue/20 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-productica-blue" />
                  </div>
                  <div>
                    <h3 className="font-medium">Visit Us</h3>
                    <p className="text-gray-400 mt-1">123 Innovation Way</p>
                    <p className="text-gray-400">San Francisco, CA 94107</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-productica-blue/10 border border-productica-blue/20 rounded-lg">
              <h3 className="font-semibold mb-2">Looking for a demo?</h3>
              <p className="text-gray-400 mb-4">Schedule a personalized walkthrough of Productica with one of our product specialists.</p>
              <Button variant="outline" className="border-productica-blue text-productica-blue hover:bg-productica-blue/10">
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
