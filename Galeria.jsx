import React from 'react';
import '../galeria/galeria.css'; // Updated path to point to location inside src

function Galeria() {
  return (
    <>
      {/* Navbar - Assuming the navbar will be a separate component or included in App.js later */}
      {/* For now, including it here for structure, but will likely refactor */}
      <div className="navbar">
          <div className="navbar-container">
              <a href="/main"><img id="image1" src="Labi wine logo.png" alt="Labi wine"/></a>
              <ul className="navbar-menu">
                  <li><a href="/main" id="li1">Home</a></li>
                  <li className="dropdown">
                      <a href="/vreshtat"><button className="dropdown-button">Wineyards</button></a>
                      <div className="dropdown-content">
                          <a href="/galeria">Gallery</a>
                          <a href="/galeria/certificates">Certificates</a>
                      </div>
                  </li>
                  <li><a href="/history" id="li2">History</a></li>
                  <li><a href="/shop" id="li3">Shop</a></li>
                  <li><a href="/contact" id="li4">Contact</a></li>
              </ul>
              <div className="navbar-icons">
                  <a href="/search"><img id="icon1" src="icons8-search-100.png" alt=""/></a>
                  <a href="/login"><img id="icon2" src="icons8-user-100.png" alt=""/></a>
                  <a href="/shop"><img id="icon3" src="icons8-shop-100.png" alt=""/></a>
              </div>
          </div>
      </div>

      {/* Assuming other content from galeria.html will go here */}
      {/* Based on the provided HTML, it only contained the navbar. 
          You will need to manually add the rest of the gallery content here if it's missing from the HTML. */}

    </>
  );
}

export default Galeria; 