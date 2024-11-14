import Ride from '../models/Ride.js';

// Submit Ride Request
export const submitRideRequest = async (req, res) => {
    try {
        const { userId, rideDetails } = req.body;

        // Create a new ride request
        const newRideRequest = new Ride({ userId, rideDetails });

        // Save the ride request to the database
        await newRideRequest.save();

        res.status(201).json({ message: 'Ride request submitted successfully', data: newRideRequest });
    } catch (error) {
        console.log(userId, rideDetails)
        console.error("Error submitting ride request:", error);
        res.status(500).json({ message: 'Server error while submitting ride request' });
    }
};

// Submit Ride Offer
export const submitRideOffer = async (req, res) => {
    try {
        const { userId, rideDetails } = req.body;

        // Create a new ride offer
        const newRideOffer = new Ride({ userId, rideDetails });

        // Save the ride offer to the database
        await newRideOffer.save();

        res.status(201).json({ message: 'Ride offer submitted successfully', data: newRideOffer });
    } catch (error) {
        console.error("Error submitting ride offer:", error);
        res.status(500).json({ message: 'Server error while submitting ride offer' });
    }
};
