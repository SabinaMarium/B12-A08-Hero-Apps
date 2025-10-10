import React from 'react';

const Loading = ({ message = "Loading content..." }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 min-h-64">
      {/* Spinner animation - using Tailwind classes */}
      <div className="w-12 h-12 border-4 border-t-4 border-purple-200 border-t-purple-600 rounded-full animate-spin mb-4"></div>
      
      <p className="text-lg text-gray-600 font-medium">{message}</p>
    </div>
  );
};

export default Loading;