import React from 'react';

const Hero = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 mt-20 mb-8">
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden rounded-2xl">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1920"
        >
          <source 
            src="https://cdn.coverr.co/videos/coverr-typing-on-computer-keyboard-2633/1080p.mp4" 
            type="video/mp4"
          />
        </video>
        
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 text-center px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white max-w-4xl mx-auto leading-tight">
            Morning Brew Inc. is the most engaging business media company in the world.
          </h1>
          <p className="mt-6 text-xl sm:text-2xl text-white font-medium">
            No really. We mean it.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Hero;