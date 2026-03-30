import React from 'react';
import PlagiarismChecker from '../components/PlagiarismChecker';

export const metadata = {
  title: "Plagiarism Checker - MyDetector",
  description: "Check the originality of your content with our advanced plagiarism detection tool.",
};

export default function PlagiarismPage() {
  return (
    <main className="min-h-screen w-full pt-32 bg-[radial-gradient(circle_at_top_right,var(--primary-soft),transparent_40%),radial-gradient(circle_at_bottom_left,var(--primary-soft),transparent_40%)]">
      <PlagiarismChecker />
    </main>
  );
}
