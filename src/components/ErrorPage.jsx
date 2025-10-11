import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center">
      <h1 className="text-6xl font-extrabold text-indigo-600 mb-4">404</h1>
      <p className="text-2xl font-semibold mb-2">Oops! Page Not Found</p>
      <p className="text-gray-600 mb-6 max-w-md">
        The page you are looking for might have been removed or is temporarily
        unavailable.
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
      >
        Go Home
      </button>
    </div>
  );
};

export default ErrorPage;
