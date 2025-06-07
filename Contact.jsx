import React from 'react';
import '../contact/contact.css'; // Ensure path points to location inside src
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <>
      {/* Navbar - Assuming the navbar will be a separate component or included in App.js later */}
      {/* For now, including it here for structure, but will likely refactor */}
      <div className="navbar">
          <div className="navbar-container">
              <Link to="/main"><img id="image1" src="Labi wine logo.png" alt="Labi wine"/></Link>
              <ul className="navbar-menu">
                  <li><Link to="/main" id="li1">Home</Link></li>
                  <li className="dropdown">
                      <Link to="/vreshtat"><button className="dropdown-button">Wineyards</button></Link>
                      <div className="dropdown-content">
                          <Link to="/galeria">Gallery</Link>
                          <Link to="/galeria/certificates">Certificates</Link>
                      </div>
                  </li>
                  <li><Link to="/history" id="li2">History</Link></li>
                  <li><Link to="/shop" id="li3">Shop</Link></li>
                  <li><Link to="/contact" id="li4">Contact</Link></li>
              </ul>
              <div className="navbar-icons">
                  <Link to="/search"><img id="icon1" src="icons8-search-100.png" alt=""/></Link>
                  <Link to="/login"><img id="icon2" src="icons8-user-100.png" alt=""/></Link>
                  <Link to="/shop"><img id="icon3" src="icons8-shop-100.png" alt=""/></Link>
              </div>
          </div>
      </div>

      {/* Contact Content */}
      <div id="div1">
          <h1 id="H1">Contact</h1>
          <p id="p1">A poem in every bottle</p>
      </div>

      <div id="div2">
          <h1 id="H1">Get in Touch</h1>
          <p id="p1">We'd love to hear from you.</p>
      </div>

      <div id="div3"></div>

      {/* Footer - Assuming the footer will be a separate component or included in App.js later */}
      {/* For now, including it here for structure, but will likely refactor */}
      <footer id="footer">
          <h3 id="Privacy">Privacy Policy</h3>
          <Link to="/main"><p id="Returns">Return</p></Link>
          <p id="V2025">2025 <span id="span1">designed by Leart Shulina</span></p>
          <p id="Quote">A poem in every bottle</p>
          <p id="Spam">Labi wine</p>
      </footer>

      {/* Scroll to top button */}
      <a className="gotop" href="#"><i className="fa-solid fa-arrow-up"></i></a>
    </>
  );
}

export default Contact; 