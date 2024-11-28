import React from 'react';

const CallToAction = () => {
  return (
    <section className="relative py-24 mb-24">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1920"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90 backdrop-blur-sm" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl font-bold text-white mb-6">You + Brew</h2>
        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
          Join millions of ambitious professionals who start their day with Morning Brew. Together, let's reshape the future of business media.
        </p>
        <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default CallToAction;