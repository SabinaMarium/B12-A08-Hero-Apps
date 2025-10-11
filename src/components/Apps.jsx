import React, { useEffect, useMemo, useState } from "react";
import appData from "./appData";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

export default function Apps(){
  const [query, setQuery] = useState("");
  const [searching, setSearching] = useState(false);
  const navigate = useNavigate();

  const filtered = useMemo(()=>{
    if(!query) return appData;
    return appData.filter(a => a.title.toLowerCase().includes(query.toLowerCase()));
  }, [query]);

  useEffect(()=>{
    if(query){
      setSearching(true);
      const t = setTimeout(()=> setSearching(false), 300);
      return ()=> clearTimeout(t);
    } else setSearching(false);
  }, [query]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-6">
        <h2 className="text-3xl font-bold">Trending Apps</h2>
        <p className="text-slate-500">Explore All Trending Apps on the Market developed by us</p>
      </div>

      <div className="flex items-center justify-between mb-6 gap-4">
        <div className="text-sm text-slate-700">Total <strong>{appData.length}</strong> apps</div>
        <div className="flex items-center gap-3">
          <input value={query} onChange={e=> setQuery(e.target.value)} placeholder="Search apps..." className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
          {searching && <LoadingSpinner small />}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-12 text-slate-500">No App Found</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map(app=>(
            <div key={app.id} onClick={()=> navigate(`/apps/${app.id}`)} className="bg-white rounded-2xl shadow p-4 hover:shadow-lg cursor-pointer">
              <img src={app.image} alt={app.title} className="w-full h-40 object-cover rounded-lg mb-3"/>
              <div className="font-semibold">{app.title}</div>
              <div className="text-sm text-slate-500">{app.companyName}</div>
              <div className="mt-2 flex justify-between text-sm">
                <div className="text-green-600">⬇ {Math.round(app.downloads/1000000)}M</div>
                <div className="bg-amber-100 px-2 py-1 rounded">⭐ {app.ratingAvg}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
