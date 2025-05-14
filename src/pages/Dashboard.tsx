
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Brain, Search, PieChart, AlertCircle, ArrowLeft, FileText, BarChart, Download } from "lucide-react";
import UserWallet from "@/components/UserWallet";

const Dashboard = () => {
  const navigate = useNavigate();
  
  // Mock user data - in a real app, this would come from authentication
  const [userData, setUserData] = useState({
    credits: 7,
    freeCredits: 5,
    paidCredits: 2,
    discountPercent: 3,
    isAuthenticated: true, // mock authentication state
    recentAnalyses: [
      {
        id: 1,
        productName: "Smart Home Assistant",
        validationScore: 85,
        date: "2023-10-15",
        status: "completed",
      },
      {
        id: 2,
        productName: "Fitness Tracking App",
        validationScore: 72,
        date: "2023-10-10",
        status: "completed",
      },
      {
        id: 3,
        productName: "Sustainable Water Bottle",
        validationScore: 45,
        date: "2023-10-05",
        status: "completed",
      }
    ]
  });
  
  // Statistics for the dashboard
  const stats = [
    {
      title: "Ideas Validated",
      value: userData.recentAnalyses.length,
      icon: Brain,
    },
    {
      title: "Avg. Validation Score",
      value: "67%",
      icon: PieChart,
    },
    {
      title: "Analyses Used",
      value: "3",
      icon: Search,
    }
  ];
  
  useEffect(() => {
    // In real app, check if user is authenticated here
    // and redirect if not
    if (!userData.isAuthenticated) {
      navigate('/login');
    }
  }, [userData.isAuthenticated, navigate]);
  
  if (!userData.isAuthenticated) {
    return null; // Don't render anything while redirecting
  }
  
  return (
    <div className="min-h-screen bg-productica-blue-dark">
      <div className="container mx-auto py-8">
        {/* Add back button at the top */}
        <div className="mb-8 flex items-center">
          <Button 
            variant="outline" 
            className="mr-4 hover:bg-productica-blue/10"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
          <h1 className="text-3xl font-bold">Dashboard</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Wallet Card */}
          <UserWallet 
            credits={userData.credits} 
            freeCredits={userData.freeCredits}
            paidCredits={userData.paidCredits}
            discountPercent={userData.discountPercent}
          />
          
          {/* Stats Cards */}
          {stats.map((stat, index) => (
            <Card key={index} className="bg-productica-blue-dark/50 border border-gray-800">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div className="space-y-1">
                  <CardTitle className="text-lg">{stat.title}</CardTitle>
                </div>
                <div className="h-10 w-10 bg-productica-blue/20 rounded-full flex items-center justify-center">
                  <stat.icon className="h-5 w-5 text-productica-blue" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-2">
            <Card className="bg-productica-blue-dark/50 border border-gray-800 h-full">
              <CardHeader>
                <CardTitle className="text-xl">Start New Analysis</CardTitle>
                <CardDescription>
                  Validate your product idea or get an in-depth market fit analysis
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button 
                    className="h-auto py-6 px-4 flex flex-col items-center justify-center space-y-2 bg-gray-800 hover:bg-gray-700"
                    onClick={() => navigate('/idea-validation')}
                  >
                    <Brain className="h-8 w-8 mb-2" />
                    <span className="text-lg font-medium">Idea Validation</span>
                    <span className="text-xs text-gray-400">Free basic validation</span>
                  </Button>
                  
                  <Button 
                    className="h-auto py-6 px-4 flex flex-col items-center justify-center space-y-2 bg-productica-blue hover:bg-productica-blue-light"
                  >
                    <PieChart className="h-8 w-8 mb-2" />
                    <span className="text-lg font-medium">Market Fit Analysis</span>
                    <span className="text-xs text-gray-200">1 credit per analysis</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="bg-productica-blue-dark/50 border border-gray-800 h-full">
              <CardHeader>
                <CardTitle className="text-xl">Quick Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm text-gray-400 flex items-start">
                    <AlertCircle className="h-4 w-4 mr-2 mt-0.5 text-productica-blue" />
                    Start with a free validation before investing in full analysis
                  </p>
                  <p className="text-sm text-gray-400 flex items-start">
                    <AlertCircle className="h-4 w-4 mr-2 mt-0.5 text-productica-blue" />
                    High validation scores (80+) earn discount on analysis
                  </p>
                  <p className="text-sm text-gray-400 flex items-start">
                    <AlertCircle className="h-4 w-4 mr-2 mt-0.5 text-productica-blue" />
                    You receive 5 free credits every month
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <Card className="bg-productica-blue-dark/50 border border-gray-800">
          <CardHeader>
            <CardTitle className="text-xl">Recent Analyses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left py-3 px-4">Product Name</th>
                    <th className="text-left py-3 px-4">Date</th>
                    <th className="text-left py-3 px-4">Validation Score</th>
                    <th className="text-left py-3 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {userData.recentAnalyses.map((analysis) => (
                    <tr key={analysis.id} className="border-b border-gray-800">
                      <td className="py-3 px-4">{analysis.productName}</td>
                      <td className="py-3 px-4">{analysis.date}</td>
                      <td className="py-3 px-4">
                        <span className={`
                          px-2 py-1 rounded-full text-sm
                          ${analysis.validationScore >= 80 ? 'bg-green-500/20 text-green-500' : ''}
                          ${analysis.validationScore >= 60 && analysis.validationScore < 80 ? 'bg-blue-500/20 text-blue-500' : ''}
                          ${analysis.validationScore >= 40 && analysis.validationScore < 60 ? 'bg-yellow-500/20 text-yellow-500' : ''}
                          ${analysis.validationScore < 40 ? 'bg-red-500/20 text-red-500' : ''}
                        `}>
                          {analysis.validationScore}%
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm" className="flex items-center">
                            <FileText className="h-3.5 w-3.5 mr-1" />
                            View
                          </Button>
                          <Button variant="outline" size="sm" className="flex items-center">
                            <Download className="h-3.5 w-3.5 mr-1" />
                            Export
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
