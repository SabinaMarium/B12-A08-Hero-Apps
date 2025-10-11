import React from "react";
import Banner from "./Banner";
import StatsCard from "./StatsCard";
import AppCard from "./AppCard";
import appData from "./appData";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const topApps = appData.slice(0, 8);

  const stats = [
    { title: "Downloads", value: "25M+" },
    { title: "Apps Available", value: "12" },
    { title: "Active Users", value: "10M+" },
  ];

  return (
    <div>
      <Banner />

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-12">
        {stats.map((s, i) => (
          <StatsCard key={i} title={s.title} value={s.value} />
        ))}
      </div>

      {/* Top Apps */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Top Apps</h2>
          <button
            onClick={() => navigate("/apps")}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Show All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {topApps.map((app) => (
            <AppCard
              key={app.id}
              app={app}
              onClick={() => navigate(`/apps/${app.id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
