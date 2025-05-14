
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { BadgeDollarSign, BarChart3, Plus } from "lucide-react";

interface UserWalletProps {
  credits: number;
  freeCredits: number;
  paidCredits: number;
  discountPercent?: number;
}

const UserWallet = ({ 
  credits, 
  freeCredits, 
  paidCredits, 
  discountPercent = 0 
}: UserWalletProps) => {
  return (
    <Card className="bg-productica-blue-dark/50 border border-gray-800">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="space-y-1">
          <CardTitle className="text-xl font-medium">Your Wallet</CardTitle>
          <CardDescription>Manage your analysis credits</CardDescription>
        </div>
        <div className="h-12 w-12 bg-productica-blue/20 rounded-full flex items-center justify-center">
          <BadgeDollarSign className="h-6 w-6 text-productica-blue" />
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-2xl font-bold">{credits}</p>
            <p className="text-sm text-muted-foreground">Total Credits</p>
          </div>
          <Button className="bg-productica-blue hover:bg-productica-blue-light">
            <Plus className="mr-1 h-4 w-4" /> Buy Credits
          </Button>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-gray-800/30 rounded-md p-3">
            <p className="text-sm text-muted-foreground">Free Credits</p>
            <p className="text-xl font-medium">{freeCredits}</p>
            <p className="text-xs text-gray-500 mt-1">Resets monthly</p>
          </div>
          <div className="bg-gray-800/30 rounded-md p-3">
            <p className="text-sm text-muted-foreground">Paid Credits</p>
            <p className="text-xl font-medium">{paidCredits}</p>
            <p className="text-xs text-gray-500 mt-1">Never expires</p>
          </div>
        </div>

        {discountPercent > 0 && (
          <div className="mt-4 bg-green-500/10 border border-green-500/20 rounded-md p-3">
            <p className="text-sm font-medium flex items-center text-green-500">
              <BarChart3 className="mr-1.5 h-4 w-4" />
              Active Discount
            </p>
            <p className="text-gray-400 text-sm mt-1">
              You have a {discountPercent}% discount on your next market analysis!
            </p>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <p className="text-xs text-gray-500 w-full text-center">
          1 credit = 1 full market analysis report
        </p>
      </CardFooter>
    </Card>
  );
};

export default UserWallet;
