
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    content: "Productica gave us the confidence to launch our product. The AI analysis accurately predicted our market success and helped us refine our offering.",
    author: "Sarah Johnson",
    role: "Founder, TechStart",
    rating: 5
  },
  {
    content: "We were unsure about our product's market fit until Productica provided clear insights. Their analysis saved us from a costly launch mistake.",
    author: "Michael Chen",
    role: "Product Manager, InnovateCo",
    rating: 5
  },
  {
    content: "The depth of analysis Productica provides is impressive. It identified market gaps we hadn't considered and helped us position our product perfectly.",
    author: "Rachel Williams",
    role: "CEO, Market Makers",
    rating: 5
  },
  {
    content: "Productica's AI analysis is a game-changer for product development. We've made it a standard part of our launch process.",
    author: "David Patel",
    role: "Director of Innovation, Future Tech",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="section-container relative">
      <div className="absolute inset-0 opacity-30">
        <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent"></div>
      </div>
      
      <div className="container mx-auto relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-productica-blue/10 border border-productica-blue/20 rounded-full px-4 py-1 text-sm text-gray-300 mb-4">
            Customer Success
          </div>
          <h2 className="section-heading mb-4">What Our Customers Say</h2>
          <p className="text-gray-400">
            Hear from businesses that have transformed their product development and launch strategies with Productica.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-productica-blue-dark/50 border border-gray-800 rounded-lg p-6">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-productica-blue text-productica-blue" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-gray-400 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
