// src/components/SignOutButton.js

import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * SignOutButton component for logging out the user.
 * @returns {JSX.Element} Rendered sign-out button.
 */
const SignOutButton = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Clear the user data (for now, just use localStorage or sessionStorage)
    localStorage.removeItem('user');  // Assuming user data is stored here
    navigate('/login');  // Redirect to login page after logout
  };

  return <button onClick={handleSignOut}>Sign Out</button>;
};

export default SignOutButton;
