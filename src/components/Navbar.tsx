
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { MessageCircle, Menu, X } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setActiveLink(sectionId);
    
    // If we're not on the home page, navigate to home first with the hash
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
    } else {
      // We're already on the home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        // Improved smooth scrolling with offset
        const offset = 100; // Adjust this value based on your navbar height
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        // Add a subtle flash effect to the section
        element.classList.add('section-highlight');
        setTimeout(() => {
          element.classList.remove('section-highlight');
        }, 1000);
      }
    }
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveLink(null);
    
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      // If already on home page, scroll to top smoothly
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="py-4 border-b border-white/10 sticky top-0 z-50 backdrop-blur-md bg-productica-black/80">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
            <img 
              src="/lovable-uploads/52f9b08d-8558-4dae-b4bd-dad6b850602e.png" 
              alt="Productica Logo" 
              className="w-6 h-6 object-contain"
            />
          </div>
          <span className="text-xl font-bold">Productica</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <a 
            href="/" 
            onClick={handleHomeClick}
            className={`text-sm hover:text-white transition-colors duration-300 relative ${activeLink === null ? 'text-white' : 'text-gray-300'}`}
          >
            Home
            {activeLink === null && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white animate-fade-in" />
            )}
          </a>
          <button 
            onClick={() => scrollToSection('features')} 
            className={`text-sm hover:text-white transition-colors duration-300 relative ${activeLink === 'features' ? 'text-white' : 'text-gray-300'}`}
          >
            Features
            {activeLink === 'features' && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white animate-fade-in" />
            )}
          </button>
          <button 
            onClick={() => scrollToSection('pricing')} 
            className={`text-sm hover:text-white transition-colors duration-300 relative ${activeLink === 'pricing' ? 'text-white' : 'text-gray-300'}`}
          >
            Pricing
            {activeLink === 'pricing' && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white animate-fade-in" />
            )}
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className={`text-sm hover:text-white transition-colors duration-300 relative ${activeLink === 'contact' ? 'text-white' : 'text-gray-300'}`}
          >
            Contact
            {activeLink === 'contact' && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white animate-fade-in" />
            )}
          </button>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse-slow"></div>
            <span className="text-xs text-gray-400">AI Online</span>
          </div>
          <Button variant="outline" size="sm" className="hidden md:flex hover:bg-white/5 border-white/20 transition-colors duration-300">
            <Link to="/login">Login</Link>
          </Button>
          <Button size="sm" className="bg-white hover:bg-gray-200 text-productica-dark transition-all duration-300 transform hover:scale-105">
            <a href="https://productica.in/agent.html">Get Started</a>
          </Button>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none" 
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-productica-black/95 backdrop-blur-md border-b border-white/10 animate-fade-in">
          <div className="container mx-auto py-4 flex flex-col space-y-4">
            <a 
              href="/" 
              onClick={(e) => {
                handleHomeClick(e);
                toggleMobileMenu();
              }}
              className="text-sm text-gray-300 hover:text-white transition-colors duration-300 py-2"
            >
              Home
            </a>
            <button 
              onClick={() => {
                scrollToSection('features');
                toggleMobileMenu();
              }} 
              className="text-sm text-gray-300 hover:text-white transition-colors duration-300 text-left py-2"
            >
              Features
            </button>
            <button 
              onClick={() => {
                scrollToSection('pricing');
                toggleMobileMenu();
              }} 
              className="text-sm text-gray-300 hover:text-white transition-colors duration-300 text-left py-2"
            >
              Pricing
            </button>
            <button 
              onClick={() => {
                scrollToSection('contact');
                toggleMobileMenu();
              }} 
              className="text-sm text-gray-300 hover:text-white transition-colors duration-300 text-left py-2"
            >
              Contact
            </button>
            <div className="flex items-center justify-between pt-2 border-t border-white/10">
              <Button variant="outline" size="sm" className="w-full mr-2 border-white/20">
                <Link to="/login" onClick={() => toggleMobileMenu()}>Login</Link>
              </Button>
              <Button size="sm" className="bg-white hover:bg-gray-200 text-productica-dark w-full">
                <a href="https://productica.in/agent.html" onClick={() => toggleMobileMenu()}>
                  Get Started
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
