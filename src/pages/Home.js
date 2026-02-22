import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Award } from 'lucide-react';
import LightRays from '../components/ui/LightRays';
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
  const stats = [
    { icon: CheckCircle, value: 5, label: 'Projects Delivered', suffix: '+' },
    { icon: Users, value: 2, label: 'Clients Served', suffix: '+' },
    { icon: Award, value: 100, label: 'Satisfaction', suffix: '%' },
  ];

  return (
    <div className="relative">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ marginTop: '-80px', paddingTop: '80px' }}>
        <div style={{ width: '100%', height: '110%', position: 'absolute', top: 0, left: 0 }}>
          <DarkVeil
            hueShift={0}
            noiseIntensity={0}
            scanlineIntensity={0}
            speed={1.00}
            scanlineFrequency={0}
            warpAmount={0}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{ position: 'relative', zIndex: 10 }}>
          <motion.h1
            initial={{ y: 50, opacity: 0, rotateX: -30 }}
            animate={{ y: 0, opacity: 1, rotateX: 0 }}
            transition={{ duration: 0.8 }}
            className="font-montserrat font-black text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 sm:mb-6 relative"
            style={{ 
              transformStyle: 'preserve-3d',
              letterSpacing: '0.02em'
            }}
          >
            <span style={{
              position: 'relative',
              display: 'inline-block',
              color: '#9CA3AF',
              textShadow: `
                0 1px 0 #374151,
                0 2px 0 #1F2937,
                0 3px 0 #111827,
                0 4px 0 #0F172A,
                0 5px 0 #020617,
                0 6px 1px rgba(0,0,0,.3),
                0 0 5px rgba(0,0,0,.2),
                0 1px 3px rgba(0,0,0,.5),
                0 3px 5px rgba(0,0,0,.4),
                0 5px 10px rgba(0,0,0,.35),
                0 10px 20px rgba(0,0,0,.3),
                0 20px 40px rgba(0,0,0,.25)
              `
            }}>
              BXL PROJECTS
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, z: -100 }}
            animate={{ opacity: 1, z: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-white font-opensans text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 sm:mb-4"
            style={{ textShadow: '3px 6px 12px rgba(0,0,0,0.5)' }}
          >
            Bukhanye Xcellence Legacy
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-white font-opensans text-base xs:text-lg sm:text-xl md:text-2xl mb-2 sm:mb-4"
            style={{ textShadow: '2px 4px 8px rgba(0,0,0,0.5)' }}
          >
            Crafting Digital Solutions
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-white font-opensans text-sm sm:text-base md:text-lg mb-8 sm:mb-12"
          >
             South Africa
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 px-4"
          >
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-navy hover:bg-blueGlow text-white font-montserrat font-bold px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-lg transition-all relative overflow-hidden group text-sm sm:text-base"
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ 
                delay: 1.2, 
                type: "spring", 
                stiffness: 50, 
                damping: 20,
                mass: 1.5,
                restDelta: 0.001
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }} 
              style={{ 
                transformStyle: 'preserve-3d',
                boxShadow: '0 10px 30px rgba(30,58,138,0.6), inset 0 -4px 8px rgba(0,0,0,0.3)'
              }}
            >
              <span className="relative z-10">GET PROJECT QUOTE</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
              />
            </motion.button>
            <motion.button
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent border-2 border-white hover:bg-white hover:text-navy text-white font-montserrat font-bold px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-lg transition-all relative overflow-hidden group text-sm sm:text-base"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ 
                delay: 1.4, 
                type: "spring", 
                stiffness: 50, 
                damping: 20,
                mass: 1.5,
                restDelta: 0.001
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              style={{ 
                boxShadow: '0 10px 30px rgba(255,255,255,0.3), inset 0 -4px 8px rgba(0,0,0,0.2)',
                transformStyle: 'preserve-3d'
              }}
            >
              <span className="relative z-10">VIEW PORTFOLIO</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1.5 }}
              />
            </motion.button>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto px-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateX: -20 }}
                animate={{
                  opacity: 1,
                  y: [0, -10, 0],
                  rotateX: 0,
                  transition: {
                    opacity: { duration: 0.8, delay: 1.5 + index * 0.2 },
                    rotateX: { duration: 0.8, delay: 1.5 + index * 0.2 },
                    y: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.5 + index * 0.5
                    }
                  }
                }}
                whileHover={{ y: -8, rotateY: 5, scale: 1.05 }}
                className="rounded-xl p-4 sm:p-6 border border-white border-opacity-30"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(0,0,139,0.3) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,139,0.3) 100%)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.4)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white mx-auto mb-2 sm:mb-4" style={{ filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.8))' }} />
                <div className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-black text-white mb-1 sm:mb-2" style={{ 
                  textShadow: `
                    0 1px 0 #9CA3AF,
                    0 2px 0 #6B7280,
                    0 3px 0 #4B5563,
                    0 4px 0 #374151,
                    0 5px 0 #1F2937,
                    0 6px 1px rgba(0,0,0,.5),
                    0 0 8px rgba(0,0,0,.3),
                    0 2px 5px rgba(0,0,0,.6),
                    0 5px 10px rgba(0,0,0,.5),
                    0 10px 20px rgba(0,0,0,.4),
                    0 20px 40px rgba(0,0,0,.3)
                  `
                }}>
                  <Counter end={stat.value} />
                  {stat.suffix}
                </div>
                <div className="text-white font-opensans font-semibold text-xs sm:text-sm md:text-base" style={{ textShadow: '2px 4px 8px rgba(0,0,0,0.6)' }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #000000 0%, #000000 70%, #0000FF 100%)' }}>
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
          <LightRays
            raysOrigin="top-center"
            raysColor="#2563EB"
            raysSpeed={3}
            lightSpread={0.8}
            rayLength={7}
            followMouse={true}
            mouseInfluence={0.5}
            noiseAmount={0}
            distortion={0}
            pulsating={true}
            fadeDistance={4}
            saturation={2.5}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-montserrat font-black text-white text-center mb-8 sm:mb-12"
          >
            Featured Work
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, rotateX: 3 }}
            className="bg-white rounded-2xl overflow-hidden"
            style={{ 
              boxShadow: '0 8px 0 #d1d5db, 0 16px 0 #9ca3af, 0 24px 0 #6b7280, 0 32px 0 #4b5563, 0 40px 60px rgba(0,0,0,0.5), inset 0 -4px 10px rgba(0,0,0,0.1)',
              transformStyle: 'preserve-3d',
              transform: 'translateZ(20px)'
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 p-6 sm:p-8">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-montserrat font-bold text-charcoal mb-3 sm:mb-4">
                  Give Us Transport Solutions
                </h3>
                <p className="text-gray-600 font-opensans mb-3 sm:mb-4 text-sm sm:text-base">
                  R299 Shuttle Booking System - Live Production
                </p>
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {['React', 'Vercel', 'EmailJS', 'MSSQL'].map((tech) => (
                    <span
                      key={tech}
                      className="bg-navy text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-opensans"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href="https://giveustransportsolutions.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blueGlow hover:bg-navy text-white font-montserrat font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-colors text-sm sm:text-base"
                >
                  View Live Site
                </a>
              </div>
              <div className="bg-gray-100 rounded-lg flex items-center justify-center p-6 sm:p-8 aspect-video">
                <div className="text-center text-gray-500">
                  <p className="font-opensans text-sm sm:text-base">Shuttle Booking Interface</p>
                  <p className="text-xs sm:text-sm mt-2">Live at giveustransportsolutions.com</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
