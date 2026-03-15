import { useState, useEffect } from 'react';

export const useNetworkStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [wasOffline, setWasOffline] = useState(false);
  const [showReconnected, setShowReconnected] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      console.log('Network: Back online');
      setIsOnline(true);
      if (wasOffline) {
        setShowReconnected(true);
        // Hide reconnection message after 3 seconds
        setTimeout(() => {
          setShowReconnected(false);
          setWasOffline(false);
        }, 3000);
      }
    };

    const handleOffline = () => {
      console.log('Network: Gone offline');
      setIsOnline(false);
      setWasOffline(true);
      setShowReconnected(false);
    };

    // Additional check for mobile browsers
    const checkConnection = () => {
      const online = navigator.onLine;
      if (online !== isOnline) {
        if (online) {
          handleOnline();
        } else {
          handleOffline();
        }
      }
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    // Check connection status periodically for mobile browsers
    const intervalId = setInterval(checkConnection, 2000);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      clearInterval(intervalId);
    };
  }, [isOnline, wasOffline]);

  // Debug logging
  useEffect(() => {
    console.log('Network Status:', { isOnline, wasOffline, showReconnected });
  }, [isOnline, wasOffline, showReconnected]);

  return { 
    isOnline, 
    showOffline: !isOnline, 
    showReconnected: showReconnected && isOnline 
  };
};

export const useErrorHandler = () => {
  const [error, setError] = useState(null);

  const handleError = (error, context = '') => {
    console.error(`Error in ${context}:`, error);
    
    let errorMessage = 'An unexpected error occurred';
    
    if (error.name === 'NetworkError' || error.message.includes('fetch')) {
      errorMessage = 'Network connection error. Please check your internet connection.';
    } else if (error.name === 'TypeError') {
      errorMessage = 'A technical error occurred. Please try refreshing the page.';
    } else if (error.message) {
      errorMessage = error.message;
    }
    
    setError({
      message: errorMessage,
      context,
      timestamp: new Date().toISOString()
    });
    
    // Auto-clear error after 5 seconds
    setTimeout(() => setError(null), 5000);
  };

  const clearError = () => setError(null);

  return { error, handleError, clearError };
};