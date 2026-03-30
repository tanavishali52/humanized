import React from 'react';
import '../policy.css';

const TermsOfUse: React.FC = () => {
  return (
    <main className="policy-container">
      <div className="policy-card">
        <header className="policy-header">
          <h1>Terms of Use</h1>
          <p className="last-updated">Last Updated: March 25, 2026</p>
        </header>

        <article className="policy-content">
          <p>
            Welcome to <strong>MyDetector</strong>. By accessing or using our website and services, you agree to comply with and be bound by the following Terms of Use. Please review these terms carefully.
          </p>

          <h2>1. Acceptable Use</h2>
          <p>
            You agree to use MyDetector only for lawful purposes. You must not:
          </p>
          <ul>
            <li>Use the service to generate harmful or illegal content.</li>
            <li>Attempt to reverse engineer or disrupt the AI models.</li>
            <li>Bypass any rate limits or security measures.</li>
            <li>Use the tool for large-scale automated scraping of humanization algorithms.</li>
          </ul>

          <h2>2. Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, and software, is the property of MyDetector or its licensors and is protected by intellectual property laws. You retain ownership of any original text you submit, but you grant MyDetector a license to process it to provide the service.
          </p>

          <h2>3. Disclaimer of Warranties</h2>
          <p>
            MyDetector provides its services &quot;as is&quot; and &quot;as available.&quot; While we strive for high accuracy in AI detection and humanization, we do not guarantee that our results will always be 100% accurate or that humanized text will pass all future AI filters.
          </p>

          <h2>4. Limitation of Liability</h2>
          <p>
            MyDetector shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services, including lost profits or data loss.
          </p>

          <h2>5. Modifications</h2>
          <p>
            We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the service constitutes acceptance of the updated terms.
          </p>
        </article>

        <a href="/" className="back-link">
          ← Back to Home
        </a>
      </div>
    </main>
  );
};

export default TermsOfUse;
