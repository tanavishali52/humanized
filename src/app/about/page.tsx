import React from 'react';
import './about.css';

const AboutPage: React.FC = () => {
  return (
    <main className="about-container">
      <div className="about-header">
        <h1>About MyDetector</h1>
      </div>

      <div className="about-card">
        <section className="about-section">
          <h2>Who We Are</h2>
          <div className="divider"></div>
          <p>
            Welcome to <strong>MyDetector</strong>, your trusted companion in maintaining the integrity of your text. We specialize in detecting AI-generated content and providing you with tools to humanize it. Whether you're a writer, student, or professional, our platform is designed to help you create content that resonates with a human audience. For detailed terms of use and important notices, please visit our <a href="#">Terms of Use</a> page.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Mission</h2>
          <div className="divider"></div>
          <p>
            At MyDetector, we aim to bridge the gap between machine-generated and human-created content. With the rise of AI tools, ensuring your writing maintains authenticity and avoids detection by AI filters has never been more critical. Our mission is to empower users with a simple yet powerful solution to refine their text and meet the highest standards of quality and credibility.
          </p>
        </section>

        <section className="about-section">
          <h2>What We Offer</h2>
          <div className="divider"></div>
          <ul className="offer-list">
            <li>
              <strong>AI Detection:</strong> Use our advanced AI detector to analyze your text and identify if it might be flagged as AI-generated.
            </li>
            <li>
              <strong>Humanization Tool:</strong> Click on '<em>Humanize</em>' to transform your text, ensuring it passes all AI detectors while enhancing readability and natural flow.
            </li>
            <li>
              <strong>Seamless Workflow:</strong> Our platform offers a user-friendly interface that simplifies the process of text refinement.
            </li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Why Choose Us?</h2>
          <div className="divider"></div>
          <p className="intro-text">
            We understand the importance of producing content that feels genuine. Here's what sets us apart:
          </p>
          <ul className="benefits-list">
            <li>
              <strong>Accuracy:</strong> Our AI detector is built on the latest technology to provide precise results.
            </li>
            <li>
              <strong>Reliability:</strong> Our humanization tool guarantees your text meets the standards of natural, human-like writing.
            </li>
            <li>
              <strong>User-Centric Design:</strong> We've created a platform that's easy to use for everyone, from students to professionals.
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;
