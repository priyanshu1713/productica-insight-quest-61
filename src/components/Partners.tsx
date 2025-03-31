
import React from 'react';

const Partners = () => {
  // Partner logos with their names for alt text
  const partners = [
    { name: "AWS", logoPath: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6", width: 120 },
    { name: "Microsoft for Startups", logoPath: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b", width: 140 },
    { name: "NVIDIA", logoPath: "https://images.unsplash.com/photo-1518770660439-4636190af475", width: 120 },
    { name: "MongoDB", logoPath: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6", width: 130 },
    { name: "Cloudflare", logoPath: "https://images.unsplash.com/photo-1518770660439-4636190af475", width: 130 },
    { name: "Google Cloud", logoPath: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b", width: 130 },
    { name: "IBM", logoPath: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6", width: 150 },
  ];

  return (
    <div className="mt-12 w-full animate-fade-in">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-gray-300">Proudly Supported By</h3>
      </div>
      
      <div className="relative">
        {/* Gradient fade effect on sides */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-productica-blue-dark to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-productica-blue-dark to-transparent z-10"></div>
        
        {/* Scrolling partners container */}
        <div className="overflow-hidden py-4">
          <div className="flex space-x-12 items-center justify-start animate-scroll">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 bg-productica-blue-dark/30 p-4 rounded-lg flex items-center justify-center h-16"
                style={{ minWidth: `${partner.width}px` }}
              >
                <img 
                  src={partner.logoPath} 
                  alt={`${partner.name} logo`} 
                  className="max-h-10 max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0" 
                />
              </div>
            ))}
            
            {/* Duplicate logos for infinite scroll effect */}
            {partners.map((partner, index) => (
              <div 
                key={`duplicate-${index}`} 
                className="flex-shrink-0 bg-productica-blue-dark/30 p-4 rounded-lg flex items-center justify-center h-16"
                style={{ minWidth: `${partner.width}px` }}
              >
                <img 
                  src={partner.logoPath} 
                  alt={`${partner.name} logo`} 
                  className="max-h-10 max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
