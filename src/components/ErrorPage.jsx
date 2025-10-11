import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage(){
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-indigo-600">404</h1>
        <p className="mt-4 text-slate-600">The page you're looking for doesn't exist.</p>
        <Link to="/" className="inline-block mt-6 px-5 py-2 bg-indigo-600 text-white rounded">Back Home</Link>
      </div>
    </div>
  );
}
