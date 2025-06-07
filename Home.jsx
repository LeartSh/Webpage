import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to LABI WINE</h1>
          <p>Discover the finest wines from our vineyards</p>
          <Link to="/shop" className="btn">Explore Our Wines</Link>
        </div>
      </section>

      <section className="featured">
        <div className="container">
          <div className="section-title">
            <h2>Our Featured Wines</h2>
            <p>Experience the taste of tradition and excellence</p>
          </div>
          <div className="featured-grid">
            <div className="featured-item">
              <img src="/images/wine1.jpg" alt="Red Wine" />
              <h3>Premium Red Wine</h3>
              <p>A rich and full-bodied red wine with notes of dark fruits</p>
              <Link to="/shop" className="btn">Learn More</Link>
            </div>
            <div className="featured-item">
              <img src="/images/wine2.jpg" alt="White Wine" />
              <h3>Classic White Wine</h3>
              <p>A crisp and refreshing white wine with citrus undertones</p>
              <Link to="/shop" className="btn">Learn More</Link>
            </div>
            <div className="featured-item">
              <img src="/images/wine3.jpg" alt="Rose Wine" />
              <h3>Elegant Rose Wine</h3>
              <p>A delicate rose wine with floral and berry notes</p>
              <Link to="/shop" className="btn">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="about-preview">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>For generations, we have been crafting exceptional wines that capture the essence of our vineyards. Our commitment to quality and tradition has made us one of the most respected wineries in the region.</p>
              <Link to="/history" className="btn">Learn More About Us</Link>
            </div>
            <div className="about-image">
              <img src="/images/vineyard.jpg" alt="Our Vineyard" />
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Ready to Experience Our Wines?</h2>
          <p>Visit our shop to explore our collection of premium wines</p>
          <Link to="/shop" className="btn">Shop Now</Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 