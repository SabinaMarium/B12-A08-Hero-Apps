import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";


export default function Header(){
  const navigate = useNavigate();
  return (
    <header className="bg-white shadow sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button onClick={()=>navigate("/")} className="flex items-center gap-3">
            <img src="/assets/logo.png" alt="Hero.IO" className="w-8 h-8"/>
            <span className="font-semibold text-indigo-600">HERO.IO</span>
          </button>

          <nav className="hidden md:flex gap-8 items-center">
            <NavLink to="/" end className={({isActive}) => isActive ? "text-indigo-600 font-semibold" : "text-slate-700"}>Home</NavLink>
            <NavLink to="/apps" className={({isActive}) => isActive ? "text-indigo-600 font-semibold" : "text-slate-700"}>Apps</NavLink>
            <NavLink to="/installation" className={({isActive}) => isActive ? "text-indigo-600 font-semibold" : "text-slate-700"}>Installation</NavLink>
          </nav>

          <div className="flex items-center">
            <a
  href="https://github.com/SabinaMarium"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
>
  <FaGithub size={20} />
  Contribute
</a>
          </div>
        </div>
      </div>
    </header>
  );
}
