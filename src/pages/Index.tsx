
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import PricingPlans from '../components/PricingPlans';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Index = () => {
  const location = useLocation();

  // Handle hash URLs for direct section navigation with improved smoothness
  useEffect(() => {
    const handleHashChange = () => {
      if (location.hash) {
        const id = location.hash.substring(1); // remove the # symbol
        const element = document.getElementById(id);
        if (element) {
          const offset = 80; // Match the offset in Navbar
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      } else {
        // If no hash, scroll to top when component mounts
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    // Call handler immediately and on location changes
    handleHashChange();
  }, [location]);

  return (
    <div className="min-h-screen bg-productica-blue-dark relative">
      {/* Decorative background elements */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        {/* These are decorative blobs/gradients that will appear behind content */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-productica-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-productica-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-productica-indigo/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Main content */}
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <PricingPlans />
      <Testimonials />
      <ContactSection />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
