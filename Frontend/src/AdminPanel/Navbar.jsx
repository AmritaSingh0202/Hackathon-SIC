// src/components/AdminPanel/Navbar.js
import React from 'react';

const Navbar = ({ role }) => {
  return (
    <nav style={styles.navbar}>
      <h1>{role === 'admin' ? 'Admin Panel' : 'User Dashboard'}</h1>
      <span>{role === 'admin' ? 'Administrator' : 'User'}</span>
    </nav>
  );
};

const styles = {
  navbar: {
    position: 'fixed',          // Make the navbar fixed
    top: '0',                  // Align to the top
    left: '0',                 // Align to the left
    right: '0',                // Align to the right
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem',
    backgroundColor: '#333',
    color: '#fff',
    zIndex: 1000,              // Ensure it's above other elements
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', 
  }
};

export default Navbar;