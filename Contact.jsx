import React from 'react';
import '../contact/contact.css'; // Ensure path points to location inside src
import Navbar from '../Navbar';

function Contact() {
  return (
    <>
      <Navbar />
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