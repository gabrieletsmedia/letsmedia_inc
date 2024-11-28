import React from 'react';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-50 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      
      <div className="absolute right-0 top-0 bottom-0 w-64 bg-white shadow-xl">
        <div className="p-4 flex justify-end">
          <button onClick={onClose}>
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <nav className="px-4 py-2">
          <MobileNavLink href="#consumer">Consumer Brands</MobileNavLink>
          <MobileNavLink href="#professional">Professional Brands</MobileNavLink>
          <MobileNavLink href="#careers">Careers & Culture</MobileNavLink>
          <MobileNavLink href="#advertise">Advertise With Us</MobileNavLink>
          <MobileNavLink href="#contact">Contact</MobileNavLink>
        </nav>
      </div>
    </div>
  );
};

const MobileNavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a
    href={href}
    className="block py-3 text-gray-800 hover:text-blue-600 transition-colors duration-200"
  >
    {children}
  </a>
);

export default MobileMenu;