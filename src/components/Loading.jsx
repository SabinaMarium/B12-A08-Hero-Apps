import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-[999]">
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
      <p className="mt-4 text-xl text-indigo-700">Loading...</p>
    </div>
  );
};


export default Loading;