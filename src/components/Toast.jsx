import React from "react";

const Toast = ({ message }) => {
  return (
    <div className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg animate-bounce">
      {message}
    </div>
  );
};

export default Toast;
