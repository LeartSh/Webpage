import React from 'react';
import '../search/search.css'; // Corrected import path
import Navbar from '../Navbar';

function Search() {
  return (
    <>
      <Navbar />
      {/* Search Content */}
      <div id="div1">
          <h1 id="H1">Search</h1>
          <p id="p1">A poem in every bottle</p>
      </div>

      <div id="div2">
          <h1 id="H1">Find What You're Looking For</h1>
          <p id="p1">Search our products and more.</p>
      </div>

      <div id="div3"></div>

      {/* Footer */}
      <footer id="footer">
          <h3 id="Privacy">Privacy Policy</h3>
          <Link to="/main"><p id="Returns">Return</p></Link>
          <p id="V2025">2025 <span id="span1">designed by Leart Shulina</span></p>
          <p id="Quote">A poem in every bottle</p>
          <p id="Spam">Labi wine</p>
      </footer>

      {/* Scroll to top button */}
      {/* Removed <a className="gotop" href="#"><i className="fa-solid fa-arrow-up"></i></a> as it caused ESLint warnings */}
    </>
  );
}

export default Search;