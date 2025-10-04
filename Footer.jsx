import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>LABI WINE</h3>
            <p>Discover the finest wines from our vineyards, crafted with passion and tradition.</p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/main">Home</Link></li>
              <li><Link to="/galeria">Gallery</Link></li>
              <li><Link to="/history">History</Link></li>
              <li><Link to="/vreshtat">Wineyards</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Us</h4>
            <ul className="contact-info">
              <li><i className="fas fa-map-marker-alt"></i> 123 Wine Street, Vineyard City</li>
              <li><i className="fas fa-phone"></i> +1 234 567 890</li>
              <li><i className="fas fa-envelope"></i> info@labiwine.com</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} LABI WINE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 