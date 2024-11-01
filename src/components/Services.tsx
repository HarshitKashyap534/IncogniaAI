import React from 'react';
import { Brain, Globe2, BarChart3, Shield } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'AI-Powered Analytics',
    description: 'Advanced machine learning algorithms analyze complex trade patterns and market trends.'
  },
  {
    icon: Globe2,
    title: 'Global Trade Intelligence',
    description: 'Real-time insights into international markets and trade opportunities.'
  },
  {
    icon: BarChart3,
    title: 'Predictive Forecasting',
    description: 'Accurate demand forecasting and risk assessment using historical and real-time data.'
  },
  {
    icon: Shield,
    title: 'Risk Management',
    description: 'Proactive identification and mitigation of trade risks and compliance issues.'
  }
];

export default function Services() {
  return (
    <div className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(24,_180,_160,_0.05),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(24,_180,_160,_0.05),_transparent_50%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive solutions powered by artificial intelligence
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-blue-600 rounded-xl opacity-0 group-hover:opacity-10 transition duration-300" />
              <div className="relative bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="absolute right-4 top-4 w-12 h-12 bg-gradient-to-br from-teal-500/10 to-blue-500/10 rounded-full" />
                <service.icon className="h-12 w-12 text-teal-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}