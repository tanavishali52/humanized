import React from 'react';
import GrammarChecker from '../components/GrammarChecker';

export const metadata = {
  title: "AI Grammar Checker - MyDetector",
  description: "Improve your writing with our advanced AI grammar and style assistant.",
};

export default function GrammarPage() {
  return (
    <main className="min-h-screen w-full pt-32 bg-[radial-gradient(circle_at_top_right,var(--primary-soft),transparent_40%),radial-gradient(circle_at_bottom_left,var(--primary-soft),transparent_40%)]">
      <GrammarChecker />
    </main>
  );
}
