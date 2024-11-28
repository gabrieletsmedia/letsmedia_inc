import React, { useState } from 'react';
import { Coffee } from 'lucide-react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import WhatWeMean from './components/WhatWeMean';
import WhoWeAre from './components/WhoWeAre';
import PodcastGuests from './components/PodcastGuests';
import OurBrands from './components/OurBrands';
import WhatWeDo from './components/WhatWeDo';
import OurClients from './components/OurClients';
import SuccessStories from './components/SuccessStories';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Nav onMenuClick={() => setIsMobileMenuOpen(true)} />
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
      
      <main>
        <Hero />
        
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="rounded-2xl bg-white overflow-hidden">
            <WhatWeMean />
          </div>
          
          <div className="rounded-2xl bg-[#FAF9F5] overflow-hidden">
            <WhoWeAre />
          </div>
          
          <div className="rounded-2xl bg-white overflow-hidden">
            <PodcastGuests />
          </div>
          
          <div className="rounded-2xl bg-[#121212] overflow-hidden">
            <OurBrands />
          </div>
          
          <div className="rounded-2xl bg-white overflow-hidden">
            <WhatWeDo />
          </div>

          <div className="rounded-2xl bg-[#FAF9F5] overflow-hidden">
            <OurClients />
          </div>

          <div className="rounded-2xl bg-white overflow-hidden mb-24">
            <SuccessStories />
          </div>
          
          <div className="rounded-2xl overflow-hidden mb-24">
            <CallToAction />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;