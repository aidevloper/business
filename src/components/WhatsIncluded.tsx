import React from 'react';
import { FileSpreadsheet, FileText, Play, Gift } from 'lucide-react';

const WhatsIncluded: React.FC = () => {
  const included = [
    {
      icon: FileSpreadsheet,
      title: "Google Sheets Template",
      description: "Complete spreadsheet with all 22 tabs, formulas, and automation ready to use.",
      value: "$197",
      color: "from-green-500 to-green-600"
    },
    {
      icon: FileSpreadsheet,
      title: "Excel Version",
      description: "Fully compatible Excel file for those who prefer Microsoft Office.",
      value: "$97",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: FileText,
      title: "Setup Guide PDF",
      description: "Step-by-step instructions to customize the tracker for your specific business.",
      value: "$47",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Play,
      title: "Video Tutorial",
      description: "Exclusive walkthrough showing you how to use every feature effectively.",
      value: "$97",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Gift,
      title: "Bonus: Quick Start Checklist",
      description: "Essential steps to get your tracking system up and running in 30 minutes.",
      value: "$27",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const totalValue = included.reduce((sum, item) => sum + parseInt(item.value.replace('$', '')), 0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What's Included in Your Package
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to start tracking your handmade business professionally from day one.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {included.map((item, index) => (
            <div
              key={item.title}
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-amber-200 transform hover:-translate-y-2">
                <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  <span className="text-lg font-bold text-green-600">{item.value}</span>
                </div>
                
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border-2 border-amber-200 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Total Value: <span className="text-gray-400 line-through">${totalValue}</span>
            </h3>
            <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500 mb-4">
              Your Price: Only ₹499
            </div>
            <p className="text-xl text-gray-600 mb-6">
              <span className="font-bold text-green-600">Save 94%</span> - Limited time offer!
            </p>
            <a href="https://superprofile.bio/vp/2QZyn8Dq" target="_blank" rel="noopener noreferrer">
            <button className="bg-gradient-to-r from-amber-600 to-orange-500 text-white px-12 py-4 rounded-full font-bold text-xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              Get Everything Now - ₹499
            </button>
            </a>
            <div className="mt-4 text-sm text-gray-500">
              🔒 Secure payment • 💾 Instant download • 💯 30-day money-back guarantee
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            <div className="text-3xl font-bold text-gray-900">Instant</div>
            <div className="text-gray-600">Access</div>
          </div>
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000" style={{ transitionDelay: '200ms' }}>
            <div className="text-3xl font-bold text-gray-900">Lifetime</div>
            <div className="text-gray-600">Updates</div>
          </div>
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000" style={{ transitionDelay: '400ms' }}>
            <div className="text-3xl font-bold text-gray-900">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsIncluded;