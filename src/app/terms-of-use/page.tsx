import React from 'react';

const TermsOfUse: React.FC = () => {
  return (
    <main className="min-h-screen py-32 px-6 bg-[var(--bg)] flex flex-col items-center">
      <div className="max-w-[900px] w-full bg-white rounded-3xl p-14 shadow-[var(--shadow-card)] border border-[var(--border)]">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-[var(--primary)] font-[var(--font-heading)] mb-2">Terms of Use</h1>
          <p className="text-sm text-[var(--muted)] font-medium">Last Updated: March 25, 2026</p>
        </header>

        <article className="flex flex-col gap-6">
          <p className="text-base leading-relaxed text-[var(--muted)]">
            Welcome to <strong className="text-[var(--text)]">MyDetector</strong>. By accessing or using our website and services, you agree to comply with and be bound by the following Terms of Use. Please review these terms carefully.
          </p>

          <h2 className="text-2xl font-bold text-[var(--text)] font-[var(--font-heading)] mt-4">1. Acceptable Use</h2>
          <p className="text-base leading-relaxed text-[var(--muted)]">You agree to use MyDetector only for lawful purposes. You must not:</p>
          <ul className="list-disc pl-6 flex flex-col gap-3">
            <li className="text-base leading-relaxed text-[var(--muted)]">Use the service to generate harmful or illegal content.</li>
            <li className="text-base leading-relaxed text-[var(--muted)]">Attempt to reverse engineer or disrupt the AI models.</li>
            <li className="text-base leading-relaxed text-[var(--muted)]">Bypass any rate limits or security measures.</li>
            <li className="text-base leading-relaxed text-[var(--muted)]">Use the tool for large-scale automated scraping of humanization algorithms.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[var(--text)] font-[var(--font-heading)] mt-4">2. Intellectual Property</h2>
          <p className="text-base leading-relaxed text-[var(--muted)]">
            All content on this website, including text, graphics, logos, and software, is the property of MyDetector or its licensors and is protected by intellectual property laws. You retain ownership of any original text you submit, but you grant MyDetector a license to process it to provide the service.
          </p>

          <h2 className="text-2xl font-bold text-[var(--text)] font-[var(--font-heading)] mt-4">3. Disclaimer of Warranties</h2>
          <p className="text-base leading-relaxed text-[var(--muted)]">
            MyDetector provides its services &quot;as is&quot; and &quot;as available.&quot; While we strive for high accuracy in AI detection and humanization, we do not guarantee that our results will always be 100% accurate or that humanized text will pass all future AI filters.
          </p>

          <h2 className="text-2xl font-bold text-[var(--text)] font-[var(--font-heading)] mt-4">4. Limitation of Liability</h2>
          <p className="text-base leading-relaxed text-[var(--muted)]">
            MyDetector shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services, including lost profits or data loss.
          </p>

          <h2 className="text-2xl font-bold text-[var(--text)] font-[var(--font-heading)] mt-4">5. Modifications</h2>
          <p className="text-base leading-relaxed text-[var(--muted)]">
            We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the service constitutes acceptance of the updated terms.
          </p>
        </article>

        <a href="/" className="mt-8 inline-flex items-center gap-2 text-[var(--muted)] font-semibold no-underline hover:text-[var(--primary)] transition-all duration-200">
          ← Back to Home
        </a>
      </div>
    </main>
  );
};

export default TermsOfUse;
