import React, { useState } from 'react';
import { Trophy, Target, BarChart, Users, Rocket, Zap } from 'lucide-react';

const stories = [
  {
    id: 'growth',
    title: 'Growth & Scale',
    icon: Rocket,
    color: 'rgb(27, 127, 242)',
    stat: '300%',
    highlight: 'User Growth',
    content: 'Helped a fintech startup achieve remarkable user growth in 6 months through targeted content campaigns and strategic newsletter placements.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920'
  },
  {
    id: 'engagement',
    title: 'Audience Engagement',
    icon: Users,
    color: 'rgb(254, 49, 110)',
    stat: '2.5M+',
    highlight: 'Newsletter Signups',
    content: 'Drove millions of newsletter signups for a leading SaaS company through integrated content partnerships and custom audience targeting.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920'
  },
  {
    id: 'awareness',
    title: 'Brand Awareness',
    icon: Target,
    color: 'rgb(40, 192, 119)',
    stat: '85%',
    highlight: 'Brand Recognition',
    content: 'Increased brand recognition for an emerging tech company through strategic content placement and storytelling.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920'
  },
  {
    id: 'conversion',
    title: 'Lead Conversion',
    icon: BarChart,
    stat: '50K+',
    highlight: 'Qualified Leads',
    color: 'rgb(253, 106, 61)',
    content: 'Generated qualified leads for a B2B platform through targeted newsletter campaigns and custom content.',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1920'
  }
];

const SuccessStories = () => {
  const [activeStory, setActiveStory] = useState<string>(stories[0].id);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[48px] leading-[55px] font-bold text-[#231F20] mb-6">
            Success Stories
          </h2>
          <p className="text-[18px] leading-[27px] text-[#231F20] max-w-3xl mx-auto">
            We've helped hundreds of innovative companies achieve remarkable results through strategic partnerships and engaging content.
          </p>
        </div>

        {/* Story Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stories.map((story) => {
            const Icon = story.icon;
            const isActive = activeStory === story.id;
            
            return (
              <button
                key={story.id}
                onClick={() => setActiveStory(story.id)}
                className={`group transition-all duration-300 ${
                  isActive ? 'opacity-100' : 'opacity-60 hover:opacity-80'
                }`}
              >
                <div className="flex items-center gap-3 p-4 rounded-xl border-2 transition-colors duration-300"
                  style={{ 
                    borderColor: isActive ? story.color : 'transparent',
                    backgroundColor: isActive ? `${story.color}10` : 'transparent'
                  }}
                >
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300"
                    style={{ backgroundColor: story.color }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-medium whitespace-nowrap">{story.title}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Story Content */}
        {stories.map((story) => {
          const isActive = activeStory === story.id;
          if (!isActive) return null;

          return (
            <div 
              key={story.id}
              className="grid lg:grid-cols-2 gap-12 items-center"
              style={{ 
                opacity: isActive ? 1 : 0,
                transition: 'opacity 0.5s ease-in-out'
              }}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="text-6xl font-bold mb-2">{story.stat}</div>
                  <div className="text-xl font-medium">{story.highlight}</div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-[#231F20]">{story.title}</h3>
                <p className="text-lg leading-relaxed text-gray-700">{story.content}</p>
                <button 
                  className="px-6 py-3 rounded-xl text-white font-medium transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: story.color }}
                >
                  Learn More
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SuccessStories;