import React from 'react';

const RefundPolicy: React.FC = () => {
  return (
    <main className="min-h-screen py-32 px-6 bg-[var(--bg)] flex flex-col items-center">
      <div className="max-w-[900px] w-full bg-white rounded-3xl p-14 shadow-[var(--shadow-card)] border border-[var(--border)]">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-[var(--primary)] font-[var(--font-heading)] mb-2">Refund Policy</h1>
          <p className="text-sm text-[var(--muted)] font-medium">Last Updated: March 25, 2026</p>
        </header>

        <article className="flex flex-col gap-6">
          <p className="text-base leading-relaxed text-[var(--muted)]">
            At <strong className="text-[var(--text)]">Humanize AI</strong>, we want our customers to be satisfied with our services. However, due to the digital nature of our AI detection and humanization tools, we have established the following Refund Policy.
          </p>

          <h2 className="text-2xl font-bold text-[var(--text)] font-[var(--font-heading)] mt-4">1. Digital Products Policy</h2>
          <p className="text-base leading-relaxed text-[var(--muted)]">
            Since Humanize AI provides immediate access to digital services (quotas and AI processing), all sales are generally final. Once a subscription is activated or quotas are used, we cannot offer a full refund for the processed data.
          </p>

          <h2 className="text-2xl font-bold text-[var(--text)] font-[var(--font-heading)] mt-4">2. Eligibility for Refunds</h2>
          <p className="text-base leading-relaxed text-[var(--muted)]">Refunds may be considered in the following exceptional circumstances:</p>
          <ul className="list-disc pl-6 flex flex-col gap-3">
            <li className="text-base leading-relaxed text-[var(--muted)]">Technical failure where the service was completely unavailable for more than 48 hours.</li>
            <li className="text-base leading-relaxed text-[var(--muted)]">Double-billing due to a payment gateway error.</li>
            <li className="text-base leading-relaxed text-[var(--muted)]">Unauthorized transactions (proof required).</li>
          </ul>

          <h2 className="text-2xl font-bold text-[var(--text)] font-[var(--font-heading)] mt-4">3. Subscription Cancellations</h2>
          <p className="text-base leading-relaxed text-[var(--muted)]">
            You can cancel your subscription at any time through your account settings. Upon cancellation, you will continue to have access to the service until the end of your current billing period, but no further charges will be made.
          </p>

          <h2 className="text-2xl font-bold text-[var(--text)] font-[var(--font-heading)] mt-4">4. How to Request a Refund</h2>
          <p className="text-base leading-relaxed text-[var(--muted)]">
            To request a refund, please contact our support team at <a href="mailto:support@Humanize AI.ai" className="text-[var(--primary)] font-semibold no-underline hover:underline">support@Humanize AI.ai</a> within 7 days of the transaction. Please include your account email and transaction ID.
          </p>

          <h2 className="text-2xl font-bold text-[var(--text)] font-[var(--font-heading)] mt-4">5. Processing Time</h2>
          <p className="text-base leading-relaxed text-[var(--muted)]">
            Approved refunds will be processed within 5-10 business days and returned to the original payment method used for the purchase.
          </p>
        </article>

        <a href="/" className="mt-8 inline-flex items-center gap-2 text-[var(--muted)] font-semibold no-underline hover:text-[var(--primary)] transition-all duration-200">
          ← Back to Home
        </a>
      </div>
    </main>
  );
};

export default RefundPolicy;
