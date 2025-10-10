import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = ({ message = "The page you are looking for does not exist." }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-16rem)] p-8">
      <h1 className="text-6xl font-extrabold text-indigo-600">404</h1>
      <h2 className="mt-4 text-3xl font-bold text-gray-800">Page Not Found</h2>
      <p className="mt-2 text-lg text-gray-600 text-center">{message}</p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 text-lg font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition duration-300"
      >
        Go to Home Page
      </Link>
    </div>
  );
};

export default ErrorPage;