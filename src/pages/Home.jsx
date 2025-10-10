import React from 'react';
import { Link } from 'react-router-dom';
import AppCard from '../shared/AppCard';
import StateCard from '../shared/StateCard';
import { APP_DATA } from '../../data/appData';

const Home = () => {
  // Static state data as per requirement
  const stateData = [
    { title: "Total Downloads", value: "29.6M", sub: "21% More Than Last Month" },
    { title: "Total Reviews", value: "906K", sub: "46% More Than Last Month" },
    { title: "Active Apps", value: "132+", sub: "31 More Will Launch" },
  ];

  const trendingApps = APP_DATA.slice(0, 8); // Display first 8 apps

  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <section className="bg-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">We Build <span className="text-purple-600">Productive</span> Apps</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. 
            Our goal is to turn your ideas into digital experiences that truly make an impact.
          </p>
          <div className="flex justify-center space-x-4 mb-12">
            <a href="https://play.google.com/" target="_blank" rel="noopener noreferrer" className="flex items-center bg-gray-800 text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-900 transition duration-300">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M10 0C4.477 0 0 4.477 0 10c0 5.523 4.477 10 10 10s10-4.477 10-10C20 4.477 15.523 0 10 0zm-1.8 14.8l-4.4-4.4 1.4-1.4 3 3 6.6-6.6 1.4 1.4-8 8z"/></svg>
              Google Play
            </a>
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" className="flex items-center bg-purple-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-purple-700 transition duration-300">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M10 0c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm0 18a8 8 0 110-16 8 8 0 010 16zM10 5a1 1 0 00-1 1v7a1 1 0 002 0V6a1 1 0 00-1-1z"/></svg>
              App Store
            </a>
          </div>
          {/* Mockup Image - Replace with your actual image */}
          <div className="flex justify-center">
             
          </div>
        </div>
      </section>

      {/* States Section */}
      <section className="bg-purple-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-10">Trusted By Millions, Built For You</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {stateData.map((data, index) => (
              <StateCard key={index} data={data} />
            ))}
          </div>
        </div>
      </section>

      {/* Top Apps Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">Trending Apps</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {trendingApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
          <Link 
            to="/apps" 
            className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300 font-semibold"
          >
            Show All
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;