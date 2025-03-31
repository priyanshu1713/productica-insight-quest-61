
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import BookDemoDrawer from './BookDemoDrawer';

const CTA = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/30 via-productica-blue-dark to-productica-blue-dark"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent"></div>
        </div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-heading mb-6">
            Ready to Validate Your Product's Market Fit?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Join thousands of entrepreneurs and businesses making data-driven decisions with Productica.
            Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-productica-blue hover:bg-productica-blue-light">
              <a href="https://productica.in/agent.html" className="flex items-center">
                Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <BookDemoDrawer 
              trigger={
                <Button size="lg" variant="outline">
                  Contact Sales
                </Button>
              }
            />
          </div>
          <p className="text-gray-500 mt-6 text-sm">
            No credit card required. 14-day free trial.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
