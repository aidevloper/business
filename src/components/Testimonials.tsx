import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      business: "Handmade Jewelry Studio",
      image: "/images/testimonials/sarah.jpg",
      review: "I was spending 3-4 hours every Sunday organizing my Etsy orders and inventory. Now I can do it in 30 minutes! The profit calculator helped me realize I was underpricing my custom necklaces by 20%. My monthly revenue went from $2,800 to $4,200 in just 2 months.",
      rating: 5,
      verified: true
    },
    {
      name: "Michael R.",
      business: "Artisan Candle Co.",
      image: "/images/testimonials/michael.jpg",
      review: "Running a candle business with 50+ SKUs was a nightmare before this tracker. The inventory alerts saved me from running out of my best-selling lavender scent during the holiday rush. The COGS calculator helped me optimize my pricing, and my profit margins increased by 35%.",
      rating: 5,
      verified: true
    },
    {
      name: "Emma L.",
      business: "Print & Pattern Studio",
      image: "/images/testimonials/emma.jpg",
      review: "As a print-on-demand artist, I was drowning in spreadsheets. This tracker helped me identify my top-selling designs and optimize my production schedule. The order management system is a game-changer - I can now handle 200+ orders per month without stress.",
      rating: 5,
      verified: true
    },
    {
      name: "David K.",
      business: "Natural Soap Co.",
      image: "/images/testimonials/david.jpg",
      review: "Tax season used to be a nightmare. Now I can export all my expenses and income reports with one click. The material cost tracking helped me reduce waste by 25%, and I can finally see exactly how much profit I'm making on each soap variety.",
      rating: 5,
      verified: true
    },
    {
      name: "Jessica T.",
      business: "Ceramic Art Studio",
      image: "/images/testimonials/jessica.jpg",
      review: "I was losing track of custom orders and their deadlines. The order tracking system is perfect for my pottery business. I can now manage 30+ custom pieces simultaneously, and my customers love the automated status updates. My order completion rate went from 85% to 98%.",
      rating: 5,
      verified: true
    },
    {
      name: "Robert P.",
      business: "Custom Woodworking",
      image: "/images/testimonials/robert.jpg",
      review: "From hobby to $12k/month business in 6 months! The material cost tracking helped me price my custom furniture correctly, and the order management system keeps everything organized. I can now take on more complex projects without worrying about losing track of details.",
      rating: 5,
      verified: true
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Loved by 500+ Handmade Business Owners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real success stories from real entrepreneurs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-amber-100 transform hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 flex items-center justify-center">
                      <span className="text-lg font-semibold text-gray-700">
                        {testimonial.name.split(' ')[0][0]}{testimonial.name.split(' ')[1][0]}
                      </span>
                    </div>
                    {testimonial.verified && (
                      <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                    </div>
                    <p className="text-sm text-gray-600">{testimonial.business}</p>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed">{testimonial.review}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join Our Community of Successful Entrepreneurs
            </h3>
            <p className="text-gray-600 mb-6">
              Start your journey to business success today with our comprehensive tracking system.
            </p>
            <a href="https://superprofile.bio/vp/2QZyn8Dq" target="_blank" rel="noopener noreferrer">
            <button className="bg-gradient-to-r from-amber-600 to-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              Get Started Now
            </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 