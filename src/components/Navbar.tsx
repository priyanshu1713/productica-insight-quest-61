
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { MessageCircle } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      
      // Use setTimeout to ensure scroll happens after navigation
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // We're already on the home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      // If already on home page, scroll to top smoothly
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="py-4 border-b border-gray-800 sticky top-0 z-50 backdrop-blur-md bg-productica-blue-dark/80">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-productica-blue flex items-center justify-center">
            <img 
              src="/lovable-uploads/52f9b08d-8558-4dae-b4bd-dad6b850602e.png" 
              alt="Productica Logo" 
              className="w-6 h-6 object-contain"
            />
          </div>
          <span className="text-xl font-bold">Productica</span>
        </div>
        
        <div className="hidden md:flex items-center gap-10">
          <a 
            href="/" 
            onClick={handleHomeClick}
            className="text-sm text-gray-300 hover:text-white transition-colors"
          >
            Home
          </a>
          <button 
            onClick={() => scrollToSection('features')} 
            className="text-sm text-gray-300 hover:text-white transition-colors"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('pricing')} 
            className="text-sm text-gray-300 hover:text-white transition-colors"
          >
            Pricing
          </button>
          <Link to="/contact" className="text-sm text-gray-300 hover:text-white transition-colors">
            Contact
          </Link>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            <span className="text-xs text-gray-400">AI Online</span>
          </div>
          <Button variant="outline" size="sm" className="hidden md:flex">
            <Link to="/login">Login</Link>
          </Button>
          <Button size="sm" className="bg-productica-blue hover:bg-productica-blue-light">
            <Link to="/signup">Get Started</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
