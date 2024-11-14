// routes/uploadRoutes.js
import express from 'express';
import { uploadIdentityFiles } from '../controllers/uploadController.js';

const router = express.Router();

router.post('/identity', uploadIdentityFiles);

export default router;
