import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Company Info */}
          <div>
            <h3 className="text-white font-montserrat font-bold text-lg mb-4">BXL Projects</h3>
            <p className="text-gray-400 font-opensans text-sm mb-4">
              Bukhanye Xcellence Legacy - Building digital solutions that empower businesses.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-montserrat font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail size={16} />
                <span>info@bxlprojects.co.za</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone size={16} />
                <span>+27 71 000 0000</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin size={16} />
                <span>East London, Eastern Cape, SA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-montserrat font-bold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              {['Home', 'Services', 'About', 'Portfolio', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 font-opensans text-sm mb-2">
            Built with ❤️ by <span className="text-white font-bold">BXL Projects</span>
          </p>
          <p className="text-gray-500 font-opensans text-xs">
            © {new Date().getFullYear()} BXL Projects. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
