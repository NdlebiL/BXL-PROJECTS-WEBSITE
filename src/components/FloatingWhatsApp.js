import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/+27710000000?text=Hi%20BXL%20Projects!%20I'd%20like%20a%20quote"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-whatsapp text-white rounded-full p-4 flex items-center space-x-2 z-50"
      style={{ 
        boxShadow: '0 20px 40px rgba(16,185,129,0.5), inset 0 -5px 10px rgba(0,0,0,0.3)',
        transformStyle: 'preserve-3d'
      }}
      initial={{ scale: 0, rotateZ: -180 }}
      animate={{ scale: 1, rotateZ: 0 }}
      whileHover={{ scale: 1.15, rotateZ: 5, y: -5 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotateZ: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.4))' }}
      >
        <MessageCircle size={28} />
      </motion.div>
      <span className="hidden sm:inline font-opensans font-semibold">Chat on WhatsApp</span>
    </motion.a>
  );
};

export default FloatingWhatsApp;
