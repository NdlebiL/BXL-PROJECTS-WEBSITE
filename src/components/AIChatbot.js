import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm BXL Assistant. How can I help you today?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const knowledgeBase = {
    company: {
      keywords: ['bxl', 'company name', 'what does bxl', 'stands for', 'meaning', 'about bxl'],
      response: "BXL Projects stands for 'Bukhanye Xcellence Legacy' 🌟\n\nOur name represents:\n• Bukhanye - Named after founder Likhaka's son, symbolizing the future\n• Xcellence - Our commitment to exceptional quality\n• Legacy - Building lasting impact through digital solutions\n\nOur slogan: 'Crafting Digital Solutions'\n\nWe're dedicated to empowering Eastern Cape businesses with world-class technology!"
    },
    philosophy: {
      keywords: ['philosophy', 'mission', 'vision', 'believe', 'motto', 'slogan'],
      response: "Our Philosophy: 'Building solutions that scale for tomorrow's growth' 🚀\n\nWe believe in:\n✨ Creating lasting impact through exceptional work\n✨ Solutions that meet today's needs AND scale for tomorrow\n✨ Empowering Eastern Cape businesses with world-class technology\n✨ Quality over quantity, always\n\nOur mission: Bring world-class digital solutions to businesses in the Eastern Cape and beyond!"
    },
    values: {
      keywords: ['values', 'principles', 'culture', 'what you stand for'],
      response: "Our Core Values:\n\n🎯 Excellence - Delivering top-quality solutions that exceed expectations\n\n💡 Innovation - Using cutting-edge technologies to solve real problems\n\n👥 Client Focus - 100% satisfaction through dedicated support and communication\n\n🏆 Integrity - Honest, transparent, and reliable in every project\n\nThese values guide everything we do at BXL Projects!"
    },
    journey: {
      keywords: ['journey', 'history', 'story', 'started', 'began', 'timeline'],
      response: "Our Journey 📅\n\n2025: BXL Projects Founded\n• Started with a vision to deliver excellence in digital solutions\n\n2026: First Major Project\n• Launched Give Us Transport Solutions - Enterprise-grade shuttle booking system\n\n2026: Expanding Services\n• Full-Stack Web Applications\n• System Architecture & Design\n• Mobile App Development\n\n2026: Growing Portfolio\n• Serving 2+ clients with 5+ successful projects\n• 100% client satisfaction rate\n\nWe're just getting started! 🚀"
    },
    founder: {
      keywords: ['likhaka', 'ndlebi', 'leedz', 'founder', 'ceo', 'owner', 'who created', 'who started'],
      response: "Likhaka Ndlebi (also known as Leedz) is the visionary founder and CEO of BXL Projects! 🚀\n\nHe's the brilliant mind behind the company, bringing years of expertise in software development, systems architecture, and digital innovation. Likhaka's passion for excellence and commitment to empowering Eastern Cape businesses drives everything we do at BXL Projects.\n\nHis technical expertise spans React, Next.js, Node.js, database management, and enterprise systems - making him a true full-stack powerhouse!"
    },
    bukhanye: {
      keywords: ['bukhanye', 'son', 'protege', 'prodigy'],
      response: "Bukhanye is Likhaka's son and the inspiring protégé behind the 'B' in BXL Projects! 🌟\n\nThe company name 'Bukhanye Xcellence Legacy' honors him as the future of the business. Bukhanye represents the next generation of innovation and excellence that BXL Projects is building.\n\nHis name symbolizes the legacy of quality, dedication, and forward-thinking that defines our company culture. He's the inspiration for creating lasting impact through exceptional digital solutions!"
    },
    team: {
      keywords: ['team', 'staff', 'employees', 'who works', 'people'],
      response: "BXL Projects is led by founder Likhaka Ndlebi (Leedz), a seasoned software developer and systems architect with expertise in:\n\n• Full-stack development (React, Next.js, Node.js)\n• Enterprise systems (Microsoft 365, Azure AD)\n• Database management (MSSQL, PostgreSQL)\n• Mobile development (React Native)\n• SEO & digital marketing\n\nThe company is named after his son Bukhanye, representing the legacy and future of excellence we're building together!"
    },
    services: {
      keywords: ['service', 'offer', 'do', 'provide', 'help with'],
      response: "We offer 8 comprehensive services:\n\n1. Custom Websites (React/Next.js)\n2. Website Maintenance\n3. Web Applications\n4. Mobile Apps (React Native)\n5. Branding & Logos\n6. Local SEO & Google Ranking\n7. WhatsApp Automation\n8. Systems Maintenance\n\nWhich service interests you?"
    },
    pricing: {
      keywords: ['price', 'cost', 'budget', 'quote', 'how much', 'plan', 'package', 'tier', 'hybrid', '3-tier', 'payment plan'],
      response: "We offer 3-Tier Hybrid Pricing (One-Off Build + Monthly Maintenance):\n\n💼 BASIC - R6,000 + R750/mo\n• Simple Website (5 pages)\n• Contact forms + Google Maps\n• Mobile responsive\n• Basic SEO\n• Security updates & backups\n• Perfect for: Guesthouses, restaurants, startups\n\n🏆 PRO (MOST POPULAR) - R15,000 + R2,250/mo\n• SAVE R3,000 on build!\n• Full Custom Website (10+ pages)\n• Booking/Quote Forms\n• WhatsApp Automation\n• Advanced Local SEO (#1 Google)\n• Monthly SEO + content updates\n• Perfect for: Transport, contractors, retail\n\n👑 PREMIUM - R28,000 + R4,250/mo\n• SAVE R7,000 on build!\n• Everything in Pro +\n• Custom Web App/Dashboards\n• Mobile App (React Native)\n• Complete Branding Package\n• Priority 2-hour response\n• Dedicated account manager\n• Perfect for: Agencies, logistics, government\n\n65% of clients choose PRO! Visit our Pricing page for full details."
    },
    basic: {
      keywords: ['basic plan', 'basic package', 'r6000', '6000', 'r750', '750', 'small site', 'simple website'],
      response: "BASIC PLAN - R6,000 + R750/mo\n\n📦 ONE-OFF BUILD (R6,000):\n✅ Simple Website (5 pages max)\n✅ Contact forms + Google Maps\n✅ Mobile responsive design\n✅ Basic Eastern Cape SEO\n\n🔧 MONTHLY MAINTENANCE (R750/mo):\n✅ Security updates & backups\n✅ Uptime monitoring (99.9%)\n✅ Minor content changes\n✅ Annual SEO refresh\n\n👥 Perfect for: Guesthouses, restaurants, startups\n\nReady to get started? Contact us or visit our Pricing page!"
    },
    pro: {
      keywords: ['pro plan', 'pro package', 'r15000', '15000', 'r2250', '2250', 'popular', 'recommended', 'best plan'],
      response: "🏆 PRO PLAN - R15,000 + R2,250/mo (MOST POPULAR!)\n\n📦 ONE-OFF BUILD (R15,000 - SAVE R3,000!):\n✅ Full Custom Website (10+ pages)\n✅ Booking/Quote Forms\n✅ WhatsApp Automation Integration\n✅ Advanced Local SEO (#1 Google)\n✅ GUTS Transport-style animations\n\n🔧 MONTHLY MAINTENANCE (R2,250/mo - SAVE R750!):\n✅ Everything in Basic +\n✅ Monthly SEO ranking + content\n✅ WhatsApp bot updates\n✅ Google My Business management\n✅ Performance reports\n\n👥 Perfect for: Transport, contractors, retail\n\n🎖️ 65% of our clients choose this plan! It's the perfect balance of features and value."
    },
    premium: {
      keywords: ['premium plan', 'premium package', 'r28000', '28000', 'r4250', '4250', 'enterprise', 'full stack'],
      response: "👑 PREMIUM PLAN - R28,000 + R4,250/mo (Enterprise Ready)\n\n📦 ONE-OFF BUILD (R28,000 - SAVE R7,000!):\n✅ Everything in Pro +\n✅ Custom Web Application/Dashboards\n✅ Mobile App (React Native)\n✅ Complete Branding Package\n✅ Advanced Animations (page flip)\n\n🔧 MONTHLY MAINTENANCE (R4,250/mo - SAVE R1,750!):\n✅ Everything in Pro +\n✅ Mobile app updates\n✅ Custom feature development\n✅ Priority 2-hour response\n✅ Dedicated account manager\n\n👥 Perfect for: Agencies, logistics, government contractors\n\nThis is our most comprehensive solution for businesses that need everything!"
    },
    payment: {
      keywords: ['payment', 'pay', 'how to pay', 'payment method', 'payfast', 'card', 'eft'],
      response: "Payment Options:\n\n💳 We accept:\n• Credit/Debit Cards\n• EFT Bank Transfer\n• PayFast (Secure Online Payment)\n\n📋 Payment Process:\n1. Choose your plan on our Pricing page\n2. Click the plan card to flip and see details\n3. Click 'Proceed to Payment' button\n4. Complete secure payment\n5. We'll contact you within 2 hours to start!\n\n💰 Payment Terms:\n• One-off build: 50% upfront, 50% on completion\n• Monthly maintenance: Billed monthly in advance\n\nNeed a custom quote? Contact us directly!"
    },
    maintenance: {
      keywords: ['maintenance', 'maintain', 'monthly', 'ongoing', 'support', 'updates'],
      response: "Monthly Maintenance Plans:\n\n🔧 BASIC (R750/mo):\n• Security updates & backups\n• Uptime monitoring (99.9%)\n• Minor content changes\n• Annual SEO refresh\n\n🔧 PRO (R2,250/mo):\n• Everything in Basic +\n• Monthly SEO ranking + content\n• WhatsApp bot updates\n• Google My Business management\n• Performance reports\n\n🔧 PREMIUM (R4,250/mo):\n• Everything in Pro +\n• Mobile app updates\n• Custom feature development\n• Priority 2-hour response\n• Dedicated account manager\n\nMaintenance ensures your site stays secure, fast, and ranking high on Google!"
    },
    contact: {
      keywords: ['contact', 'reach', 'email', 'phone', 'whatsapp', 'call'],
      response: "You can reach us at:\n\n📧 Email: info@bxlprojects.co.za\n📱 WhatsApp: +27 71 000 0000\n📍 Location: East London, Eastern Cape\n\nWe typically respond within 2 hours during business hours!"
    },
    portfolio: {
      keywords: ['portfolio', 'work', 'projects', 'examples', 'case study'],
      response: "Our featured projects include:\n\n✅ Give Us Transport Solutions - Live shuttle booking system\n✅ IMS React Dashboard - Inventory management\n✅ EmailJS Booking Automation\n✅ Travel Agency Website (Coming Soon)\n\nWe've delivered 5+ successful projects with 100% client satisfaction!"
    },
    location: {
      keywords: ['where', 'location', 'based', 'office', 'eastern cape'],
      response: "We're based in East London, Eastern Cape, South Africa. We serve clients locally and internationally, specializing in Eastern Cape businesses!"
    },
    timeline: {
      keywords: ['how long', 'timeline', 'duration', 'time', 'when'],
      response: "Project timelines vary:\n\n• Simple Website: 1-2 weeks\n• Custom Web App: 3-6 weeks\n• Mobile App: 6-10 weeks\n• Branding: 1 week\n• SEO Setup: 2-3 days\n\nWe prioritize quality and timely delivery!"
    },
    technology: {
      keywords: ['technology', 'tech stack', 'tools', 'framework', 'react', 'next'],
      response: "We use modern technologies:\n\n• Frontend: React, Next.js, Tailwind CSS\n• Backend: Node.js, Express\n• Database: MSSQL, PostgreSQL\n• Mobile: React Native\n• Deployment: Vercel, Azure\n• Tools: Git, Figma, VS Code"
    },
    seo: {
      keywords: ['seo', 'google', 'ranking', 'search', 'optimization'],
      response: "Our SEO services include:\n\n✅ Google Business Profile optimization\n✅ #1 local rankings (Mthatha, East London)\n✅ Website speed optimization\n✅ Mobile optimization\n✅ Review management\n✅ Monthly ranking reports\n\nPerfect for local businesses wanting more visibility!"
    }
  };

  const getBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();

    // Check for greetings
    if (lowerMessage.match(/^(hi|hello|hey|good morning|good afternoon)/)) {
      return "Hello! Welcome to BXL Projects. I'm here to help you with information about our services, pricing, portfolio, and more. What would you like to know?";
    }

    // Check for thanks/goodbye
    if (lowerMessage.match(/(thank|thanks|thank you|thx|appreciate|grateful|bye|goodbye|see you)/)) {
      return "You're very welcome! 😊 It was my pleasure assisting you today.\n\nIs there anything else I can help you with? Feel free to ask about:\n\n• Our Pricing Plans (Basic, Pro, Premium)\n• Services & Features\n• Payment Methods\n• Portfolio Projects\n• Contact Information\n\nI'm here whenever you need me!";
    }

    // Check knowledge base
    for (const [key, data] of Object.entries(knowledgeBase)) {
      if (data.keywords.some(keyword => lowerMessage.includes(keyword))) {
        return data.response;
      }
    }

    // Default response
    return "I'd be happy to help! I can provide information about:\n\n• Our Services\n• Pricing & Quotes\n• Portfolio & Projects\n• Contact Information\n• Project Timelines\n• Technologies We Use\n\nWhat would you like to know more about?";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    setTimeout(() => {
      const botResponse = { text: getBotResponse(input), sender: 'bot' };
      setMessages(prev => [...prev, botResponse]);
    }, 500);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        animate={{ y: [0, -10, 0] }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="fixed bottom-6 right-6 z-[9999] bg-gradient-to-br from-blue-500 to-purple-600 text-white p-4 rounded-full transition-all"
        style={{
          boxShadow: '0 10px 40px rgba(59, 130, 246, 0.6), 0 0 0 0 rgba(59, 130, 246, 0.4)',
          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
        }}
        whileHover={{ 
          scale: 1.15,
          boxShadow: '0 20px 60px rgba(59, 130, 246, 0.8), 0 0 0 8px rgba(59, 130, 246, 0.2)'
        }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 400, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 400, scale: 0.8 }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              damping: 20,
              mass: 0.8
            }}
            className="fixed bottom-24 right-6 top-24 z-[9999] w-96 max-w-[calc(100vw-3rem)] max-h-[calc(100vh-12rem)] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
              <h3 className="font-montserrat font-bold text-lg">BXL Assistant</h3>
              <p className="text-xs text-blue-100">Powered by AI • Online now</p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-4 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      msg.sender === 'user'
                        ? 'bg-blue-600 text-white rounded-br-none'
                        : 'bg-white text-gray-800 rounded-bl-none shadow-sm'
                    }`}
                  >
                    <p className="text-sm font-opensans whitespace-pre-line">{msg.text}</p>
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-600 text-sm"
                />
                <button
                  onClick={handleSend}
                  className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-all"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;
