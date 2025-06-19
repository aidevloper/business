import React from 'react';
import { Mail, Shield, FileText, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              All-in-One <span className="text-amber-400">Business Tracker</span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering handmade business owners with professional tracking tools 
              to organize, optimize, and grow their creative enterprises.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Heart className="w-4 h-4 text-red-400" />
                <span>Made with love for creators</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-amber-400 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#support" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#privacy" className="text-gray-300 hover:text-amber-400 transition-colors flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-gray-300 hover:text-amber-400 transition-colors flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#refund" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 All-in-One Business Tracker. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <a
                href="mailto:support@businesstracker.com"
                className="flex items-center space-x-2 text-gray-300 hover:text-amber-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">birzcrown@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Strip */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-500 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-white font-semibold mb-2 md:mb-0">
              🔐 Limited Time: Get 70% Off - Only 48 Hours Left!
            </div>
            <a href="https://superprofile.bio/vp/2QZyn8Dq" target="_blank" rel="noopener noreferrer">
            <button className="bg-white text-amber-600 px-6 py-2 rounded-full font-bold hover:bg-amber-50 transition-colors">
              Get Your Tracker Now
            </button>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
