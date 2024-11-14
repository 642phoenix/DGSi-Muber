import express from 'express';
import { submitRideOffer, submitRideRequest } from '../controllers/rideController.js';

const router = express.Router();

router.post('/rides/offer', submitRideOffer);
router.post('/rides/request', submitRideRequest);

export default router;
