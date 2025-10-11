import React from 'react';

const installedApps = [
  { id: 1, title: "Forest: Focus For Productivity", size: 258, rating: 5, downloads: 9000000 },
  { id: 2, title: "SmPlan:ToDo List With Reminder", size: 291, rating: 4, downloads: 8000000 },
  { id: 3, title: "FLIP - Focus Timer For Study", size: 150, rating: 5, downloads: 7500000 },
];

const Installation = () => {
  return (
    <div className="container mx-auto px-4 py-10 min-h-screen">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">Your Installed Apps</h2>
        <p className="text-lg text-gray-500">Explore All Trending Apps on the Market developed by us</p>
      </div>

      <div className="flex justify-between items-center mb-6 border-b pb-2">
        <p className="text-xl font-medium text-gray-700">({installedApps.length}) Apps Found</p>
        <select className="p-2 border border-gray-300 rounded-lg">
          <option>Sort By Size</option>
          <option>Sort By Rating</option>
        </select>
      </div>

      <div className="space-y-4">
        {installedApps.map((app) => (
          <div key={app.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-200 rounded-lg mr-4"></div>
              <div>
                <p className="font-semibold text-gray-800">{app.title}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="text-green-600 mr-2">{((app.downloads) / 1000000).toFixed(0)}M</span>
                  <span className="text-yellow-500 mr-2">★ {app.rating}</span>
                  <span>{app.size} MB</span>
                </div>
              </div>
            </div>
            <button className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-150">
              Uninstall
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;


