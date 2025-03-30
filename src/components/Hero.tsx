
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative pt-16 pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-productica-blue-dark via-productica-blue-dark to-indigo-950/30"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent"></div>
        </div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="bg-productica-blue/10 border border-productica-blue/20 rounded-full px-4 py-1 inline-flex items-center mb-6 animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-productica-blue mr-2"></div>
            <p className="text-sm text-gray-300">AI-Powered Market Analysis</p>
          </div>
          
          <h1 className="fancy-heading mb-6 animate-fade-in">
            Discover if Your Product is 
            <span className="text-productica-blue block mt-2">Market-Ready</span>
            <span className="fancy-heading-italic block text-gray-400 mt-2">with AI Precision</span>
          </h1>
          
          <p className="text-gray-400 max-w-2xl mb-8 animate-fade-in">
            Productica analyzes real-time market data to evaluate your product's fit, 
            giving entrepreneurs and businesses data-backed insights for confident decision making.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Button size="lg" className="bg-productica-blue hover:bg-productica-blue-light">
              <Link to="/signup" className="flex items-center">
                Start Your Analysis <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline">
              <Link to="/features">Explore Features</Link>
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <div className="bg-productica-blue-dark/50 border border-gray-800 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-productica-blue text-xl font-bold mb-2">93%</div>
              <p className="text-gray-400 text-sm">Accuracy in market trend predictions</p>
            </div>
            <div className="bg-productica-blue-dark/50 border border-gray-800 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-productica-blue text-xl font-bold mb-2">10,000+</div>
              <p className="text-gray-400 text-sm">Products analyzed successfully</p>
            </div>
            <div className="bg-productica-blue-dark/50 border border-gray-800 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-productica-blue text-xl font-bold mb-2">24/7</div>
              <p className="text-gray-400 text-sm">Real-time data monitoring</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-productica-blue/50 to-transparent"></div>
    </section>
  );
};

export default Hero;
