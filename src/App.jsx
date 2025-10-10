
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AllAppsPage from './pages/AllAppsPage';
import AppDetailsPage from './pages/AppDetailsPage';
import ErrorPage from './pages/ErrorPage';
import Loading from './components/Loading';
import appData from './appData.json'; // Import your data

function App() {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulate data fetching with a delay for the loading animation
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setApps(appData);
      setLoading(false);
    }, 1000); 
    return () => clearTimeout(timer);
  }, []);

  // Show a global loading screen during initial app load
  if (loading) {
    return <Loading />;
  }

  return (
    <Router>
      <Toaster /> {/* Success Toast container */}
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage apps={apps} />} />
            <Route path="/home" element={<HomePage apps={apps} />} />
            <Route path="/apps" element={<AllAppsPage allApps={apps} />} />
            <Route path="/installation" element={<div className="p-8 text-center text-xl">Installation Instructions Page (Placeholder)</div>} />
            <Route path="/app/:appId" element={<AppDetailsPage apps={apps} />} />
            <Route path="*" element={<ErrorPage />} /> 
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;