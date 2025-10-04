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
          <Link to="/main"><img src="Labi wine logo.png" alt="Labi wine" /></Link>
        </div>
        <div className="menu-toggle" id="mobile-menu" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
        <ul className={`navbar-menu${isMenuOpen ? ' active' : ''}`} id="navbar-menu">
          <li><Link to="/main">Home</Link></li>
          <li className="dropdown">
            <Link to="/vreshtat">Wineyards</Link>
            <div className="dropdown-content">
              <Link to="/galeria">Gallery</Link>
              <Link to="/certificates">Certificates</Link>
            </div>
          </li>
          <li><Link to="/history">History</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="navbar-icons" id="navbar-icons">
          <Link to="/search"><i className="fas fa-search"></i></Link>
          <Link to="/login"><i className="fas fa-user"></i></Link>
          <Link to="/shop"><i className="fas fa-shopping-bag"></i></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar; 