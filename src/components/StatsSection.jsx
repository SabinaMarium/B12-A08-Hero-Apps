

import React from 'react';

const StatCard = ({ value, label, subtext }) => (
    <div className="text-center p-6">
        <p className="text-6xl font-extrabold text-white">{value}</p>
        <p className="mt-2 text-xl font-medium text-purple-200">{label}</p>
        <p className="mt-1 text-sm text-purple-300">{subtext}</p>
    </div>
);

const StatsSection = ({ apps }) => {
    
    const totalDownloads = apps.reduce((sum, app) => sum + app.downloads, 0);
    const totalReviews = apps.reduce((sum, app) => sum + app.reviews, 0);
    const totalApps = apps.length;

    
    const formatCount = (count) => {
        if (count >= 1000000) return (count / 1000000).toFixed(1) + 'M';
        if (count >= 1000) return (count / 1000).toFixed(0) + 'K';
        return count.toString();
    };

    return (
        <div className="bg-purple-800 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-bold text-white mb-10">Trusted By Millions, Built For You</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <StatCard 
                        value={formatCount(totalDownloads)} 
                        label="Total Downloads"
                        subtext="21% More Than Last Month" 
                    />
                    <StatCard 
                        value={formatCount(totalReviews)}
                        label="Total Reviews" 
                        subtext="46% More Than Last Month"
                    />
                    <StatCard 
                        value={`${totalApps}+`}
                        label="Active Apps" 
                        subtext="31 More Will Launch" 
                    />
                </div>
            </div>
        </div>
    );
};

export default StatsSection;