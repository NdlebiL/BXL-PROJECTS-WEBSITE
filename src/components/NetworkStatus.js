import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WifiOff, CheckCircle } from 'lucide-react';
import { useNetworkStatus } from '../hooks/useErrorHandling';

const NetworkStatus = () => {
  const { showOffline, showReconnected } = useNetworkStatus();

  return (
    <AnimatePresence>
      {showOffline && (
        <motion.div
          key="offline"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          className="fixed top-24 left-1/2 transform -translate-x-1/2 z-[9999] px-4 py-2 rounded-full shadow-lg bg-red-500 text-white"
        >
          <div className="flex items-center gap-2">
            <WifiOff className="w-4 h-4" />
            <span className="text-sm font-medium">No internet connection</span>
          </div>
        </motion.div>
      )}
      
      {showReconnected && (
        <motion.div
          key="reconnected"
          initial={{ y: -100, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: -100, opacity: 0, scale: 0.8 }}
          transition={{ 
            type: "spring", 
            stiffness: 200, 
            damping: 20,
            duration: 0.6
          }}
          className="fixed top-24 left-1/2 transform -translate-x-1/2 z-[9999] px-4 py-2 rounded-full shadow-lg bg-green-500 text-white"
        >
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Back online!</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NetworkStatus;