import React from "react";
export default function LoadingSpinner({ small }){
  const size = small ? 6 : 10;
  return (
    <div className={`flex items-center justify-center ${small ? '' : 'py-6'}`}>
      <div className={`animate-spin rounded-full border-4 border-indigo-600 border-t-transparent`} style={{width: size*4, height: size*4}} />
    </div>
  );
}
