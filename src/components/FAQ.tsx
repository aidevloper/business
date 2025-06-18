import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What formats do I get the tracker in?",
      answer: "You'll receive both Google Sheets and Excel versions of the tracker, plus a comprehensive PDF setup guide and video tutorial. This ensures compatibility with whatever platform you prefer to use."
    },
    {
      question: "Do I need any special software to use this?",
      answer: "No special software required! The tracker works with Google Sheets (free) or Microsoft Excel. You can use it on any device - computer, tablet, or smartphone."
    },
    {
      question: "How quickly will I receive access?",
      answer: "Immediately! As soon as your payment is processed, you'll receive an email with download links to all files. No waiting - you can start organizing your business right away."
    },
    {
      question: "Is this suitable for my type of handmade business?",
      answer: "Absolutely! Whether you make jewelry, crafts, art, clothing, home decor, or any other handmade products, this tracker is designed to work for all types of creative businesses."
    },
    {
      question: "Can I customize the tracker for my specific needs?",
      answer: "Yes! The tracker is fully customizable. You can add your own categories, modify fields, and adjust it to match your specific business requirements. The setup guide shows you exactly how."
    },
    {
      question: "What if I'm not tech-savvy?",
      answer: "Don't worry! The tracker is designed for regular business owners, not tech experts. We include step-by-step instructions, a video tutorial, and provide support to help you get everything set up."
    },
    {
      question: "Do you offer support if I have questions?",
      answer: "Absolutely! We provide 24/7 email support to help you with any questions about using the tracker. Plus, you'll have access to our setup guide and video tutorial."
    },
    {
      question: "Are there any ongoing fees?",
      answer: "No! This is a one-time purchase with lifetime access. You'll also receive free updates as we improve the tracker. No subscriptions or hidden fees ever."
    },
    {
      question: "What's your refund policy?",
      answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied with the tracker, simply email us within 30 days for a full refund - no questions asked."
    },
    {
      question: "How is this different from other business trackers?",
      answer: "Our tracker is specifically designed for handmade businesses with 22 comprehensive tabs covering everything from order tracking to bookkeeping. Most other solutions are either too generic or only cover one aspect of business management."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about the All-in-One Business Tracker
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-amber-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              We're here to help! Reach out to our support team and we'll get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-600 to-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                Contact Support
              </button>
              <a href="https://superprofile.bio/vp/2QZyn8Dq" target="_blank" rel="noopener noreferrer">
              <button className="border-2 border-amber-600 text-amber-600 px-8 py-3 rounded-full font-semibold hover:bg-amber-50 transition-colors">
                Get Tracker Now
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;