
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';
import { Link } from "react-router-dom";

const PricingPlans = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  
  const plans = [
    {
      name: "Starter",
      description: "Perfect for testing the waters",
      price: billingPeriod === 'monthly' ? 29 : 290,
      features: [
        "5 product analyses per month",
        "Basic market trend data",
        "7-day data history",
        "Email support",
        "Standard report generation"
      ],
      cta: "Get Started",
      highlighted: false
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses",
      price: billingPeriod === 'monthly' ? 79 : 790,
      features: [
        "20 product analyses per month",
        "Advanced market trend analysis",
        "30-day data history",
        "Priority email & chat support",
        "Competitor analysis",
        "Custom report generation"
      ],
      cta: "Get Started",
      highlighted: true
    },
    {
      name: "Enterprise",
      description: "For established businesses",
      price: billingPeriod === 'monthly' ? 199 : 1990,
      features: [
        "Unlimited product analyses",
        "Real-time market trend analysis",
        "90-day data history",
        "24/7 priority support",
        "Comprehensive competitor analysis",
        "Custom report generation",
        "API access",
        "Dedicated account manager"
      ],
      cta: "Contact Sales",
      highlighted: false
    }
  ];

  return (
    <section className="section-container relative" id="pricing">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-productica-blue/10 border border-productica-blue/20 rounded-full px-4 py-1 text-sm text-gray-300 mb-4">
            Pricing Plans
          </div>
          <h2 className="section-heading mb-4">Choose the Plan That Suits You</h2>
          <p className="text-gray-400 mb-8">
            Our flexible pricing plans are designed to accommodate businesses of all sizes.
            Select the perfect plan for your needs.
          </p>
          
          <div className="inline-flex items-center bg-gray-900/50 p-1 rounded-lg">
            <button
              className={`px-4 py-2 rounded-md text-sm ${
                billingPeriod === 'monthly' ? 'bg-productica-blue text-white' : 'text-gray-400'
              }`}
              onClick={() => setBillingPeriod('monthly')}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-2 rounded-md text-sm ${
                billingPeriod === 'yearly' ? 'bg-productica-blue text-white' : 'text-gray-400'
              }`}
              onClick={() => setBillingPeriod('yearly')}
            >
              Yearly
              <span className="ml-1 text-xs bg-green-500/20 text-green-500 px-1.5 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`
                bg-productica-blue-dark/50 border rounded-lg overflow-hidden flex flex-col
                ${plan.highlighted ? 
                  'border-productica-blue shadow-lg shadow-productica-blue/20 relative z-10 scale-105 my-4 md:my-0' : 
                  'border-gray-800'
                }
              `}
            >
              {plan.highlighted && (
                <div className="bg-productica-blue text-white py-1 text-xs text-center font-medium">
                  MOST POPULAR
                </div>
              )}
              
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-400 ml-2">/{billingPeriod === 'monthly' ? 'month' : 'year'}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="text-green-500 h-5 w-5 mt-0.5 shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-6 pt-0">
                <Button 
                  className={`w-full ${
                    plan.highlighted ? 'bg-productica-blue hover:bg-productica-blue-light' : 'bg-gray-800 hover:bg-gray-700'
                  }`}
                >
                  <Link to={plan.cta === "Contact Sales" ? "/contact" : "/signup"}>
                    {plan.cta}
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            All plans include a 14-day money-back guarantee. No questions asked.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
