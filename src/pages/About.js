import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, Award } from 'lucide-react';
import LaserFlow from '../components/ui/LaserFlow';

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
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-montserrat font-black text-charcoal mb-4">
            About BXL Projects
          </h1>
          <p className="text-xl text-gray-600 font-opensans max-w-3xl mx-auto">
            Bukhanye Xcellence Legacy - Building digital solutions that empower businesses in East London and beyond
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: -15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -5, rotateY: 2 }}
          className="bg-white rounded-2xl p-8 md:p-12 mb-16"
          style={{ 
            boxShadow: '0 30px 60px rgba(0,0,0,0.3), inset 0 -8px 16px rgba(0,0,0,0.05)',
            transformStyle: 'preserve-3d'
          }}
        >
          <h2 className="text-3xl font-montserrat font-bold text-charcoal mb-6">Our Story</h2>
          <p className="text-gray-600 font-opensans text-lg leading-relaxed mb-4">
            BXL Projects was founded with a mission to bring world-class digital solutions to businesses in the Eastern Cape. 
            Based in East London, South Africa, we specialize in React/Next.js development, custom API solutions, WhatsApp automation, 
            and SEO optimization.
          </p>
          <p className="text-gray-600 font-opensans text-lg leading-relaxed">
            Our name, Bukhanye Excellence Legacy, reflects our commitment to creating lasting impact through exceptional work. 
            We believe in building solutions that not only meet today's needs but scale for tomorrow's growth.
          </p>
        </motion.div>

        <div className="mb-16">
          <h2 className="text-3xl font-montserrat font-bold text-charcoal text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.05, rotateY: 5 }}
                className="bg-white rounded-xl p-6 text-center"
                style={{ 
                  boxShadow: '0 20px 40px rgba(0,0,0,0.2), inset 0 -5px 10px rgba(0,0,0,0.05)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <value.icon className="w-12 h-12 text-blueGlow mx-auto mb-4" style={{ filter: 'drop-shadow(0 4px 8px rgba(59,130,246,0.4))' }} />
                <h3 className="text-xl font-montserrat font-bold text-charcoal mb-2">{value.title}</h3>
                <p className="text-gray-600 font-opensans text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div style={{ width: '1080px', height: '1080px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 0, maxHeight: '100%' }}>
            <LaserFlow
              color="#7a95ff"
              wispDensity={1.9}
              flowSpeed={0.55}
              verticalSizing={8}
              horizontalSizing={6.5}
              fogIntensity={1}
              fogScale={0.35}
              wispSpeed={15}
              wispIntensity={8}
              flowStrength={0.25}
              decay={2.5}
              horizontalBeamOffset={0}
              verticalBeamOffset={-0.5}
            />
          </div>
          <h2 className="text-3xl font-montserrat font-bold text-charcoal text-center mb-12 relative z-10">Our Journey</h2>
          <div className="relative z-10">
            {/* <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blueGlow hidden md:block" /> */}
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'}`}>
                  <motion.div 
                    whileHover={{ scale: 1.05, rotateY: index % 2 === 0 ? -5 : 5 }}
                    className="bg-white rounded-xl p-6"
                    style={{ 
                      boxShadow: '0 20px 40px rgba(0,0,0,0.25), inset 0 -5px 10px rgba(0,0,0,0.05)',
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    <div className="text-blueGlow font-montserrat font-bold text-2xl mb-2">{item.year}</div>
                    <h3 className="text-xl font-montserrat font-bold text-charcoal mb-2">{item.event}</h3>
                    <p className="text-gray-600 font-opensans">{item.description}</p>
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
