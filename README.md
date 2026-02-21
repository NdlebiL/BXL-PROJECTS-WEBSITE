# BXL Projects - Bukhanye Excellence Legacy

Professional React 18 portfolio website with TailwindCSS and Framer Motion animations.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## 📧 EmailJS Configuration

1. Create account at [EmailJS](https://www.emailjs.com/)
2. Create email service (Gmail, Outlook, etc.)
3. Create email template with these variables:
   - {{name}}
   - {{email}}
   - {{company}}
   - {{service}}
   - {{whatsapp}}
   - {{budget}}
   - {{message}}

4. Update `src/pages/Contact.js` with your credentials:
```javascript
await emailjs.sendForm(
  'YOUR_SERVICE_ID',      // Replace with your service ID
  'YOUR_TEMPLATE_ID',     // Replace with your template ID
  formRef.current,
  'YOUR_PUBLIC_KEY'       // Replace with your public key
);
```

## 🎨 Color Scheme

- **Navy Blue**: #1E3A8A (Primary buttons, hero gradient)
- **Charcoal Black**: #111827 (Navbar, headings)
- **Blue Glow**: #3B82F6 (Hover states)
- **WhatsApp Green**: #10B981 (Floating button)

## 📱 Features

- ✅ Fully responsive (mobile-first)
- ✅ Framer Motion animations
- ✅ React Router DOM navigation
- ✅ EmailJS contact form
- ✅ WhatsApp integration
- ✅ SEO optimized (Schema.org, sitemap, robots.txt)
- ✅ Scroll animations
- ✅ Interactive service cards
- ✅ Portfolio carousels
- ✅ Animated statistics counter

## 📄 Pages

- `/` - Home (Hero + Featured Work + Stats)
- `/services` - 4 Interactive service cards
- `/about` - Company story + timeline
- `/portfolio` - Featured projects with carousels
- `/contact` - EmailJS form + WhatsApp CTA

## 🔧 Customization

### Update WhatsApp Number
Replace `+27710000000` in:
- `src/components/FloatingWhatsApp.js`
- `src/pages/Home.js`
- `src/pages/Contact.js`

### Update Contact Information
Edit `src/pages/Contact.js` contact details section

### Update Projects
Edit `src/pages/Portfolio.js` projects array

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop 'build' folder to Netlify
```

## 📦 Dependencies

- react: ^18.2.0
- react-router-dom: ^6.20.0
- framer-motion: ^10.16.16
- @emailjs/browser: ^3.11.0
- lucide-react: ^0.294.0
- tailwindcss: ^3.3.5

## 📞 Support

For questions or support, contact:
- Email: info@bxlprojects.co.za
- WhatsApp: +27 71 000 0000
- Location: East London, Eastern Cape, South Africa

---

Built with ❤️ by BXL Projects
