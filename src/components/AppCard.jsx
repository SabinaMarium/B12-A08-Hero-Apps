import React from 'react';
import { Link } from 'react-router-dom';
// Import the helper from the data file, where it should live:
import { formatCount } from '../../data/appData.js'; 
// Import icons from your shared Icons.jsx file
import { StarIcon, DownloadIcon } from './Icons.jsx'; 

const AppCard = ({ app }) => {
  return (
    // FIX: Change '/app/' to '/app-details/' to match the route defined in App.jsx
    <Link 
        to={`/app-details/${app.id}`} 
        className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-1 block p-4"
    >
      <div className="flex flex-col items-start">
        
        {/* App Image */}
        <img 
            src={app.image} 
            alt={app.title} 
            className="w-full h-32 object-cover rounded-lg mb-3 flex items-center justify-center border border-gray-100" 
            onError={(e) => {e.target.onerror = null; e.target.src="https://placehold.co/100x80/6d28d9/ffffff?text=APP"}}
        />
        
        <h3 className="font-semibold text-gray-800 line-clamp-2 mb-1 group-hover:text-purple-600 transition">
            {app.title}
        </h3>
        
        {/* Stats */}
        <div className="flex items-center text-sm text-gray-500 mt-auto">
          {/* Replace inline SVG with imported DownloadIcon */}
          <DownloadIcon className="w-4 h-4 mr-1 text-purple-600" />
          <span className="mr-4 text-gray-600 font-medium">{formatCount(app.downloads)}</span>
          
          {/* Replace inline SVG with imported StarIcon */}
          <StarIcon className="w-4 h-4 mr-1 text-yellow-500 fill-yellow-500" />
          <span className='text-gray-600'>{app.ratingAvg.toFixed(1)}</span>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;

