import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import appData from "./appData";
import LoadingSpinner from "./LoadingSpinner";
import AppCard from "./AppCard";

const Apps = () => {
  const [search, setSearch] = useState("");
  const [filteredApps, setFilteredApps] = useState(appData);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const delay = setTimeout(() => {
      const result = appData.filter((app) =>
        app.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredApps(result);
      setLoading(false);
    }, 400);

    return () => clearTimeout(delay);
  }, [search]);

  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">All Apps</h1>
        <p className="text-gray-600">Explore all available apps below</p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <p className="text-gray-700 font-medium mb-2 sm:mb-0">
          Total Apps: {filteredApps.length}
        </p>
        <input
          type="text"
          placeholder="Search apps..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-lg px-4 py-2 w-full sm:w-64 focus:ring-2 focus:ring-indigo-500 outline-none"
        />
      </div>

      {loading ? (
        <LoadingSpinner />
      ) : filteredApps.length === 0 ? (
        <p className="text-center text-gray-500">No App Found 😕</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredApps.map((app) => (
            <AppCard
              key={app.id}
              app={app}
              onClick={() => navigate(`/apps/${app.id}`)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Apps;
