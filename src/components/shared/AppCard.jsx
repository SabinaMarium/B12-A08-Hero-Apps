import React from 'react';
import { Link } from 'react-router-dom';

const formatCount = (count) => {
  if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
  if (count >= 1000) return `${(count / 1000).toFixed(1)}K`;
  return count;
};

const AppCard = ({ app }) => {
  return (
    <Link to={`/app/${app.id}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-1 block p-4">
      <div className="flex flex-col items-start">
        {/* Placeholder for App Image */}
        <div className="w-full h-32 bg-gray-200 rounded-lg mb-3 flex items-center justify-center">
            {/* You should replace this div with an <img src={app.image} alt={app.title} /> */}
          <span className="text-gray-500 text-sm">Image Placeholder</span>
        </div>
        
        <h3 className="font-semibold text-gray-800 line-clamp-2 mb-1">{app.title}</h3>
        
        <div className="flex items-center text-sm text-gray-500 mt-auto">
          <svg className="w-4 h-4 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M13 14H7a2 2 0 01-2-2v-2a2 2 0 012-2h6a2 2 0 012 2v2a2 2 0 01-2 2zM10 4a6 6 0 00-6 6v2a6 6 0 006 6h4a6 6 0 006-6v-2a6 6 0 00-6-6h-4zM7 11a1 1 0 100 2h6a1 1 0 100-2H7z"/></svg>
          <span className="mr-4 text-green-600 font-medium">{formatCount(app.downloads)}</span>
          
          <svg className="w-4 h-4 mr-1 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.63-.921 1.93 0l2.368 7.284 7.663.558c.957.07.784 1.346-.062 1.838l-6.182 4.498 1.91 7.027c.258.94-.783 1.675-1.574 1.15L10 17.5l-6.182 4.025c-.79.525-1.832-.21-1.574-1.15l1.91-7.027-6.182-4.498c-.846-.492-1.019-1.768-.062-1.838l7.663-.558L9.049 2.927z"/></svg>
          <span className='text-gray-600'>{app.ratingAvg.toFixed(1)}</span>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;