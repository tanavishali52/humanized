import React from 'react';
import FAQ from '../components/FAQ';

export const metadata = {
  title: "Frequently Asked Questions - MyDetector",
  description: "Find answers to all your questions about our AI Humanizer, Plagiarism Checker, and AI Grammar Assistant.",
};

export default function FAQPage() {
  return (
    <main className="min-h-screen w-full pt-32 bg-[var(--bg)]">
      <FAQ />
    </main>
  );
}
