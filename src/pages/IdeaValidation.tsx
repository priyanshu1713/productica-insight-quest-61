
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import IdeaValidationForm from "../components/IdeaValidationForm";
import ValidationResults from "../components/ValidationResults";
import { toast } from "@/hooks/use-toast";

// Type for form values
type FormValues = {
  ideaName: string;
  description: string;
  targetAudience: string;
  problemSolved: string;
  uniqueValue: string;
};

const IdeaValidation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [validationScore, setValidationScore] = useState(0);
  const [ideaName, setIdeaName] = useState("");
  
  // Mock validation algorithm - in a real app, this would be a more sophisticated analysis
  const calculateValidationScore = (values: FormValues) => {
    // Simple scoring algorithm for demonstration purposes
    let score = 0;
    
    // Idea description length (longer descriptions might indicate more thought)
    const descLength = values.description.length;
    if (descLength > 200) score += 25;
    else if (descLength > 100) score += 15;
    else score += 10;
    
    // Problem description scoring
    const problemLength = values.problemSolved.length;
    if (problemLength > 150) score += 25;
    else if (problemLength > 75) score += 15;
    else score += 10;
    
    // Unique value proposition scoring
    const valueLength = values.uniqueValue.length;
    if (valueLength > 150) score += 25;
    else if (valueLength > 75) score += 15;
    else score += 10;
    
    // Target audience specificity
    const targetLength = values.targetAudience.length;
    if (targetLength > 50) score += 25;
    else if (targetLength > 25) score += 15;
    else score += 10;
    
    // Add some randomness to make the demo more interesting
    const randomFactor = Math.floor(Math.random() * 15) - 5; // -5 to +10
    
    // Final score calculation
    let finalScore = Math.min(100, Math.max(0, score + randomFactor));
    
    return Math.round(finalScore);
  };

  const handleFormSubmit = (values: FormValues) => {
    setIsLoading(true);
    setIdeaName(values.ideaName);
    
    // Simulate API call with setTimeout
    setTimeout(() => {
      const score = calculateValidationScore(values);
      setValidationScore(score);
      setShowResults(true);
      setIsLoading(false);
      
      // Show success toast
      toast({
        title: "Validation Complete",
        description: "Your business idea has been analyzed successfully.",
      });
    }, 2000);
  };

  const handleStartOver = () => {
    setShowResults(false);
    setValidationScore(0);
    setIdeaName("");
  };

  return (
    <div className="min-h-screen bg-productica-blue-dark">
      <Navbar />
      
      <div className="container mx-auto py-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Validate Your Business Idea
          </h1>
          <p className="text-lg text-gray-400 mb-8">
            Get an instant assessment of your idea's potential and discover areas for improvement.
            Our validation tool helps you understand if your concept has what it takes to succeed.
          </p>
        </div>
        
        {!showResults ? (
          <IdeaValidationForm onSubmit={handleFormSubmit} isLoading={isLoading} />
        ) : (
          <ValidationResults 
            score={validationScore} 
            ideaName={ideaName} 
            onStartOver={handleStartOver} 
          />
        )}
        
        <div className="max-w-4xl mx-auto text-center mt-12">
          <p className="text-gray-400">
            Ready to go deeper? Upgrade to our <a href="/pricing" className="text-productica-blue hover:underline">premium analysis</a> for comprehensive insights and detailed recommendations.
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default IdeaValidation;
