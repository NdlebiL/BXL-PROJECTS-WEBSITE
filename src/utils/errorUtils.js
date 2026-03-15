// Utility functions for error handling and safe operations

export const safeAsync = async (asyncFn, fallback = null, context = '') => {
  try {
    return await asyncFn();
  } catch (error) {
    console.error(`Error in ${context}:`, error);
    return fallback;
  }
};

export const withRetry = async (asyncFn, maxRetries = 3, delay = 1000) => {
  let lastError;
  
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await asyncFn();
    } catch (error) {
      lastError = error;
      if (i < maxRetries - 1) {
        await new Promise(resolve => setTimeout(resolve, delay * (i + 1)));
      }
    }
  }
  
  throw lastError;
};

export const isNetworkError = (error) => {
  return (
    error.name === 'NetworkError' ||
    error.message.includes('fetch') ||
    error.message.includes('network') ||
    error.message.includes('Failed to fetch') ||
    !navigator.onLine
  );
};

export const getErrorMessage = (error) => {
  if (isNetworkError(error)) {
    return 'Network connection error. Please check your internet connection and try again.';
  }
  
  if (error.name === 'ValidationError') {
    return error.message;
  }
  
  if (error.name === 'TypeError') {
    return 'A technical error occurred. Please refresh the page and try again.';
  }
  
  return error.message || 'An unexpected error occurred. Please try again.';
};

export const logError = (error, context = '', additionalInfo = {}) => {
  const errorInfo = {
    message: error.message,
    name: error.name,
    stack: error.stack,
    context,
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
    url: window.location.href,
    ...additionalInfo
  };
  
  console.error('Error logged:', errorInfo);
  
  // In production, you might want to send this to an error tracking service
  // like Sentry, LogRocket, or your own logging endpoint
  if (process.env.NODE_ENV === 'production') {
    // Example: sendToErrorService(errorInfo);
  }
};