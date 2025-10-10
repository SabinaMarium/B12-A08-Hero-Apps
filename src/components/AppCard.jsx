import React from 'react';
import { Link } from 'react-router-dom';
import { StarIcon, DownloadIcon } from './Icons'; 

const AppCard = ({ app }) => {
  return (
    <Link to={`/app/${app.id}`} className="block p-4 border border-gray-200 rounded-lg hover:shadow-lg transition duration-300 cursor-pointer h-full">
      <div className="flex flex-col items-center text-center">
        
        <div className="w-24 h-24 bg-gray-200 rounded-xl mb-4">
          <img src={app.image} alt={app.title} className="w-full h-full object-cover rounded-xl" />
        </div>
        
        
        <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-2">{app.title}</h3>
        
        
        <div className="flex items-center justify-center space-x-4 text-sm mt-2">
          
          <div className="flex items-center text-green-600">
            <DownloadIcon className="h-4 w-4 mr-1" />
            <span className="font-medium">{(app.downloads / 1000000).toFixed(0)}M</span>
          </div>
          
          
          <div className="flex items-center text-yellow-500">
            <StarIcon className="h-4 w-4 mr-1 fill-current" />
            <span className="text-gray-600">{app.ratingAvg.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;