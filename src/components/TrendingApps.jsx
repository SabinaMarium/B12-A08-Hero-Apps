

import React from 'react';
import AppCard from './AppCard'; 
import { Link } from 'react-router-dom';

const TrendingApps = ({ apps }) => {
    if (!apps || apps.length === 0) {
        return <div className="text-center py-20 text-gray-500">No trending apps available.</div>;
    }

    return (
        <div className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-gray-800">Trending Apps</h2>
                <p className="mt-2 text-lg text-gray-500 mb-10">
                    Explore All Trending Apps on the Market developed by us
                </p>

              
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {apps.map((app) => (
                     
                        <AppCard key={app.id} app={app} /> 
                    ))}
                </div>

                
                <div className="mt-12">
                    <Link to="/apps" className="px-8 py-3 text-lg font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition duration-300">
                        Show All
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TrendingApps;