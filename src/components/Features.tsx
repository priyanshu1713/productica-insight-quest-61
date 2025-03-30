
import React from 'react';
import { BarChart3, Users, TrendingUp, Check, Settings, PieChart } from 'lucide-react';

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType, 
  title: string, 
  description: string 
}) => {
  return (
    <div className="bg-productica-blue-dark/50 border border-gray-800 rounded-lg p-6 hover:border-productica-blue/50 transition-colors group">
      <div className="w-16 h-16 rounded-lg bg-productica-blue/10 flex items-center justify-center mb-6 group-hover:bg-productica-blue/20 transition-colors">
        <Icon className="text-productica-blue h-8 w-8" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section className="section-container relative" id="features">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-productica-blue/10 border border-productica-blue/20 rounded-full px-4 py-1 text-sm text-gray-300 mb-4">
            Powerful Features
          </div>
          <h2 className="section-heading mb-4">Productica Features</h2>
          <div className="flex justify-center mb-8">
            <div className="w-24 h-1 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-productica-blue to-transparent opacity-70"></div>
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMmMzLjMzMy0yIDYuNjY3LTIgMTAgMCA1IDMgMTAgMyAxNSAwIDMuMzMzLTIgNi42NjctMiAxMCAwIDUgMyAxMCAzIDE1IDAgMy4zMzMtMiA2LjY2Ny0yIDEwIDAgNSAzIDEwIDMgMTUgMCAzLjMzMy0yIDYuNjY3LTIgMTAgMCA1IDMgMTAgMyAxNSAwIDMuMzMzLTIgNi42NjctMiAxMCAwIiBzdHJva2U9IiMzYjgyZjYiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9zdmc+')]"></div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={BarChart3}
            title="Comprehensive Market Analysis"
            description="Gain a deep understanding of market dynamics, demand trends, and growth opportunities with Productica's AI-driven analysis."
          />
          <FeatureCard 
            icon={Users}
            title="Competitor Insights"
            description="Identify and analyze competitor strategies to gain a competitive edge in your product positioning and marketing efforts."
          />
          <FeatureCard 
            icon={TrendingUp}
            title="Real-Time Trend Monitoring"
            description="Stay ahead of emerging trends and changes in consumer behavior with real-time updates on market movements."
          />
          <FeatureCard 
            icon={Check}
            title="Market Fit Assessment"
            description="Evaluate how well your product aligns with the market, based on consumer needs, demographics, and regional preferences."
          />
          <FeatureCard 
            icon={Settings}
            title="Customizable Insights"
            description="Receive tailored insights that match your specific product needs, target audience, and industry segment."
          />
          <FeatureCard 
            icon={PieChart}
            title="Data Visualization & Reporting"
            description="Easily interpret complex data through intuitive visuals and customized reports that inform strategic decision-making."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
