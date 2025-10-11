import React from "react";

const Banner = () => {
  return (
    <section className="text-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20 rounded-3xl shadow-lg">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">
        Discover Amazing Apps
      </h1>
      <p className="text-lg text-indigo-100 mb-6 max-w-2xl mx-auto">
        Find, install, and explore the best apps that make your life easier and smarter.
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="https://www.apple.com/app-store/"
          target="_blank"
          className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-indigo-200 transition"
        >
          App Store
        </a>
        <a
          href="https://play.google.com/"
          target="_blank"
          className="bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-800 transition"
        >
          Play Store
        </a>
      </div>
    </section>
  );
};

export default Banner;
