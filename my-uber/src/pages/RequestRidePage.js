import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { submitRideRequest, submitRideOffer } from '../utils/api';


/**
 * RequestRidePage component enables users to input details for requesting a ride.
 * @returns {JSX.Element} A form for requesting a ride with pickup and drop-off information.
 */
function RequestRidePage() {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropOffLocation, setDropOffLocation] = useState('');
  const [pickupTime, setPickupTime] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestData = {
      pickupLocation,
      dropOffLocation,
      pickupTime,
    };

    try {
      // Call the API function with the request data
      await submitRideRequest(requestData);
      console.log('Ride request submitted:', requestData);
      // Clear the form (optional)
      setPickupLocation('');
      setDropOffLocation('');
      setPickupTime('');
    } catch (error) {
      console.error('Error submitting ride request:', error);
    }
  };

  return (
    <div className="request-ride-page">
      <h2>Request a Ride</h2>
      <form className="request-ride-page__form" onSubmit={handleSubmit}>
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
          Desired Pickup Time:
          <input
            type="datetime-local"
            value={pickupTime}
            onChange={(e) => setPickupTime(e.target.value)}
            required
          />
        </label>
        <button type="submit" className="form__submit-button">Submit Request</button>
      </form>
    </div>
  );
}

export default RequestRidePage;
