import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RequestRidePage from './pages/RequestRidePage';
import OfferRidePage from './pages/OfferRidePage';
import SignUpPage from './pages/SignUpPage'; 
import PageLayout from './components/layout/PageLayout';

function App() {
  return (
    <Router>
      <PageLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/request-ride" element={<RequestRidePage />} />
          <Route path="/offer-ride" element={<OfferRidePage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
      </PageLayout>
    </Router>
  );
}

export default App;


