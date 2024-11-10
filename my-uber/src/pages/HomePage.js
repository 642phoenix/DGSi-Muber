import React from 'react';
import { Link } from 'react-router-dom';

/**
 * HomePage component is the entry point for users, allowing them to choose
 * between requesting or offering a ride.
 */
function HomePage() {
  return (
    <div className="home-page">
      <h2 className="home-page__title">Welcome to the Travel App</h2>
      <p className="home-page__description">Select an option to get started:</p>
      <div className="home-page__actions">
        <Link to="/request-ride" className="home-page__action-button">Request a Ride</Link>
        <Link to="/offer-ride" className="home-page__action-button">Offer a Ride</Link>
      </div>
    </div>
  );
}

export default HomePage;
