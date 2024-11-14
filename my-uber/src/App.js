import './main.css';

// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import RequestRidePage from './pages/RequestRidePage';
import OfferRidePage from './pages/OfferRidePage';
import ProtectedRoute from './components/ProtectedRoute';
import Header from './components/layout/Header';
import NotFoundPage from './pages/NotFoundPage';

/**
 * Main App component with routing and layout.
 * @returns {JSX.Element} Rendered app with all routes.
 */
const App = () => {
  return (
    <Router>
      <Header /> {/* Show header with links */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route path="/request-ride" element={<RequestRidePage />} />
        <Route path="/offer-ride" element={<OfferRidePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
