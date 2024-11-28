import React, { useState } from 'react';
import { Users, Globe, Target, TrendingUp, MapPin } from 'lucide-react';

const menuItems = [
  {
    name: 'Our Audience',
    icon: Users,
    color: 'rgb(27, 127, 242)',
    cards: [
      {
        type: 'image',
        image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800',
        title: 'We drive trial and trust',
        stat: '90%',
        desc: 'like a brand more after seeing it'
      },
      {
        type: 'color',
        color: 'rgb(189, 225, 255)',
        title: 'Balanced Demographics',
        stat: '53/47',
        desc: 'Male/Female Split'
      },
      {
        type: 'image',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800',
        title: 'Highly Engaged',
        stat: '42%',
        desc: 'Average Open Rate'
      },
      {
        type: 'color',
        color: 'rgb(40, 192, 119)',
        title: 'Global Reach',
        stat: '35.1M',
        desc: 'Social Media Followers'
      }
    ]
  },
  {
    name: 'Our Influence',
    icon: Globe,
    color: 'rgb(107, 191, 207)',
    cards: [
      {
        type: 'image',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800',
        title: 'Industry Impact',
        stat: '190+',
        desc: 'Countries Reached'
      },
      {
        type: 'color',
        color: 'rgb(253, 106, 61)',
        title: 'Engagement Metrics',
        stat: '42%',
        desc: 'Average Open Rate'
      },
      {
        type: 'image',
        image: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=800',
        title: 'Newsletter Growth',
        stat: '300%',
        desc: 'YoY Subscriber Growth'
      },
      {
        type: 'color',
        color: 'rgb(189, 225, 255)',
        title: 'Brand Trust',
        stat: '95%',
        desc: 'Reader Trust Score'
      }
    ]
  },
  {
    name: 'Our Approach',
    icon: Target,
    color: 'rgb(254, 49, 110)',
    cards: [
      {
        type: 'image',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800',
        title: 'Data-Driven',
        stat: '100%',
        desc: 'Custom Analytics'
      },
      {
        type: 'color',
        color: 'rgb(189, 225, 255)',
        title: 'Content Excellence',
        stat: '3,300+',
        desc: 'Articles Published'
      },
      {
        type: 'image',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800',
        title: 'Audience First',
        stat: '24/7',
        desc: 'Content Optimization'
      },
      {
        type: 'color',
        color: 'rgb(40, 192, 119)',
        title: 'Innovation',
        stat: '15+',
        desc: 'New Formats Launched'
      }
    ]
  },
  {
    name: 'Our Growth',
    icon: TrendingUp,
    color: 'rgb(253, 106, 61)',
    cards: [
      {
        type: 'image',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800',
        title: 'Rapid Expansion',
        stat: '300%',
        desc: 'YoY Growth'
      },
      {
        type: 'color',
        color: 'rgb(40, 192, 119)',
        title: 'Market Leadership',
        stat: '85%',
        desc: 'Market Share'
      },
      {
        type: 'image',
        image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800',
        title: 'Team Growth',
        stat: '200+',
        desc: 'Team Members'
      },
      {
        type: 'color',
        color: 'rgb(189, 225, 255)',
        title: 'Global Reach',
        stat: '150+',
        desc: 'Countries'
      }
    ]
  },
  {
    name: 'Where to Find Us',
    icon: MapPin,
    color: 'rgb(40, 192, 119)',
    hint: "(Hint: It's everywhere)",
    cards: [
      {
        type: 'image',
        image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=800',
        title: 'Global Presence',
        stat: '1M+',
        desc: 'Local Readers'
      },
      {
        type: 'color',
        color: 'rgb(27, 127, 242)',
        title: 'Digital Reach',
        stat: '10+',
        desc: 'Social Platforms'
      },
      {
        type: 'image',
        image: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=800',
        title: 'Newsletter Impact',
        stat: '5M+',
        desc: 'Daily Readers'
      },
      {
        type: 'color',
        color: 'rgb(254, 49, 110)',
        title: 'Events & Meetups',
        stat: '100+',
        desc: 'Annual Events'
      }
    ]
  }
];

const WhoWeAre = () => {
  const [activeMenu, setActiveMenu] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="bg-[rgb(250,249,245)] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[48px] leading-[55px] font-bold text-[#231F20] mb-16">
          Sobre a Let's Media:
        </h2>
        
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Menu */}
          <div className="lg:col-span-4">
            <nav className="space-y-1">
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeMenu === index;
                
                return (
                  <div key={item.name} className="relative">
                    <button
                      onClick={() => {
                        setActiveMenu(index);
                        setActiveSlide(0);
                      }}
                      className={`w-full text-left py-6 flex items-center gap-3 transition-all duration-300 ${
                        isActive ? 'opacity-100 translate-x-3' : 'opacity-70 hover:opacity-100'
                      }`}
                    >
                      <div 
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: item.color }}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <span className="text-[22px] leading-[1.15em] text-[#231F20] font-semibold">
                          {item.name}
                        </span>
                        {item.hint && (
                          <p className="text-sm text-[#231F20] opacity-60">{item.hint}</p>
                        )}
                      </div>
                    </button>
                    <div className="h-[1px] w-full bg-[rgb(233,232,228)]" />
                    {isActive && (
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#231F20] transform scale-x-100 transition-transform duration-300" />
                    )}
                  </div>
                );
              })}
            </nav>
          </div>

          {/* Cards */}
          <div className="lg:col-span-8">
            <div className="relative overflow-hidden rounded-2xl">
              <div 
                className="flex gap-6 transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeSlide * 108}%)` }}
              >
                {menuItems[activeMenu].cards.map((card, index) => (
                  <div
                    key={index}
                    className="w-[calc(50%-12px)] flex-shrink-0 h-[500px] rounded-2xl overflow-hidden relative"
                    style={{ backgroundColor: card.type === 'color' ? card.color : undefined }}
                  >
                    {card.type === 'image' && (
                      <>
                        <img
                          src={card.image}
                          alt=""
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50" />
                      </>
                    )}
                    
                    <div className="relative h-full flex flex-col items-center justify-center p-12 text-center">
                      <h5 className={`text-2xl leading-[1.4] mb-6 font-semibold ${
                        card.type === 'image' ? 'text-white' : 'text-[#231F20]'
                      }`}>
                        {card.title}
                      </h5>
                      <h2 className={`text-5xl leading-[1.2] font-bold ${
                        card.type === 'image' ? 'text-white' : 'text-[#231F20]'
                      }`}>
                        {card.stat}
                      </h2>
                      <p className={`mt-2 text-xl ${
                        card.type === 'image' ? 'text-white' : 'text-[#231F20]'
                      }`}>
                        {card.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Controls */}
              <div className="absolute -bottom-16 right-8 flex gap-4">
                <button
                  onClick={() => setActiveSlide(prev => Math.max(0, prev - 1))}
                  className="w-8 h-8 rounded-[10px] bg-[rgb(227,96,71)] flex items-center justify-center"
                >
                  <img src="https://framerusercontent.com/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg" alt="Previous" />
                </button>
                <button
                  onClick={() => setActiveSlide(prev => Math.min(menuItems[activeMenu].cards.length - 1, prev + 1))}
                  className="w-8 h-8 rounded-[10px] bg-[rgb(227,96,71)] flex items-center justify-center"
                >
                  <img src="https://framerusercontent.com/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg" alt="Next" />
                </button>
              </div>

              {/* Dots Navigation */}
              <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex gap-4">
                {menuItems[activeMenu].cards.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSlide(index)}
                    className="w-2 h-2 rounded-full transition-opacity duration-200"
                    style={{
                      backgroundColor: 'rgb(253, 106, 61)',
                      opacity: activeSlide === index ? 1 : 0.2
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;