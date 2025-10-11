import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      {/* Image: Error 404 illustration from Screenshot 2025-10-10 144915.png */}
       

[Image of 404 page not found illustration]

      
      <h1 className="text-6xl font-extrabold text-gray-800 mt-8 mb-4">Error-404</h1>
      <h2 className="text-3xl font-semibold text-gray-700">Oops, page not found!</h2>
      <p className="text-lg text-gray-500 mt-2 mb-8">The page you are looking for is not available.</p>
      <Link 
        to="/" 
        className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300 font-semibold"
      >
        Go Back!
      </Link>
    </div>
  );
};

export default ErrorPage;
