import React, { useState, useEffect } from 'react';
import { ShoppingCart, X } from 'lucide-react';

const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show CTA after user scrolls past hero section
      setIsVisible(scrollPosition > windowHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 transition-all duration-500 ${
      isMinimized ? 'transform scale-75' : ''
    }`}>
      {!isMinimized ? (
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] p-4 sm:p-5 max-w-xs sm:max-w-sm border border-amber-400/20 backdrop-blur-sm bg-opacity-95">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center space-x-2">
              <div className="bg-white/10 rounded-lg p-1.5">
                <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className="font-semibold text-sm">Limited Time Deal!</span>
            </div>
            <button
              onClick={() => setIsMinimized(true)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
          
          <div className="mb-3">
            <div className="text-2xl sm:text-3xl font-bold">Only ₹299</div>
            <div className="text-sm opacity-90">
              <span className="line-through">₹999</span> Save 70%
            </div>
          </div>
          <a href="https://superprofile.bio/vp/2QZyn8Dq" target="_blank" rel="noopener noreferrer">
          <button className="bg-white text-amber-600 w-full py-2.5 rounded-full font-semibold text-sm hover:bg-amber-50 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg mb-3">
            Get Tracker Now
          </button>
          </a>
          <div className="text-xs opacity-80 text-center flex items-center justify-center space-x-3">
            <span>🔒 Secure</span>
            <span>•</span>
            <span>💾 Instant Access</span>
            <span>•</span>
            <span>💯 30-day Guarantee</span>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsMinimized(false)}
          className="bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full p-4 sm:p-5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] transform hover:scale-105 transition-all duration-300 border border-amber-400/20 backdrop-blur-sm bg-opacity-95"
        >
          <ShoppingCart className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>
      )}
    </div>
  );
};

export default StickyCTA;
