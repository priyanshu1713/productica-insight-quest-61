
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { BarChart3, Brain, Search, PieChart, AlertCircle } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  
  // This would be replaced with real authentication state
  const isAuthenticated = false;
  
  React.useEffect(() => {
    // Redirect to login if not authenticated
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);
  
  if (!isAuthenticated) {
    return null; // Don't render anything while redirecting
  }
  
  return (
    <div className="min-h-screen bg-productica-blue-dark">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-productica-blue-dark/50 border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Available Credits</h3>
            <div className="text-3xl font-bold text-productica-blue">15</div>
            <Button className="mt-4 w-full bg-productica-blue hover:bg-productica-blue-light">
              Buy More Credits
            </Button>
          </div>
          
          <div className="bg-productica-blue-dark/50 border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Completed Analyses</h3>
            <div className="text-3xl font-bold">7</div>
          </div>
          
          <div className="bg-productica-blue-dark/50 border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Average Market-Fit Score</h3>
            <div className="text-3xl font-bold text-green-500">78%</div>
          </div>
        </div>
        
        <div className="bg-productica-blue-dark/50 border border-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Start New Analysis</h2>
          <p className="text-gray-400 mb-6">
            Input your product details below to begin a new market-fit analysis.
          </p>
          <Button className="bg-productica-blue hover:bg-productica-blue-light">
            New Analysis
          </Button>
        </div>
        
        <div className="bg-productica-blue-dark/50 border border-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Analyses</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-3 px-4">Product Name</th>
                  <th className="text-left py-3 px-4">Date</th>
                  <th className="text-left py-3 px-4">Market-Fit Score</th>
                  <th className="text-left py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4">Smart Home Assistant</td>
                  <td className="py-3 px-4">2023-10-15</td>
                  <td className="py-3 px-4">
                    <span className="bg-green-500/20 text-green-500 px-2 py-1 rounded-full">
                      85%
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <Button variant="outline" size="sm">View Report</Button>
                  </td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4">Fitness Tracking App</td>
                  <td className="py-3 px-4">2023-10-10</td>
                  <td className="py-3 px-4">
                    <span className="bg-yellow-500/20 text-yellow-500 px-2 py-1 rounded-full">
                      72%
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <Button variant="outline" size="sm">View Report</Button>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Sustainable Water Bottle</td>
                  <td className="py-3 px-4">2023-10-05</td>
                  <td className="py-3 px-4">
                    <span className="bg-red-500/20 text-red-500 px-2 py-1 rounded-full">
                      45%
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <Button variant="outline" size="sm">View Report</Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
