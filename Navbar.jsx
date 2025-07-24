import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/main" target="_blank"><img src="Labi wine logo.png" alt="Labi wine" /></Link>
        </div>
        <div className="menu-toggle" id="mobile-menu" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
        <ul className={`navbar-menu${isMenuOpen ? ' active' : ''}`} id="navbar-menu">
          <li><Link to="/main" target="_blank">Home</Link></li>
          <li className="dropdown">
            <Link to="/vreshtat" target="_blank">Wineyards</Link>
            <div className="dropdown-content">
              <Link to="/galeria" target="_blank">Gallery</Link>
              <Link to="/certificates" target="_blank">Certificates</Link>
            </div>
          </li>
          <li><Link to="/history" target="_blank">History</Link></li>
          <li><Link to="/shop" target="_blank">Shop</Link></li>
          <li><Link to="/contact" target="_blank">Contact</Link></li>
        </ul>
        <div className="navbar-icons" id="navbar-icons">
          <Link to="/search" target="_blank"><i className="fas fa-search"></i></Link>
          <Link to="/login" target="_blank"><i className="fas fa-user"></i></Link>
          <Link to="/shop" target="_blank"><i className="fas fa-shopping-bag"></i></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar; 