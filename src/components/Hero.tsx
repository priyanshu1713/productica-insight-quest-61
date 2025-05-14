
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Partners from './Partners';

const Hero = () => {
  return (
    <section className="relative pt-20 pb-28 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-productica-blue-dark/80 via-productica-blue-dark/70 to-indigo-950/50"></div>
        
        {/* Space for background image - it will be added by the user */}
        <div className="absolute inset-0 bg-center bg-cover z-[-1]"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-productica-blue/20 rounded-full blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-productica-purple/20 rounded-full blur-3xl opacity-20 animate-blob" style={{ animationDelay: "2s" }}></div>
        
        {/* Glass overlay for text readability */}
        <div className="absolute inset-0 backdrop-blur-sm bg-productica-blue-dark/30"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="glass-primary rounded-full px-4 py-1.5 inline-flex items-center mb-6 animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-productica-blue mr-2 animate-pulse-slow"></div>
            <p className="text-sm text-gray-300">AI-Powered Market Analysis</p>
          </div>
          
          <h1 className="fancy-heading mb-8 animate-fade-in">
            Discover if Your Product is 
            <span className="text-productica-blue block mt-2">Market-Ready</span>
            <span className="fancy-heading-italic block text-gray-400 mt-2">with AI Precision</span>
          </h1>
          
          <p className="text-gray-300 max-w-2xl mb-10 text-lg animate-fade-in">
            Productica analyzes real-time market data to evaluate your product's fit, 
            giving entrepreneurs and businesses data-backed insights for confident decision making.
          </p>
          
          <div className="animate-fade-in relative glow">
            <Button size="lg" className="bg-productica-blue hover:bg-productica-blue-light text-white shadow-lg transition-all">
              <a href="https://productica.in/agent.html" className="flex items-center">
                Start Your Analysis <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
          
          {/* Partners section instead of Explore Features button */}
          <Partners />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <div className="glass-card rounded-lg p-6 transition-all duration-300 hover:bg-productica-blue-dark/90">
              <div className="text-productica-blue text-xl font-bold mb-2">93%</div>
              <p className="text-gray-400 text-sm">Accuracy in market trend predictions</p>
            </div>
            <div className="glass-card rounded-lg p-6 transition-all duration-300 hover:bg-productica-blue-dark/90">
              <div className="text-productica-blue text-xl font-bold mb-2">10,000+</div>
              <p className="text-gray-400 text-sm">Products analyzed successfully</p>
            </div>
            <div className="glass-card rounded-lg p-6 transition-all duration-300 hover:bg-productica-blue-dark/90">
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
