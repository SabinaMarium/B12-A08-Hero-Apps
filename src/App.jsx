import React, { useState, useMemo } from 'react';


const APP_DATA = [
    { image: "https://placehold.co/64x64/a78bfa/ffffff?text=GC", title: "Gemini Chat Pro", companyName: "Google AI Labs", id: 1, description: "Your powerful AI assistant for creative and analytical tasks, now with deeper integration and real-time data access.", size: 75.2, reviews: 125000, ratingAvg: 4.8, downloads: 9500000, ratings: [{ name: "1 star", count: 2500 }, { name: "2 star", count: 4000 }, { name: "3 star", count: 12000 }, { name: "4 star", count: 35000 }, { name: "5 star", count: 71500 }] },
    { image: "https://placehold.co/64x64/34d399/ffffff?text=DF", title: "DataFlow Analytics", companyName: "Analytics Co", id: 2, description: "Advanced data visualization and processing tool for business intelligence and complex reporting needs.", size: 45.8, reviews: 5400, ratingAvg: 4.2, downloads: 450000, ratings: [{ name: "1 star", count: 200 }, { name: "2 star", count: 400 }, { name: "3 star", count: 800 }, { name: "4 star", count: 1500 }, { name: "5 star", count: 2500 }] },
    { image: "https://placehold.co/64x64/facc15/ffffff?text=PE", title: "PhotoEdit Max", companyName: "Creative Labs", id: 3, description: "Professional photo editing with advanced filters and comprehensive layer management for stunning results.", size: 120.1, reviews: 88000, ratingAvg: 4.7, downloads: 7200000, ratings: [{ name: "1 star", count: 1800 }, { name: "2 star", count: 3200 }, { name: "3 star", count: 8000 }, { name: "4 star", count: 25000 }, { name: "5 star", count: 50000 }] },
    { image: "https://placehold.co/64x64/fb923c/ffffff?text=TM", title: "TaskManager Pro", companyName: "Productivity Inc", id: 4, description: "The ultimate tool for organizing your tasks and projects efficiently across all your devices with seamless sync.", size: 30.5, reviews: 32000, ratingAvg: 4.5, downloads: 2800000, ratings: [{ name: "1 star", count: 1000 }, { name: "2 star", count: 2500 }, { name: "3 star", count: 5500 }, { name: "4 star", count: 11000 }, { name: "5 star", count: 12000 }] },
    { image: "https://placehold.co/64x64/818cf8/ffffff?text=MM", title: "Mindful Meditation", companyName: "Calmness Now", id: 5, description: "Daily guided meditations and sleep stories to reduce stress, improve focus, and promote relaxation.", size: 55.0, reviews: 150000, ratingAvg: 4.9, downloads: 15000000, ratings: [{ name: "1 star", count: 1000 }, { name: "2 star", count: 2000 }, { name: "3 star", count: 5000 }, { name: "4 star", count: 22000 }, { name: "5 star", count: 120000 }] },
    { image: "https://placehold.co/64x64/60a5fa/ffffff?text=CM", title: "CodeMentor IDE", companyName: "DevTools", id: 6, description: "An interactive development environment for learning and practicing coding in multiple popular languages.", size: 90.7, reviews: 45000, ratingAvg: 4.6, downloads: 3500000, ratings: [{ name: "1 star", count: 500 }, { name: "2 star", count: 1500 }, { name: "3 star", count: 4000 }, { name: "4 star", count: 14000 }, { name: "5 star", count: 25000 }] },
    { image: "https://placehold.co/64x64/f472b6/ffffff?text=BT", title: "Budget Tracker", companyName: "Finance Wise", id: 7, description: "Track your expenses, set savings goals, and manage your monthly budget effortlessly with insightful reports.", size: 22.9, reviews: 20000, ratingAvg: 4.4, downloads: 1800000, ratings: [{ name: "1 star", count: 800 }, { name: "2 star", count: 1200 }, { name: "3 star", count: 3000 }, { name: "4 star", count: 7000 }, { name: "5 star", count: 8000 }] },
    { image: "https://placehold.co/64x64/ec4899/ffffff?text=RE", title: "Recipe Explorer", companyName: "Foodie Hub", id: 8, description: "Discover thousands of recipes from around the world, complete with meal planning and automated grocery lists.", size: 88.4, reviews: 67000, ratingAvg: 4.3, downloads: 5100000, ratings: [{ name: "1 star", count: 1500 }, { name: "2 star", count: 2500 }, { name: "3 star", count: 10000 }, { name: "4 star", count: 23000 }, { name: "5 star", count: 30000 }] },
    { image: "https://placehold.co/64x64/4ade80/ffffff?text=FC", title: "Fitness Coach AI", companyName: "Health First", id: 9, description: "Personalized workout plans, progress tracking, and AI-driven form correction for optimal fitness results.", size: 60.3, reviews: 110000, ratingAvg: 4.8, downloads: 11000000, ratings: [{ name: "1 star", count: 2000 }, { name: "2 star", count: 3000 }, { name: "3 star", count: 10000 }, { name: "4 star", count: 35000 }, { name: "5 star", count: 60000 }] },
    { image: "https://placehold.co/64x64/38bdf8/ffffff?text=LB", title: "Language Buddy", companyName: "Global Speak", id: 10, description: "Interactive lessons, native speaker conversations, and vocabulary builders for learning multiple languages quickly.", size: 70.0, reviews: 95000, ratingAvg: 4.6, downloads: 8000000, ratings: [{ name: "1 star", count: 1500 }, { name: "2 star", count: 3500 }, { name: "3 star", count: 10000 }, { name: "4 star", count: 30000 }, { name: "5 star", count: 50000 }] },
    { image: "https://placehold.co/64x64/93c5fd/ffffff?text=AV", title: "AstroViewer 3D", companyName: "Sky Watchers", id: 11, description: "Explore stars, planets, and constellations in real-time with augmented reality and high-resolution 3D models.", size: 150.0, reviews: 180000, ratingAvg: 4.9, downloads: 16000000, ratings: [{ name: "1 star", count: 2000 }, { name: "2 star", count: 3000 }, { name: "3 star", count: 5000 }, { name: "4 star", count: 30000 }, { name: "5 star", count: 140000 }] },
    { image: "https://placehold.co/64x64/c084fc/ffffff?text=MM", title: "MusicMaker Studio", companyName: "Soundscapes", id: 12, description: "Create, mix, and record music tracks like a professional with a portable digital audio workstation.", size: 200.5, reviews: 75000, ratingAvg: 4.7, downloads: 6500000, ratings: [{ name: "1 star", count: 1000 }, { name: "2 star", count: 2000 }, { name: "3 star", count: 7000 }, { name: "4 star", count: 25000 }, { name: "5 star", count: 40000 }] },
    { image: "https://placehold.co/64x64/f87171/ffffff?text=HO", title: "Home Organizer", companyName: "Clutter-Free", id: 13, description: "A smart app to manage home inventory, track maintenance schedules, and organize digital documents.", size: 40.9, reviews: 25000, ratingAvg: 4.5, downloads: 2100000, ratings: [{ name: "1 star", count: 500 }, { name: "2 star", count: 1000 }, { name: "3 star", count: 4000 }, { name: "4 star", count: 10000 }, { name: "5 star", count: 9500 }] },
    { image: "https://placehold.co/64x64/e879f9/ffffff?text=TP", title: "Travel Planner Go", companyName: "Journey Ahead", id: 14, description: "Plan your perfect trip with integrated maps, booking tools, and offline access to essential travel guides.", size: 65.0, reviews: 50000, ratingAvg: 4.4, downloads: 4000000, ratings: [{ name: "1 star", count: 1200 }, { name: "2 star", count: 2800 }, { name: "3 star", count: 7000 }, { name: "4 star", count: 16000 }, { name: "5 star", count: 23000 }] },
    { image: "https://placehold.co/64x64/a855f7/ffffff?text=SA", title: "Stock Analyst Pro", companyName: "Invest Smart", id: 15, description: "Real-time stock tracking, advanced market analysis, and personalized portfolio management tools.", size: 35.5, reviews: 60000, ratingAvg: 4.6, downloads: 5500000, ratings: [{ name: "1 star", count: 1500 }, { name: "2 star", count: 2500 }, { name: "3 star", count: 6000 }, { name: "4 star", count: 20000 }, { name: "5 star", count: 30000 }] },
    { image: "https://placehold.co/64x64/4c3d4a/ffffff?text=GW", title: "Garden Watcher", companyName: "Green Thumb", id: 16, description: "Automated plant care tracking, watering reminders, and pest identification for effortless gardening.", size: 40.0, reviews: 15000, ratingAvg: 4.3, downloads: 1200000, ratings: [{ name: "1 star", count: 500 }, { name: "2 star", count: 1500 }, { name: "3 star", count: 2500 }, { name: "4 star", count: 5500 }, { name: "5 star", count: 5000 }] },
    { image: "https://placehold.co/64x64/2a2a2a/ffffff?text=SR", title: "Secure Reader VPN", companyName: "Privacy First", id: 17, description: "A high-speed, secure VPN service with global servers and a zero-logging policy for total online privacy.", size: 50.1, reviews: 90000, ratingAvg: 4.7, downloads: 8500000, ratings: [{ name: "1 star", count: 1000 }, { name: "2 star", count: 2000 }, { name: "3 star", count: 8000 }, { name: "4 star", count: 30000 }, { name: "5 star", count: 49000 }] },
    { image: "https://placehold.co/64x64/e5e7eb/374151?text=ED", title: "EduLearn Platform", companyName: "Knowledge Bridge", id: 18, description: "Interactive educational content covering K-12 subjects, standardized test prep, and higher education courses.", size: 70.5, reviews: 40000, ratingAvg: 4.5, downloads: 3200000, ratings: [{ name: "1 star", count: 800 }, { name: "2 star", count: 1200 }, { name: "3 star", count: 4000 }, { name: "4 star", count: 14000 }, { name: "5 star", count: 20000 }] },
    { image: "https://placehold.co/64x64/6366f1/ffffff?text=GP", title: "Game Portal+", companyName: "Interactive Play", id: 19, description: "A collection of premium mini-games and arcade titles with exclusive weekly challenges and leaderboards.", size: 180.0, reviews: 105000, ratingAvg: 4.1, downloads: 9000000, ratings: [{ name: "1 star", count: 5000 }, { name: "2 star", count: 8000 }, { name: "3 star", count: 15000 }, { name: "4 star", count: 30000 }, { name: "5 star", count: 47000 }] },
    { image: "https://placehold.co/64x64/10b981/ffffff?text=WD", title: "Weather Data Live", companyName: "Sky Forecaster", id: 20, description: "Hyper-local, real-time weather data with minute-by-minute precipitation forecasts and severe weather alerts.", size: 28.0, reviews: 55000, ratingAvg: 4.7, downloads: 4800000, ratings: [{ name: "1 star", count: 500 }, { name: "2 star", count: 1500 }, { name: "3 star", count: 5000 }, { name: "4 star", count: 20000 }, { name: "5 star", count: 28000 }] }
];


const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
    return num.toString();
};

// --- ICONS ---

const iconProps = {
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
};

const StarIcon = (props) => (
    <svg {...iconProps} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.139a.562.562 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.281 3.61c-.161.136-.258.397-.215.632l1.22 5.344c.143.623-.466 1.157-1.094.887l-4.705-2.613c-.19.4-.44.75-.75.99-.3-.24-.56-.59-.75-.99l-4.705 2.613c-.628.27-.643-.887-1.094-.887l1.22-5.344c.043-.235-.054-.496-.215-.632L2.73 10.413c-.381-.325-.18-.948.321-.988l5.518-.442c.214-.017.382-.195.475-.345l2.125-5.139Z" />
    </svg>
);

const DownloadIcon = (props) => (
    <svg {...iconProps} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
);

const PlayStoreIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 24 24" fill="currentColor">
        <path d="M7 21l-3 3 13-13 3-3-13 13zM10 20l-1-1 3-3 1 1-3 3z" />
    </svg>
);

const AppStoreIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 24 24" fill="currentColor">
        <path d="M10.87 2.12c-.93-.66-2.14-.66-3.07 0L4.3 4.88c-.93.66-1.5 1.76-1.5 2.92v9.4c0 1.16.57 2.26 1.5 2.92l3.5 2.76c.93.66 2.14.66 3.07 0l3.5-2.76c.93-.66 1.5-1.76 1.5-2.92v-9.4c0-1.16-.57-2.26-1.5-2.92l-3.5-2.76zM12 11.5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z" />
    </svg>
);

const ReviewIcon = (props) => (
    <svg {...iconProps} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 4.5l9-4.5 9 4.5-9 4.5-9-4.5zM18.75 14.25v2.25m0 3h-9" />
    </svg>
);

const ActiveAppIcon = (props) => (
    <svg {...iconProps} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75A2.25 2.25 0 0 0 15.75 1.5H13.5m-3 0V3m3-1.5V3m-3 18v-1.5m3 1.5v-1.5M12 7.5h.008v.008H12V7.5ZM12 11.25h.008v.008H12v-.008ZM12 15h.008v.008H12V15Z" />
    </svg>
);

const GitHubIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M12 2C6.475 2 2 6.475 2 12c0 4.418 2.868 8.16 6.83 9.49.5.09.68-.217.68-.483V19.06c-3.15.685-3.806-1.51-3.806-1.51-.516-1.306-1.255-1.65-1.255-1.65-.968-.66.07-.645.07-.645 1.07.07 1.63 1.096 1.63 1.096.95 1.63 2.505 1.157 3.123.886.096-.688.373-1.157.677-1.423-2.376-.265-4.872-1.188-4.872-5.26 0-1.16.41-2.106 1.096-2.85-.11-.266-.475-1.35.105-2.81 0 0 .89-.286 2.91.95.848-.236 1.75-.356 2.65-.356.9.0 1.802.12 2.65.356 2.02-1.236 2.91-.95 2.91-.95.58 1.46.21 2.544.105 2.81.686.744 1.096 1.69 1.096 2.85 0 4.08-2.5 4.994-4.88 5.25.385.33.685.99.685 2V20.5c0 .266.18.573.68.483C19.13 20.16 22 16.418 22 12 22 6.475 17.525 2 12 2z" clipRule="evenodd" />
    </svg>
);




// App Card Component
const AppCard = ({ app, navigate }) => {
    return (
        <div 
            onClick={() => navigate(`/app-details/${app.id}`)}
            className="group bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 cursor-pointer border border-gray-100"
        >
            <img 
                src={app.image} 
                alt={app.title} 
                className="w-16 h-16 rounded-2xl mx-auto mb-4 border-2 border-purple-100 object-cover" 
                onError={(e) => {e.target.onerror = null; e.target.src="https://placehold.co/64x64/6d28d9/ffffff?text=APP"}}
            />
            <h3 className="text-lg font-bold text-gray-900 truncate text-center mb-1 group-hover:text-purple-600 transition">
                {app.title}
            </h3>
            
            
            <div className="flex justify-center space-x-4 text-sm mt-3">
                
                <div className="flex items-center text-gray-600">
                    <StarIcon className="h-4 w-4 text-yellow-400 mr-1 fill-yellow-400" />
                    <span className="font-semibold text-gray-700">{app.ratingAvg.toFixed(1)}</span>
                </div>
                
                <div className="flex items-center text-gray-600">
                    <DownloadIcon className="h-4 w-4 text-purple-500 mr-1" />
                    <span>{formatNumber(app.downloads)}</span>
                </div>
            </div>
        </div>
    );
};

// Header Component
const Header = ({ currentPath, navigate }) => {
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Apps', path: '/apps' },
        { name: 'Installation', path: '/installation' },
    ];

    return (
        <header className="sticky top-0 z-10 bg-white shadow-lg border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                
                
                <span 
                    onClick={() => navigate('/')} 
                    className="text-3xl font-extrabold text-gray-900 tracking-tight transition duration-150 hover:text-purple-600 cursor-pointer"
                >
                  <span className="text-purple-600">Hero.IO</span>
                </span>

                
                <nav className="hidden sm:block">
                    <ul className="flex space-x-8">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <span
                                    onClick={() => navigate(item.path)}
                                    className={`text-base font-medium transition duration-150 pb-1 cursor-pointer ${
                                        currentPath === item.path
                                            ? 'text-purple-600 border-b-2 border-purple-600' // 
                                            : 'text-gray-600 hover:text-purple-600'
                                    }`}
                                >
                                    {item.name}
                                </span>
                            </li>
                        ))}
                    </ul>
                </nav>
                
           
                <a 
                    href="https://github.com/SabinaMarium" 
                    
                    className="flex items-center px-4 py-2 text-sm font-semibold rounded-full text-white bg-gray-900 hover:bg-gray-700 transition duration-150 shadow-md transform hover:scale-105"
                >
                    <GitHubIcon className="h-5 w-5 mr-2" />
                    Contribution
                </a>
            </div>
        </header>
    );
};


const HeroSection = () => {
    return (
        <div className="pt-24 pb-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                
               
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-gray-900 leading-tight tracking-tight">
                    We Build <span className="text-purple-600">Productive</span>
                    <br className="hidden sm:block"/>
                     Apps
                </h1>
                
                
                <p className="mt-6 text-lg md:text-xl text-gray-500 max-w-3xl mx-auto">
                    A curated collection of high-quality applications designed to boost your productivity, creativity, and lifestyle.
                </p>
                
                
                <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                    <a 
                        href="https://play.google.com/store" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center px-8 py-3 border border-transparent text-lg font-medium rounded-full shadow-lg text-white bg-purple-600 hover:bg-purple-700 transition duration-300 transform hover:scale-105"
                    >
                        <PlayStoreIcon className="h-6 w-6 mr-3" />
                        Play Store
                    </a>
                    <a 
                        href="https://www.apple.com/app-store/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center px-8 py-3 border border-gray-300 text-lg font-medium rounded-full shadow-lg text-gray-700 bg-white hover:bg-gray-100 transition duration-300 transform hover:scale-105"
                    >
                        <AppStoreIcon className="h-6 w-6 mr-3 text-purple-600" />
                        App Store
                    </a>
                </div>

                
                <div className="mt-20">
                    <div className="mx-auto w-full max-w-5xl h-64 sm:h-80 bg-gradient-to-br from-purple-100 to-white rounded-3xl flex items-center justify-center shadow-2xl shadow-purple-300/50 border-8 border-white">
                        <div className="p-4 bg-white rounded-xl shadow-lg text-purple-600 font-bold text-xl">App Showcase Preview</div>
                    </div>
                </div>
            </div>
        </div>
    );
};


const StatsSection = ({ apps }) => {
    
    const stats = useMemo(() => {
        const totalDownloads = apps.reduce((sum, app) => sum + app.downloads, 0);
        const totalReviews = apps.reduce((sum, app) => sum + app.reviews, 0);
        const totalApps = apps.length;
        
        return {
            totalDownloads: formatNumber(totalDownloads),
            totalReviews: formatNumber(totalReviews),
            totalApps: `${totalApps}+`
        };
    }, [apps]);

    const StatCard = ({ value, label, Icon, colorClass }) => (
        <div className="text-center p-6 bg-white rounded-xl shadow-md border-t-4 border-b-4 border-purple-500/20 hover:shadow-xl transition duration-300 transform hover:-translate-y-0.5">
            <Icon className={`h-10 w-10 mx-auto mb-4 ${colorClass}`} />
            <p className="text-4xl font-extrabold text-gray-900">{value}</p>
            <p className="mt-1 text-base font-semibold text-gray-600">{label}</p>
        </div>
    );

    return (
        <div className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <StatCard 
                        value={stats.totalApps} 
                        label="Active Apps"
                        Icon={ActiveAppIcon}
                        colorClass="text-blue-600"
                    />
                    <StatCard 
                        value={stats.totalDownloads} 
                        label="Total Downloads"
                        Icon={DownloadIcon}
                        colorClass="text-purple-600"
                    />
                    <StatCard 
                        value={stats.totalReviews}
                        label="Total Reviews" 
                        Icon={ReviewIcon}
                        colorClass="text-green-600"
                    />
                </div>
            </div>
        </div>
    );
};


const TopAppsSection = ({ apps, navigate }) => {
    
    const topApps = useMemo(() => {
        return apps.sort((a, b) => b.ratingAvg - a.ratingAvg).slice(0, 8);
    }, [apps]);

    return (
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-10 border-b pb-4 border-gray-200">
                <h2 className="text-3xl font-extrabold text-gray-900">Top Rated Apps</h2>
                <span 
                    onClick={() => navigate('/apps')}
                    className="text-lg font-medium text-purple-600 hover:text-purple-800 transition duration-150 flex items-center cursor-pointer"
                >
                    Show All &rarr;
                </span>
            </div>
            
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {topApps.map((app) => (
                    <AppCard key={app.id} app={app} navigate={navigate} />
                ))}
            </div>
        </div>
    );
};


// Footer Component
const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    
                    
                    <div className="col-span-2 md:col-span-1">
                        <span className="text-2xl font-extrabold tracking-tight text-purple-400">
                            App<span className="text-white">Central</span>
                        </span>
                        <p className="mt-4 text-sm text-gray-400">
                            Your definitive source for discovering the next generation of digital tools.
                        </p>
                    </div>

                    
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Site Map</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="text-gray-400 hover:text-purple-400 transition">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-purple-400 transition">Careers</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-purple-400 transition">Privacy Policy</a></li>
                        </ul>
                    </div>

                    
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="text-gray-400 hover:text-purple-400 transition">Developers</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-purple-400 transition">Press Kit</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-purple-400 transition">Contact Support</a></li>
                        </ul>
                    </div>

                    
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
                        <a 
                            href="https://github.com/your-profile" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center text-gray-400 hover:text-purple-400 transition text-sm"
                        >
                            <GitHubIcon className="h-5 w-5 mr-2" />
                            GitHub
                        </a>
                    </div>
                </div>

                
                <div className="mt-10 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p>&copy; {currentYear} AppCentral. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};




const HomePage = ({ apps, navigate }) => (
    <>
        <HeroSection />
        <StatsSection apps={apps} />
        <TopAppsSection apps={apps} navigate={navigate} />
    </>
);

const AllAppsPage = ({ navigate }) => (
    <div className="max-w-7xl mx-auto p-8 text-center min-h-[60vh]">
        <h1 className="text-4xl font-bold mt-20">All Apps Page Placeholder</h1>
        <p className="mt-4 text-lg text-gray-600">This page will display the full catalog of applications.</p>
        <button 
            onClick={() => navigate('/')} 
            className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
        >
            Go Home
        </button>
    </div>
);

const AppDetailsPage = ({ appId, navigate }) => {
    const app = APP_DATA.find(a => a.id === appId);
    
    return (
        <div className="max-w-7xl mx-auto p-8 text-center min-h-[60vh]">
            <h1 className="text-4xl font-bold mt-20">App Details Placeholder</h1>
            {app ? (
                <div className="mt-4">
                    <p className="text-2xl text-purple-600">{app.title}</p>
                    <p className="text-lg text-gray-600">ID: {app.id}</p>
                    <p className="text-md text-gray-500">{app.description}</p>
                </div>
            ) : (
                <p className="text-lg text-red-500">App not found.</p>
            )}
            <button 
                onClick={() => navigate('/')} 
                className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
            >
                Go Home
            </button>
        </div>
    );
};

const InstallationPage = ({ navigate }) => (
    <div className="max-w-7xl mx-auto p-8 text-center min-h-[60vh]">
        <h1 className="text-4xl font-bold mt-20">Installation Guide Placeholder</h1>
        <p className="mt-4 text-lg text-gray-600">Detailed instructions on how to install and use our applications.</p>
        <button 
            onClick={() => navigate('/')} 
            className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
        >
            Go Home
        </button>
    </div>
);




const App = () => {
  
    const [currentPath, setCurrentPath] = useState('/');
    const navigate = (path) => setCurrentPath(path);
    
   
    const renderContent = () => {
        if (currentPath === '/') {
            return <HomePage apps={APP_DATA} navigate={navigate} />;
        }
        if (currentPath === '/apps') {
            return <AllAppsPage navigate={navigate} />;
        }
        if (currentPath === '/installation') {
            return <InstallationPage navigate={navigate} />;
        }
        if (currentPath.startsWith('/app-details/')) {
            const pathParts = currentPath.split('/');
            const appId = parseInt(pathParts[2], 10);
            return <AppDetailsPage appId={appId} navigate={navigate} />;
        }
        
       
        return (
            <div className="text-center p-20 min-h-[60vh]">
                <h1 className="text-6xl font-black text-red-500">404</h1>
                <p className="mt-4 text-xl text-gray-700">Page not found.</p>
                <button 
                    onClick={() => navigate('/')} 
                    className="mt-6 px-6 py-2 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition"
                >
                    Go Back Home
                </button>
            </div>
        );
    };

    return (
        <div className="min-h-screen flex flex-col font-sans antialiased">
            <Header currentPath={currentPath} navigate={navigate} />
            
            <main className="flex-grow">
                {renderContent()}
            </main>

            <Footer />
        </div>
    );
};

export default App;
