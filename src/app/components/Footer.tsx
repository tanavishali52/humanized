import React from 'react';
import { FaXTwitter, FaYoutube, FaPinterestP } from 'react-icons/fa6';
import LogoIcon from './LogoIcon';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden" 
      style={{ 
        backgroundColor: 'var(--bg)',
        backgroundImage: 'linear-gradient(to bottom, var(--bg) 0%, rgba(255, 255, 255, 0) 25%, rgba(255, 255, 255, 0) 75%, var(--bg) 100%), url("/ai-human-interface.png")', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center center', 
        backgroundRepeat: 'no-repeat', 
        borderTop: '1px solid var(--border)' 
      }}>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 sm:gap-16 relative z-10">
        {/* Brand Section */}
        <div className="flex flex-col gap-6 md:col-span-2 items-start text-left">
          <div className="flex items-center gap-3">
            <LogoIcon size={44} />
            <span className="text-2xl font-black tracking-tight" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>Humanize Ai</span>
          </div>
          <p className="text-base max-w-sm leading-relaxed font-medium" style={{ color: 'var(--muted)' }}>
            Empowering creativity with the world's most advanced AI detection and humanization tools. 
            Making AI content indistinguishable from human writing.
          </p>
          <div className="flex gap-4 items-center">
            {[ 
              { icon: <FaXTwitter size={20} />, label: "X (Twitter)" },
              { icon: <FaYoutube size={22} />, label: "YouTube" },
              { icon: <FaPinterestP size={22} />, label: "Pinterest" }
            ].map((social, i) => (
              <a key={i} href="#" aria-label={social.label} 
                className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 no-underline hover:bg-theme hover:text-white hover:-translate-y-1 hover:shadow-xl hover:shadow-theme/30 bg-white/50 backdrop-blur-sm"
                style={{ border: '1px solid var(--border)', color: 'var(--muted)' }}>
                {social.icon}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-1.5 mt-2">
            <p className="text-[10px] uppercase tracking-[0.2em] font-black opacity-40" style={{ color: 'var(--text)' }}>Support & Inquiries</p>
            <a href="mailto:support@humanize-ai.io" className="text-[15px] font-bold no-underline transition-colors hover:text-theme" style={{ color: 'var(--text)' }}>support@humanize-ai.io</a>
          </div>
        </div>

        {/* Features Links */}
        <div className="flex flex-col gap-6">
          <h3 className="text-sm font-black uppercase tracking-[0.2em]" style={{ color: 'var(--text)' }}>Features</h3>
          <ul className="list-none p-0 m-0 flex flex-col gap-3.5">
            {[
              { name: 'AI Humanizer', href: '/' },
              { name: 'Plagiarism Checker', href: '/plagiarism' },
              { name: 'AI Grammar Assistant', href: '/grammar' },
              { name: 'FAQ', href: '/faq' }
            ].map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-[15px] font-semibold no-underline transition-all duration-300 hover:text-theme flex items-center gap-2 group" style={{ color: 'var(--muted)' }}>
                  <span className="w-1 h-1 rounded-full bg-theme opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* About Us Links */}
        <div className="flex flex-col gap-6">
          <h3 className="text-sm font-black uppercase tracking-[0.2em]" style={{ color: 'var(--text)' }}>About Us</h3>
          <ul className="list-none p-0 m-0 flex flex-col gap-3.5">
            {[
              { name: 'About Us', href: '/about' },
              { name: 'Privacy Policy', href: '/privacy-policy' },
              { name: 'Terms of Use', href: '/terms-of-use' },
              { name: 'Refund Policy', href: '/refund-policy' }
            ].map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-[15px] font-semibold no-underline transition-all duration-300 hover:text-theme flex items-center gap-2 group" style={{ color: 'var(--muted)' }}>
                  <span className="w-1 h-1 rounded-full bg-theme opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
