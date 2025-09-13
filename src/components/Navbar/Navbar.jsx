import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Logo from '../../assets/images/website-logo.png';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'HOME', href: '#home', active: true },
    { name: 'ABOUT US', href: '#about' },
    { name: 'TEAM', href: '#team' },
    { name: 'PORTFOLIO', href: '#portfolio' },
    { name: 'BLOG', href: '#blog' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Logo */}
          <div className="navbar-logo">
            <div className="logo">
   <img src={Logo} alt="Website Logo" className="logo-image" />
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="navbar-links">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`nav-link ${item.active ? 'nav-link-active' : ''}`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Get Quote Button */}
          <div className="navbar-cta">
            <button className="quote-btn">
              GET A QUOTE
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button 
            className="hamburger"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className={`hamburger-line ${isMobileMenuOpen ? 'line-1-active' : ''}`}></span>
            <span className={`hamburger-line ${isMobileMenuOpen ? 'line-2-active' : ''}`}></span>
            <span className={`hamburger-line ${isMobileMenuOpen ? 'line-3-active' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <div className="mobile-menu-content">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`mobile-nav-link ${item.active ? 'mobile-nav-link-active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <button className="mobile-quote-btn" onClick={() => setIsMobileMenuOpen(false)}>
            GET A QUOTE
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;