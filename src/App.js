import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="App" style={{ position: 'relative' }}>
        <Navbar />
        <div style={{ paddingTop: '80px' }}>
          <div id="home"><Home /></div>
          <div id="services"><Services /></div>
          <div id="about"><About /></div>
          <div id="portfolio"><Portfolio /></div>
          <div id="contact"><Contact /></div>
        </div>
        <FloatingWhatsApp />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
