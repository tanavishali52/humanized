import React from 'react';
import PlagiarismChecker from '../components/PlagiarismChecker';
import styles from '../page.module.css';

export const metadata = {
  title: "Plagiarism Checker - MyDetector",
  description: "Check the originality of your content with our advanced plagiarism detection tool.",
};

export default function PlagiarismPage() {
  return (
    <main className={styles.main}>
      <PlagiarismChecker />
    </main>
  );
}
