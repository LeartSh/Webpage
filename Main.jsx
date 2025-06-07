import React from 'react';
import '../main/index.css'; // Updated path to point to location inside src

function Main() {
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

      {/* Main Content */}
      <div id="div1">
          <h1 id="H1">Labi Wine</h1>
          <p id="p1">A poem in every bottle</p>
      </div>

      <div id="div2">
          <h1 id="H1">Our Story</h1>
          <p id="p1">Our ancestors, grandfathers and great-grandfathers, generation after generation, have produced quality grapes, wine and brandy,</p>
          <p id="p1">although with many difficulties and obstacles from various invaders (Ottoman and Serbian).</p>
          <p id="p1">The end of the war in Kosovo in 1999 created the opportunity for us to resume cultivating and preserving our centuries-old tradition.</p>
          <p id="p1">We continued to cultivate according to tradition, producing and selling quality wine, but without brandy.</p>
          <p id="p1">The state of Kosovo has created new opportunities, opening greater prospects for grape growers and local wine producers.</p>
          <p id="p1">We started the work with a few primitive tools and a destroyed family economy.</p>
          <p id="p1">We only had many years of experience and a great love for the grape vine with us.</p>
          <p id="p1">However, this was not enough for a more advanced production, so we also invested in professional development, always based on local tradition.</p>
          <p id="p1">It became clear to us that respecting the norms already practiced worldwide and investing in modern technology is a guarantee for successful production.</p>
          <p id="p1">Therefore, in 2009 we registered our brand LabiWine.</p>
          <p id="p1">This gave us the opportunity to invest in quality and quantity, fulfilling with great dedication the obligations that arise from having a brand.</p>
          <p id="p1">Experience and history were on our side, which is why we say with conviction that we are now a "champion" in quality.</p>
      </div>

      <div id="div3"></div>

      {/* Footer - Assuming the footer will be a separate component or included in App.js later */}
      {/* For now, including it here for structure, but will likely refactor */}
      <footer id="footer">
          <h3 id="Privacy">Privacy Policy</h3>
          <a href="/main"><p id="Returns">Return</p></a>
          <p id="V2025">2025 <span id="span1">designed by Leart Shulina</span></p>
          <p id="Quote">A poem in every bottle</p>
          <p id="Spam">Labi wine</p>
      </footer>

      {/* Scroll to top button */}
      <a className="gotop" href="#"><i className="fa-solid fa-arrow-up"></i></a>
    </>
  );
}

export default Main; 