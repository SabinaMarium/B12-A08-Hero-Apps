import React from "react";
import { Link } from "react-router-dom";

export default function Footer(){
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <img src="/assets/logo.png" alt="logo" className="w-10 h-10"/>
            <div>
              <div className="font-semibold text-white">HERO.IO</div>
              <div className="text-sm text-slate-400">Productive apps, made with care.</div>
            </div>
          </div>
        </div>
        <div className="text-sm">
          <div className="font-semibold text-white mb-2">Quick Links</div>
          <ul className="space-y-1">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/apps" className="hover:text-white">Apps</Link></li>
            <li><Link to="/installation" className="hover:text-white">Installation</Link></li>
          </ul>
        </div>
        <div className="text-sm">
          <div className="font-semibold text-white mb-2">Follow</div>
          <div className="text-slate-400">GitHub | Twitter | LinkedIn</div>
        </div>
      </div>
      <div className="bg-slate-800 text-slate-500 text-xs py-3 text-center">© {new Date().getFullYear()} HERO.IO. All rights reserved.</div>
    </footer>
  );
}
