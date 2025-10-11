import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Correction applied: Added .jsx extension to all local component imports
import Header from './components/pages/Header.jsx';
import Footer from './components/pages/Footer.jsx';
import Home from './components/pages/Home.jsx';
import AllApps from './components/pages/AllApps.jsx';
import AppDetails from './components/pages/AppDetails.jsx';
import Installation from './components/pages/Installation.jsx';
import ErrorPage from './components/pages/ErrorPage.jsx';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apps" element={<AllApps />} />
            {/* Dynamic route for individual app details */}
            <Route path="/app-details/:id" element={<AppDetails />} />
            <Route path="/installation" element={<Installation />} />
            
            {/* Catch-all route for 404 errors */}
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;