
import React from 'react';

const Partners = () => {
  // Partner logos with their names for alt text
  const partners = [
    { name: "AWS", logoPath: "/lovable-uploads/9731e194-d6d0-47c1-8158-1868a883dcfc.png", width: 120 },
    { name: "Microsoft for Startups", logoPath: "/lovable-uploads/eb5f8b12-b587-4a0a-9dab-a20f71c26524.png", width: 140 },
    { name: "NVIDIA", logoPath: "/lovable-uploads/9731e194-d6d0-47c1-8158-1868a883dcfc.png", width: 120 },
    { name: "MongoDB", logoPath: "/lovable-uploads/eb5f8b12-b587-4a0a-9dab-a20f71c26524.png", width: 130 },
    { name: "Cloudflare", logoPath: "/lovable-uploads/9731e194-d6d0-47c1-8158-1868a883dcfc.png", width: 130 },
    { name: "Google Cloud", logoPath: "/lovable-uploads/eb5f8b12-b587-4a0a-9dab-a20f71c26524.png", width: 130 },
    { name: "Responsible AI", logoPath: "/lovable-uploads/9731e194-d6d0-47c1-8158-1868a883dcfc.png", width: 150 },
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
