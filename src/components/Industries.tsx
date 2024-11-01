import React from 'react';
import { Ship, Truck, Factory, Building2 } from 'lucide-react';

const industries = [
  {
    icon: Ship,
    title: 'Maritime & Shipping',
    description: 'Optimize routes and reduce downtime with predictive analysis',
    bgImage: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    icon: Truck,
    title: 'Logistics',
    description: 'Enhance inventory management with demand forecasting',
    bgImage: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'Streamline supply chains and optimize production',
    bgImage: 'https://images.unsplash.com/photo-1581091226825-c6a89e7e4801?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    icon: Building2,
    title: 'Enterprise',
    description: 'Transform operations with data-driven insights',
    bgImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  }
];

export default function Industries() {
  return (
    <div className="py-24 bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(24,_180,_160,_0.15),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(24,_180,_160,_0.15),_transparent_50%)]" />
      <div className="absolute inset-0 gradient-animate bg-gradient-to-r from-teal-500/5 via-blue-500/5 to-purple-500/5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center scroll-reveal">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Industries We Serve
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Tailored solutions for diverse sectors
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => (
            <div
              key={industry.title}
              className="relative group rounded-xl overflow-hidden scroll-reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0">
                <img
                  src={industry.bgImage}
                  alt={industry.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/80 to-navy-900/40" />
              </div>
              <div className="relative p-6 h-full min-h-[320px] flex flex-col justify-end transform transition-transform duration-300 group-hover:-translate-y-2">
                <industry.icon className="h-12 w-12 text-teal-400 mb-4 animate-float" style={{ animationDelay: `${index * 0.2}s` }} />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {industry.title}
                </h3>
                <p className="text-gray-300">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}