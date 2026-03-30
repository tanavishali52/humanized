import React from 'react';
import Link from 'next/link';
import { HiCheckBadge, HiOutlineLightBulb, HiOutlineShieldCheck, HiOutlineUserGroup, HiArrowLongLeft } from 'react-icons/hi2';
import './about.css';

const AboutPage: React.FC = () => {
  return (
    <main className="about-container">
      <header className="about-header">
        <h1>Our Story</h1>
        <p className="large-subtitle">Restoring the human touch to digital content.</p>
      </header>

      <div className="about-hero">
        <div className="about-hero-text">
          <h2>Bridging the gap between AI and Authenticity</h2>
          <p>
            Welcome to <strong>MyDetector</strong>. We believe that while AI is a powerful tool, it should never replace the unique voice and creative spark that only a human can provide.
          </p>
          <p>
            In an era of automated content, we provide the tools to ensure your writing remains genuine, resonant, and undetectable by robotic filters.
          </p>
        </div>
        <div className="about-hero-image glass-card" style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <HiOutlineLightBulb size={120} color="var(--primary)" />
        </div>
      </div>

      <div className="about-grid">
        <div className="about-card glass-card">
          <HiOutlineShieldCheck size={40} color="var(--primary)" />
          <h3>Our Mission</h3>
          <p>
            To empower writers, students, and professionals with sophisticated AI-driven tools that protect their creative integrity and ensure their work meets the highest standards of authenticity.
          </p>
        </div>

        <div className="about-card glass-card">
          <HiOutlineUserGroup size={40} color="var(--primary)" />
          <h3>Why Choose Us?</h3>
          <ul className="benefits-list">
            <li><HiCheckBadge className="check-icon" /> <strong>Accuracy:</strong> Powered by the latest neural models.</li>
            <li><HiCheckBadge className="check-icon" /> <strong>Reliability:</strong> Consistent results you can trust.</li>
            <li><HiCheckBadge className="check-icon" /> <strong>Privacy:</strong> Your data is never stored or shared.</li>
          </ul>
        </div>
      </div>

      <div className="about-footer">
        <h2>Ready to humanize your content?</h2>
        <p style={{ marginBottom: '2rem', color: 'var(--muted)' }}>Join thousands of users who trust MyDetector for their writing needs.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link href="/" className="primaryButton" style={{ textDecoration: 'none' }}>Get Started</Link>
          <Link href="/" className="back-link">
            <HiArrowLongLeft /> Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
