import React from 'react';
import { Menu } from 'lucide-react';

interface NavProps {
  onMenuClick: () => void;
}

const Nav: React.FC<NavProps> = ({ onMenuClick }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img 
              src="https://letsmediahub.com.br/wp-content/uploads/2024/10/lets_media_png_04-1.png"
              alt="Let's Media Hub"
              className="h-12 w-auto"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#consumer">Consumer Brands</NavLink>
            <NavLink href="#professional">Professional Brands</NavLink>
            <NavLink href="#careers">Careers & Culture</NavLink>
            <NavLink href="#advertise">Advertise With Us</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          <button 
            className="md:hidden p-2"
            onClick={onMenuClick}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a 
    href={href}
    className="text-gray-800 hover:text-blue-600 transition-colors duration-200 text-sm font-medium"
  >
    {children}
  </a>
);

export default Nav;