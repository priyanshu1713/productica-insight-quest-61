
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div className="min-h-screen bg-productica-blue-dark">
      <Navbar />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-productica-blue/10 border border-productica-blue/20 rounded-full px-4 py-1 text-sm text-gray-300 mb-4">
              Our Blog
            </div>
            <h1 className="text-4xl font-bold mb-6">Latest Insights & News</h1>
            <p className="text-gray-400">
              Stay updated with the latest trends in market analysis, product development, and AI innovations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-productica-blue-dark/50 border border-gray-800 rounded-lg overflow-hidden hover:border-productica-blue/50 transition-colors">
                <div className="h-48 bg-gray-800"></div>
                <div className="p-6">
                  <div className="text-sm text-productica-blue mb-2">Category • {new Date().toLocaleDateString()}</div>
                  <h3 className="text-xl font-semibold mb-2">How AI is Revolutionizing Market Analysis</h3>
                  <p className="text-gray-400 mb-4">
                    Discover how artificial intelligence is transforming the way companies approach market research and product validation.
                  </p>
                  <Link to="/blog/post-1" className="text-productica-blue hover:text-productica-blue-light transition-colors font-medium">
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Blog;
