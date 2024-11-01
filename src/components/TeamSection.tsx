import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const team = [
  {
    name: 'Darshit Anadkat',
    role: 'Chief Executive Officer',
    qualification: 'Ph.D. in Artificial Intelligence, Stanford University',
    image:
      'https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Harshit Kashyap',
    role: 'Chief Technology Officer',
    qualification: 'M.S. in Computer Science, MIT',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Jayrajsinh Gohil',
    role: 'Chief Data Scientist',
    qualification: 'Ph.D. in Machine Learning, Carnegie Mellon University',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];

export default function TeamSection() {
  return (
    <div className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,_189,_248,_0.1),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(14,_165,_233,_0.1),_transparent_50%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center scroll-reveal">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Meet Our Leadership Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experts in AI, data science, and trade analytics working together to
            transform global trade
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-3">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="relative group scroll-reveal"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-20 transition-all duration-500 blur" />
              <div className="relative bg-white rounded-xl shadow-xl overflow-hidden transform transition-all-smooth duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <div className="aspect-w-3 aspect-h-4">
                  <img
                    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                    src={member.image}
                    alt={member.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </div>
                <div className="p-6 relative z-10">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-cyan-600 font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    {member.qualification}
                  </p>
                  <div className="flex space-x-4">
                    {[Linkedin, Twitter, Mail].map((Icon, i) => (
                      <a
                        key={i}
                        href="#"
                        className="text-gray-400 hover:text-cyan-500 transform transition-all duration-300 hover:scale-110"
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
