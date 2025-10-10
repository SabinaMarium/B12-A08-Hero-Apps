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