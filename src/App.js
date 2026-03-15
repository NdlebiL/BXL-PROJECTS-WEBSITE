import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import AIChatbot from './components/AIChatbot';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import NetworkStatus from './components/NetworkStatus';
import ErrorNotification from './components/ErrorNotification';
import { useErrorHandler } from './hooks/useErrorHandling';

function App() {
  const { error, clearError } = useErrorHandler();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Global error handlers
    const handleUnhandledRejection = (event) => {
      console.error('Unhandled Promise Rejection:', event.reason);
      event.preventDefault();
    };

    const handleGlobalError = (event) => {
      console.error('Global Error:', event.error);
    };

    window.addEventListener('unhandledrejection', handleUnhandledRejection);
    window.addEventListener('error', handleGlobalError);

    return () => {
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
      window.removeEventListener('error', handleGlobalError);
    };
  }, []);

  return (
    <ErrorBoundary>
      <Router>
        <div className="App" style={{ position: 'relative' }}>
          <NetworkStatus />
          <ErrorNotification error={error} onClose={clearError} />
          <Navbar />
          <div>
            <div id="home"><Home /></div>
            <div id="services"><Services /></div>
            <div id="about"><About /></div>
            <div id="portfolio"><Portfolio /></div>
            <div id="contact"><Contact /></div>
          </div>
          <Footer />
          <AIChatbot />
          <ScrollToTop />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
