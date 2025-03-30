
import React from 'react';

const steps = [
  {
    number: "01",
    title: "Input Product Details",
    description: "Provide information about your product, including features, target market, and pricing strategy."
  },
  {
    number: "02",
    title: "AI Market Analysis",
    description: "Our AI analyzes real-time market data, trends, and competitor information to evaluate market fit."
  },
  {
    number: "03",
    title: "Receive Insights Report",
    description: "Get a comprehensive report with market-fit score, strengths, weaknesses, and improvement suggestions."
  },
  {
    number: "04",
    title: "Implement Recommendations",
    description: "Use the actionable insights to refine your product and increase its chances of market success."
  }
];

const HowItWorks = () => {
  return (
    <section className="section-container relative bg-gradient-to-b from-productica-blue-dark to-indigo-950/70">
      <div className="absolute inset-0 opacity-30">
        <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent"></div>
      </div>
      
      <div className="container mx-auto relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-productica-blue/10 border border-productica-blue/20 rounded-full px-4 py-1 text-sm text-gray-300 mb-4">
            Simple Process
          </div>
          <h2 className="section-heading mb-4">How Productica Works</h2>
          <p className="text-gray-400">
            Our streamlined process makes it easy to get valuable insights about your product's market potential.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-productica-blue-dark/50 border border-gray-800 rounded-lg p-6 h-full">
                <div className="text-productica-blue text-4xl font-bold mb-4 opacity-50">{step.number}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
