
import React, { useEffect } from 'react';
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
import { useLocation } from 'react-router-dom';

const Index = () => {
  const location = useLocation();

  // Handle hash URLs for direct section navigation
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1); // remove the # symbol
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      // If no hash, scroll to top when component mounts
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-productica-blue-dark">
      <Navbar />
      <Hero />
      <Features /> {/* already has id="features" */}
      <HowItWorks />
      <PricingPlans /> {/* already has id="pricing" */}
      <Testimonials />
      <ContactSection /> {/* already has id="contact" */}
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
