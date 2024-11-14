// src/pages/ProfilePage.js

import React, { useState, useEffect } from 'react';
import SignOutButton from '../components/SignOutButton'; // Importing SignOutButton
import EditProfileForm from '../components/EditProfileForm'; // Importing the EditProfileForm component

/**
 * ProfilePage component for displaying and editing user profile.
 * @returns {JSX.Element} Rendered profile page.
 */
const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false); // State to toggle edit mode

  useEffect(() => {
    const fetchUserProfile = async () => {
      // Simulate fetching user data (you can replace this with actual API call)
      const storedUser = JSON.parse(localStorage.getItem('user'));
      setUser(storedUser);
    };

    fetchUserProfile();
  }, []);

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev); // Toggle the editing state
  };

  if (!user) {
    return <div>Loading...</div>; // Loading message until the user data is loaded
  }

  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>

      {/* If not editing, show the Edit Profile button */}
      {!isEditing && (
        <button onClick={handleEditToggle}>Edit Profile</button>
      )}

      {/* Show EditProfileForm if in editing mode */}
      {isEditing && <EditProfileForm user={user} setUser={setUser} />}

      <SignOutButton />
    </div>
  );
};

export default ProfilePage;
