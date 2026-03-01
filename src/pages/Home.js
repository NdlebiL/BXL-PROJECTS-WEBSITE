import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Award, ArrowRight } from 'lucide-react';
import DarkVeil from '../components/ui/DarkVeil';

const Counter = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count}</span>;
};

const Home = () => {
  const [animationKey, setAnimationKey] = React.useState(Date.now());

  React.useEffect(() => {
    setAnimationKey(Date.now());
  }, []);

  return (
    <motion.div 
      key={animationKey}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="relative"
    >
      <section className="relative min-h-screen overflow-hidden pt-8" style={{ background: '#000000' }}>
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, opacity: 0.3 }}>
          <DarkVeil hueShift={0} noiseIntensity={0} scanlineIntensity={0} speed={1.00} scanlineFrequency={0} warpAmount={0} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            
            {/* Hero Title Card - Large */}
            <motion.div
              key={`hero-${animationKey}`}
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
              className="md:col-span-8 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8 md:p-12 relative overflow-hidden"
              style={{ minHeight: '400px' }}
            >
              <div className="absolute top-4 left-4 text-xs font-montserrat text-gray-500 uppercase tracking-widest">Issue 01 / 2025</div>
              <div className="flex flex-col justify-center h-full">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                  className="font-montserrat font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4"
                  style={{ lineHeight: '1.1', letterSpacing: '-0.02em' }}
                >
                  BXL<br/>PROJECTS
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                  className="text-gray-400 font-opensans text-lg md:text-xl mb-2"
                >
                  Bukhanye Xcellence Legacy
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                  className="text-white text-base md:text-lg mb-8"
                  style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
                >
                  Crafting Digital Solutions
                </motion.p>
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-montserrat font-bold px-8 py-4 rounded-full transition-all inline-flex items-center gap-2 w-fit"
                >
                  Start Project <ArrowRight size={20} />
                </motion.button>
              </div>
            </motion.div>

            {/* Stats Card 1 */}
            <motion.div
              key={`stats1-${animationKey}`}
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="md:col-span-4 bg-blue-600 rounded-3xl p-6 md:p-8 flex flex-col justify-between"
              style={{ minHeight: '200px' }}
            >
              <div className="text-xs font-montserrat text-blue-200 uppercase tracking-widest mb-4">Portfolio</div>
              <div>
                <div className="text-6xl md:text-7xl font-black text-white mb-2">
                  <Counter end={5} />+
                </div>
                <div className="text-white font-opensans text-lg">Projects Delivered</div>
              </div>
            </motion.div>

            {/* Quote Card */}
            <motion.div
              key={`quote-${animationKey}`}
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="md:col-span-4 bg-white rounded-3xl p-6 md:p-8 relative"
              style={{ minHeight: '200px' }}
            >
              <div className="text-8xl font-serif text-gray-200 absolute top-4 left-4">"</div>
              <div className="relative z-10 flex flex-col justify-center h-full">
                <p className="text-gray-900 font-opensans text-base md:text-lg mb-4 leading-relaxed">
                  Building solutions that scale for tomorrow's growth
                </p>
                <div className="text-sm text-gray-600 font-montserrat">— BXL Philosophy</div>
              </div>
            </motion.div>

            {/* Stats Card 2 */}
            <motion.div
              key={`stats2-${animationKey}`}
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="md:col-span-4 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-3xl p-6 md:p-8"
              style={{ minHeight: '200px' }}
            >
              <CheckCircle className="w-12 h-12 text-green-400 mb-4" />
              <div className="text-5xl md:text-6xl font-black text-white mb-2">
                <Counter end={100} />%
              </div>
              <div className="text-gray-300 font-opensans text-lg">Client Satisfaction</div>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              key={`cta-${animationKey}`}
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="md:col-span-4 bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-6 md:p-8 flex flex-col justify-between cursor-pointer hover:scale-105 transition-transform"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              style={{ minHeight: '200px' }}
            >
              <div className="text-xs font-montserrat text-purple-200 uppercase tracking-widest">Featured</div>
              <div>
                <div className="text-white font-montserrat font-bold text-2xl mb-2">View Our Work</div>
                <div className="text-purple-100 font-opensans text-sm">Explore portfolio →</div>
              </div>
            </motion.div>

            {/* Services Preview */}
            <motion.div
              key={`services-${animationKey}`}
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              className="md:col-span-6 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-6 md:p-8"
            >
              <div className="text-xs font-montserrat text-gray-500 uppercase tracking-widest mb-6">What We Do</div>
              <div className="space-y-4">
                {['React/Next.js Development', 'Custom API Solutions', 'WhatsApp Automation', 'SEO & Business Setup'].map((service, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + i * 0.1, ease: "easeOut" }}
                    className="flex items-center gap-3 text-white font-opensans hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>{service}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Clients Card */}
            <motion.div
              key={`clients-${animationKey}`}
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
              className="md:col-span-3 bg-gray-800 rounded-3xl p-6 md:p-8 flex flex-col justify-center items-center text-center"
            >
              <Users className="w-12 h-12 text-blue-400 mb-4" />
              <div className="text-5xl font-black text-white mb-2">
                <Counter end={2} />+
              </div>
              <div className="text-gray-300 font-opensans">Happy Clients</div>
            </motion.div>

            {/* Location Card */}
            <motion.div
              key={`location-${animationKey}`}
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              className="md:col-span-3 bg-gradient-to-br from-blue-900 to-blue-950 rounded-3xl p-6 md:p-8 flex flex-col justify-center"
            >
              <div className="text-xs font-montserrat text-blue-300 uppercase tracking-widest mb-2">Based in</div>
              <div className="text-white font-montserrat font-bold text-xl">East London</div>
              <div className="text-blue-200 font-opensans text-sm">Eastern Cape, SA</div>
            </motion.div>

          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
