
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "@/hooks/use-toast";

// Form schema with validation
const formSchema = z.object({
  ideaName: z.string().min(5, { message: "Idea name must be at least 5 characters" }),
  description: z.string().min(20, { message: "Description must be at least 20 characters" }),
  targetAudience: z.string().min(5, { message: "Target audience is required" }),
  problemSolved: z.string().min(10, { message: "Problem description is required" }),
  uniqueValue: z.string().min(10, { message: "Unique value proposition is required" }),
});

type FormValues = z.infer<typeof formSchema>;

interface IdeaValidationFormProps {
  onSubmit: (values: FormValues) => void;
  isLoading?: boolean;
}

const IdeaValidationForm = ({ onSubmit, isLoading = false }: IdeaValidationFormProps) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ideaName: "",
      description: "",
      targetAudience: "",
      problemSolved: "",
      uniqueValue: "",
    },
  });

  const handleSubmit = (values: FormValues) => {
    // Show toast notification for form submission
    toast({
      title: "Processing Your Idea",
      description: "We're analyzing your business idea. This will only take a moment.",
    });
    
    onSubmit(values);
  };

  return (
    <Card className="w-full max-w-3xl mx-auto bg-productica-blue-dark/50 border border-gray-800">
      <CardHeader>
        <CardTitle className="text-2xl">Validate Your Business Idea</CardTitle>
        <CardDescription>
          Fill out this form to get an initial validation score for your business idea.
          This free analysis will help you understand your idea's potential.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="ideaName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Idea Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter the name of your business idea" {...field} />
                  </FormControl>
                  <FormDescription>
                    A clear, concise name for your business idea
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Describe your business idea in detail" 
                      className="min-h-[120px]" 
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    Provide a comprehensive description of your idea
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="targetAudience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Target Audience</FormLabel>
                  <FormControl>
                    <Input placeholder="Who is this product/service for?" {...field} />
                  </FormControl>
                  <FormDescription>
                    Define your ideal customer or user
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="problemSolved"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Problem Solved</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="What problem does your idea solve?" 
                      className="min-h-[100px]" 
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    Describe the pain point or challenge your idea addresses
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="uniqueValue"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Unique Value Proposition</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="What makes your idea unique or better than existing solutions?" 
                      className="min-h-[100px]" 
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    Explain what differentiates your idea from competitors
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full bg-productica-blue hover:bg-productica-blue-light"
              disabled={isLoading}
            >
              {isLoading ? "Analyzing..." : "Validate My Idea"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default IdeaValidationForm;
