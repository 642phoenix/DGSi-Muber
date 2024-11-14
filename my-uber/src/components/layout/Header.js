// src/components/layout/Header.js

import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Header component with links for navigation.
 * @returns {JSX.Element} Rendered header with links.
 */
const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/signup">Sign Up</Link>
      </nav>
    </header>
  );
};

export default Header;
