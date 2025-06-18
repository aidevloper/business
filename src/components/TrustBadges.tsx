import React from 'react';
import { Shield, Download, Clock, Award, Lock, CheckCircle } from 'lucide-react';

const TrustBadges: React.FC = () => {
  const badges = [
    {
      icon: Shield,
      title: "Secure Payment",
      description: "SSL encrypted checkout"
    },
    {
      icon: Download,
      title: "Instant Access",
      description: "Download immediately"
    },
    {
      icon: CheckCircle,
      title: "Satisfaction Guarantee",
      description: "30-day money back"
    },
    {
      icon: Award,
      title: "Trusted by 2,847+",
      description: "Happy customers"
    },
    {
      icon: Lock,
      title: "Privacy Protected",
      description: "Your data is safe"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "We're here to help"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Purchase is Protected
          </h2>
          <p className="text-lg text-gray-600">
            Shop with confidence knowing you're backed by our guarantees
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {badges.map((badge, index) => (
            <div
              key={badge.title}
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 text-center"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <badge.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{badge.title}</h3>
                <p className="text-gray-600">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 text-center border border-green-200">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=100"
                alt="Secure payment"
                className="w-12 h-12 rounded-lg"
              />
              <img
                src="https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg?auto=compress&cs=tinysrgb&w=100"
                alt="Payment methods"
                className="w-12 h-12 rounded-lg"
              />
              <img
                src="https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=100"
                alt="SSL secure"
                className="w-12 h-12 rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Trusted by Thousands of Entrepreneurs
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join the community of successful handmade business owners who trust our tracker 
              to manage and grow their businesses. Your satisfaction is our guarantee.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;