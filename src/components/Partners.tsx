
import React from 'react';

const Partners = () => {
  // Partner logos with their names for alt text
  const partners = [
    { name: "AWS", logoPath: "/lovable-uploads/03fd57a7-e749-45d7-975e-d5a05a3a7659.png", width: 120 },
    { name: "Microsoft for Startups", logoPath: "/lovable-uploads/b708cfc1-db2d-4e5a-ba6a-9edb331ccbe5.png", width: 140 },
    { name: "NVIDIA", logoPath: "/lovable-uploads/454039b0-3ea3-4a15-a3a6-215beb95e218.png", width: 120 },
    { name: "MongoDB", logoPath: "/lovable-uploads/135390a8-9999-41f3-a507-15bdce8926b8.png", width: 130 },
    { name: "Cloudflare", logoPath: "/lovable-uploads/a8fa5f5d-7044-49e4-bd82-ff15492878f9.png", width: 150 },
    { name: "Google Cloud", logoPath: "/lovable-uploads/2248fbb2-002a-42b0-93bc-b950a8efc8d7.png", width: 150 },
    { name: "Responsible AI", logoPath: "/lovable-uploads/b708cfc1-db2d-4e5a-ba6a-9edb331ccbe5.png", width: 150 },
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
                  className="max-h-10 max-w-full object-contain hover:opacity-100 transition-opacity" 
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
                  className="max-h-10 max-w-full object-contain hover:opacity-100 transition-opacity" 
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
