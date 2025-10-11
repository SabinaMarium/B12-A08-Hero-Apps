import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Apps", path: "/apps" },
    { name: "Installation", path: "/installation" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div
          className="text-2xl font-bold text-indigo-600 cursor-pointer"
          onClick={() => navigate("/")}
        >
          HeroApps
        </div>

        <nav className="flex gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-gray-700 font-medium hover:text-indigo-600 transition ${
                  isActive ? "text-indigo-600 underline" : ""
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <a
          href="https://github.com/SabinMarium"
          target="_blank"
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Contribute
        </a>
      </div>
    </header>
  );
};

export default Header;
