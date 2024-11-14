import mongoose from 'mongoose';

const rideSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    rideDetails: {
        pickup: { type: String, required: true },
        dropoff: { type: String, required: true },
        time: { type: Date, required: true },
    }
});

const Ride = mongoose.model('Ride', rideSchema);

export default Ride;
