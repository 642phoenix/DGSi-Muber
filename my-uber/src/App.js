import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageLayout from './components/layout/PageLayout';
import HomePage from './pages/HomePage';
import RequestRidePage from './pages/RequestRidePage';
import OfferRidePage from './pages/OfferRidePage';
import './main.css';

/**
 * App component initializes Router and sets up main navigation routes.
 */
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageLayout><HomePage /></PageLayout>} />
        <Route path="/request-ride" element={<PageLayout><RequestRidePage /></PageLayout>} />
        <Route path="/offer-ride" element={<PageLayout><OfferRidePage /></PageLayout>} />
      </Routes>
    </Router>
  );
}

export default App;


