
import React from 'react';
import appData from '../appData.json';

import HeroSection from '../components/HeroSection'; 
import StatsSection from '../components/StatsSection'; 
import TrendingApps from '../components/TrendingApps'; 

const HomePage = () => {
 
    const allApps = appData;
    const topApps = allApps.slice(0, 8); 

    
    return (
        <div className="min-h-screen">
            <HeroSection />
            <StatsSection apps={allApps} /> 
            <TrendingApps apps={topApps} />
        </div>
    );
};

export default HomePage;