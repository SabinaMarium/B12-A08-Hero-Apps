import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t-4 border-purple-600">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1: Logo & Mission */}
          <div>
            <Link to="/" className="text-2xl font-bold text-purple-400 flex items-center mb-4">
              {/* Logo Image Placeholder - Ensure this path is correct: /public/assets/logo.png */}
              <img src="/assets/logo.png" alt="HERO.IO Logo" className="h-8 mr-2" />
              HERO.IO
            </Link>
            <p className="text-gray-400 text-sm">
              Crafting innovative apps designed for productivity and a better digital experience.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-400">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-300 hover:text-purple-300 transition duration-150">Home</Link></li>
              <li><Link to="/apps" className="text-gray-300 hover:text-purple-300 transition duration-150">All Apps</Link></li>
              <li><Link to="/installation" className="text-gray-300 hover:text-purple-300 transition duration-150">Installation</Link></li>
              <li><a href="YOUR_GITHUB_PROFILE_URL" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-300 transition duration-150">Contribute (GitHub)</a></li>
            </ul>
          </div>

          {/* Column 3: Contact & Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-400">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-purple-300 transition duration-150">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-300 transition duration-150">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-300 transition duration-150">Terms of Service</a></li>
            </ul>
          </div>

          {/* Column 4: Social Media (Custom Design) */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-purple-400">Connect With Us</h3>
            <div className="flex space-x-4">
              {/* Twitter/X Icon */}
              <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-150">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.9 5.6C18.2 5 17.3 4.6 16.3 4.5 15.6 4.4 15 4.3 14.3 4.3H9.7C9 4.3 8.4 4.4 7.7 4.5 6.7 4.6 5.8 5 5.1 5.6 4.5 6.2 4.1 7.1 4 8.1 4 8.8 4 9.4 4 10.1V13.9C4 14.6 4 15.2 4 15.9 4.1 16.9 4.5 17.8 5.1 18.4 5.8 19 6.7 19.4 7.7 19.5 8.4 19.6 9 19.7 9.7 19.7H14.3C15 19.7 15.6 19.6 16.3 19.5 17.3 19.4 18.2 19 18.9 18.4 19.5 17.8 19.9 16.9 20 15.9 20 15.2 20 14.6 20 13.9V10.1C20 9.4 20 8.8 20 8.1 19.9 7.1 19.5 6.2 18.9 5.6ZM12 17.7C8.8 17.7 6.2 15.1 6.2 12C6.2 8.9 8.8 6.3 12 6.3C15.2 6.3 17.8 8.9 17.8 12C17.8 15.1 15.2 17.7 12 17.7ZM15.8 9.3C15.8 9 15.5 8.7 15.2 8.7H8.8C8.5 8.7 8.2 9 8.2 9.3V14.7C8.2 15 8.5 15.3 8.8 15.3H15.2C15.5 15.3 15.8 15 15.8 14.7V9.3Z" /></svg>
              </a>
              {/* LinkedIn Icon */}
              <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-150">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.23 0H1.77C.79 0 0 .78 0 1.74v20.52C0 23.22.79 24 1.77 24h20.46c.98 0 1.77-.78 1.77-1.74V1.74c0-.96-.79-1.74-1.77-1.74zM7.17 20.44H3.77V9.06h3.4v11.38zM5.47 7.74c-1.16 0-2.1-.96-2.1-2.15 0-1.19.94-2.15 2.1-2.15 1.16 0 2.1.96 2.1 2.15 0 1.19-.94 2.15-2.1 2.15zM20.44 20.44h-3.4v-5.65c0-1.34-.02-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.75h-3.4V9.06h3.26v1.49h.05c.45-.85 1.55-1.74 3.19-1.74 3.42 0 4.06 2.25 4.06 5.18v5.95z"/></svg>
              </a>
              {/* Instagram Icon */}
              // CORRECTED Instagram Icon
<a href="#" className="text-gray-400 hover:text-pink-500 transition duration-150">
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.25.06 1.9.22 2.52.46.61.24 1.12.57 1.63 1.08.51.51.84 1.02 1.08 1.63.24.62.4 1.27.46 2.52.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.06 1.25-.22 1.9-.46 2.52-.24.61-.57 1.12-1.08 1.63-.51.51-1.02.84-1.63 1.08-.62.24-1.27.4-2.52.46-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.25-.06-1.9-.22-2.52-.46-.61-.24-1.12-.57-1.63-1.08-.51-.51-.84-1.02-1.08-1.63-.24-.62-.4-1.27-.46-2.52-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.06-1.25.22-1.9.46-2.52.24-.61.57-1.12 1.08-1.63.51-.51 1.02-.84 1.63-1.08.62-.24 1.27-.4 2.52-.46 1.27-.06 1.65-.07 4.85-.07zm0 1.97c-3.1 0-3.46.01-4.66.07-1.17.06-1.78.21-2.16.36-.4.15-.72.37-1.04.68-.32.32-.53.64-.68 1.04-.15.38-.3 1-.36 2.16-.06 1.2-.07 1.56-.07 4.66s.01 3.46.07 4.66c.06 1.17.21 1.78.36 2.16.15.4.37.72.68 1.04.32.32.64.53 1.04.68.38.15 1 .3 2.16.36 1.2.06 1.56.07 4.66.07s3.46-.01 4.66-.07c1.17-.06 1.78-.21 2.16-.36.4-.15.72-.37 1.04-.68.32-.32.53-.64.68-1.04.15-.38.3-1 .36-2.16.06-1.2.07-1.56.07-4.66s-.01-3.46-.07-4.66c-.06-1.17-.21-1.78-.36-2.16-.15-.4-.37-.72-.68-1.04-.32-.32-.64-.53-1.04-.68-.38-.15-1-.3-2.16-.36-1.2-.06-1.56-.07-4.66-.07zm-5.4 1.18c-1.35 0-2.45 1.1-2.45 2.45s1.1 2.45 2.45 2.45 2.45-1.1 2.45-2.45-1.1-2.45-2.45-2.45zm0 3.93c-1.64 0-2.98-1.34-2.98-2.98s1.34-2.98 2.98-2.98 2.98 1.34 2.98 2.98-1.34 2.98-2.98 2.98zm4.7-5.91c0-.42-.34-.76-.76-.76s-.76.34-.76.76.34.76.76.76.76-.34.76-.76z"/>
    </svg>
</a>
