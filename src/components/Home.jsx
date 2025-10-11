import React from "react";
import { Link, useNavigate } from "react-router-dom";
import appData from "./appData";

export default function Home() {
  const topApps = appData.slice(0, 8);
  const navigate = useNavigate();

  return (
    <div>
      
      <section className="bg-[url('/assets/hero-bg.png')] bg-cover bg-center">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
              We Build <br />
              <span className="text-indigo-600">Productive</span> Apps
            </h1>
            <p className="max-w-2xl mx-auto mt-4 text-slate-600">
              At HERO.IO, we craft innovative apps designed to make everyday
              life simpler, smarter, and more exciting. <br />
              Our goal is to turn your ideas into digital experiences that truly
              make an impact.
            </p>

            {/* Download Buttons */}
            <div className="mt-6 flex justify-center gap-4">
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border rounded-md bg-white shadow-sm hover:bg-gray-100 transition"
              >
                <img
                  src="/assets/google-play.png"
                  alt="Google Play"
                  className="w-5 h-5"
                />
                Google Play
              </a>
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border rounded-md bg-white shadow-sm hover:bg-gray-100 transition"
              >
                <img
                  src="/assets/app-store.png"
                  alt="App Store"
                  className="w-5 h-5"
                />
                App Store
              </a>
            </div>
          </div>

          
          <div className="mt-12 relative flex justify-center">
            <img
              src="/assets/hero.png"
              alt="Hero Banner"
              className="w-[300px] sm:w-[400px] md:w-[500px]"
            />
          </div>
        </div>
      </section>

      
      <section className="bg-gradient-to-r from-indigo-600 to-pink-500 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center">
          <h2 className="text-2xl font-bold">Trusted By Millions, Built For You</h2>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-3xl font-extrabold">29.6M</div>
              <div className="text-sm">Total Downloads</div>
              <div className="text-xs text-white/70 mt-1">
                21% More Than Last Month
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-3xl font-extrabold">906K</div>
              <div className="text-sm">Total Reviews</div>
              <div className="text-xs text-white/70 mt-1">
                46% More Than Last Month
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-3xl font-extrabold">132+</div>
              <div className="text-sm">Active Apps</div>
              <div className="text-xs text-white/70 mt-1">
                31 More Will Launch
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className=" mb-6">
            <h3 className="text-4xl text-center font-bold">Trending Apps</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topApps.map((app) => (
              <div
                key={app.id}
                className="bg-white rounded-2xl shadow p-4 hover:shadow-lg cursor-pointer"
                onClick={() => navigate(`/apps/${app.id}`)}
              >
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-40 object-cover rounded-lg mb-3"
                />
                <div className="font-semibold">{app.title}</div>
                <div className="text-sm text-slate-500">{app.companyName}</div>
                <div className="mt-3 flex justify-between items-center text-sm">
                  <div className="text-green-600">
                    ⬇ {Math.round(app.downloads / 1000000)}M
                  </div>
                  <div className="bg-amber-100 px-2 py-1 rounded">
                    ⭐ {app.ratingAvg}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Link
              to="/apps"
              className="px-6 py-2 bg-indigo-600 text-white rounded-full shadow hover:bg-indigo-700"
            >
              Show All
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


