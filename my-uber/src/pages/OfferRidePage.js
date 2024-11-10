import React, { useState } from 'react';
import { submitRideOffer } from '../utils/api';

/**
 * OfferRidePage component enables users to input details for offering a ride.
 * @returns {JSX.Element} A form for offering a ride with pickup, drop-off, and departure time.
 */
function OfferRidePage() {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropOffLocation, setDropOffLocation] = useState('');
  const [departureTime, setDepartureTime] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const offerData = {
      pickupLocation,
      dropOffLocation,
      departureTime,
    };

    try {
      // Call the API function with the offer data
      await submitRideOffer(offerData);
      console.log('Ride offer submitted:', offerData);
      // Clear the form (optional)
      setPickupLocation('');
      setDropOffLocation('');
      setDepartureTime('');
    } catch (error) {
      console.error('Error submitting ride offer:', error);
    }
  };

  return (
    <div className="offer-ride-page">
      <h2>Offer a Ride</h2>
      <form className="offer-ride-page__form" onSubmit={handleSubmit}>
        <label>
          Pickup Location:
          <input
            type="text"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            placeholder="Enter pickup location"
            required
          />
        </label>
        <label>
          Drop-off Location:
          <input
            type="text"
            value={dropOffLocation}
            onChange={(e) => setDropOffLocation(e.target.value)}
            placeholder="Enter drop-off location"
            required
          />
        </label>
        <label>
          Departure Time:
          <input
            type="datetime-local"
            value={departureTime}
            onChange={(e) => setDepartureTime(e.target.value)}
            required
          />
        </label>
        <button type="submit" className="form__submit-button">Publish Ride Offer</button>
      </form>
    </div>
  );
}

export default OfferRidePage;
