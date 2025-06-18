import React from 'react';
import { ArrowRight, Star, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-amber-50 via-cream-50 to-orange-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-2 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-600 text-xs sm:text-sm">4.9/5 from 2,847+ creators</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">Handmade Business</span> Into a Profitable Empire
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Stop losing money and get organized with our comprehensive business tracker. 
              22 powerful spreadsheet tabs that handle everything from orders to bookkeeping, 
              so you can focus on creating beautiful products.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
              <a href="https://superprofile.bio/vp/2QZyn8Dq" target="_blank" rel="noopener noreferrer">
              <button className="group bg-gradient-to-r from-amber-600 to-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
                Get Your Tracker Now
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              </a>
              <button className="border-2 border-amber-600 text-amber-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-amber-50 transition-colors flex items-center justify-center">
                <Download className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                See Preview
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-gray-900">2,847+</div>
                <div className="text-xs sm:text-sm text-gray-600">Happy Creators</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-gray-900">22</div>
                <div className="text-xs sm:text-sm text-gray-600">Powerful Tabs</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-xs sm:text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Product Mockup */}
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-300 mt-8 lg:mt-0">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-3 sm:p-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-400 rounded-full"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="grid grid-cols-4 gap-1 sm:gap-2 mb-4">
                    <div className="bg-gray-100 h-6 sm:h-8 rounded"></div>
                    <div className="bg-gray-100 h-6 sm:h-8 rounded"></div>
                    <div className="bg-amber-100 h-6 sm:h-8 rounded"></div>
                    <div className="bg-gray-100 h-6 sm:h-8 rounded"></div>
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex justify-between items-center p-2 sm:p-3 bg-gray-50 rounded-lg">
                      <span className="text-xs sm:text-sm font-medium">Dashboard</span>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Active</span>
                    </div>
                    <div className="flex justify-between items-center p-2 sm:p-3 bg-amber-50 rounded-lg">
                      <span className="text-xs sm:text-sm font-medium">Order Tracker</span>
                      <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded">12 Orders</span>
                    </div>
                    <div className="flex justify-between items-center p-2 sm:p-3 bg-blue-50 rounded-lg">
                      <span className="text-xs sm:text-sm font-medium">Income Tracker</span>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">$3,247</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-white rounded-full p-2 sm:p-3 shadow-lg animate-bounce">
                <Star className="w-4 h-4 sm:w-6 sm:h-6 text-yellow-400 fill-current" />
              </div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-green-500 text-white rounded-full p-2 sm:p-3 shadow-lg">
                <Download className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;