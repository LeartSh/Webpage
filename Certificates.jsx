import React from 'react';
import '../galeria/certificates.css'; // Updated path to point to location inside src
import { Link } from 'react-router-dom';

function Certificates() {
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

      {/* Assuming other content from certificates.html will go here */}
      {/* Based on the provided HTML, it only contained the navbar. 
          You will need to manually add the rest of the certificates content here if it's missing from the HTML. */}

    </>
  );
}

export default Certificates; 