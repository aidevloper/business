import React from 'react';

const Screenshots: React.FC = () => {
  const screenshots = [
    {
      title: "Bank Account Tracker",
      description: "Track cash flow from all your accounts in one place.",
      image: "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "All-in-One Dashboard",
      description: "See your entire business performance at a glance.",
      image: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Automated Calendar",
      description: "Never miss a due date, payment, or reminder.",
      image: "https://images.pexels.com/photos/6779714/pexels-photo-6779714.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Order Setup",
      description: "Set up customer orders quickly and professionally.",
      image: "https://images.pexels.com/photos/5686105/pexels-photo-5686105.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Order Overview",
      description: "Get a complete snapshot of all current and past orders.",
      image: "https://images.pexels.com/photos/669612/pexels-photo-669612.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Sales Overview",
      description: "Understand your revenue trends and top-selling products.",
      image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Recipe / Bill of Material",
      description: "Know exactly what materials go into each product.",
      image: "https://images.pexels.com/photos/1164536/pexels-photo-1164536.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Pricing Calculator",
      description: "Price your products with complete cost and margin clarity.",
      image: "https://images.pexels.com/photos/4386328/pexels-photo-4386328.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Customer Tracker",
      description: "Track customer info, history, and order details easily.",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Material Inventory",
      description: "Stay stocked up with real-time raw material tracking.",
      image: "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Product Inventory",
      description: "Know which products are in stock and what needs restocking.",
      image: "https://images.pexels.com/photos/4483611/pexels-photo-4483611.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Order Tracker",
      description: "Track every order from received to fulfilled.",
      image: "https://images.pexels.com/photos/6169033/pexels-photo-6169033.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Invoice Generator",
      description: "Auto-generate clean, professional invoices in 1 click.",
      image: "https://images.pexels.com/photos/6963046/pexels-photo-6963046.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Bookkeeping Setup",
      description: "Start tracking finances in minutes with a guided setup.",
      image: "https://images.pexels.com/photos/669622/pexels-photo-669622.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Income Tracker",
      description: "Monitor all income streams and revenue sources.",
      image: "https://images.pexels.com/photos/7947758/pexels-photo-7947758.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Expense Tracker",
      description: "Track business spending with full visibility.",
      image: "https://images.pexels.com/photos/669613/pexels-photo-669613.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Mileage Tracker",
      description: "Log business travel for easy tax calculations.",
      image: "https://images.pexels.com/photos/7144231/pexels-photo-7144231.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Monthly Dashboard",
      description: "View monthly profit/loss and key financial stats.",
      image: "https://images.pexels.com/photos/669616/pexels-photo-669616.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Annual Dashboard",
      description: "Analyze yearly performance and trends.",
      image: "https://images.pexels.com/photos/3183172/pexels-photo-3183172.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Custom Dashboard",
      description: "Create views for any custom date range or category.",
      image: "https://images.pexels.com/photos/7567497/pexels-photo-7567497.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Task Setup",
      description: "Organize tasks by project, priority, and team.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Task Tracker",
      description: "Stay on top of every to-do with a dynamic tracker.",
      image: "https://images.pexels.com/photos/3815588/pexels-photo-3815588.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
           Take a Look Inside the Tracker
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Visualize how each tool streamlines your handmade business — from pricing to inventory, invoicing, and bookkeeping.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {screenshots.map((screenshot, index) => (
            <div key={`${screenshot.title}-${index}`} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={screenshot.image} alt={screenshot.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{screenshot.title}</h3>
                <p className="mt-2 text-gray-600">{screenshot.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Want to See More?
            </h3>
            <p className="text-gray-600 mb-6">
              Get instant access to all 22 tabs and start exploring everything this tracker can do for your business.
            </p>
            <a href="https://superprofile.bio/vp/2QZyn8Dq" target="_blank" rel="noopener noreferrer">
            <button className="bg-gradient-to-r from-amber-600 to-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              View Full Preview
            </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;