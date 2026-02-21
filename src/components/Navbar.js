import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'services', 'about', 'portfolio', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: 'home' },
    { name: 'Services', path: 'services' },
    { name: 'About', path: 'about' },
    { name: 'Portfolio', path: 'portfolio' },
    { name: 'Contact', path: 'contact' },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      style={{ 
        position: 'sticky',
        top: 0,
        transformStyle: 'preserve-3d',
        zIndex: 9999,
        boxShadow: '0 20px 40px -20px rgba(0,0,0,0.8)'
      }}
      className={`w-full transition-all duration-500 bg-black bg-opacity-90 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.6)] ${
        isScrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <button onClick={() => scrollToSection('home')}>
            <motion.h1
              whileHover={{ color: '#3B82F6', scale: 1.05 }}
              style={{ textShadow: '3px 6px 10px rgba(0,0,0,0.5)' }}
              className="text-white font-montserrat font-black text-2xl md:text-3xl transition-colors"
            >
              BXL PROJECTS
            </motion.h1>
          </button>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button key={link.path} onClick={() => scrollToSection(link.path)} className="relative group">
                <motion.span 
                  whileHover={{ y: -2 }}
                  className="text-white font-opensans font-semibold hover:text-blueGlow transition-all duration-300 inline-block"
                  style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
                >
                  {link.name}
                </motion.span>
                {activeSection === link.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blueGlow shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-navy bg-opacity-95 mt-4"
        >
          <div className="flex flex-col items-center space-y-6 py-8">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => scrollToSection(link.path)}
                className="text-white text-2xl font-montserrat font-bold hover:text-blueGlow transition-all duration-300"
              >
                {link.name}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
