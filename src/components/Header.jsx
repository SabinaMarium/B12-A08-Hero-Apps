import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Apps', path: '/apps' },
  { name: 'Installation', path: '/installation' },
];

const Header = () => {
  
  const location = useLocation();
  const [loading, setLoading] = useState(false); 

  
  const handleNavClick = (path) => {
    if (location.pathname !== path) {
      setLoading(true);
     
      setTimeout(() => {
        setLoading(false);
      }, 500); 
    }
  };

  return (
    <>
      
      {loading && (
        <div className="fixed top-0 left-0 right-0 h-1 bg-purple-600 z-50 animate-pulse"></div>
      )}
      
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          
          
          <Link 
            to="/" 
            className="flex items-center text-xl font-bold text-gray-800" 
            onClick={() => handleNavClick('/')}
          >
            
            <img 
              src="/assets/logo.png" 
              alt="HERO.IO Logo" 
              className="h-8 mr-2"
            /> 
            <h3>HERO.IO </h3> 
          </Link>
          
          
          <nav className="flex space-x-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`text-gray-600 hover:text-purple-600 transition duration-150 ${
                  location.pathname === link.path ? 'text-purple-600 font-semibold border-b-2 border-purple-600' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="https://github.com/SabinaMarium" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-150 flex items-center"
            >
              
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.419 2.864 8.169 6.83 9.49.5.09.68-.22.68-.48v-1.7c-2.77.6-3.35-1.34-3.35-1.34-.45-1.14-1.1-1.44-1.1-1.44-.9-.6.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.77.87 1.52 2.3 1.08 2.87.82.09-.64.34-1.08.62-1.32-2.2-.25-4.5-1.1-4.5-4.9 0-1.08.38-1.97 1.03-2.67-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33s1.7.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.65.7 1.03 1.59 1.03 2.67 0 3.8-2.3 4.65-4.5 4.9.35.3.68.8.68 1.6v2.33c0 .26.18.57.68.48C17.136 18.169 20 14.419 20 10c0-5.523-4.477-10-10-10z" clipRule="evenodd"/></svg>
              Contribute
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;

Icons.jsx:
import React from 'react';

// --- Star Icon (Used for Ratings) ---
export const StarIcon = ({ className = "w-5 h-5" }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        className={className}
    >
        <path fillRule="evenodd" d="M10.788 3.212a.75.75 0 0 1 1.424 0l1.886 3.771 4.167.606a.75.75 0 0 1 .417 1.279l-3.018 2.946.713 4.156a.75.75 0 0 1-1.088.791L12 18.257l-3.729 1.956a.75.75 0 0 1-1.088-.791l.713-4.156-3.018-2.946a.75.75 0 0 1 .417-1.28l4.167-.605L10.788 3.212Z" clipRule="evenodd" />
    </svg>
);

// --- Download Icon (Used for Download Counts) ---
export const DownloadIcon = ({ className = "w-5 h-5" }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke="currentColor" 
        className={className}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
);

// --- Installation Icon (Likely needed for the Installation page/button) ---
export const InstallationIcon = ({ className = "w-5 h-5" }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke="currentColor" 
        className={className}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125l6.591 6.591a2.25 2.25 0 0 0 3.182 0l6.591-6.591M3 13.125l6.591 6.591a2.25 2.25 0 0 0 3.182 0l6.591-6.591m-14.773 0a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75h-14.5a.75.75 0 0 1-.75-.75v-1.5Zm12.773 0h-12.5a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75Z" />
    </svg>
);

