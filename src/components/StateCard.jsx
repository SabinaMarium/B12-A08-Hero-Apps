import React from 'react';

const StateCard = ({ data }) => {
  // Determine color based on index or title for visual variation
  let bgColor = 'bg-purple-600';
  let icon = 'M12 4.5v15M16.5 7.5l-4.5-4.5-4.5 4.5M10.5 16.5l-4.5-4.5 4.5-4.5'; // Arrow up/down

  if (data.title.includes("Reviews")) {
    bgColor = 'bg-pink-600';
    icon = 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1'; // Bell icon
  } else if (data.title.includes("Apps")) {
    bgColor = 'bg-green-600';
    icon = 'M10.5 16.5h2.25V7.5H10.5v9zM6.75 16.5H9v-9H6.75v9zM14.25 16.5h2.25v-9H14.25v9z'; // Bar chart icon
  }
  
  // Clean up the subtext for display
  const isPositive = data.sub.includes("More");
  const subColor = isPositive ? 'text-green-300' : 'text-red-300';

  return (
    <div className={`p-6 rounded-xl shadow-lg ${bgColor} text-white transition duration-300 transform hover:scale-[1.02]`}>
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold opacity-80">{data.title}</h3>
        {/* Simple Icon placeholder */}
        <svg 
            className="w-8 h-8 text-white opacity-70" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icon} />
        </svg>
      </div>
      
      <p className="text-5xl font-extrabold mb-3">{data.value}</p>
      
      <div className="flex items-center text-sm">
        <svg 
            className={`w-4 h-4 mr-1 ${isPositive ? 'text-green-300' : 'text-red-300'}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Conditional arrow icon */}
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isPositive ? "M5 10l7-7m0 0l7 7m-7-7v18" : "M19 14l-7 7m0 0l-7-7m7 7V3"} />
        </svg>
        <span className={subColor}>{data.sub}</span>
      </div>
    </div>
  );
};

export default StateCard;



