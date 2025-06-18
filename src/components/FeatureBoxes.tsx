import React, { useState } from 'react';
import {
  BarChart3,
  Calendar,
  DollarSign,
  LineChart,
  Package,
  Users,
  FileText,
  PieChart,
  Settings
} from 'lucide-react';

const FeatureBoxes: React.FC = () => {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePosition({ x, y });
  };

  const features = [
    {
      icon: BarChart3,
      title: "🟠 What will you get?",
      description: "Get instant access to 22 powerful tools designed to manage and grow your handmade business — all in one place.",
      gradient: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
      iconColor: "from-blue-500 to-blue-600",
      image: "https://i.etsystatic.com/42054447/r/il/ee4504/6254623583/il_1588xN.6254623583_fch6.jpg"
    },
    {
      icon: Calendar,
      title: "📊 All in One Dashboards",
      description: "Monitor sales, expenses, profits, and performance with beautifully visual dashboards — no tech skills needed.",
      gradient: "from-purple-50 to-purple-100",
      borderColor: "border-purple-200",
      iconColor: "from-purple-500 to-purple-600",
      image: "https://i.etsystatic.com/42054447/r/il/d98d0f/6206596352/il_1588xN.6206596352_67k9.jpg"
    },
    {
      icon: DollarSign,
      title: "📦 Inventory Tracker",
      description: "Easily track materials and product stock in real-time. Never run out or overstock again.",
      gradient: "from-green-50 to-green-100",
      borderColor: "border-green-200",
      iconColor: "from-green-500 to-green-600",
      image: "https://i.etsystatic.com/42054447/r/il/04c6b0/6254623611/il_1588xN.6254623611_9wbk.jpg"
    },
    {
      icon: LineChart,
      title: "🧾 Orders and Invoices",
      description: "Set up, track, and manage all customer orders. Generate clean invoices in just one click.",
      gradient: "from-orange-50 to-orange-100",
      borderColor: "border-orange-200",
      iconColor: "from-orange-500 to-orange-600",
      image: "https://i.etsystatic.com/42054447/r/il/6b9a3f/6254623547/il_1588xN.6254623547_axm8.jpg"
    },
    {
      icon: Package,
      title: "💰 COGS and Pricing",
      description: "Calculate your cost of goods sold and selling price with automated, profit-optimized formulas.",
      gradient: "from-amber-50 to-amber-100",
      borderColor: "border-amber-200",
      iconColor: "from-amber-500 to-amber-600",
      image: "https://i.etsystatic.com/42054447/r/il/645ef7/6206679528/il_1588xN.6206679528_a3c3.jpg"
    },
    {
      icon: Users,
      title: "💸 Transactions Tracker",
      description: "Keep track of every business transaction — income, expense, or refund — in one clean interface.",
      gradient: "from-pink-50 to-pink-100",
      borderColor: "border-pink-200",
      iconColor: "from-pink-500 to-pink-600",
      image: "https://i.etsystatic.com/42054447/r/il/39900b/6206596324/il_1588xN.6206596324_a7xm.jpg"
    },
    {
      icon: FileText,
      title: "📈 Accounting Dashboard",
      description: "Visualize your monthly and yearly performance with automated bookkeeping and reports.",
      gradient: "from-indigo-50 to-indigo-100",
      borderColor: "border-indigo-200",
      iconColor: "from-indigo-500 to-indigo-600",
      image: "https://i.etsystatic.com/42054447/r/il/9d4e33/6206596368/il_1588xN.6206596368_ne9i.jpg"
    },
    {
      icon: PieChart,
      title: "📈 Profit Analysis",
      description: "Understand your most profitable products and optimize your business strategy with detailed insights.",
      gradient: "from-teal-50 to-teal-100",
      borderColor: "border-teal-200",
      iconColor: "from-teal-500 to-teal-600",
      image: "https://i.etsystatic.com/42054447/r/il/db5cfc/6206596522/il_1588xN.6206596522_hevt.jpg"
    },
    {
      icon: Settings,
      title: "⚡ 15 More Powerful Features Available",
      description: "From CRM to task trackers — explore 15+ additional tools crafted to save your time and scale your business.",
      gradient: "from-cyan-50 to-cyan-100",
      borderColor: "border-cyan-200",
      iconColor: "from-cyan-500 to-cyan-600",
      image: "https://i.etsystatic.com/42054447/r/il/18d03a/6671581913/il_1588xN.6671581913_4nn1.jpg"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for Your Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to manage and grow your business, all in one place.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`bg-gradient-to-br ${feature.gradient} rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] transition-all duration-500 border ${feature.borderColor} transform hover:-translate-y-2 h-full flex flex-col relative overflow-hidden`}>
                {/* Premium Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.iconColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{feature.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow relative z-10">{feature.description}</p>
                
                <div 
                  className="relative w-full overflow-hidden rounded-xl bg-white shadow-[0_4px_20px_rgb(0,0,0,0.08)] group/image"
                  onMouseEnter={() => setHoveredImage(feature.title)}
                  onMouseLeave={() => setHoveredImage(null)}
                  onMouseMove={handleMouseMove}
                >
                  <div className="aspect-[16/9] w-full">
                    <div className="relative w-full h-full overflow-hidden">
                      <div
                        className="w-full h-full transition-transform duration-300"
                        style={{
                          transform: hoveredImage === feature.title ? 'scale(1.5)' : 'scale(1)',
                          transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`
                        }}
                      >
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-full object-cover object-center cursor-zoom-in"
                          loading="lazy"
                          srcSet={`${feature.image} 1x, ${feature.image} 2x`}
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  {hoveredImage === feature.title && (
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700 shadow-sm">
                      Hover to Zoom
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] transition-all duration-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of successful business owners who've streamlined their operations with our platform.
            </p>
            <a href="https://superprofile.bio/vp/2QZyn8Dq" target="_blank" rel="noopener noreferrer">
            <button className="bg-gradient-to-r from-amber-600 to-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 shadow-[0_4px_20px_rgb(0,0,0,0.1)]">
              Get Started Now
            </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureBoxes;
