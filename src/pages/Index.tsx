
import React from 'react';
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
  return (
    <div className="min-h-screen bg-productica-blue-dark">
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
