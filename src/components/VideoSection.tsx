import React from 'react';
import { Play, Star } from 'lucide-react';

const VideoSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            See How It Transforms Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch real handmade business owners share how our tracker revolutionized their operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Player */}
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Video thumbnail"
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-50 transition-all duration-300">
                <div className="bg-white rounded-full p-6 group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-12 h-12 text-gray-900 ml-1" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white bg-opacity-90 rounded-lg p-3">
                  <div className="flex items-center space-x-2">
                    <img
                      src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=100"
                      alt="Sarah"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">Sarah M.</div>
                      <div className="text-sm text-gray-600">Jewelry Designer</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Content */}
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-300">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl text-gray-700 mb-6 leading-relaxed">
                "I was drowning in sticky notes and random spreadsheets before finding this tracker. Now I can see exactly how much profit I'm making on each order, track my inventory levels, and never miss a deadline. My business revenue has increased by 40% since I started using it!"
              </blockquote>
              
              <div className="flex items-center space-x-4">
                <img
                  src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="Sarah Miller"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-gray-900 text-lg">Sarah Miller</div>
                  <div className="text-gray-600">Handmade Jewelry Designer</div>
                  <div className="text-sm text-gray-500">$85K+ annual revenue</div>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-4 text-center border border-green-200">
                <div className="text-2xl font-bold text-green-700">40%</div>
                <div className="text-sm text-green-600">Revenue Increase</div>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-4 text-center border border-blue-200">
                <div className="text-2xl font-bold text-blue-700">15hrs</div>
                <div className="text-sm text-blue-600">Saved Per Week</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Similar Results?
            </h3>
            <p className="text-gray-600 mb-6">
              Join Sarah and 2,846+ other successful handmade business owners who've transformed their operations.
            </p>
            <a href="https://superprofile.bio/vp/2QZyn8Dq" target="_blank" rel="noopener noreferrer">
            <button className="bg-gradient-to-r from-amber-600 to-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              Get Your Tracker Now
            </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;