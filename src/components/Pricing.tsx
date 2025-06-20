import { Check, Clock, Shield } from 'lucide-react';

const Pricing = () => {
  const features = [
    "22 comprehensive spreadsheet tabs",
    "Google Sheets & Excel versions",
    "Automated calculations & formulas",
    "Order tracking system",
    "Income & expense tracking",
    "Customer database",
    "Inventory management",
    "Pricing calculator",
    "Invoice generator",
    "Setup guide & video tutorial",
    "Lifetime access & updates",
    "24/7 email support"
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Limited Time Special Pricing
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Get everything you need to transform your handmade business at 70% off the regular price.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-6 sm:p-8 md:p-12 border-2 border-amber-200 shadow-2xl relative overflow-hidden">
              {/* Special Offer Badge */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-red-500 text-white px-4 sm:px-6 py-2 rounded-full transform rotate-12 font-bold text-xs sm:text-sm">
                70% OFF
              </div>
              
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  All-in-One Business Tracker
                </h3>
                <p className="text-gray-600 text-base sm:text-lg mb-4 sm:mb-6">
                  Complete business management system for handmade entrepreneurs
                </p>
                
                <div className="flex items-center justify-center space-x-2 sm:space-x-4 mb-4 sm:mb-6">
                  <span className="text-xl sm:text-2xl text-gray-500 line-through">₹999</span>
                  <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">
                  ₹299
                  </span>
                </div>
                
                <div className="flex items-center justify-center space-x-2 text-red-600 mb-6 sm:mb-8">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="font-semibold text-sm sm:text-base">Offer expires in 48 hours!</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Everything Included:</h4>
                  <ul className="space-y-2 sm:space-y-3">
                    {features.slice(0, 6).map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2 sm:space-x-3">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Plus Bonuses:</h4>
                  <ul className="space-y-2 sm:space-y-3">
                    {features.slice(6).map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2 sm:space-x-3">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <a href="https://superprofile.bio/vp/2QZyn8Dq" target="_blank" rel="noopener noreferrer">
                  <button className="w-full sm:w-auto bg-gradient-to-r from-amber-600 to-orange-500 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full font-bold text-lg sm:text-xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 mb-4">
                    Get Instant Access - ₹499
                  </button>
                </a>
                
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>Secure Payment</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>Instant Download</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>30-Day Guarantee</span>
                  </div>
                </div>
                
                <p className="text-xs sm:text-sm text-gray-500">
                  One-time payment • No subscriptions • Lifetime access
                </p>
              </div>
            </div>
          </div>

          {/* Guarantee */}
          <div className="mt-8 sm:mt-12 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200 text-center">
              <Shield className="w-12 h-12 sm:w-16 sm:h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                30-Day Money-Back Guarantee
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
                Try our Business Tracker risk-free for 30 days. If you're not completely satisfied 
                and haven't increased your business organization and profitability, we'll refund every penny.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
