import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex flex-col items-start mb-6"> {/* Alterado para flex-col para empilhar logo e texto */}
              <img 
                src="https://letsmediahub.com.br/wp-content/uploads/2024/11/lets_white_cut-1.png" 
                alt="Logo"
                className="w-[200px] h-auto"
              />
              <p className="text-gray-400 mt-2"> {/* Adicionando margem superior para espaçamento */}
                The most engaging business media company in the world.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Consumer Brands</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Morning Brew</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Money with Katie</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Money Wise</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">The Brew</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Professional Brands</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Healthcare Brew</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Marketing Brew</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Retail Brew</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tech Brew</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Advertise</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Morning Brew Inc. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;