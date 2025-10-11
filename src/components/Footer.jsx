import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="container mx-auto px-6 py-8 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} HeroApps. Built with 💜 using React &
          Tailwind CSS.
        </p>
        <p className="text-xs mt-1">Your creativity defines your app world.</p>
      </div>
    </footer>
  );
};

export default Footer;
