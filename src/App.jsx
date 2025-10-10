import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Home from './components/pages/Home';
import AllApps from './components/pages/AllApps';
import AppDetails from './components/pages/AppDetails';
import Installation from './components/pages/Installation';
import ErrorPage from './components/pages/ErrorPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apps" element={<AllApps />} />
            <Route path="/app/:id" element={<AppDetails />} />
            <Route path="/installation" element={<Installation />} />
            {/* Catch-all route for 404 */}
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;