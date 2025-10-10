import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { GithubIcon } from './Icons'; 

const navLinks = [
  { name: 'Home', path: '/home' },
  { name: 'Apps', path: '/apps' },
  { name: 'Installation', path: '/installation' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  
  const getNavLinkClass = ({ isActive }) =>
    `px-3 py-2 text-sm font-medium relative transition duration-300 ${
      isActive
        ? 'text-indigo-700 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-indigo-700'
        : 'text-gray-500 hover:text-gray-900'
    }`;

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">

          
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              
              <div className="w-8 h-8 bg-indigo-700 rounded-full"></div> 
              <span className="text-indigo-700 font-bold text-xl">HERO.IO</span>
            </Link>
          </div>

          
          <nav className="hidden md:flex flex-grow justify-center items-center">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <NavLink key={link.name} to={link.path} className={getNavLinkClass}>
                  {link.name}
                </NavLink>
              ))}
            </div>
          </nav>

          
          <div className="flex items-center space-x-4">
            
            <a href="YOUR_GITHUB_PROFILE_URL" target="_blank" rel="noopener noreferrer"
              className="hidden md:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md 
                         text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
                         focus:ring-purple-500 transition duration-300">
              <GithubIcon className="-ml-0.5 mr-2 h-4 w-4" />
              Contribute
            </a>

            
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

    
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-700'
                      : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <a href="https://github.com/SabinaMarium" target="_blank" rel="noopener noreferrer"
              className="mt-2 block w-full text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md 
                         text-white bg-purple-600 hover:bg-purple-700 transition duration-300">
              Contribute
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;