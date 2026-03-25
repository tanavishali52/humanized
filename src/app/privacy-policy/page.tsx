import React from 'react';
import '../policy.css';

const PrivacyPolicy: React.FC = () => {
  return (
    <main className="policy-container">
      <div className="policy-card">
        <header className="policy-header">
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last Updated: March 25, 2026</p>
        </header>

        <article className="policy-content">
          <p>
            At <strong>MyDetector</strong>, we value your privacy and are committed to protecting your personal data. This Privacy Policy outlines how we collect, use, and safeguard the text and information you provide when using our AI detection and humanization tools.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            When you use MyDetector, we collect the text you submit for analysis. This text is processed by our AI algorithms to provide detection results or humanized variations. We do not store your original or transformed text beyond the session required to provide the service, unless explicitly requested for training purposes (with your consent).
          </p>

          <h2>2. How We Use Your Data</h2>
          <p>
            The primary purpose of data collection is to:
          </p>
          <ul>
            <li>Provide accurate AI detection scores.</li>
            <li>Generate high-quality humanized text.</li>
            <li>Improve our AI models to stay ahead of evolving AI filters.</li>
            <li>Maintain security and prevent abuse of our services.</li>
          </ul>

          <h2>3. Data Protection</h2>
          <p>
            We implement industry-standard security measures to protect your data from unauthorized access, disclosure, or alteration. All communication between your browser and our servers is encrypted using SSL/TLS technology.
          </p>

          <h2>4. Third-Party Services</h2>
          <p>
            MyDetector may use third-party AI models (such as OpenAI) to assist in text processing. We ensure that these partners adhere to strict privacy standards and do not use your data for their own independent purposes.
          </p>

          <h2>5. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or how we handle your data, please contact us at <a href="mailto:support@mydetector.ai">support@mydetector.ai</a>.
          </p>
        </article>

        <a href="/" className="back-link">
          ← Back to Home
        </a>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
