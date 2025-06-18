import React, { useState } from 'react';
import { X, Clock } from 'lucide-react';

const StickyOfferBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-amber-600 to-yellow-500 text-white px-3 sm:px-4 py-2 sm:py-3 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm md:text-base">
          <Clock className="w-3 h-3 sm:w-4 sm:h-4 animate-pulse" />
          <span className="font-semibold">🔐 Limited Time Deal – Get it Now at 70% Off!</span>
          <span className="hidden sm:inline">Only 48 hours left!</span>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-4">
        <a href="https://superprofile.bio/vp/2QZyn8Dq" target="_blank" rel="noopener noreferrer">
          <button className="bg-white text-amber-600 px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-bold hover:bg-amber-50 transition-colors">
            Get Tracker Now
          </button>
          </a>
          <button
            onClick={() => setIsVisible(false)}
            className="text-white hover:text-amber-200 transition-colors"
          >
            <X className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyOfferBar;