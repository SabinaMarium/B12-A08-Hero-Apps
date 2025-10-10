import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppCard from '../components/AppCard';
import { PlayStoreIcon, AppStoreIcon, DownloadIcon, ReviewIcon, ActiveAppIcon } from '../components/Icons';

const HomePage = ({ apps }) => {
  const navigate = useNavigate();
  const topApps = apps.slice(0, 8);

  
  const stats = [
    { value: "29.6M", label: "Total Downloads", subtext: "21% More Than Last Month", icon: DownloadIcon },
    { value: "906K", label: "Total Reviews", subtext: "46% More Than Last Month", icon: ReviewIcon },
    { value: "132+", label: "Active Apps", subtext: "31 More We Launch", icon: ActiveAppIcon },
  ];

  return (
    <div>
      {/* 1. Banner Section */}
      <section className="bg-gray-50 py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800">
            We Build <span className="text-purple-600">Productive Apps</span>
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
            Our goal is to turn your ideas into digital experiences that truly make an impact.
          </p>
          
          {/* Buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <a href="YOUR_PLAY_STORE_LINK" target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gray-800 hover:bg-gray-700">
              <PlayStoreIcon className="w-5 h-5 mr-2" /> Google Play
            </a>
            <a href="YOUR_APP_STORE_LINK" target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50">
              <AppStoreIcon className="w-5 h-5 mr-2" /> App Store
            </a>
          </div>
          
          
          <div className="mt-12">
        
            <img src="/images/mobile-app-screenshot.png" alt="App Screenshot" className="max-w-full mx-auto h-auto sm:h-[400px] object-contain" />
          </div>
        </div>
      </section>

      {/* 2. States Section */}
      <section className="bg-purple-600 py-16 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Trusted By Millions, Built For You</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <p className="text-5xl font-extrabold">{stat.value}</p>
                <p className="text-xl font-medium mt-1">{stat.label}</p>
                <p className="text-sm text-purple-200 mt-1">{stat.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Top Apps Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Trending Apps</h2>
          <p className="mt-2 text-gray-500">Explore All Trending Apps on the Market developed by us</p>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {topApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>

          <button
            onClick={() => navigate('/apps')}
            className="mt-12 px-8 py-3 text-lg font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition duration-300"
          >
            Show All
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;