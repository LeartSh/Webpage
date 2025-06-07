import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link to="/" className="logo" onClick={closeMenu}>
          LABI WINE
        </Link>

        <div className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={closeMenu}>Home</Link></li>
          <li><Link to="/gallery" className={location.pathname === '/gallery' ? 'active' : ''} onClick={closeMenu}>Gallery</Link></li>
          <li><Link to="/history" className={location.pathname === '/history' ? 'active' : ''} onClick={closeMenu}>History</Link></li>
          <li><Link to="/wineyards" className={location.pathname === '/wineyards' ? 'active' : ''} onClick={closeMenu}>Wineyards</Link></li>
          <li><Link to="/certificates" className={location.pathname === '/certificates' ? 'active' : ''} onClick={closeMenu}>Certificates</Link></li>
          <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={closeMenu}>Contact</Link></li>
          <li><Link to="/search" className={location.pathname === '/search' ? 'active' : ''} onClick={closeMenu}><i className="fas fa-search"></i></Link></li>
          <li><Link to="/login" className={location.pathname === '/login' ? 'active' : ''} onClick={closeMenu}><i className="fas fa-user"></i></Link></li>
          <li><Link to="/shop" className={location.pathname === '/shop' ? 'active' : ''} onClick={closeMenu}><i className="fas fa-shopping-bag"></i></Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 