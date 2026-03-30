import React from 'react';
import { FaXTwitter, FaYoutube, FaPinterestP } from 'react-icons/fa6';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white py-12 sm:py-16 px-4 sm:px-6" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
        {/* Brand Section */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-theme flex items-center justify-center relative">
              <span className="text-white text-xs font-extrabold tracking-wider" style={{ fontFamily: 'var(--font-heading)' }}>AI</span>
              <div className="absolute -bottom-1 -right-1 w-2.5 h-5 rounded-full rotate-45" style={{ border: '2px solid var(--primary)' }}></div>
            </div>
            <span className="text-lg font-extrabold tracking-tight" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>MyDetector</span>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>The free and easy-to-use AI detector for everyone.</p>
          <div className="flex gap-3">
            <a href="#" aria-label="X (Twitter)" className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 no-underline"
              style={{ border: '1px solid var(--border)', color: 'var(--muted)' }}>
              <FaXTwitter size={20} />
            </a>
            <a href="#" aria-label="YouTube" className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 no-underline"
              style={{ border: '1px solid var(--border)', color: 'var(--muted)' }}>
              <FaYoutube size={22} />
            </a>
            <a href="#" aria-label="Pinterest" className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 no-underline"
              style={{ border: '1px solid var(--border)', color: 'var(--muted)' }}>
              <FaPinterestP size={22} />
            </a>
          </div>
          <p className="text-xs" style={{ color: 'var(--muted)' }}>support@mydetector.ai</p>
        </div>

        {/* Features Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xs font-extrabold uppercase tracking-widest" style={{ color: 'var(--muted)' }}>Features</h3>
          <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
            <li><a href="/" className="text-sm font-medium no-underline transition-all duration-300" style={{ color: 'var(--text)' }}>AI Humanizer</a></li>
            <li><a href="/plagiarism" className="text-sm font-medium no-underline transition-all duration-300" style={{ color: 'var(--text)' }}>Plagiarism Checker</a></li>
            <li><a href="/grammar" className="text-sm font-medium no-underline transition-all duration-300" style={{ color: 'var(--text)' }}>AI Grammar Assistant</a></li>
            <li><a href="/faq" className="text-sm font-medium no-underline transition-all duration-300" style={{ color: 'var(--text)' }}>FAQ</a></li>
          </ul>
        </div>

        {/* About Us Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xs font-extrabold uppercase tracking-widest" style={{ color: 'var(--muted)' }}>About Us</h3>
          <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
            <li><a href="/about" className="text-sm font-medium no-underline transition-all duration-300" style={{ color: 'var(--text)' }}>About Us</a></li>
            <li><a href="/privacy-policy" className="text-sm font-medium no-underline transition-all duration-300" style={{ color: 'var(--text)' }}>Privacy Policy</a></li>
            <li><a href="/terms-of-use" className="text-sm font-medium no-underline transition-all duration-300" style={{ color: 'var(--text)' }}>Terms of Use</a></li>
            <li><a href="/refund-policy" className="text-sm font-medium no-underline transition-all duration-300" style={{ color: 'var(--text)' }}>Refund Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
