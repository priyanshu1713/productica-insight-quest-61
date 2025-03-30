
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="py-4 border-b border-gray-800 sticky top-0 z-50 backdrop-blur-md bg-productica-blue-dark/80">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-productica-blue flex items-center justify-center">
            <span className="text-white text-xl font-bold">P</span>
          </div>
          <span className="text-xl font-bold">Productica</span>
        </div>
        
        <div className="hidden md:flex items-center gap-10">
          <Link to="/" className="text-sm text-gray-300 hover:text-white transition-colors">Home</Link>
          <Link to="/features" className="text-sm text-gray-300 hover:text-white transition-colors">Features</Link>
          <Link to="/pricing" className="text-sm text-gray-300 hover:text-white transition-colors">Pricing</Link>
          <Link to="/blog" className="text-sm text-gray-300 hover:text-white transition-colors">Blog</Link>
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
