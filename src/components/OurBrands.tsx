import React from 'react';

const brands = [
  {
    name: '60 Second Brew',
    image: 'https://images.unsplash.com/photo-1518183214770-9cffbec72538?auto=format&fit=crop&w=600&h=600',
  },
  {
    name: 'After Earnings',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&h=600',
  },
  {
    name: 'Money with Katie',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=600&h=600',
  },
  {
    name: 'Money Wise',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=600&h=600',
  },
  {
    name: 'Morning Brew',
    image: 'https://images.unsplash.com/photo-1518057111178-44a106bad636?auto=format&fit=crop&w=600&h=600',
  },
  {
    name: 'MBD',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&h=600',
  },
  {
    name: 'Our Future',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&h=600',
  },
  {
    name: 'See My Email',
    image: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=600&h=600',
  },
  {
    name: 'Paybook',
    image: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=600&h=600',
  },
  {
    name: 'Tech Insights',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&h=600',
  },
];

const OurBrands = () => {
  return (
    <section className="bg-[#121212] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Two Divisions. One Job.</h2>
          <p className="text-gray-400 text-lg max-w-4xl mx-auto">
            Our Consumer brands make need-to-know business content want to know by delivering in a way that's relatable, understandable, and shareable. And our Professional brands are the go-to for easy-to-digest insights that help business leaders thrive in today's most impactful industries.
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="aspect-square relative rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h3 className="text-white text-sm font-bold">{brand.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurBrands;