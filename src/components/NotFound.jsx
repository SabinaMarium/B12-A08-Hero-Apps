import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = ({ title, message, image }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 bg-white rounded-lg">
      <div className="w-64 h-64 mb-6">
        {/* Placeholder for Grumpy Cat or other relevant image */}
         
      </div>
      <h2 className="text-4xl font-bold text-gray-800 mb-3">{title}</h2>
      <p className="text-lg text-gray-600 max-w-lg text-center mb-8">{message}</p>
      <Link 
        to="/apps" 
        className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300 font-semibold"
      >
        Go Back!
      </Link>
    </div>
  );
};

export default NotFound;
