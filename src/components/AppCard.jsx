import React from "react";

const AppCard = ({ app, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-2xl shadow hover:shadow-lg cursor-pointer transition p-4"
    >
      <img
        src={app.image}
        alt={app.title}
        className="w-full h-40 object-cover rounded-xl mb-4"
      />
      <h3 className="font-semibold text-lg mb-1">{app.title}</h3>
      <p className="text-sm text-gray-600">{app.companyName}</p>
      <div className="flex justify-between text-sm mt-2 text-gray-500">
        <span>⬇ {app.downloads.toLocaleString()}</span>
        <span>⭐ {app.ratingAvg}</span>
      </div>
    </div>
  );
};

export default AppCard;
