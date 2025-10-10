import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import Loading from '../components/Loading';
import ErrorPage from './ErrorPage';
import { DownloadIcon, ReviewIcon, StarIcon } from '../components/Icons';

const AppDetailsPage = ({ apps }) => {
  const { appId } = useParams();
  const navigate = useNavigate();
  const [app, setApp] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isInstalled, setIsInstalled] = useState(false);

  
  useEffect(() => {
    setLoading(true);
    
    const timer = setTimeout(() => {
      const foundApp = apps.find((a) => a.id === parseInt(appId));
      setApp(foundApp);
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [appId, apps]);

  
  const handleInstall = () => {
    setIsInstalled(true);
    toast.success('App Installed Successfully!', { position: 'top-right' });
  };

  
  if (loading) {
    return <Loading />;
  }
  if (!app) {
    
    return <ErrorPage message={`App with ID ${appId} not found.`} />;
  }

  
  const chartData = app.ratings.map(r => ({
    name: r.name,
    count: r.count,
  })).reverse(); 

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        
        <div className="flex flex-col md:flex-row items-start md:space-x-8 mb-10 p-6 border rounded-lg shadow-md bg-white">
          
          {/* App Image */}
          <div className="flex-shrink-0 mb-6 md:mb-0">
            <div className="w-32 h-32 bg-gray-200 rounded-xl">
              <img src={app.image} alt={app.title} className="w-full h-full object-cover rounded-xl" />
            </div>
          </div>
          
          {/* App Details */}
          <div className="flex-grow">
            <h1 className="text-4xl font-bold text-gray-800">{app.title}</h1>
            <p className="text-xl text-indigo-600 mt-1">{app.companyName}</p>
            
            <div className="flex flex-wrap items-center space-x-6 mt-4">
              <div className="flex items-center text-gray-700">
                <StarIcon className="h-5 w-5 mr-1 text-yellow-500 fill-current" />
                <span className="font-semibold text-lg">{app.ratingAvg.toFixed(1)} Rating</span>
              </div>
              <div className="flex items-center text-gray-700">
                <DownloadIcon className="h-5 w-5 mr-1 text-green-600" />
                <span className="font-semibold text-lg">{(app.downloads / 1000000).toFixed(1)}M+ Downloads</span>
              </div>
              <div className="flex items-center text-gray-700">
                <ReviewIcon className="h-5 w-5 mr-1 text-blue-600" />
                <span className="font-semibold text-lg">{app.reviews.toLocaleString()} Reviews</span>
              </div>
            </div>

            {/* Install Button */}
            <button
              onClick={handleInstall}
              disabled={isInstalled}
              className={`mt-6 px-8 py-3 text-lg font-medium rounded-md text-white transition duration-300
                ${isInstalled ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'}
              `}
            >
              {isInstalled ? 'Installed' : 'Install'}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          
          <div className="lg:col-span-2 p-6 border rounded-lg shadow-md bg-white">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">User Reviews Distribution</h2>
            <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart layout="vertical" data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <XAxis type="number" hide />
                        <YAxis dataKey="name" type="category" stroke="#333" />
                        <Tooltip formatter={(value) => [`${value.toLocaleString()} Reviews`, 'Count']} />
                        <Bar dataKey="count" fill="#4f46e5" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
          </div>

        
          <div className="lg:col-span-1 p-6 border rounded-lg shadow-md bg-white">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">About the App</h2>
            <p className="text-gray-600 leading-relaxed">
              {app.description}
            </p>
            <div className="mt-4 text-sm text-gray-500">
                <p>Version: 1.2.3</p>
                <p>Size: {app.size}MB</p>
                <p>Developer: {app.companyName}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetailsPage;