// src/utils/api.js

import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api'; // Ensure this URL matches your backend

// Register User
export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/register`, userData);
        return response.data;
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
};

// Login User
export const loginUser = async (loginData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, loginData);
        return response.data;
    } catch (error) {
        console.error("Error logging in user:", error);
        throw error;
    }
};

// Submit Ride Offer
export const submitRideOffer = async (offerData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/rides/offer`, offerData);
        return response.data;
    } catch (error) {
        console.error("Error submitting ride offer:", error);
        throw error;
    }
};

// Submit Ride Request
export const submitRideRequest = async (requestData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/rides/request`, requestData);
        return response.data;
    } catch (error) {
        console.error("Error submitting ride request:", error);
        throw error;
    }
};

// Upload Identity Files (Add this export)
export const uploadIdentityFiles = async (fileData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/upload-identity`, fileData);
        return response.data;
    } catch (error) {
        console.error("Error uploading identity files:", error);
        throw error;
    }
};
