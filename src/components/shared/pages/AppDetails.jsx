import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { APP_DATA } from '../../data/appData';
import NotFound from '../shared/NotFound';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Simple Toast component (You'd use a library like react-hot-toast in a real app)
const Toast = ({ message, show, onClose }) => {
  if (!show) return null;
  setTimeout(onClose, 3000);
  return (
    <div className="fixed bottom-5 right-5 bg-green-500 text-white px-6 py-3 rounded-lg shadow-xl z-50 transition duration-300">
      {message}
    </div>
  );
};

const formatCount = (count) => {
  if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
  if (count >= 1000) return `${(count / 1000).toFixed(1)}K`;
  return count;
};

const AppDetails = () => {
  const { id } = useParams();
  const app = APP_DATA.find(a => a.id === parseInt(id));

  const [isInstalled, setIsInstalled] = useState(false);
  const [showToast, setShowToast] = useState(false);

  if (!app) {
    return (
      <div className="container mx-auto px-4 py-10 min-h-screen">
        <NotFound 
          title="OPPS!! APP NOT FOUND" 
          message="The App you are requesting is not found on our system, please try another apps" 
          image="/images/error-app-not-found.png" // Use the grumpy cat image
        />
      </div>
    );
  }

  const handleInstall = () => {
    setIsInstalled(true);
    setShowToast(true);
  };

  const chartData = app.ratings.map(r => ({
    name: r.name,
    count: r.count,
  }));
  
  // Calculate total reviews for percentage calculation
  const totalReviews = app.ratings.reduce((sum, r) => sum + r.count, 0);

  return (
    <div className="container mx-auto px-4 py-10 min-h-screen">
      {/* App Information Section */}
      <section className="flex flex-col md:flex-row gap-8 mb-12">
        {/* Left: App Image */}
        <div className="w-full md:w-1/4 flex justify-center md:justify-start">
          <div className="w-48 h-48 bg-gray-200 rounded-2xl flex items-center justify-center border border-gray-300">
             {/* You should replace this with <img src={app.image} alt={app.title} /> */}
            <span className="text-gray-500 text-sm">App Icon</span>
          </div>
        </div>
        
        {/* Right: Details and Install Button */}
        <div className="w-full md:w-3/4">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">{app.title}</h1>
          <p className="text-gray-600 mb-6">Developed by <span className="text-purple-600 font-medium">{app.companyName}</span></p>

          <div className="flex space-x-6 mb-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-800">{formatCount(app.downloads)}</p>
              <p className="text-sm text-gray-500">Downloads</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-800">{app.ratingAvg.toFixed(1)}</p>
              <p className="text-sm text-gray-500">Average Ratings</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-800">{formatCount(app.reviews)}</p>
              <p className="text-sm text-gray-500">Total Reviews</p>
            </div>
          </div>

          <button
            onClick={handleInstall}
            disabled={isInstalled}
            className={`px-8 py-3 rounded-lg text-white font-semibold transition duration-300 ${
              isInstalled ? 'bg-green-600 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700'
            }`}
          >
            {isInstalled ? 'Installed' : `Install Now (${app.size} MB)`}
          </button>
        </div>
      </section>

      {/* App Review Chart */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Ratings</h2>
        <div className="bg-white p-6 rounded-lg shadow-md h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart 
              layout="vertical" 
              data={chartData.reverse()} // Reverse to show 5-star at the top
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis type="number" hide />
              <YAxis 
                dataKey="name" 
                type="category" 
                stroke="#6B7280" 
                interval={0} 
                tick={{ fontSize: 14 }}
              />
              <Tooltip formatter={(value) => [`${value} votes (${((value / totalReviews) * 100).toFixed(1)}%)`, 'Count']} />
              <Bar 
                dataKey="count" 
                fill="#8B5CF6" // Purple color
                barSize={20} 
                radius={[0, 4, 4, 0]} // Rounded corners on the right
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>
      
      {/* App Description */}
      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Description</h2>
        <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">{app.description}</p>
      </section>

      <Toast 
        message="App Installed Successfully!" 
        show={showToast} 
        onClose={() => setShowToast(false)} 
      />
    </div>
  );
};

export default AppDetails;