import React from "react";
export default function Toast({ message }){
  return (
    <div className="fixed right-6 bottom-6 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
      {message}
    </div>
  );
}
