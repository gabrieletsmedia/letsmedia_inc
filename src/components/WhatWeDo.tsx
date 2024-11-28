import React, { useState } from 'react';
import { Mail, Mic, Video, BarChart2, Share2, Calendar, ChevronDown } from 'lucide-react';

const categories = [
  {
    id: 'email',
    title: 'Email',
    icon: Mail,
    color: 'rgb(107, 191, 207)',
    content: 'There are two ways to make your mark in the inbox. First: high-impact editorial ad placements in Morning Brew Daily or one of our other trusted newsletters. Second: custom-created dedicated emails sent from Morning Brew Inc. brands to targeted audience segments.',
    image: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=1920',
  },
  {
    id: 'audio',
    title: 'Audio',
    icon: Mic,
    color: 'rgb(254, 49, 110)',
    content: 'Through podcasts and audio briefings, we bring business news to life with expert analysis and engaging conversations that make complex topics accessible and entertaining.',
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1920',
  },
  {
    id: 'branded',
    title: 'Branded Content',
    icon: Share2,
    color: 'rgb(253, 106, 61)',
    content: 'Our Creative Studio develops custom content that aligns with your brand message while maintaining the engaging style our audience loves.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1920',
  },
  {
    id: 'video',
    title: 'Video',
    icon: Video,
    color: 'rgb(27, 127, 242)',
    content: 'Visual storytelling that breaks down business concepts, market trends, and industry news through compelling short-form and long-form content across platforms.',
    image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1920',
  },
  {
    id: 'data',
    title: 'Data & Insights',
    icon: BarChart2,
    color: 'rgb(40, 192, 119)',
    content: 'We transform complex data into actionable insights, helping businesses understand trends, audience behavior, and market opportunities through detailed analytics.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920',
  },
  {
    id: 'events',
    title: 'Events',
    icon: Calendar,
    color: 'rgb(189, 225, 255)',
    content: 'From intimate roundtables to large-scale conferences, we create memorable experiences that connect our community with industry leaders and innovative ideas.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1920',
  },
];

const WhatWeDo = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const toggleCategory = (id: string) => {
    setActiveCategory(activeCategory === id ? null : id);
  };

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left Column */}
          <div className="lg:col-span-5">
            <h2 className="text-[48px] leading-[55px] font-bold text-[#231F20] mb-8">
              What We Do
            </h2>
            <p className="text-[18px] leading-[27px] text-[#231F20]">
              Morning Brew Inc. engages across every media format. Sponsor editorial content or develop your own with our Creative Studio, ensuring each and every campaign aligns with your message, audience, and objectives.
            </p>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7">
            <div className="space-y-4">
              {categories.map((category) => {
                const Icon = category.icon;
                const isActive = activeCategory === category.id;
                
                return (
                  <div key={category.id} className="overflow-hidden">
                    <button
                      onClick={() => toggleCategory(category.id)}
                      className="w-full flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:border-[#231F20] transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-10 h-10 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: category.color }}
                        >
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-medium text-lg">{category.title}</span>
                      </div>
                      <ChevronDown 
                        className={`w-5 h-5 transition-transform duration-300 ${
                          isActive ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    
                    <div 
                      className={`transition-all duration-500 ease-in-out ${
                        isActive 
                          ? 'max-h-[800px] opacity-100 mt-4' 
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-4">
                        <img
                          src={category.image}
                          alt={category.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-[18px] leading-[27px] text-[#231F20] px-4">
                        {category.content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;