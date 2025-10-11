import React from "react";
import { Link } from "react-router-dom";

export default function AppCard({ app }){
  return (
    <Link to={`/apps/${app.id}`} className="bg-white rounded-2xl shadow p-4 block hover:shadow-lg transition">
      <img src={app.image} alt={app.title} className="w-full h-40 object-cover rounded-lg mb-3"/>
      <div className="font-semibold">{app.title}</div>
      <div className="text-sm text-slate-500">{app.companyName}</div>
      <div className="mt-2 flex justify-between text-sm">
        <div className="text-green-600">⬇ {Math.round(app.downloads/1000000)}M</div>
        <div className="bg-amber-100 px-2 py-1 rounded">⭐ {app.ratingAvg}</div>
      </div>
    </Link>
  );
}
