import React from 'react';
import { FaXTwitter, FaYoutube, FaPinterestP } from 'react-icons/fa6';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-brand-section">
          <div className="footer-logo">
            <div className="logo-icon">
              <span className="logo-ai">AI</span>
              <div className="magnifier-handle"></div>
            </div>
            <span className="logo-text">MyDetector</span>
          </div>
          <p className="footer-description">
            The free and easy-to-use AI detector for everyone.
          </p>
          <div className="social-icons">
            <a href="#" aria-label="X (Twitter)" className="social-icon">
              <FaXTwitter size={20} />
            </a>
            <a href="#" aria-label="YouTube" className="social-icon youtube">
              <FaYoutube size={22} />
            </a>
            <a href="#" aria-label="Pinterest" className="social-icon pinterest">
              <FaPinterestP size={22} />
            </a>
          </div>
          <p className="footer-email">
            support@mydetector.ai
          </p>
        </div>

        <div className="footer-links-section">
          <h3 className="footer-links-title">Features</h3>
          <ul className="footer-links-list">
            <li><a href="/">AI Humanizer</a></li>
            <li><a href="/plagiarism">Plagiarism Checker</a></li>
            <li><a href="/grammar">AI Grammar Assistant</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-links-section">
          <h3 className="footer-links-title">About Us</h3>
          <ul className="footer-links-list">
            <li><a href="/about">About Us</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-of-use">Terms of Use</a></li>
            <li><a href="/refund-policy">Refund Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
