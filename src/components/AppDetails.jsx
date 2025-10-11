import React, { useState } from "react";
import { useParams } from "react-router-dom";
import appData from "./appData";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import Toast from "./Toast";

const AppDetails = () => {
  const { id } = useParams();
  const app = appData.find((a) => a.id === parseInt(id));
  const [installed, setInstalled] = useState(false);
  const [showToast, setShowToast] = useState(false);

  if (!app) {
    return <p className="text-center text-gray-500 mt-10">App Not Found 😕</p>;
  }

  const handleInstall = () => {
    setInstalled(true);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8 items-center mb-10">
        <img
          src={app.image}
          alt={app.title}
          className="w-60 h-60 object-cover rounded-2xl shadow"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">{app.title}</h1>
          <p className="text-gray-500 mb-2">{app.companyName}</p>
          <p className="text-gray-700 mb-2">⭐ {app.ratingAvg} | {app.reviews} reviews</p>
          <p className="text-gray-700 mb-2">⬇ {app.downloads.toLocaleString()} downloads</p>

          <button
            onClick={handleInstall}
            disabled={installed}
            className={`px-6 py-2 mt-3 rounded-lg text-white ${
              installed ? "bg-gray-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            {installed ? "Installed" : "Install"}
          </button>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white p-6 rounded-2xl shadow mb-10">
        <h2 className="text-xl font-semibold mb-4">User Ratings</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={app.ratings}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#6366f1" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Description */}
      <div className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-xl font-semibold mb-3">About this App</h2>
        <p className="text-gray-700">{app.description}</p>
      </div>

      {showToast && <Toast message="App Installed Successfully ✅" />}
    </div>
  );
};

export default AppDetails;
