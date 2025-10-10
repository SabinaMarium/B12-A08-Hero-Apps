
import React, { useState, useEffect } from 'react';

import { Outlet, useLocation } from 'react-router-dom'; 
import { Toaster } from 'react-hot-toast';

import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';



function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  
  useEffect(() => {
    
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300); 
    
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Toaster />
      <Header />
      
      <main className="flex-grow">
        
        {loading && <Loading />} 

        
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;