import React, { useState } from 'react';

const ProductMockup: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Monitor Frame */}
          <div className="relative">
            <div className="relative bg-gray-900 rounded-2xl p-4 shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
              {/* Monitor Stand */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-32 h-8 bg-gray-800 rounded-b-lg"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[calc(100%+8px)] w-16 h-4 bg-gray-700 rounded-b-lg"></div>
              
              {/* Monitor Screen */}
              <div className="aspect-[16/9] overflow-hidden rounded-lg bg-white">
                <img
                  src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&auto=format&fit=crop&q=60"
                  alt="Cityscape"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Zoomed View */}
          <div className="relative">
            <div 
              className="relative overflow-hidden rounded-2xl shadow-2xl bg-white p-4 transform hover:-translate-y-2 transition-all duration-500"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onMouseMove={handleMouseMove}
            >
              <div className="aspect-square overflow-hidden rounded-lg">
                <div 
                  className="w-full h-full transition-transform duration-300"
                  style={{
                    transform: isHovered ? 'scale(1.5)' : 'scale(1)',
                    transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&auto=format&fit=crop&q=60"
                    alt="Zoomed Cityscape"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Zoom Indicator */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700 shadow-sm">
                Hover to Zoom
              </div>
            </div>

            {/* Description */}
            <div className="mt-8 text-center lg:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Experience Every Detail
              </h3>
              <p className="text-gray-600">
                Our high-resolution display brings your content to life with stunning clarity and vibrant colors. 
                Hover over the image to explore the intricate details of our cityscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductMockup; 