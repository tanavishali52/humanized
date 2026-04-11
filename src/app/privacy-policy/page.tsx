import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <main className="min-h-screen py-32 px-6 bg-[var(--bg)] flex flex-col items-center">
      <div className="max-w-[900px] w-full bg-white rounded-3xl p-14 shadow-[var(--shadow-card)] border border-[var(--border)]">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-[var(--primary)] font-[var(--font-heading)] mb-2">Privacy Policy</h1>
          <p className="text-sm text-[var(--muted)] font-medium">Last Updated: March 25, 2026</p>
        </header>

        <article className="flex flex-col gap-6">
          <p className="text-base leading-relaxed text-[var(--muted)]">
            At <strong className="text-[var(--text)]">Humanize AI</strong>, we value your privacy and are committed to protecting your personal data. This Privacy Policy outlines how we collect, use, and safeguard the text and information you provide when using our AI detection and humanization tools.
          </p>

          <h2 className="text-2xl font-bold text-[var(--text)] font-[var(--font-heading)] mt-4">1. Information We Collect</h2>
          <p className="text-base leading-relaxed text-[var(--muted)]">
            When you use Humanize AI, we collect the text you submit for analysis. This text is processed by our AI algorithms to provide detection results or humanized variations. We do not store your original or transformed text beyond the session required to provide the service, unless explicitly requested for training purposes (with your consent).
          </p>

          <h2 className="text-2xl font-bold text-[var(--text)] font-[var(--font-heading)] mt-4">2. How We Use Your Data</h2>
          <p className="text-base leading-relaxed text-[var(--muted)]">The primary purpose of data collection is to:</p>
          <ul className="list-disc pl-6 flex flex-col gap-3">
            <li className="text-base leading-relaxed text-[var(--muted)]">Provide accurate AI detection scores.</li>
            <li className="text-base leading-relaxed text-[var(--muted)]">Generate high-quality humanized text.</li>
            <li className="text-base leading-relaxed text-[var(--muted)]">Improve our AI models to stay ahead of evolving AI filters.</li>
            <li className="text-base leading-relaxed text-[var(--muted)]">Maintain security and prevent abuse of our services.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[var(--text)] font-[var(--font-heading)] mt-4">3. Data Protection</h2>
          <p className="text-base leading-relaxed text-[var(--muted)]">
            We implement industry-standard security measures to protect your data from unauthorized access, disclosure, or alteration. All communication between your browser and our servers is encrypted using SSL/TLS technology.
          </p>

          <h2 className="text-2xl font-bold text-[var(--text)] font-[var(--font-heading)] mt-4">4. Third-Party Services</h2>
          <p className="text-base leading-relaxed text-[var(--muted)]">
            Humanize AI may use third-party AI models (such as OpenAI) to assist in text processing. We ensure that these partners adhere to strict privacy standards and do not use your data for their own independent purposes.
          </p>

          <h2 className="text-2xl font-bold text-[var(--text)] font-[var(--font-heading)] mt-4">5. Contact Us</h2>
          <p className="text-base leading-relaxed text-[var(--muted)]">
            If you have any questions about this Privacy Policy or how we handle your data, please contact us at <a href="mailto:support@Humanize AI.ai" className="text-[var(--primary)] font-semibold no-underline hover:underline">support@Humanize AI.ai</a>.
          </p>
        </article>

        <a href="/" className="mt-8 inline-flex items-center gap-2 text-[var(--muted)] font-semibold no-underline hover:text-[var(--primary)] transition-all duration-200">
          ← Back to Home
        </a>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
