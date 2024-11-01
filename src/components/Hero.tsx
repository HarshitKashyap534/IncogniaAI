import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-navy-900 pt-16 overflow-hidden">
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover video-dim"
        >
          <source
            src="https://media.istockphoto.com/id/1503219957/video/4k-abstract-particle-wave-background.mp4?s=mp4-640x640-is&k=20&c=XBHk6v0KpFKz2gojTAp7QfspbMAapHr3cY1ywMcQGmY="
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900/95 via-navy-900/90 to-navy-900/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,_189,_248,_0.15),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(14,_165,_233,_0.15),_transparent_50%)]" />
        <div className="absolute inset-0 gradient-animate bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="relative scroll-reveal">
          <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 opacity-20 blur-2xl"></div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
            Empowering Trade with
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              {' '}
              AI-Driven Insights
            </span>
          </h1>
        </div>
        <p className="text-xl text-gray-300 max-w-2xl mb-8 scroll-reveal">
          Transform your trade operations with advanced analytics and predictive
          intelligence. Make data-driven decisions that drive growth and
          minimize risks.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 scroll-reveal">
          <button className="group inline-flex items-center px-6 py-3 text-base font-medium rounded-md text-white bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:from-cyan-600 hover:via-blue-600 hover:to-purple-600 transform transition-all-smooth duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
            Request Free Consultation
            <ArrowRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
          </button>
          <button className="group inline-flex items-center px-6 py-3 border border-cyan-500/30 text-base font-medium rounded-md text-white hover:bg-white/10 hover:border-cyan-500/50 transition-all-smooth duration-300">
            <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
            Watch Demo
          </button>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {[
            ['10+', 'Global Markets'],
            ['95%', 'Forecast Accuracy'],
            ['24/7', 'Real-time Analysis'],
            ['500+', 'Satisfied Clients'],
          ].map(([stat, label], index) => (
            <div
              key={label}
              className="relative group animate-float scroll-reveal"
              style={{
                animationDelay: `${index * 0.2}s`,
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg opacity-0 group-hover:opacity-20 transition-all duration-300 blur" />
              <div className="relative text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm">
                <p className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-pulse-soft">
                  {stat}
                </p>
                <p className="text-gray-400 mt-1">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
