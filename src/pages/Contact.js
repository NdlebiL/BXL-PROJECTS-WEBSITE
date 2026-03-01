import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    whatsapp: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_PUBLIC_KEY'
      );
      
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        whatsapp: '',
        budget: '',
        message: '',
      });

      setTimeout(() => {
        window.open('https://wa.me/+27710000000?text=Hi%20BXL%20Projects!%20I%20just%20submitted%20a%20quote%20request', '_blank');
      }, 2000);
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try WhatsApp instead.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    'React/Next.js App',
    'Website Development',
    'API Integration',
    'SEO/Google Setup',
    'Architecture Advice',
  ];

  const budgetRanges = [
    'R5,000 - R10,000',
    'R10,000 - R25,000',
    'R25,000 - R50,000',
    'Custom Quote',
  ];

  return (
    <motion.div 
      key="contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="relative"
    >
      <section className="relative min-h-screen overflow-hidden pt-8" style={{ background: '#000000' }}>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8 md:p-12"
          >
            <div className="text-xs font-montserrat text-gray-500 uppercase tracking-widest mb-4">Contact / 2025</div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-montserrat font-black text-white mb-4">
              Get In Touch
            </h1>
            <p className="text-gray-400 font-opensans text-lg md:text-xl max-w-2xl">
              Let's discuss your next project
            </p>
          </motion.div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            
            {/* Form Card - Large */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="md:col-span-8 bg-white rounded-3xl p-6 md:p-8"
            >
              {submitSuccess ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-6" />
                  <h2 className="text-3xl font-montserrat font-bold text-gray-900 mb-4">
                    Message Sent Successfully!
                  </h2>
                  <p className="text-gray-600 font-opensans mb-6">
                    Opening WhatsApp chat...
                  </p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-900 font-montserrat font-bold mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-600 focus:outline-none transition-colors font-opensans"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-900 font-montserrat font-bold mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-600 focus:outline-none transition-colors font-opensans"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-900 font-montserrat font-bold mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-600 focus:outline-none transition-colors font-opensans"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-900 font-montserrat font-bold mb-2">
                        Service Type *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-600 focus:outline-none transition-colors font-opensans"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-900 font-montserrat font-bold mb-2">
                        WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        placeholder="+27..."
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-600 focus:outline-none transition-colors font-opensans"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-900 font-montserrat font-bold mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-600 focus:outline-none transition-colors font-opensans"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-900 font-montserrat font-bold mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-600 focus:outline-none transition-colors font-opensans resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-montserrat font-bold px-8 py-4 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info Cards */}
            <div className="md:col-span-4 space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-6 text-center"
              >
                <Mail className="w-12 h-12 text-white mx-auto mb-4" />
                <div className="text-xs font-montserrat text-blue-200 uppercase tracking-widest mb-2">Email</div>
                <div className="text-white font-opensans text-sm">info@bxlprojects.co.za</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-green-600 to-green-800 rounded-3xl p-6 text-center"
              >
                <Phone className="w-12 h-12 text-white mx-auto mb-4" />
                <div className="text-xs font-montserrat text-green-200 uppercase tracking-widest mb-2">WhatsApp</div>
                <div className="text-white font-opensans text-sm">+27 71 000 0000</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl p-6 text-center"
              >
                <MapPin className="w-12 h-12 text-white mx-auto mb-4" />
                <div className="text-xs font-montserrat text-purple-200 uppercase tracking-widest mb-2">Location</div>
                <div className="text-white font-opensans text-sm">East London, Eastern Cape</div>
              </motion.div>
            </div>

            {/* Quote Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="md:col-span-7 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8 relative"
            >
              <div className="text-8xl font-serif text-gray-800 absolute top-4 left-4">"</div>
              <div className="relative z-10">
                <p className="text-white font-opensans text-lg md:text-xl mb-4 leading-relaxed">
                  We're here to turn your ideas into reality. Whether it's a website, app, or custom solution, let's build something amazing together.
                </p>
                <div className="text-sm text-gray-400 font-montserrat">— BXL Projects Team</div>
              </div>
            </motion.div>

            {/* WhatsApp CTA Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="md:col-span-5 bg-gradient-to-br from-green-600 to-green-800 rounded-3xl p-8 flex flex-col justify-center items-center text-center cursor-pointer hover:scale-105 transition-transform"
              onClick={() => window.open('https://wa.me/+27710000000', '_blank')}
            >
              <MessageSquare className="w-16 h-16 text-white mb-4" />
              <div className="text-white font-montserrat font-bold text-2xl mb-2">Chat on WhatsApp</div>
              <div className="text-green-100 font-opensans text-sm">Get instant response →</div>
            </motion.div>

          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
