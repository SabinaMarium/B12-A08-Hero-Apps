import React from "react";

const StatsCard = ({ title, value }) => (
  <div className="bg-white shadow rounded-2xl p-6 text-center hover:shadow-md transition">
    <h3 className="text-2xl font-bold text-indigo-600">{value}</h3>
    <p className="text-gray-600">{title}</p>
  </div>
);

export default StatsCard;
