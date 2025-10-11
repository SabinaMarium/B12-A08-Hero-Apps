import React, { useState, useEffect } from 'react';
import AppCard from './AppCard.jsx';
import Loading from './Loading.jsx';
import NotFound from './NotFound.jsx';
import { APP_DATA } from '../../data/appData.js';

const AllApps = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredApps, setFilteredApps] = useState(APP_DATA);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // If search is empty, just show all apps immediately
    if (!searchTerm) {
        setFilteredApps(APP_DATA);
        setLoading(false);
        return;
    }

    setLoading(true);
    
    // Simulate search latency (250ms)
    const delayDebounceFn = setTimeout(() => {
      const lowerCaseSearch = searchTerm.toLowerCase();
      const results = APP_DATA.filter(app => 
        app.title.toLowerCase().includes(lowerCaseSearch)
      );
      setFilteredApps(results);
      setLoading(false);
    }, 250);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  return (
    <div className="container mx-auto px-4 py-10 min-h-screen">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">Our All Applications</h2>
        <p className="text-lg text-gray-500">Explore All Apps on the Market developed by us. We code for Millions</p>
      </div>
      
      {/* Search and States */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <p className="text-xl font-medium text-gray-700 sm:mb-0 mb-4">({filteredApps.length}) Apps Found</p>
        <input
          type="text"
          placeholder="Search Apps"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg w-full sm:max-w-sm focus:ring-purple-500 focus:border-purple-500 transition duration-150"
        />
      </div>

      {/* App Section */}
      {loading ? (
        <Loading message="Filtering applications..." />
      ) : filteredApps.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredApps.map((app) => (
            // No navigate prop needed here anymore
            <AppCard key={app.id} app={app} /> 
          ))}
        </div>
      ) : (
        <NotFound title="No App Found" message="Try searching for a different title." />
      )}
    </div>
  );
};

export default AllApps;

