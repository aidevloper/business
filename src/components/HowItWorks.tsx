import React from 'react';
import { Download, FileText, Play, Zap } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: Download,
      title: "Instant Download",
      description: "Get immediate access to your All-in-One Business Tracker right after purchase. No waiting, no delays.",
      color: "from-blue-500 to-blue-600",
      glow: "shadow-[0_0_20px_rgba(59,130,246,0.3)]"
    },
    {
      icon: FileText,
      title: "Open & Customize",
      description: "Open the spreadsheet in Google Sheets or Excel. Follow our detailed setup guide to customize it for your business.",
      color: "from-green-500 to-green-600",
      glow: "shadow-[0_0_20px_rgba(34,197,94,0.3)]"
    },
    {
      icon: Play,
      title: "Watch Tutorial",
      description: "Access our exclusive video tutorial that shows you exactly how to use every feature effectively.",
      color: "from-purple-500 to-purple-600",
      glow: "shadow-[0_0_20px_rgba(168,85,247,0.3)]"
    },
    {
      icon: Zap,
      title: "Start Tracking",
      description: "Begin organizing your orders, tracking expenses, and managing your business like a pro from day one.",
      color: "from-orange-500 to-orange-600",
      glow: "shadow-[0_0_20px_rgba(249,115,22,0.3)]"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get organized in minutes, not hours. Our streamlined process gets you tracking your business right away.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-amber-200 via-amber-300 to-orange-200 shadow-[0_0_15px_rgba(251,191,36,0.3)]"></div>

          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex flex-col lg:flex items-center`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="lg:w-1/2 lg:px-8">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] transition-all duration-500 relative overflow-hidden group border border-gray-100">
                    {/* Premium Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mb-6 ${step.glow} relative z-10 group-hover:scale-110 transition-all duration-300`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10 group-hover:text-gray-800 transition-colors duration-300">{step.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed relative z-10 group-hover:text-gray-700 transition-colors duration-300">{step.description}</p>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="hidden lg:block relative">
                  <div className="w-6 h-6 bg-white border-4 border-amber-400 rounded-full shadow-[0_0_15px_rgba(251,191,36,0.3)] group-hover:shadow-[0_0_20px_rgba(251,191,36,0.4)] transition-all duration-300"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-amber-400 rounded-full"></div>
                </div>
                
                <div className="lg:w-1/2 lg:px-8 mt-8 lg:mt-0">
                  <div className={`text-8xl font-bold ${
                    index % 2 === 0 ? 'text-right' : 'text-left'
                  } text-gray-100 select-none drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)] group-hover:text-gray-200 transition-colors duration-300`}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] transition-all duration-500 border border-amber-200 relative overflow-hidden group">
            {/* Premium Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 via-orange-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10 group-hover:text-gray-800 transition-colors duration-300">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-600 mb-6 relative z-10 group-hover:text-gray-700 transition-colors duration-300">
              Join thousands of successful handmade business owners who've streamlined their operations with our tracker.
            </p>
            <a 
              href="https://superprofile.bio/vp/2QZyn8Dq" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-500 text-white px-8 py-3 rounded-full font-semibold transform hover:-translate-y-1 transition-all duration-300 shadow-[0_4px_20px_rgb(0,0,0,0.1)] relative z-10 hover:shadow-[0_8px_30px_rgba(249,115,22,0.3)]"
            >
              Get Instant Access
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;