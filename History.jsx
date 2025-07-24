import React from 'react';
import '../history/history.css'; // Updated path to point to location inside src
import Navbar from '../Navbar';

function History() {
  return (
    <>
      <Navbar />
      {/* History Content */}
      <div id="div2">
          <h1 id="H1">History</h1>
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

export default History; 