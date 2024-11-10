import React, { useState } from 'react';

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    formData.append('name', name);
    formData.append('phone', phone);
    formData.append('selfie', selfie);
    formData.append('inePhoto', inePhoto);

    // Simulate sending data to backend or console log the form data for testing
    console.log('Sign-Up Form Data:', {
      email,
      password,
      name,
      phone,
      selfie,
      inePhoto,
    });

    // Clear form fields after submission (optional)
    setEmail('');
    setPassword('');
    setName('');
    setPhone('');
    setSelfie(null);
    setInePhoto(null);
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
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
          />
        </label>
        <label>
          Phone Number:
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter phone number"
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create password"
            required
          />
        </label>
        <label>
          Selfie (for identity verification):
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setSelfie(e.target.files[0])}
            required
          />
        </label>
        <label>
          INE Photo (for identity verification):
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setInePhoto(e.target.files[0])}
            required
          />
        </label>
        <button type="submit" className="form__submit-button">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpPage;

