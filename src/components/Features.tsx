
import React from 'react';
import { Brain, BarChart3, Zap, Users, Filter, Clock } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => {
  return (
    <div className="bg-productica-blue-dark/50 border border-gray-800 rounded-lg p-6 hover:border-productica-blue/50 transition-colors group">
      <div className="w-12 h-12 rounded-lg bg-productica-blue/10 flex items-center justify-center mb-4 group-hover:bg-productica-blue/20 transition-colors">
        <Icon className="text-productica-blue h-6 w-6" />
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
          <h2 className="section-heading mb-4">AI-Powered Market Analysis</h2>
          <p className="text-gray-400">
            Our advanced AI algorithms analyze market trends, consumer behavior, and competitive landscapes to 
            provide actionable insights about your product's market fit.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard 
            icon={Brain}
            title="AI Trend Analysis"
            description="Advanced algorithms analyze current market trends to predict your product's performance and identify opportunities."
          />
          <FeatureCard 
            icon={BarChart3}
            title="Competitive Insights"
            description="Get detailed analysis of similar products, their market performance, and how your product compares."
          />
          <FeatureCard 
            icon={Zap}
            title="Quick Results"
            description="Receive comprehensive analysis in minutes, not days or weeks, enabling faster decision-making."
          />
          <FeatureCard 
            icon={Users}
            title="Target Audience Match"
            description="Evaluate how well your product aligns with your target audience's needs and preferences."
          />
          <FeatureCard 
            icon={Filter}
            title="Risk Assessment"
            description="Identify potential obstacles and challenges your product might face in the current market."
          />
          <FeatureCard 
            icon={Clock}
            title="Timing Optimization"
            description="Get insights on the optimal launch timing based on market readiness and seasonal trends."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
