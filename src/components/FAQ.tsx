
import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How accurate is Productica's market analysis?",
    answer: "Our AI algorithms have demonstrated a 93% accuracy rate in predicting market trends and product-market fit. The system continuously learns from new data to improve its predictions."
  },
  {
    question: "How long does it take to get results?",
    answer: "Most analyses are completed within 30 minutes. For more complex products or markets, it may take up to 2 hours to generate a comprehensive report."
  },
  {
    question: "Can Productica analyze products in any industry?",
    answer: "Yes, Productica's AI is trained on data from a wide range of industries. While performance may vary slightly depending on the industry's data availability, our system can provide valuable insights for virtually any product category."
  },
  {
    question: "How do credits work?",
    answer: "Credits are used to purchase analyses. One credit equals one full product analysis. Different plans come with different numbers of credits, and additional credits can be purchased as needed."
  },
  {
    question: "Is my product information kept confidential?",
    answer: "Absolutely. We take data security very seriously. Your product information is encrypted and never shared with third parties. We use it solely to generate your analysis."
  },
  {
    question: "Can I upgrade or downgrade my plan later?",
    answer: "Yes, you can change your plan at any time. When upgrading, you'll be prorated for the remainder of your billing cycle. When downgrading, changes will take effect at the start of your next billing cycle."
  }
];

const FAQ = () => {
  return (
    <section className="section-container" id="faq">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-productica-blue/10 border border-productica-blue/20 rounded-full px-4 py-1 text-sm text-gray-300 mb-4">
            FAQ
          </div>
          <h2 className="section-heading mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400">
            Find answers to common questions about Productica and how it can help your business.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-800 rounded-lg overflow-hidden bg-productica-blue-dark/50"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-800/30 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
