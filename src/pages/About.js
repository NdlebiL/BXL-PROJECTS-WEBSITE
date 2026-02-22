import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, Award } from 'lucide-react';
import LaserFlow from '../components/ui/LaserFlow';
import Threads from '../components/ui/Threads';

const About = () => {
  const timeline = [
    { year: '2023', event: 'BXL Projects Founded', description: 'Started with a vision to deliver excellence in digital solutions' },
    { year: '2023', event: 'First Major Project', description: 'Launched Give Us Transport Solutions - R299 shuttle booking system' },
    { year: '2024', event: 'Expanding Services', description: 'Added API development, WhatsApp automation, and SEO services' },
    { year: '2024', event: 'Growing Portfolio', description: 'Serving 2+ clients with 5+ successful projects delivered' },
  ];

  const values = [
    { icon: Target, title: 'Excellence', description: 'Delivering top-quality solutions that exceed expectations' },
    { icon: Lightbulb, title: 'Innovation', description: 'Using cutting-edge technologies to solve real problems' },
    { icon: Users, title: 'Client Focus', description: '100% satisfaction through dedicated support and communication' },
    { icon: Award, title: 'Integrity', description: 'Honest, transparent, and reliable in every project' },
  ];

  return (
    <div className="bg-black">
      <div className="py-12 sm:py-16 md:py-20" style={{ background: 'linear-gradient(to bottom, #000000 0%, #00008B 30%, #00008B 70%, #000000 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-montserrat font-black text-white mb-2 sm:mb-4">
              About BXL Projects
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 font-opensans max-w-3xl mx-auto px-4">
              Bukhanye Xcellence Legacy - Building digital solutions that empower businesses in East London and beyond
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, rotateY: 2 }}
            className="bg-white rounded-2xl p-6 sm:p-8 md:p-12 mb-12 sm:mb-16"
            style={{ 
              boxShadow: '0 8px 0 #d1d5db, 0 16px 0 #9ca3af, 0 24px 0 #6b7280, 0 32px 0 #4b5563, 0 40px 60px rgba(0,0,0,0.5), inset 0 -4px 10px rgba(0,0,0,0.1)',
              transformStyle: 'preserve-3d',
              transform: 'translateZ(20px)'
            }}
          >
            <h2 className="text-2xl sm:text-3xl font-montserrat font-bold mb-4 sm:mb-6" style={{ color: '#00008B' }}>Our Story</h2>
            <p className="text-gray-600 font-opensans text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4">
              BXL Projects was founded with a mission to bring world-class digital solutions to businesses in the Eastern Cape. 
              Based in East London, South Africa, we specialize in React/Next.js development, custom API solutions, WhatsApp automation, 
              and SEO optimization.
            </p>
            <p className="text-gray-600 font-opensans text-sm sm:text-base md:text-lg leading-relaxed">
              Our name, Bukhanye Excellence Legacy, reflects our commitment to creating lasting impact through exceptional work. 
              We believe in building solutions that not only meet today's needs but scale for tomorrow's growth.
            </p>
          </motion.div>

      <div className="bg-black py-12 sm:py-16 md:py-20" style={{ background: 'linear-gradient(to bottom, #000000 0%, #00008B 50%, #000000 100%)' }}>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-16 relative">
            <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
              <Threads
                color={[0.32, 0.15, 1.00]}
                amplitude={5}
                distance={0}
                lineWidth={15}
                enableMouseInteraction
              />
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-montserrat font-bold text-white text-center mb-8 sm:mb-12">Our Values</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: -200, rotateX: -45 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.15,
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                      mass: 1.5
                    }}
                    className="bg-white rounded-xl p-4 sm:p-6 text-center"
                    style={{ 
                      boxShadow: `
                        0 10px 0 #e5e7eb,
                        0 20px 0 #d1d5db,
                        0 30px 0 #9ca3af,
                        0 40px 0 #6b7280,
                        0 50px 80px rgba(0,0,0,0.5),
                        inset 0 -4px 10px rgba(0,0,0,0.1)
                      `,
                      transformStyle: 'preserve-3d',
                      transform: 'translateZ(30px)'
                    }}
                  >
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                    >
                      <value.icon className="w-10 h-10 sm:w-12 sm:h-12 text-blueGlow mx-auto mb-3 sm:mb-4" style={{ filter: 'drop-shadow(0 4px 8px rgba(59,130,246,0.4))' }} />
                      <h3 className="text-lg sm:text-xl font-montserrat font-bold mb-2" style={{ color: '#00008B' }}>{value.title}</h3>
                      <p className="text-gray-600 font-opensans text-xs sm:text-sm">{value.description}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>

      <div className="bg-black py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div style={{ width: '1600px', height: '1080px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 0, maxHeight: '100%' }}>
          <LaserFlow
            color="#7a95ff"
            wispDensity={2.2}
            flowSpeed={0.55}
            verticalSizing={10}
            horizontalSizing={9}
            fogIntensity={1.2}
            fogScale={0.4}
            wispSpeed={15}
            wispIntensity={10}
            flowStrength={0.3}
            decay={2.5}
            horizontalBeamOffset={0}
            verticalBeamOffset={-0.5}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-montserrat font-bold text-white text-center mb-8 sm:mb-12">Our Journey</h2>
          <div>
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
                className={`flex items-center mb-6 sm:mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'}`}>
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                    whileHover={{ scale: 1.05, rotateY: index % 2 === 0 ? -5 : 5, y: -15 }}
                    className="bg-white rounded-xl p-4 sm:p-6"
                    style={{ 
                      boxShadow: `
                        0 8px 0 #d1d5db,
                        0 16px 0 #9ca3af,
                        0 24px 0 #6b7280,
                        0 32px 0 #4b5563,
                        0 40px 60px rgba(0,0,0,0.4),
                        inset 0 -3px 8px rgba(0,0,0,0.1)
                      `,
                      transformStyle: 'preserve-3d',
                      transform: 'translateZ(20px)'
                    }}
                  >
                    <div className="text-blueGlow font-montserrat font-bold text-xl sm:text-2xl mb-2">{item.year}</div>
                    <h3 className="text-lg sm:text-xl font-montserrat font-bold mb-2" style={{ color: '#00008B' }}>{item.event}</h3>
                    <p className="text-gray-600 font-opensans text-sm sm:text-base">{item.description}</p>
                  </motion.div>
                </div>
                <div className="hidden md:block w-2/12 flex justify-center">
                  <div className="w-4 h-4 bg-blueGlow rounded-full border-4 border-white" style={{ boxShadow: '0 0 20px rgba(59,130,246,0.8), 0 4px 8px rgba(0,0,0,0.3)' }} />
                </div>
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
