import React from 'react';
import { 
  BarChart3, 
  ShoppingCart, 
  Calculator, 
  CheckSquare,
  Calendar,
  Users,
  Package,
  Receipt,
  TrendingUp,
  DollarSign,
  Car,
  Clock
} from 'lucide-react';

const Features: React.FC = () => {
  const featureSections = [
    {
      title: "Main Section",
      icon: BarChart3,
      color: "from-blue-400 to-blue-500",
      bgColor: "bg-blue-50",
      features: [
        { name: "Bank Account Tracker", icon: DollarSign },
        { name: "All-in-One Dashboard", icon: BarChart3 },
        { name: "Automated Calendar", icon: Calendar }
      ]
    },
    {
      title: "Order Tracking",
      icon: ShoppingCart,
      color: "from-green-400 to-green-500",
      bgColor: "bg-green-50",
      features: [
        { name: "Order Setup", icon: ShoppingCart },
        { name: "Order Overview", icon: BarChart3 },
        { name: "Sales Overview", icon: TrendingUp },
        { name: "Recipe/Bill of Material", icon: Package },
        { name: "Pricing Calculator", icon: Calculator },
        { name: "Customer Tracker", icon: Users },
        { name: "Material Inventory", icon: Package },
        { name: "Product Inventory", icon: Package },
        { name: "Order Tracker", icon: ShoppingCart },
        { name: "Invoice Generator", icon: Receipt }
      ]
    },
    {
      title: "Bookkeeping",
      icon: Calculator,
      color: "from-purple-400 to-purple-500",
      bgColor: "bg-purple-50",
      features: [
        { name: "Bookkeeping Setup", icon: Calculator },
        { name: "Income Tracker", icon: DollarSign },
        { name: "Expense Tracker", icon: Receipt },
        { name: "Mileage Tracker", icon: Car },
        { name: "Monthly Dashboard", icon: BarChart3 },
        { name: "Annual Dashboard", icon: TrendingUp },
        { name: "Custom Dashboard", icon: BarChart3 }
      ]
    },
    {
      title: "Task Management",
      icon: CheckSquare,
      color: "from-orange-400 to-orange-500",
      bgColor: "bg-orange-50",
      features: [
        { name: "Task Setup", icon: CheckSquare },
        { name: "Task Tracker", icon: Clock }
      ]
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4 sm:mb-6">
            Everything You Need to Run Your 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500 block sm:inline"> Handmade Business</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            22 comprehensive tabs designed specifically for handmade business owners. 
            No more juggling multiple tools – everything you need in one place.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {featureSections.map((section, index) => (
            <div
              key={section.title}
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`group ${section.bgColor} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-amber-200 transform hover:-translate-y-2 flex flex-col items-center`}>
                <div className={`w-12 h-12 bg-gradient-to-r ${section.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4">{section.title}</h3>
                
                <ul className="space-y-3">
                  {section.features.map((feature) => (
                    <li key={feature.name} className="flex items-center gap-4 w-fit mx-auto">
                      <feature.icon className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      <span className="text-sm text-[#1A1A1A]">{feature.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 sm:p-8 border border-amber-200">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Plus Detailed Instructions & Setup Guide
            </h3>
            <p className="text-gray-600 mb-6">
              Never feel lost with our comprehensive instructions tab that walks you through every feature step-by-step.
            </p>
            <a href="https://superprofile.bio/vp/2QZyn8Dq" target="_blank" rel="noopener noreferrer">
            <button className="bg-gradient-to-r from-amber-600 to-orange-500 text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              See All Features in Action
            </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
