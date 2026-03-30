import React from 'react';
import Link from 'next/link';
import { HiCheckBadge, HiOutlineLightBulb, HiOutlineShieldCheck, HiOutlineUserGroup, HiArrowLongLeft } from 'react-icons/hi2';

const AboutPage: React.FC = () => {
  return (
    <main className="min-h-screen pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6" style={{ background: 'var(--bg)' }}>
      <header className="text-center mb-12 sm:mb-20 animate-fade-in">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold gradient-heading tracking-tighter mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
          Our Story
        </h1>
        <p className="text-lg sm:text-2xl font-medium" style={{ color: 'var(--muted)' }}>Restoring the human touch to digital content.</p>
      </header>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-20">
        <div className="flex flex-col justify-center gap-4 sm:gap-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>
            Bridging the gap between AI and Authenticity
          </h2>
          <p className="text-sm sm:text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
            Welcome to <strong style={{ color: 'var(--text)' }}>MyDetector</strong>. We believe that while AI is a powerful tool, it should never replace the unique voice and creative spark that only a human can provide.
          </p>
          <p className="text-sm sm:text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
            In an era of automated content, we provide the tools to ensure your writing remains genuine, resonant, and undetectable by robotic filters.
          </p>
        </div>
        <div className="glass-card h-[200px] sm:h-[300px] flex items-center justify-center">
          <HiOutlineLightBulb size={80} className="text-theme sm:text-[120px]" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-20">
        <div className="glass-card p-6 sm:p-10 flex flex-col gap-3 sm:gap-4">
          <HiOutlineShieldCheck size={32} className="text-theme" />
          <h3 className="text-xl sm:text-2xl font-bold" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>Our Mission</h3>
          <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            To empower writers, students, and professionals with sophisticated AI-driven tools that protect their creative integrity and ensure their work meets the highest standards of authenticity.
          </p>
        </div>
        <div className="glass-card p-6 sm:p-10 flex flex-col gap-3 sm:gap-4">
          <HiOutlineUserGroup size={32} className="text-theme" />
          <h3 className="text-xl sm:text-2xl font-bold" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>Why Choose Us?</h3>
          <ul className="list-none p-0 m-0 flex flex-col gap-2 sm:gap-3">
            <li className="flex items-center gap-2 sm:gap-3 text-sm" style={{ color: 'var(--muted)' }}><HiCheckBadge className="text-theme text-lg sm:text-xl flex-shrink-0" /> <strong style={{ color: 'var(--text)' }}>Accuracy:</strong> Powered by the latest neural models.</li>
            <li className="flex items-center gap-2 sm:gap-3 text-sm" style={{ color: 'var(--muted)' }}><HiCheckBadge className="text-theme text-lg sm:text-xl flex-shrink-0" /> <strong style={{ color: 'var(--text)' }}>Reliability:</strong> Consistent results you can trust.</li>
            <li className="flex items-center gap-2 sm:gap-3 text-sm" style={{ color: 'var(--muted)' }}><HiCheckBadge className="text-theme text-lg sm:text-xl flex-shrink-0" /> <strong style={{ color: 'var(--text)' }}>Privacy:</strong> Your data is never stored or shared.</li>
          </ul>
        </div>
      </div>

      <div className="text-center py-10 sm:py-16 max-w-3xl mx-auto" style={{ borderTop: '1px solid var(--border)' }}>
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-4" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>Ready to humanize your content?</h2>
        <p className="mb-6 sm:mb-8 text-sm sm:text-base" style={{ color: 'var(--muted)' }}>Join thousands of users who trust MyDetector for their writing needs.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/" className="px-6 sm:px-8 py-3 sm:py-4 bg-theme text-white rounded-2xl font-bold text-sm sm:text-base no-underline shadow-theme hover:-translate-y-0.5 transition-all duration-300">
            Get Started
          </Link>
          <Link href="/" className="flex items-center gap-2 font-semibold text-sm no-underline transition-all duration-300" style={{ color: 'var(--muted)' }}>
            <HiArrowLongLeft /> Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
