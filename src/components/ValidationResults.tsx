
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { PieChart, ArrowRight } from "lucide-react";

// Generate gauge SVG based on score
const ScoreGauge = ({ score }: { score: number }) => {
  // Calculate rotation based on score (0-100)
  const rotation = (score / 100) * 180; // 180 degrees is the full range
  
  // Determine the color based on the score
  const getColor = () => {
    if (score <= 40) return "#ef4444"; // red for bad
    if (score <= 60) return "#f59e0b"; // amber for average
    if (score <= 80) return "#10b981"; // green for good
    return "#8b5cf6"; // purple for fire
  };
  
  const getCategory = () => {
    if (score <= 40) return "Needs Work";
    if (score <= 60) return "Average";
    if (score <= 80) return "Good";
    return "Fire 🔥";
  };

  return (
    <div className="relative w-64 h-32 mx-auto">
      {/* Gauge background */}
      <svg className="w-full h-full" viewBox="0 0 200 100">
        {/* Grey background arc */}
        <path
          d="M20 90 A 80 80 0 0 1 180 90"
          fill="none"
          stroke="#374151"
          strokeWidth="10"
        />
        
        {/* Colored progress arc */}
        <path
          d="M20 90 A 80 80 0 0 1 180 90"
          fill="none"
          stroke={getColor()}
          strokeWidth="10"
          strokeDasharray="251.2"
          strokeDashoffset={251.2 - (251.2 * score) / 100}
          className="transition-all duration-1000 ease-out"
        />
        
        {/* Needle */}
        <g className="origin-[100px_90px] transition-transform duration-1000 ease-out" 
           style={{ transform: `rotate(${-90 + rotation}deg)` }}>
          <line x1="100" y1="90" x2="100" y2="30" stroke="#fff" strokeWidth="2" />
          <circle cx="100" cy="90" r="6" fill="#fff" />
        </g>
        
        {/* Labels */}
        <text x="20" y="110" fontSize="10" fill="#ef4444">0</text>
        <text x="60" y="110" fontSize="10" fill="#f59e0b">40</text>
        <text x="100" y="110" fontSize="10" fill="#10b981">60</text>
        <text x="140" y="110" fontSize="10" fill="#8b5cf6">80</text>
        <text x="180" y="110" fontSize="10" fill="#8b5cf6">100</text>
      </svg>
      
      {/* Score display */}
      <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="text-4xl font-bold">{score}</p>
        <p className="text-sm opacity-80">{getCategory()}</p>
      </div>
    </div>
  );
};

interface ValidationResultsProps {
  score: number;
  ideaName: string;
  onStartOver: () => void;
}

const ValidationResults = ({ score, ideaName, onStartOver }: ValidationResultsProps) => {
  // Determine if user qualifies for a discount
  const hasDiscount = score >= 80;
  const discountPercent = 3; // 3% discount for high scores
  
  return (
    <Card className="w-full max-w-3xl mx-auto bg-productica-blue-dark/50 border border-gray-800 animate-fade-in">
      <CardHeader>
        <CardTitle className="text-2xl">Idea Validation Results</CardTitle>
        <CardDescription>
          Here's how your idea "{ideaName}" performed in our initial validation
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-8">
        <div className="text-center">
          <h3 className="text-lg font-medium mb-4">Validation Score</h3>
          <ScoreGauge score={score} />
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-medium">What This Score Means</h3>
          
          {score <= 40 && (
            <p className="text-gray-400">
              Your idea shows potential but needs significant refinement. Consider revisiting the core
              problem you're solving and your target audience.
            </p>
          )}
          
          {score > 40 && score <= 60 && (
            <p className="text-gray-400">
              Your idea has a solid foundation but could benefit from further development. Focus on
              strengthening your unique value proposition and market differentiation.
            </p>
          )}
          
          {score > 60 && score <= 80 && (
            <p className="text-gray-400">
              Your idea shows strong potential! With some fine-tuning of your business model and execution
              strategy, you could have a winner.
            </p>
          )}
          
          {score > 80 && (
            <p className="text-gray-400">
              Excellent! Your idea has outstanding potential. The core concept is solid with a clear
              value proposition and market fit. You're ready for detailed market analysis.
            </p>
          )}
        </div>
        
        <div className="bg-productica-blue/20 border border-productica-blue/30 rounded-lg p-6">
          <h3 className="font-medium mb-2 flex items-center">
            <PieChart className="mr-2 h-5 w-5 text-productica-blue" />
            Ready for In-Depth Market Analysis?
          </h3>
          <p className="text-gray-400 mb-4">
            Get a comprehensive product-market fit analysis with actionable insights and detailed recommendations.
            {hasDiscount && (
              <span className="block mt-2 text-green-500">
                🎉 You've earned a {discountPercent}% discount on the premium analysis!
              </span>
            )}
          </p>
          <Button className="w-full bg-productica-blue hover:bg-productica-blue-light">
            <Link to="/dashboard" className="flex items-center justify-center w-full">
              Start Premium Analysis <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={onStartOver}>
          Validate Another Idea
        </Button>
        <Button variant="outline">
          <Link to="/dashboard">View Dashboard</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ValidationResults;
