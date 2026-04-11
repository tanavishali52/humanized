"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import { MdOutlinePalette } from 'react-icons/md';
import LogoIcon from './LogoIcon';

const Navbar: React.FC = () => {
  const [theme, setTheme] = useState<"blue" | "purple" | "mint" | "amber" | "rose">("blue");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme((prev) => {
      const themes: ("blue" | "purple" | "mint" | "amber" | "rose")[] = ["blue", "purple", "mint", "amber", "rose"];
      const nextIndex = (themes.indexOf(prev) + 1) % themes.length;
      const next = themes[nextIndex];
      document.documentElement.setAttribute('data-theme', next);
      return next;
    });
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b"
      style={{ background: 'var(--glass-bg)', borderColor: 'var(--glass-border)', boxShadow: 'var(--glass-shadow)' }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <a className="flex items-center gap-2 sm:gap-3 no-underline group" href="/">
          <LogoIcon size={36} />
          <span className="text-base sm:text-lg font-extrabold tracking-tight group-hover:text-theme transition-colors" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)' }}>Humanize AI</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {['About', 'Plagiarism', 'Grammar', 'Pricing', 'FAQ'].map((label) => {
            const href = label === 'Pricing' ? '/#pricing' : `/${label.toLowerCase()}`;
            return (
              <a key={label} href={href} className="text-sm font-semibold no-underline transition-all duration-300 hover:opacity-80" style={{ color: 'var(--muted)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--primary)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
              >{label}</a>
            );
          })}
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className="md:hidden fixed top-[56px] sm:top-[64px] left-0 w-full flex flex-col p-6 sm:p-8 shadow-lg gap-4 z-50"
            style={{ background: 'white', borderBottom: '1px solid var(--border)' }}
          >
            {['About', 'Plagiarism', 'Grammar', 'Pricing', 'FAQ'].map((label) => {
              const href = label === 'Pricing' ? '/#pricing' : `/${label.toLowerCase()}`;
              return (
                <a key={label} href={href} onClick={() => setIsMenuOpen(false)} className="text-base font-semibold no-underline transition-all duration-300"
                  style={{ color: 'var(--muted)' }}
                >{label}</a>
              );
            })}
          </nav>
        )}

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300"
            style={{ border: '1px solid var(--border)', background: 'white', color: 'var(--muted)' }}
            aria-label="Change theme color"
            onClick={toggleTheme}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.color = 'var(--primary)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)'; }}
          >
            <MdOutlinePalette size={18} />
          </button>

          <button
            className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-[2px] rounded transition-all duration-300" style={{ background: 'var(--text)', transform: isMenuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }}></div>
            <div className="w-5 h-[2px] rounded transition-all duration-300" style={{ background: 'var(--text)', opacity: isMenuOpen ? 0 : 1 }}></div>
            <div className="w-5 h-[2px] rounded transition-all duration-300" style={{ background: 'var(--text)', transform: isMenuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }}></div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
