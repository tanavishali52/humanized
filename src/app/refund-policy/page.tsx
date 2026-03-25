import React from 'react';
import '../policy.css';

const RefundPolicy: React.FC = () => {
  return (
    <main className="policy-container">
      <div className="policy-card">
        <header className="policy-header">
          <h1>Refund Policy</h1>
          <p className="last-updated">Last Updated: March 25, 2026</p>
        </header>

        <article className="policy-content">
          <p>
            At <strong>MyDetector</strong>, we want our customers to be satisfied with our services. However, due to the digital nature of our AI detection and humanization tools, we have established the following Refund Policy.
          </p>

          <h2>1. Digital Products Policy</h2>
          <p>
            Since MyDetector provides immediate access to digital services (quotas and AI processing), all sales are generally final. Once a subscription is activated or quotas are used, we cannot offer a full refund for the processed data.
          </p>

          <h2>2. Eligibility for Refunds</h2>
          <p>
            Refunds may be considered in the following exceptional circumstances:
          </p>
          <ul>
            <li>Technical failure where the service was completely unavailable for more than 48 hours.</li>
            <li>Double-billing due to a payment gateway error.</li>
            <li>Unauthorized transactions (proof required).</li>
          </ul>

          <h2>3. Subscription Cancellations</h2>
          <p>
            You can cancel your subscription at any time through your account settings. Upon cancellation, you will continue to have access to the service until the end of your current billing period, but no further charges will be made.
          </p>

          <h2>4. How to Request a Refund</h2>
          <p>
            To request a refund, please contact our support team at <a href="mailto:support@mydetector.ai">support@mydetector.ai</a> within 7 days of the transaction. Please include your account email and transaction ID.
          </p>

          <h2>5. Processing Time</h2>
          <p>
            Approved refunds will be processed within 5-10 business days and returned to the original payment method used for the purchase.
          </p>
        </article>

        <a href="/" className="back-link">
          ← Back to Home
        </a>
      </div>
    </main>
  );
};

export default RefundPolicy;
