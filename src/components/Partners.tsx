
import React, { useEffect, useRef } from 'react';

const Partners = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Partner logos with their names for alt text
  const partners = [
    { 
      name: "Microsoft for Startups", 
      logoPath: "/lovable-uploads/4b9f490c-a7d0-4a24-8818-7250a967b3d1.png", 
      width: 160 
    },
    { 
      name: "Responsible AI Licenses", 
      logoPath: "/lovable-uploads/36d2c6bc-76ae-4337-ac62-4e5763d61d2e.png", 
      width: 180 
    },
    { 
      name: "Google Cloud", 
      logoPath: "/lovable-uploads/058c3fd9-17d8-46a3-93e9-0cdaaf155384.png", 
      width: 200 
    },
    { 
      name: "NVIDIA", 
      logoPath: "/lovable-uploads/989ca7a1-727d-422b-a67a-1ba127b6ef61.png", 
      width: 150 
    },
    { 
      name: "Cloudflare", 
      logoPath: "/lovable-uploads/4654309b-6f14-44aa-b7a4-8a551083528f.png", 
      width: 200 
    },
    { 
      name: "Amazon", 
      logoPath: "/lovable-uploads/6c16efc4-16c3-4114-8416-2518ab0ea8f5.png", 
      width: 140 
    }
  ];

  // Add subtle float animation to logos on mouseover
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const randomLogo = Math.floor(Math.random() * partners.length);
        const logoElements = scrollContainerRef.current.querySelectorAll('.partner-logo');
        
        if (logoElements[randomLogo]) {
          logoElements[randomLogo].classList.add('highlight-logo');
          
          setTimeout(() => {
            logoElements[randomLogo].classList.remove('highlight-logo');
          }, 2000);
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [partners.length]);

  return (
    <div className="mt-12 w-full animate-fade-in">
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold text-gray-300">Proudly Supported By</h3>
      </div>
      
      <div className="relative">
        {/* Gradient fade effect on sides */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-productica-blue-dark to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-productica-blue-dark to-transparent z-10"></div>
        
        {/* Scrolling partners container */}
        <div className="overflow-hidden py-6" ref={scrollContainerRef}>
          <div className="flex space-x-16 items-center justify-start animate-scroll">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 bg-productica-blue-dark/30 p-5 rounded-lg border border-gray-800 flex items-center justify-center h-20 partner-logo-container hover:border-productica-blue/50 transition-all duration-500"
                style={{ minWidth: `${partner.width}px` }}
              >
                <img 
                  src={partner.logoPath} 
                  alt={`${partner.name} logo`} 
                  className="max-h-12 max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity partner-logo" 
                />
              </div>
            ))}
            
            {/* Duplicate logos for infinite scroll effect */}
            {partners.map((partner, index) => (
              <div 
                key={`duplicate-${index}`} 
                className="flex-shrink-0 bg-productica-blue-dark/30 p-5 rounded-lg border border-gray-800 flex items-center justify-center h-20 partner-logo-container hover:border-productica-blue/50 transition-all duration-500"
                style={{ minWidth: `${partner.width}px` }}
              >
                <img 
                  src={partner.logoPath} 
                  alt={`${partner.name} logo`} 
                  className="max-h-12 max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity partner-logo" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add CSS for the animations */}
      <style jsx>{`
        @keyframes floatAnimation {
          0% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0); }
        }
        
        .highlight-logo {
          animation: floatAnimation 2s ease-in-out;
        }
        
        .partner-logo-container:hover .partner-logo {
          transform: scale(1.05);
          transition: transform 0.3s ease-out;
        }
        
        .partner-logo {
          transition: transform 0.3s ease-out, opacity 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default Partners;
