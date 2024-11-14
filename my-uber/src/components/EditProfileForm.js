// src/components/EditProfileForm.js

import React, { useState } from 'react';

/**
 * Form component for editing user profile.
 * @param {Object} user - The current user data to populate in the form.
 * @param {Function} setUser - Function to update user data after edit.
 * @returns {JSX.Element} The edit profile form.
 */
const EditProfileForm = ({ user, setUser }) => {
  const [editedUser, setEditedUser] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate an API call to update user data
    console.log('Updated user data:', editedUser);

    // Update the local user state
    setUser(editedUser);
    localStorage.setItem('user', JSON.stringify(editedUser)); // Store updated data in localStorage
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={editedUser.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={editedUser.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="text"
          name="phone"
          value={editedUser.phone}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditProfileForm;
