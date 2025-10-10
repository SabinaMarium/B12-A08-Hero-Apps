import React from 'react';

import { XIcon, YouTubeIcon, FacebookIcon } from './Icons'; 

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6">
          
          
          <div className="flex items-center mb-4 md:mb-0">
            
            <div className="w-8 h-8 bg-indigo-500 rounded-full mr-2"></div>
            <span className="text-xl font-bold">HERO.IO</span>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-indigo-400">
              <XIcon className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-indigo-400">
              <YouTubeIcon className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-indigo-400">
              <FacebookIcon className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-4 text-center text-sm text-gray-400">
          Copyright © 2025 - All right reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;