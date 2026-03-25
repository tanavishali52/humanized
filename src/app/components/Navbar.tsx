"use client";

import React, { useState } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [theme, setTheme] = useState<"blue" | "purple" | "mint">("blue");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "blue" ? "purple" : prev === "purple" ? "mint" : "blue";
      document.body.setAttribute('data-theme', next);
      return next;
    });
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="navbar-container">
      <div className="navbar-content">
        <a className="navbar-brand" href="/">
          <div className="navbar-logo-icon">
            <span className="logo-ai">AI</span>
          </div>
          <span className="logo-text">MyDetector</span>
        </a>
        
        <nav className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="/about" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="/plagiarism" onClick={() => setIsMenuOpen(false)}>Plagiarism</a>
          <a href="/#pricing" onClick={() => setIsMenuOpen(false)}>Pricing</a>
          <a href="/#faq" onClick={() => setIsMenuOpen(false)}>FAQ</a>
        </nav>

        <div className="navbar-actions">
          <button
            className="navbar-theme-button"
            aria-label="Change theme color"
            onClick={toggleTheme}
          >
            🎨
          </button>
          
          <button 
            className="hamburger-menu" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
