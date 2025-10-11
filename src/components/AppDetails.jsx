import React, { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import appData from "./appData";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import Toast from "./Toast";

export default function AppDetails(){
  const { id } = useParams();
  const app = useMemo(()=> appData.find(a=> String(a.id) === String(id)), [id]);
  const [installed, setInstalled] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(()=> { setInstalled(false); setShowToast(false); }, [id]);

  if(!app) return (
    <div className="py-24 text-center">
      <h2 className="text-2xl font-semibold">App Not Found</h2>
      <p className="mt-3 text-slate-500">We couldn't find that app. <Link to="/apps" className="text-indigo-600">Back to apps</Link></p>
    </div>
  );

  const chartData = app.ratings.map(r => ({ name: r.name.replace(' star',''), count: r.count }));

  function handleInstall(){
    setInstalled(true);
    setShowToast(true);
    setTimeout(()=> setShowToast(false), 2500);
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3 bg-white rounded-2xl p-6 shadow">
          <img src={app.image} alt={app.title} className="w-full h-64 object-cover rounded-lg mb-4"/>
          <div className="font-bold text-lg">{app.title}</div>
          <div className="text-sm text-slate-500">{app.companyName}</div>
          <div className="mt-4 flex gap-3">
            <div className="px-3 py-2 bg-emerald-50 rounded text-sm">Downloads: {app.downloads.toLocaleString()}</div>
            <div className="px-3 py-2 bg-amber-50 rounded text-sm">⭐ {app.ratingAvg}</div>
          </div>
          <button onClick={handleInstall} disabled={installed} className={`mt-6 w-full px-4 py-2 rounded ${installed ? 'bg-slate-300' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}>
            {installed ? 'Installed' : 'Install'}
          </button>
        </div>

        <div className="flex-1 bg-white rounded-2xl p-6 shadow">
          <h3 className="text-xl font-semibold mb-4">App Reviews</h3>
          <div style={{height: 240}}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} layout="vertical" margin={{top:5,right:20,left:20,bottom:5}}>
                <XAxis type="number" />
                <YAxis type="category" dataKey="name" />
                <Tooltip />
                <Bar dataKey="count" fill="#6C46F2" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <h3 className="text-xl font-semibold mt-6">Description</h3>
          <p className="mt-2 text-slate-600">{app.description}</p>
        </div>
      </div>

      {showToast && <Toast message="Installed successfully 🎉" />}
    </div>
  );
}
