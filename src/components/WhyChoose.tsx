import React from 'react';
import { Check, X, Star } from 'lucide-react';

const WhyChoose: React.FC = () => {
  const comparisons = [
    {
      feature: "Complete business tracking system",
      us: true,
      others: false
    },
    {
      feature: "22 comprehensive tabs",
      us: true,
      others: false
    },
    {
      feature: "Works with Google Sheets & Excel",
      us: true,
      others: true
    },
    {
      feature: "Automated calculations",
      us: true,
      others: false
    },
    {
      feature: "Video tutorial included",
      us: true,
      others: false
    },
    {
      feature: "Lifetime access",
      us: true,
      others: false
    },
    {
      feature: "Free updates",
      us: true,
      others: false
    },
    {
      feature: "24/7 support",
      us: true,
      others: false
    }
  ];

  const benefits = [
    {
      title: "Save 10+ Hours Per Week",
      description: "Automate your tracking and focus on creating beautiful products instead of managing spreadsheets."
    },
    {
      title: "Increase Profits by 30%",
      description: "Know your true costs and price your products for maximum profitability with our built-in calculator."
    },
    {
      title: "Never Miss an Order",
      description: "Track every order from start to finish with automated reminders and status updates."
    },
    {
      title: "Tax Season Made Easy",
      description: "All your income and expenses organized and ready for your accountant or tax software."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">Business Tracker?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't settle for incomplete solutions. Get everything you need in one comprehensive system.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Comparison Table */}
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-amber-600 to-orange-500 text-white p-6">
                <h3 className="text-2xl font-bold text-center">Feature Comparison</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-sm font-semibold text-gray-600">Feature</div>
                  <div className="text-sm font-semibold text-center text-amber-600">Our Tracker</div>
                  <div className="text-sm font-semibold text-center text-gray-400">Others</div>
                </div>
                <div className="space-y-4">
                  {comparisons.map((item, index) => (
                    <div key={index} className="grid grid-cols-3 gap-4 items-center py-3 border-b border-gray-100 last:border-b-0">
                      <div className="text-sm text-gray-700">{item.feature}</div>
                      <div className="flex justify-center">
                        {item.us ? (
                          <Check className="w-5 h-5 text-green-500" />
                        ) : (
                          <X className="w-5 h-5 text-red-500" />
                        )}
                      </div>
                      <div className="flex justify-center">
                        {item.others ? (
                          <Check className="w-5 h-5 text-green-500" />
                        ) : (
                          <X className="w-5 h-5 text-red-500" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="space-y-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-amber-600 to-orange-500 rounded-full p-2 flex-shrink-0">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join 2,847+ Successful Handmade Business Owners
            </h3>
            <div className="flex justify-center items-center space-x-2 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-600">"This tracker completely transformed my business organization!"</span>
            </div>
            <a href="https://superprofile.bio/vp/2QZyn8Dq" target="_blank" rel="noopener noreferrer">
            <button className="bg-gradient-to-r from-amber-600 to-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              Get Your Tracker Today
            </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;