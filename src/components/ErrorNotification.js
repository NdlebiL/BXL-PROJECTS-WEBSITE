import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, AlertTriangle, Info, CheckCircle } from 'lucide-react';

const ErrorNotification = ({ error, onClose }) => {
  if (!error) return null;

  const getIcon = () => {
    if (error.type === 'success') return <CheckCircle className="w-5 h-5" />;
    if (error.type === 'info') return <Info className="w-5 h-5" />;
    return <AlertTriangle className="w-5 h-5" />;
  };

  const getColors = () => {
    if (error.type === 'success') return 'bg-green-500 border-green-400';
    if (error.type === 'info') return 'bg-blue-500 border-blue-400';
    return 'bg-red-500 border-red-400';
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: 400, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 400, opacity: 0 }}
        className={`fixed top-24 right-4 z-50 max-w-sm ${getColors()} border rounded-lg shadow-lg text-white p-4`}
      >
        <div className="flex items-start gap-3">
          {getIcon()}
          <div className="flex-1">
            <p className="font-medium text-sm">{error.message}</p>
            {error.context && (
              <p className="text-xs opacity-80 mt-1">Context: {error.context}</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ErrorNotification;