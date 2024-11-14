import React, { useState } from 'react';
import { registerUser, uploadIdentityFiles } from '../utils/api';

/**
 * SignUpPage component allows users to sign up with email, password, and upload identity verification files.
 * @returns {JSX.Element} A form for user registration with fields for user details and file uploads.
 */
function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selfie, setSelfie] = useState(null);
  const [inePhoto, setInePhoto] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Call the registerUser API function with basic user details
      await registerUser({ email, password, name, phone });

      // Call the uploadIdentityFiles API function with the uploaded files
      if (selfie && inePhoto) {
        await uploadIdentityFiles(selfie, inePhoto);
      }

      console.log('User registration and file upload successful');
      
      // Clear form fields after successful submission
      setEmail('');
      setPassword('');
      setName('');
      setPhone('');
      setSelfie(null);
      setInePhoto(null);
    } catch (error) {
      console.error('Error during sign-up process:', error);
    }
  };

  return (
    <div className="sign-up-page">
      <h2>Sign Up</h2>
      <form className="sign-up-page__form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter full name"
            required
          />
        </label><br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
          />
        </label><br />
        <label>
          Phone Number:
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter phone number"
            required
          />
        </label><br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create password"
            required
          />
        </label><br />
        <label>
          Selfie (for identity verification):
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setSelfie(e.target.files[0])}
            required
          />
        </label><br />
        <label>
          INE Photo (for identity verification):
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setInePhoto(e.target.files[0])}
            required
          />
        </label><br />
        <button type="submit" className="form__submit-button">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpPage;


