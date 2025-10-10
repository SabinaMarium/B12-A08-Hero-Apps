import React, { useState, useEffect } from 'react';
import AppCard from '../components/AppCard';
import Loading from '../components/Loading';

import appData from '../appData.json'; 



const AllAppsPage = () => {
    
    const allApps = appData;

    
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredApps, setFilteredApps] = useState(allApps); 
    const [loading, setLoading] = useState(false);

    
    useEffect(() => {
        setLoading(true);
        const searchTimer = setTimeout(() => {
            const lowerCaseSearch = searchTerm.toLowerCase();
            const results = allApps.filter(app =>
              
                app.title.toLowerCase().includes(lowerCaseSearch) 
            );
            setFilteredApps(results);
            setLoading(false);
        }, 300); 

        return () => clearTimeout(searchTimer);
    }, [searchTerm, allApps]); 

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Title Section */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-extrabold text-gray-800">Explore All Apps</h1>
                    <p className="mt-2 text-xl text-gray-500">Discover all the productive tools we've built.</p>
                </div>

                {/* Search and States Section */}
                <div className="flex flex-col sm:flex-row justify-between items-center mb-10 space-y-4 sm:space-y-0">
                    <div className="text-lg font-medium text-gray-600">
                        
                        Total Apps: <span className="text-indigo-700">{allApps.length}</span>
                    </div>
                    <input
                        type="text"
                        placeholder="Search apps by title..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="w-full sm:w-80 p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                    />
                </div>
                
                {/* App Section */}
                {loading ? (
                    <Loading /> 
                ) : filteredApps.length === 0 ? (
                    <div className="text-center py-20">
                        <h2 className="text-2xl font-semibold text-gray-600">No App Found</h2>
                        <p className="text-gray-500 mt-2">Try adjusting your search or check our trending apps on the home page.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredApps.map((app) => (
                            <AppCard key={app.id} app={app} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllAppsPage;